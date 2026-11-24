/* seo copy (English source): the site-wide metadata of the root layout,
   the default share image's alt text and the structured data (JSON-LD).
   Everything here is grounded in what the site itself states.
   See docs/i18n.md. */
export const seo = {
  site: {
    title: "Checkgrow · The go-to-market engine that learns your business",
    description:
      "Checkgrow is a growth marketing platform connecting knowledge, campaigns and reporting to help teams grow faster. Book a demo and grow your team.",
    appCategory: "Marketing software",
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
    /* Open Graph keeps the page title with its own description */
    ogDescription:
      "Everything your company knows, in one system: learning, improving, and working for every team. Turning knowledge into customers and recognition.",
    twitterTitle: "Checkgrow · AI Native Growth Marketing",
    twitterDescription: "One system where knowledge, research, execution and measurement connect and compound.",
  },
  socialImageAlt:
    "Checkgrow: the growth brain for scale-ups and enterprise. Knowledge, campaigns, content and sales in one loop. Book a demo with free onboarding.",
  organization: {
    description:
      "AI Native Growth Marketing. Checkgrow connects company knowledge, market research, marketing execution and measurement in one system.",
  },
  software: {
    description:
      "A go-to-market engine where AI agents, campaigns, research and reporting all read from the same company knowledge base. Built for CMOs, marketing teams and founders.",
    audienceType:
      "CMOs, enterprise marketing teams, marketing and sales operations, growth and analytics teams, founders",
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
    offersDescription:
      "Business from €499/month, Agency €997/month, Growth €4,997/month, Enterprise custom. Prices exclude VAT.",
  },
  videos: {
    platformTour: {
      name: "Checkgrow platform tour",
      description:
        "A guided look inside Checkgrow: the Knowledge Center and integrations, competitors, social media, content, website, campaigns and creatives, insights, sales lists, outreach and leads, and the Grow chat, working as one growth operating system.",
    },
    demoReview: {
      name: "Checkgrow real demo, no cuts",
      description:
        "Checkgrow runs a real go-to-market end to end: campaign strategy, creatives per channel, funnel reporting and AI insights, in one take with no cuts.",
    },
  },
} as const;
