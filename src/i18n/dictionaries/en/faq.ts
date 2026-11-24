/* FAQ copy (English source): every question, grouped by category, for
   /faq, the homepage selection (homeFaqItems in src/lib/faq.ts), the
   pricing page and their structured data. `anchor` is the question's
   stable URL fragment (/faq#<anchor>) and never translates. The pricing
   answers repeat figures from src/lib/pricing.ts (tests/pricing.test.mjs
   checks the English ones): keep every figure when translating, changing
   only its format. See docs/i18n.md. */
export const faq = {
  "homeTitle": "Before you join",
  "eyebrow": "Questions",
  "categories": [
    {
      "id": "about",
      "title": "About Checkgrow",
      "intro": "What the platform is, who it is for and how it differs from generic AI tools.",
      "items": [
        {
          "anchor": "what-is-checkgrow",
          "q": "What is Checkgrow?",
          "a": "Checkgrow is an AI native growth marketing platform: a go-to-market engine for marketing teams, founders and enterprises. It connects your company knowledge, market research, day-to-day execution and measurement in one system, so every team works from the same context and every campaign starts from what the business already knows."
        },
        {
          "anchor": "who-is-checkgrow-for",
          "q": "Who is Checkgrow for?",
          "a": "Founders and CMOs who set direction, marketing and sales operations teams who execute, growth and analytics people who close the loop, and agencies running several brands. It fits companies from scale-ups to enterprise marketing teams that are tired of re-explaining the business to every tool, agency and AI prompt."
        },
        {
          "anchor": "how-is-checkgrow-different-from-chatgpt-or-a-generic-ai-tool",
          "q": "How is Checkgrow different from ChatGPT or a generic AI tool?",
          "a": "A generic chat starts from zero every time and forgets what worked; your context ends up as files in a drive and prompts scattered across different chats. Checkgrow keeps one company brain, structured and strategised for marketing and growth: your brand, products, audiences, numbers and decisions, which every agent, campaign and report reads from, and every result feeds back in. Because it runs on your own marketing data, your team also learns as it works, and enterprises can self-host it."
        },
        {
          "anchor": "what-can-i-actually-do-with-checkgrow",
          "q": "What can I actually do with Checkgrow?",
          "a": "Build your company brain from your website, then run real work from it: brief campaigns and get a full strategy with on-brand ad copy and images, run AI agents for posts, emails and articles, monitor competitors' websites, social channels and live ads, audit your website for conversion, find and reach target accounts on LinkedIn, collect leads, and read GA4, Meta Ads and Google Ads performance as plain-language insights."
        },
        {
          "anchor": "what-is-a-growth-operating-system",
          "q": "What is a growth operating system?",
          "a": "A growth operating system connects company knowledge, strategy, execution, market intelligence and performance data in one place, so decisions are grounded and every result feeds back in. Checkgrow is that system for go-to-market teams: one shared brain for strategy, content, campaigns, sales intelligence and reporting."
        },
        {
          "anchor": "which-tools-does-checkgrow-replace",
          "q": "Which tools does Checkgrow replace?",
          "a": "The typical growth stack it covers spans eleven subscriptions: brand wikis, AI content tools, campaign ops boards, social suites, competitive intelligence, prospecting databases, CRO tooling, analytics dashboards, consent tracking, work tracking and creative direction. That stack commonly runs around €1,199 per month across tools; Checkgrow is one platform, from €499 per month."
        },
        {
          "anchor": "can-a-small-team-or-a-team-without-an-agency-use-checkgrow",
          "q": "Can a small team or a team without an agency use Checkgrow?",
          "a": "Yes, that is the point. A growth team of three can operate like thirty: AI agents produce the work, marketing ops run without a dedicated project manager and reporting is board-ready without a data analyst. Teams that want specialists on top can add our growth team with the Growth plan."
        },
        {
          "anchor": "does-my-team-need-to-be-marketing-experts-to-use-checkgrow",
          "q": "Does my team need to be marketing experts to use Checkgrow?",
          "a": "No. Checkgrow works on your own marketing and growth data, so using it builds the skills. Interactive features walk your team through each stage of the funnel, from first touch to conversion, and explain what changed and why. People stay in the loop, make the decisions and get better at marketing as they go."
        },
        {
          "anchor": "how-fast-can-i-launch-campaigns-with-checkgrow",
          "q": "How fast can I launch campaigns with Checkgrow?",
          "a": "In hours, not weeks. Brief a campaign by chat or with the wizard and Checkgrow returns a full briefing (goal, funnel, channel strategies and roadmap) grounded in your products and personas, then generates ad copy and on-brand images for each channel and funnel stage."
        }
      ]
    },
    {
      "id": "getting-started",
      "title": "Getting started and your company brain",
      "intro": "How Checkgrow learns your business and keeps that knowledge accurate.",
      "items": [
        {
          "anchor": "how-do-i-get-started",
          "q": "How do I get started?",
          "a": "Book a demo: we walk you through Checkgrow on your own brand and help you choose a plan, with no credit card required. The same booking page connects you with our team for every plan, including Growth and Enterprise."
        },
        {
          "anchor": "how-does-checkgrow-learn-about-my-company",
          "q": "How does Checkgrow learn about my company?",
          "a": "You give it your website address. The Website Scan reads your public pages and runs AI research on top, then drafts your Knowledge Center: company profile, brand identity, logo and colours, products, use cases, audiences and buyer personas, competitors and media. You review and correct the draft, and a Knowledge Score shows how complete it is. Financial data and your Ideal Customer Profile are added by you, and they unlock fit scoring and sales targeting."
        },
        {
          "anchor": "what-is-the-knowledge-center",
          "q": "What is the Knowledge Center?",
          "a": "The single source of truth about your company: company profile, brand and tone of voice, products, features, buyer personas, Ideal Customer Profiles, use cases, financial data, conversion points, media library and moodboard, all connected in a Knowledge Graph. Campaigns, creatives, AI agents, sales targeting and the AI Assistant all read from it, so updating it once updates every workflow."
        },
        {
          "anchor": "can-i-connect-google-drive-sharepoint-confluence-or-notion",
          "q": "Can I connect Google Drive, SharePoint, Confluence or Notion?",
          "a": "Yes. Connected sources sync the folders, spaces and pages your team already writes in from Google Drive, SharePoint and OneDrive, Confluence and Notion. Access is read-only, so nothing is changed or deleted at the source, and sources check for changes every few hours. Synced documents are searchable when Checkgrow writes; your company knowledge only changes through updates you review."
        },
        {
          "anchor": "can-the-ai-change-my-company-knowledge-without-my-approval",
          "q": "Can the AI change my company knowledge without my approval?",
          "a": "No. The AI Assistant and synced documents propose updates, and you apply only the ones you approve. Every change, whether manual, from a scan, a chat or a file, is logged in Knowledge History with the previous and new value and who made it, and any field can be recovered with one click for 30 days."
        }
      ]
    },
    {
      "id": "ai-integrations",
      "title": "AI models and integrations",
      "intro": "The AI models Checkgrow works with and the tools it connects to.",
      "items": [
        {
          "anchor": "which-platforms-does-checkgrow-connect-to",
          "q": "Which platforms does Checkgrow connect to?",
          "a": "Google Analytics 4, Google Ads, Meta Ads, Instagram and LinkedIn for channels and measurement; Google Drive, SharePoint and OneDrive, Confluence and Notion for company knowledge; HubSpot, Zoho CRM and GoHighLevel for importing sales targets; and n8n and webhooks for automation and lead hand-off. Checkgrow MCP connects Claude, ChatGPT and other AI apps."
        },
        {
          "anchor": "which-ai-models-does-checkgrow-use",
          "q": "Which AI models does Checkgrow use?",
          "a": "Checkgrow works across frontier models from OpenAI, Google Gemini, Anthropic Claude and Perplexity. In the AI Assistant you choose the model per conversation, with automatic fallback if one is unavailable. You keep costs visible and are never locked in to one model or vendor."
        },
        {
          "anchor": "can-i-use-checkgrow-inside-claude-or-chatgpt",
          "q": "Can I use Checkgrow inside Claude or ChatGPT?",
          "a": "Yes, with Checkgrow MCP. Add Checkgrow as a custom connector in Claude, ChatGPT, Cursor or any MCP app, sign in and choose a company. The app can then read your company knowledge, Insights performance, campaigns and competitors, and write in your brand voice. Connections are read-only unless you allow changes, every change needs your approval, and reading uses no credits. MCP is rolling out gradually by workspace."
        },
        {
          "anchor": "does-checkgrow-publish-ads-for-me",
          "q": "Does Checkgrow publish ads for me?",
          "a": "Your ads keep running in Meta Ads Manager and Google Ads. Checkgrow plans the campaign, creates the copy and images, and reads the live performance back into one view. On the Growth plan, our ad management team creates, launches and optimises the ads for you."
        },
        {
          "anchor": "what-does-the-ai-assistant-do",
          "q": "What does the AI Assistant do?",
          "a": "It is your home screen and a chat copilot that knows your company. It answers from your Knowledge Center, uploaded files and connected data, pulls exact numbers from Insights, and can act across the platform: update knowledge, create campaigns, run AI agents and turn answers into tasks, branded presentations or PDFs. Every data-changing action shows a confirmation first."
        }
      ]
    },
    {
      "id": "sales",
      "title": "Sales, outreach and leads",
      "intro": "Lists, LinkedIn outreach and inbound leads.",
      "items": [
        {
          "anchor": "how-does-linkedin-outreach-work-and-is-my-account-safe",
          "q": "How does LinkedIn outreach work, and is my account safe?",
          "a": "Outreach runs from each representative's own LinkedIn account, connected through a LinkedIn compliant API. You set a daily limit of 3 to 15 connection requests, sent on weekdays between 8:00 and 19:00 at randomised, human-paced intervals, with one comment per target per day. The Sales Brain proposes every comment and message, and nothing is published until you approve it. No automation is risk-free, so we keep activity well inside normal professional patterns, with an emergency stop."
        },
        {
          "anchor": "can-i-import-the-companies-and-contacts-i-already-have",
          "q": "Can I import the companies and contacts I already have?",
          "a": "Yes. Import a CSV or Excel file of up to 5,000 companies or people, or pull them from HubSpot, Zoho CRM or GoHighLevel. Columns are matched for you, every import is checked against your salespeople, and your existing LinkedIn connections can become a list too. Adding companies to a list is free; research runs when a campaign needs it."
        },
        {
          "anchor": "is-checkgrow-a-crm",
          "q": "Is Checkgrow a CRM?",
          "a": "No. Leads gives you a lightweight inbox for Meta Lead Ads and inbound forms, with campaign, ad and form attribution and a simple New, Contacted, Qualified, Won or Lost pipeline. When you need your CRM, export a CSV or send new leads onwards with signed webhooks."
        }
      ]
    },
    {
      "id": "pricing",
      "title": "Pricing and plans",
      "intro": "Plans, Growth Credits, seats and billing.",
      "items": [
        {
          "anchor": "how-much-does-checkgrow-cost",
          "q": "How much does Checkgrow cost?",
          "a": "Business: €499/month. Agency: €997/month. Growth: €4,997/month. Enterprise: custom pricing. Save 10% with annual billing. Prices exclude VAT."
        },
        {
          "anchor": "which-plan-is-right-for-my-team",
          "q": "Which plan is right for my team?",
          "a": "Business: The complete platform for a single brand, with room for the whole team. Agency: Every brand and client in its own workspace, with our team in your corner. Growth: Our specialists run your ads, reports and follow-up, alongside your team. Enterprise: Your growth platform, on your infrastructure, under your brand."
        },
        {
          "anchor": "what-is-the-difference-between-the-business-and-agency-plans",
          "q": "What is the difference between the Business and Agency plans?",
          "a": "Business: 1 brand. Help center & chat support. Guides, tutorials and our team on chat when you need a hand. Agency: unlimited. 1 hour / month with our growth team. A monthly customer-success session to review results and plan the next move."
        },
        {
          "anchor": "what-does-the-growth-plan-include",
          "q": "What does the Growth plan include?",
          "a": "everything in agency, plus: Dedicated account manager; Ad management: ads created, launched and optimised; Performance reports for every account; Customer success across your accounts. Your team covers account manager, ad management, creative production, customer success. Managed accounts: up to 3. Extra accounts billed separately."
        },
        {
          "anchor": "what-does-the-enterprise-plan-include",
          "q": "What does the Enterprise plan include?",
          "a": "Your growth platform, on your infrastructure, under your brand. Custom development and integrations; White-label, branded platform; Self-hosted infrastructure and data sovereignty; Advanced security and compliance reviews; Long-term agreements. Engineers and growth specialists dedicated to your roll-out. Talk to our team about your requirements and a tailored agreement."
        },
        {
          "anchor": "what-are-growth-credits",
          "q": "What are Growth Credits?",
          "a": "Growth Credits are the allowance for the AI work you run in Checkgrow. Business: 5,000 / month (top up anytime). Agency: 5,000 / month (shared pool · top up anytime). Growth: 5,000 / month (top up anytime). Enterprise: custom. You can top up anytime on any plan. Enterprise volumes are set in your agreement."
        },
        {
          "anchor": "how-many-people-can-use-checkgrow",
          "q": "How many people can use Checkgrow?",
          "a": "Business: unlimited team seats. Agency: unlimited team seats. Growth: unlimited team seats. Enterprise: unlimited team seats. Bring marketing, sales and leadership into the same system."
        },
        {
          "anchor": "how-does-annual-billing-work",
          "q": "How does annual billing work?",
          "a": "Annual billing saves 10% on the listed monthly plan prices. The toggle shows the monthly equivalent and annual total, displayed as whole numbers with decimals omitted. Billing remains in EUR and all prices exclude VAT. Enterprise has a tailored agreement."
        },
        {
          "anchor": "can-i-view-prices-in-my-currency",
          "q": "Can I view prices in my currency?",
          "a": "Yes. Choose EUR, Swiss francs (CHF), US dollars (USD) or Brazilian reais (BRL) beside the billing toggle. Conversions use the latest available daily ECB reference rates via Frankfurter, with the rate date shown. Converted prices are estimates for comparison, with decimals omitted, not a change to your billing currency. Your agreement remains in EUR; taxes and payment-provider exchange fees are not included."
        }
      ]
    },
    {
      "id": "security",
      "title": "Data, security and privacy",
      "intro": "Who owns your data, where it lives and how it is protected.",
      "items": [
        {
          "anchor": "who-owns-the-data-and-knowledge-i-put-in",
          "q": "Who owns the data and knowledge I put in?",
          "a": "You do. Your knowledge base, research and results stay yours: no lock-ins and no hidden rules. You can export everything in a machine-readable format and use it however you wish; companies should understand how things work and own their data."
        },
        {
          "anchor": "where-is-my-data-stored",
          "q": "Where is my data stored?",
          "a": "In the European Union. Checkgrow runs on Supabase infrastructure in AWS Frankfurt (eu-central-1), so your content, campaigns, knowledge and AI results stay in the European Economic Area by default. Data is encrypted in transit with TLS 1.3 and at rest with AES-256, and database-level access rules keep every company's data isolated from other companies."
        },
        {
          "anchor": "is-checkgrow-gdpr-compliant",
          "q": "Is Checkgrow GDPR compliant?",
          "a": "Checkgrow d.o.o. is an EU company based in Zagreb, Croatia, and processes personal data under the GDPR. You can access, correct, export and delete your data from My Account, manage marketing and analytics consent, and contact admin@checkgrow.com for any other request; access requests are answered within 30 days."
        },
        {
          "anchor": "how-do-i-export-or-delete-my-data",
          "q": "How do I export or delete my data?",
          "a": "Request an online archive from My Account under Download My Data: it covers your account, AI conversations, campaigns, tasks, agent results and the data of every company you belong to, delivered in JSON or CSV within 5 to 10 business days. You can delete your account at any time from My Account; some records, such as billing, are kept as the law requires."
        },
        {
          "anchor": "does-checkgrow-support-two-factor-authentication",
          "q": "Does Checkgrow support two-factor authentication?",
          "a": "Yes. Every user can turn on two-factor authentication with any authenticator app and keep recovery codes. Company admins can require it for the whole team with a grace period, and the requirement is enforced on our servers, not only in the app. Roles (Member, Admin and Master Admin) control what each person can see and do."
        },
        {
          "anchor": "can-we-self-host-checkgrow-on-our-own-infrastructure",
          "q": "Can we self-host Checkgrow on our own infrastructure?",
          "a": "Yes. Enterprises and scale-ups increasingly ask to run Checkgrow on their own private infrastructure, and we build self-hosted setups around their stack and security requirements on the Enterprise plan. Company knowledge stays structured and ready for any AI model they choose, inside their own perimeter, which matters for data sovereignty and compliance."
        }
      ]
    }
  ],
  "page": {
    "meta": {
      "title": "Checkgrow FAQ | AI growth marketing platform questions answered",
      "description": "Answers about Checkgrow: what the AI growth marketing platform does, how it learns your company, integrations and AI models, LinkedIn outreach, pricing and plans, and data security and GDPR."
    },
    "breadcrumb": {
      "home": "Home",
      "faq": "FAQ"
    },
    "eyebrow": "FAQ",
    "title": "Frequently asked questions",
    "intro": "Everything teams ask before and after they start with Checkgrow: the platform, your company brain, integrations, sales outreach, pricing and security.",
    "count": {
      "one": "{n} answer, one page.",
      "other": "{n} answers, one page."
    },
    "topics": "FAQ topics",
    "stillTitle": "Still have a question?",
    "stillBody": "See Checkgrow on your own brand in a demo, or read the step-by-step guides in our documentation.",
    "bookDemo": "Book a demo",
    "docs": "Read the documentation"
  }
} as const;
