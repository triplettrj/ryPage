// Heart rate zones as % of max HR. Shared by the athlete app and dashboard.
export const ZONES = [
  { zone: 0, name: 'Rest',      min: 0,  color: 'var(--z0)' },
  { zone: 1, name: 'Warm-up',   min: 50, color: 'var(--z1)' },
  { zone: 2, name: 'Easy',      min: 60, color: 'var(--z2)' },
  { zone: 3, name: 'Aerobic',   min: 70, color: 'var(--z3)' },
  { zone: 4, name: 'Threshold', min: 80, color: 'var(--z4)' },
  { zone: 5, name: 'Max',       min: 90, color: 'var(--z5)' },
];

export const DEFAULT_MAX_HR = 190;

export function maxHrForAge(age) {
  const a = Number(age);
  return a >= 5 && a <= 110 ? Math.round(220 - a) : DEFAULT_MAX_HR;
}

/** A max heart rate someone could really have, or null. */
export function validMaxHr(value) {
  const n = Math.round(Number(value));
  return n >= 100 && n <= 240 ? n : null;
}

/**
 * The max heart rate to use: the one the athlete entered, else 220 − age, and
 * never less than one the server learned from their own heart rate.
 */
export function maxHrFor({ age, entered, learned }) {
  return Math.max(validMaxHr(entered) ?? maxHrForAge(age), validMaxHr(learned) ?? 0);
}

export function zoneFor(bpm, maxHr = DEFAULT_MAX_HR) {
  return zoneForPct(Math.round((bpm / maxHr) * 100));
}

export function zoneForPct(pct) {
  let z = ZONES[0];
  for (const candidate of ZONES) if (pct >= candidate.min) z = candidate;
  return { ...z, pct };
}
