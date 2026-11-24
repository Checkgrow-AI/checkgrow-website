/* Server side of i18n. A page (or layout) calls setRequestLang(lang) first
   thing; server components below it read the language and their copy with
   getLang()/getT() instead of receiving a lang prop. The store is React's
   per-request cache, so concurrent requests never share it. Client
   components use useT() from ./client instead. */
import { cache } from "react";
import type { Locale } from "./config";
import { getDictionary, type Dictionary } from "./dictionaries";

const store = cache(() => ({ lang: null as Locale | null }));

export function setRequestLang(lang: Locale) {
  store().lang = lang;
}

export function getLang(): Locale {
  const lang = store().lang;
  if (!lang) throw new Error("getLang() before setRequestLang(): call it at the top of the page or layout");
  return lang;
}

export function getT<K extends keyof Dictionary>(ns: K): Dictionary[K] {
  return getDictionary(getLang())[ns];
}
