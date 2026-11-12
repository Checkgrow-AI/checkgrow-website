/* Every Checkgrow question in one place. /faq shows them all, grouped, with
   FAQPage structured data and a markdown copy for AI assistants; the
   homepage shows a short selection (homeFaqItems) and links here.
   Product facts follow the documentation at doc.checkgrow.com; buying
   answers come from src/lib/pricing.ts so prices are never retyped. */

import { pricingFaqItems } from "./pricing";

export type FaqItem = { q: string; a: string };
export type FaqCategory = { id: string; title: string; intro: string; items: FaqItem[] };

const pricingAnswer = (q: string) => pricingFaqItems.find((item) => item.q === q)!;

export const faqCategories: FaqCategory[] = [
  {
    id: "about",
    title: "About Checkgrow",
    intro: "What the platform is, who it is for and how it differs from generic AI tools.",
    items: [
      {
        q: "What is Checkgrow?",
        a: "Checkgrow is an AI native growth marketing platform: a go-to-market engine for marketing teams, founders and enterprises. It connects your company knowledge, market research, day-to-day execution and measurement in one system, so every team works from the same context and every campaign starts from what the business already knows.",
      },
      {
        q: "Who is Checkgrow for?",
        a: "Founders and CMOs who set direction, marketing and sales operations teams who execute, growth and analytics people who close the loop, and agencies running several brands. It fits companies from scale-ups to enterprise marketing teams that are tired of re-explaining the business to every tool, agency and AI prompt.",
      },
      {
        q: "How is Checkgrow different from ChatGPT or a generic AI tool?",
        a: "A generic chat starts from zero every time and forgets what worked; your context ends up as files in a drive and prompts scattered across different chats. Checkgrow keeps one company brain, structured and strategised for marketing and growth: your brand, products, audiences, numbers and decisions, which every agent, campaign and report reads from, and every result feeds back in. Because it runs on your own marketing data, your team also learns as it works, and enterprises can self-host it.",
      },
      {
        q: "What can I actually do with Checkgrow?",
        a: "Build your company brain from your website, then run real work from it: brief campaigns and get a full strategy with on-brand ad copy and images, run AI agents for posts, emails and articles, monitor competitors' websites, social channels and live ads, audit your website for conversion, find and reach target accounts on LinkedIn, collect leads, and read GA4, Meta Ads and Google Ads performance as plain-language insights.",
      },
      {
        q: "What is a growth operating system?",
        a: "A growth operating system connects company knowledge, strategy, execution, market intelligence and performance data in one place, so decisions are grounded and every result feeds back in. Checkgrow is that system for go-to-market teams: one shared brain for strategy, content, campaigns, sales intelligence and reporting.",
      },
      {
        q: "Which tools does Checkgrow replace?",
        a: "The typical growth stack it covers spans eleven subscriptions: brand wikis, AI content tools, campaign ops boards, social suites, competitive intelligence, prospecting databases, CRO tooling, analytics dashboards, consent tracking, work tracking and creative direction. That stack commonly runs around €1,199 per month across tools; Checkgrow is one platform, from €499 per month.",
      },
      {
        q: "Can a small team or a team without an agency use Checkgrow?",
        a: "Yes, that is the point. A growth team of three can operate like thirty: AI agents produce the work, marketing ops run without a dedicated project manager and reporting is board-ready without a data analyst. Teams that want specialists on top can add our growth team with the Growth plan.",
      },
      {
        q: "Does my team need to be marketing experts to use Checkgrow?",
        a: "No. Checkgrow works on your own marketing and growth data, so using it builds the skills. Interactive features walk your team through each stage of the funnel, from first touch to conversion, and explain what changed and why. People stay in the loop, make the decisions and get better at marketing as they go.",
      },
      {
        q: "How fast can I launch campaigns with Checkgrow?",
        a: "In hours, not weeks. Brief a campaign by chat or with the wizard and Checkgrow returns a full briefing (goal, funnel, channel strategies and roadmap) grounded in your products and personas, then generates ad copy and on-brand images for each channel and funnel stage.",
      },
    ],
  },
  {
    id: "getting-started",
    title: "Getting started and your company brain",
    intro: "How Checkgrow learns your business and keeps that knowledge accurate.",
    items: [
      pricingAnswer("How do I get started?"),
      {
        q: "How does Checkgrow learn about my company?",
        a: "You give it your website address. The Website Scan reads your public pages and runs AI research on top, then drafts your Knowledge Center: company profile, brand identity, logo and colours, products, use cases, audiences and buyer personas, competitors and media. You review and correct the draft, and a Knowledge Score shows how complete it is. Financial data and your Ideal Customer Profile are added by you, and they unlock fit scoring and sales targeting.",
      },
      {
        q: "What is the Knowledge Center?",
        a: "The single source of truth about your company: company profile, brand and tone of voice, products, features, buyer personas, Ideal Customer Profiles, use cases, financial data, conversion points, media library and moodboard, all connected in a Knowledge Graph. Campaigns, creatives, AI agents, sales targeting and the AI Assistant all read from it, so updating it once updates every workflow.",
      },
      {
        q: "Can I connect Google Drive, SharePoint, Confluence or Notion?",
        a: "Yes. Connected sources sync the folders, spaces and pages your team already writes in from Google Drive, SharePoint and OneDrive, Confluence and Notion. Access is read-only, so nothing is changed or deleted at the source, and sources check for changes every few hours. Synced documents are searchable when Checkgrow writes; your company knowledge only changes through updates you review.",
      },
      {
        q: "Can the AI change my company knowledge without my approval?",
        a: "No. The AI Assistant and synced documents propose updates, and you apply only the ones you approve. Every change, whether manual, from a scan, a chat or a file, is logged in Knowledge History with the previous and new value and who made it, and any field can be recovered with one click for 30 days.",
      },
    ],
  },
  {
    id: "ai-integrations",
    title: "AI models and integrations",
    intro: "The AI models Checkgrow works with and the tools it connects to.",
    items: [
      {
        q: "Which platforms does Checkgrow connect to?",
        a: "Google Analytics 4, Google Ads, Meta Ads, Instagram and LinkedIn for channels and measurement; Google Drive, SharePoint and OneDrive, Confluence and Notion for company knowledge; HubSpot, Zoho CRM and GoHighLevel for importing sales targets; and n8n and webhooks for automation and lead hand-off. Checkgrow MCP connects Claude, ChatGPT and other AI apps.",
      },
      {
        q: "Which AI models does Checkgrow use?",
        a: "Checkgrow works across frontier models from OpenAI, Google Gemini, Anthropic Claude and Perplexity. In the AI Assistant you choose the model per conversation, with automatic fallback if one is unavailable. You keep costs visible and are never locked in to one model or vendor.",
      },
      {
        q: "Can I use Checkgrow inside Claude or ChatGPT?",
        a: "Yes, with Checkgrow MCP. Add Checkgrow as a custom connector in Claude, ChatGPT, Cursor or any MCP app, sign in and choose a company. The app can then read your company knowledge, Insights performance, campaigns and competitors, and write in your brand voice. Connections are read-only unless you allow changes, every change needs your approval, and reading uses no credits. MCP is rolling out gradually by workspace.",
      },
      {
        q: "Does Checkgrow publish ads for me?",
        a: "Your ads keep running in Meta Ads Manager and Google Ads. Checkgrow plans the campaign, creates the copy and images, and reads the live performance back into one view. On the Growth plan, our ad management team creates, launches and optimises the ads for you.",
      },
      {
        q: "What does the AI Assistant do?",
        a: "It is your home screen and a chat copilot that knows your company. It answers from your Knowledge Center, uploaded files and connected data, pulls exact numbers from Insights, and can act across the platform: update knowledge, create campaigns, run AI agents and turn answers into tasks, branded presentations or PDFs. Every data-changing action shows a confirmation first.",
      },
    ],
  },
  {
    id: "sales",
    title: "Sales, outreach and leads",
    intro: "Lists, LinkedIn outreach and inbound leads.",
    items: [
      {
        q: "How does LinkedIn outreach work, and is my account safe?",
        a: "Outreach runs from each representative's own LinkedIn account, connected through a LinkedIn compliant API. You set a daily limit of 3 to 15 connection requests, sent on weekdays between 8:00 and 19:00 at randomised, human-paced intervals, with one comment per target per day. The Sales Brain proposes every comment and message, and nothing is published until you approve it. No automation is risk-free, so we keep activity well inside normal professional patterns, with an emergency stop.",
      },
      {
        q: "Can I import the companies and contacts I already have?",
        a: "Yes. Import a CSV or Excel file of up to 5,000 companies or people, or pull them from HubSpot, Zoho CRM or GoHighLevel. Columns are matched for you, every import is checked against your salespeople, and your existing LinkedIn connections can become a list too. Adding companies to a list is free; research runs when a campaign needs it.",
      },
      {
        q: "Is Checkgrow a CRM?",
        a: "No. Leads gives you a lightweight inbox for Meta Lead Ads and inbound forms, with campaign, ad and form attribution and a simple New, Contacted, Qualified, Won or Lost pipeline. When you need your CRM, export a CSV or send new leads onwards with signed webhooks.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing and plans",
    intro: "Plans, Growth Credits, seats and billing.",
    items: pricingFaqItems.filter((item) => item.q !== "How do I get started?"),
  },
  {
    id: "security",
    title: "Data, security and privacy",
    intro: "Who owns your data, where it lives and how it is protected.",
    items: [
      {
        q: "Who owns the data and knowledge I put in?",
        a: "You do. Your knowledge base, research and results stay yours: no lock-ins and no hidden rules. You can export everything in a machine-readable format and use it however you wish; companies should understand how things work and own their data.",
      },
      {
        q: "Where is my data stored?",
        a: "In the European Union. Checkgrow runs on Supabase infrastructure in AWS Frankfurt (eu-central-1), so your content, campaigns, knowledge and AI results stay in the European Economic Area by default. Data is encrypted in transit with TLS 1.3 and at rest with AES-256, and database-level access rules keep every company's data isolated from other companies.",
      },
      {
        q: "Is Checkgrow GDPR compliant?",
        a: "Checkgrow d.o.o. is an EU company based in Zagreb, Croatia, and processes personal data under the GDPR. You can access, correct, export and delete your data from My Account, manage marketing and analytics consent, and contact admin@checkgrow.com for any other request; access requests are answered within 30 days.",
      },
      {
        q: "How do I export or delete my data?",
        a: "Request an online archive from My Account under Download My Data: it covers your account, AI conversations, campaigns, tasks, agent results and the data of every company you belong to, delivered in JSON or CSV within 5 to 10 business days. You can delete your account at any time from My Account; some records, such as billing, are kept as the law requires.",
      },
      {
        q: "Does Checkgrow support two-factor authentication?",
        a: "Yes. Every user can turn on two-factor authentication with any authenticator app and keep recovery codes. Company admins can require it for the whole team with a grace period, and the requirement is enforced on our servers, not only in the app. Roles (Member, Admin and Master Admin) control what each person can see and do.",
      },
      {
        q: "Can we self-host Checkgrow on our own infrastructure?",
        a: "Yes. Enterprises and scale-ups increasingly ask to run Checkgrow on their own private infrastructure, and we build self-hosted setups around their stack and security requirements on the Enterprise plan. Company knowledge stays structured and ready for any AI model they choose, inside their own perimeter, which matters for data sovereignty and compliance.",
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);

/* The homepage keeps the questions that decide a demo booking: what it is,
   who it is for, the difference, fit, data, price and the next step. */
const HOME_QUESTIONS = [
  "What is Checkgrow?",
  "Who is Checkgrow for?",
  "How is Checkgrow different from ChatGPT or a generic AI tool?",
  "Which platforms does Checkgrow connect to?",
  "Who owns the data and knowledge I put in?",
  "Can we self-host Checkgrow on our own infrastructure?",
  "How much does Checkgrow cost?",
  "Which plan is right for my team?",
  "How do I get started?",
];

export const homeFaqItems = HOME_QUESTIONS.map((q) => {
  const item = allFaqItems.find((f) => f.q === q);
  if (!item) throw new Error(`Home FAQ question missing from faqCategories: ${q}`);
  return item;
});

/* stable anchor for a question, e.g. /faq#where-is-my-data-stored */
export const faqAnchor = (q: string) =>
  q.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
