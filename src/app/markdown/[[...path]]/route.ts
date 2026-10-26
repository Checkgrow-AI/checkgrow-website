import { getMarkdownPage, markdownPages, renderMarkdown } from "@/lib/markdown";

/* Markdown versions of the key pages. Public URLs are the page URL plus
   ".md" (or any page requested with Accept: text/markdown); next.config.ts
   rewrites both here. Prerendered at build time. */
export const dynamicParams = false;

export function generateStaticParams() {
  return markdownPages.map((page) => ({ path: page.path === "/" ? [] : page.path.slice(1).split("/") }));
}

export async function GET(_request: Request, { params }: RouteContext<"/markdown/[[...path]]">) {
  const { path } = await params;
  const page = getMarkdownPage(`/${(path ?? []).join("/")}`);
  if (!page) return new Response("Not found\n", { status: 404 });
  return new Response(renderMarkdown(page), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
      "X-Robots-Tag": "noindex",
    },
  });
}
