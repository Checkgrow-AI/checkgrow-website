/* Single source for the product feature stories: the homepage "In practice"
   section shows the features flagged `onHome`; /features shows all of them.
   Each feature plays three screens (src/lib/featureScreens.ts) on its own
   background, one per step. Copy describes what the product does and avoids
   invented results; numbers inside the mockups are illustrative. */

export type FeatureStep = { label: string; caption: string };

export type Feature = {
  slug: string;
  name: string;
  title: string;
  scenario: string;
  body: string;
  points: [string, string, string];
  steps: [FeatureStep, FeatureStep, FeatureStep];
  screens: [string, string, string];
  background: string;
  backgroundColor: string;
  onHome: boolean;
};

export const features: Feature[] = [
  {
    slug: "knowledge-centre",
    name: "Knowledge Centre",
    title: "Explain the business once. Never again.",
    scenario:
      "Connect Google Drive, Notion, Slack and your website, and Checkgrow turns them into structured marketing knowledge.",
    body: "ICPs, buyer personas, products, brand voice and SEO keywords live in one place that every feature reads automatically. When something changes, say it in plain words: the AI drafts the update and you approve it.",
    points: [
      "Your tools synced into one marketing-ready knowledge base",
      "ICPs, buyer personas and products structured, not buried in files",
      "Update it by chatting: the AI drafts, you approve",
    ],
    steps: [
      { label: "Connect your tools", caption: "Google Drive, Notion, Slack and your website sync into the Knowledge Centre." },
      { label: "Structure what matters", caption: "A buyer persona with pain points, motivations and objections, used across campaigns and sales." },
      { label: "Update by chatting", caption: "A new plan described in chat becomes four knowledge updates, ready to approve." },
    ],
    screens: ["Knowledge-1", "Knowledge-2", "Knowledge-3"],
    background: "/features/backgrounds/03-moss-cream.webp",
    backgroundColor: "#8a8f74",
    onHome: true,
  },
  {
    slug: "insights",
    name: "Insights",
    title: "Ask a question. Get the report.",
    scenario:
      "A growth lead asks how paid performed last week, and GA4, Google Ads, Meta and LinkedIn answer together.",
    body: "Insights connects your analytics and ad accounts through integrations and MCP, tracks your events in minutes and maps them to the funnel. No dashboard to build and no spreadsheet to stitch: just the numbers and what they mean.",
    points: [
      "GA4, Google Ads, Meta and LinkedIn Ads in one answer",
      "Smart reports with an AI takeaway you can act on",
      "Events tracked in minutes and mapped to TOFU, MOFU and BOFU",
    ],
    steps: [
      { label: "Ask across your data", caption: "One question queries Analytics, Google Ads, Meta Ads and LinkedIn Ads at once." },
      { label: "Read the smart report", caption: "Spend, CTR, CPA and conversions with the trend and an AI takeaway." },
      { label: "See the full funnel", caption: "Tracked events grouped into TOFU, MOFU and BOFU, classified by AI." },
    ],
    screens: ["Insights-1", "Insights-2", "Insights-3"],
    background: "/features/backgrounds/05-cobalt-sky.webp",
    backgroundColor: "#3b6fe0",
    onHome: true,
  },
  {
    slug: "campaigns",
    name: "Campaigns",
    title: "From strategy to KPIs, in one record.",
    scenario:
      "A marketer plans a quarter's launch: goal, persona, budget split and KPI targets in a single campaign.",
    body: "LinkedIn, Meta and Google campaigns sit side by side with live spend, CPA and conversions, so strategy and performance never drift apart. Creators and UTM links are managed in the same place and reported in Insights.",
    points: [
      "Budget split and KPI targets set from the strategy",
      "Every channel's live results in one table",
      "Creators, fees and UTM links tracked inside the campaign",
    ],
    steps: [
      { label: "Set strategy and KPIs", caption: "Period, budget split per channel and KPI targets against live results." },
      { label: "Manage every channel", caption: "LinkedIn, Meta, Google and creator campaigns in one table." },
      { label: "Add creators and UTMs", caption: "A creator added with fee, deliverables and an auto-generated tracking link." },
    ],
    screens: ["Campaigns-1", "Campaigns-2", "Campaigns-3"],
    background: "/features/backgrounds/09-terracotta-sage.webp",
    backgroundColor: "#b9805a",
    onHome: true,
  },
  {
    slug: "creative-studio",
    name: "Creative Studio",
    title: "Creatives that already know your brand.",
    scenario:
      "Ask for three LinkedIn ads and choose what the AI draws on: campaign optimisations, competitor ads, your library or market trends.",
    body: "Creative Studio generates variations from your brand kit, personas and live campaign data, with the AI model you prefer. When an ad underperforms, it explains why and proposes an optimised version.",
    points: [
      "Context from the whole brain: campaigns, competitors, trends and library",
      "Your choice of AI model for every generation",
      "Optimisation recommendations from live campaign results",
    ],
    steps: [
      { label: "Brief from the brain", caption: "A one-line brief with campaign, competitor and brand context added." },
      { label: "Compare variations", caption: "Three on-brand ad variations, each with a predicted CTR." },
      { label: "Optimise what underperforms", caption: "Recommendations from live data turn a weak ad into a stronger one." },
    ],
    screens: ["Creative-1", "Creative-2", "Creative-3"],
    background: "/features/backgrounds/10-ice-rose-lavender.webp",
    backgroundColor: "#c3c4ef",
    onHome: true,
  },
  {
    slug: "content",
    name: "Content",
    title: "Know what to publish next.",
    scenario:
      "Each morning, Perplexity and Gemini surface the industry trends, competitor moves and research that matter to your market.",
    body: "Every pick is scored for relevance against your keywords and personas. Turn one into a draft in your brand voice in a couple of clicks, then send it straight to Social Media.",
    points: [
      "Daily industry, competitor and user-research picks",
      "Content ideas recommended by Perplexity and Gemini",
      "Drafts in your brand voice, ready to schedule",
    ],
    steps: [
      { label: "Read today's picks", caption: "Trends from your market, scored for relevance and ready to rewrite." },
      { label: "Pick a recommendation", caption: "A content idea with the reason it matters now and the best format." },
      { label: "Draft in your voice", caption: "A LinkedIn post drafted in your brand voice, ready to schedule." },
    ],
    screens: ["Content-1", "Content-2", "Content-3"],
    background: "/features/backgrounds/02-apricot-blush.webp",
    backgroundColor: "#f2a37a",
    onHome: false,
  },
  {
    slug: "social-media",
    name: "Social Media",
    title: "See where you stand, then act on it.",
    scenario:
      "Your Instagram and LinkedIn ranked against tracked competitors, with engagement compared to the category median.",
    body: "AI explains what the leaders do differently, scores creators against your ICP and drafts replies to comments in your brand voice, all connected to your campaigns and knowledge.",
    points: [
      "Rankings and growth compared with your competitors",
      "Influencers discovered and scored against your ICP",
      "Comment replies drafted by AI, approved by you",
    ],
    steps: [
      { label: "Benchmark your channels", caption: "Your rank, engagement and growth compared with tracked competitors." },
      { label: "Shortlist influencers", caption: "Creators scored against your ICP, moved through a simple pipeline." },
      { label: "Reply with AI", caption: "A comment answered in your brand voice, waiting for your approval." },
    ],
    screens: ["Social-1", "Social-2", "Social-3"],
    background: "/features/backgrounds/07-blush-butter.webp",
    backgroundColor: "#f4b9b4",
    onHome: false,
  },
  {
    slug: "competitors",
    name: "Competitors",
    title: "Every competitor move, as it happens.",
    scenario:
      "Pricing changes, new ads, website rewrites, launches and hiring: tracked automatically and summarised in one timeline.",
    body: "Browse every competitor's active LinkedIn and Meta ads, see their pricing and headcount over time, and send any ad straight into Creative Studio as a reference.",
    points: [
      "Active LinkedIn and Meta ads in one library",
      "Website, pricing, launch and team changes flagged automatically",
      "Competitor ads become references for your own creatives",
    ],
    steps: [
      { label: "See what changed", caption: "A timeline of competitor pricing, ads, website, launches and hiring." },
      { label: "Browse their active ads", caption: "Live competitor ads with format, status and reach estimates." },
      { label: "Open the full profile", caption: "Ads, pricing, employees and product launches for one competitor." },
    ],
    screens: ["Competitors-1", "Competitors-2", "Competitors-3"],
    background: "/features/backgrounds/08-deep-teal-seafoam.webp",
    backgroundColor: "#1f4f55",
    onHome: true,
  },
  {
    slug: "sales",
    name: "Sales",
    title: "Outreach that knows what's going on.",
    scenario:
      "Before a rep writes a word, Checkgrow has read the account: ICP fit, recent LinkedIn posts, live ads and tracking gaps.",
    body: "Your sales brain drafts personalised comments and messages from that context. Nothing is sent without approval, and every warm touch lands in one timeline.",
    points: [
      "Account briefs with ICP fit and the best move now",
      "Personalised messages grounded in real signals",
      "Human approval before anything is sent",
    ],
    steps: [
      { label: "Read the account brief", caption: "ICP fit, LinkedIn activity and the best next move for one account." },
      { label: "Approve the outreach", caption: "A personalised message, the context it used, and your approval." },
      { label: "Track every touch", caption: "Comments, messages and replies in one outreach timeline." },
    ],
    screens: ["Sales-1", "Sales-2", "Sales-3"],
    background: "/features/backgrounds/01-sage-peach-sky.webp",
    backgroundColor: "#a8a98a",
    onHome: false,
  },
  {
    slug: "ai-assistant",
    name: "AI Assistant",
    title: "One chat for everything Checkgrow knows.",
    scenario:
      "Ask what your last campaign taught you, and the assistant reads Campaigns, Insights and Competitors to answer.",
    body: "Choose Claude, GPT, Gemini or Perplexity for each question; every model reads the same knowledge and data. Then act straight from the answer: draft the next campaign, generate creatives or save a lesson to your knowledge.",
    points: [
      "Multi-model: Claude, GPT, Gemini and Perplexity",
      "Answers grounded in your knowledge, campaigns and data",
      "Act across features without leaving the chat",
    ],
    steps: [
      { label: "Ask anything", caption: "A question about your business, with your connected channels in reach." },
      { label: "Choose any model", caption: "Claude, GPT, Gemini or Perplexity, all reading the same company brain." },
      { label: "Act across features", caption: "An answer citing Insights, Campaigns and Competitors, with next actions." },
    ],
    screens: ["Assistant-1", "Assistant-2", "Assistant-3"],
    background: "/features/backgrounds/13-brand-indigo-bloom.webp",
    backgroundColor: "#6c7be8",
    onHome: true,
  },
];

export const homeFeatures = features.filter((feature) => feature.onHome);

export const featurePath = (slug?: string) =>
  slug ? `/features#${slug}` : "/features";
