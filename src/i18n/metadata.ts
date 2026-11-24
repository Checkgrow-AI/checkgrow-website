/* Page metadata in one language: canonical, hreflang alternates for every
   language (+ x-default), og:locale and its alternates. Every page builds
   its metadata through pageMetadata(), so no page can drift on SEO. */
import type { Metadata } from "next";
import { languageAlternates, localeFromSegment, localeInfo, localePath, locales, type Locale } from "./config";

/* the language of a [lang] route segment; the proxy only lets real ones in */
export function langOf(segment: string): Locale {
  return localeFromSegment(segment) ?? "en";
}

type PageMeta = {
  /* path without a language prefix, e.g. "/pricing" */
  path: string;
  title: string;
  description: string;
  /* extra Metadata merged over the defaults (openGraph and twitter are merged) */
  extra?: Metadata;
  /* also offer the page as markdown (English only: lib/markdown.ts) */
  markdown?: string;
};

export function pageMetadata(lang: Locale, { path, title, description, extra = {}, markdown }: PageMeta): Metadata {
  const url = localePath(lang, path);
  const { openGraph, twitter, alternates, ...rest } = extra;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
      ...(markdown && lang === "en" ? { types: { "text/markdown": markdown } } : {}),
      ...alternates,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Checkgrow",
      locale: localeInfo[lang].og,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeInfo[l].og),
      ...openGraph,
    },
    twitter: { card: "summary_large_image", title, description, ...twitter },
    ...rest,
  };
}
