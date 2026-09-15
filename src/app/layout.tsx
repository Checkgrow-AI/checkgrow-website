import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareJsonLd,
  faqJsonLd,
  videosJsonLd,
  SITE_URL,
} from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Checkgrow · The go-to-market engine that learns your business",
  description:
    "Checkgrow is a growth marketing platform connecting knowledge, campaigns and reporting to help teams grow faster. Join the waitlist for early access today.",
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
    icon: "/brand/logos/favicon-inverse.svg",
    apple: "/apple-icon.png",
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Checkgrow: the go-to-market engine that learns your business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkgrow · AI Native Growth Marketing",
    description:
      "One system where knowledge, research, execution and measurement connect and compound.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        {/* Usercentrics consent banner — async scripts are hoisted into <head> */}
        <script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="vrUg52RzUffi2O"
          async
        />
        {/* Google tag (gtag.js) — Consent Mode v2 defaults to denied; the
            Usercentrics CMP lifts consent, so nothing personal fires
            before the visitor agrees */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga -- plain
            gtag snippet keeps the Consent Mode default ahead of config */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GB1T5THY0V"
        />
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
});
gtag('js', new Date());
gtag('config', 'G-GB1T5THY0V');`,
          }}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videosJsonLd) }}
        />
      </body>
    </html>
  );
}
