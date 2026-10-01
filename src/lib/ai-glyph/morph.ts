// Draws an AI glyph at one instant on the logo lattice: the icon at rest, the kind's motion while
// working, the check when the work ends, and the flight between them. Sixteen dots, always.

import {
  AI_KIND_MOTION,
  CELL,
  LATTICE,
  LATTICE_INSET,
  checkDot,
  motionDot,
  restDot,
  type AiKind,
  type LatticeDot,
  type LatticeExtra,
  type LatticeMotion,
} from "./glyphs";

export type Rgb = readonly [number, number, number];

export interface AiPalette {
  /** The resting icon. */
  glyph: Rgb;
  /** Dots at full strength while thinking. */
  near: Rgb;
  /** Unused by the lattice painter; kept so every tone resolves one shape. */
  far: Rgb;
}

/**
 * Timings, in seconds. `out` = icon → motion, `back` = motion → icon, `done` = the check (in, hold,
 * out), `ripple` = the hover ripple.
 */
export const AI_MORPH = { out: 0.45, back: 0.5, done: 1.5, pulse: 0.7, ripple: 1 } as const;

/**
 * How finished work ends. `check` (default; `logo` is the same): the dots draw the check, hold it,
 * then fall back into the icon. `pulse`: the dots fly home and the rings pulse once.
 */
export type AiFinish = "check" | "logo" | "pulse";

/** Per-instance animation state. `p` runs 0 (icon) → 1 (motion). */
export interface GlyphState {
  p: number;
  /** Motion time, reset when work starts from rest so every run opens the same way. */
  clock: number;
  lastNow: number | null;
  /** Set once the motion has formed; the next return ends with the finish. */
  armed: boolean;
  doneAt: number | null;
  hotAt: number | null;
}

export function createGlyphState(busy: boolean): GlyphState {
  return { p: busy ? 1 : 0, clock: 0.4, lastNow: null, armed: busy, doneAt: null, hotAt: null };
}

export const easeInOutCubic = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

/** The pointer entered the host: start one ripple. */
export function rippleGlyph(state: GlyphState, now: number): void {
  state.hotAt = now;
}

/**
 * Advance the state to `now` (seconds). Returns true while the glyph still needs frames:
 * working, flying, showing the finish or rippling.
 */
export function stepGlyph(state: GlyphState, busy: boolean, now: number, reduced: boolean): boolean {
  const dt = state.lastNow == null ? 0 : Math.min(0.05, Math.max(0, now - state.lastNow));
  state.lastNow = now;
  if (busy) {
    if (state.p === 0) state.clock = 0;
    state.doneAt = null;
  } else if (state.armed) {
    state.doneAt = now;
    state.armed = false;
  }
  if (reduced) state.p = busy ? 1 : 0;
  else state.p = busy ? Math.min(1, state.p + dt / AI_MORPH.out) : Math.max(0, state.p - dt / AI_MORPH.back);
  if (busy && state.p > 0.5) state.armed = true;
  if (state.p > 0 && !reduced) state.clock += dt;
  const finishing = state.doneAt != null && now - state.doneAt < AI_MORPH.done;
  const rippling = !reduced && state.hotAt != null && now - state.hotAt < AI_MORPH.ripple;
  return busy || state.p > 0 || finishing || rippling;
}

/** How far the finish is drawn at `now`: 0 → 1 (formed) → 0. */
export function finishAmount(state: GlyphState, now: number, reduced: boolean): number {
  if (state.doneAt == null) return 0;
  const e = now - state.doneAt;
  if (e < 0 || e >= AI_MORPH.done) return 0;
  if (reduced) return 1;
  const c = e < 0.3 ? e / 0.3 : e < 1 ? 1 : 1 - (e - 1) / (AI_MORPH.done - 1);
  return c * c * (3 - 2 * c);
}

