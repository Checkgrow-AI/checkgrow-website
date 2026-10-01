export type ProblemTool = {
  id: string;
  name: string;
  state: string;
  column: 0 | 1;
  row: 0 | 1 | 2;
  bullets: string[];
};

export const problemTools: ProblemTool[] = [
  {
    id: "content", name: "Content tool", state: "No brand context", column: 0, row: 1,
    bullets: ["Copy that doesn't sound like you", "Blind to products and personas", "Calendar guesswork, no research", "Every draft starts from blank"],
  },
  {
    id: "analytics", name: "Analytics", state: "Data nobody reads", column: 0, row: 2,
    bullets: ["Dashboards without decisions", "Events never mapped to a funnel", "Paid, organic and site data split", "Nothing says what to do next"],
  },
  {
    id: "ads", name: "Ad platform", state: "No audience context", column: 1, row: 0,
    bullets: ["Channels pulling in different directions", "Boosting posts instead of strategy", "No ICP, no strategic audience", "Creatives guessed, never benchmarked"],
  },
  {
    id: "chatbot", name: "AI chatbot", state: "Re-brief every time", column: 1, row: 1,
    bullets: ["Different LLMs, no single source of truth", "Random PDF uploads, repeated chats", "Context re-typed every session", "No automations, no prompt craft"],
  },
  {
    id: "rivals", name: "Competitor sheet", state: "Stale by Monday", column: 1, row: 2,
    bullets: ["Research done once, then forgotten", "No live view of rivals' ads", "Insights never reach campaigns", "Gut feel instead of signals"],
  },
];

export function problemCardState(tool: ProblemTool, activeId: string | null, columnLayout: boolean) {
  const active = problemTools.find(item => item.id === activeId);
  const expanded = tool.id === active?.id;
  return {
    expanded,
    covered: columnLayout && !!active && active.column === tool.column && !expanded,
    top: expanded ? 0 : tool.row * 100 / 3,
    height: expanded ? 100 : 100 / 3,
  };
}
