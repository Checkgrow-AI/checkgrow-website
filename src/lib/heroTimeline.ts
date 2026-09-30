const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => value * value * (3 - 2 * value);
const ramp = (value: number, start: number, end: number) =>
  smooth(clamp01((value - start) / (end - start)));

export const HERO_SCROLL_SCREENS = 7.2;
export const VERTICAL_START = 0.54;
export const VERTICAL_END = 0.91;

/** Give the four verticals extra scroll distance without slowing the intro. */
export function heroStoryProgress(progress: number) {
  const p = clamp01(progress);
  if (p < 0.39) return p / 0.39 * VERTICAL_START;
  if (p < 0.925) return VERTICAL_START + (p - 0.39) / 0.535 * (VERTICAL_END - VERTICAL_START);
  return VERTICAL_END + (p - 0.925) / 0.075 * (1 - VERTICAL_END);
}

export function verticalFrame(progress: number, index: number, count: number) {
  const duration = (VERTICAL_END - VERTICAL_START) / count;
  const local = clamp01((progress - VERTICAL_START - index * duration) / duration);
  return {
    local,
    // Title arrives first, stays still for 80% of its chapter, leaves last.
    opacity: ramp(local, 0, 0.12) * (1 - ramp(local, 0.92, 1)),
    y: 16 * (1 - ramp(local, 0, 0.12)) - 16 * ramp(local, 0.92, 1),
  };
}

export function satelliteFrame(local: number, index: number, count: number) {
  const stagger = index / Math.max(1, count - 1);
  const enter = 0.2 + stagger * 0.14;
  const leave = 0.72 + stagger * 0.08;
  return {
    opacity: ramp(local, enter, enter + 0.09) * (1 - ramp(local, leave, leave + 0.09)),
    y: 24 * (1 - ramp(local, enter, enter + 0.16)) - 32 * ramp(local, 0.6, leave + 0.09),
  };
}
