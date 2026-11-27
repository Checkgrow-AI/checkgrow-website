import type { Localized } from "../../types";
import type { pricing as source } from "../en/pricing";

export const pricing: Localized<typeof source> = {
  meta: {
    title: "Tarifs Checkgrow | Offres pour marques, agences et équipes growth",
    description: "Business : 499 €/mois. Agency : 997 €/mois. Growth : 4 997 €/mois. Enterprise : sur devis. Économisez 10 % avec la facturation annuelle. Prix hors TVA.",
  },
  breadcrumb: {
    home: "Accueil",
    pricing: "Tarifs",
  },
  section: {
    eyebrow: "Tarifs",
    title: "La plateforme, vos marques ou toute l’équipe.",
    intro: "Chaque offre repose sur le même cerveau de l’entreprise. Choisissez une marque, toutes vos marques, ou nos spécialistes pour piloter la croissance avec vous.",
    bookDemo: "Parlons-en",
    optionsLabel: "Options tarifaires",
    billingLabel: "Fréquence de facturation",
    monthly: "Mensuel",
    yearly: "Annuel",
    save: "-{percent} %",
  },
  currencyMenu: {
    label: "Devise d’affichage",
    trigger: "Devise d’affichage : {name} ({code})",
    names: { EUR: "Euro", CHF: "Franc suisse", USD: "Dollar américain", BRL: "Réal brésilien" },
  },
  card: {
    custom: "Sur devis",
    perMonth: "/mois",
    tailored: "Contrat sur mesure",
    billedMonthly: "Facturé mensuellement, HT",
    monthlyEstimate: "Estimation mensuelle · facturé en EUR",
    perYearVat: "{price} par an, HT",
    perYearEstimate: "{price} par an · facturé en EUR",
    specialistRoles: {
      one: "{n} rôle d’expert sur vos comptes",
      other: "{n} rôles d’experts sur vos comptes",
    },
  },
  specLabels: [
    "Marques",
    "Growth Credits",
    "Utilisateurs",
    "Comptes gérés",
  ],
  plans: {
    business: {
      name: "Business",
      audience: "Pour une seule marque",
      description: "La plateforme complète pour une marque et une équipe de 5 utilisateurs maximum.",
      cta: "Parlons-en",
      ctaNote: "Sans carte bancaire",
      specs: [
        {
          value: "1 marque",
        },
        {
          value: "5 000 / mois",
          note: "Recharge à tout moment",
        },
        {
          value: "Jusqu’à 5 utilisateurs",
          note: "2 admins maximum",
        },
        {
          value: "En autonomie",
        },
      ],
      service: {
        title: "Centre d’aide et support par chat",
        body: "Guides, tutoriels et notre équipe sur le chat quand vous avez besoin d’un coup de main.",
      },
      inheritance: "La plateforme complète",
      includes: [
        "Cerveau de l’entreprise dans le Centre de connaissances",
        "Suites Marketing et Ventes",
        "Creative Studio et Assistant IA",
        "Insights, tunnel de conversion et reporting intelligent",
        "GA4, Meta, Google Ads et LinkedIn",
      ],
    },
    agency: {
      name: "Agency",
      audience: "Pour les agences et équipes multimarques",
      description: "Chaque marque et chaque client dans son propre espace de travail, avec notre équipe à vos côtés.",
      cta: "Parlons-en",
      ctaNote: "Sans carte bancaire",
      specs: [
        {
          value: "Illimitées",
        },
        {
          value: "5 000 / mois",
          note: "Pot commun · recharge à tout moment",
        },
        {
          value: "Jusqu’à 10 utilisateurs",
          note: "4 admins maximum",
        },
        {
          value: "En autonomie",
        },
      ],
      service: {
        title: "1 heure / mois avec notre équipe growth",
        body: "Une session mensuelle avec notre équipe Customer Success pour analyser vos résultats et préparer la suite.",
      },
      inheritance: "Tout Business, plus",
      includes: [
        "Multimarque : marques clientes illimitées",
        "Un cerveau de l’entreprise distinct par marque",
        "Passage d’un espace client à l’autre",
        "Session growth mensuelle avec notre équipe",
      ],
    },
    growth: {
      name: "Growth",
      audience: "Votre équipe growth, incluse",
      description: "Nos spécialistes gèrent vos publicités, vos rapports et le suivi, aux côtés de votre équipe.",
      featured: "Copiloté avec vous",
      cta: "Parler à notre équipe",
      ctaNote: "Planifiez un appel avec notre équipe",
      specs: [
        {
          value: "Illimitées",
        },
        {
          value: "5 000 / mois",
          note: "Recharge à tout moment",
        },
        {
          value: "Illimités",
        },
        {
          value: "Jusqu’à 3",
          note: "Comptes supplémentaires facturés à part",
        },
      ],
      service: {
        title: "Une équipe growth dédiée",
      },
      inheritance: "Tout Agency, plus",
      includes: [
        "Account manager dédié",
        "Gestion des publicités : création, lancement et optimisation",
        "Rapports de performance pour chaque compte",
        "Suivi Customer Success sur tous vos comptes",
      ],
    },
    enterprise: {
      name: "Enterprise",
      audience: "Conçu autour de votre organisation",
      description: "Votre plateforme de croissance, sur votre infrastructure, à vos couleurs.",
      cta: "Contacter les ventes",
      ctaNote: "Planifiez un appel avec notre équipe",
      specs: [
        {
          value: "Illimitées",
        },
        {
          value: "Sur mesure",
        },
        {
          value: "Illimités",
        },
        {
          value: "Sur mesure",
        },
      ],
      service: {
        title: "Une équipe sur mesure pour votre projet",
        body: "Des ingénieurs et des spécialistes growth dédiés à votre déploiement.",
      },
      inheritance: "Tout Growth, plus",
      includes: [
        "Développements et intégrations sur mesure",
        "Plateforme en marque blanche, à vos couleurs",
        "Infrastructure auto-hébergée et souveraineté des données",
        "Revues avancées de sécurité et de conformité",
        "Contrats longue durée",
      ],
    },
  },
  growthTeam: [
    {
      initials: "AM",
      role: "Account manager",
    },
    {
      initials: "AD",
      role: "Gestion des publicités",
    },
    {
      initials: "CR",
      role: "Production créative",
    },
    {
      initials: "CS",
      role: "Customer success",
    },
  ],
  topUp: "Besoin de plus de Growth Credits ? Rechargez à tout moment, quelle que soit votre offre.",
  notes: {
    estimates: "Estimations arrondies à l’unité, sans décimales. Facturation en EUR. Prix hors TVA.",
    loading: "Chargement des taux de change. Les prix en EUR sont disponibles.",
    error: "La conversion de devises est momentanément indisponible. Affichage en EUR.",
    retry: "Réessayer",
    ratesLink: "Taux de référence de la BCE",
    ratesAfter: "via Frankfurter · {date} · Mis à jour chaque jour ouvré.",
  },
  compare: {
    eyebrow: "Comparez toute la stack",
    title: "Voyez tout ce que Checkgrow remplace.",
    body: "Comparez Checkgrow aux 11 abonnements, identifiants et workflows déconnectés qu’une équipe growth type gère aujourd’hui.",
    button: "Comparer nos tarifs",
  },
  comparison: {
    eyebrow: "Comparatif complet",
    title: "Une plateforme face à la stack growth classique.",
    intro: "Au-delà du prix : un cerveau de l’entreprise conçu pour la croissance plutôt que des fichiers et des prompts éparpillés, une équipe qui apprend le marketing en travaillant, et la possibilité d’auto-héberger pour garder la souveraineté de vos données.",
    close: "Fermer le comparatif des tarifs",
    swipe: "Faites défiler horizontalement pour comparer toutes les colonnes.",
    function: "Fonction",
    stack: "Stack classique",
    stackNote: "11 outils · 11 identifiants",
    checkgrow: "Checkgrow",
    checkgrowNote: "1 plateforme · 1 contexte",
    perMonth: "{price}/mois",
    included: "inclus",
    fullStack: "Stack complète classique",
    fullStackNote: "Hors utilisateurs supplémentaires, dépassements et temps passé à faire tenir tous les outils ensemble.",
    from: "Dès {price}/mois",
    checkgrowBody: "Un seul système d’exploitation, une seule source de vérité, une seule facture.",
    bookDemo: "Parlons-en",
    footnote: "Les outils tiers sont des exemples par catégorie. Les prix correspondent aux tarifs mensuels publics habituels pour des offres comparables. Estimations arrondies en {currency} ; la facturation Checkgrow reste en EUR.",
    rows: {
      brandKnowledge: {
        cat: "Marque et connaissances",
        tools: "Notion ou Frontify",
        toolNote: "Une charte dans un document que personne n’ouvre",
        cg: "Centre de connaissances + Bases de la marque",
        cgNote: "Un cerveau de l’entreprise conçu pour la croissance, pas des fichiers et des prompts",
      },
      aiContent: {
        cat: "Contenu IA",
        tools: "Jasper ou Copy.ai",
        toolNote: "Un nouveau brief sur votre activité à chaque prompt",
        cg: "Agents IA (40+) + Assistant IA",
        cgNote: "Connaît déjà votre produit, votre ton et votre audience",
      },
      campaignOps: {
        cat: "Gestion de campagnes",
        tools: "CoSchedule ou Monday",
        toolNote: "Les briefs restent à l’écart du travail lui-même",
        cg: "Campagnes + Créations",
        cgNote: "Brief, créations et tracking dans une seule fiche",
      },
      socialMedia: {
        cat: "Réseaux sociaux",
        tools: "Hootsuite ou Sprout Social",
        toolNote: "Fait remonter du volume, pas les bonnes conversations",
        cg: "Réseaux sociaux + Veille de contenus",
        cgNote: "Alignés sur vos personas",
      },
      competitiveIntel: {
        cat: "Veille concurrentielle",
        tools: "Semrush ou Similarweb",
        toolNote: "Un identifiant de plus, un rapport trimestriel de plus",
        cg: "Concurrents",
        cgNote: "Publicités en direct et analyse des écarts par l’IA",
      },
      prospecting: {
        cat: "Prospection",
        tools: "Apollo.io ou ZoomInfo",
        toolNote: "Un export dans un tableur vite périmé",
        cg: "Entreprises",
        cgNote: "Score d’adéquation, signaux d’achat, décideurs",
      },
      conversion: {
        cat: "Conversion",
        tools: "Hotjar, VWO ou une agence CRO",
        toolNote: "Un PDF de constats une fois par trimestre",
        cg: "Audit du site web",
        cgNote: "Noté, avec un correctif priorisé pour chaque constat",
      },
      analytics: {
        cat: "Analyse",
        tools: "Databox ou Mixpanel",
        toolNote: "Des tableaux de bord qu’il faut encore interpréter",
        cg: "Insights + Reporting intelligent",
        cgNote: "Des constats en langage clair, la plus forte déperdition signalée",
      },
      tracking: {
        cat: "Tracking",
        tools: "Cookiebot ou OneTrust",
        toolNote: "Vérifié seulement quand les données cassent",
        cg: "Tracking server-side",
        cgNote: "Consentement, tags et cookies vérifiés en direct",
      },
      workTracking: {
        cat: "Suivi des tâches",
        tools: "Asana ou ClickUp",
        toolNote: "Là où les bonnes idées finissent oubliées",
        cg: "Tâches + Objectifs",
        cgNote: "Des tâches générées directement à partir des constats et des chats",
      },
      creativeDirection: {
        cat: "Direction artistique",
        tools: "Canva ou Figma",
        toolNote: "Hors charte dès que le designer a le dos tourné",
        cg: "Charte graphique + Moodboard",
        cgNote: "Des maquettes fidèles à votre marque, à partir de vos règles enregistrées",
      },
    },
  },
  page: {
    faqTitle: "Quelques points à connaître.",
    faqIntro: "Vous hésitez entre plusieurs offres ? Nous pouvons passer en revue vos marques, votre équipe et vos priorités de croissance lors d’une démo.",
    helpChoose: "M’aider à choisir une offre",
    diligenceTitle: "Vous faites vos vérifications ?",
    diligenceBody: "Consultez notre bilan de sécurité public, ou parlez d’infrastructure privée avec notre équipe.",
    securityLink: "Lire le bilan de sécurité",
  },
  proof: {
    eyebrow: "Le travail derrière les chiffres",
    title: "De vraies équipes. Des résultats documentés.",
    explore: "Découvrir les témoignages clients",
    readStory: "Lire le témoignage {company}",
    disclaimer: "Les résultats clients reflètent des missions individuelles et les périodes indiquées. Ils ne garantissent pas les performances futures. Lisez chaque témoignage pour connaître l’approche, la mesure et le contexte.",
  },
};
