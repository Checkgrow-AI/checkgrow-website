/* Book a demo and the demo confirmation (English source). See docs/i18n.md.
   Ids sent to the APIs (challenges, AI team sizes) are object keys here and
   never translate; only the labels do. Goal suggestions are sent as the
   text the visitor picked, so they are written for the reader. */
export const demo = {
  meta: {
    title: "Book a demo | Checkgrow",
    description:
      "Book a 30-minute Checkgrow demo. Leave with your company onboarded, a free AI growth strategy and the platform ready to run, plus competitor research, a website review and a 30-day free seat.",
    /* schema.org WebPage name */
    schemaName: "Book a Checkgrow demo",
  },
  page: {
    eyebrow: "Book a demo",
    title: "See your growth engine running in 30 minutes.",
    lead: "A live session on your own company, competitors and website. You leave with Checkgrow set up and a clear plan for what to do next.",
    perksLabel: "What you get from the demo",
    /* beside the form, in this order: clock, bolt, rocket */
    callResults: [
      "A 30-minute deep dive into results",
      "Instant onboarding, free AI strategy",
      "Leave ready to run",
    ],
    reassurance: "No credit card required · Your data stays yours",
    platformTitle: "Also included with Checkgrow",
    /* above the footer, in this order: radar, browser, gift */
    platformPerks: [
      {
        title: "Full competitor analysis",
        body: "Your competitors' channels, messages and campaigns, researched.",
      },
      {
        title: "Website and conversion flow review",
        body: "Where visitors drop off, and what to fix first.",
      },
      {
        title: "30-day free seat",
        body: "Test everything with your team. No credit card required.",
      },
    ],
  },
  founders: {
    title: "Speak with the founders",
    body: "We are opening special seats for a private onboarding.",
    alt: "{name}, Checkgrow co-founder",
  },
  form: {
    /* "Step 1 of 2 · Tailor your demo" */
    stepOf: "Step {n} of {total} · {name}",
    phases: {
      questions: "Tailor your demo",
      time: "Pick a time",
    },
    phaseLength: {
      questions: "60 sec",
      time: "{n} min",
    },
    intro: {
      questions:
        "Your answers set up your onboarding: we prepare your competitor scan, website review and AI strategy before the call.",
      time: "Choose a slot that suits you. The invite and video link follow by email.",
    },
    continue: "Continue",
    back: "Back",
    challenges: {
      title: "What do you want to fix first?",
      groups: {
        growth: { label: "Growth", tag: "Pipeline" },
        ai: { label: "AI operations", tag: "Team" },
      },
      /* keyed by the id sent to the API */
      labels: {
        leads: "Get more leads",
        conversion: "A website that converts",
        cac: "Reduce my CAC",
        ads: "Better Google, Meta or LinkedIn campaigns",
        outreach: "Improve my sales outreach",
        creatives: "More and better creatives",
        content: "Generate more content",
        geo: "Improve my GEO or SEO ranking",
        agents: "AI agentic force for my team",
        compliance: "Better compliance with AI",
      },
      limitReached: "Up to {max}: deselect one to swap.",
      selected: "{n} of {max} selected",
    },
    spend: {
      title: "How much do you spend on ads each month?",
      monthly: "Monthly ad spend",
      around: "Around",
      perMonth: "/ month",
      less: "Less",
      more: "More",
      /* screen readers: "~€10.000 per month" */
      valueText: "{amount} per month",
      noAds: "No active ads yet",
    },
    team: {
      title: "How many people use AI in your company?",
      /* keyed by the id sent to the API */
      options: {
        "1": "Just me",
        "2-5": "2–5 people",
        "6-20": "6–20 people",
        "21-50": "21–50 people",
        "51-100": "51–100 people",
        "100+": "100+ people",
      },
    },
    goals: {
      title: "What are your goals for this year?",
      inputLabel: "Add a goal",
      placeholder: "e.g. Open the German market",
      placeholderFull: "Five goals added",
      add: "Add goal",
      listLabel: "Your goals",
      remove: "Remove {goal}",
      suggested: "Suggested for you",
      skip: "Skip for now",
      /* suggestions follow the challenges picked, then the general ones;
         a goal shared by two challenges must be written identically */
      suggestions: {
        byChallenge: {
          leads: ["Double qualified leads", "Build a predictable pipeline"],
          conversion: ["Lift website conversion rate", "Fix drop-offs in the funnel"],
          cac: ["Cut CAC by 30%", "Scale ads profitably"],
          ads: ["Scale ads profitably", "Reach decision-makers on LinkedIn"],
          outreach: ["Book more sales meetings", "Personalise outreach at scale"],
          content: ["Publish content every week", "Grow organic reach"],
          creatives: ["Ship fresh creatives every week", "Find winning ad creatives"],
          geo: ["Get cited in AI answers", "Rank on page one of Google"],
          agents: ["Run marketing with AI agents", "Automate weekly reporting"],
          compliance: ["AI governance and compliance", "Roll AI out to the whole team"],
        },
        general: [
          "Launch in a new market",
          "Grow revenue this year",
          "Outpace our competitors",
          "Launch a new product",
        ],
      },
    },
    contact: {
      title: "Where should we send your invite?",
      email: "Work email",
      emailPlaceholder: "you@company.com",
      phone: "Phone number",
      phonePlaceholder: "+385 91 234 5678",
      firstName: "First name",
      lastName: "Last name",
      website: "Company website",
      websitePlaceholder: "company.com",
      /* "… accept our <Privacy Policy>." */
      consent: {
        before: "By submitting this form, you agree to be contacted by the Checkgrow team and accept our",
        link: "Privacy Policy",
        after: ".",
      },
      submit: "Request demo",
      sending: "Sending…",
    },
    /* validation messages (same rules in every language) */
    errors: {
      email: "Enter a valid work email",
      companyEmail: "Please add your company email",
      phoneRequired: "Add your phone number",
      phoneInvalid: "Enter a valid phone number, e.g. +385 91 234 5678",
      firstName: "Add your first name",
      lastName: "Add your last name",
      websiteRequired: "Add your company website",
      websiteInvalid: "Enter a website like company.com",
    },
    booking: {
      taken: "That time was just taken. Please pick another one.",
      tooMany: "Too many attempts. Please try again in a few minutes.",
      failed: "We couldn't book that slot. Please try again.",
    },
    time: {
      loading: "Loading available times",
      loadError: "We couldn't load the calendar.",
      loadErrorHint: "Your answers are saved here. Try again in a moment.",
      retry: "Try again",
      confirm: "Confirm demo",
      confirming: "Booking…",
      tailoredFor: "Tailored for",
      edit: "Edit",
      /* summary chips */
      noAds: "No active ads",
      spendPerMonth: "{amount} / month",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      /* a calendar day without free times; {day} is "Monday 24 November" */
      dayUnavailable: "{day}, unavailable",
      zone: "Times in your zone: {zone}",
      timesOn: "Times on {day}",
    },
  },
  confirmation: {
    meta: {
      title: "Demo confirmed | Checkgrow",
      description: "Your Checkgrow demo is booked.",
    },
    eyebrow: "Demo confirmed",
    titleNamed: "You're booked, {name}.",
    title: "Your demo is booked.",
    thanks: "Thank you for your time. We can't wait to show you Checkgrow running on your own business.",
    /* "… on their way to <email>." */
    inviteTo: {
      before: "The calendar invite and Meet link are on their way to",
      after: ".",
    },
    inviteGeneric: "Check your inbox: the calendar invite and Google Meet link are on their way.",
    prepTitle: "Before the call, we prepare",
    prep: {
      competitors: {
        title: "Competitor scan",
        body: "Who you compete with, and how they market.",
        bodyNamed: "Who competes with {site}, and how they market.",
      },
      website: {
        title: "Website and conversion review",
        body: "Where visitors drop off, and what to fix first.",
      },
      strategy: {
        title: "Your AI growth strategy",
        body: "A first plan and report, ready to walk through together.",
      },
    },
    exploreFeatures: "Explore the features",
    backHome: "Back to the homepage",
  },
} as const;
