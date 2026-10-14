/* Use cases: /use-cases and /use-cases/<slug>. Content adapted from the
   "Checkgrow Use Case Articles" design (October 2026) and checked against the
   platform. Each use case tells one job end to end: the problem, four steps
   inside Checkgrow (each with a product mockup), the result and an honest
   FAQ that also says what Checkgrow does not do. Mockups are keyed into
   src/components/use-cases/mockups; numbers inside them are illustrative. */

export type MockupKey =
  | "mo-campaigns" | "mo-creatives" | "mo-calendar" | "mo-integrations" | "mo-home"
  | "kc-completeness" | "kc-brand" | "kc-persona" | "kc-graph" | "kc-draft"
  | "in-funnel" | "in-adreport" | "in-winning" | "in-utm" | "in-live";

export type UseCaseStep = {
  title: string;
  body: string;
  tag: string;
  mockup: MockupKey;
  background: string;
  backgroundColor: string;
};

export type UseCase = {
  slug: string;
  feature: string;
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
  builtFor: string[];
  worksWithLabel: string;
  worksWith: { name: string; icon?: string }[];
  inShort: string[];
  hero: { steps: { label: string; caption: string }[]; mockups: [MockupKey, MockupKey, MockupKey]; background: string; backgroundColor: string };
  problem: { title: string; body: string; quote: { text: string; author: string } };
  steps: [UseCaseStep, UseCaseStep, UseCaseStep, UseCaseStep];
  see: UseCaseStep;
  outcomes: { title: string; body: string }[];
  testimonial: { text: string; author: string };
  proof: { slug: string; company: string; line: string }[];
  faq: { q: string; a: string }[];
  related: string[];
  keywords: string[];
  updatedAt: string;
  /* 1200×630 share image (hero mockup on the use case background) */
  socialImage: string;
};

const BG = "/features/backgrounds/";
const ICON = "/features/icons/";

