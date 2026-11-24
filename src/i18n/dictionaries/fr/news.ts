import type { Localized } from "../../types";
import type { news as source } from "../en/news";

type Video = (typeof source)["video"];
/* the tutorial video player; {title} is the video's title with a
   lower-case first letter, as it sits mid-sentence */
const video: Localized<Video> = {
  /* the caption files are English in every language */
  captionsLabel: "Anglais (généré automatiquement)",
  unsupported: "Votre navigateur ne prend pas en charge la vidéo intégrée. Utilisez le lien vers la vidéo ci-dessous.",
  play: "Lire {title}",
  playVideo: "Lire la vidéo",
  error: { before: "La lecture n’a pas pu démarrer. Essayez les commandes du lecteur, ou ", link: "ouvrez directement la vidéo", after: "." },
  watch: "Regarder {title}",
};

export const news: Localized<typeof source> = {
  listing: {
    meta: {
      title: "Actualités Checkgrow | Témoignages clients, tutoriels et bilans de sécurité",
      description: "Témoignages clients, tutoriels pratiques et bilans de sécurité de Checkgrow. Découvrez comment les équipes grandissent avec la plateforme, et les méthodes qui font la différence.",
    },
    /* the collection's name: structured data and the share image's alt text */
    name: "Actualités Checkgrow",
    heading: "Actualités",
    /* two lines under the heading */
    introLead: "Au cœur de Checkgrow.",
    introBody: "Guides pratiques, évolutions de la plateforme et le travail derrière votre espace.",
    filterLabel: "Filtrer les actualités par catégorie",
    count: { one: "{n} article", other: "{n} articles" },
  },
  article: {
    metaTitle: "{title} | Actualités Checkgrow",
    breadcrumbLabel: "Fil d’Ariane",
    /* structured-data breadcrumb trail */
    breadcrumbHome: "Accueil",
    breadcrumbNews: "Actualités",
    allNews: "Toutes les actualités",
    allStories: "Tous les témoignages clients",
    /* {detail}: the story's kicker, the tutorial's video count or securityByline */
    byline: "Par Checkgrow · {detail}",
    guidedVideos: { one: "{n} vidéo guidée", other: "{n} vidéos guidées" },
    securityByline: "Bilan de sécurité",
    contentsLabel: "Sur cette page",
    faqLink: "FAQ",
    bookDemo: "Réserver une démo",
  },
  tutorial: {
    contents: { shortVideo: "Présentation courte", steps: "Pas à pas", fullVideo: "Présentation complète" },
    beforeYouBegin: "Avant de commencer.",
    stepsTitle: "La méthode, pas à pas",
    recordingNote: "Enregistré dans l’espace de travail Drooms. Vos écrans peuvent légèrement différer à mesure que Checkgrow évolue.",
    takeawayTitle: "Capitalisez sur ce que vous apprenez",
  },
  video,
  story: {
    takeaways: "À retenir",
    about: "À propos de {name}",
    featuresUsed: "Fonctionnalités Checkgrow utilisées",
    /* read by screen readers between a section's label and its title */
    labelSeparator: " : ",
    faq: "Questions fréquentes",
  },
  categoryLabels: {
    all: "Toutes les actualités",
    "success-stories": "Témoignages clients",
    tutorials: "Tutoriels",
    "security-releases": "Sécurité",
  },
  readLink: {
    "success-stories": "Lire le témoignage",
    tutorials: "Voir le tutoriel",
    "security-releases": "Lire le bilan de sécurité",
  },
  security: {
    title: "Une protection renforcée pour votre espace de travail connecté",
    description: "Le bilan de sécurité d’octobre : accès aux comptes, données de l’entreprise, identifiants des services connectés et contrôles qui accompagnent nos récentes mises en production.",
    intro: "Votre espace de travail relie les connaissances de votre entreprise, vos fichiers et vos outils métier. Ce bilan présente les contrôles de sécurité renforcés dans nos récentes versions, le rôle de chacun et les éléments qui les étayent.",
    summary: {
      title: "Ce bilan en bref",
      /* followed by the article's publication date */
      publishedLabel: "Publié le",
      items: [
        { label: "Période couverte", value: "Du 28 septembre au 1er octobre 2026" },
        { label: "Éléments de preuve", value: "Revue de sécurité interne, tests ciblés en préproduction et registres de mise en production" },
        { label: "Objectif", value: "Une présentation publique pour les clients et les revues de sécurité en phase de preuve de concept" },
      ],
    },
    contents: { scope: "Périmètre de l’évaluation", review: "Votre revue de sécurité" },
    scope: {
      title: "Ce que couvre cette synthèse d’évaluation",
      items: [
        { label: "Auteur et éléments de preuve.", detail: "Cette synthèse est rédigée par Checkgrow à partir de travaux de sécurité internes, de tests ciblés et des registres de mise en production, à jour pour la période indiquée ci-dessus." },
        { label: "Périmètre de l’évaluation.", detail: "L’évaluation sous-jacente a porté sur l’environnement de préproduction le 28 septembre 2026. Elle a examiné un échantillon de contrôles ; les tests d’intrusion en production n’entraient pas dans son périmètre." },
        { label: "Limites de l’assurance.", detail: "Il ne s’agit ni d’un rapport de test d’intrusion indépendant, ni d’une attestation tierce, ni d’une certification de conformité. Ce document n’établit pas de certification SOC 2 ou HIPAA et ne garantit pas que toutes les vulnérabilités ont été éliminées." },
        { label: "Divulgation responsable.", detail: "Cette présentation décrit les protections mises en place sans exposer de constats détaillés, de configuration interne ni d’informations opérationnelles." },
      ],
    },
    contact: {
      title: "Vous préparez une revue de sécurité ou un POC ?",
      body: "Partagez votre checklist d’onboarding et le niveau d’assurance dont votre organisation a besoin. Notre équipe peut préciser les contrôles pertinents pour votre cas d’usage et discuter du périmètre et de la disponibilité des éléments justificatifs. Si vous avez besoin d’une évaluation indépendante, demandez-nous de confirmer ce point séparément.",
      link: "Parler de vos exigences de sécurité",
    },
    sections: [
      {
        id: "account-access", title: "Authentification et contrôle des sessions", shortTitle: "Accès aux comptes",
        introduction: "La protection des comptes combine vérification de l’identité, politique de l’entreprise et contrôle des sessions actives.",
        changes: [
          { label: "MFA par application d’authentification", detail: "Des mots de passe à usage unique basés sur le temps (TOTP) ajoutent une seconde étape de vérification à la connexion, avec des codes de récupération pour retrouver l’accès au compte." },
          { label: "Politique d’entreprise appliquée côté serveur", detail: "Les administrateurs peuvent imposer la MFA à leur entreprise. Les actions protégées vérifient le niveau d’authentification requis sur le serveur, pas seulement dans l’interface." },
          { label: "Validation renforcée des mots de passe", detail: "Les mots de passe doivent compter au moins 12 caractères, avec majuscules, minuscules, chiffres et caractères spéciaux." },
        ],
        table: {
          caption: "Contrôles de session inclus dans ces versions",
          columns: ["Contrôle", "Ce qu’il fait"],
          rows: [
            ["Déconnexion de partout", "Permet à un utilisateur de révoquer ses sessions sur tous ses appareils."],
            ["Départ d’un membre", "Révoque les sessions lorsqu’un membre est retiré."],
            ["Limites de session par entreprise", "Permet à une entreprise de restreindre les sessions, en complément de jetons d’accès à courte durée de vie et d’une meilleure gestion du renouvellement des sessions."],
          ],
        },
        note: "La MFA est disponible et configurable par chaque entreprise. Elle n’est pas activée automatiquement pour tous les espaces de travail.",
      },
      {
        id: "company-data", title: "Autorisations et isolation des données de l’entreprise", shortTitle: "Données de l’entreprise",
        introduction: "Être connecté ne suffit pas pour accéder aux ressources d’une entreprise. Les parcours examinés vérifient aussi les autorisations de l’appelant pour l’espace de travail concerné.",
        changes: [
          { label: "Identité de l’appelant vérifiée", detail: "Les opérations protégées de l’application authentifient l’appelant avant de vérifier son appartenance à l’entreprise et son accès aux ressources." },
          { label: "Autorisations limitées à l’entreprise", detail: "Des contrôles d’accès côté serveur et au niveau de la base de données réservent les ressources examinées aux utilisateurs autorisés de l’entreprise concernée." },
          { label: "Accès privé aux fichiers", detail: "Les pièces jointes des tâches sont liées aux autorisations de la tâche et de l’entreprise. Les fichiers temporaires envoyés aux agents ne sont accessibles qu’à la personne qui les a envoyés." },
          { label: "Opérations internes restreintes", detail: "Les opérations en arrière-plan obéissent à des exigences d’accès dédiées, au lieu de reposer sur un accès anonyme ou utilisateur ordinaire." },
        ],
        note: "Ces changements renforcent les contrôles examinés. L’évaluation a porté sur un échantillon de parcours ; il ne s’agit pas d’un test exhaustif de toutes les opérations de la plateforme.",
      },
      {
        id: "connected-services", title: "Chiffrement des identifiants et protection des intégrations", shortTitle: "Services connectés",
        introduction: "Les services connectés ont besoin d’identifiants pour fonctionner. Ces versions renforcent la façon dont ces identifiants sont stockés, exposés et utilisés.",
        changes: [
          { label: "Chiffrement authentifié au repos", detail: "AES-256-GCM protège les identifiants d’intégration stockés couverts par cette version, notamment Google Ads, Google Analytics, Meta, LinkedIn et Notion." },
          { label: "Exposition réduite côté navigateur", detail: "Les identifiants de connexion sensibles sont exclus des réponses habituellement envoyées au navigateur. Les secrets des webhooks utilisent un stockage protégé." },
          { label: "Contrôle administratif des destinations", detail: "Les destinations des webhooks CRM se gèrent via des contrôles réservés aux administrateurs." },
          { label: "Validation des adresses sortantes", detail: "Avant chaque envoi de webhook, les adresses résolues sont vérifiées, ce qui aide à limiter les requêtes aux destinations externes autorisées." },
        ],
      },
      {
        id: "data-lifecycle", title: "Conservation, suppression et stockage des réponses IA", shortTitle: "Cycle de vie des données",
        introduction: "Des contrôles programmés de conservation et de suppression rendent plus explicite le cycle de vie des enregistrements opérationnels.",
        changes: [
          { label: "Nettoyage programmé des journaux", detail: "Un processus de suppression récurrent applique les durées de conservation ci-dessous aux enregistrements opérationnels concernés." },
          { label: "Suppression de l’identité à la suppression du compte", detail: "Les informations permettant d’identifier un compte sont retirées des journaux d’activité conservés lorsque ce compte est supprimé." },
          { label: "Preuve de suppression de l’entreprise", detail: "La suppression d’une entreprise comprend des vérifications, un e-mail de confirmation et un certificat PDF généré par Checkgrow qui décrit ce qui a été supprimé." },
          { label: "Contrôle de l’état des réponses chez le fournisseur", detail: "Les requêtes OpenAI Responses sont configurées pour ne pas stocker l’état des réponses chez le fournisseur." },
        ],
        table: {
          caption: "Conservation des enregistrements opérationnels couverts par ce bilan",
          columns: ["Type d’enregistrement", "Durée de conservation"],
          rows: [
            ["Journaux d’activité", "12 mois, puis suppression programmée."],
            ["Journaux d’erreurs", "12 mois, puis suppression programmée."],
            ["Données d’utilisation de l’IA", "24 mois, puis suppression programmée."],
          ],
        },
        note: "Ces durées ne couvrent pas toutes les catégories de données clients. Ce réglage fournisseur ne signifie pas une conservation nulle pour tous les services d’IA ; les politiques des fournisseurs et les accords applicables continuent d’encadrer leurs traitements. Notre Politique de confidentialité et nos Conditions ont également été mises à jour pour décrire plus précisément nos pratiques.",
      },
      {
        id: "ongoing-checks", title: "Durcissement de l’application et vérification de la sécurité", shortTitle: "Contrôles continus",
        introduction: "Des contrôles préventifs dans le processus de développement complètent les tests ciblés et la vérification des mises en production.",
        changes: [
          { label: "Surveillance des dépendances et contrôles d’audit", detail: "Des vérifications automatisées repèrent les alertes connues sur les paquets et aident à prévenir les régressions de sécurité liées aux dépendances pendant le développement." },
          { label: "Analyse statique de sécurité", detail: "Des contrôles du code source recherchent les schémas sensibles pour la sécurité avant la mise en production des changements." },
          { label: "En-têtes de sécurité du navigateur", detail: "HSTS, restrictions d’affichage en iframe, protection contre le MIME sniffing, Referrer-Policy et Permissions-Policy renforcent le traitement des réponses de l’application côté navigateur." },
          { label: "Tests des rôles et du cloisonnement entre entreprises", detail: "L’évaluation en préproduction a combiné revue du code source, analyse automatisée et tests ciblés sur différents rôles utilisateur et espaces de travail. Les constats ont donné lieu à des correctifs et à des tests de non-régression." },
          { label: "Vérification des mises en production", detail: "Les registres de mise en production confirment que les changements décrits ici ont bien été livrés. Un déploiement réussi n’équivaut pas à un test d’intrusion indépendant de chaque parcours en production." },
        ],
      },
    ],
  },
};
