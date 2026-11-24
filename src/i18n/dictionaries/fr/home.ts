import type { Localized } from "../../types";
import type { home as source } from "../en/home";

export const home: Localized<typeof source> = {
  hero: {
    label: "Le growth marketing nativement IA",
    /* the rotating word sits between `before` and `after` */
    title: { before: "Le moteur go-to-market qui apprend de", after: "." },
    rotatingWords: ["votre produit", "vos acheteurs", "votre marché", "vos canaux"],
    body: "La croissance ne devrait pas dépendre de qui est autour de la table. Checkgrow réunit tout ce que votre entreprise sait dans un seul système d’exploitation de la croissance, qui apprend, s’améliore et travaille pour chaque équipe. Il transforme vos connaissances en clients et en notoriété.",
    bookDemo: "Réserver une démo",
    chat: {
      label: "Assistant IA",
      model: "Modèle :",
      modelAlt: "Modèle {name} dans l’assistant marketing IA de Checkgrow",
      prompts: [
        "Quelles publicités Meta convertissent le mieux ?",
        "Combien de leads avons-nous eus ce mois-ci ?",
        "Combien d’inscriptions avons-nous eues ce mois-ci ?",
        "Parle-moi des publicités de mes concurrents.",
        "Commentons quelques posts LinkedIn.",
        "Quelles sont les dernières tendances pour nous cette semaine ?",
      ],
    },
    onboarding: {
      title: "Lancez l’onboarding de votre marque.",
      /* typed into the field as the visitor scrolls */
      website: "votresite.fr",
    },
    knowledge: {
      title: "Construisez votre contexte",
      nodes: [
        {
          label: "Marque",
          tip: "Accédez instantanément à la charte graphique de votre marque et gardez tout le contexte pour vos générations IA.",
          marks: ["tout le contexte"],
        },
        {
          label: "ICP",
          tip: "Sachez exactement qui achète et pourquoi. Vos profils clients idéaux alimentent chaque campagne et chaque message.",
          marks: ["profils clients idéaux"],
        },
        {
          label: "Cas d’usage",
          tip: "Recensez tous les problèmes que résout votre produit, pour que l’IA propose le bon cas d’usage au bon acheteur.",
          marks: ["bon acheteur"],
        },
        {
          label: "Produits",
          tip: "Renseignez vos produits une seule fois : chaque contenu IA reste exact sur ce que vous vendez.",
          marks: ["contenu IA reste exact"],
        },
        {
          label: "Concurrents",
          tip: "Suivez les publicités de vos concurrents et leur positionnement, avec une analyse IA des écarts en temps réel.",
          marks: ["publicités de vos concurrents"],
        },
        {
          label: "Réseaux sociaux",
          tip: "Repérez les conversations qui comptent et publiez des contenus fidèles à votre marque sur tous vos canaux.",
          marks: ["Repérez les conversations"],
        },
        {
          label: "Tracking",
          tip: "Suivez tous les événements de votre tunnel de conversion et obtenez un reporting IA en un clic.",
          marks: ["événements de votre tunnel de conversion"],
        },
        {
          label: "Campagnes",
          tip: "Générez vos stratégies de campagne Meta, Google et LinkedIn et reliez-les à vos canaux payants.",
          marks: ["Meta", "Google", "LinkedIn"],
        },
      ],
    },
    platform: {
      /* the first word is the centre of the constellation */
      words: ["Marketing", "Opérations", "Ventes", "Recherche", "Reporting"],
      details: ["Campagnes", "Réseaux sociaux", "Site web", "Leads", "Concurrents", "Conversions", "Agents IA", "Insights"],
    },
    team: {
      title: "Un cerveau qui apprend, une seule équipe, une croissance qui se démultiplie.",
      /* portrait alt texts, in the order of the portraits */
      portraits: [
        "Fondateur",
        "Fabian, analyse de données",
        "CFO",
        "Sofia, cheffe de campagne",
        "Fondateur",
        "Roberta, stratégie go-to-market",
        "CPO",
        "Mikai, responsable marketing",
        "CEO",
        "Thomas",
      ],
    },
    scroll: "Défiler",
  },
  trustpilot: {
    label: "Checkgrow est noté 4,4 sur 5 (Excellent) sur la base de 12 avis Trustpilot",
    score: "4,4",
    rating: "Excellent",
    reviews: "12 avis",
  },
  logos: {
    title: "Ces entreprises font grandir leur marketing avec Checkgrow",
    label: "Logos d’entreprises qui utilisent Checkgrow : Witrina, Qubinets, WESPA, Minka, Woodoz, Barner, Drooms, Engasco et Optika Anda",
    logoAlt: "Logo de {name}, client growth marketing de Checkgrow",
  },
  credibility: {
    /* before <strong>strong</strong>after */
    before: "Né de",
    strong: "15 ans de marketing sur le terrain",
    after: " : une agence avant d’être une plateforme, façonnée par de vrais problèmes, pas par la théorie.",
    worksAcross: "Compatible avec",
    modelAlt: "Logo de {name}, pris en charge par les outils marketing IA de Checkgrow",
    noLockIns: "sans dépendance",
  },
  platformFilm: {
    chaptersLabel: "Chapitres du film",
    /* same order as the chapter timestamps in PlatformFilm */
    chapters: ["Connaissances", "Marketing", "Insights", "Ventes", "Chat IA"],
    videoLabel: "Visite guidée de la plateforme Checkgrow",
    tapForSound: "Activer le son",
    restart: "Relancer le film de la plateforme",
    mute: "Couper le son du film",
    unmute: "Activer le son du film",
    bookDemo: "Réserver une démo",
  },
  problem: {
    label: "Le problème",
    title: "Chaque outil marketing repart de zéro.",
    body: "Cinq outils, c’est expliquer votre activité cinq fois, puis encore à chaque nouvelle campagne, chaque recrutement, chaque prompt IA. Rien ne se transmet. Rien ne retient ce qui a vraiment marché. Vous ne devriez pas avoir besoin d’un data analyst pour lire votre propre tunnel de conversion.",
    hint: "Touchez un outil pour voir ce qui coince vraiment à l’intérieur.",
    close: "Fermer {name}",
    /* keyed by the tool ids in src/lib/problemCards.ts */
    tools: {
      content: {
        name: "Outil de contenu",
        state: "Aucun contexte de marque",
        bullets: ["Des textes qui ne vous ressemblent pas", "Aveugle à vos produits et personas", "Un calendrier au doigt mouillé, sans recherche", "Chaque brouillon part d’une page blanche"],
      },
      analytics: {
        name: "Outil d’analyse",
        state: "Des données que personne ne lit",
        bullets: ["Des tableaux de bord sans décisions", "Des événements jamais reliés au tunnel de conversion", "Payant, organique et site en silos", "Rien ne dit quoi faire ensuite"],
      },
      ads: {
        name: "Régie publicitaire",
        state: "Aucun contexte d’audience",
        bullets: ["Des canaux qui tirent chacun de leur côté", "Des posts boostés au lieu d’une stratégie", "Pas d’ICP, pas d’audience stratégique", "Des créations au hasard, jamais comparées"],
      },
      chatbot: {
        name: "Chatbot IA",
        state: "Tout réexpliquer à chaque fois",
        bullets: ["Plusieurs LLM, aucune source de vérité unique", "Des PDF envoyés au hasard, des chats répétés", "Le contexte retapé à chaque session", "Ni automatisations, ni maîtrise des prompts"],
      },
      rivals: {
        name: "Tableur concurrents",
        state: "Périmé dès lundi",
        bullets: ["Une étude faite une fois, puis oubliée", "Aucune vue en direct des pubs concurrentes", "Des insights qui n’atteignent jamais les campagnes", "L’intuition à la place des signaux"],
      },
    },
  },
  shift: {
    label: "Le tournant",
    /* two lines, with a line break between them */
    title: { first: "Un seul système connecté.", second: "Plus de place pour grandir." },
    imageAlt: "Une personne face à des paysages reliés qui convergent vers une seule réponse, image d’une intelligence marketing partagée.",
    /* keyed by the benefit ids in src/lib/shiftStory.ts */
    benefits: {
      capacity: {
        title: "Une recherche automatisée. Des décisions plus claires.",
        description: "Recherches, briefs et rapports, ancrés dans votre marque. Moins de temps à chercher. Plus d’actions éclairées.",
        stat: "8–25 h",
        label: "Libérer du temps",
        body: "de temps d’équipe par mois que Checkgrow est conçu pour vous rendre, en moins de recherches, de briefs et de reporting.",
      },
      spend: {
        title: "Des campagnes plus intelligentes. Des canaux connectés.",
        description: "Réunissez signaux d’audience, budgets et tracking à travers vos outils et vos intégrations MCP.",
        stat: "3–10 %",
        label: "Protéger le budget",
        body: "du budget média adressable que Checkgrow est conçu pour protéger d’un ciblage faible et d’un tracking défaillant.",
      },
      throughput: {
        title: "Une intelligence marketing centralisée.",
        description: "Une seule source pour votre marque, vos audiences et vos connaissances validées. Un meilleur départ pour chaque campagne.",
        stat: "40–70 %",
        label: "Produire plus",
        body: "de gain de vitesse sur les premiers jets de vos campagnes multicanales, toujours avec validation humaine.",
      },
      memory: {
        title: "Une mémoire qui parle le langage de vos données.",
        description: "Transformez le travail validé et les performances en connaissances partagées. Que votre prochaine action s’appuie sur ce qui a marché.",
        stat: "Chaque résultat",
        label: "Capitaliser",
        body: "nourrit la décision suivante. Stratégies, contenus et enseignements validés enrichissent sans cesse le contexte.",
      },
    },
  },
  difference: {
    label: "Pourquoi Checkgrow",
    title: "Pas un outil d’IA de plus. Un cerveau de croissance avec lequel votre équipe progresse.",
    body: "L’IA générique et les outils spécialisés repartent de zéro et restent en dehors de votre entreprise. Checkgrow est différent sur trois points qui comptent.",
    /* keyed by the ids in src/lib/differentiators.ts */
    items: {
      "growth-brain": {
        label: "Cerveau de l’entreprise pour la croissance",
        title: "Un cerveau conçu pour le marketing et la croissance, pas une pile de fichiers et de prompts.",
        body: "Votre marque, vos produits, vos audiences, vos résultats et vos décisions vivent dans un seul cerveau de l’entreprise, structuré et pensé pour le marketing et la croissance. Pas des documents épars dans un drive, ni des prompts dispersés dans une dizaine de chats. Chaque campagne, chaque agent et chaque rapport s’en nourrit, et chaque résultat vient l’enrichir.",
      },
      learning: {
        label: "Lien humain",
        title: "Votre équipe progresse en marketing en l’utilisant.",
        body: "Checkgrow fonctionne avec vos propres données marketing et de croissance : y travailler, c’est apprendre le métier. Des fonctionnalités interactives guident votre équipe à chaque étape du tunnel de conversion, du premier contact à la conversion, et expliquent pourquoi un chiffre a bougé, pas seulement qu’il a bougé. Vos équipes restent aux commandes et grandissent avec le système.",
      },
      "self-host": {
        label: "Auto-hébergé et souverain",
        title: "Hébergez-le sur votre propre infrastructure. Gardez vos données souveraines.",
        body: "Grandes entreprises et scale-ups demandent à auto-héberger Checkgrow, et nous le concevons pour cela. Les connaissances de votre entreprise restent structurées et prêtes pour le modèle d’IA de votre choix, dans votre propre périmètre de sécurité et selon vos propres règles de souveraineté des données. Aucune dépendance à un éditeur ni à un modèle.",
      },
    },
    bookDemo: "Réserver une démo",
    compare: "Comparer Checkgrow à la stack growth classique",
  },
  caseStudies: {
    label: "Histoires vraies",
    title: "Plus de 100 experts marketing grandissent déjà avec Checkgrow.",
    body: "Des fondateurs, des CMO et des opérationnels racontent, avec leurs propres mots, comment ils ont piloté leur croissance avec Checkgrow.",
    readStories: "Lire les témoignages clients",
    /* portrait alt when a testimonial has no attribution line */
    roleAt: "{role} chez {company}",
    showStory: "Voir le témoignage de {person}",
    demo: {
      title: "Les démos ne mentent pas.",
      body: "Regardez Checkgrow piloter un vrai go-to-market de bout en bout : 2 minutes 41, une seule prise, sans coupure.",
      watch: "Voir notre démo commentée",
      hide: "Masquer la démo",
      bookDemo: "Réserver une démo",
      badge: "2:41 · vraie démo, sans coupure",
      question: "Votre marketing vous donne du fil à retordre et vous hésitez encore ?",
    },
  },
  integrations: {
    label: "Intégrations",
    title: "Se branche sur les canaux que vous utilisez déjà.",
    body: "Connectez une fois vos outils d’analytics, de publicité et de réseaux sociaux. Chaque module lit les mêmes données en direct, et ce que vous apprenez nourrit la campagne suivante.",
    logoAlt: "Logo {name}",
    /* what each integration brings, keyed by the ids in Integrations.tsx */
    roles: {
      "google-analytics": "Événements, sessions et données de funnel GA4",
      "google-ads": "Dépenses et performances payantes dans un seul rapport",
      "meta-ads": "Les campagnes, plus la bibliothèque publicitaire Meta",
      linkedin: "Conversations, activité publicitaire et prospection",
      instagram: "Suivi des créateurs et des profils",
      n8n: "Automatisations déclenchées depuis les tâches",
      tiktok: "Tendances, créateurs et activité publicitaire",
      notion: "Pages et documents alimentent la base de connaissances",
      slack: "Mises à jour et validations là où l’équipe échange",
      supabase: "Données produit et clients, interrogées en direct",
      webhook: "Envoyez leads et événements vers n’importe quel système",
    },
    research: "Avec en plus une couche de recherche sur Google News, Perplexity et Gemini, et le choix entre OpenAI, Gemini ou Claude pour chaque tâche d’IA.",
  },
  roles: {
    label: "Pour qui",
    title: "Chaque équipe a sa raison de rester dans un seul système.",
    /* keyed by the role ids in Roles.tsx */
    items: {
      founders: {
        who: "Fondateurs et CMO",
        title: "Fixez le cap une fois",
        body: "Définissez la marque, l’offre et l’acheteur cible une seule fois. Tout ce qui est produit ensuite reste fidèle au message, sans que vous ayez à intervenir.",
        win: "Fini les briefs à répétition",
      },
      ops: {
        who: "Marketing ops et sales ops",
        title: "Passez à la vitesse supérieure",
        body: "Des agents spécialisés produisent contenus, publicités, messages de prospection et créations qui connaissent déjà votre produit, votre audience et votre ton.",
        win: "Des semaines aux minutes",
      },
      growth: {
        who: "Growth et analytics",
        title: "Bouclez la boucle",
        body: "Voyez ce qui a converti et pourquoi, avec des correctifs classés par priorité et envoyés directement dans la campagne suivante, sous forme de tâches suivies.",
        win: "Capitaliser au lieu de repartir de zéro",
      },
    },
    enterprise: {
      imageAlt: "Bruno Mucheroni, fondateur et CEO de Checkgrow",
      label: "Pour les grandes entreprises",
      title: "Des systèmes d’IA sur mesure pour accélérer la croissance des grandes entreprises.",
      body: "Les grandes équipes bénéficient du même système de croissance, adapté à leur façon de travailler : un socle de connaissances unique qui alimente chaque campagne, chaque agent et chaque rapport. Grandes entreprises et scale-ups sont de plus en plus nombreuses à vouloir l’auto-héberger : nous construisons des déploiements auto-hébergés et développés sur mesure, adaptés à votre stack, à vos exigences de sécurité et à votre échelle, avec des connaissances structurées pour n’importe quel modèle d’IA et gardées sous votre propre souveraineté des données.",
      bookDemo: "Réserver une démo",
    },
  },
  faqLink: "Voir toutes les questions",
  finalCta: {
    logoAlt: "Logo de la plateforme de growth marketing Checkgrow",
    title: "Créer un produit est devenu facile. Checkgrow le rend plus facile à vendre.",
    body: "Réservez une démo de 30 minutes sur votre entreprise, vos concurrents et votre site. Repartez avec Checkgrow configuré et un plan clair pour la suite.",
    bookDemo: "Réserver une démo",
  },
  scrollRail: {
    goTo: "Aller à {label}",
    /* keyed by the section ids in MobileScrollRail.tsx */
    labels: {
      platform: "Plateforme",
      solution: "Solution",
      stories: "Histoires vraies",
      "use-cases": "Fonctionnalités",
      pricing: "Tarifs",
      faq: "FAQ",
      waitlist: "Réserver une démo",
    },
  },
  flow: {
    /* keyed by the step ids in FlowStrip.tsx */
    steps: {
      business: "Votre activité",
      create: "Créer",
      reach: "Diffuser",
      measure: "Mesurer",
      improve: "Améliorer",
    },
    remembered: "ce qui marche est mémorisé",
  },
};
