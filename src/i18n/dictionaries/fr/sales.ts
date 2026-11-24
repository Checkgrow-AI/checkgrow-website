import type { Localized } from "../../types";
import type { sales as source } from "../en/sales";

export const sales: Localized<typeof source> = {
  meta: {
    title: "Checkgrow Sales | Le Sales Brain IA des équipes go-to-market",
    description:
      "Checkgrow Sales construit un Sales Brain IA à partir de vos propres conversations : des listes classées selon votre ICP, une prospection LinkedIn validée avec la voix de chaque commercial, des réponses triées pour vous et un historique unique que la direction peut suivre.",
  },
  /* a phrase kept on one line in headlines (empty string: none) */
  nowrap: "go-to-market",
  hero: {
    eyebrow: "Checkgrow Sales",
    title: "Les meilleures équipes go-to-market vendent avec Checkgrow.",
    intro: "Un Sales Brain IA qui apprend comment votre entreprise vend, garantit une prospection cohérente pour chaque commercial et réunit chaque conversation dans un historique unique que votre direction peut suivre.",
    bookDemo: "Réserver une démo",
    seeHow: "Voir comment ça marche",
  },
  film: {
    label: "Présentation de Checkgrow Sales",
    watchLabel: "Regarder la présentation de Checkgrow Sales avec le son",
    watch: "Regarder avec le son",
    length: "3 min",
  },
  proof: {
    label: "Ce qu’en disent les leaders go-to-market",
    quote: "« {quote} »",
    byline: "{role}, {company}",
  },
  overview: {
    eyebrow: "Un cerveau pour chaque commercial",
    title: "Trouvez les bons comptes, abordez-les bien et progressez chaque semaine.",
    intro:
      "Trois modules s’appuient sur le même cerveau de l’entreprise que votre marketing : vos ICP, vos personas, vos produits et votre ton. Chaque résultat vient l’enrichir.",
  },
  modules: [
    {
      id: "lists",
      name: "Listes",
      promise: "Sachez exactement qui contacter",
      title: "Votre marché, classé et attribué.",
      intro: "Transformez votre profil client idéal en une liste de comptes classés, trouvez-y les décideurs et donnez à chaque entreprise un seul responsable.",
      functions: [
        {
          mockup: "lists-1",
          title: "De l’ICP à une liste classée",
          body: "Votre ICP alimente la recherche. Les entreprises arrivent, notées selon leur adéquation et classées de la meilleure à la moins bonne, et les meilleurs comptes rejoignent la liste d’un commercial en quelques secondes.",
          screen: "Un ICP alimente la recherche d’entreprises ; les entreprises correspondantes sont notées selon leur adéquation à l’ICP, classées de la meilleure à la moins bonne et ajoutées à la liste d’un commercial.",
        },
        {
          mockup: "lists-2",
          title: "La bonne personne d’abord",
          body: "Chaque contact est comparé à votre ICP, les décideurs sont classés, et Checkgrow explique pourquoi chacun passe en premier, du score de lead à l’activité LinkedIn récente.",
          screen: "Les personnes d’une entreprise cible sont comparées à l’ICP et classées par priorité, avec les signaux qui indiquent qui contacter en premier.",
        },
        {
          mockup: "lists-3",
          title: "Des listes qui se répartissent toutes seules",
          body: "Définissez une règle d’attribution une fois : les nouvelles entreprises correspondantes arrivent chez le bon commercial. Un seul responsable par entreprise, aucun doublon, et jamais de prospection auprès des clients ou des comptes à ne pas contacter.",
          screen: "Une règle d’attribution automatique répartit les nouvelles entreprises correspondantes entre les commerciaux, tandis que les clients et les entreprises à ne pas contacter sont bloqués.",
        },
      ],
    },
    {
      id: "outreach",
      name: "Prospection",
      promise: "Abordez-les comme votre meilleur commercial",
      title: "Une prospection bien renseignée, à un rythme humain.",
      intro: "Chaque commercial interagit depuis son propre LinkedIn, avec sa propre voix, et une personne valide ce qui part. La relation commence avant le pitch, et aucune réponse n’est oubliée.",
      functions: [
        {
          mockup: "outreach-1",
          title: "Chauffez avant le pitch",
          body: "Grow rédige un commentaire sincère sur le post d’un prospect et explique pourquoi il compte. J’aime, commentaire, invitation, acceptée : la relation commence avant le premier message.",
          screen: "Le post LinkedIn d’un prospect reçoit un commentaire rédigé, puis le parcours passe du j’aime au commentaire, jusqu’à une invitation acceptée.",
        },
        {
          mockup: "outreach-2",
          title: "Validez en quelques minutes",
          body: "Les premiers messages arrivent rédigés avec la voix du commercial, accompagnés des règles du Brain qui les sous-tendent. Les commerciaux valident un par un, et toute une campagne est programmée en quelques minutes au lieu de plusieurs heures.",
          screen: "Un commercial valide les premiers messages un par un, chacun indiquant les règles du Sales Brain utilisées, jusqu’à ce que 41 messages soient programmés.",
        },
        {
          mockup: "outreach-3",
          title: "Chaque réponse lue et triée",
          body: "Les réponses sont lues et étiquetées chaude, tiède, fraîche ou froide selon leur intention, les plus chaudes en premier. Les réponses chaudes deviennent des rendez-vous, et les réponses simples sont traitées pour vous.",
          screen: "Les réponses LinkedIn reçues sont étiquetées chaude, tiède, fraîche ou froide, triées des plus chaudes aux plus froides, et la réponse chaude devient un rendez-vous.",
        },
      ],
    },
    {
      id: "sales-brain",
      name: "Sales Brain",
      promise: "Progressez à chaque conversation",
      title: "Un Sales Brain qui appartient à votre entreprise.",
      intro: "Chaque réponse, modification, commentaire et instruction apprend au Brain comment votre entreprise vend. Les connaissances se cumulent à l’échelle de l’équipe et restent chez vous quand les gens partent.",
      functions: [
        {
          mockup: "brain-1",
          title: "Vos retours écrivent le prochain message",
          body: "Dites au Brain ce qui n’allait pas, avec vos mots. Il réécrit le message, transforme votre retour en règle, et un clic suffit pour partager cette règle avec chaque commercial.",
          screen: "Un message générique reçoit un retour, le Sales Brain le réécrit, et ce retour devient une règle partagée avec chaque commercial.",
        },
        {
          mockup: "brain-2",
          title: "Il apprend de chaque signal",
          body: "Réponses, commentaires, modifications, validations, instructions et playbooks alimentent tous le Brain. Chaque semaine, il montre ce qu’il a appris et d’où vient chaque règle.",
          screen: "Réponses, commentaires, modifications, validations, instructions et un playbook alimentent le Sales Brain d’un commercial, qui liste les règles apprises cette semaine et leur origine.",
        },
        {
          mockup: "brain-3",
          title: "Plus de réponses chaque semaine",
          body: "À mesure que le Brain apprend, la même prospection génère davantage de conversations. La direction voit la courbe et les enseignements derrière chaque étape.",
          screen: "Le taux de réponse d’un commercial progresse semaine après semaine, annoté de ce que le Sales Brain a appris à chaque étape.",
          note: "Données illustratives",
        },
      ],
    },
  ],
  /* tab list label of one module's functions */
  functionsLabel: "Fonctions de {module}",
  difference: {
    eyebrow: "Pourquoi Checkgrow Sales",
    title: "La plupart des outils envoient des messages. Checkgrow construit votre cerveau commercial.",
    intro:
      "Chaque conversation devient une connaissance de l’entreprise : un jeu de données propriétaire sur ce à quoi vos acheteurs réagissent, qui vous appartient et s’enrichit avec chaque commercial.",
  },
  pillars: [
    {
      title: "Cohérence à toute échelle",
      body: "Chaque commercial travaille avec les mêmes règles validées, la même voix et le même playbook : la qualité de la prospection ne dépend plus de qui l’envoie.",
    },
    {
      title: "Un jeu de données commercial propriétaire",
      body: "Chaque conversation, réponse, modification et décision devient une donnée structurée de l’entreprise. Le Brain les cumule pour en tirer la façon dont votre entreprise vend.",
    },
    {
      title: "Visible pour la direction",
      body: "Listes, validations, réponses et ce que chaque Brain a appris sont réunis au même endroit : les managers suivent le travail sans courir après les mises à jour.",
    },
    {
      title: "Un historique qui reste",
      body: "Tout l’historique de prospection est centralisé. Quand un commercial part, ses comptes, ses conversations et ses enseignements restent dans l’entreprise.",
    },
  ],
  governance: {
    eyebrow: "Conçu pour le go-to-market des grandes entreprises",
    title: "Développez la prospection sans perdre le contrôle.",
    intro:
      "La direction fixe les règles une fois. Chaque commercial travaille dans ce cadre, chaque action est validée par une personne, et toute l’équipe fonctionne sur un seul système maîtrisé.",
  },
  controls: [
    {
      icon: "approve",
      title: "Une personne valide tout",
      body: "Le Brain propose commentaires et messages ; rien n’est publié tant qu’un commercial ne l’a pas validé, modifié ou rejeté.",
    },
    {
      icon: "pace",
      title: "Le rythme d’un humain attentif",
      body: "De 3 à 15 demandes de connexion par commercial et par jour, en semaine entre 8 h et 19 h, un commentaire par cible et par jour, et un arrêt d’urgence.",
    },
    {
      icon: "linkedin",
      title: "Le LinkedIn de chaque commercial",
      body: "Les commerciaux connectent leur propre compte via une API conforme aux règles de LinkedIn et peuvent le déconnecter à tout moment, ce qui stoppe immédiatement toute activité.",
    },
    {
      icon: "owner",
      title: "Un seul responsable par entreprise",
      body: "Les imports sont vérifiés par rapport à chaque commercial, deux personnes ne contactent jamais le même interlocuteur, et les clients comme les comptes à ne pas contacter sont protégés.",
    },
    {
      icon: "data",
      title: "Vos données vous suivent",
      body: "Importez jusqu’à 5 000 entreprises ou personnes depuis un fichier CSV ou Excel, ou récupérez-les depuis HubSpot, Zoho CRM et GoHighLevel.",
    },
    {
      icon: "security",
      title: "Une sécurité de niveau entreprise",
      body: "Rôles et authentification à deux facteurs obligatoire, hébergement européen chez AWS Francfort, chiffrement en transit et au repos.",
    },
  ],
  team: {
    eyebrow: "L’équipe derrière Checkgrow",
    title: "Conçu par des fous de go-to-market.",
    body: [
      "Nous avons passé quinze ans sur le terrain du marketing et de la vente : une agence avant d’être une plateforme, à piloter campagnes, prospection et pipeline pour nos clients, jugés sur une seule chose, les résultats.",
      "Checkgrow, c’est cette obsession transformée en système. Chaque module de cette page est né de problèmes que nous avons d’abord résolus à la main : votre équipe obtient la méthode, pas seulement le logiciel.",
    ],
    imageAlt: "L’équipe Checkgrow passe en revue ensemble le travail go-to-market d’un client autour d’une table de réunion",
  },
  faqTitle: "Les questions des directeurs commerciaux",
  allQuestions: "Toutes les questions",
  faq: [
    {
      q: "Qu’est-ce qu’un Sales Brain ?",
      a: "Un Sales Brain est l’IA qui rédige la prospection de vos commerciaux et apprend comment votre entreprise vend. Il s’appuie sur les connaissances de votre entreprise (ICP, personas, produits et ton) et apprend de chaque réponse, commentaire, modification, validation et instruction. Ce qu’il apprend devient des règles que votre équipe peut consulter, rattacher à leur origine et partager avec chaque commercial.",
    },
    {
      q: "En quoi Checkgrow Sales diffère-t-il d’un outil de sales engagement ?",
      a: "Les outils de séquences envoient des modèles. Checkgrow construit un Sales Brain propriétaire à partir de vos propres conversations : la prospection reste cohérente d’un commercial à l’autre, s’améliore à chaque réponse et modification, et tout l’historique reste centralisé pour la direction au lieu d’être éparpillé dans des boîtes de réception.",
    },
    {
      q: "Des messages partent-ils sans validation ?",
      a: "Non. Le Brain propose commentaires et messages, et chacun attend qu’un commercial le valide, le modifie ou le rejette. Les éléments validés sont ensuite envoyés à un rythme humain, dans les limites quotidiennes.",
    },
    {
      q: "Comment la prospection LinkedIn reste-t-elle sûre ?",
      a: "La prospection part du propre compte LinkedIn de chaque commercial, via une API conforme aux règles de LinkedIn. Vous fixez une limite quotidienne de 3 à 15 demandes de connexion, envoyées en semaine entre 8 h et 19 h à intervalles aléatoires, avec un commentaire par cible et par jour et un arrêt d’urgence. Aucune automatisation n’est sans risque : l’activité reste donc bien en deçà des usages professionnels normaux.",
    },
    {
      q: "Les managers peuvent-ils suivre ce que fait chaque commercial ?",
      a: "Oui. Chaque commercial dispose de son propre espace de travail et de son propre Sales Brain, tandis que les listes, attributions, validations, réponses et ce que chaque Brain a appris sont centralisés : la direction peut suivre le travail et les résultats de toute l’équipe.",
    },
    {
      q: "Pouvons-nous reprendre nos comptes et contacts existants ?",
      a: "Oui. Importez un fichier CSV ou Excel contenant jusqu’à 5 000 entreprises ou personnes, ou récupérez-les depuis HubSpot, Zoho CRM ou GoHighLevel. Chaque import est vérifié par rapport à vos commerciaux pour qu’une entreprise garde un seul responsable, et vos connexions LinkedIn existantes peuvent aussi devenir une liste.",
    },
    {
      q: "Que deviennent nos données quand un commercial s’en va ?",
      a: "Elles restent dans l’entreprise. Comptes, conversations, validations et règles apprises par le Brain sont centralisés dans votre espace de travail, pas dans une boîte de réception personnelle : le commercial suivant repart de tout l’historique.",
    },
  ],
  cta: {
    title: "La vente qui progresse à chaque conversation commence ici.",
    body: "Découvrez Checkgrow Sales sur votre propre ICP, vos comptes et votre ton lors d’une démo de 30 minutes avec notre équipe.",
    bookDemo: "Réserver une démo",
  },
  schema: {
    product: "Checkgrow Sales",
    videoName: "Présentation de Checkgrow Sales",
    videoDescription:
      "Une présentation de Checkgrow Sales : le pipeline LinkedIn de l’équipe, des invitations aux rendez-vous, des réponses triées par Grow, des brouillons rédigés avec la voix de chaque commercial pour validation, et le Sales Brain qui apprend de chaque conversation.",
    home: "Accueil",
    page: "Ventes",
  },
};
