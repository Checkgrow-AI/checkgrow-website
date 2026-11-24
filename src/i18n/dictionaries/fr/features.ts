import type { Localized } from "../../types";
import type { features as source } from "../en/features";

export const features: Localized<typeof source> = {
  meta: {
    title: "Fonctionnalités Checkgrow | La plateforme marketing IA, en détail",
    description: "Découvrez chaque fonctionnalité de Checkgrow en action : Centre de connaissances, Insights, Campagnes, Creative Studio, Contenus, Réseaux sociaux, Concurrents, Ventes et Assistant IA.",
    imageAlt: "Fonctionnalités Checkgrow : le growth marketing IA réuni dans une seule plateforme",
  },
  breadcrumb: {
    home: "Accueil",
    features: "Fonctionnalités",
  },
  page: {
    schemaName: "Fonctionnalités Checkgrow",
    title: "Fonctionnalités",
    intro: "Chaque fonctionnalité de Checkgrow s’appuie sur le même cerveau de l’entreprise. Découvrez-les à l’œuvre en trois étapes, des connaissances et de la recherche jusqu’aux campagnes, aux créations et aux ventes.",
    indexTitle: "Toutes les fonctionnalités",
    ctaTitle: "Une plateforme. Toutes les fonctionnalités connectées.",
    ctaBody: "Réservez une démo et mettez tout le système au travail, avec un onboarding par notre équipe pour configurer votre Centre de connaissances.",
    bookDemo: "Réserver une démo",
    explore: "Voir les actualités et tutoriels",
  },
  home: {
    eyebrow: "En pratique",
    title: "Une semaine type dans Checkgrow.",
    intro: "Six fonctionnalités, un cerveau partagé. Regardez chacune travailler en trois étapes, ancrée dans vos connaissances et au service de la suivante.",
    seeAll: "Voir toutes les fonctionnalités",
    count: "{n} fonctionnalités, des Contenus et Réseaux sociaux jusqu’aux Ventes.",
  },
  story: {
    more: "En savoir plus sur {name}",
  },
  stage: {
    status: "{name}, étape {step} sur {total} : {caption}",
    single: "{name} : {caption}",
    roleDescription: "aperçu animé du produit",
    play: "Lire l’aperçu {name}",
    pause: "Mettre en pause l’aperçu {name}",
    tabs: "{name} en {total} étapes",
  },
  items: {
    "knowledge-centre": {
      name: "Centre de connaissances",
      title: "Expliquez votre activité une fois pour toutes.",
      scenario: "Connectez Google Drive, Notion, Slack et votre site web : Checkgrow les transforme en connaissances marketing structurées.",
      body: "ICP, personas, produits, ton de la marque et mots-clés SEO vivent au même endroit, et chaque fonctionnalité s’y réfère automatiquement. Quand quelque chose change, dites-le simplement : l’IA rédige la mise à jour, vous la validez.",
      points: [
        "Vos outils synchronisés dans une base de connaissances prête pour le marketing",
        "ICP, personas et produits structurés, pas enfouis dans des fichiers",
        "Mise à jour par chat : l’IA rédige, vous validez",
      ],
      steps: [
        {
          label: "Connectez vos outils",
          caption: "Google Drive, Notion, Slack et votre site web se synchronisent avec le Centre de connaissances.",
        },
        {
          label: "Structurez l’essentiel",
          caption: "Un persona avec ses points de douleur, ses motivations et ses objections, utilisé dans les campagnes et les ventes.",
        },
        {
          label: "Mettez à jour par chat",
          caption: "Une nouvelle offre décrite dans le chat devient quatre mises à jour des connaissances, prêtes à valider.",
        },
      ],
    },
    insights: {
      name: "Insights",
      title: "Posez une question. Obtenez le rapport.",
      scenario: "Un responsable growth demande ce qu’ont donné les campagnes payantes la semaine dernière : GA4, Google Ads, Meta et LinkedIn répondent ensemble.",
      body: "Insights connecte vos comptes analytics et publicitaires via des intégrations et MCP, suit vos événements en quelques minutes et les relie au tunnel de conversion. Aucun tableau de bord à construire, aucun tableur à assembler : juste les chiffres et ce qu’ils signifient.",
      points: [
        "GA4, Google Ads, Meta et LinkedIn Ads dans une seule réponse",
        "Des rapports intelligents avec une conclusion IA actionnable",
        "Des événements suivis en quelques minutes et classés en TOFU, MOFU et BOFU",
      ],
      steps: [
        {
          label: "Interrogez toutes vos données",
          caption: "Une seule question interroge à la fois Analytics, Google Ads, Meta Ads et LinkedIn Ads.",
        },
        {
          label: "Lisez le rapport intelligent",
          caption: "Dépenses, CTR, CPA et conversions, avec la tendance et une conclusion IA.",
        },
        {
          label: "Visualisez tout le tunnel",
          caption: "Des événements suivis, regroupés en TOFU, MOFU et BOFU et classés par l’IA.",
        },
      ],
    },
    campaigns: {
      name: "Campagnes",
      title: "De la stratégie aux KPI, dans une seule fiche.",
      scenario: "Un marketeur prépare le lancement du trimestre : objectif, persona, répartition du budget et objectifs de KPI dans une seule campagne.",
      body: "Les campagnes LinkedIn, Meta et Google sont côte à côte avec leurs dépenses, leur CPA et leurs conversions en direct : stratégie et performance ne se perdent jamais de vue. Créateurs et liens UTM se gèrent au même endroit et remontent dans Insights.",
      points: [
        "Répartition du budget et objectifs de KPI fixés à partir de la stratégie",
        "Les résultats en direct de chaque canal dans un seul tableau",
        "Créateurs, rémunérations et liens UTM suivis dans la campagne",
      ],
      steps: [
        {
          label: "Fixez stratégie et KPI",
          caption: "Période, répartition du budget par canal et objectifs de KPI face aux résultats en direct.",
        },
        {
          label: "Gérez chaque canal",
          caption: "Campagnes LinkedIn, Meta, Google et créateurs dans un seul tableau.",
        },
        {
          label: "Ajoutez créateurs et UTM",
          caption: "Un créateur ajouté avec sa rémunération, ses livrables et un lien de suivi généré automatiquement.",
        },
      ],
    },
    "creative-studio": {
      name: "Creative Studio",
      title: "Des créations qui connaissent déjà votre marque.",
      scenario: "Demandez trois publicités LinkedIn et choisissez ce sur quoi l’IA s’appuie : optimisations de campagne, publicités concurrentes, votre bibliothèque ou les tendances du marché.",
      body: "Creative Studio génère des variantes à partir de votre kit de marque, de vos personas et des données de vos campagnes en cours, avec le modèle d’IA de votre choix. Quand une publicité sous-performe, il explique pourquoi et propose une version optimisée.",
      points: [
        "Le contexte de tout le cerveau : campagnes, concurrents, tendances et bibliothèque",
        "Le modèle d’IA de votre choix pour chaque génération",
        "Des recommandations d’optimisation tirées des résultats en direct",
      ],
      steps: [
        {
          label: "Briefez depuis le cerveau",
          caption: "Un brief d’une ligne, enrichi du contexte de campagne, des concurrents et de la marque.",
        },
        {
          label: "Comparez les variantes",
          caption: "Trois variantes publicitaires fidèles à la marque, chacune avec un CTR prévisionnel.",
        },
        {
          label: "Optimisez ce qui sous-performe",
          caption: "Des recommandations tirées des données en direct transforment une publicité faible en une version plus forte.",
        },
      ],
    },
    content: {
      name: "Contenus",
      title: "Sachez quoi publier ensuite.",
      scenario: "Chaque matin, Perplexity et Gemini font remonter les tendances du secteur, les mouvements des concurrents et les études qui comptent pour votre marché.",
      body: "Chaque sujet est noté selon sa pertinence au regard de vos mots-clés et de vos personas. Transformez-le en brouillon avec le ton de votre marque en quelques clics, puis envoyez-le directement vers Réseaux sociaux.",
      points: [
        "Une sélection quotidienne : secteur, concurrents et études utilisateurs",
        "Des idées de contenus recommandées par Perplexity et Gemini",
        "Des brouillons avec le ton de votre marque, prêts à programmer",
      ],
      steps: [
        {
          label: "Lisez la sélection du jour",
          caption: "Les tendances de votre marché, notées selon leur pertinence et prêtes à réécrire.",
        },
        {
          label: "Choisissez une recommandation",
          caption: "Une idée de contenu, avec la raison pour laquelle elle compte maintenant et le meilleur format.",
        },
        {
          label: "Rédigez avec votre ton",
          caption: "Un post LinkedIn rédigé avec le ton de votre marque, prêt à programmer.",
        },
      ],
    },
    "social-media": {
      name: "Réseaux sociaux",
      title: "Sachez où vous en êtes, puis agissez.",
      scenario: "Vos comptes Instagram et LinkedIn classés face aux concurrents suivis, avec un engagement comparé à la médiane de la catégorie.",
      body: "L’IA explique ce que les leaders font différemment, évalue les créateurs au regard de votre ICP et rédige les réponses aux commentaires avec le ton de votre marque, le tout relié à vos campagnes et à vos connaissances.",
      points: [
        "Classements et croissance comparés à vos concurrents",
        "Des influenceurs repérés et notés au regard de votre ICP",
        "Des réponses aux commentaires rédigées par l’IA, validées par vous",
      ],
      steps: [
        {
          label: "Comparez vos canaux",
          caption: "Votre classement, votre engagement et votre croissance face aux concurrents suivis.",
        },
        {
          label: "Sélectionnez des influenceurs",
          caption: "Des créateurs notés au regard de votre ICP, suivis dans un pipeline simple.",
        },
        {
          label: "Répondez avec l’IA",
          caption: "Un commentaire traité avec le ton de votre marque, en attente de votre validation.",
        },
      ],
    },
    competitors: {
      name: "Concurrents",
      title: "Chaque mouvement concurrent, en temps réel.",
      scenario: "Changements de prix, nouvelles publicités, refontes de site, lancements et recrutements : suivis automatiquement et résumés dans une seule chronologie.",
      body: "Parcourez les publicités LinkedIn et Meta actives de chaque concurrent, suivez l’évolution de leurs prix et de leurs effectifs, et envoyez n’importe quelle publicité dans Creative Studio comme référence.",
      points: [
        "Les publicités LinkedIn et Meta actives dans une seule bibliothèque",
        "Site, prix, lancements et équipe : chaque changement signalé automatiquement",
        "Les publicités concurrentes deviennent des références pour vos propres créations",
      ],
      steps: [
        {
          label: "Voyez ce qui a changé",
          caption: "Une chronologie des prix, publicités, site, lancements et recrutements de vos concurrents.",
        },
        {
          label: "Parcourez leurs publicités actives",
          caption: "Les publicités concurrentes en cours, avec format, statut et portée estimée.",
        },
        {
          label: "Ouvrez la fiche complète",
          caption: "Publicités, prix, effectifs et lancements de produits pour un concurrent.",
        },
      ],
    },
    sales: {
      name: "Ventes",
      title: "Une prospection qui sait ce qui se passe.",
      scenario: "Avant qu’un commercial n’écrive un mot, Checkgrow a déjà étudié le compte : adéquation à l’ICP, posts LinkedIn récents, publicités en cours et failles de tracking.",
      body: "Votre Sales Brain rédige des commentaires et des messages personnalisés à partir de ce contexte. Rien ne part sans validation, et chaque interaction est consignée dans une seule chronologie.",
      points: [
        "Des fiches compte avec l’adéquation à l’ICP et la meilleure action du moment",
        "Des messages personnalisés, fondés sur de vrais signaux",
        "Une validation humaine avant tout envoi",
      ],
      steps: [
        {
          label: "Lisez la fiche compte",
          caption: "Adéquation à l’ICP, activité LinkedIn et meilleure prochaine action pour un compte.",
        },
        {
          label: "Validez la prospection",
          caption: "Un message personnalisé, le contexte utilisé et votre validation.",
        },
        {
          label: "Suivez chaque interaction",
          caption: "Commentaires, messages et réponses dans une seule chronologie de prospection.",
        },
      ],
    },
    "ai-assistant": {
      name: "Assistant IA",
      title: "Un seul chat pour tout ce que sait Checkgrow.",
      scenario: "Demandez ce que votre dernière campagne vous a appris : l’assistant consulte Campagnes, Insights et Concurrents pour vous répondre.",
      body: "Choisissez Claude, GPT, Gemini ou Perplexity pour chaque question ; tous les modèles lisent les mêmes connaissances et les mêmes données. Puis passez à l’action depuis la réponse : préparez la prochaine campagne, générez des créations ou enregistrez un enseignement dans vos connaissances.",
      points: [
        "Multimodèle : Claude, GPT, Gemini et Perplexity",
        "Des réponses fondées sur vos connaissances, vos campagnes et vos données",
        "Agissez dans toute la plateforme sans quitter le chat",
      ],
      steps: [
        {
          label: "Demandez ce que vous voulez",
          caption: "Une question sur votre activité, avec vos canaux connectés à portée de main.",
        },
        {
          label: "Choisissez votre modèle",
          caption: "Claude, GPT, Gemini ou Perplexity, qui lisent tous le même cerveau de l’entreprise.",
        },
        {
          label: "Agissez partout",
          caption: "Une réponse qui cite Insights, Campagnes et Concurrents, avec les prochaines actions.",
        },
      ],
    },
  },
};
