import React, { useEffect } from 'react';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #07070B;
    --text: #F4F4F7;
    --muted: #8E8EA3;
    --dim: #5C5C70;
    --line: rgba(255,255,255,0.09);
    --glass: rgba(255,255,255,0.035);
    --glass-hi: rgba(255,255,255,0.06);
    --v: #8B5CF6;
    --c: #22D3EE;
    --max: 1080px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* ---- ambient background ---- */
  .ry-aurora { position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden; }
  .ry-blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.5; }
  .ry-blob.b1 {
    width: 620px; height: 620px; top: -220px; left: -140px;
    background: radial-gradient(circle, #7C3AED, transparent 68%);
    animation: drift1 24s ease-in-out infinite;
  }
  .ry-blob.b2 {
    width: 560px; height: 560px; top: -120px; right: -160px;
    background: radial-gradient(circle, #0891B2, transparent 68%);
    animation: drift2 30s ease-in-out infinite;
  }
  .ry-blob.b3 {
    width: 700px; height: 700px; top: 44%; left: 32%;
    background: radial-gradient(circle, #DB2777, transparent 70%);
    opacity: 0.24;
    animation: drift3 36s ease-in-out infinite;
  }
  @keyframes drift1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(90px,70px) scale(1.12)} }
  @keyframes drift2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-80px,110px) scale(1.08)} }
  @keyframes drift3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-120px,-70px) scale(1.15)} }

  .ry-grain {
    position: fixed; inset: 0; z-index: 1; pointer-events: none; opacity: 0.16;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
  }

  .ry-page { position: relative; z-index: 2; }
  .ry-wrap { max-width: var(--max); margin: 0 auto; padding: 0 26px; }

  /* ---- hero ---- */
  .ry-hero { padding: 108px 0 76px; text-align: center; }

  /* only the gradient ring spins -- the photo underneath stays upright */
  .ry-avatar-ring {
    position: relative; width: 132px; height: 132px; margin: 0 auto 30px;
  }
  .ry-avatar-ring::before {
    content: ''; position: absolute; inset: -3px; border-radius: 50%;
    background: conic-gradient(from 180deg, var(--v), var(--c), #DB2777, var(--v));
    animation: spin 9s linear infinite;
  }
  .ry-avatar-ring img {
    position: relative; width: 100%; height: 100%; border-radius: 50%;
    object-fit: cover; display: block;
    border: 3px solid var(--bg); background: var(--bg);
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .ry-hero h1 {
    font-size: clamp(2.9rem, 9vw, 5.6rem);
    font-weight: 800; letter-spacing: -0.045em; line-height: 0.96;
    background: linear-gradient(135deg, #FFFFFF 18%, #C4B5FD 52%, #67E8F9 92%);
    -webkit-background-clip: text; background-clip: text;
    -webkit-text-fill-color: transparent; color: transparent;
  }
  .ry-tag {
    margin-top: 22px; font-size: clamp(1rem, 2.1vw, 1.2rem);
    color: var(--muted); max-width: 46ch; margin-inline: auto; line-height: 1.65;
  }
  .ry-tag strong { color: var(--text); font-weight: 600; }

  .ry-stats {
    display: flex; justify-content: center; flex-wrap: wrap;
    gap: 14px; margin-top: 42px;
  }
  .ry-stat {
    background: var(--glass); border: 1px solid var(--line);
    border-radius: 14px; padding: 15px 26px; min-width: 118px;
    backdrop-filter: blur(12px);
  }
  .ry-stat b {
    display: block; font-size: 1.7rem; font-weight: 800; letter-spacing: -0.03em;
    background: linear-gradient(135deg, #FFF, #A5B4FC);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  .ry-stat span {
    font-size: 0.7rem; letter-spacing: 0.11em; text-transform: uppercase; color: var(--dim);
  }

  /* ---- sections ---- */
  .ry-sec { margin-top: 76px; }
  .ry-sec-head { display: flex; align-items: center; gap: 16px; margin-bottom: 22px; }
  .ry-sec-head h2 {
    font-size: 0.76rem; font-weight: 700; letter-spacing: 0.19em;
    text-transform: uppercase; color: var(--muted); white-space: nowrap;
  }
  .ry-sec-head .rule { flex: 1; height: 1px; background: linear-gradient(90deg, var(--line), transparent); }
  .ry-sec-head .count { font-size: 0.72rem; color: var(--dim); font-variant-numeric: tabular-nums; }

  .ry-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(262px, 1fr)); gap: 15px; }
  .ry-grid.feat { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px; }

  /* ---- cards ---- */
  .ry-card {
    position: relative; display: flex; flex-direction: column;
    background: var(--glass); border: 1px solid var(--line); border-radius: 18px;
    padding: 24px; text-decoration: none; color: inherit; overflow: hidden;
    backdrop-filter: blur(12px);
    transition: transform .3s cubic-bezier(.22,1,.36,1), border-color .3s, background .3s, box-shadow .3s;
  }
  .ry-card::before {
    content: ''; position: absolute; inset: 0; border-radius: 18px; padding: 1px;
    background: var(--accent); opacity: 0; transition: opacity .3s;
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none;
  }
  .ry-card::after {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 130px;
    background: var(--accent); opacity: 0; filter: blur(46px);
    transition: opacity .35s; pointer-events: none;
  }
  .ry-card:hover {
    transform: translateY(-5px);
    background: var(--glass-hi);
    box-shadow: 0 18px 48px rgba(0,0,0,0.5);
  }
  .ry-card:hover::before { opacity: 1; }
  .ry-card:hover::after { opacity: 0.2; }
  .ry-card:active { transform: translateY(-1px); }

  .ry-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
  .ry-emoji {
    font-size: 1.6rem; line-height: 1; width: 46px; height: 46px; flex: none;
    display: grid; place-items: center; border-radius: 12px;
    background: rgba(255,255,255,0.05); border: 1px solid var(--line);
  }
  .ry-arrow { color: var(--dim); font-size: 1.05rem; transition: transform .3s, color .3s; }
  .ry-card:hover .ry-arrow { transform: translate(3px,-3px); color: var(--text); }

  .ry-name { font-size: 1.06rem; font-weight: 700; letter-spacing: -0.015em; margin-top: 17px; line-height: 1.3; }
  .ry-desc { font-size: 0.855rem; color: var(--muted); line-height: 1.6; margin-top: 8px; flex: 1; }
  .ry-pill {
    align-self: flex-start; margin-top: 16px; font-size: 0.66rem; font-weight: 700;
    letter-spacing: 0.09em; text-transform: uppercase; padding: 5px 11px;
    border-radius: 7px; border: 1px solid var(--line); color: var(--muted);
    background: rgba(255,255,255,0.04);
  }

  .ry-card.big { padding: 30px; }
  .ry-card.big .ry-emoji { width: 54px; height: 54px; font-size: 1.9rem; }
  .ry-card.big .ry-name { font-size: 1.4rem; margin-top: 20px; }
  .ry-card.big .ry-desc { font-size: 0.92rem; }

  /* ---- reveal ---- */
  .rv { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s cubic-bezier(.22,1,.36,1); }
  .rv.in { opacity: 1; transform: none; }

  footer.ry-footer {
    margin-top: 96px; padding: 34px 0 64px; border-top: 1px solid var(--line);
    text-align: center; color: var(--dim); font-size: 0.82rem;
  }
  footer.ry-footer a { color: var(--muted); text-decoration: none; }
  footer.ry-footer a:hover { color: var(--text); }

  @media (max-width: 560px) {
    .ry-hero { padding: 74px 0 56px; }
    .ry-stat { padding: 13px 20px; min-width: 100px; }
    .ry-stat b { font-size: 1.4rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .ry-blob, .ry-avatar-ring, .ry-dot { animation: none !important; }
    .rv { opacity: 1; transform: none; transition: none; }
    html { scroll-behavior: auto; }
  }
`;

// Relative so links work at triplettrj.github.io/ryPage/ AND at a custom domain root
const BASE = '.';

const FEATURED = [
  {
    href: `${BASE}/wolf-acupuncture/`,
    emoji: '🌲',
    name: 'Wolf Acupuncture — Concept',
    desc: 'Acupuncture and craniosacral therapy in Portland, OR. A full concept redesign, built live in a single conversation.',
    accent: 'linear-gradient(135deg, #6E7C5A, #B99A5E)',
    label: 'Newest build',
  },
  {
    href: `${BASE}/demo/`,
    emoji: '🌸',
    name: 'Jasmine Thai Spa — Demo',
    desc: 'A complete wellness site — hero, services, testimonials, booking — built in minutes to show how fast this works.',
    accent: 'linear-gradient(135deg, #8B5CF6, #22D3EE)',
    label: 'Built with Claude AI ✨',
  },
];

const APPS = [
  {
    href: `${BASE}/kitchen/`,
    emoji: '🍳',
    name: 'My Kitchen',
    desc: 'Inventory tracking, barcode scanning, AI meal planning, and cloud sync.',
    accent: 'linear-gradient(135deg, #34C759, #30D158)',
    label: 'iOS + Web App',
  },
  {
    href: `${BASE}/kitchenfandb/`,
    emoji: '☕',
    name: 'Cafe F&B',
    desc: 'Food and beverage management built for day-to-day cafe operations.',
    accent: 'linear-gradient(135deg, #8D6E63, #5D4037)',
    label: 'Web App',
  },
];

const WELLNESS = [
  {
    href: `${BASE}/jasmine-thai-spa/`,
    emoji: '🌺',
    name: 'Jasmine Thai Spa',
    desc: 'Traditional Thai massage and wellness treatments in Orange County.',
    accent: 'linear-gradient(135deg, #7B5EA7, #3D8B8B)',
    label: 'Spa & Wellness',
  },
  {
    href: `${BASE}/sara-thai-spa/`,
    emoji: '🧖',
    name: 'Sara Thai Spa',
    desc: 'Luxury Thai wellness and spa treatments in Irvine.',
    accent: 'linear-gradient(135deg, #1A5F6A, #4AACBD)',
    label: 'Spa & Wellness',
  },
];

const FOOD = [
  {
    href: `${BASE}/hungry-boy-thai-cafe/`,
    emoji: '🍜',
    name: 'Hungry Boy Thai Cafe',
    desc: 'Casual Thai dining in Orange County. Online ordering and dine-in.',
    accent: 'linear-gradient(135deg, #E07B30, #C0392B)',
    label: 'Restaurant',
  },
  {
    href: `${BASE}/luckys-thai-pantry/`,
    emoji: '🥘',
    name: "Lucky's Thai Pantry",
    desc: 'Authentic Thai cuisine — dine-in, takeout, and catering.',
    accent: 'linear-gradient(135deg, #C9973A, #2A7F7F)',
    label: 'Restaurant',
  },
  {
    href: `${BASE}/thai-garden-market/`,
    emoji: '🛒',
    name: 'Thai Garden Market',
    desc: 'Thai groceries, imported spices, and fresh produce. Family-owned since 1998.',
    accent: 'linear-gradient(135deg, #2D7A4F, #4CAF78)',
    label: 'Grocery',
  },
  {
    href: `${BASE}/donut-city/`,
    emoji: '🍩',
    name: 'Donut City',
    desc: 'Seal Beach institution. Fresh at 5 AM, gone by noon.',
    accent: 'linear-gradient(135deg, #F472B6, #FB923C)',
    label: 'Bakery',
  },
  {
    href: `${BASE}/killer-tacos/`,
    emoji: '🌮',
    name: 'Killer Tacos OC',
    desc: 'Taco catering for weddings, corporate events, and backyard parties.',
    accent: 'linear-gradient(135deg, #EF4444, #F59E0B)',
    label: 'Catering',
  },
];

const HOME = [
  {
    href: `${BASE}/24seven-hvac/`,
    emoji: '❄️',
    name: '24Seven Heating & Cooling',
    desc: 'Emergency AC repair across Orange County, around the clock.',
    accent: 'linear-gradient(135deg, #38BDF8, #0369A1)',
    label: 'HVAC',
  },
  {
    href: `${BASE}/apex-hvac/`,
    emoji: '🔥',
    name: 'Apex Heating and Air',
    desc: 'Family-owned HVAC service and installation in Orange County.',
    accent: 'linear-gradient(135deg, #FB923C, #DC2626)',
    label: 'HVAC',
  },
  {
    href: `${BASE}/oc-pro-plumbers/`,
    emoji: '💧',
    name: 'OC Pro Plumbers',
    desc: '24/7 emergency plumbing throughout Orange County, CA.',
    accent: 'linear-gradient(135deg, #22D3EE, #1D4ED8)',
    label: 'Plumbing',
  },
  {
    href: `${BASE}/billby-plumbing/`,
    emoji: '🔧',
    name: 'Billby Plumbing',
    desc: 'Round-the-clock emergency plumbing services.',
    accent: 'linear-gradient(135deg, #60A5FA, #4338CA)',
    label: 'Plumbing',
  },
  {
    href: `${BASE}/jl-plumbing/`,
    emoji: '🚰',
    name: 'J&L Plumbing Services',
    desc: 'Family-owned Orange County plumber, residential and commercial.',
    accent: 'linear-gradient(135deg, #2DD4BF, #0F766E)',
    label: 'Plumbing',
  },
  {
    href: `${BASE}/chais-auto-care/`,
    emoji: '🚗',
    name: "Chai's Auto Care",
    desc: 'Thai-owned auto repair. Honest service, certified mechanics.',
    accent: 'linear-gradient(135deg, #3A7AB8, #1A3A5C)',
    label: 'Auto Repair',
  },
];

const TOTAL_SITES =
  FEATURED.length + WELLNESS.length + FOOD.length + HOME.length;

function Card({ item, big }) {
  return (
    <a
      className={`ry-card rv${big ? ' big' : ''}`}
      href={item.href}
      style={{ '--accent': item.accent }}
    >
      <div className="ry-card-top">
        <div className="ry-emoji">{item.emoji}</div>
        <span className="ry-arrow">↗</span>
      </div>
      <div className="ry-name">{item.name}</div>
      <div className="ry-desc">{item.desc}</div>
      <span className="ry-pill">{item.label}</span>
    </a>
  );
}

function Section({ title, items, count, feat }) {
  return (
    <section className="ry-sec">
      <div className="ry-sec-head">
        <h2>{title}</h2>
        <div className="rule" />
        <span className="count">{count}</span>
      </div>
      <div className={`ry-grid${feat ? ' feat' : ''}`}>
        {items.map(item => (
          <Card key={item.href} item={item} big={feat} />
        ))}
      </div>
    </section>
  );
}

const LandingPage = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          setTimeout(() => el.classList.add('in'), i * 55);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div className="ry-aurora">
        <div className="ry-blob b1" />
        <div className="ry-blob b2" />
        <div className="ry-blob b3" />
      </div>
      <div className="ry-grain" />

      <div className="ry-page">
        <div className="ry-wrap">
          <header className="ry-hero">
            <div className="ry-avatar-ring">
              <img src={`${BASE}/about-photo-sm.jpg`} alt="Ryan Triplett" />
            </div>
            <h1>Ryan Triplett</h1>
            <p className="ry-tag">
              A playground for <strong>sites and apps</strong> I build for the
              fun of it — spas, taco caterers, plumbers, donut shops, and
              whatever else sounds good that week.
            </p>
            <div className="ry-stats">
              <div className="ry-stat">
                <b>{TOTAL_SITES}</b>
                <span>Sites built</span>
              </div>
              <div className="ry-stat">
                <b>{APPS.length}</b>
                <span>Apps built</span>
              </div>
              <div className="ry-stat">
                <b>OC</b>
                <span>California</span>
              </div>
            </div>
          </header>

          <Section title="Featured" items={FEATURED} count="Latest work" feat />
          <Section title="Apps" items={APPS} count={`${APPS.length} projects`} />
          <Section title="Wellness" items={WELLNESS} count={`${WELLNESS.length} sites`} />
          <Section title="Food & Retail" items={FOOD} count={`${FOOD.length} sites`} />
          <Section title="Home & Auto" items={HOME} count={`${HOME.length} sites`} />

          <footer className="ry-footer">
            <p>© 2026 Ryan Triplett · Orange County, CA</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
