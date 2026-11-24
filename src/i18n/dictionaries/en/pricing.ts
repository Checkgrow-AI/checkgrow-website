/* Pricing copy (English source): the pricing section (homepage and
   /pricing), the comparison modal, the currency menu, customer proof and
   the /pricing page. Prices, plan ids and limits live in src/lib/pricing.ts;
   the buying questions live in the faq namespace. See docs/i18n.md. */
export const pricing = {
  "meta": {
    "title": "Checkgrow Pricing | Plans for brands, agencies and growth teams",
    "description": "Business: €499/month. Agency: €997/month. Growth: €4,997/month. Enterprise: custom pricing. Save 10% with annual billing. Prices exclude VAT."
  },
  "breadcrumb": {
    "home": "Home",
    "pricing": "Pricing"
  },
  "section": {
    "eyebrow": "Pricing",
    "title": "The platform, the brands, or the whole team.",
    "intro": "Every plan runs on the same company brain. Choose one brand, every brand, or our specialists running growth with you.",
    "bookDemo": "Book a demo",
    "optionsLabel": "Pricing options",
    "billingLabel": "Billing frequency",
    "monthly": "Monthly",
    "yearly": "Yearly",
    "save": "Save {percent}%"
  },
  "currencyMenu": {
    "label": "Display currency",
    "trigger": "Display currency: {name} ({code})",
    "names": { EUR: "Euro", CHF: "Swiss franc", USD: "US dollar", BRL: "Brazilian real" },
  },
  "card": {
    "custom": "Custom",
    "perMonth": "/month",
    "tailored": "Tailored agreement",
    "billedMonthly": "Billed monthly, excl. VAT",
    "monthlyEstimate": "Monthly estimate · billed in EUR",
    "perYearVat": "{price} per year, excl. VAT",
    "perYearEstimate": "{price} per year · billed in EUR",
    "specialistRoles": {
      "one": "{n} specialist role on your accounts",
      "other": "{n} specialist roles on your accounts"
    }
  },
  "specLabels": [
    "Brands",
    "Growth Credits",
    "Team seats",
    "Managed accounts"
  ],
  "plans": {
    "business": {
      "name": "Business",
      "audience": "For a single brand",
      "description": "The complete platform for a single brand, with room for the whole team.",
      "cta": "Book a demo",
      "ctaNote": "No credit card required",
      "specs": [
        {
          "value": "1 brand"
        },
        {
          "value": "5,000 / month",
          "note": "Top up anytime"
        },
        {
          "value": "Unlimited"
        },
        {
          "value": "Self-serve"
        }
      ],
      "service": {
        "title": "Help center & chat support",
        "body": "Guides, tutorials and our team on chat when you need a hand."
      },
      "inheritance": "The full platform",
      "includes": [
        "Company brain in the Knowledge Center",
        "Marketing and Sales suites",
        "Creative Studio and AI Assistant",
        "Insights, funnel and smart reporting",
        "GA4, Meta, Google Ads and LinkedIn"
      ]
    },
    "agency": {
      "name": "Agency",
      "audience": "For agencies and multi-brand teams",
      "description": "Every brand and client in its own workspace, with our team in your corner.",
      "cta": "Book a demo",
      "ctaNote": "No credit card required",
      "specs": [
        {
          "value": "Unlimited"
        },
        {
          "value": "5,000 / month",
          "note": "Shared pool · top up anytime"
        },
        {
          "value": "Unlimited"
        },
        {
          "value": "Self-serve"
        }
      ],
      "service": {
        "title": "1 hour / month with our growth team",
        "body": "A monthly customer-success session to review results and plan the next move."
      },
      "inheritance": "Everything in Business, plus",
      "includes": [
        "Multi-brand: unlimited client brands",
        "A separate company brain per brand",
        "Switch between client workspaces",
        "Monthly growth session with our team"
      ]
    },
    "growth": {
      "name": "Growth",
      "audience": "Your growth team, included",
      "description": "Our specialists run your ads, reports and follow-up, alongside your team.",
      "featured": "Done with you",
      "cta": "Talk to our team",
      "ctaNote": "Book a call with our team",
      "specs": [
        {
          "value": "Unlimited"
        },
        {
          "value": "5,000 / month",
          "note": "Top up anytime"
        },
        {
          "value": "Unlimited"
        },
        {
          "value": "Up to 3",
          "note": "Extra accounts billed separately"
        }
      ],
      "service": {
        "title": "A dedicated growth team"
      },
      "inheritance": "Everything in Agency, plus",
      "includes": [
        "Dedicated account manager",
        "Ad management: ads created, launched and optimised",
        "Performance reports for every account",
        "Customer success across your accounts"
      ]
    },
    "enterprise": {
      "name": "Enterprise",
      "audience": "Built around your organisation",
      "description": "Your growth platform, on your infrastructure, under your brand.",
      "cta": "Contact sales",
      "ctaNote": "Book a call with our team",
      "specs": [
        {
          "value": "Unlimited"
        },
        {
          "value": "Custom"
        },
        {
          "value": "Unlimited"
        },
        {
          "value": "Custom"
        }
      ],
      "service": {
        "title": "A custom team for your build",
        "body": "Engineers and growth specialists dedicated to your roll-out."
      },
      "inheritance": "Everything in Growth, plus",
      "includes": [
        "Custom development and integrations",
        "White-label, branded platform",
        "Self-hosted infrastructure and data sovereignty",
        "Advanced security and compliance reviews",
        "Long-term agreements"
      ]
    }
  },
  "growthTeam": [
    {
      "initials": "AM",
      "role": "Account manager"
    },
    {
      "initials": "AD",
      "role": "Ad management"
    },
    {
      "initials": "CR",
      "role": "Creative production"
    },
    {
      "initials": "CS",
      "role": "Customer success"
    }
  ],
  "topUp": "Need more Growth Credits? Top up anytime on any plan.",
  "notes": {
    "estimates": "Whole-number estimates, decimals omitted. Billing in EUR. Prices exclude VAT.",
    "loading": "Loading exchange rates. EUR prices are ready.",
    "error": "Currency conversion is temporarily unavailable. Showing EUR.",
    "retry": "Retry rates",
    "ratesLink": "ECB reference rates",
    "ratesAfter": "via Frankfurter · {date} · Updated each working day."
  },
  "compare": {
    "eyebrow": "Compare the full stack",
    "title": "See everything Checkgrow replaces.",
    "body": "Compare Checkgrow with the 11 subscriptions, logins and disconnected workflows a typical growth team manages today.",
    "button": "Compare our pricing"
  },
  "comparison": {
    "eyebrow": "Full comparison",
    "title": "One platform against the typical growth stack.",
    "intro": "Beyond price: one company brain built for growth instead of scattered files and prompts, a team that learns marketing as it works, and the option to self-host for data sovereignty.",
    "close": "Close pricing comparison",
    "swipe": "Swipe horizontally to compare every column.",
    "function": "Function",
    "stack": "Typical stack",
    "stackNote": "11 tools · 11 logins",
    "checkgrow": "Checkgrow",
    "checkgrowNote": "1 platform · 1 context",
    "perMonth": "{price}/mo",
    "included": "included",
    "fullStack": "Typical full stack",
    "fullStackNote": "Before seats, overages and the time spent stitching every tool together.",
    "from": "From {price}/mo",
    "checkgrowBody": "One operating system, one source of truth and one bill.",
    "bookDemo": "Book a demo",
    "footnote": "Third-party tools are category examples. Prices are typical monthly list prices for comparable plans. Whole-number estimates in {currency}; Checkgrow billing remains in EUR.",
    "rows": {
      "brandKnowledge": {
        "cat": "Brand & knowledge",
        "tools": "Notion or Frontify",
        "toolNote": "Guidelines live in a doc nobody opens",
        "cg": "Knowledge Center + Brand Basics",
        "cgNote": "A company brain built for growth, not files and chat prompts"
      },
      "aiContent": {
        "cat": "AI content",
        "tools": "Jasper or Copy.ai",
        "toolNote": "Re-briefed on your business every prompt",
        "cg": "AI Agents (40+) + AI Assistant",
        "cgNote": "Already knows your product, tone and audience"
      },
      "campaignOps": {
        "cat": "Campaign ops",
        "tools": "CoSchedule or Monday",
        "toolNote": "Briefs sit apart from the work itself",
        "cg": "Campaigns + Creatives",
        "cgNote": "Brief, creative and tracking in one record"
      },
      "socialMedia": {
        "cat": "Social",
        "tools": "Hootsuite or Sprout Social",
        "toolNote": "Surfaces volume, not the right conversations",
        "cg": "Social Media + Content Monitoring",
        "cgNote": "Matched against your buyer personas"
      },
      "competitiveIntel": {
        "cat": "Competitive intel",
        "tools": "Semrush or Similarweb",
        "toolNote": "Another login, another quarterly report",
        "cg": "Competitors",
        "cgNote": "Live ad activity plus AI gap analysis"
      },
      "prospecting": {
        "cat": "Prospecting",
        "tools": "Apollo.io or ZoomInfo",
        "toolNote": "Exports to a sheet that goes stale",
        "cg": "Companies",
        "cgNote": "Fit score, buying signals, decision-makers"
      },
      "conversion": {
        "cat": "Conversion",
        "tools": "Hotjar, VWO or a CRO agency",
        "toolNote": "A PDF of findings once a quarter",
        "cg": "Website audit",
        "cgNote": "Scored, with a ranked fix per finding"
      },
      "analytics": {
        "cat": "Analytics",
        "tools": "Databox or Mixpanel",
        "toolNote": "Dashboards you still have to interpret",
        "cg": "Insights + Smart Reporting",
        "cgNote": "Plain-language findings, biggest drop-off flagged"
      },
      "tracking": {
        "cat": "Tracking",
        "tools": "Cookiebot or OneTrust",
        "toolNote": "Only checked after the data breaks",
        "cg": "Server-Side",
        "cgNote": "Consent flow, tags and cookies checked live"
      },
      "workTracking": {
        "cat": "Work tracking",
        "tools": "Asana or ClickUp",
        "toolNote": "Where good ideas go to be forgotten",
        "cg": "Tasks + Objectives",
        "cgNote": "Tasks generated straight from findings and chats"
      },
      "creativeDirection": {
        "cat": "Creative direction",
        "tools": "Canva or Figma",
        "toolNote": "Off-brand the moment a designer isn't looking",
        "cg": "Design System + Moodboard",
        "cgNote": "On-brand mockups from your stored brand rules"
      }
    }
  },
  "page": {
    "faqTitle": "A few things worth knowing.",
    "faqIntro": "Choosing between plans? We can walk through your brands, team and growth priorities in a demo.",
    "helpChoose": "Help me choose a plan",
    "diligenceTitle": "Doing your due diligence?",
    "diligenceBody": "Review our public security update, or discuss private infrastructure with our team.",
    "securityLink": "Read the security update"
  },
  "proof": {
    "eyebrow": "The work behind the numbers",
    "title": "Real teams. Documented results.",
    "explore": "Explore customer stories",
    "readStory": "Read the {company} story",
    "disclaimer": "Customer results reflect individual engagements and the periods shown. They are not a guarantee of future performance. Read each story for the approach, measurement and context."
  }
} as const;
