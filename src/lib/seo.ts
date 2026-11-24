/* Single source of truth for SEO: the canonical URL, the brand icons and
   the structured data. The copy (descriptions, feature list, video
   titles) lives in the `seo` dictionary and is passed in, so every
   language gets its own; nothing here invents numbers or claims. */

import { localeInfo, type Locale } from "@/i18n/config";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://checkgrow.com";

/* Brand icon and default share image. File names carry a content hash, so
   browsers and social networks always fetch the current version: replace
   the file and its hash together (docs/brand-assets.md). /favicon.ico
   stays at its fixed path because browsers and Google request it there. */
export const ICON_VERSION = "fbe22783";
export const FAVICON_SVG = `/brand/icons/checkgrow-favicon-${ICON_VERSION}.svg`;
export const ICON_192 = `/brand/icons/checkgrow-icon-192-${ICON_VERSION}.png`;
export const ICON_512 = `/brand/icons/checkgrow-icon-512-${ICON_VERSION}.png`;
export const APPLE_TOUCH_ICON = `/brand/icons/checkgrow-apple-touch-icon-${ICON_VERSION}.png`;

export const SOCIAL_IMAGE = {
  url: "/social/checkgrow-growth-brain-scale-ups-enterprise-5ddcbbcc.jpg",
  width: 1200,
  height: 627,
  /* i18n-allow: English fallback for pages not yet localised; localised pages use socialImage(seo.socialImageAlt) */
  alt: "Checkgrow: the growth brain for scale-ups and enterprise. Knowledge, campaigns, content and sales in one loop. Book a demo with free onboarding.",
};

/* the default share image with its alt text in the page's language */
export const socialImage = (alt: string) => ({ ...SOCIAL_IMAGE, alt });

/* structured data language: English keeps its British tag */
export const jsonLdLanguage = (lang: Locale) => (lang === "en" ? "en-GB" : localeInfo[lang].tag);

export const organizationJsonLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Checkgrow",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logos/symbol-round-light.svg`,
  description,
  email: "bruno@checkgrow.com",
  sameAs: ["https://www.trustpilot.com/review/checkgrow.com"],
});

export const websiteJsonLd = (lang: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Checkgrow",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: jsonLdLanguage(lang),
});

type SoftwareCopy = {
  description: string;
  audienceType: string;
  featureList: readonly string[];
  offersDescription: string;
};

export const softwareJsonLd = (t: SoftwareCopy) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Checkgrow",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: t.description,
  brand: { "@id": `${SITE_URL}/#organization` },
  audience: {
    "@type": "BusinessAudience",
    audienceType: t.audienceType,
  },
  featureList: t.featureList,
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "499",
    highPrice: "4997",
    offerCount: "4",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    description: t.offersDescription,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "12",
    url: "https://www.trustpilot.com/review/checkgrow.com",
  },
});

type VideoCopy = { name: string; description: string };

export const videosJsonLd = (t: { platformTour: VideoCopy; demoReview: VideoCopy }) => [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t.platformTour.name,
    description: t.platformTour.description,
    thumbnailUrl: `${SITE_URL}/videos/checkgrow-platform-v2-poster.jpg`,
    contentUrl: `${SITE_URL}/videos/checkgrow-platform-v2.mp4`,
    uploadDate: "2026-11-12",
    duration: "PT2M26S",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: t.demoReview.name,
    description: t.demoReview.description,
    thumbnailUrl: `${SITE_URL}/videos/checkgrow-demo-review-poster.jpg`,
    contentUrl: `${SITE_URL}/videos/checkgrow-demo-review.mp4`,
    uploadDate: "2026-08-10",
    duration: "PT2M41S",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
];

/* FAQPage structured data, built from the same items the page renders
   (the homepage passes homeFaqItems(dict.faq)), so they can never drift */
export const faqJsonLd = (items: readonly { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
