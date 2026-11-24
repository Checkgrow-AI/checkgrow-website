/* /sales: Checkgrow Sales presented as a product of its own, for
   enterprise go-to-market teams. The copy lives in the "sales" dictionary
   (src/i18n/dictionaries/<lang>/sales.ts); this module keeps its types and
   the non-text data. Product facts follow doc.checkgrow.com (Lists, Sales,
   LinkedIn Compliant API, Leads); the animated screens are the nine Sales
   mockups from the "Checkgrow Material" design canvas
   (src/components/sales/salesMockups.generated.ts). */

import type { SalesMockupKey } from "@/components/sales/salesMockups.generated";
import type { SalesIconName } from "@/components/sales/SalesIcon";

export type SalesFunction = {
  mockup: SalesMockupKey;
  title: string;
  body: string;
  /* a short alt for the animated screen */
  screen: string;
  note?: string;
};

export type SalesModule = {
  id: string;
  name: string;
  promise: string;
  title: string;
  intro: string;
  functions: readonly SalesFunction[];
};

export type SalesControl = { icon: SalesIconName; title: string; body: string };

/* the team photo above the FAQ (its alt text is in the dictionary) */
export const salesTeamImage = { src: "/team/checkgrow-go-to-market-team.webp", width: 1600, height: 1280 };

/* the testimonials quoted on the page, by id */
export const salesQuoteIds = ["salim-sayed", "minka", "amanda-bester"] as const;
