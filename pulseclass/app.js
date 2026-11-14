import { zoneFor, zoneForPct, maxHrForAge, maxHrFor, validMaxHr } from './zones.js';

const $ = id => document.getElementById(id);
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};

// A copy of this page hosted somewhere else (GitHub Pages) is "standalone": it
// asks for the server instead of using the one it was loaded from.
const standalone = 'standalone' in document.documentElement.dataset;
const params = new URLSearchParams(location.search);

/** "https://gym.example.com/coach" → "gym.example.com". */
function cleanServer(text) {
  return (text ?? '').trim().replace(/^(https?|wss?):\/\//i, '').replace(/[/?#].*$/, '').toLowerCase();
}
const isLocalHost = host => /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host);

if (standalone) {
  $('serverField').classList.remove('hidden');
  $('server').value = cleanServer(params.get('server') ?? store.get('pc.server'));
  // The coach dashboard lives on the server, not here.
  const showCoachLink = () => {
    const server = cleanServer($('server').value);
    $('coachLink').classList.toggle('hidden', !server);
    $('coachLink').href = server ? `${isLocalHost(server) ? 'http' : 'https'}://${server}/coach` : '#';
  };
  $('server').addEventListener('input', showCoachLink);
  showCoachLink();
}

// ---------- hand over to the phone app ----------

// On a phone the app does more than this page can: iPhone browsers have no
// Bluetooth at all, and on Android the app keeps streaming with the screen off.
// The link opens the app with this class's code and server filled in.
const ua = navigator.userAgent;
const isAndroid = /Android/.test(ua);
// iPads say they're Macs; a "Mac" with a touch screen is an iPad.
const isIOS = !isAndroid && (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

function appLink() {
  const host = standalone ? cleanServer($('server').value) : location.host;
  const origin = !host ? '' : standalone ? `${isLocalHost(host) ? 'http' : 'https'}://${host}` : location.origin;
  const code = $('code').value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const query = new URLSearchParams({ ...(code ? { code } : {}), ...(origin ? { server: origin } : {}) }).toString();
  return `pulseclass://join${query ? `?${query}` : ''}`;
}

if (isIOS || isAndroid) {
  $('appCard').classList.remove('hidden');
  $('appHint').textContent = isIOS
    ? 'iPhone browsers can’t connect to heart rate monitors, so use the PulseClass app. It opens with this class filled in. Don’t have it yet? Ask your coach for the install link.'
    : 'The PulseClass app keeps sending your heart rate with the screen off. It opens with this class filled in. Don’t have it? You can carry on here in Chrome.';
  // Built on tap, so it has whatever code and server are on the page by then.
  $('appOpenBtn').addEventListener('click', () => { $('appOpenBtn').href = appLink(); });
}

// ---------- profile ----------

// This id is the athlete's only credential with the server, so it must be
// unguessable. getRandomValues works on plain http too (randomUUID doesn't).
let athleteId = store.get('pc.id');
if (!athleteId || athleteId.length < 16) {
  athleteId = Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(16).padStart(2, '0')).join('');
  store.set('pc.id', athleteId);
}
// The server gives us a separate public id; it's how we spot ourselves in the class view.
let myPublicId = null;

$('name').value = store.get('pc.name') ?? '';
$('age').value = store.get('pc.age') ?? '';
$('maxHr').value = store.get('pc.maxHr') ?? '';
// A max the server raised because this athlete's heart rate stayed above the one we had.
let learnedMax = validMaxHr(store.get('pc.learnedMax'));

const profile = () => ({
  name: $('name').value.trim() || 'Athlete',
  maxHr: maxHrFor({ age: $('age').value, entered: $('maxHr').value, learned: learnedMax }),
});

function updateMaxHint() {
  const age = $('age').value;
  const entered = validMaxHr($('maxHr').value);
  const base = entered ?? maxHrForAge(age);
  const max = profile().maxHr;
  $('maxHrHint').textContent = max > base
    ? `Max heart rate: ${max} BPM. Raised from ${base} because your heart rate stayed above it.`
    : entered ? `Using your max heart rate: ${max} BPM.`
    : age ? `Estimated max heart rate: ${max} BPM (220 − age). Know your real max? Enter it under Max HR.`
    : 'Add your age so zones match you (max heart rate is estimated as 220 − age), or enter your max.';
}
updateMaxHint();

