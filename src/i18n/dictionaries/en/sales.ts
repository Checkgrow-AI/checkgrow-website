/* The /sales page: Checkgrow Sales for enterprise go-to-market teams, plus
   its metadata and structured data. Module ids, mockup keys and control
   icons are identifiers and never translate. See docs/i18n.md. */
export const sales = {
  meta: {
    title: "Checkgrow Sales | The AI Sales Brain for go-to-market teams",
    description:
      "Checkgrow Sales builds an AI Sales Brain from your own conversations: ICP-ranked lists, approved LinkedIn outreach in every rep's voice, replies sorted for you, and one history leadership can follow.",
  },
  /* a phrase kept on one line in headlines (empty string: none) */
  nowrap: "go-to-market",
  hero: {
    eyebrow: "Checkgrow Sales",
    title: "The best go-to-market teams run sales on Checkgrow.",
    intro: "An AI Sales Brain that learns how your company sells, scales consistent outreach across every rep, and keeps every conversation in one history your leadership can follow.",
    bookDemo: "Book a demo",
    seeHow: "See how it works",
  },
  film: {
    label: "Checkgrow Sales walkthrough",
    watchLabel: "Watch the Checkgrow Sales walkthrough with sound",
    watch: "Watch with sound",
    length: "3 min",
  },
  proof: {
    label: "What go-to-market leaders say",
    quote: "“{quote}”",
    byline: "{role}, {company}",
  },
  overview: {
    eyebrow: "One brain for every rep",
    title: "Find the right accounts, reach them well, and get better every week.",
    intro:
      "Three modules work from the same company brain your marketing uses: your ICPs, personas, products and voice. Every result flows back into it.",
  },
  modules: [
    {
      id: "lists",
      name: "Lists",
      promise: "Know exactly who to reach",
      title: "Your market, ranked and owned.",
      intro: "Turn your Ideal Customer Profile into a ranked list of accounts, find the decision-makers inside them, and give every company exactly one owner.",
      functions: [
        {
          mockup: "lists-1",
          title: "From ICP to a ranked list",
          body: "Your ICP fills the search. Companies stream in, scored for fit and sorted best-first, and the top accounts go straight into a rep's list in seconds.",
          screen: "An ICP fills the company search; matching companies are scored for ICP fit, sorted best-first and added to a rep's list.",
        },
        {
          mockup: "lists-2",
          title: "The right person first",
          body: "Every contact is matched against your ICP, decision-makers are ranked, and Checkgrow explains why each one comes first, from lead score to recent LinkedIn activity.",
          screen: "People at a target company are matched to the ICP and ranked by priority, with the signals that explain who to contact first.",
        },
        {
          mockup: "lists-3",
          title: "Lists that route themselves",
          body: "Set an assignment rule once and new matching companies land in the right rep's lane. One owner per company, no duplicates, and customers or do-not-contact accounts are never prospected.",
          screen: "An auto-assign rule routes new matching companies to each rep's lane while customers and do-not-contact companies are blocked.",
        },
      ],
    },
    {
      id: "outreach",
      name: "Outreach",
      promise: "Reach them like your best rep",
      title: "Outreach that sounds researched, at a human pace.",
      intro: "Every rep engages from their own LinkedIn, in their own voice, with a person approving what goes out. Relationships start before the pitch, and no reply is missed.",
      functions: [
        {
          mockup: "outreach-1",
          title: "Warm up before the pitch",
          body: "Grow drafts a genuine comment on a prospect's post and explains why it matters. Like, comment, invite, accepted: the relationship starts before the first message.",
          screen: "A prospect's LinkedIn post receives a drafted comment, then the journey moves from like to comment to an accepted invitation.",
        },
        {
          mockup: "outreach-2",
          title: "Approve in minutes",
          body: "First messages arrive written in the rep's voice, with the Brain rules behind each one. Reps approve one by one, and a whole campaign is scheduled in minutes instead of hours.",
          screen: "A rep approves first messages one by one, each showing the Sales Brain rules it used, until 41 messages are scheduled.",
        },
        {
          mockup: "outreach-3",
          title: "Every reply read and sorted",
          body: "Replies are read and labelled hot, warm, cool or cold with their intent, warmest first. Hot replies become meetings, and simple answers are handled for you.",
          screen: "Incoming LinkedIn replies are labelled hot, warm, cool or cold, sorted warmest first, and the hot reply becomes a meeting.",
        },
      ],
    },
    {
      id: "sales-brain",
      name: "Sales Brain",
      promise: "Get better with every conversation",
      title: "A Sales Brain that belongs to your company.",
      intro: "Every reply, edit, comment and instruction teaches the Brain how your company sells. The knowledge compounds across the team, and it stays with you when people move on.",
      functions: [
        {
          mockup: "brain-1",
          title: "Your feedback writes the next message",
          body: "Tell the Brain what was wrong, in plain words. It rewrites the message, turns your feedback into a rule, and one click shares that rule with every rep.",
          screen: "A generic message receives feedback, the Sales Brain rewrites it, and the feedback becomes a rule shared with every rep.",
        },
        {
          mockup: "brain-2",
          title: "Learns from every signal",
          body: "Replies, comments, edits, approvals, instructions and playbooks all flow into the Brain. Each week it shows what it learned, and where every rule came from.",
          screen: "Replies, comments, edits, approvals, instructions and a playbook flow into a rep's Sales Brain, which lists the rules it learned this week and their sources.",
        },
        {
          mockup: "brain-3",
          title: "More replies every week",
          body: "As the Brain learns, the same outreach earns more conversations. Leadership sees the curve and the lessons behind every step of it.",
          screen: "A rep's reply rate climbs week by week, annotated with what the Sales Brain learned at each step.",
          note: "Illustrative data",
        },
      ],
    },
  ],
  /* tab list label of one module's functions */
  functionsLabel: "{module} functions",
  difference: {
    eyebrow: "Why Checkgrow Sales",
    title: "Most tools send messages. Checkgrow builds your sales brain.",
    intro:
      "Every conversation becomes company knowledge: a proprietary dataset of what your buyers respond to, owned by you and compounding with every rep.",
  },
  pillars: [
    {
      title: "Consistent at any scale",
      body: "Every rep works from the same approved rules, voice and playbook, so outreach quality no longer depends on who sends it.",
    },
    {
      title: "A proprietary sales dataset",
      body: "Every conversation, reply, edit and decision becomes structured company data. The Brain compounds it into how your company sells.",
    },
    {
      title: "Visible to leadership",
      body: "Lists, approvals, replies and what each Brain has learned sit in one place, so managers follow the work without chasing updates.",
    },
    {
      title: "History that stays",
      body: "The full outreach history is centralised. When a rep moves on, their accounts, conversations and lessons stay with the company.",
    },
  ],
  governance: {
    eyebrow: "Built for enterprise go-to-market",
    title: "Scale outreach without losing control.",
    intro:
      "Leadership sets the rules once. Every rep works inside them, every action is approved by a person, and the whole team runs on one governed system.",
  },
  controls: [
    {
      icon: "approve",
      title: "A person approves everything",
      body: "The Brain proposes comments and messages; nothing is published until a rep approves, edits or rejects it.",
    },
    {
      icon: "pace",
      title: "Paced like a careful human",
      body: "3 to 15 connection requests per rep per day, on weekdays between 8:00 and 19:00, one comment per target per day, and an emergency stop.",
    },
    {
      icon: "linkedin",
      title: "Each rep's own LinkedIn",
      body: "Reps connect their own account through a LinkedIn compliant API and can disconnect at any time, which stops all activity at once.",
    },
    {
      icon: "owner",
      title: "One owner per company",
      body: "Imports are checked against every rep, two people never contact the same person, and customers and do-not-contact accounts are protected.",
    },
    {
      icon: "data",
      title: "Brings your data with you",
      body: "Import up to 5,000 companies or people from CSV or Excel, or pull them from HubSpot, Zoho CRM and GoHighLevel.",
    },
    {
      icon: "security",
      title: "Enterprise security",
      body: "Roles and required two-factor authentication, EU hosting in AWS Frankfurt, and encryption in transit and at rest.",
    },
  ],
  team: {
    eyebrow: "The team behind Checkgrow",
    title: "Built by go-to-market fanatics.",
    body: [
      "We spent fifteen years in the trenches of marketing and sales: an agency before we were a platform, running campaigns, outreach and pipeline for our clients, judged on one thing, results.",
      "Checkgrow is how we turned that obsession into a system. Every module on this page comes from problems we solved by hand first, so your team gets the method, not just the software.",
    ],
    imageAlt: "The Checkgrow team reviewing a customer's go-to-market work together at a meeting table",
  },
  faqTitle: "Questions from sales leaders",
  allQuestions: "All questions",
  faq: [
    {
      q: "What is a Sales Brain?",
      a: "A Sales Brain is the AI that writes outreach for your reps and learns how your company sells. It reads your company knowledge (ICPs, personas, products and voice) and learns from every reply, comment, edit, approval and instruction. What it learns becomes rules your team can see, trace to their source and share with every rep.",
    },
    {
      q: "How is Checkgrow Sales different from a sales engagement tool?",
      a: "Sequencers send templates. Checkgrow builds a proprietary Sales Brain from your own conversations, so outreach stays consistent across every rep, improves with every reply and edit, and the full history stays centralised for leadership instead of scattered across inboxes.",
    },
    {
      q: "Do messages go out without approval?",
      a: "No. The Brain proposes comments and messages, and each one waits for a rep to approve, edit or reject it. Approved items are then sent at a human pace within daily limits.",
    },
    {
      q: "How does LinkedIn outreach stay safe?",
      a: "Outreach runs from each rep's own LinkedIn account through a LinkedIn compliant API. You set a daily limit of 3 to 15 connection requests, sent on weekdays between 8:00 and 19:00 at randomised intervals, with one comment per target per day and an emergency stop. No automation is risk-free, so activity is kept well inside normal professional patterns.",
    },
    {
      q: "Can managers follow what every rep is doing?",
      a: "Yes. Each rep has their own workspace and Sales Brain, while lists, assignments, approvals, replies and what each Brain has learned are centralised, so leadership can follow the work and the results across the team.",
    },
    {
      q: "Can we bring our existing accounts and contacts?",
      a: "Yes. Import a CSV or Excel file of up to 5,000 companies or people, or pull them from HubSpot, Zoho CRM or GoHighLevel. Every import is checked against your reps so one company keeps one owner, and your existing LinkedIn connections can become a list too.",
    },
    {
      q: "What happens to our data when a rep leaves?",
      a: "It stays with the company. Accounts, conversations, approvals and the rules the Brain learned are centralised in your workspace, not in a personal inbox, so the next rep starts from the full history.",
    },
  ],
  cta: {
    title: "Sales that compounds starts here.",
    body: "See Checkgrow Sales on your own ICP, accounts and voice in a 30-minute demo with our team.",
    bookDemo: "Book a demo",
  },
  schema: {
    product: "Checkgrow Sales",
    videoName: "Checkgrow Sales walkthrough",
    videoDescription:
      "A walkthrough of Checkgrow Sales: the team's LinkedIn pipeline from invitations to meetings, replies sorted by Grow, drafts written in each rep's voice for approval, and the Sales Brain that learns from every conversation.",
    home: "Home",
    page: "Sales",
  },
} as const;
