/* Server side: the mockup translation table for one language, limited to
   the texts of one group of mockups ("features" or "sales"), so a page only
   ships the translations its own mockups need. English has no table. */
import type { Locale } from "../config";
import type { MockupTable } from "../mockups";
import { mockupTexts } from "../mockupTexts.generated";
import { mockups as ptBR } from "./pt-BR/mockups";
import { mockups as de } from "./de/mockups";
import { mockups as fr } from "./fr/mockups";

/* src/i18n/dictionaries/<lang>/mockups.ts */
const tables: Partial<Record<Locale, MockupTable>> = { "pt-BR": ptBR, de, fr };

export function getMockupTable(lang: Locale, group: "features" | "sales"): MockupTable | null {
  const table = tables[lang];
  if (!table) return null;
  return Object.fromEntries(Object.entries(table).filter(([text]) => mockupTexts[text]?.some((s) => s.startsWith(`${group}:`))));
}
