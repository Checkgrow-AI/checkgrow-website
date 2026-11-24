import type { Localized } from "../../types";
import type { demo as source } from "../en/demo";

export const demo: Localized<typeof source> = {
  meta: {
    title: "Réserver une démo | Checkgrow",
    description:
      "Réservez une démo Checkgrow de 30 minutes. Repartez avec votre entreprise configurée, une stratégie de croissance IA offerte et la plateforme prête à l’emploi, plus une analyse de vos concurrents, un audit de votre site et un accès gratuit de 30 jours.",
    /* schema.org WebPage name */
    schemaName: "Réserver une démo Checkgrow",
  },
  page: {
    eyebrow: "Réserver une démo",
    title: "Voyez votre moteur de croissance tourner en 30 minutes.",
    lead: "Une session en direct sur votre entreprise, vos concurrents et votre site. Vous repartez avec Checkgrow configuré et un plan clair pour la suite.",
    perksLabel: "Ce que la démo vous apporte",
    /* beside the form, in this order: clock, bolt, rocket */
    callResults: [
      "30 minutes au cœur de vos résultats",
      "Onboarding immédiat, stratégie IA offerte",
      "Repartez prêt à démarrer",
    ],
    reassurance: "Sans carte bancaire · Vos données restent les vôtres",
    platformTitle: "Également inclus avec Checkgrow",
    /* above the footer, in this order: radar, browser, gift */
    platformPerks: [
      {
        title: "Analyse concurrentielle complète",
        body: "Les canaux, messages et campagnes de vos concurrents, passés au crible.",
      },
      {
        title: "Audit du site et du parcours de conversion",
        body: "Où vos visiteurs décrochent, et quoi corriger en premier.",
      },
      {
        title: "Accès gratuit de 30 jours",
        body: "Testez tout avec votre équipe. Sans carte bancaire.",
      },
    ],
  },
  founders: {
    title: "Échangez avec les fondateurs",
    body: "Nous ouvrons quelques places pour un onboarding privé.",
    alt: "{name}, cofondateur de Checkgrow",
  },
  form: {
    /* "Step 1 of 2 · Tailor your demo" */
    stepOf: "Étape {n} sur {total} · {name}",
    phases: {
      questions: "Personnalisez votre démo",
      time: "Choisissez un créneau",
    },
    phaseLength: {
      questions: "60 s",
      time: "{n} min",
    },
    intro: {
      questions:
        "Vos réponses préparent votre onboarding : nous réalisons l’analyse de vos concurrents, l’audit de votre site et votre stratégie IA avant l’appel.",
      time: "Choisissez le créneau qui vous convient. L’invitation et le lien visio vous seront envoyés par e-mail.",
    },
    continue: "Continuer",
    back: "Retour",
    challenges: {
      title: "Que voulez-vous améliorer en priorité ?",
      groups: {
        growth: { label: "Croissance", tag: "Pipeline" },
        ai: { label: "Opérations IA", tag: "Équipe" },
      },
      /* keyed by the id sent to the API */
      labels: {
        leads: "Obtenir plus de leads",
        conversion: "Un site qui convertit",
        cac: "Réduire mon CAC",
        ads: "De meilleures campagnes Google, Meta ou LinkedIn",
        outreach: "Améliorer ma prospection commerciale",
        creatives: "Plus de créations, et de meilleure qualité",
        content: "Produire plus de contenus",
        geo: "Améliorer mon référencement GEO ou SEO",
        agents: "Une force d’agents IA pour mon équipe",
        compliance: "Mieux encadrer l’usage de l’IA",
      },
      limitReached: "{max} maximum : désélectionnez-en un pour changer.",
      selected: "{n} sur {max} sélectionnés",
    },
    spend: {
      title: "Combien dépensez-vous en publicité chaque mois ?",
      monthly: "Budget publicitaire mensuel",
      around: "Environ",
      perMonth: "/ mois",
      less: "Moins",
      more: "Plus",
      /* screen readers: "~€10.000 per month" */
      valueText: "{amount} par mois",
      noAds: "Pas encore de publicité active",
    },
    team: {
      title: "Combien de personnes utilisent l’IA dans votre entreprise ?",
      /* keyed by the id sent to the API */
      options: {
        "1": "Moi uniquement",
        "2-5": "2 à 5 personnes",
        "6-20": "6 à 20 personnes",
        "21-50": "21 à 50 personnes",
        "51-100": "51 à 100 personnes",
        "100+": "Plus de 100 personnes",
      },
    },
    goals: {
      title: "Quels sont vos objectifs pour cette année ?",
      inputLabel: "Ajouter un objectif",
      placeholder: "Ex. : ouvrir le marché allemand",
      placeholderFull: "Cinq objectifs ajoutés",
      add: "Ajouter",
      listLabel: "Vos objectifs",
      remove: "Retirer {goal}",
      suggested: "Suggestions pour vous",
      skip: "Passer pour l’instant",
      /* suggestions follow the challenges picked, then the general ones;
         a goal shared by two challenges must be written identically */
      suggestions: {
        byChallenge: {
          leads: ["Doubler les leads qualifiés", "Construire un pipeline prévisible"],
          conversion: ["Augmenter le taux de conversion du site", "Corriger les fuites du tunnel de conversion"],
          cac: ["Réduire le CAC de 30 %", "Développer les publicités de façon rentable"],
          ads: ["Développer les publicités de façon rentable", "Toucher les décideurs sur LinkedIn"],
          outreach: ["Décrocher plus de rendez-vous commerciaux", "Personnaliser la prospection à grande échelle"],
          content: ["Publier du contenu chaque semaine", "Développer la portée organique"],
          creatives: ["Lancer de nouvelles créations chaque semaine", "Trouver les créations publicitaires gagnantes"],
          geo: ["Être cité dans les réponses des IA", "Être en première page de Google"],
          agents: ["Piloter le marketing avec des agents IA", "Automatiser le reporting hebdomadaire"],
          compliance: ["Gouvernance et conformité de l’IA", "Déployer l’IA dans toute l’équipe"],
        },
        general: [
          "Se lancer sur un nouveau marché",
          "Augmenter le chiffre d’affaires cette année",
          "Prendre de l’avance sur nos concurrents",
          "Lancer un nouveau produit",
        ],
      },
    },
    contact: {
      title: "Où devons-nous envoyer votre invitation ?",
      email: "E-mail professionnel",
      emailPlaceholder: "vous@entreprise.fr",
      phone: "Téléphone",
      phonePlaceholder: "+33 6 12 34 56 78",
      firstName: "Prénom",
      lastName: "Nom",
      website: "Site web de l’entreprise",
      websitePlaceholder: "entreprise.fr",
      /* "… accept our <Privacy Policy>." */
      consent: {
        before: "En envoyant ce formulaire, vous consentez à être contacté par l’équipe Checkgrow et acceptez notre",
        link: "Politique de confidentialité",
        after: ".",
      },
      submit: "Demander une démo",
      sending: "Envoi…",
    },
    /* validation messages (same rules in every language) */
    errors: {
      email: "Saisissez une adresse e-mail professionnelle valide",
      companyEmail: "Merci d’indiquer votre e-mail professionnel",
      phoneRequired: "Indiquez votre numéro de téléphone",
      phoneInvalid: "Saisissez un numéro valide, par ex. +33 6 12 34 56 78",
      firstName: "Indiquez votre prénom",
      lastName: "Indiquez votre nom",
      websiteRequired: "Indiquez le site web de votre entreprise",
      websiteInvalid: "Saisissez un site au format entreprise.fr",
    },
    booking: {
      taken: "Ce créneau vient d’être réservé. Merci d’en choisir un autre.",
      tooMany: "Trop de tentatives. Merci de réessayer dans quelques minutes.",
      failed: "Nous n’avons pas pu réserver ce créneau. Merci de réessayer.",
    },
    time: {
      loading: "Chargement des créneaux disponibles",
      loadError: "Impossible de charger le calendrier.",
      loadErrorHint: "Vos réponses sont enregistrées ici. Réessayez dans un instant.",
      retry: "Réessayer",
      confirm: "Confirmer la démo",
      confirming: "Réservation…",
      tailoredFor: "Personnalisée pour",
      edit: "Modifier",
      /* summary chips */
      noAds: "Aucune publicité active",
      spendPerMonth: "{amount} / mois",
      previousMonth: "Mois précédent",
      nextMonth: "Mois suivant",
      /* a calendar day without free times; {day} is "Monday 24 November" */
      dayUnavailable: "{day}, indisponible",
      zone: "Horaires dans votre fuseau : {zone}",
      timesOn: "Créneaux du {day}",
    },
  },
  confirmation: {
    meta: {
      title: "Démo confirmée | Checkgrow",
      description: "Votre démo Checkgrow est réservée.",
    },
    eyebrow: "Démo confirmée",
    titleNamed: "C’est confirmé, {name}.",
    title: "Votre démo est réservée.",
    thanks: "Merci pour votre temps. Nous avons hâte de vous montrer Checkgrow appliqué à votre propre activité.",
    /* "… on their way to <email>." */
    inviteTo: {
      before: "L’invitation au calendrier et le lien Meet sont en route vers",
      after: ".",
    },
    inviteGeneric: "Consultez votre boîte de réception : l’invitation au calendrier et le lien Google Meet sont en route.",
    prepTitle: "Avant l’appel, nous préparons",
    prep: {
      competitors: {
        title: "Analyse des concurrents",
        body: "Qui sont vos concurrents, et comment ils font leur marketing.",
        bodyNamed: "Qui sont les concurrents de {site}, et comment ils font leur marketing.",
      },
      website: {
        title: "Audit du site et de la conversion",
        body: "Où vos visiteurs décrochent, et quoi corriger en premier.",
      },
      strategy: {
        title: "Votre stratégie de croissance IA",
        body: "Un premier plan et un rapport, prêts à être passés en revue ensemble.",
      },
    },
    exploreFeatures: "Découvrir les fonctionnalités",
    backHome: "Retour à l’accueil",
  },
};
