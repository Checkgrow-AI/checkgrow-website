import type { Localized } from "../../types";
import type { common as source } from "../en/common";

export const common: Localized<typeof source> = {
  nav: {
    homeLabel: "Accueil Checkgrow",
    links: {
      platform: "Plateforme",
      solution: "Solution",
      stories: "Histoires vraies",
      features: "Fonctionnalités",
      pricing: "Tarifs",
      faq: "FAQ",
    },
    bookDemo: "Réserver une démo",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  skipToContent: "Aller au contenu",
  language: {
    label: "Langue",
    choose: "Choisir la langue",
    suggestion: "Cette page est disponible en français.",
    switchTo: "Passer au français",
    dismiss: "Ignorer",
  },
  footer: {
    tagline: "Le growth marketing nativement IA. Un seul système où connaissances, recherche, exécution et mesure se connectent et se renforcent.",
    links: {
      platform: "Plateforme",
      solution: "Solution",
      stories: "Histoires vraies",
      features: "Fonctionnalités",
      sales: "Ventes",
      pricing: "Tarifs",
      faq: "FAQ",
      useCases: "Cas d’usage",
      successStories: "Témoignages clients",
      news: "Actualités",
      bookDemo: "Réserver une démo",
      documentation: "Documentation",
      changelog: "Nouveautés",
    },
    copyright: "© Copyright Checkgrow · checkgrow.com",
    backedBy: "Avec le soutien de",
    euAlt: "Cofinancé par l’Union européenne",
    privacyPolicy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    privacySettings: "Paramètres de confidentialité",
    legal:
      "Checkgrow d.o.o., société immatriculée à Zagreb (Croatie), numéro de TVA : HR16006061302, exerce ses activités conformément à la réglementation croate et européenne en vigueur. Nous ne collectons, ne traitons et ne conservons aucune donnée personnelle ou professionnelle sans le consentement explicite de l’utilisateur ou une base légale au sens du Règlement général sur la protection des données (RGPD). Toutes les intégrations et authentifications passent de manière sécurisée par des fournisseurs agréés ; nous ne conservons aucun mot de passe et n’accédons à aucun compte tiers sans autorisation. L’ensemble des droits, obligations, conditions d’utilisation des données, conditions de paiement et règles de conformité est détaillé dans nos Conditions générales et notre Politique de confidentialité. En utilisant la plateforme Checkgrow, vous reconnaissez avoir pris connaissance de ces politiques et les acceptez.",
  },
  notFound: {
    title: "Page introuvable",
    body: "Cette page n’existe pas ou a été déplacée. Repartez de l’accueil, ou parcourez nos Actualités pour lire nos derniers guides et témoignages clients.",
    home: "Retour à l’accueil",
    browseNews: "Voir les actualités",
  },
};