/** The server raised our max heart rate (see learnMaxHr in server.js). */
function learnMax(value) {
  const max = validMaxHr(value);
  if (!max || max <= profile().maxHr) return;
  learnedMax = max;
  store.set('pc.learnedMax', String(max));
  updateMaxHint();
  if (bpm) render(bpm);
}

for (const id of ['name', 'age', 'maxHr']) {
  $(id).addEventListener('change', () => {
    store.set(`pc.${id}`, $(id).value.trim());
    if (id !== 'name') {
      // Their own numbers replace what was learned.
      learnedMax = null;
      store.del('pc.learnedMax');
    }
    updateMaxHint();
    if (bpm) render(bpm);
    classConn?.sendHello();
  });
}

// ---------- live display ----------

let bpm = null;

function render(value) {
  $('bpm').textContent = value ?? '--';
  if (value == null) {
    $('zone').textContent = monitor ? 'Waiting for heart rate…' : 'No monitor connected';
    $('zone').style.background = '';
    $('liveCard').style.background = '';
    return;
  }
  const z = zoneFor(value, profile().maxHr);
  $('zone').textContent = `Zone ${z.zone} · ${z.name} · ${z.pct}%`;
  $('zone').style.background = z.color;
  $('liveCard').style.background = `color-mix(in srgb, ${z.color} 18%, var(--panel))`;
  const heart = $('heart');
  heart.classList.remove('beat');
  void heart.offsetWidth;
  heart.classList.add('beat');
}

function onHeartRate(value) {
  bpm = value;
  render(value);
  classConn?.sendHr(value);
}

// ---------- monitors ----------

let monitor = null; // { stop() }

function setMonitorStatus(text, state) {
  $('monitorStatus').textContent = text;
  $('monitorDot').className = 'dot' + (state ? ' ' + state : '');
  const connected = !!monitor;
  updateWakeLock();
  $('connectBtn').classList.toggle('hidden', connected);
  $('simulateBtn').classList.toggle('hidden', connected);
  $('disconnectBtn').classList.toggle('hidden', !connected);
}

// Parse the standard Bluetooth Heart Rate Measurement characteristic (0x2A37).
// Flags: bit 0 = 16-bit value, bit 1 = skin contact, bit 2 = contact supported.
function parseHeartRate(dataView) {
  const flags = dataView.getUint8(0);
  const bpm = flags & 0x01 ? dataView.getUint16(1, true) : dataView.getUint8(1);
  const noContact = (flags & 0x04) !== 0 && (flags & 0x02) === 0;
  return { bpm, noContact };
}

// ---------- keep the screen awake ----------
// The page stops sending when the phone sleeps, so hold a wake lock while a
// monitor is connected. Browsers drop it when the tab is hidden; take it back.

let wakeLock = null;
async function updateWakeLock() {
  const want = !!monitor && document.visibilityState === 'visible';
  try {
    if (want && !wakeLock && 'wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    } else if (!want && wakeLock) {
      await wakeLock.release();
      wakeLock = null;
    }
  } catch { wakeLock = null; } // not allowed (e.g. low battery); nothing else to do
}
document.addEventListener('visibilitychange', updateWakeLock);

