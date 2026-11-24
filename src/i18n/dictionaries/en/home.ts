/* home copy (English source): every homepage section, top to bottom.
   Some sections also appear elsewhere: the Trustpilot strip on
   /book-a-demo, the logo marquee on /pricing and /sales, the final call to
   action on /pricing and the real stories on /demo-confirmation. Lists
   keep the order and length of the structures in src/lib and the
   components. See docs/i18n.md. */
export const home = {
  hero: {
    label: "AI Native Growth Marketing",
    /* the rotating word sits between `before` and `after` */
    title: { before: "The go-to-market engine that learns your", after: "." },
    rotatingWords: ["product", "buyers", "market", "channels"],
    body: "Growth shouldn't depend on who's in the room. Checkgrow keeps everything your company knows in one growth operating system: learning, improving, and working for every team. It turns knowledge into customers and recognition.",
    bookDemo: "Book a demo",
    chat: {
      label: "AI Assistant",
      model: "Model:",
      modelAlt: "{name} model in the Checkgrow AI marketing assistant",
      prompts: [
        "Which Meta ads are converting the best?",
        "How many leads did we get this month?",
        "How many signups did we have this month?",
        "Tell me more about my competitors' ads.",
        "Let's comment on a few LinkedIn posts.",
        "What are the latest trends for us this week?",
      ],
    },
    onboarding: {
      title: "Start onboarding your brand.",
      /* typed into the field as the visitor scrolls */
      website: "yourwebsite.com",
    },
    knowledge: {
      title: "Build your context",
      /* same order as the bullet layout in HeroV2; each `marks` phrase must
         appear verbatim in its `tip` (it is typed in bold) */
      nodes: [
        {
          label: "Brand",
          tip: "Get instant access to your brand design system and keep full context for your AI generations.",
          marks: ["full context"],
        },
        {
          label: "ICP",
          tip: "Know exactly who buys and why. Your ideal customer profiles feed every campaign and message.",
          marks: ["ideal customer profiles"],
        },
        {
          label: "Use Cases",
          tip: "Map every use case your product solves so the AI sells the right one to the right buyer.",
          marks: ["right buyer"],
        },
        {
          label: "Products",
          tip: "Store your products once and keep every AI output accurate about what you sell.",
          marks: ["AI output accurate"],
        },
        {
          label: "Competitors",
          tip: "Track your competitors' ads and positioning with live AI gap analysis.",
          marks: ["competitors' ads"],
        },
        {
          label: "Social Media",
          tip: "Find the conversations that matter and publish on-brand content across every channel.",
          marks: ["Find the conversations"],
        },
        {
          label: "Tracking",
          tip: "Have all your funnel events tracked and AI reporting within a click.",
          marks: ["funnel events"],
        },
        {
          label: "Campaigns",
          tip: "Generate Meta, Google and LinkedIn campaign strategies and link them with your paid channels.",
          marks: ["Meta", "Google", "LinkedIn"],
        },
      ],
    },
    platform: {
      /* the first word is the centre of the constellation */
      words: ["Marketing", "Operations", "Sales", "Research", "Report"],
      details: ["Campaigns", "Social Media", "Website", "Leads", "Competitors", "Conversions", "AI Agents", "Insights"],
    },
    team: {
      title: "One learning brain, one team, compounding growth.",
      /* portrait alt texts, in the order of the portraits */
      portraits: [
        "Founder",
        "Fabian, analytics",
        "CFO",
        "Sofia, campaign manager",
        "Founder",
        "Roberta, go-to-market",
        "CPO",
        "Mikai, marketing manager",
        "CEO",
        "Thomas",
      ],
    },
    scroll: "Scroll",
  },
  trustpilot: {
    label: "Checkgrow is rated 4.4 out of 5, Excellent, from 12 reviews on Trustpilot",
    score: "4.4",
    rating: "Excellent",
    reviews: "12 reviews",
  },
  logos: {
    title: "Companies growing their marketing with Checkgrow",
    label: "Logos of companies using Checkgrow: Witrina, Qubinets, WESPA, Minka, Woodoz, Barner, Drooms, Engasco and Optika Anda",
    logoAlt: "{name} logo, a Checkgrow growth marketing customer",
  },
  credibility: {
    /* before <strong>strong</strong>after */
    before: "Built from",
    strong: "15 years of hands-on marketing",
    after: ": an agency before it was a platform, shaped by real problems, not theory.",
    worksAcross: "Works across",
    modelAlt: "{name} logo, supported by Checkgrow AI marketing tools",
    noLockIns: "no lock-ins",
  },
  platformFilm: {
    chaptersLabel: "Film chapters",
    /* same order as the chapter timestamps in PlatformFilm */
    chapters: ["Knowledge", "Marketing", "Insights", "Sales", "AI Chat"],
    videoLabel: "Checkgrow platform tour",
    tapForSound: "Tap for sound",
    restart: "Restart the platform film",
    mute: "Mute the platform film",
    unmute: "Unmute the platform film",
    bookDemo: "Book a demo",
  },
  problem: {
    label: "The problem",
    title: "Every marketing tool starts from zero.",
    body: "Five tools means explaining your business five times, then again for every new campaign, hire and AI prompt. Nothing carries forward. Nothing remembers what actually worked. You shouldn't need a data analyst to read your own funnel.",
    hint: "Tap a tool to see what really goes wrong inside it.",
    close: "Close {name}",
    /* keyed by the tool ids in src/lib/problemCards.ts */
    tools: {
      content: {
        name: "Content tool",
        state: "No brand context",
        bullets: ["Copy that doesn't sound like you", "Blind to products and personas", "Calendar guesswork, no research", "Every draft starts from blank"],
      },
      analytics: {
        name: "Analytics",
        state: "Data nobody reads",
        bullets: ["Dashboards without decisions", "Events never mapped to a funnel", "Paid, organic and site data split", "Nothing says what to do next"],
      },
      ads: {
        name: "Ad platform",
        state: "No audience context",
        bullets: ["Channels pulling in different directions", "Boosting posts instead of strategy", "No ICP, no strategic audience", "Creatives guessed, never benchmarked"],
      },
      chatbot: {
        name: "AI chatbot",
        state: "Re-brief every time",
        bullets: ["Different LLMs, no single source of truth", "Random PDF uploads, repeated chats", "Context re-typed every session", "No automations, no prompt craft"],
      },
      rivals: {
        name: "Competitor sheet",
        state: "Stale by Monday",
        bullets: ["Research done once, then forgotten", "No live view of rivals' ads", "Insights never reach campaigns", "Gut feel instead of signals"],
      },
    },
  },
  shift: {
    label: "The shift",
    /* two lines, with a line break between them */
    title: { first: "One connected system.", second: "More room to grow." },
    imageAlt: "A person facing connected landscapes that converge into one answer, illustrating shared marketing intelligence.",
    /* keyed by the benefit ids in src/lib/shiftStory.ts */
    benefits: {
      capacity: {
        title: "Automated research. Clearer decisions.",
        description: "Research, briefs and reports, grounded in your brand. Less searching. More informed action.",
        stat: "8–25 hrs",
        label: "Recover capacity",
        body: "of team time per month designed to come back from searching, briefing and reporting.",
      },
      spend: {
        title: "Smarter campaigns. Connected channels.",
        description: "Bring audience signals, budgets and tracking together across your tools and MCP integrations.",
        stat: "3–10%",
        label: "Protect spend",
        body: "of addressable media budget designed to be protected from weak targeting and broken tracking.",
      },
      throughput: {
        title: "Centralised marketing intelligence.",
        description: "One source for your brand, audiences and approved knowledge. A stronger start for every campaign.",
        stat: "40–70%",
        label: "Increase throughput",
        body: "faster first drafts across multi-channel campaigns, with human approval retained.",
      },
      memory: {
        title: "Memory that speaks your data.",
        description: "Turn approved work and performance into shared knowledge. Let your next move build on what worked.",
        stat: "Every result",
        label: "Compound intelligence",
        body: "feeds the next decision. Approved strategies, assets and learnings keep improving the context.",
      },
    },
  },
  difference: {
    label: "Why Checkgrow",
    title: "Not another AI tool. A growth brain your team learns with.",
    body: "Generic AI and single-purpose tools start from zero and stay outside your business. Checkgrow is different in three ways that matter.",
    /* keyed by the ids in src/lib/differentiators.ts */
    items: {
      "growth-brain": {
        label: "Company brain for growth",
        title: "A brain built for marketing and growth, not a pile of files and prompts.",
        body: "Your brand, products, audiences, results and decisions live in one company brain, structured and strategised for marketing and growth. Not random documents in a drive, or prompts scattered across a dozen chats. Every campaign, agent and report reads from it, and every result feeds back in.",
      },
      learning: {
        label: "Human connection",
        title: "Your team gets better at marketing by using it.",
        body: "Checkgrow runs on your own marketing and growth data, so working in it teaches the craft. Interactive features take your team through every stage of the funnel, from first touch to conversion, and explain why a number moved, not just that it did. People stay in the loop and grow with the system.",
      },
      "self-host": {
        label: "Self-hosted and sovereign",
        title: "Run it on your own infrastructure. Keep your data sovereign.",
        body: "Enterprises and scale-ups are asking to self-host Checkgrow, and we build for it. Your company knowledge stays structured and ready for any AI model you choose, inside your own security perimeter and under your own data-sovereignty rules. No lock-in to a vendor or a model.",
      },
    },
    bookDemo: "Book a demo",
    compare: "Compare Checkgrow with the typical growth stack",
  },
  caseStudies: {
    label: "Real stories",
    title: "100+ marketing experts already grow with Checkgrow.",
    body: "Founders, CMOs and operators who ran their growth through Checkgrow, in their own words.",
    readStories: "Read the success stories",
    /* portrait alt when a testimonial has no attribution line */
    roleAt: "{role} at {company}",
    showStory: "Show {person}'s story",
    demo: {
      title: "Demos don't lie.",
      body: "Watch Checkgrow run a real go-to-market end to end: 2 minutes 41 seconds, one take, no cuts.",
      watch: "Watch our demo review",
      hide: "Hide the demo",
      bookDemo: "Book a demo",
      badge: "2:41 · real demo, no cuts",
      question: "Struggling with your marketing and still questioning?",
    },
  },
  integrations: {
    label: "Integrations",
    title: "Plugs into the channels you already run.",
    body: "Connect analytics, paid and social once. Every module reads the same live data, and what you learn flows back into the next campaign.",
    logoAlt: "{name} logo",
    /* what each integration brings, keyed by the ids in Integrations.tsx */
    roles: {
      "google-analytics": "GA4 events, sessions and funnel data",
      "google-ads": "Paid spend and performance in one report",
      "meta-ads": "Campaigns plus the Meta ad library",
      linkedin: "Conversations, ad activity and outreach",
      instagram: "Creator and profile tracking",
      n8n: "Automations triggered from tasks",
      tiktok: "Trends, creators and ad activity",
      notion: "Pages and docs feed the knowledge base",
      slack: "Updates and approvals where the team talks",
      supabase: "Product and customer data, queried live",
      webhook: "Push leads and events to any system",
    },
    research: "Plus a research layer across Google News, Perplexity and Gemini, and your choice of OpenAI, Gemini or Claude for every AI job.",
  },
  roles: {
    label: "Who it's for",
    title: "Each team gets its own reason to stay in one system.",
    /* keyed by the role ids in Roles.tsx */
    items: {
      founders: {
        who: "Founders & CMOs",
        title: "Set direction once",
        body: "Define the brand, the offer and the target buyer a single time. Everything produced downstream stays on message, without you in the loop.",
        win: "No more re-briefing",
      },
      ops: {
        who: "Marketing & sales ops",
        title: "Execute at real speed",
        body: "Specialist agents produce content, ads, outreach and creative that already know your product, audience and tone.",
        win: "Weeks to minutes",
      },
      growth: {
        who: "Growth & analytics",
        title: "Close the loop",
        body: "See what converted and why, with fixes ranked and routed straight into the next campaign as tracked work.",
        win: "Compounding, not resetting",
      },
    },
    enterprise: {
      imageAlt: "Bruno Mucheroni, founder and CEO of Checkgrow",
      label: "For enterprises",
      title: "Enterprise custom AI systems that drive growth.",
      body: "Large teams get the same growth system, shaped around how they already work: one knowledge core feeding every campaign, agent and report. Enterprises and scale-ups increasingly ask to self-host it: we build self-hosted, custom-developed setups that fit your stack, your security requirements and your scale, with your company knowledge structured for any AI model and kept under your own data sovereignty.",
      bookDemo: "Book a demo",
    },
  },
  faqLink: "See all questions",
  finalCta: {
    logoAlt: "Checkgrow growth marketing platform logo",
    title: "Products are easy to build now. Checkgrow makes them easier to sell.",
    body: "Book a 30-minute demo on your own company, competitors and website. Leave with Checkgrow set up and a clear plan for what to do next.",
    bookDemo: "Book a demo",
  },
  scrollRail: {
    goTo: "Go to {label}",
    /* keyed by the section ids in MobileScrollRail.tsx */
    labels: {
      platform: "Platform",
      solution: "Solution",
      stories: "Real Stories",
      "use-cases": "Features",
      pricing: "Pricing",
      faq: "FAQ",
      waitlist: "Book a demo",
    },
  },
  flow: {
    /* keyed by the step ids in FlowStrip.tsx */
    steps: {
      business: "Your business",
      create: "Create",
      reach: "Reach",
      measure: "Measure",
      improve: "Improve",
    },
    remembered: "what works gets remembered",
  },
} as const;
