import { renderLlmsTxt } from "@/lib/markdown";

/* The short markdown map of the site for AI assistants (llmstxt.org) */
export const dynamic = "force-static";

export function GET() {
  return new Response(renderLlmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
