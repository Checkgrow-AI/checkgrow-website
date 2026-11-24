import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import {
  SITE_URL,
  ICON_VERSION,
  FAVICON_SVG,
  ICON_192,
  APPLE_TOUCH_ICON,
  SOCIAL_IMAGE,
  socialImage,
} from "@/lib/seo";
import { SiteBodyEndScripts, SiteBodyStartScripts, SiteHeadScripts } from "@/components/SiteScripts";
import { notFound } from "next/navigation";
import { localeFromSegment, localeInfo, localePath, locales, segmentOf } from "@/i18n/config";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { getDictionary, languageCopy } from "@/i18n/dictionaries";
import { I18nProvider } from "@/i18n/client";
import { LanguageSuggestion } from "@/components/LanguageSuggestion";


export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

/* site-wide metadata in the page's language; pages override title,
   description, canonical and alternates with pageMetadata() */
export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).seo;
  return pageMetadata(lang, {
    path: "/",
    title: t.site.title,
    description: t.site.description,
    markdown: "/index.md",
    extra: {
      metadataBase: new URL(SITE_URL),
      applicationName: "Checkgrow",
      category: t.site.appCategory,
      keywords: [...t.site.keywords],
      icons: {
        icon: [
          { url: `/favicon.ico?v=${ICON_VERSION}`, sizes: "16x16 32x32 48x48" },
          { url: FAVICON_SVG, type: "image/svg+xml" },
          { url: ICON_192, sizes: "192x192", type: "image/png" },
        ],
        apple: [{ url: APPLE_TOUCH_ICON, sizes: "180x180", type: "image/png" }],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
      openGraph: {
        description: t.site.ogDescription,
        /* absolute, as before: https://checkgrow.com, https://checkgrow.com/de, … */
        url: `${SITE_URL}${lang === "en" ? "" : localePath(lang, "/")}`,
        type: "website",
        images: [socialImage(t.socialImageAlt)],
      },
      twitter: {
        title: t.site.twitterTitle,
        description: t.site.twitterDescription,
        images: [SOCIAL_IMAGE.url],
      },
    },
  });
}

/* one static build per language. Only real languages ever reach this
   segment: src/proxy.ts rewrites every unprefixed path to /en/…. No
   dynamicParams = false here: it is inherited by every child route and
   would turn the [...missing] 404 into Next's bare error page. */
export function generateStaticParams() {
  return locales.map((l) => ({ lang: segmentOf(l) }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = localeFromSegment((await params).lang);
  if (!lang) notFound();
  const dict = getDictionary(lang);
  return (
    <html lang={localeInfo[lang].tag} className={GeistSans.variable}>
      <head>
        <SiteHeadScripts />
      </head>
      <body>
        <SiteBodyStartScripts lang={lang} />
        <I18nProvider lang={lang} messages={{ common: dict.common }}>
          <MotionProvider>{children}</MotionProvider>
          {/* each language offers itself in its own words */}
          <LanguageSuggestion copy={languageCopy()} />
        </I18nProvider>
        <SiteBodyEndScripts lang={lang} />
      </body>
    </html>
  );
}
