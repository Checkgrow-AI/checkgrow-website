import type { Metadata } from "next";
import { headers } from "next/headers";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { SiteBodyEndScripts, SiteBodyStartScripts, SiteHeadScripts } from "@/components/SiteScripts";
import { NotFoundContent } from "@/components/NotFoundContent";
import { defaultLocale, localeFromSegment, localeInfo } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { I18nProvider } from "@/i18n/client";

/* The one 404 for every language: the root layout lives under app/[lang],
   so Next cannot compose a 404 from it (docs: file-conventions/not-found).
   src/proxy.ts passes the language as x-cg-lang; consent, attribution and
   GTM are the same components the layout uses. */

export async function generateMetadata(): Promise<Metadata> {
  const lang = localeFromSegment((await headers()).get("x-cg-lang") ?? "") ?? defaultLocale;
  // i18n-allow: brand suffix of the page title, the same in every language
  return { title: `${getDictionary(lang).common.notFound.title} · Checkgrow`, robots: { index: false } };
}

export default async function GlobalNotFound() {
  const lang = localeFromSegment((await headers()).get("x-cg-lang") ?? "") ?? defaultLocale;
  const dict = getDictionary(lang);
  return (
    <html lang={localeInfo[lang].tag} className={GeistSans.variable}>
      <head>
        <SiteHeadScripts />
      </head>
      <body>
        <SiteBodyStartScripts lang={lang} />
        <I18nProvider lang={lang} messages={{ common: dict.common }}>
          <MotionProvider>
            <Nav homePage={false} />
            <NotFoundContent />
            <Footer homePage={false} />
          </MotionProvider>
        </I18nProvider>
        <SiteBodyEndScripts lang={lang} />
      </body>
    </html>
  );
}
