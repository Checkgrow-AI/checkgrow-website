/* The shift: four benefits told as a pinned scroll story. This module
   keeps the ids, the order and the scroll logic; the copy (title,
   description, stat, label, body) comes from the `home` dictionary
   (shift.benefits, keyed by id). */

export const SHIFT_BENEFIT_IDS = ["capacity", "spend", "throughput", "memory"] as const;
export type ShiftBenefitId = (typeof SHIFT_BENEFIT_IDS)[number];

export type ShiftBenefitCopy = { title: string; description: string; stat: string; label: string; body: string };

/* the benefits in story order, with their copy */
export function shiftBenefits(copy: Record<ShiftBenefitId, ShiftBenefitCopy>) {
  return SHIFT_BENEFIT_IDS.map((id) => ({ id, ...copy[id] }));
}

/** The chapter for a pinned story's scroll progress (0–1): equal slices, last one held to the end. */
export function shiftStepFromProgress(progress: number, count: number): number {
  if (!(count > 0)) return 0;
  const p = Math.min(1, Math.max(0, Number.isFinite(progress) ? progress : 0));
  return Math.min(count - 1, Math.floor(p * count));
}
