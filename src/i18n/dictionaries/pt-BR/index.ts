/* The Brazilian Portuguese dictionary: one namespace per file, each typed
   against the English source (src/i18n/types.ts). */
import { common } from "./common";
import { seo } from "./seo";
import { home } from "./home";
import { pricing } from "./pricing";
import { faq } from "./faq";
import { features } from "./features";
import { sales } from "./sales";
import { useCases } from "./useCases";
import { useCaseMockups } from "./useCaseMockups";
import { demo } from "./demo";
import { testimonials } from "./testimonials";
import { stories } from "./stories";
import { tutorials } from "./tutorials";
import { news } from "./news";

export const ptBR = {
  common,
  seo,
  home,
  pricing,
  faq,
  features,
  sales,
  useCases,
  useCaseMockups,
  demo,
  testimonials,
  stories,
  tutorials,
  news,
} as const;
