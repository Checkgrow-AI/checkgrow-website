import type { Localized } from "../../types";
import type { seo as source } from "../en/seo";

export const seo: Localized<typeof source> = {
  site: {
    title: "Checkgrow · Le moteur go-to-market qui apprend votre métier",
    description:
      "Checkgrow est une plateforme de growth marketing qui relie connaissances, campagnes et reporting pour faire grandir vos équipes plus vite. Parlons-en.",
    appCategory: "Logiciel marketing",
    keywords: [
      "plateforme de growth marketing IA",
      "moteur go-to-market",
      "base de connaissances marketing",
      "agents IA marketing",
      "tableau de bord CMO",
      "logiciel pour équipes marketing grands comptes",
      "stratégie de campagne IA",
      "veille concurrentielle",
      "insights GA4",
      "logiciel d’attribution marketing",
      "suivi du CAC sans tableur",
      "lancer des campagnes Meta et Google à partir d’un seul brief",
      "une IA qui connaît votre marque et votre ICP",
      "tableau de bord marketing prêt pour le comité de direction",
      "marketing sans agence",
    ],
    /* Open Graph keeps the page title with its own description */
    ogDescription:
      "Tout ce que votre entreprise sait, dans un seul système qui apprend, s’améliore et travaille pour chaque équipe. Pour transformer vos connaissances en clients et en notoriété.",
    twitterTitle: "Checkgrow · Le growth marketing nativement IA",
    twitterDescription: "Un seul système où connaissances, recherche, exécution et mesure se connectent et se renforcent.",
  },
  socialImageAlt:
    "Checkgrow : le cerveau de croissance des scale-ups et des grandes entreprises. Connaissances, campagnes, contenus et ventes dans une même boucle. Parlons-en, onboarding offert.",
  organization: {
    description:
      "Le growth marketing nativement IA. Checkgrow relie les connaissances de l’entreprise, les études de marché, l’exécution marketing et la mesure dans un seul système.",
  },
  software: {
    description:
      "Un moteur go-to-market où agents IA, campagnes, recherche et reporting s’appuient tous sur la même base de connaissances de l’entreprise. Conçu pour les CMO, les équipes marketing et les fondateurs.",
    audienceType:
      "CMO, équipes marketing grands comptes, opérations marketing et commerciales, équipes growth et data, fondateurs",
    featureList: [
      "Centre de connaissances : marque, produits, audience et chiffres définis une seule fois",
      "Assistant IA et plus de 40 agents IA qui connaissent déjà votre activité",
      "Campagnes avec budgets, créations et suivi dans une seule fiche",
      "Veille des réseaux sociaux alignée sur vos personas",
      "Suivi des concurrents avec leurs publicités en direct et analyse des écarts par l’IA",
      "Prospection d’entreprises avec scores d’adéquation et signaux d’achat",
      "GA4, Meta et Google Ads réunis en insights rédigés en langage clair",
      "Audits de conversion du site web avec correctifs classés par priorité",
    ],
    offersDescription:
      "Business à partir de 499 €/mois, Agency 997 €/mois, Growth 4 997 €/mois, Enterprise sur devis. Prix hors TVA.",
  },
  videos: {
    platformTour: {
      name: "Visite guidée de la plateforme Checkgrow",
      description:
        "Une visite guidée de Checkgrow : Centre de connaissances et intégrations, concurrents, réseaux sociaux, contenus, site web, campagnes et créations, insights, listes de prospection, prospection et leads, et le chat Grow, réunis dans un seul système d’exploitation de la croissance.",
    },
    demoReview: {
      name: "Checkgrow, une vraie démo sans coupure",
      description:
        "Checkgrow pilote un vrai go-to-market de bout en bout : stratégie de campagne, créations par canal, reporting du tunnel de conversion et insights IA, en une seule prise, sans coupure.",
    },
  },
};
