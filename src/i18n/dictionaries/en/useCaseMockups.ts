/* The product mockups on the use case pages (src/components/use-cases/
   mockups/UseCaseMockups.tsx): fake Checkgrow screens, one entry per mockup.
   Figures are illustrative, from a demo workspace; translations keep each
   value and only change its format (€24,000 -> 24.000 € in German). Lists
   line up one to one with the mockup's data (colours, icons, bar widths). */
export const useCaseMockups = {
  /* a percentage drawn from a number in the mockup (rings, progress rows) */
  percent: "{n}%",

  moCampaigns: {
    eyebrow: "Campaigns",
    title: "AI-powered campaign briefings",
    create: "+ Create Campaign",
    filters: ["All · 6", "Active · 4", "Paused · 2", "This quarter"],
    columns: ["Campaign", "Channels", "Creatives", "Budget", "Status"],
    rows: [
      { name: "Q4 Enterprise Launch", period: "Oct 1 – Dec 31", budget: "€24,000" },
      { name: "Growth Brain webinar", period: "Oct 6 – Oct 30", budget: "€6,500" },
      { name: "Agency partner programme", period: "Sep 15 – Nov 15", budget: "€8,000" },
      { name: "Retargeting · trial users", period: "Paused Oct 2", budget: "€3,000" },
    ],
    spent: "{n}% spent",
    active: "Active",
    paused: "Paused",
    live: "LIVE · Q4 Enterprise Launch",
    stats: [
      { label: "Spend", value: "€9.8k" },
      { label: "Leads", value: "212" },
      { label: "CPA", value: "€46" },
    ],
    underTarget: "€12 under target",
  },

  moCreatives: {
    eyebrow: "Campaign · Creatives",
    title: "Q4 Enterprise Launch",
    language: "English",
    generate: "Generate visuals",
    newCreative: "New Creative",
    channels: "Channels",
    channelNames: ["Google Ads", "Meta", "LinkedIn"],
    count: "24 creatives",
    stage: "Awareness",
    stageHint: "Reach new buyers",
    tiles: [
      { title: "Your growth brain, in one place", status: "Approved" },
      { title: "Plan, launch and report. Together.", status: "Approved" },
      { title: "Five tools became one", status: "Content" },
      { title: "Free onboarding this month", status: "Design" },
    ],
    format: "Feed · 4:5",
    copies: "3 copies",
    next: "Action",
    nextHint: "6 creatives · Book a demo",
    open: "Open stage →",
  },

  moCalendar: {
    eyebrow: "Calendar",
    title: "October 2026",
    region: "Croatia",
    views: ["Month", "Week", "List"],
    legend: ["Campaigns 3", "Objectives 1", "Influencers 0", "Social Media 6", "Tasks 3", "Moments 1"],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    bars: ["Q4 Enterprise Launch", "Growth Brain webinar", "Agency partner programme"],
    /* posts and tasks, in date order (2, 8, 9, 14, 17, 21, 23 and 28 October) */
    items: ["Teaser reel", "Review creatives", "Carousel · 4 offers", "Webinar invite", "Update ICPs", "Customer story", "Board report", "Launch post"],
  },

  moIntegrations: {
    eyebrow: "Integrations",
    title: "Connect your tools",
    connectedCount: "5 connected",
    intro: "Connect the tools you already use. Your ads keep running where they are; Checkgrow reads their results.",
    tiles: [
      { name: "Google Analytics", detail: "GA4 · checkgrow.com" },
      { name: "Meta Ads", detail: "2 ad accounts" },
      { name: "Google Ads", detail: "1 account · 6 campaigns" },
      { name: "Instagram", detail: "@checkgrow · 12.4K" },
      { name: "LinkedIn", detail: "Outreach, posting and pages" },
      { name: "Notion", detail: "Workspace and databases" },
    ],
    connected: "✓ Connected",
    connect: "Connect",
    also: "ALSO",
    alsoItems: ["n8n", "Webhooks", "Checkgrow MCP"],
    soon: "COMING SOON",
    soonItems: ["Slack", "TikTok", "Supabase"],
  },

  moHome: {
    brand: "Checkgrow",
    groups: [
      { label: "Operations", items: ["Grow", "Tasks", "Calendar"] },
      { label: "Marketing", items: ["Campaigns", "Creative Studio", "Social Media", "Content", "Website"] },
      { label: "Sales", items: ["Target", "Outreach", "Leads"] },
      { label: "Research & report", items: ["Competitors", "Insights"] },
    ],
    eyebrow: "AI Assistant · Grow",
    hello: "Hello, Ana.",
    /* "To grow <b>Checkgrow</b>, start chatting…" */
    intro: { before: "To grow ", name: "Checkgrow", after: ", start chatting or engage with our features below:" },
    placeholder: "Ask Grow anything about your company…",
    language: "American English",
    model: "GPT-5.6 Luna",
    actions: ["Create and manage Campaigns", "Insights from your data", "Study your Competitors", "Update your Knowledge", "Explore your Knowledge Graph"],
    knowledge: "Knowledge",
    knowledgeValue: "77%",
    funnel: "Funnel · last 30 days",
    funnelStats: [
      { value: "21.9K", label: "TOFU" },
      { value: "971", label: "MOFU" },
      { value: "178", label: "BOFU" },
    ],
    activeCampaigns: "Active campaigns",
    activeValue: "4",
  },

  kcCompleteness: {
    eyebrow: "Knowledge Center",
    title: "Your company knowledge",
    summary: "77% · Expert Knowledge. Everything Checkgrow writes reads from here.",
    upload: "Upload Knowledge",
    sections: ["Company Profile", "Brand", "Products", "Buyer Personas", "Ideal Customer Profiles", "Use Cases"],
    /* shown under the last section */
    hint: "Add 2 use cases",
    drafting: "Drafting from your files",
    ready: "3 sections ready for your review",
  },

  kcBrand: {
    eyebrow: "Knowledge Center · Brand",
    title: "Tone of voice",
    edit: "Edit with Grow",
    tones: ["Clear", "Confident", "Warm, never casual", "Evidence over hype"],
    say: "WE SAY",
    sayItems: ["“One place for your marketing”", "“Your data, connected”", "“Approve, then publish”"],
    avoid: "WE AVOID",
    avoidItems: ["“Revolutionary”, “game-changer”", "Promises we can't measure", "Jargon without a reason"],
    messageLabel: "BRAND MESSAGE",
    message: "The growth brain for scale-ups and enterprise: knowledge, campaigns, content and sales in one loop.",
    used: "Used in every draft",
    usedIn: "Campaigns · Content · Creatives",
  },

  kcPersona: {
    eyebrow: "Buyer persona",
    name: "Maya, data-driven marketing lead",
    role: "Head of Growth · B2B SaaS, 50–200 people · Berlin",
    primary: "Primary",
    blocks: [
      { title: "GOALS", items: ["Prove what marketing returns", "Ship campaigns without an agency"] },
      { title: "PAIN POINTS", items: ["Five tools, five versions of the truth", "Weekly reports built from exports"] },
      { title: "OBJECTIONS", items: ["Another tool to learn", "Will the AI sound like us?"] },
      { title: "WHERE THEY LOOK", items: ["LinkedIn, peer communities", "Webinars and case studies"] },
    ],
    usedBy: "USED BY",
    usage: ["3 campaigns", "12 posts", "Sales brain"],
  },

  kcGraph: {
    title: "Knowledge Graph",
  },

  kcDraft: {
    status: "Draft · waiting for approval",
    channel: "LinkedIn post",
    author: "Checkgrow",
    meta: "Promoted · 1st draft",
    /* the post's paragraphs */
    post: [
      "Five tools, five versions of the truth. Sound familiar?",
      "Most teams rebuild the same weekly report from exports. We built Checkgrow so the plan and the results finally live in one place: campaigns, creatives, calendar and live data from GA4, Meta and Google Ads.",
      "Free onboarding this month. 👇",
    ],
    edit: "Edit with Grow",
    request: "Make it shorter and mention the free onboarding in the first line.",
    reply: "Done. Shorter by 38 words, offer in the opening line, same tone of voice from your Brand.",
    changes: ["+ offer first", "− 38 words"],
    note: "The saved version changes only after you approve.",
    discard: "Discard",
    approve: "Approve changes",
  },

  inFunnel: {
    eyebrow: "Insights",
    title: "Funnel reporting",
    range: "Last 30 days",
    setup: "Set up funnel",
    /* conversion between the stages: TOFU -> MOFU, MOFU -> BOFU */
    rates: ["4.6% →", "21.4% →"],
    events: "events",
    topEvents: "TOP EVENTS",
    topSources: "TOP SOURCES",
    stages: [
      {
        name: "TOFU",
        label: "Reach",
        total: "48,210",
        events: [
          { name: "Page view", value: "24,880" },
          { name: "Session start", value: "14,302" },
          { name: "First visit", value: "9,028" },
        ],
        sources: [
          { name: "Paid · Google", value: "16,940" },
          { name: "Organic · Google", value: "11,210" },
        ],
      },
      {
        name: "MOFU",
        label: "Engage",
        total: "2,214",
        events: [
          { name: "Demo page view", value: "1,120" },
          { name: "Pricing view", value: "702" },
          { name: "Form start", value: "392" },
        ],
        sources: [
          { name: "Paid · LinkedIn", value: "804" },
          { name: "Organic · Google", value: "611" },
        ],
      },
      {
        name: "BOFU",
        label: "Convert",
        total: "474",
        events: [
          { name: "Demo booked", value: "262" },
          { name: "Form submit", value: "212" },
        ],
        sources: [
          { name: "Paid · Google", value: "188" },
          { name: "Direct", value: "97" },
        ],
      },
    ],
  },

  inAdReport: {
    eyebrow: "Insights · Advertising",
    title: "Smart Report",
    channelNames: ["Meta", "Google Ads"],
    range: "Last 30 days",
    kpis: [
      { label: "Spend", value: "€18,240", change: "+6% vs previous" },
      { label: "CTR", value: "1.42%", change: "+0.31 pts" },
      { label: "Cost per click", value: "€0.61", change: "−14%" },
      { label: "Cost per result", value: "€38.40", change: "−18%" },
    ],
    results: "Results",
    spend: "Spend",
    daily: "Daily",
    summaryLead: "What changed: ",
    summary: "cost per result fell 18% as budget moved to Meta remarketing, which now brings 41% of results on 29% of spend. Google search is steady; the broad prospecting set is the one to review.",
  },

  inWinning: {
    eyebrow: "Insights · Advertising",
    title: "🏆 Winning ads",
    refresh: "Refresh analysis",
    intro: "Most attributed conversions in the period, explained against every other ad that delivered.",
    winners: [
      { name: "Five tools became one", campaign: "Q4 Enterprise Launch · Meta · Remarketing", spend: "€2,140", conversions: "58", costPerResult: "€36.90", ctr: "1.86%" },
      { name: "Your growth brain", campaign: "Q4 Enterprise Launch · Google · Search", spend: "€1,980", conversions: "31", costPerResult: "€63.87", ctr: "4.10%" },
    ],
    rank: "🏆 #{rank} winner",
    cells: { spend: "Spend", conversions: "Conversions", costPerResult: "Cost per result", ctr: "CTR" },
    share: "{share}% of conversions",
    measured: "Measured result",
    /* follows "Measured result" */
    measuredDetail: " · #{rank} by attributed conversions: {conversions} results at {costPerResult} per result. Volume ranking, not a profitability verdict.",
    open: "Open creative",
    generate: "Generate another like it",
    shareOfSpend: "Share of spend",
    shareOfResults: "Share of results",
  },

  inUtm: {
    eyebrow: "Insights",
    title: "UTM Reporting",
    range: "Sep 15 – Oct 14",
    compare: "Compare",
    total: "14,000",
    change: "+23% sessions",
    columns: ["Source", "Medium", "Campaign", "Sessions"],
    /* sessions per row; the UTM values themselves are identifiers */
    sessions: ["6,912", "3,204", "2,766", "1,118"],
  },

  inLive: {
    eyebrow: "Insights · Advertising",
    title: "Q4 board report",
    range: "Last 30 days",
    live: "🌐 Report live",
    kpis: [
      { label: "Spend", value: "€18,240" },
      { label: "Results", value: "475" },
      { label: "Cost per result", value: "€38.40" },
      { label: "ROAS", value: "3.4×" },
    ],
    publicLink: "Public link",
    copy: "Copy",
    note: "Live report: opens on your current date range. Viewers can change the live range.",
    badges: ["Always current", "No login needed"],
    disable: "Disable public link",
  },
} as const;
