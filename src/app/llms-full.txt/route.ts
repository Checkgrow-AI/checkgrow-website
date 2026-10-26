import { renderLlmsFull } from "@/lib/markdown";

/* Every key page in markdown, in one file */
export const dynamic = "force-static";

export function GET() {
  return new Response(renderLlmsFull(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
