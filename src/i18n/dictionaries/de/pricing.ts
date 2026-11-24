import type { Localized } from "../../types";
import type { pricing as source } from "../en/pricing";

export const pricing: Localized<typeof source> = {
  "meta": {
    "title": "Checkgrow-Preise | Pläne für Marken, Agenturen und Growth-Teams",
    "description": "Business: 499 €/Monat. Agency: 997 €/Monat. Growth: 4.997 €/Monat. Enterprise: individuelle Preise. 10 % sparen bei jährlicher Abrechnung. Alle Preise zzgl. MwSt."
  },
  "breadcrumb": {
    "home": "Startseite",
    "pricing": "Preise"
  },
  "section": {
    "eyebrow": "Preise",
    "title": "Die Plattform, alle Marken oder das ganze Team.",
    "intro": "Jeder Plan läuft auf demselben Firmen-Brain. Wählen Sie eine Marke, alle Marken oder unsere Spezialisten, die Ihr Wachstum mit Ihnen vorantreiben.",
    "bookDemo": "Demo buchen",
    "optionsLabel": "Preisoptionen",
    "billingLabel": "Abrechnungszeitraum",
    "monthly": "Monatlich",
    "yearly": "Jährlich",
    "save": "{percent} % sparen"
  },
  "currencyMenu": {
    "label": "Anzeigewährung",
    "trigger": "Anzeigewährung: {name} ({code})",
    "names": { EUR: "Euro", CHF: "Schweizer Franken", USD: "US-Dollar", BRL: "Brasilianischer Real" },
  },
  "card": {
    "custom": "Individuell",
    "perMonth": "/Monat",
    "tailored": "Individuelle Vereinbarung",
    "billedMonthly": "Monatliche Abrechnung, zzgl. MwSt.",
    "monthlyEstimate": "Monatliche Schätzung · Abrechnung in EUR",
    "perYearVat": "{price} pro Jahr, zzgl. MwSt.",
    "perYearEstimate": "{price} pro Jahr · Abrechnung in EUR",
    "specialistRoles": {
      "one": "{n} Spezialistenrolle für Ihre Accounts",
      "other": "{n} Spezialistenrollen für Ihre Accounts"
    }
  },
  "specLabels": [
    "Marken",
    "Growth Credits",
    "Team-Plätze",
    "Betreute Accounts"
  ],
  "plans": {
    "business": {
      "name": "Business",
      "audience": "Für eine Marke",
      "description": "Die komplette Plattform für eine Marke, mit Platz für das ganze Team.",
      "cta": "Demo buchen",
      "ctaNote": "Keine Kreditkarte nötig",
      "specs": [
        {
          "value": "1 Marke"
        },
        {
          "value": "5.000 / Monat",
          "note": "Jederzeit aufstockbar"
        },
        {
          "value": "Unbegrenzt"
        },
        {
          "value": "Self-Service"
        }
      ],
      "service": {
        "title": "Hilfe-Center & Chat-Support",
        "body": "Anleitungen, Tutorials und unser Team im Chat, wenn Sie Unterstützung brauchen."
      },
      "inheritance": "Die komplette Plattform",
      "includes": [
        "Firmen-Brain im Wissenszentrum",
        "Marketing- und Sales-Suites",
        "Creative Studio und KI-Assistent",
        "Insights, Funnel und Smart Reporting",
        "GA4, Meta, Google Ads und LinkedIn"
      ]
    },
    "agency": {
      "name": "Agency",
      "audience": "Für Agenturen und Multi-Brand-Teams",
      "description": "Jede Marke und jeder Kunde im eigenen Workspace, mit unserem Team an Ihrer Seite.",
      "cta": "Demo buchen",
      "ctaNote": "Keine Kreditkarte nötig",
      "specs": [
        {
          "value": "Unbegrenzt"
        },
        {
          "value": "5.000 / Monat",
          "note": "Gemeinsamer Pool · jederzeit aufstockbar"
        },
        {
          "value": "Unbegrenzt"
        },
        {
          "value": "Self-Service"
        }
      ],
      "service": {
        "title": "1 Stunde / Monat mit unserem Growth-Team",
        "body": "Eine monatliche Customer-Success-Session, um Ergebnisse zu prüfen und den nächsten Schritt zu planen."
      },
      "inheritance": "Alles aus Business, plus",
      "includes": [
        "Multi-Brand: unbegrenzt viele Kundenmarken",
        "Ein eigenes Firmen-Brain pro Marke",
        "Wechsel zwischen Kunden-Workspaces",
        "Monatliche Growth-Session mit unserem Team"
      ]
    },
    "growth": {
      "name": "Growth",
      "audience": "Growth-Team inklusive",
      "description": "Unsere Spezialisten übernehmen Anzeigen, Reports und Follow-up – Seite an Seite mit Ihrem Team.",
      "featured": "Gemeinsam umgesetzt",
      "cta": "Mit uns sprechen",
      "ctaNote": "Termin mit unserem Team buchen",
      "specs": [
        {
          "value": "Unbegrenzt"
        },
        {
          "value": "5.000 / Monat",
          "note": "Jederzeit aufstockbar"
        },
        {
          "value": "Unbegrenzt"
        },
        {
          "value": "Bis zu 3",
          "note": "Weitere Accounts separat abgerechnet"
        }
      ],
      "service": {
        "title": "Ein eigenes Growth-Team"
      },
      "inheritance": "Alles aus Agency, plus",
      "includes": [
        "Persönlicher Account-Manager",
        "Ad-Management: Anzeigen erstellt, gestartet und optimiert",
        "Performance-Reports für jeden Account",
        "Customer Success für alle Ihre Accounts"
      ]
    },
    "enterprise": {
      "name": "Enterprise",
      "audience": "Auf Ihre Organisation zugeschnitten",
      "description": "Ihre Growth-Plattform, auf Ihrer Infrastruktur, unter Ihrer Marke.",
      "cta": "Vertrieb kontaktieren",
      "ctaNote": "Termin mit unserem Team buchen",
      "specs": [
        {
          "value": "Unbegrenzt"
        },
        {
          "value": "Individuell"
        },
        {
          "value": "Unbegrenzt"
        },
        {
          "value": "Individuell"
        }
      ],
      "service": {
        "title": "Ein eigenes Team für Ihr Projekt",
        "body": "Entwickler und Growth-Spezialisten, die sich ganz Ihrem Rollout widmen."
      },
      "inheritance": "Alles aus Growth, plus",
      "includes": [
        "Individuelle Entwicklung und Integrationen",
        "White-Label-Plattform in Ihrem Branding",
        "Selbst gehostete Infrastruktur und Datensouveränität",
        "Erweiterte Security- und Compliance-Prüfungen",
        "Langfristige Verträge"
      ]
    }
  },
  "growthTeam": [
    {
      "initials": "AM",
      "role": "Account-Manager"
    },
    {
      "initials": "AD",
      "role": "Ad-Management"
    },
    {
      "initials": "CR",
      "role": "Creative-Produktion"
    },
    {
      "initials": "CS",
      "role": "Customer Success"
    }
  ],
  "topUp": "Mehr Growth Credits nötig? In jedem Plan jederzeit aufstockbar.",
  "notes": {
    "estimates": "Geschätzte Werte, ohne Nachkommastellen. Abrechnung in EUR. Alle Preise zzgl. MwSt.",
    "loading": "Wechselkurse werden geladen. EUR-Preise sind verfügbar.",
    "error": "Die Währungsumrechnung ist vorübergehend nicht verfügbar. Anzeige in EUR.",
    "retry": "Kurse neu laden",
    "ratesLink": "EZB-Referenzkurse",
    "ratesAfter": "über Frankfurter · {date} · Aktualisiert an jedem Arbeitstag."
  },
  "compare": {
    "eyebrow": "Den ganzen Stack vergleichen",
    "title": "Sehen Sie, was Checkgrow alles ersetzt.",
    "body": "Vergleichen Sie Checkgrow mit den 11 Abos, Logins und unverbundenen Workflows, die ein typisches Growth-Team heute verwaltet.",
    "button": "Preise vergleichen"
  },
  "comparison": {
    "eyebrow": "Vollständiger Vergleich",
    "title": "Eine Plattform gegen den typischen Growth-Stack.",
    "intro": "Mehr als der Preis: ein Firmen-Brain, gebaut für Wachstum statt verstreuter Dateien und Prompts, ein Team, das bei der Arbeit Marketing lernt, und die Option zum Self-Hosting für Datensouveränität.",
    "close": "Preisvergleich schließen",
    "swipe": "Horizontal wischen, um alle Spalten zu vergleichen.",
    "function": "Funktion",
    "stack": "Typischer Stack",
    "stackNote": "11 Tools · 11 Logins",
    "checkgrow": "Checkgrow",
    "checkgrowNote": "1 Plattform · 1 Kontext",
    "perMonth": "{price}/Monat",
    "included": "inklusive",
    "fullStack": "Typischer Gesamt-Stack",
    "fullStackNote": "Ohne Nutzerlizenzen, Mehrverbrauch und die Zeit, alle Tools miteinander zu verbinden.",
    "from": "Ab {price}/Monat",
    "checkgrowBody": "Ein Betriebssystem, eine verlässliche Datenbasis und eine Rechnung.",
    "bookDemo": "Demo buchen",
    "footnote": "Drittanbieter-Tools sind Beispiele ihrer Kategorie. Die Preise sind typische monatliche Listenpreise vergleichbarer Pläne. Geschätzte Werte ohne Nachkommastellen in {currency}; Checkgrow rechnet weiterhin in EUR ab.",
    "rows": {
      "brandKnowledge": {
        "cat": "Marke & Wissen",
        "tools": "Notion oder Frontify",
        "toolNote": "Richtlinien in einem Dokument, das niemand öffnet",
        "cg": "Wissenszentrum + Marken-Basics",
        "cgNote": "Ein Firmen-Brain für Wachstum, keine Dateien und Chat-Prompts"
      },
      "aiContent": {
        "cat": "KI-Content",
        "tools": "Jasper oder Copy.ai",
        "toolNote": "Bei jedem Prompt neu über Ihr Geschäft gebrieft",
        "cg": "KI-Agenten (40+) + KI-Assistent",
        "cgNote": "Kennt Ihr Produkt, Ihren Ton und Ihre Zielgruppe bereits"
      },
      "campaignOps": {
        "cat": "Kampagnen-Ops",
        "tools": "CoSchedule oder Monday",
        "toolNote": "Briefings liegen getrennt von der eigentlichen Arbeit",
        "cg": "Kampagnen + Creatives",
        "cgNote": "Briefing, Creative und Tracking in einem Datensatz"
      },
      "socialMedia": {
        "cat": "Social",
        "tools": "Hootsuite oder Sprout Social",
        "toolNote": "Zeigt Masse, nicht die richtigen Gespräche",
        "cg": "Social Media + Content-Monitoring",
        "cgNote": "Abgeglichen mit Ihren Buyer Personas"
      },
      "competitiveIntel": {
        "cat": "Wettbewerbsanalyse",
        "tools": "Semrush oder Similarweb",
        "toolNote": "Noch ein Login, noch ein Quartalsbericht",
        "cg": "Wettbewerber",
        "cgNote": "Live-Anzeigenaktivität plus KI-Gap-Analyse"
      },
      "prospecting": {
        "cat": "Prospecting",
        "tools": "Apollo.io oder ZoomInfo",
        "toolNote": "Exporte in eine Tabelle, die schnell veraltet",
        "cg": "Unternehmen",
        "cgNote": "Fit-Score, Kaufsignale, Entscheider"
      },
      "conversion": {
        "cat": "Conversion",
        "tools": "Hotjar, VWO oder eine CRO-Agentur",
        "toolNote": "Ein PDF mit Ergebnissen pro Quartal",
        "cg": "Website-Audit",
        "cgNote": "Bewertet, mit priorisierter Maßnahme pro Befund"
      },
      "analytics": {
        "cat": "Analytics",
        "tools": "Databox oder Mixpanel",
        "toolNote": "Dashboards, die Sie trotzdem selbst deuten müssen",
        "cg": "Insights + Smart Reporting",
        "cgNote": "Klare Befunde, größter Abbruch markiert"
      },
      "tracking": {
        "cat": "Tracking",
        "tools": "Cookiebot oder OneTrust",
        "toolNote": "Erst geprüft, wenn die Daten schon kaputt sind",
        "cg": "Server-Side",
        "cgNote": "Consent-Flow, Tags und Cookies live geprüft"
      },
      "workTracking": {
        "cat": "Aufgabenmanagement",
        "tools": "Asana oder ClickUp",
        "toolNote": "Wo gute Ideen in Vergessenheit geraten",
        "cg": "Aufgaben + Ziele",
        "cgNote": "Aufgaben direkt aus Befunden und Chats erstellt"
      },
      "creativeDirection": {
        "cat": "Creative Direction",
        "tools": "Canva oder Figma",
        "toolNote": "Nicht mehr markenkonform, sobald kein Designer hinschaut",
        "cg": "Design-System + Moodboard",
        "cgNote": "Markengerechte Mockups aus Ihren hinterlegten Markenregeln"
      }
    }
  },
  "page": {
    "faqTitle": "Gut zu wissen.",
    "faqIntro": "Sie schwanken zwischen zwei Plänen? In einer Demo gehen wir Ihre Marken, Ihr Team und Ihre Wachstumsprioritäten gemeinsam durch.",
    "helpChoose": "Hilfe bei der Planwahl",
    "diligenceTitle": "Mitten in der Due Diligence?",
    "diligenceBody": "Lesen Sie unser öffentliches Security-Update oder sprechen Sie mit unserem Team über eine private Infrastruktur.",
    "securityLink": "Security-Update lesen"
  },
  "proof": {
    "eyebrow": "Die Arbeit hinter den Zahlen",
    "title": "Echte Teams. Dokumentierte Ergebnisse.",
    "explore": "Kundengeschichten entdecken",
    "readStory": "Die Geschichte von {company} lesen",
    "disclaimer": "Kundenergebnisse spiegeln einzelne Projekte und die gezeigten Zeiträume wider. Sie sind keine Garantie für künftige Ergebnisse. In jeder Geschichte finden Sie Vorgehen, Messung und Kontext."
  }
};
