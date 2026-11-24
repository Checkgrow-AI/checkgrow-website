/* Interpolation and plurals for dictionary strings. Dictionaries hold
   plain data (they cross from server to client), so variables are written
   as {name} placeholders and plurals as Intl.PluralRules categories. */
import { localeInfo, type Locale } from "./config";

export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

export type Plural = { one: string; other: string; zero?: string; few?: string; many?: string };

export function plural(locale: Locale, n: number, forms: Plural, vars: Record<string, string | number> = {}): string {
  const cat = n === 0 && forms.zero ? "zero" : (new Intl.PluralRules(localeInfo[locale].tag).select(n) as keyof Plural);
  return fmt(forms[cat] ?? forms.other, { n, ...vars });
}
