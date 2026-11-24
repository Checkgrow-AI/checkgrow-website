/* The problem board: five disconnected tools in a two-column staircase.
   This module keeps the ids and the layout; the copy (name, state and the
   four bullets of each tool) comes from the `home` dictionary
   (problem.tools, keyed by id). */

export const PROBLEM_TOOL_IDS = ["content", "analytics", "ads", "chatbot", "rivals"] as const;
export type ProblemToolId = (typeof PROBLEM_TOOL_IDS)[number];

export type ProblemToolCopy = { name: string; state: string; bullets: readonly string[] };

export type ProblemTool = ProblemToolCopy & {
  id: ProblemToolId;
  column: 0 | 1;
  row: 0 | 1 | 2;
};

const layout: Record<ProblemToolId, { column: 0 | 1; row: 0 | 1 | 2 }> = {
  content: { column: 0, row: 1 },
  analytics: { column: 0, row: 2 },
  ads: { column: 1, row: 0 },
  chatbot: { column: 1, row: 1 },
  rivals: { column: 1, row: 2 },
};

/* the tools in board order, with their copy */
export function problemTools(copy: Record<ProblemToolId, ProblemToolCopy>): ProblemTool[] {
  return PROBLEM_TOOL_IDS.map((id) => ({ id, ...layout[id], ...copy[id] }));
}

export function problemCardState(tool: Pick<ProblemTool, "id" | "column" | "row">, activeId: string | null, columnLayout: boolean) {
  const active = PROBLEM_TOOL_IDS.find(id => id === activeId);
  const expanded = tool.id === active;
  return {
    expanded,
    covered: columnLayout && !!active && layout[active].column === tool.column && !expanded,
    top: expanded ? 0 : tool.row * 100 / 3,
    height: expanded ? 100 : 100 / 3,
  };
}