async function connectBluetooth() {
  $('classError').classList.add('hidden');
  let device;
  try {
    device = await navigator.bluetooth.requestDevice({ filters: [{ services: ['heart_rate'] }] });
  } catch (err) {
    if (err.name !== 'NotFoundError') setMonitorStatus(`Couldn't connect: ${err.message}`, 'warn');
    return; // user cancelled the picker
  }

  let stopped = false;
  let warnedContact = false;
  const onValue = e => {
    const { bpm: value, noContact } = parseHeartRate(e.target.value);
    if (noContact) {
      if (!warnedContact) setMonitorStatus("Your strap isn't touching skin. Wet its sensors and tighten it.", 'warn');
      warnedContact = true;
      bpm = null;
      render(null);
      return;
    }
    if (warnedContact) setMonitorStatus(`Connected to ${device.name ?? 'monitor'}`, 'on');
    warnedContact = false;
    if (value >= 25 && value <= 250) onHeartRate(value);
  };

  async function attach() {
    setMonitorStatus(`Connecting to ${device.name ?? 'monitor'}…`, 'warn');
    const gatt = await device.gatt.connect();
    const service = await gatt.getPrimaryService('heart_rate');
    const ch = await service.getCharacteristic('heart_rate_measurement');
    ch.addEventListener('characteristicvaluechanged', onValue);
    await ch.startNotifications();
    setMonitorStatus(`Connected to ${device.name ?? 'monitor'}`, 'on');
  }

  device.addEventListener('gattserverdisconnected', async () => {
    if (stopped) return;
    setMonitorStatus('Monitor disconnected. Reconnecting…', 'warn');
    for (let i = 0; i < 5 && !stopped; i++) {
      await new Promise(r => setTimeout(r, 1500 * (i + 1)));
      try { await attach(); return; } catch {}
    }
    if (!stopped) setMonitorStatus('Lost the monitor. Tap Connect to try again.', 'warn');
  });

  monitor = {
    stop() {
      stopped = true;
      if (device.gatt.connected) device.gatt.disconnect();
    },
  };
  try {
    await attach();
  } catch (err) {
    monitor = null;
    setMonitorStatus(`Couldn't connect: ${err.message}`, 'warn');
  }
}

function startSimulator() {
  let value = 72 + Math.random() * 10;
  let target = value;
  const timer = setInterval(() => {
    if (Math.random() < 0.05) target = 80 + Math.random() * 100;
    value += (target - value) * 0.08 + (Math.random() - 0.5) * 3;
    onHeartRate(Math.round(value));
  }, 1000);
  monitor = { stop: () => clearInterval(timer) };
  setMonitorStatus('Simulated monitor', 'on');
}

function disconnectMonitor() {
  monitor?.stop();
  monitor = null;
  bpm = null;
  render(null);
  setMonitorStatus('Not connected');
}

if (!('bluetooth' in navigator)) {
  $('connectBtn').disabled = true;
  $('btUnsupported').classList.remove('hidden');
}
$('connectBtn').onclick = connectBluetooth;
$('simulateBtn').onclick = startSimulator;
$('disconnectBtn').onclick = disconnectMonitor;

// ---------- class connection ----------

let classConn = null;

class ClassConnection {
  constructor(code, server) {
    this.code = code;
    this.server = server;
    this.closed = false;
    this.retry = 0;
    this.open();
  }

  open() {
    // A secure page can only open secure sockets (browsers allow localhost as the exception).
    const secure = location.protocol === 'https:' && !(standalone && isLocalHost(this.server));
    this.ws = new WebSocket(`${secure ? 'wss' : 'ws'}://${this.server}/ws`);
    this.ws.onopen = () => { this.retry = 0; this.sendHello(); };
    this.ws.onmessage = e => {
      let msg;
      try { msg = JSON.parse(e.data); } catch { return; }
      if (msg.t === 'joined') {
        myPublicId = msg.you ?? null;
        store.set('pc.code', msg.code);
        this.wasJoined = true;
        this.lost = false;
        showJoined(`Streaming to ${msg.name} (${msg.code})`, 'on');
        classView.setEnabled(msg.classView);
        showWorkout(msg.workout);
        if (bpm) this.sendHr(bpm);
      } else if (msg.t === 'settings') {
        classView.setEnabled(msg.classView);
      } else if (msg.t === 'class') {
        classView.update(msg.athletes);
      } else if (msg.t === 'me') {
        learnMax(msg.maxHr);
        showEffort(msg);
        showWorkout(msg.workout);
      } else if (msg.t === 'workout') {
        showWorkout(msg.workout);
      } else if (msg.t === 'error' && msg.reason === 'class not found' && this.wasJoined) {
        // The server restarted and lost the class; the coach can start it again
        // with the same code. Keep checking instead of giving up.
        this.retry = Math.max(this.retry, 3);
        this.lost = true;
        showJoined('This class has stopped on the server. Waiting for your coach to start it again…', 'warn');
      } else if (msg.t === 'error') {
        this.close();
        showJoinError(msg.error);
      }
    };
    this.ws.onclose = () => {
      if (this.closed) return;
      if (!this.lost) showJoined('Connection lost. Reconnecting…', 'warn');
      setTimeout(() => !this.closed && this.open(), Math.min(1000 * 2 ** this.retry++, 15000));
    };
  }

