/* Plans and the stack comparison: one source for the pricing table, the
   FAQ, the markdown pages and llms.txt. */

export type Billing = "monthly" | "annual";

export type Spec = { label: string; value: string; note?: string };

export type Plan = {
  id: string;
  name: string;
  audience: string;
  description: string;
  /* null = custom quote */
  monthly: number | null;
  featured?: string;
  cta: { label: string; href: string; external?: boolean };
  ctaNote: string;
  specs: [Spec, Spec, Spec, Spec];
  service: { title: string; body: string; team?: boolean };
  inheritance: string;
  includes: string[];
};

export const SALES_CALENDAR = "https://calendar.app.google/HhKnzyVUaZGaQ4u39";

/* Four plans in one row. Every card has the same blocks in the same order
   (audience, name, price, CTA, four specs, service, inclusions), laid on a
   shared subgrid so each block lines up across the row. */
export const plans: Plan[] = [
  {
    id: "business",
    name: "Business",
    audience: "For a single brand",
    description: "The complete platform for a single brand, with room for the whole team.",
    monthly: 499,
    cta: { label: "Book a demo", href: "/book-a-demo" },
    ctaNote: "No credit card required",
    specs: [
      { label: "Brands", value: "1 brand" },
      { label: "Growth Credits", value: "5,000 / month", note: "Top up anytime" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Self-serve" },
    ],
    service: { title: "Help center & chat support", body: "Guides, tutorials and our team on chat when you need a hand." },
    inheritance: "The full platform",
    includes: [
      "Company brain in the Knowledge Center",
      "Marketing and Sales suites",
      "Creative Studio and AI Assistant",
      "Insights, funnel and smart reporting",
      "GA4, Meta, Google Ads and LinkedIn",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    audience: "For agencies and multi-brand teams",
    description: "Every brand and client in its own workspace, with our team in your corner.",
    monthly: 997,
    cta: { label: "Book a demo", href: "/book-a-demo" },
    ctaNote: "No credit card required",
    specs: [
      { label: "Brands", value: "Unlimited" },
      { label: "Growth Credits", value: "5,000 / month", note: "Shared pool · top up anytime" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Self-serve" },
    ],
    service: { title: "1 hour / month with our growth team", body: "A monthly customer-success session to review results and plan the next move." },
    inheritance: "Everything in Business, plus",
    includes: [
      "Multi-brand: unlimited client brands",
      "A separate company brain per brand",
      "Switch between client workspaces",
      "Monthly growth session with our team",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    audience: "Your growth team, included",
    description: "Our specialists run your ads, reports and follow-up, alongside your team.",
    monthly: 4997,
    featured: "Done with you",
    cta: { label: "Talk to our team", href: SALES_CALENDAR, external: true },
    ctaNote: "Book a call with our team",
    specs: [
      { label: "Brands", value: "Unlimited" },
      { label: "Growth Credits", value: "5,000 / month", note: "Top up anytime" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Up to 3", note: "Extra accounts billed separately" },
    ],
    service: { title: "A dedicated growth team", body: "", team: true },
    inheritance: "Everything in Agency, plus",
    includes: [
      "Dedicated account manager",
      "Ad management: ads created, launched and optimised",
      "Performance reports for every account",
      "Customer success across your accounts",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "Built around your organisation",
    description: "Your growth platform, on your infrastructure, under your brand.",
    monthly: null,
    cta: { label: "Contact sales", href: SALES_CALENDAR, external: true },
    ctaNote: "Book a call with our team",
    specs: [
      { label: "Brands", value: "Unlimited" },
      { label: "Growth Credits", value: "Custom" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Custom" },
    ],
    service: { title: "A custom team for your build", body: "Engineers and growth specialists dedicated to your roll-out." },
    inheritance: "Everything in Growth, plus",
    includes: [
      "Custom development and integrations",
      "White-label, branded platform",
      "Self-hosted infrastructure and data sovereignty",
      "Advanced security and compliance reviews",
      "Long-term agreements",
    ],
  },
];

/* The Growth plan's team: the roles that work on your accounts */
export const growthTeam = [
  { initials: "AM", role: "Account manager" },
  { initials: "AD", role: "Ad management" },
  { initials: "CR", role: "Creative production" },
  { initials: "CS", role: "Customer success" },
];

export const comparisonRows = [
  {
    cat: "Brand & knowledge",
    tools: "Notion or Frontify",
    toolNote: "Guidelines live in a doc nobody opens",
    price: "€49/mo",
    cg: "Knowledge Center + Brand Basics",
    cgNote: "A company brain built for growth, not files and chat prompts",
  },
  {
    cat: "AI content",
    tools: "Jasper or Copy.ai",
    toolNote: "Re-briefed on your business every prompt",
    price: "€99/mo",
    cg: "AI Agents (40+) + AI Assistant",
    cgNote: "Already knows your product, tone and audience",
  },
  {
    cat: "Campaign ops",
    tools: "CoSchedule or Monday",
    toolNote: "Briefs sit apart from the work itself",
    price: "€79/mo",
    cg: "Campaigns + Creatives",
    cgNote: "Brief, creative and tracking in one record",
  },
  {
    cat: "Social",
    tools: "Hootsuite or Sprout Social",
    toolNote: "Surfaces volume, not the right conversations",
    price: "€149/mo",
    cg: "Social Media + Content Monitoring",
    cgNote: "Matched against your buyer personas",
  },
  {
    cat: "Competitive intel",
    tools: "Semrush or Similarweb",
    toolNote: "Another login, another quarterly report",
    price: "€199/mo",
    cg: "Competitors",
    cgNote: "Live ad activity plus AI gap analysis",
  },
  {
    cat: "Prospecting",
    tools: "Apollo.io or ZoomInfo",
    toolNote: "Exports to a sheet that goes stale",
    price: "€199/mo",
    cg: "Companies",
    cgNote: "Fit score, buying signals, decision-makers",
  },
  {
    cat: "Conversion",
    tools: "Hotjar, VWO or a CRO agency",
    toolNote: "A PDF of findings once a quarter",
    price: "€129/mo",
    cg: "Website audit",
    cgNote: "Scored, with a ranked fix per finding",
  },
  {
    cat: "Analytics",
    tools: "Databox or Mixpanel",
    toolNote: "Dashboards you still have to interpret",
    price: "€99/mo",
    cg: "Insights + Smart Reporting",
    cgNote: "Plain-language findings, biggest drop-off flagged",
  },
  {
    cat: "Tracking",
    tools: "Cookiebot or OneTrust",
    toolNote: "Only checked after the data breaks",
    price: "€99/mo",
    cg: "Server-Side",
    cgNote: "Consent flow, tags and cookies checked live",
  },
  {
    cat: "Work tracking",
    tools: "Asana or ClickUp",
    toolNote: "Where good ideas go to be forgotten",
    price: "€59/mo",
    cg: "Tasks + Objectives",
    cgNote: "Tasks generated straight from findings and chats",
  },
  {
    cat: "Creative direction",
    tools: "Canva or Figma",
    toolNote: "Off-brand the moment a designer isn't looking",
    price: "€39/mo",
    cg: "Design System + Moodboard",
    cgNote: "On-brand mockups from your stored brand rules",
  },
];

/* annual billing saves 10% */
export const ANNUAL_DISCOUNT = 0.1;
