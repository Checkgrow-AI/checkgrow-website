export const shiftBenefits = [
  {
    id: "capacity",
    title: "Automated research. Clearer decisions.",
    description: "Research, briefs and reports, grounded in your brand. Less searching. More informed action.",
    stat: "8–25 hrs",
    label: "Recover capacity",
    body: "of team time per month designed to come back from searching, briefing and reporting.",
  },
  {
    id: "spend",
    title: "Smarter campaigns. Connected channels.",
    description: "Bring audience signals, budgets and tracking together across your tools and MCP integrations.",
    stat: "3–10%",
    label: "Protect spend",
    body: "of addressable media budget designed to be protected from weak targeting and broken tracking.",
  },
  {
    id: "throughput",
    title: "Centralised marketing intelligence.",
    description: "One source for your brand, audiences and approved knowledge. A stronger start for every campaign.",
    stat: "40–70%",
    label: "Increase throughput",
    body: "faster first drafts across multi-channel campaigns, with human approval retained.",
  },
  {
    id: "memory",
    title: "Memory that speaks your data.",
    description: "Turn approved work and performance into shared knowledge. Let your next move build on what worked.",
    stat: "Every result",
    label: "Compound intelligence",
    body: "feeds the next decision. Approved strategies, assets and learnings keep improving the context.",
  },
] as const;

/** The chapter for a pinned story's scroll progress (0–1): equal slices, last one held to the end. */
export function shiftStepFromProgress(progress: number, count: number): number {
  if (!(count > 0)) return 0;
  const p = Math.min(1, Math.max(0, Number.isFinite(progress) ? progress : 0));
  return Math.min(count - 1, Math.floor(p * count));
}
