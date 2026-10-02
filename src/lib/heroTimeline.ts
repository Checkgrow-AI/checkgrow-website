const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const smooth = (value: number) => value * value * (3 - 2 * value);
const ramp = (value: number, start: number, end: number) =>
  smooth(clamp01((value - start) / (end - start)));

export const PLATFORM_START = 0.54;
export const PLATFORM_END = 0.91;
export const OPENING_SCROLL_SCREENS = 2.808;
export const PLATFORM_SCROLL_SCREENS = 1.6;
export const ENDING_SCROLL_SCREENS = 0.54;
export const HERO_SCROLL_SCREENS = OPENING_SCROLL_SCREENS + PLATFORM_SCROLL_SCREENS + ENDING_SCROLL_SCREENS;

/** One shared platform scene; retain the intro and team scene's scroll pace. */
export function heroStoryProgress(progress: number) {
  const distance = clamp01(progress) * HERO_SCROLL_SCREENS;
  if (distance < OPENING_SCROLL_SCREENS) return distance / OPENING_SCROLL_SCREENS * PLATFORM_START;
  if (distance < OPENING_SCROLL_SCREENS + PLATFORM_SCROLL_SCREENS) {
    return PLATFORM_START + (distance - OPENING_SCROLL_SCREENS) / PLATFORM_SCROLL_SCREENS * (PLATFORM_END - PLATFORM_START);
  }
  return PLATFORM_END + (distance - OPENING_SCROLL_SCREENS - PLATFORM_SCROLL_SCREENS) / ENDING_SCROLL_SCREENS * (1 - PLATFORM_END);
}

export function platformLocalProgress(progress: number) {
  return clamp01((progress - PLATFORM_START) / (PLATFORM_END - PLATFORM_START));
}

export function platformWordFrame(local: number, index: number) {
  // Marketing leads, then the surrounding capabilities join it. They
  // share a long, still reading beat and leave together before the team.
  const enter = index * 0.035;
  return {
    opacity: ramp(local, enter, enter + 0.12) * (1 - ramp(local, 0.86, 1)),
    scale: 0.96 + 0.04 * ramp(local, enter, enter + 0.12),
  };
}

export function platformDetailFrame(local: number, index: number) {
  const group = index % 3;
  const enter = 0.15 + group * 0.11;
  const leave = 0.55 + group * 0.1;
  return {
    opacity: ramp(local, enter, enter + 0.12) * (1 - ramp(local, leave, leave + 0.1)),
    y: 6 * (1 - ramp(local, enter, enter + 0.12)) - 6 * ramp(local, leave, leave + 0.1),
  };
}

export function platformIconOpacity(local: number) {
  return ramp(local, 0.12, 0.32) * (1 - ramp(local, 0.75, 0.86));
}