  send(msg) {
    if (this.ws.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(msg));
  }

  sendHello() {
    this.send({ t: 'hello', role: 'athlete', code: this.code, id: athleteId, share: $('share').checked, ...profile() });
  }

  sendHr(value) {
    this.send({ t: 'hr', bpm: value });
  }

  leave() {
    this.send({ t: 'leave' });
    this.close();
  }

  close() {
    this.closed = true;
    this.ws.close();
  }
}

// ---------- class view ----------

const classView = {
  enabled: false,
  athletes: [],
  board: 'now',

  setEnabled(on) { this.enabled = !!on; this.render(); },
  update(list) { this.athletes = list ?? []; this.render(); },
  reset() { this.enabled = false; this.athletes = []; this.render(); },

  render() {
    const sharing = $('share').checked;
    const show = !!classConn && sharing;
    $('classViewCard').classList.toggle('hidden', !show);
    if (!show) return;
    const board = $('board');
    board.innerHTML = '';
    if (!this.enabled) {
      $('boardNote').textContent = 'Your coach has turned the class view off for this class.';
      return;
    }
    const key = this.board === 'avg' ? 'avgPct' : this.board === 'points' ? 'points' : 'pct';
    const list = this.athletes.filter(a => a[key] != null).sort((a, b) => b[key] - a[key] || a.name.localeCompare(b.name));
    const top = Math.max(1, ...list.map(a => a.points ?? 0));
    list.forEach((a, i) => {
      const z = zoneForPct(this.board === 'points' ? a.pct : a[key]);
      const li = document.createElement('li');
      const me = myPublicId != null && a.id === myPublicId;
      li.classList.toggle('me', me);
      li.style.setProperty('--c', z.color);
      li.innerHTML = `<span class="rk"></span><span class="nm"></span><span class="val"></span><span class="bar"><i></i></span>`;
      li.querySelector('.rk').textContent = i + 1;
      li.querySelector('.nm').textContent = me ? `${a.name} (you)` : a.name;
      const small = document.createElement('small');
      small.textContent = this.board === 'now' ? `${a.bpm} bpm` : this.board === 'avg' ? 'avg' : 'pts';
      li.querySelector('.val').replaceChildren(this.board === 'points' ? `${a.points}` : `${a[key]}%`, small);
      const width = this.board === 'points' ? (a.points / top) * 100 : a[key];
      li.querySelector('i').style.width = `${Math.min(100, Math.max(0, width))}%`;
      board.append(li);
    });
    $('boardNote').textContent = list.length
      ? `${list.length} sharing · ranked by ${this.board === 'points' ? 'effort points this session' : `${this.board === 'avg' ? 'session average' : 'current'} % of max heart rate`}`
      : 'Nobody is sharing a live heart rate yet. You appear here once your monitor is sending.';
  },
};

$('share').checked = store.get('pc.share') === '1';
$('share').addEventListener('change', () => {
  store.set('pc.share', $('share').checked ? '1' : '0');
  if (!$('share').checked) classView.athletes = [];
  classConn?.sendHello();
  classView.render();
});
for (const b of document.querySelectorAll('[data-board]')) {
  b.onclick = () => {
    classView.board = b.dataset.board;
    document.querySelectorAll('[data-board]').forEach(x => {
      x.classList.toggle('active', x === b);
      x.setAttribute('aria-pressed', String(x === b));
    });
    classView.render();
  };
}