const mix = (a: Rgb, b: Rgb, u: number): Rgb => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, a[2] + (b[2] - a[2]) * u];
const rgba = (c: Rgb, a: number) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${clamp01(a)})`;
const lerpDot = (A: LatticeDot, B: LatticeDot, u: number): LatticeDot => ({
  x: A.x + (B.x - A.x) * u,
  y: A.y + (B.y - A.y) * u,
  r: A.r + (B.r - A.r) * u,
  a: A.a + (B.a - A.a) * u,
  o: A.o + (B.o - A.o) * u,
  z: A.z + (B.z - A.z) * u,
});

export interface DrawOptions {
  kind: AiKind;
  /** CSS pixels. */
  size: number;
  state: GlyphState;
  now: number;
  reduced: boolean;
  palette: AiPalette;
  /** Overrides the kind's own motion (e.g. `breathe` for a waiting bubble, `wave` for plain loading). */
  motion?: LatticeMotion;
  /** How finished work ends (see AiFinish). */
  finish?: AiFinish;
  /** Alive at rest: the icon breathes instead of standing still. */
  ambient?: boolean;
}

/** Paint one frame into a context already scaled to CSS pixels. Returns the sixteen dots drawn. */
export function drawGlyph(ctx: CanvasRenderingContext2D, o: DrawOptions): LatticeDot[] {
  const { kind, size: S, state, now, reduced, palette, finish = "check", ambient = false } = o;
  const motion = o.motion ?? AI_KIND_MOTION[kind];
  const pattern = LATTICE[kind];
  const ghost = S < 20 ? 0 : 0.13;
  const p = state.p;
  const t = reduced ? 0.9 : state.clock;
  const c = finish === "pulse" ? 0 : finishAmount(state, now, reduced);
  const pulse = finish === "pulse" && state.doneAt != null && !reduced ? clamp01(1 - (now - state.doneAt) / AI_MORPH.pulse) : 0;
  const bump = pulse > 0 && pulse < 1 ? Math.sin((1 - pulse) * Math.PI) : 0;
  const ripple = !reduced && state.hotAt != null ? now - state.hotAt : -1;
  const extras: LatticeExtra[] = [];
  const restExtras: LatticeExtra[] = [];
  const dots: LatticeDot[] = [];

  for (let i = 0; i < 16; i++) {
    const row = Math.floor(i / 4);
    const col = i % 4;
    let rest = ambient && !reduced ? motionDot("breathe", pattern, i, now, restExtras) : restDot(pattern, i, ghost);
    if (ripple >= 0 && ripple < AI_MORPH.ripple) {
      const k = Math.exp(-Math.pow(ripple * 6 - (row + col) * 0.55 - 0.4, 2));
      rest = { ...rest, r: rest.r * (1 + 0.35 * k), a: pattern[i] === "." ? Math.max(rest.a, 0.5 * k) : rest.a };
    }
    if (bump > 0 && pattern[i] === "o") rest = { ...rest, r: rest.r * (1 + 0.4 * bump) };
    // Centre dots leave first and outer ones land last.
    const dist = Math.hypot(CELL[col] - 0.5, CELL[row] - 0.5) / 0.566;
    const u = easeInOutCubic(clamp01(p * 1.35 - dist * 0.35));
    let dot = u > 0.001 ? lerpDot(rest, motionDot(motion, pattern, i, t, extras), u) : rest;
    if (c > 0.001) dot = lerpDot(dot, checkDot(i, ghost), c);
    dots.push(dot);
  }

  ctx.clearRect(0, 0, S, S);
  const px = (v: number) => (0.5 + (v - 0.5) * LATTICE_INSET) * S;
  const ink = mix(palette.glyph, palette.near, easeInOutCubic(p));
  const lineAlpha = p * (1 - c);
  if (lineAlpha > 0.01) {
    for (const x of extras) {
      if (x.type === "vline") {
        ctx.fillStyle = rgba(ink, 0.22 * lineAlpha);
        ctx.fillRect(px(x.x) - 0.5, S * 0.03, Math.max(1, S * 0.008), S * 0.94);
      } else {
        const A = dots[x.from];
        const B = dots[x.to];
        ctx.strokeStyle = rgba(ink, 0.5 * lineAlpha * x.f);
        ctx.lineWidth = Math.max(0.75, S * 0.012);
        ctx.beginPath();
        ctx.moveTo(px(A.x), px(A.y));
        ctx.lineTo(px(A.x + (B.x - A.x) * x.p), px(A.y + (B.y - A.y) * x.p));
        ctx.stroke();
      }
    }
  }
  const order = dots.map((_, i) => i).sort((a, b) => dots[a].z - dots[b].z);
  for (const i of order) {
    const d = dots[i];
    if (d.a < 0.01 || d.r <= 0) continue;
    const X = px(d.x);
    const Y = px(d.y);
    const rad = d.r * LATTICE_INSET * S;
    const fillA = d.a * (1 - d.o);
    const ringA = d.a * d.o;
    if (fillA > 0.01) {
      ctx.fillStyle = rgba(ink, fillA);
      ctx.beginPath();
      ctx.arc(X, Y, Math.max(0.35, rad), 0, Math.PI * 2);
      ctx.fill();
    }
    if (ringA > 0.01) {
      // Thin enough at 14–16 px that the hole still shows.
      const w = Math.max(0.75, rad * 0.3);
      ctx.strokeStyle = rgba(ink, ringA);
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.arc(X, Y, Math.max(0.4, rad - w / 2), 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  return dots;
}
