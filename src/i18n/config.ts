/* Languages of checkgrow.com. English is the source and lives at the
   unprefixed URLs, so existing links, ad landings and UTMs never change;
   every other language lives under its prefix. See docs/i18n.md. */

export const locales = ["en", "pt-BR", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

type LocaleInfo = {
  /* URL prefix without slashes; "" for English */
  prefix: string;
  /* BCP 47 tag for <html lang>, hreflang and Intl */
  tag: string;
  /* Open Graph locale */
  og: string;
  /* the language's own name, for the selector */
  name: string;
  /* compact label in the header */
  short: string;
};

/* i18n-allow: each language is named in its own language, in every language */
export const localeInfo: Record<Locale, LocaleInfo> = {
  en: { prefix: "", tag: "en", og: "en_GB", name: "English", short: "EN" },
  // i18n-allow: language name in its own language
  "pt-BR": { prefix: "pt-br", tag: "pt-BR", og: "pt_BR", name: "Português (Brasil)", short: "PT" },
  de: { prefix: "de", tag: "de", og: "de_DE", name: "Deutsch", short: "DE" },
  // i18n-allow: language name in its own language
  fr: { prefix: "fr", tag: "fr", og: "fr_FR", name: "Français", short: "FR" },
};

/* the [lang] route segment uses the prefix, with "en" internally for English */
export const segmentOf = (locale: Locale) => localeInfo[locale].prefix || "en";

export function localeFromSegment(segment: string): Locale | null {
  if (segment === "en") return "en";
  return locales.find((l) => localeInfo[l].prefix === segment.toLowerCase()) ?? null;
}

const prefixed = locales.filter((l) => localeInfo[l].prefix);

/* "/de/pricing?x#y" -> { locale: "de", path: "/pricing?x#y" } */
export function splitLocale(href: string): { locale: Locale; path: string } {
  for (const l of prefixed) {
    const p = `/${localeInfo[l].prefix}`;
    if (href === p || href.startsWith(`${p}/`) || href.startsWith(`${p}?`) || href.startsWith(`${p}#`)) {
      const rest = href.slice(p.length);
      return { locale: l, path: rest.startsWith("/") ? rest : `/${rest}` };
    }
  }
  return { locale: defaultLocale, path: href || "/" };
}

/* An internal path in a language. Only site pages are localised: anything
   that is not a root-relative path (external, mailto:, #hash), and files,
   API routes and markdown, pass through unchanged. */
export function localePath(locale: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const pathname = href.split(/[?#]/)[0];
  if (/^\/(api|_next|markdown)(\/|$)/.test(pathname) || /\.[a-z0-9]+$/i.test(pathname)) return href;
  const { path } = splitLocale(href);
  const prefix = localeInfo[locale].prefix;
  if (!prefix) return path;
  if (path === "/") return `/${prefix}`;
  if (path.startsWith("/?") || path.startsWith("/#")) return `/${prefix}${path.slice(1)}`;
  return `/${prefix}${path}`;
}

/* hreflang alternates for a path: every language plus x-default (English) */
export function languageAlternates(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const l of locales) out[localeInfo[l].tag] = localePath(l, path);
  out["x-default"] = localePath(defaultLocale, path);
  return out;
}
