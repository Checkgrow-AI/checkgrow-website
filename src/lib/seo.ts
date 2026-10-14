/* Single source of truth for SEO: the canonical URL, the FAQ (rendered on
   the page AND emitted as FAQPage JSON-LD, so they can never drift), and
   the structured data. All copy is grounded in what the site itself
   states; nothing here invents numbers or claims. */

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
    "@type": "Offer",
    price: "79",
    priceCurrency: "EUR",
    availability: "https://schema.org/PreOrder",
    description: "€79/month at launch. Early access via free waitlist.",
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
      "A guided look inside Checkgrow: the Knowledge Centre, campaigns, AI agents, competitor intelligence and insights working as one growth operating system.",
    thumbnailUrl: `${SITE_URL}/videos/checkgrow-platform-poster.jpg`,
    contentUrl: `${SITE_URL}/videos/checkgrow-platform.mp4`,
    uploadDate: "2026-08-11",
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

export const faqItems = [
  {
    q: "What is Checkgrow?",
    a: "Checkgrow is a go-to-market engine for marketing teams, founders and enterprises. It connects your company knowledge, market research, day-to-day execution and measurement in one system, so every team works from the same context and every campaign starts from what the business already knows.",
  },
  {
    q: "Who is Checkgrow for?",
    a: "Founders and CMOs who set direction, marketing and sales operations teams who execute, and growth and analytics people who close the loop. It fits companies from scale-ups to enterprise marketing teams that are tired of re-explaining the business to every tool, agency and AI prompt.",
  },
  {
    q: "What can I actually do with Checkgrow?",
    a: "Onboard your brand from your website, then run real work: build a funnel strategy in an afternoon, generate Meta and Google campaign strategies linked to your paid channels, turn AI output into owned and approved tasks, read GA4, Meta and Google Ads as plain-language insights, track competitors' live ads, and run consultant-grade conversion audits of your website on demand.",
  },
  {
    q: "How is Checkgrow different from ChatGPT or a generic AI tool?",
    a: "A generic chat starts from zero every time and forgets what worked. Checkgrow keeps a persistent knowledge base of your brand, products, audience and numbers that every agent, campaign and report reads from, and every result feeds back in. The difference is memory and connected execution, not better prompts.",
  },
  {
    q: "What is a growth operating system?",
    a: "A growth operating system connects company knowledge, strategy, execution, market intelligence and performance data in one place, so decisions are grounded and every result feeds back in. Checkgrow is that system for go-to-market teams: one shared brain for strategy, content, campaigns, sales intelligence and reporting.",
  },
  {
    q: "Which tools does Checkgrow replace?",
    a: "The typical growth stack it covers spans eleven subscriptions: brand wikis, AI content tools, campaign ops boards, social suites, competitive intelligence, prospecting databases, CRO tooling, analytics dashboards, consent tracking, work tracking and creative direction. That stack commonly runs around €1,199 per month across tools; Checkgrow is one platform at €79 per month.",
  },
  {
    q: "Which platforms does Checkgrow connect to?",
    a: "Google Analytics 4, Google Ads, Meta Ads, Instagram and LinkedIn for channels and measurement, with automation via n8n. Model-side it works across OpenAI, Google Gemini, Anthropic Claude and Perplexity.",
  },
  {
    q: "Which AI models does Checkgrow use?",
    a: "Checkgrow works across multiple frontier models, including OpenAI, Google Gemini, Perplexity and Anthropic Claude. You choose the model per job, keep costs visible, and are never locked in.",
  },
  {
    q: "Who owns the data and knowledge I put in?",
    a: "You do. Your knowledge base, research and results stay yours: no lock-ins and no hidden rules. Companies should understand how things work and own their data; that is a founding principle, not a feature.",
  },
  {
    q: "How fast can I launch campaigns with Checkgrow?",
    a: "In hours, not weeks. One brief becomes Meta and Google campaign strategies, brainstorms, creatives and deployment, all linked to your paid channels, and the funnel is readable the same day: from insight to live ad in the same afternoon.",
  },
  {
    q: "Can a small team or a team without an agency use Checkgrow?",
    a: "Yes, that is the point. A growth team of three can operate like thirty: AI agents produce the work around the clock, marketing ops run without a dedicated project manager, reporting is board-ready without a data analyst, and there is no agency invoice.",
  },
  {
    q: "How much does Checkgrow cost?",
    a: "€79 per month at launch, replacing a stack that typically costs around €1,199 per month. Joining the waitlist is free, guarantees free access at launch, and requires no payment details.",
  },
  {
    q: "What do I get by joining the waitlist?",
    a: "Early access to the platform as we open new workspaces, plus a short onboarding session with our team to set up your knowledge base. No payment details are required to join.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
