import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import {
  organizationJsonLd,
  websiteJsonLd,
  SITE_URL,
  ICON_VERSION,
  FAVICON_SVG,
  ICON_192,
  APPLE_TOUCH_ICON,
  SOCIAL_IMAGE,
} from "@/lib/seo";
import { ATTRIBUTION_SCRIPT } from "@/lib/attribution";

const GTM_ID = "GTM-WZ5LH56L";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Checkgrow · The go-to-market engine that learns your business",
  description:
    "Checkgrow is a growth marketing platform connecting knowledge, campaigns and reporting to help teams grow faster. Book a demo and grow your team.",
  applicationName: "Checkgrow",
  category: "Marketing software",
  keywords: [
    "AI growth marketing platform",
    "go-to-market engine",
    "marketing knowledge base",
    "AI marketing agents",
    "CMO dashboard",
    "enterprise marketing team software",
    "campaign strategy AI",
    "competitor tracking",
    "GA4 insights",
    "marketing attribution software",
    "CAC tracking without spreadsheets",
    "launch Meta and Google campaigns from one brief",
    "AI that knows your brand and ICP",
    "board-ready marketing dashboard",
    "marketing without an agency",
  ],
  alternates: { canonical: "/" },
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
    title: "Checkgrow · The go-to-market engine that learns your business",
    description:
      "Everything your company knows, in one system: learning, improving, and working for every team. Turning knowledge into customers and recognition.",
    url: SITE_URL,
    siteName: "Checkgrow",
    type: "website",
    locale: "en_GB",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkgrow · AI Native Growth Marketing",
    description:
      "One system where knowledge, research, execution and measurement connect and compound.",
    images: [SOCIAL_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        {/* Consent Mode v2 defaults to denied and must reach the dataLayer
            before GTM loads; the Usercentrics CMP lifts consent
            (consent_status event), so nothing personal fires before the
            visitor agrees */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 2000
});`,
          }}
        />
        {/* campaign attribution cookies + attribution_* dataLayer values,
            ready for GTM's first page view (see lib/attribution.ts) */}
        <script dangerouslySetInnerHTML={{ __html: ATTRIBUTION_SCRIPT }} />
        {/* Google Tag Manager: every tag (GA4, Google Ads, Meta, LinkedIn)
            lives in the container; the site only sends dataLayer events
            (lib/track.ts). Container source: docs/gtm/. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga -- plain
            snippet keeps the Consent Mode default ahead of the container */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Usercentrics consent banner — async scripts are hoisted into <head> */}
        <script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="vrUg52RzUffi2O"
          async
        />
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
