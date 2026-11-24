/* Server side: load a language's dictionary. Never import this from a
   "use client" module (pnpm i18n:check enforces it): client components get
   their copy through <I18nProvider>/<Messages> and useT(). */
import { locales, type Locale } from "../config";
import { en } from "./en";
import { ptBR } from "./pt-BR";
import { de } from "./de";
import { fr } from "./fr";
import type { Localized } from "../types";

export type Dictionary = Localized<typeof en>;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "pt-BR": ptBR,
  de,
  fr,
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/* the language suggestion is written in the language it offers, so the
   layout hands every language's (tiny) copy to the client */
export function languageCopy(): Record<Locale, Dictionary["common"]["language"]> {
  return locales.reduce(
    (acc, l) => ({ ...acc, [l]: dictionaries[l].common.language }),
    {} as Record<Locale, Dictionary["common"]["language"]>,
  );
}
