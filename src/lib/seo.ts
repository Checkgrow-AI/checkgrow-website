/* Single source of truth for SEO: the canonical URL, the FAQ (rendered on
   the page AND emitted as FAQPage JSON-LD, so they can never drift), and
   the structured data. All copy is grounded in what the site itself
   states; nothing here invents numbers or claims. */

import { homeFaqItems } from "./faq";

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
  alt: "Checkgrow: the growth brain for scale-ups and enterprise. Knowledge, campaigns, content and sales in one loop. Book a demo with free onboarding.",
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Checkgrow",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logos/symbol-round-light.svg`,
  description:
    "AI Native Growth Marketing. Checkgrow connects company knowledge, market research, marketing execution and measurement in one system.",
  email: "bruno@checkgrow.com",
  sameAs: ["https://www.trustpilot.com/review/checkgrow.com"],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Checkgrow",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Checkgrow",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "A go-to-market engine where AI agents, campaigns, research and reporting all read from the same company knowledge base. Built for CMOs, marketing teams and founders.",
  brand: { "@id": `${SITE_URL}/#organization` },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "CMOs, enterprise marketing teams, marketing and sales operations, growth and analytics teams, founders",
  },
  featureList: [
    "Knowledge Centre: brand, products, audience and numbers defined once",
    "AI Assistant and 40+ AI Agents that already know your business",
    "Campaigns with budgets, creatives and tracking in one record",
    "Social media monitoring matched to buyer personas",
    "Competitor tracking with live ad activity and AI gap analysis",
    "Company prospecting with fit scores and buying signals",
    "GA4, Meta and Google Ads unified into plain-language insights",
    "Website conversion audits with ranked fixes",
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "499",
    highPrice: "4997",
    offerCount: "4",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    description: "Business from €499/month, Agency €997/month, Growth €4,997/month, Enterprise custom. Prices exclude VAT.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "12",
    url: "https://www.trustpilot.com/review/checkgrow.com",
  },
};

export const videosJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Checkgrow platform tour",
    description:
      "A guided look inside Checkgrow: the Knowledge Center and integrations, competitors, social media, content, website, campaigns and creatives, insights, sales lists, outreach and leads, and the Grow chat, working as one growth operating system.",
    thumbnailUrl: `${SITE_URL}/videos/checkgrow-platform-v2-poster.jpg`,
    contentUrl: `${SITE_URL}/videos/checkgrow-platform-v2.mp4`,
    uploadDate: "2026-11-12",
    duration: "PT2M26S",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Checkgrow real demo, no cuts",
    description:
      "Checkgrow runs a real go-to-market end to end: campaign strategy, creatives per channel, funnel reporting and AI insights, in one take with no cuts.",
    thumbnailUrl: `${SITE_URL}/videos/checkgrow-demo-review-poster.jpg`,
    contentUrl: `${SITE_URL}/videos/checkgrow-demo-review.mp4`,
    uploadDate: "2026-08-10",
    duration: "PT2M41S",
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
];

/* the homepage FAQ: a short selection; every question lives on /faq */
export const faqItems = homeFaqItems;

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
