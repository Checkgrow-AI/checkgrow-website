import { NextResponse, type NextRequest } from "next/server";
import { localeInfo, locales } from "@/i18n/config";

/* Language routing (docs/i18n.md). Pages live under app/[lang]:

     /de/pricing, /fr/…, /pt-br/…  served as they are
     /pricing (English)             rewritten to /en/pricing internally;
                                    the visible URL never changes
     /en/…                          served as English; its canonical is the
                                    unprefixed URL. Deliberately no redirect:
                                    Next re-enters the proxy with internal
                                    /en/… paths (e.g. while rendering a 404)

   Every page request carries x-cg-lang, so app/global-not-found.tsx can
   answer in the visitor's language.

   The query string always travels unchanged (utm_*, click ids). No
   language detection, no redirect by browser language, no cookies.

   Markdown for AI assistants: an English page requested with
   Accept: text/markdown is answered from /markdown (lib/markdown.ts).
   The ".md" URLs are rewritten in next.config.ts; they contain a dot, so
   this proxy never sees them. */

const PREFIXES = new Set(locales.map((l) => localeInfo[l].prefix).filter(Boolean));
const MARKDOWN_PAGES = /^\/(pricing|sales|faq|features|use-cases(\/[^/]+)?|news(\/[^/]+)?)?$/;

const withLang = (request: NextRequest, segment: string) => {
  const headers = new Headers(request.headers);
  headers.set("x-cg-lang", segment);
  return { request: { headers } };
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  const first = pathname.split("/")[1] ?? "";
  if (first === "en" || PREFIXES.has(first)) return NextResponse.next(withLang(request, first));
  /* a prefix typed in another case, e.g. /DE/pricing or /pt-BR */
  if (PREFIXES.has(first.toLowerCase())) {
    url.pathname = `/${first.toLowerCase()}${pathname.slice(first.length + 1)}`;
    return NextResponse.redirect(url, 308);
  }

  if (/text\/markdown/.test(request.headers.get("accept") ?? "") && MARKDOWN_PAGES.test(pathname)) {
    url.pathname = `/markdown${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url, withLang(request, "en"));
}

export const config = {
  /* pages only: no API routes, build assets, markdown, or any file */
  matcher: ["/((?!api|_next|markdown|.*\\..*).*)"],
};