function showJoined(text, state) {
  $('joinForm').classList.add('hidden');
  $('joinedBox').classList.remove('hidden');
  $('classError').classList.add('hidden');
  $('classStatus').textContent = text;
  $('classDot').className = 'dot ' + state;
}

// Your own effort points and time in each zone, from the server every 2 s.
// The coach's workout clock. Points only count while it's running.
let workoutState = null;
let workoutAt = 0;
function showWorkout(w) {
  if (!w) return;
  workoutState = w;
  workoutAt = Date.now();
  renderWorkout();
}
function renderWorkout() {
  const w = workoutState;
  if (!w || $('joinedBox').classList.contains('hidden')) return $('workoutNote').classList.add('hidden');
  const elapsed = Math.min(w.elapsedMs + (w.state === 'running' ? Date.now() - workoutAt : 0), w.durationMs ?? Infinity);
  const clock = ms => { const s = Math.max(0, Math.floor(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
  const left = w.durationMs != null ? ` · ${clock(w.durationMs - elapsed)} left` : ` · ${clock(elapsed)}`;
  $('workoutNote').textContent = {
    ready: 'The workout hasn’t started. Points start counting when your coach starts it.',
    running: `Workout running${left}. Points are counting.`,
    paused: 'Workout paused. Points aren’t counting.',
    done: 'Workout finished. Your points are final.',
  }[w.state] ?? '';
  $('workoutNote').className = `workout-note ${w.state}`;
}
setInterval(renderWorkout, 1000);

function showEffort({ points, zoneSec }) {
  $('effort').classList.remove('hidden');
  $('myPoints').textContent = points ?? 0;
  const total = (zoneSec ?? []).reduce((x, y) => x + y, 0);
  const strip = $('zoneStrip');
  strip.replaceChildren(...(zoneSec ?? []).map((sec, zone) => {
    const seg = document.createElement('span');
    seg.style.flexGrow = total ? sec : zone === 0 ? 1 : 0;
    seg.style.background = `var(--z${zone})`;
    seg.title = `Zone ${zone}: ${Math.round(sec / 60)} min`;
    return seg;
  }));
}

function showJoinError(text) {
  $('effort').classList.add('hidden');
  classConn = null;
  classView.reset();
  store.del('pc.code');
  $('joinForm').classList.remove('hidden');
  $('joinedBox').classList.add('hidden');
  $('classError').textContent = text;
  $('classError').classList.remove('hidden');
}

function join(code) {
  code = code.toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (!code) return showJoinError('Enter the class code from your coach.');
  if (!$('name').value.trim()) {
    $('name').focus();
    return showJoinError('Add your name first so your coach knows who you are.');
  }
  let server = location.host;
  if (standalone) {
    server = cleanServer($('server').value);
    if (!server) {
      $('server').focus();
      return showJoinError('Add the server: the web address your coach uses for PulseClass.');
    }
    $('server').value = server;
    store.set('pc.server', server);
  }
  store.set('pc.name', $('name').value.trim());
  classConn?.close();
  showJoined('Joining…', 'warn');
  classConn = new ClassConnection(code, server);
}

$('joinBtn').onclick = () => join($('code').value);
$('code').addEventListener('keydown', e => { if (e.key === 'Enter') join($('code').value); });
$('leaveBtn').onclick = () => {
  $('effort').classList.add('hidden');
  classConn?.leave();
  classConn = null;
  classView.reset();
  store.del('pc.code');
  $('joinForm').classList.remove('hidden');
  $('joinedBox').classList.add('hidden');
};

// Prefill from ?code= links, or rejoin the last class.
const linkCode = params.get('code');
if (linkCode) $('code').value = linkCode.toUpperCase();
const savedCode = store.get('pc.code');
if (savedCode && (!linkCode || linkCode.toUpperCase() === savedCode) && $('name').value) join(savedCode);
