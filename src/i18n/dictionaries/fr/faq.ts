import type { Localized } from "../../types";
import type { faq as source } from "../en/faq";

type Categories = (typeof source)["categories"];
const categories: Localized<Categories> = [
  {
    id: "about",
    title: "À propos de Checkgrow",
    intro: "Ce qu’est la plateforme, à qui elle s’adresse et en quoi elle diffère des outils d’IA génériques.",
    items: [
      {
        anchor: "what-is-checkgrow",
        q: "Qu’est-ce que Checkgrow ?",
        a: "Checkgrow est une plateforme de growth marketing nativement IA : un moteur go-to-market pour les équipes marketing, les fondateurs et les grandes entreprises. Elle relie les connaissances de votre entreprise, vos études de marché, l’exécution au quotidien et la mesure dans un seul système. Chaque équipe travaille ainsi à partir du même contexte, et chaque campagne part de ce que l’entreprise sait déjà.",
      },
      {
        anchor: "who-is-checkgrow-for",
        q: "À qui s’adresse Checkgrow ?",
        a: "Aux fondateurs et CMO qui fixent le cap, aux équipes ops marketing et commerciales qui exécutent, aux profils growth et data qui bouclent la boucle, et aux agences qui gèrent plusieurs marques. Checkgrow convient aux scale-ups comme aux équipes marketing de grandes entreprises, lassées de réexpliquer leur activité à chaque outil, chaque agence et chaque prompt IA.",
      },
      {
        anchor: "how-is-checkgrow-different-from-chatgpt-or-a-generic-ai-tool",
        q: "En quoi Checkgrow diffère-t-il de ChatGPT ou d’un outil d’IA générique ?",
        a: "Un chat générique repart de zéro à chaque fois et oublie ce qui a marché ; votre contexte finit en fichiers dans un drive et en prompts éparpillés dans différents chats. Checkgrow entretient un seul cerveau de l’entreprise, structuré et pensé pour le marketing et la croissance : votre marque, vos produits, vos audiences, vos chiffres et vos décisions. Chaque agent, chaque campagne et chaque rapport s’en nourrit, et chaque résultat vient l’enrichir. Comme il fonctionne avec vos propres données marketing, votre équipe apprend en travaillant, et les grandes entreprises peuvent l’auto-héberger.",
      },
      {
        anchor: "what-can-i-actually-do-with-checkgrow",
        q: "Concrètement, que puis-je faire avec Checkgrow ?",
        a: "Construire le cerveau de votre entreprise à partir de votre site web, puis l’utiliser pour du vrai travail : briefer des campagnes et obtenir une stratégie complète avec textes et visuels publicitaires fidèles à votre marque, lancer des agents IA pour vos posts, e-mails et articles, surveiller les sites, réseaux sociaux et publicités en cours de vos concurrents, auditer la conversion de votre site, trouver et contacter des comptes cibles sur LinkedIn, collecter des leads, et lire vos performances GA4, Meta Ads et Google Ads sous forme d’insights en langage clair.",
      },
      {
        anchor: "what-is-a-growth-operating-system",
        q: "Qu’est-ce qu’un système d’exploitation de la croissance ?",
        a: "Un système d’exploitation de la croissance réunit au même endroit les connaissances de l’entreprise, la stratégie, l’exécution, la veille marché et les données de performance : les décisions reposent sur des faits, et chaque résultat vient nourrir la suite. Checkgrow est ce système pour les équipes go-to-market : un cerveau partagé pour la stratégie, les contenus, les campagnes, l’intelligence commerciale et le reporting.",
      },
      {
        anchor: "which-tools-does-checkgrow-replace",
        q: "Quels outils Checkgrow remplace-t-il ?",
        a: "La stack growth classique qu’il couvre compte onze abonnements : wiki de marque, outils de contenu IA, tableaux de gestion de campagnes, suites réseaux sociaux, veille concurrentielle, bases de prospection, outils de CRO, tableaux de bord analytics, gestion du consentement, suivi des tâches et direction artistique. Cette stack coûte couramment autour de 1 199 € par mois tous outils confondus ; Checkgrow est une seule plateforme, à partir de 499 € par mois.",
      },
      {
        anchor: "can-a-small-team-or-a-team-without-an-agency-use-checkgrow",
        q: "Une petite équipe, ou une équipe sans agence, peut-elle utiliser Checkgrow ?",
        a: "Oui, c’est tout l’intérêt. Une équipe growth de trois personnes peut travailler comme une équipe de trente : les agents IA produisent, les opérations marketing tournent sans chef de projet dédié et le reporting est prêt pour le comité de direction sans data analyst. Les équipes qui veulent des spécialistes en plus peuvent ajouter notre équipe growth avec l’offre Growth.",
      },
      {
        anchor: "does-my-team-need-to-be-marketing-experts-to-use-checkgrow",
        q: "Mon équipe doit-elle être experte en marketing pour utiliser Checkgrow ?",
        a: "Non. Checkgrow fonctionne avec vos propres données marketing et de croissance : l’utiliser, c’est monter en compétences. Des fonctionnalités interactives guident votre équipe à chaque étape du tunnel de conversion, du premier contact à la conversion, et expliquent ce qui a changé et pourquoi. Vos équipes restent aux commandes, prennent les décisions et progressent en marketing au fil de l’eau.",
      },
      {
        anchor: "how-fast-can-i-launch-campaigns-with-checkgrow",
        q: "En combien de temps puis-je lancer des campagnes avec Checkgrow ?",
        a: "En quelques heures, pas en quelques semaines. Briefez une campagne par chat ou avec l’assistant de création : Checkgrow vous renvoie un brief complet (objectif, tunnel de conversion, stratégies par canal et feuille de route) fondé sur vos produits et vos personas, puis génère les textes publicitaires et des visuels fidèles à votre marque pour chaque canal et chaque étape du tunnel.",
      },
    ],
  },
  {
    id: "getting-started",
    title: "Premiers pas et cerveau de l’entreprise",
    intro: "Comment Checkgrow apprend votre activité et garde ces connaissances à jour.",
    items: [
      {
        anchor: "how-do-i-get-started",
        q: "Comment démarrer ?",
        a: "Réservez une démo : nous vous présentons Checkgrow sur votre propre marque et vous aidons à choisir une offre, sans carte bancaire. La même page de réservation vous met en relation avec notre équipe pour toutes les offres, y compris Growth et Enterprise.",
      },
      {
        anchor: "how-does-checkgrow-learn-about-my-company",
        q: "Comment Checkgrow apprend-il à connaître mon entreprise ?",
        a: "Vous lui donnez l’adresse de votre site. Le scan du site lit vos pages publiques, les complète par une recherche IA, puis rédige une première version de votre Centre de connaissances : profil de l’entreprise, identité de marque, logo et couleurs, produits, cas d’usage, audiences et personas, concurrents et médias. Vous relisez et corrigez ce brouillon, et un score de connaissances indique son niveau de complétude. Vous ajoutez vous-même les données financières et votre profil client idéal, qui débloquent le scoring d’adéquation et le ciblage commercial.",
      },
      {
        anchor: "what-is-the-knowledge-center",
        q: "Qu’est-ce que le Centre de connaissances ?",
        a: "La source de vérité unique sur votre entreprise : profil de l’entreprise, marque et ton, produits, fonctionnalités, personas, profils clients idéaux, cas d’usage, données financières, points de conversion, médiathèque et moodboard, le tout relié dans un Graphe de connaissances. Campagnes, créations, agents IA, ciblage commercial et Assistant IA s’appuient tous dessus : une seule mise à jour suffit pour que tout suive.",
      },
      {
        anchor: "can-i-connect-google-drive-sharepoint-confluence-or-notion",
        q: "Puis-je connecter Google Drive, SharePoint, Confluence ou Notion ?",
        a: "Oui. Les sources connectées synchronisent les dossiers, espaces et pages dans lesquels votre équipe écrit déjà, depuis Google Drive, SharePoint et OneDrive, Confluence et Notion. L’accès est en lecture seule : rien n’est modifié ni supprimé à la source, et les sources vérifient les changements à quelques heures d’intervalle. Checkgrow peut rechercher dans les documents synchronisés quand il rédige ; les connaissances de votre entreprise ne changent qu’au travers de mises à jour que vous validez.",
      },
      {
        anchor: "can-the-ai-change-my-company-knowledge-without-my-approval",
        q: "L’IA peut-elle modifier les connaissances de mon entreprise sans mon accord ?",
        a: "Non. L’Assistant IA et les documents synchronisés proposent des mises à jour, et vous n’appliquez que celles que vous validez. Chaque modification, qu’elle soit manuelle ou issue d’un scan, d’un chat ou d’un fichier, est consignée dans l’historique des connaissances avec l’ancienne et la nouvelle valeur et son auteur, et chaque champ peut être restauré en un clic pendant 30 jours.",
      },
    ],
  },
  {
    id: "ai-integrations",
    title: "Modèles d’IA et intégrations",
    intro: "Les modèles d’IA avec lesquels Checkgrow fonctionne et les outils auxquels il se connecte.",
    items: [
      {
        anchor: "which-platforms-does-checkgrow-connect-to",
        q: "À quelles plateformes Checkgrow se connecte-t-il ?",
        a: "Google Analytics 4, Google Ads, Meta Ads, Instagram et LinkedIn pour les canaux et la mesure ; Google Drive, SharePoint et OneDrive, Confluence et Notion pour les connaissances de l’entreprise ; HubSpot, Zoho CRM et GoHighLevel pour importer vos cibles commerciales ; n8n et les webhooks pour l’automatisation et la transmission des leads. Checkgrow MCP connecte Claude, ChatGPT et d’autres applications d’IA.",
      },
      {
        anchor: "which-ai-models-does-checkgrow-use",
        q: "Quels modèles d’IA Checkgrow utilise-t-il ?",
        a: "Checkgrow fonctionne avec les modèles de pointe d’OpenAI, Google Gemini, Anthropic Claude et Perplexity. Dans l’Assistant IA, vous choisissez le modèle à chaque conversation, avec bascule automatique si l’un d’eux est indisponible. Vos coûts restent visibles et vous n’êtes jamais enfermé dans un modèle ou un éditeur.",
      },
      {
        anchor: "can-i-use-checkgrow-inside-claude-or-chatgpt",
        q: "Puis-je utiliser Checkgrow dans Claude ou ChatGPT ?",
        a: "Oui, avec Checkgrow MCP. Ajoutez Checkgrow comme connecteur personnalisé dans Claude, ChatGPT, Cursor ou toute application MCP, connectez-vous et choisissez une entreprise. L’application peut alors lire les connaissances de votre entreprise, vos performances Insights, vos campagnes et vos concurrents, et rédiger avec le ton de votre marque. Les connexions sont en lecture seule sauf si vous autorisez les modifications, chaque modification demande votre accord, et la lecture ne consomme aucun crédit. MCP est déployé progressivement, espace de travail par espace de travail.",
      },
      {
        anchor: "does-checkgrow-publish-ads-for-me",
        q: "Checkgrow publie-t-il les publicités à ma place ?",
        a: "Vos publicités continuent de tourner dans Meta Ads Manager et Google Ads. Checkgrow planifie la campagne, crée les textes et les visuels, et rapatrie les performances en direct dans une seule vue. Avec l’offre Growth, notre équipe de gestion publicitaire crée, lance et optimise les publicités pour vous.",
      },
      {
        anchor: "what-does-the-ai-assistant-do",
        q: "À quoi sert l’Assistant IA ?",
        a: "C’est votre écran d’accueil et un copilote conversationnel qui connaît votre entreprise. Il répond à partir de votre Centre de connaissances, de vos fichiers et de vos données connectées, va chercher les chiffres exacts dans Insights et peut agir dans toute la plateforme : mettre à jour les connaissances, créer des campagnes, lancer des agents IA et transformer ses réponses en tâches, en présentations à vos couleurs ou en PDF. Toute action qui modifie des données demande d’abord une confirmation.",
      },
    ],
  },
  {
    id: "sales",
    title: "Ventes, prospection et leads",
    intro: "Listes, prospection LinkedIn et leads entrants.",
    items: [
      {
        anchor: "how-does-linkedin-outreach-work-and-is-my-account-safe",
        q: "Comment fonctionne la prospection LinkedIn, et mon compte est-il protégé ?",
        a: "La prospection part du propre compte LinkedIn de chaque commercial, connecté via une API conforme aux règles de LinkedIn. Vous fixez une limite quotidienne de 3 à 15 demandes de connexion, envoyées en semaine entre 8 h et 19 h à intervalles aléatoires, à un rythme humain, avec un commentaire par cible et par jour. Le Sales Brain propose chaque commentaire et chaque message, et rien n’est publié sans votre accord. Aucune automatisation n’est sans risque : nous maintenons donc l’activité bien en deçà des usages professionnels normaux, avec un arrêt d’urgence.",
      },
      {
        anchor: "can-i-import-the-companies-and-contacts-i-already-have",
        q: "Puis-je importer les entreprises et contacts que j’ai déjà ?",
        a: "Oui. Importez un fichier CSV ou Excel contenant jusqu’à 5 000 entreprises ou personnes, ou récupérez-les depuis HubSpot, Zoho CRM ou GoHighLevel. Les colonnes sont associées automatiquement, chaque import est vérifié par rapport à vos commerciaux, et vos connexions LinkedIn existantes peuvent aussi devenir une liste. Ajouter des entreprises à une liste est gratuit ; la recherche se lance quand une campagne en a besoin.",
      },
      {
        anchor: "is-checkgrow-a-crm",
        q: "Checkgrow est-il un CRM ?",
        a: "Non. Leads vous offre une boîte de réception légère pour Meta Lead Ads et les formulaires entrants, avec l’attribution par campagne, publicité et formulaire, et un pipeline simple : Nouveau, Contacté, Qualifié, Gagné ou Perdu. Quand vous avez besoin de votre CRM, exportez un CSV ou transférez les nouveaux leads grâce à des webhooks signés.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Tarifs et offres",
    intro: "Offres, Growth Credits, utilisateurs et facturation.",
    items: [
      {
        anchor: "how-much-does-checkgrow-cost",
        q: "Combien coûte Checkgrow ?",
        a: "Business : 499 €/mois. Agency : 997 €/mois. Growth : 4 997 €/mois. Enterprise : sur devis. Économisez 10 % avec la facturation annuelle. Prix hors TVA.",
      },
      {
        anchor: "which-plan-is-right-for-my-team",
        q: "Quelle offre convient à mon équipe ?",
        a: "Business : la plateforme complète pour une marque, avec de la place pour toute l’équipe. Agency : chaque marque et chaque client dans son propre espace de travail, avec notre équipe à vos côtés. Growth : nos spécialistes gèrent vos publicités, vos rapports et le suivi, aux côtés de votre équipe. Enterprise : votre plateforme de croissance, sur votre infrastructure, à vos couleurs.",
      },
      {
        anchor: "what-is-the-difference-between-the-business-and-agency-plans",
        q: "Quelle différence entre les offres Business et Agency ?",
        a: "Business : 1 marque. Centre d’aide et support par chat. Guides, tutoriels et notre équipe sur le chat quand vous avez besoin d’un coup de main. Agency : marques illimitées. 1 heure / mois avec notre équipe growth. Une session mensuelle avec notre équipe Customer Success pour analyser vos résultats et préparer la suite.",
      },
      {
        anchor: "what-does-the-growth-plan-include",
        q: "Que comprend l’offre Growth ?",
        a: "Tout Agency, plus : un account manager dédié ; la gestion des publicités (création, lancement et optimisation) ; des rapports de performance pour chaque compte ; un suivi Customer Success sur tous vos comptes. Votre équipe réunit account manager, gestion des publicités, production créative et Customer Success. Comptes gérés : jusqu’à 3. Comptes supplémentaires facturés à part.",
      },
      {
        anchor: "what-does-the-enterprise-plan-include",
        q: "Que comprend l’offre Enterprise ?",
        a: "Votre plateforme de croissance, sur votre infrastructure, à vos couleurs. Développements et intégrations sur mesure ; plateforme en marque blanche, à vos couleurs ; infrastructure auto-hébergée et souveraineté des données ; revues avancées de sécurité et de conformité ; contrats longue durée. Des ingénieurs et des spécialistes growth dédiés à votre déploiement. Parlez à notre équipe de vos exigences et d’un contrat sur mesure.",
      },
      {
        anchor: "what-are-growth-credits",
        q: "Que sont les Growth Credits ?",
        a: "Les Growth Credits correspondent au volume de travail IA que vous lancez dans Checkgrow. Business : 5 000 / mois (recharge à tout moment). Agency : 5 000 / mois (pot commun · recharge à tout moment). Growth : 5 000 / mois (recharge à tout moment). Enterprise : sur mesure. Vous pouvez recharger à tout moment, quelle que soit votre offre. Les volumes Enterprise sont fixés dans votre contrat.",
      },
      {
        anchor: "how-many-people-can-use-checkgrow",
        q: "Combien de personnes peuvent utiliser Checkgrow ?",
        a: "Business : utilisateurs illimités. Agency : utilisateurs illimités. Growth : utilisateurs illimités. Enterprise : utilisateurs illimités. Réunissez marketing, ventes et direction dans le même système.",
      },
      {
        anchor: "how-does-annual-billing-work",
        q: "Comment fonctionne la facturation annuelle ?",
        a: "La facturation annuelle vous fait économiser 10 % sur les prix mensuels affichés. Le sélecteur indique l’équivalent mensuel et le total annuel, arrondis à l’unité, sans décimales. La facturation reste en EUR et tous les prix sont hors TVA. Enterprise fait l’objet d’un contrat sur mesure.",
      },
      {
        anchor: "can-i-view-prices-in-my-currency",
        q: "Puis-je afficher les prix dans ma devise ?",
        a: "Oui. Choisissez l’euro (EUR), le franc suisse (CHF), le dollar américain (USD) ou le real brésilien (BRL) à côté du sélecteur de facturation. Les conversions utilisent les derniers taux de référence quotidiens de la BCE disponibles via Frankfurter, avec la date du taux affichée. Les prix convertis sont des estimations à titre de comparaison, sans décimales, et ne changent pas votre devise de facturation. Votre contrat reste en EUR ; les taxes et les frais de change des prestataires de paiement ne sont pas inclus.",
      },
    ],
  },
  {
    id: "security",
    title: "Données, sécurité et confidentialité",
    intro: "À qui appartiennent vos données, où elles sont stockées et comment elles sont protégées.",
    items: [
      {
        anchor: "who-owns-the-data-and-knowledge-i-put-in",
        q: "À qui appartiennent les données et les connaissances que j’y mets ?",
        a: "À vous. Votre base de connaissances, vos recherches et vos résultats restent les vôtres : aucun enfermement, aucune règle cachée. Vous pouvez tout exporter dans un format lisible par machine et l’utiliser comme bon vous semble ; les entreprises doivent comprendre comment les choses fonctionnent et rester propriétaires de leurs données.",
      },
      {
        anchor: "where-is-my-data-stored",
        q: "Où mes données sont-elles stockées ?",
        a: "Dans l’Union européenne. Checkgrow fonctionne sur l’infrastructure Supabase d’AWS Francfort (eu-central-1) : vos contenus, campagnes, connaissances et résultats IA restent par défaut dans l’Espace économique européen. Les données sont chiffrées en transit avec TLS 1.3 et au repos avec AES-256, et des règles d’accès au niveau de la base de données isolent les données de chaque entreprise de celles des autres.",
      },
      {
        anchor: "is-checkgrow-gdpr-compliant",
        q: "Checkgrow est-il conforme au RGPD ?",
        a: "Checkgrow d.o.o. est une entreprise européenne basée à Zagreb, en Croatie, qui traite les données personnelles conformément au RGPD. Vous pouvez consulter, corriger, exporter et supprimer vos données depuis Mon compte, gérer vos consentements marketing et analytics, et écrire à admin@checkgrow.com pour toute autre demande ; les demandes d’accès reçoivent une réponse sous 30 jours.",
      },
      {
        anchor: "how-do-i-export-or-delete-my-data",
        q: "Comment exporter ou supprimer mes données ?",
        a: "Demandez une archive en ligne depuis Mon compte, rubrique Télécharger mes données : elle couvre votre compte, vos conversations IA, campagnes, tâches, résultats d’agents et les données de chaque entreprise dont vous faites partie, livrée en JSON ou CSV sous 5 à 10 jours ouvrés. Vous pouvez supprimer votre compte à tout moment depuis Mon compte ; certaines données, comme la facturation, sont conservées comme l’exige la loi.",
      },
      {
        anchor: "does-checkgrow-support-two-factor-authentication",
        q: "Checkgrow prend-il en charge l’authentification à deux facteurs ?",
        a: "Oui. Chaque utilisateur peut activer l’authentification à deux facteurs avec n’importe quelle application d’authentification et conserver des codes de récupération. Les administrateurs d’une entreprise peuvent l’imposer à toute l’équipe avec un délai de grâce, et cette exigence est appliquée sur nos serveurs, pas seulement dans l’application. Des rôles (Member, Admin et Master Admin) déterminent ce que chacun peut voir et faire.",
      },
      {
        anchor: "can-we-self-host-checkgrow-on-our-own-infrastructure",
        q: "Pouvons-nous auto-héberger Checkgrow sur notre propre infrastructure ?",
        a: "Oui. Grandes entreprises et scale-ups sont de plus en plus nombreuses à vouloir faire tourner Checkgrow sur leur propre infrastructure privée, et nous construisons avec l’offre Enterprise des déploiements auto-hébergés adaptés à leur stack et à leurs exigences de sécurité. Les connaissances de l’entreprise restent structurées et prêtes pour le modèle d’IA de leur choix, dans leur propre périmètre, ce qui compte pour la souveraineté des données et la conformité.",
      },
    ],
  },
];

export const faq: Localized<typeof source> = {
  homeTitle: "Avant de vous lancer",
  eyebrow: "Questions",
  categories,
  page: {
    meta: {
      title: "FAQ Checkgrow | Vos questions sur la plateforme de growth marketing IA",
      description: "Tout savoir sur Checkgrow : ce que fait la plateforme de growth marketing IA, comment elle apprend votre entreprise, intégrations et modèles d’IA, prospection LinkedIn, tarifs et offres, sécurité des données et RGPD.",
    },
    breadcrumb: {
      home: "Accueil",
      faq: "FAQ",
    },
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    intro: "Tout ce que les équipes demandent avant et après leurs débuts avec Checkgrow : la plateforme, le cerveau de votre entreprise, les intégrations, la prospection commerciale, les tarifs et la sécurité.",
    count: {
      one: "{n} réponse, une seule page.",
      other: "{n} réponses, une seule page.",
    },
    topics: "Thèmes de la FAQ",
    stillTitle: "Encore une question ?",
    stillBody: "Découvrez Checkgrow sur votre propre marque lors d’une démo, ou lisez les guides pas à pas de notre documentation.",
    bookDemo: "Réserver une démo",
    docs: "Lire la documentation",
  },
};