export const useCases: UseCase[] = [
  {
    slug: "marketing-operations",
    socialImage: "/use-cases/checkgrow-use-case-marketing-operations-f53b5a70.jpg",
    feature: "Marketing operations",
    title: "Plan, launch and report on your marketing from one place.",
    metaTitle: "All-in-one marketing operations: plan, launch and report in one place",
    description:
      "Plan campaigns, build creatives, schedule the work and see results from GA4, Meta Ads and Google Ads in one Checkgrow workspace. No more five tools.",
    lede:
      "Checkgrow brings campaign planning, creatives, scheduling and reporting into one workspace, connected to Google Analytics, Meta Ads, Google Ads, Instagram and LinkedIn. The plan and the results sit side by side, so nobody rebuilds the picture from exports every week.",
    builtFor: ["Heads of marketing", "Growth teams", "Agencies"],
    worksWithLabel: "Works with",
    worksWith: [
      { name: "Google Analytics", icon: ICON + "google-analytics.svg" },
      { name: "Meta Ads", icon: ICON + "meta.webp" },
      { name: "Google Ads", icon: ICON + "google_ads_ai.svg" },
      { name: "Instagram", icon: ICON + "Instagram.svg" },
      { name: "LinkedIn", icon: ICON + "LinkedIN.svg" },
      { name: "Notion", icon: ICON + "notion_ai_integration.svg" },
      { name: "n8n and webhooks" },
      { name: "Checkgrow MCP" },
    ],
    inShort: [
      "Plan campaigns, build creatives and schedule the work in one Checkgrow workspace.",
      "Connect Google Analytics, Meta Ads, Google Ads, Instagram and LinkedIn, and see results next to the plan.",
      "Your ads keep running in Meta and Google; Checkgrow reads their performance instead of replacing them.",
      "Campaigns, posts and tasks share one calendar, so the whole team sees what is live and what is next.",
    ],
    hero: {
      steps: [
        { label: "Calendar", caption: "Campaigns, social posts and tasks on one calendar." },
        { label: "Campaigns", caption: "Every campaign with its channels, budget and creatives." },
        { label: "Integrations", caption: "Google Analytics, Meta Ads, Google Ads and Instagram connected." },
      ],
      mockups: ["mo-calendar", "mo-campaigns", "mo-integrations"],
      background: BG + "02-apricot-blush.webp",
      backgroundColor: "#d99a7a",
    },
    problem: {
      title: "Five tools, five versions of the truth.",
      body:
        "The brief lives in a doc, the ads in two ad managers, the plan in a spreadsheet and the results in Google Analytics. Every weekly report starts with exports, every decision waits for someone to stitch them together, and by the time the picture is complete it is already out of date.",
      quote: {
        text: "There are so many tools out there, maybe a tool for every functionality you guys are doing, and it's such a pain to manage 10, 15 tools. So here it's all in one.",
        author: "Florian Mueller",
      },
    },
    steps: [
      {
        title: "Plan every campaign in one list",
        body: "Each campaign holds its strategy, channels, budget, period and creatives. See them all at a glance, active or paused, with the spend and results of every channel beside the plan.",
        tag: "Every channel, per campaign",
        mockup: "mo-campaigns",
        background: BG + "09-terracotta-sage.webp",
        backgroundColor: "#a8705a",
      },
      {
        title: "Build the creatives inside the campaign",
        body: "Creatives live in the campaign they belong to, grouped by channel and funnel stage, from first draft to approved. Copy variations, formats and languages stay attached to the right ad instead of a spreadsheet.",
        tag: "Grouped by channel and stage",
        mockup: "mo-creatives",
        background: BG + "07-blush-butter.webp",
        backgroundColor: "#e0b48c",
      },
      {
        title: "See everything on one calendar",
        body: "Campaigns, social posts and tasks appear together, so the team sees what is live and what is coming without a separate planning sheet. Drag a post, and everyone sees the new date.",
        tag: "Every type of work in one view",
        mockup: "mo-calendar",
        background: BG + "01-sage-peach-sky.webp",
        backgroundColor: "#c9a58a",
      },
      {
        title: "Connect the tools you already use",
        body: "Google Analytics, Meta Ads, Google Ads, Instagram and LinkedIn connect in a few clicks, with Notion, n8n, webhooks and Checkgrow MCP for everything else. Your data flows in; nothing has to move out of the tools you trust.",
        tag: "Connected in a few clicks",
        mockup: "mo-integrations",
        background: BG + "04-aqua-mint.webp",
        backgroundColor: "#7fb8a8",
      },
    ],
    see: {
      title: "Start every day from one screen.",
      body: "Ask Grow, the AI Assistant, what changed overnight, or jump straight to campaigns, insights, competitors or the Knowledge Graph. Every answer comes from your own workspace.",
      tag: "One place to start",
      mockup: "mo-home",
      background: BG + "13-brand-indigo-bloom.webp",
      backgroundColor: "#4a52c9",
    },
    outcomes: [
      { title: "One picture of your marketing", body: "Plans, creatives, the schedule and the results live in one workspace instead of five tools." },
      { title: "Reports that start from live data", body: "Performance comes straight from your connected accounts, not from this week's exports." },
      { title: "The whole team on the same page", body: "Tasks, comments and @mentions sit next to the campaign they belong to, so decisions never get lost in chat." },
    ],
    testimonial: {
      text: "I love that it's all in one place, that you don't need a load of different apps to use it, because at the moment that is such a big thing in the martech world.",
      author: "Abigail Markey, Markey Marketing Co",
    },
    proof: [
      { slug: "wespa-2028-leads-in-a-month", company: "WESPA", line: "Ran five campaigns from one workspace and collected 2,028 leads in one list." },
      { slug: "barner-croatia-launch-purchases-up-160", company: "Barner", line: "Launched in Croatia from one workspace: purchases up 160.6% in a month." },
    ],
    faq: [
      { q: "What is a marketing operations platform?", a: "A marketing operations platform is one workspace where a team plans campaigns, prepares creatives, schedules the work and reads the results, instead of spreading them across documents, spreadsheets and ad managers. Checkgrow does this and connects to Google Analytics, Meta Ads, Google Ads, Instagram and LinkedIn, so performance sits next to the plan." },
      { q: "Which tools does Checkgrow connect to?", a: "Google Analytics 4, Meta Ads, Google Ads, Instagram and LinkedIn, plus Notion, n8n and webhooks for anything else. Checkgrow MCP lets Claude, ChatGPT and other AI apps read your workspace data. Slack, TikTok and Supabase are listed as coming soon." },
      { q: "Do we have to stop using Meta Ads Manager or Google Ads?", a: "No. Your ads keep running where they are. Checkgrow reads their performance and shows it next to the plan, so you compare channels without switching tools." },
      { q: "Does Checkgrow publish our ads for us?", a: "No. Campaigns are planned and creatives are prepared in Checkgrow, and the ads themselves run in Meta Ads Manager and Google Ads." },
      { q: "Can the whole team work in the same workspace?", a: "Yes. Everyone shares one workspace, with tasks, assignees, comments and @mentions, so work and decisions stay next to the campaign they belong to." },
      { q: "Does Checkgrow replace our CRM?", a: "No. Checkgrow is not a CRM and does not sync with HubSpot or Salesforce today. Leads are collected in Checkgrow, and webhooks or n8n can pass them on to the CRM you use." },
    ],
    related: ["brand-knowledge-ai", "marketing-reporting"],
    keywords: ["marketing operations platform", "all-in-one marketing tool", "campaign planning software", "marketing calendar", "marketing workspace", "GA4 Meta Ads Google Ads in one place", "marketing team collaboration", "Checkgrow"],
    updatedAt: "2026-10-14",
  },
  {
    slug: "brand-knowledge-ai",
    socialImage: "/use-cases/checkgrow-use-case-brand-knowledge-ai-2d160706.jpg",
    feature: "Knowledge Center",
    title: "AI that already knows your brand.",
    metaTitle: "AI marketing that knows your brand: one source of truth for content",
    description:
      "Store your company, brand, products and buyers once in Checkgrow's Knowledge Center. Every campaign idea, post and creative starts from it, in your voice.",
    lede:
      "Checkgrow keeps your company, brand, products and buyers in one Knowledge Center. Everything it writes for you, from campaign ideas to posts and creatives, starts from that source, so the first draft already sounds like you instead of like every other AI tool.",
    builtFor: ["Marketing leads", "Content teams", "Agencies with many brands"],
    worksWithLabel: "Draws on",
    worksWith: [
      { name: "Company Profile" }, { name: "Brand" }, { name: "Products" }, { name: "Buyer Personas" }, { name: "ICPs" }, { name: "Use Cases" },
    ],
    inShort: [
      "Store your company, brand, product and buyer knowledge once, in the Knowledge Center.",
      "Everything Checkgrow drafts, from campaign ideas to posts and creatives, starts from that knowledge.",
      "The Knowledge Graph shows how your knowledge connects to campaigns, competitors, website and leads.",
      "Drafts wait for your approval, and every knowledge change is kept for 30 days.",
    ],
    hero: {
      steps: [
        { label: "Knowledge Graph", caption: "Company knowledge connected to campaigns, competitors and leads." },
        { label: "Brand voice", caption: "Tone of voice and brand message every draft follows." },
        { label: "Buyer persona", caption: "A real buyer, described once and used everywhere." },
      ],
      mockups: ["kc-graph", "kc-brand", "kc-persona"],
      background: BG + "06-periwinkle-lilac.webp",
      backgroundColor: "#8f8fd1",
    },
    problem: {
      title: "Every prompt starts from zero.",
      body:
        "General AI tools don't know your positioning, your products or the people you sell to. So every prompt re-explains the brand, every draft needs rewriting, and the voice drifts a little more with each one. The more people use AI, the less the output sounds like you.",
      quote: {
        text: "I like this. So basically, this is the source of truth that you're building, which is so essential. Absolutely. I love it.",
        author: "Salim Sayed, WCMO",
      },
    },
    steps: [
      {
        title: "Teach Checkgrow your business once",
        body: "Fill in your Company Profile, Brand, Products, Buyer Personas, ICPs and Use Cases, or upload files and links and let Checkgrow draft them for you to review. A completeness score shows what is still missing, and what to add next.",
        tag: "Completeness at a glance",
        mockup: "kc-completeness",
        background: BG + "03-moss-cream.webp",
        backgroundColor: "#8a8f74",
      },
      {
        title: "Write your voice down",
        body: "Tone of voice and brand message live in one place, with the words you use and the ones you avoid, so every piece of content reads from the same rules, whoever asks for it.",
        tag: "One voice for every draft",
        mockup: "kc-brand",
        background: BG + "10-ice-rose-lavender.webp",
        backgroundColor: "#c8b6d3",
      },
      {
        title: "Describe the people you sell to",
        body: "Buyer personas capture who they are, what they need, what holds them back and how they decide, so campaigns, posts and sales messages speak to a real person.",
        tag: "A real buyer, described once",
        mockup: "kc-persona",
        background: BG + "01-sage-peach-sky.webp",
        backgroundColor: "#c9a58a",
      },
      {
        title: "See how it all connects",
        body: "The Knowledge Graph maps your company knowledge to your campaigns, website, competitors and leads in one view, so gaps and links are visible at a glance.",
        tag: "Everything links to your company",
        mockup: "kc-graph",
        background: BG + "14-brand-indigo-curtains.webp",
        backgroundColor: "#3f45b5",
      },
    ],
    see: {
      title: "A draft in your voice, waiting for your approval.",
      body: "Content arrives ready to refine. Ask for changes in the chat beside it, and the saved version only changes after you approve. Nothing is published without a person saying yes.",
      tag: "Changes apply only after approval",
      mockup: "kc-draft",
      background: BG + "12-brand-indigo-bands.webp",
      backgroundColor: "#4b54cc",
    },
    outcomes: [
      { title: "First drafts in your voice", body: "Everything Checkgrow writes starts from your brand, products and buyers, not from a blank prompt." },
      { title: "One source of truth", body: "Update your positioning once, and every draft after that uses the new version, for every person on the team." },
      { title: "Full control", body: "Nothing is sent without approval, and a 30-day history shows every change to your knowledge." },
    ],
    testimonial: {
      text: "The key thing I see is it's got one central database, a source of truth, which is ultimately one of the biggest things in all of this AI implementation.",
      author: "Salim Sayed, WCMO",
    },
    proof: [
      { slug: "barner-croatia-launch-purchases-up-160", company: "Barner", line: "Built its company brain first, then generated 423 ad creatives in its own voice." },
      { slug: "cuixmala-first-campaign-us-27000-booking", company: "Cuixmala", line: "Set out 6 products, 4 personas and 3 ICPs before its first campaign brought a US$27,000 booking." },
    ],
    faq: [
      { q: "What is a brand knowledge base for AI?", a: "It is one structured place that holds what makes your company specific, such as your brand voice, products, buyer personas, ideal customer profiles and use cases, so AI tools write from your facts instead of generic assumptions. In Checkgrow it is the Knowledge Center, and every AI feature reads from it." },
      { q: "Where does the knowledge come from?", a: "From you. Fill in the sections directly, or upload files and links and let Checkgrow draft them for you to review and edit before anything is saved." },
      { q: "What happens when our positioning changes?", a: "Update it once in the Knowledge Center, and everything Checkgrow writes afterwards uses the new version. A 30-day history shows what changed and when." },
      { q: "Will anything be published without our approval?", a: "No. Content waits until someone sends it, and changes made in the chat apply only after you approve them." },
      { q: "Can Checkgrow make videos?", a: "Not yet. Creative Studio is in beta and makes images and copy. Review generated product images before you use them, as they can differ from the real product." },
      { q: "Can an agency keep several brands apart?", a: "Yes. Each workspace has its own Knowledge Center, so every client's brand, products and buyers stay separate." },
    ],
    related: ["marketing-operations", "marketing-reporting"],
    keywords: ["AI that knows your brand", "brand knowledge base", "AI brand voice", "marketing source of truth", "buyer personas AI", "AI content in your brand voice", "knowledge graph marketing", "Checkgrow"],
    updatedAt: "2026-10-14",
  },
  {
    slug: "marketing-reporting",
    socialImage: "/use-cases/checkgrow-use-case-marketing-reporting-bda8f5e9.jpg",
    feature: "Insights",
    title: "Show the board what marketing returns.",
    metaTitle: "Marketing reporting for the board: one funnel from GA4, Meta and Google Ads",
    description:
      "Bring Google Analytics, Meta Ads and Google Ads into one funnel, compare every ad by cost per result and share a live report link with the board.",
    lede:
      "Checkgrow brings Google Analytics, Meta Ads and Google Ads into Insights: one funnel from first visit to conversion, cost per result for every ad, and a live report link you can share with anyone. The board sees the same numbers you do, always current.",
    builtFor: ["CMOs", "Heads of growth", "Founders"],
    worksWithLabel: "Reports from",
    worksWith: [
      { name: "Google Analytics 4", icon: ICON + "google-analytics.svg" },
      { name: "Meta Ads", icon: ICON + "meta.webp" },
      { name: "Google Ads", icon: ICON + "google_ads_ai.svg" },
    ],
    inShort: [
      "See one funnel from first visit to conversion, across Google Analytics, Meta Ads and Google Ads.",
      "Compare every ad by spend and cost per result, with the winners ranked and explained.",
      "Trace traffic by source and medium with UTM Reporting, for any date range.",
      "Share a live report link with the board instead of a monthly slide deck.",
    ],
    hero: {
      steps: [
        { label: "Winning ads", caption: "The ads with the most conversions, ranked and explained." },
        { label: "Funnel", caption: "Every tracked event in the top, middle or bottom of the funnel." },
        { label: "Smart Report", caption: "Spend, CTR, cost per click and cost per result, with a summary." },
      ],
      mockups: ["in-winning", "in-funnel", "in-adreport"],
      background: BG + "05-cobalt-sky.webp",
      backgroundColor: "#3b6fe0",
    },
    problem: {
      title: "Three dashboards, three different answers.",
      body:
        "Google Analytics counts one thing, Meta another, Google Ads a third. When the board asks what marketing returned, the answer takes a week of spreadsheets and still starts an argument about whose numbers are right.",
      quote: {
        text: "I really loved the end-to-end tracking, because I think that is something a lot of organizations struggle with. We just use spreadsheets and it's so manual.",
        author: "Abigail Markey, Markey Marketing Co",
      },
    },
    steps: [
      {
        title: "One funnel, from first visit to conversion",
        body: "Insights sorts every tracked event into the top, middle and bottom of the funnel, and shows how people move from one stage to the next, across all your connected sources.",
        tag: "Where visits become conversions",
        mockup: "in-funnel",
        background: BG + "08-deep-teal-seafoam.webp",
        backgroundColor: "#2f6b6b",
      },
      {
        title: "Every ad judged by what it costs",
        body: "The Advertising Smart Report shows spend, click-through rate, cost per click and cost per result for every campaign, with a plain-language summary of what changed and why it matters.",
        tag: "Cost per click and per result",
        mockup: "in-adreport",
        background: BG + "11-brand-indigo-diagonal.webp",
        backgroundColor: "#4a52c9",
      },
      {
        title: "The winners, explained",
        body: "Winning ads ranks the ads with the most conversions and shows each one's share of spend and of results, so budget follows what works. One click generates another ad like the winner.",
        tag: "Share of spend vs. share of results",
        mockup: "in-winning",
        background: BG + "10-ice-rose-lavender.webp",
        backgroundColor: "#c8b6d3",
      },
      {
        title: "Traffic you can trace",
        body: "UTM Reporting shows sessions over time and where they came from, by source, medium and campaign, for any date range you choose.",
        tag: "Any date range",
        mockup: "in-utm",
        background: BG + "04-aqua-mint.webp",
        backgroundColor: "#7fb8a8",
      },
    ],
    see: {
      title: "Share it with a link, not a slide deck.",
      body: "Every Insights view has a live report link, so the board, a client or an investor sees the same numbers you do, always current, without logging in or waiting for the monthly pack.",
      tag: "A live link for the board",
      mockup: "in-live",
      background: BG + "15-brand-indigo-crossflow.webp",
      backgroundColor: "#4b54cc",
    },
    outcomes: [
      { title: "One funnel", body: "From first visit to conversion, in one view across your connected sources." },
      { title: "The ads that earn their budget", body: "Cost per result and share of conversions for every ad, with the winners ranked." },
      { title: "Reports the board can open", body: "A live report link instead of a monthly slide deck, always showing the current numbers." },
    ],
    testimonial: {
      text: "I like that it's events. It's events-driven as opposed to metrics-driven. That's really, really helpful.",
      author: "Sophia Ahrel",
    },
    proof: [
      { slug: "boont-30x-cheaper-meta-purchases", company: "Boont", line: "Insights found 294 website payments Meta could not see, then ranked the new winning ad." },
      { slug: "wespa-2028-leads-in-a-month", company: "WESPA", line: "Read its funnel across all channels: 26.8% of engaged visitors converted." },
    ],
    faq: [
      { q: "How do I report marketing ROI to the board?", a: "Bring your analytics and ad platforms into one view, report the funnel from first visit to conversion and the cost per result of each campaign, and share it as a live link rather than a static deck. Checkgrow Insights does this with Google Analytics, Meta Ads and Google Ads." },
      { q: "Which data sources feed Insights?", a: "Google Analytics 4, Meta Ads and Google Ads. LinkedIn Ads is listed as coming soon." },
      { q: "Can I share a report with someone who doesn't use Checkgrow?", a: "Yes. Every Insights view has a live report link you can send to anyone, and it always shows the current numbers." },
      { q: "Can I choose the date range?", a: "Yes. Every Insights view has a date range, and the figures update to match." },
      { q: "Why don't Meta's numbers match Google Analytics?", a: "Each platform counts conversions its own way. Insights shows them side by side, so you can compare them without adding together things that measure different events." },
      { q: "Does Checkgrow do multi-touch attribution?", a: "No. It reports what each platform measures and shows where your traffic comes from, but it does not build a multi-touch attribution model." },
    ],
    related: ["marketing-operations", "brand-knowledge-ai"],
    keywords: ["marketing reporting for the board", "marketing ROI report", "GA4 Meta Ads Google Ads dashboard", "cost per result", "winning ads", "UTM reporting", "live marketing report", "Checkgrow Insights"],
    updatedAt: "2026-10-14",
  },
];

export const pathToUseCase = (slug: string) => `/use-cases/${slug}`;
export const getUseCase = (slug: string) => useCases.find(item => item.slug === slug);
