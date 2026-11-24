/* Why Checkgrow: what sets it apart from generic AI tools and point
   solutions. Three differentiators, kept in one place so the section, the
   FAQ and the markdown pages say the same thing: the ids and order live
   here, the copy in the `home` dictionary (difference.items, keyed by id). */

export const DIFFERENTIATOR_IDS = ["growth-brain", "learning", "self-host"] as const;
export type DifferentiatorId = (typeof DIFFERENTIATOR_IDS)[number];

export type DifferentiatorCopy = { label: string; title: string; body: string };

/* the differentiators in order, with their copy */
export function differentiators(copy: Record<DifferentiatorId, DifferentiatorCopy>) {
  return DIFFERENTIATOR_IDS.map((id) => ({ id, ...copy[id] }));
}
