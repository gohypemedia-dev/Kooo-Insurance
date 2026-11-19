/**
 * Playhead controller and timeline definitions for Kooo's cinematic opening experience.
 * Smoothly driven by scroll or auto-play. `story.p` ranges 0 → 1.
 */
export const story = { p: 0 };

export const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

/** Smooth hermite 0 → 1 ramp as `p` moves from `a` to `b`. */
export function ramp(p: number, a: number, b: number) {
  const t = clamp01((p - a) / (b - a));
  return t * t * (3 - 2 * t);
}

/** Piecewise-linear number track: [[time, value], …]. */
export function track(p: number, keys: readonly (readonly [number, number])[]) {
  if (p <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    if (p <= keys[i][0]) {
      const [t0, v0] = keys[i - 1];
      const [t1, v1] = keys[i];
      return v0 + ((v1 - v0) * (p - t0)) / (t1 - t0);
    }
  }
  return keys[keys.length - 1][1];
}

export type SceneData = {
  key: string;
  index: number;
  label: string;
  shortLabel: string;
  pillar: string;
  title: string;
  text: string;
  location: string;
  timeOfDay: string;
  image: string;
  from: number;
  to: number;
  focusPoint: { x: number; y: number }; // 0-100 percentage in image
  circleOffset: { x: number; y: number; scale: number; separation: number };
};

export const scenes: SceneData[] = [
  {
    key: "intro",
    index: 0,
    label: "Overview",
    shortLabel: "00 Start",
    pillar: "Australia-Wide Protection",
    title: "Protect your tomorrow, today.",
    text: "Here to help you protect your business, home, and everything in between.",
    location: "Australia",
    timeOfDay: "Daybreak",
    image: "/images/hero/hero-cafe.jpg",
    from: 0,
    to: 0.12,
    focusPoint: { x: 50, y: 50 },
    circleOffset: { x: 0, y: 0, scale: 0.95, separation: 1.1 },
  },
  {
    key: "cafe",
    index: 1,
    label: "Business",
    shortLabel: "01 Café",
    pillar: "Business & Hospitality",
    title: "First light on the city.",
    text: "The doors unlock, the machines hum. Everything you have built with care, ready for the day ahead.",
    location: "Laneway Café · Melbourne, VIC",
    timeOfDay: "6:30 AM · First Light",
    image: "/images/hero/hero-cafe.jpg",
    from: 0.12,
    to: 0.32,
    focusPoint: { x: 52, y: 48 },
    circleOffset: { x: 5, y: -2, scale: 1.05, separation: 0.95 },
  },
  {
    key: "truck",
    index: 2,
    label: "Transport",
    shortLabel: "02 Transport",
    pillar: "Commercial Motor & Fleet",
    title: "The pulse of a continent.",
    text: "Thousands of kilometres across open horizons. Keeping supply chains moving with quiet certainty.",
    location: "Stuart Highway · Regional Australia",
    timeOfDay: "11:30 AM · Midday Sun",
    image: "/images/hero/hero-truck.jpg",
    from: 0.32,
    to: 0.52,
    focusPoint: { x: 38, y: 56 },
    circleOffset: { x: -8, y: 4, scale: 1.1, separation: 1.05 },
  },
  {
    key: "construction",
    index: 3,
    label: "Construction",
    shortLabel: "03 Building",
    pillar: "Trades & Infrastructure",
    title: "Where foundations are built.",
    text: "Where precision meets craft. Teams on site shaping infrastructure designed to stand for generations.",
    location: "Commercial Precinct · Sydney, NSW",
    timeOfDay: "2:45 PM · Bright Sun",
    image: "/images/hero/hero-construction.jpg",
    from: 0.52,
    to: 0.72,
    focusPoint: { x: 62, y: 45 },
    circleOffset: { x: 6, y: -3, scale: 1.0, separation: 0.98 },
  },
  {
    key: "family",
    index: 4,
    label: "Family",
    shortLabel: "04 Family",
    pillar: "Personal & Home Sanctuary",
    title: "The place you come home to.",
    text: "At the end of every journey. The people, the memories, and the sanctuary that matter most.",
    location: "Contemporary Residence · Australia",
    timeOfDay: "6:00 PM · Golden Hour",
    image: "/images/hero/hero-home.jpg",
    from: 0.72,
    to: 0.9,
    focusPoint: { x: 55, y: 52 },
    circleOffset: { x: -3, y: 2, scale: 1.08, separation: 1.02 },
  },
  {
    key: "kooo",
    index: 5,
    label: "Protection",
    shortLabel: "05 Tomorrow",
    pillar: "The Kooo Guarantee",
    title: "Protect your tomorrow, today.",
    text: "We do not expect you to speak the language of insurance. That is our job — securing what matters across Australia.",
    location: "Nationwide Coverage · AFSL 525491",
    timeOfDay: "Tomorrow",
    image: "/images/hero/hero-home.jpg",
    from: 0.9,
    to: 1.0,
    focusPoint: { x: 50, y: 50 },
    circleOffset: { x: 0, y: 0, scale: 1.0, separation: 0.88 }, // Locks into exact Kooo brand geometry
  },
];

export const chapters = scenes;

/** Check if current chapter tone should be light or dark text. */
export const isLightSky = (p: number) => {
  // During intro and finale, sky is light. During midday/afternoon/golden hour, rich contrast.
  return p < 0.1 || p > 0.92;
};
