import type { Localized } from "../../types";
import type { useCases as source } from "../en/useCases";

/* Cas d'usage : /use-cases et /use-cases/<slug>. Les slugs des témoignages
   clients, les noms d'entreprises et les icônes d'intégration ne se
   traduisent pas. */
export const useCases: Localized<typeof source> = {
  index: {
    meta: {
      title: "Cas d’usage Checkgrow | Comment les équipes pilotent leur marketing avec Checkgrow",
      description:
        "Découvrez comment les équipes marketing utilisent Checkgrow pour planifier et mesurer au même endroit, rédiger avec une IA qui connaît leur marque et montrer au conseil d’administration ce que rapporte le marketing.",
    },
    title: "Cas d’usage",
    intro:
      "Les missions que les équipes marketing confient à Checkgrow, présentées de bout en bout : le problème, les quatre étapes dans la plateforme et ce qui change pour l’équipe. Y compris ce que Checkgrow ne fait pas.",
    listTitle: "Tous les cas d’usage",
    count: { one: "{n} cas d’usage", other: "{n} cas d’usage" },
    builtFor: "Conçu pour {audiences}",
    audienceSeparator: " · ",
    read: "Lire le cas d’usage",
    schemaName: "Cas d’usage Checkgrow",
  },
  page: {
    metaTitle: "{title} | Checkgrow",
    socialImageAlt: "{title} Écran produit Checkgrow : {feature}.",
    breadcrumb: "Fil d’Ariane",
    back: "Tous les cas d’usage",
    eyebrow: "Cas d’usage · {feature}",
    builtFor: "Conçu pour",
    bookDemo: "Parlons-en",
    seeHow: "Voir comment ça marche",
    onThisPage: "Sur cette page",
    sections: {
      inShort: "En bref",
      problem: "Le problème",
      howItWorks: "Comment ça marche",
      seeItWork: "En action",
      whatYouGet: "Ce que vous obtenez",
      inPractice: "En pratique",
      faq: "FAQ",
    },
    howTitle: "Quatre étapes, toutes dans Checkgrow.",
    getTitle: "Ce qui change pour votre équipe.",
    practiceTitle: "Des équipes le font déjà.",
    readStory: "Lire le témoignage client →",
    faqTitle: "Les questions que posent les équipes avant de se lancer.",
    relatedLabel: "Cas d’usage associés",
    relatedTitle: "Poursuivez la découverte.",
    bandTitle: "Découvrez ce que Checkgrow montrerait pour votre entreprise.",
    updated: "Dernière mise à jour : {date}. Les écrans produit sont des illustrations de Checkgrow ; les chiffres sont donnés à titre d’exemple.",
  },
  breadcrumbs: {
    home: "Accueil",
    useCases: "Cas d’usage",
  },
  items: {
    "marketing-operations": {
      feature: "Opérations marketing",
      title: "Planifiez, lancez et mesurez votre marketing depuis un seul endroit.",
      metaTitle: "Opérations marketing tout-en-un : planifier, lancer et mesurer au même endroit",
      description: "Planifiez vos campagnes, créez vos visuels, organisez le travail et suivez les résultats de GA4, Meta Ads et Google Ads dans un seul espace Checkgrow. Fini les cinq outils.",
      lede: "Checkgrow réunit la planification des campagnes, les créations, le calendrier et le reporting dans un seul espace de travail, connecté à Google Analytics, Meta Ads, Google Ads, Instagram et LinkedIn. Le plan et les résultats sont côte à côte : plus personne ne reconstitue la situation chaque semaine à partir d’exports.",
      builtFor: ["Responsables marketing", "Équipes growth", "Agences"],
      worksWithLabel: "Fonctionne avec",
      worksWith: [
        {
          name: "Google Analytics",
          icon: "/features/icons/google-analytics.svg",
        },
        {
          name: "Meta Ads",
          icon: "/features/icons/meta.webp",
        },
        {
          name: "Google Ads",
          icon: "/features/icons/google_ads_ai.svg",
        },
        {
          name: "Instagram",
          icon: "/features/icons/Instagram.svg",
        },
        {
          name: "LinkedIn",
          icon: "/features/icons/LinkedIN.svg",
        },
        {
          name: "Notion",
          icon: "/features/icons/notion_ai_integration.svg",
        },
        {
          name: "n8n et webhooks",
        },
        {
          name: "Checkgrow MCP",
        },
      ],
      inShort: [
        "Planifiez les campagnes, créez les visuels et organisez le travail dans un seul espace Checkgrow.",
        "Connectez Google Analytics, Meta Ads, Google Ads, Instagram et LinkedIn, et voyez les résultats à côté du plan.",
        "Vos publicités continuent de tourner dans Meta et Google ; Checkgrow lit leurs performances au lieu de les remplacer.",
        "Campagnes, publications et tâches partagent un même calendrier : toute l’équipe voit ce qui est en ligne et ce qui arrive.",
      ],
      hero: {
        steps: [
          {
            label: "Calendrier",
            caption: "Campagnes, publications sur les réseaux sociaux et tâches dans un même calendrier.",
          },
          {
            label: "Campagnes",
            caption: "Chaque campagne avec ses canaux, son budget et ses créations.",
          },
          {
            label: "Intégrations",
            caption: "Google Analytics, Meta Ads, Google Ads et Instagram connectés.",
          },
        ],
      },
      problem: {
        title: "Cinq outils, cinq versions de la vérité.",
        body: "Le brief vit dans un document, les publicités dans deux gestionnaires de publicités, le plan dans un tableur et les résultats dans Google Analytics. Chaque rapport hebdomadaire commence par des exports, chaque décision attend que quelqu’un recolle les morceaux, et le temps d’obtenir une vue complète, elle est déjà dépassée.",
        quote: {
          text: "Il existe tellement d’outils, peut-être un outil pour chaque fonctionnalité que vous proposez, et c’est vraiment pénible de gérer 10 ou 15 outils. Ici, tout est réuni.",
          author: "Florian Mueller",
        },
      },
      steps: [
        {
          title: "Planifiez chaque campagne dans une seule liste",
          body: "Chaque campagne réunit sa stratégie, ses canaux, son budget, sa période et ses créations. Voyez-les toutes d’un coup d’œil, actives ou en pause, avec les dépenses et les résultats de chaque canal à côté du plan.",
          tag: "Tous les canaux, par campagne",
        },
        {
          title: "Créez les visuels au sein de la campagne",
          body: "Les créations vivent dans la campagne à laquelle elles appartiennent, regroupées par canal et par étape du tunnel, du premier jet à la validation. Variantes de texte, formats et langues restent rattachés à la bonne publicité au lieu de dormir dans un tableur.",
          tag: "Par canal et par étape",
        },
        {
          title: "Voyez tout dans un même calendrier",
          body: "Campagnes, publications et tâches apparaissent ensemble : l’équipe voit ce qui est en ligne et ce qui arrive, sans planning à part. Déplacez une publication, et tout le monde voit la nouvelle date.",
          tag: "Tous les types de travail en une vue",
        },
        {
          title: "Connectez les outils que vous utilisez déjà",
          body: "Google Analytics, Meta Ads, Google Ads, Instagram et LinkedIn se connectent en quelques clics, avec Notion, n8n, les webhooks et Checkgrow MCP pour tout le reste. Vos données arrivent dans Checkgrow ; rien n’a à quitter les outils auxquels vous faites confiance.",
          tag: "Connecté en quelques clics",
        },
      ],
      see: {
        title: "Commencez chaque journée depuis un seul écran.",
        body: "Demandez à Grow, l’Assistant IA, ce qui a changé pendant la nuit, ou accédez directement aux campagnes, à Insights, aux concurrents ou au Graphe de connaissances. Chaque réponse vient de votre propre espace de travail.",
        tag: "Un seul point de départ",
      },
      outcomes: [
        {
          title: "Une vue unique de votre marketing",
          body: "Plans, créations, calendrier et résultats vivent dans un seul espace de travail au lieu de cinq outils.",
        },
        {
          title: "Des rapports qui partent de données en temps réel",
          body: "Les performances viennent directement de vos comptes connectés, pas des exports de la semaine.",
        },
        {
          title: "Toute l’équipe sur la même longueur d’onde",
          body: "Tâches, commentaires et @mentions sont rattachés à la campagne concernée : les décisions ne se perdent plus dans les messageries.",
        },
      ],
      testimonial: {
        text: "J’adore le fait que tout soit au même endroit, qu’on n’ait pas besoin d’une foule d’applications différentes pour l’utiliser, parce qu’en ce moment, c’est un vrai sujet dans le monde de la martech.",
        author: "Abigail Markey, Markey Marketing Co",
      },
      proof: [
        {
          slug: "wespa-2028-leads-in-a-month",
          company: "WESPA",
          line: "A mené cinq campagnes depuis un seul espace de travail et rassemblé 2 028 leads dans une seule liste.",
        },
        {
          slug: "barner-croatia-launch-purchases-up-160",
          company: "Barner",
          line: "S’est lancé en Croatie depuis un seul espace de travail : achats en hausse de 160,6 % en un mois.",
        },
      ],
      faq: [
        {
          q: "Qu’est-ce qu’une plateforme d’opérations marketing ?",
          a: "Une plateforme d’opérations marketing est un espace de travail unique où une équipe planifie ses campagnes, prépare ses créations, organise le travail et lit les résultats, au lieu de les éparpiller entre documents, tableurs et gestionnaires de publicités. Checkgrow fait tout cela et se connecte à Google Analytics, Meta Ads, Google Ads, Instagram et LinkedIn, pour que les performances apparaissent à côté du plan.",
        },
        {
          q: "À quels outils Checkgrow se connecte-t-il ?",
          a: "Google Analytics 4, Meta Ads, Google Ads, Instagram et LinkedIn, ainsi que Notion, n8n et les webhooks pour tout le reste. Checkgrow MCP permet à Claude, à ChatGPT et à d’autres applications d’IA de lire les données de votre espace de travail. Slack, TikTok et Supabase sont annoncés comme bientôt disponibles.",
        },
        {
          q: "Faut-il arrêter d’utiliser le Gestionnaire de publicités Meta ou Google Ads ?",
          a: "Non. Vos publicités continuent de tourner là où elles sont. Checkgrow lit leurs performances et les affiche à côté du plan : vous comparez les canaux sans changer d’outil.",
        },
        {
          q: "Checkgrow publie-t-il nos publicités à notre place ?",
          a: "Non. Les campagnes sont planifiées et les créations préparées dans Checkgrow, et les publicités elles-mêmes tournent dans le Gestionnaire de publicités Meta et dans Google Ads.",
        },
        {
          q: "Toute l’équipe peut-elle travailler dans le même espace de travail ?",
          a: "Oui. Tout le monde partage un même espace de travail, avec tâches, responsables, commentaires et @mentions : le travail et les décisions restent rattachés à la campagne concernée.",
        },
        {
          q: "Checkgrow remplace-t-il notre CRM ?",
          a: "Non. Checkgrow n’est pas un CRM et ne se synchronise pas avec HubSpot ni avec Salesforce à ce jour. Les leads sont collectés dans Checkgrow, et les webhooks ou n8n peuvent les transmettre au CRM que vous utilisez.",
        },
      ],
      keywords: [
        "plateforme d’opérations marketing",
        "outil marketing tout-en-un",
        "logiciel de planification de campagnes",
        "calendrier marketing",
        "espace de travail marketing",
        "GA4 Meta Ads Google Ads au même endroit",
        "collaboration équipe marketing",
        "Checkgrow",
      ],
    },
    "brand-knowledge-ai": {
      feature: "Centre de connaissances",
      title: "Une IA qui connaît déjà votre marque.",
      metaTitle: "Un marketing IA qui connaît votre marque : une source de vérité unique pour vos contenus",
      description: "Enregistrez une fois votre entreprise, votre marque, vos produits et vos acheteurs dans le Centre de connaissances de Checkgrow. Chaque idée de campagne, publication et création en part, avec votre ton.",
      lede: "Checkgrow réunit votre entreprise, votre marque, vos produits et vos acheteurs dans un seul Centre de connaissances. Tout ce qu’il rédige pour vous, des idées de campagne aux publications et aux créations, part de cette source : le premier jet vous ressemble déjà, au lieu de ressembler à tous les autres outils d’IA.",
      builtFor: ["Responsables marketing", "Équipes contenu", "Agences multimarques"],
      worksWithLabel: "S’appuie sur",
      worksWith: [
        {
          name: "Profil de l’entreprise",
        },
        {
          name: "Marque",
        },
        {
          name: "Produits",
        },
        {
          name: "Personas",
        },
        {
          name: "ICP",
        },
        {
          name: "Cas d’usage",
        },
      ],
      inShort: [
        "Enregistrez une seule fois ce qu’il faut savoir sur votre entreprise, votre marque, vos produits et vos acheteurs, dans le Centre de connaissances.",
        "Tout ce que Checkgrow rédige, des idées de campagne aux publications et aux créations, part de cette connaissance.",
        "Le Graphe de connaissances montre comment cette connaissance est reliée aux campagnes, aux concurrents, au site web et aux leads.",
        "Les brouillons attendent votre validation, et chaque modification de la connaissance est conservée 30 jours.",
      ],
      hero: {
        steps: [
          {
            label: "Graphe de connaissances",
            caption: "La connaissance de l’entreprise reliée aux campagnes, aux concurrents et aux leads.",
          },
          {
            label: "Ton de la marque",
            caption: "Le ton et le message de marque que suit chaque brouillon.",
          },
          {
            label: "Persona",
            caption: "Un acheteur réel, décrit une fois et utilisé partout.",
          },
        ],
      },
      problem: {
        title: "Chaque prompt repart de zéro.",
        body: "Les outils d’IA généralistes ne connaissent ni votre positionnement, ni vos produits, ni les personnes à qui vous vendez. Chaque prompt réexplique donc la marque, chaque brouillon est à réécrire, et le ton dérive un peu plus à chaque fois. Plus les gens utilisent l’IA, moins le résultat vous ressemble.",
        quote: {
          text: "Ça me plaît. En gros, c’est la source de vérité que vous êtes en train de construire, et c’est tellement essentiel. Absolument. J’adore.",
          author: "Salim Sayed, WCMO",
        },
      },
      steps: [
        {
          title: "Présentez votre activité à Checkgrow une fois pour toutes",
          body: "Renseignez le Profil de l’entreprise, la Marque, les Produits, les Personas, les ICP et les Cas d’usage, ou importez des fichiers et des liens et laissez Checkgrow les rédiger pour que vous les relisiez. Un score de complétude montre ce qui manque encore, et quoi ajouter ensuite.",
          tag: "La complétude d’un coup d’œil",
        },
        {
          title: "Mettez votre ton par écrit",
          body: "Le ton et le message de marque sont réunis au même endroit, avec les mots que vous employez et ceux que vous évitez : chaque contenu suit les mêmes règles, quelle que soit la personne qui le demande.",
          tag: "Un seul ton pour chaque brouillon",
        },
        {
          title: "Décrivez les personnes à qui vous vendez",
          body: "Les personas décrivent qui sont vos acheteurs, ce dont ils ont besoin, ce qui les freine et comment ils décident : campagnes, publications et messages commerciaux s’adressent ainsi à une vraie personne.",
          tag: "Un acheteur réel, décrit une fois",
        },
        {
          title: "Voyez comment tout est relié",
          body: "Le Graphe de connaissances relie la connaissance de votre entreprise à vos campagnes, votre site web, vos concurrents et vos leads dans une seule vue : les manques et les liens sont visibles d’un coup d’œil.",
          tag: "Tout est relié à votre entreprise",
        },
      ],
      see: {
        title: "Un brouillon dans votre ton, qui attend votre validation.",
        body: "Le contenu arrive prêt à être affiné. Demandez des modifications dans la conversation à côté : la version enregistrée ne change qu’après votre validation. Rien n’est publié sans qu’une personne ait dit oui.",
        tag: "Modifications appliquées après validation",
      },
      outcomes: [
        {
          title: "Des premiers jets dans votre ton",
          body: "Tout ce que Checkgrow rédige part de votre marque, de vos produits et de vos acheteurs, pas d’un prompt vide.",
        },
        {
          title: "Une source de vérité unique",
          body: "Mettez à jour votre positionnement une fois : chaque brouillon suivant utilise la nouvelle version, pour chaque membre de l’équipe.",
        },
        {
          title: "Un contrôle total",
          body: "Rien n’est envoyé sans validation, et un historique de 30 jours montre chaque modification de votre connaissance.",
        },
      ],
      testimonial: {
        text: "Ce que je retiens surtout, c’est qu’il y a une base de données centrale, une source de vérité, ce qui est au fond l’un des plus grands enjeux de tout ce déploiement de l’IA.",
        author: "Salim Sayed, WCMO",
      },
      proof: [
        {
          slug: "barner-croatia-launch-purchases-up-160",
          company: "Barner",
          line: "A d’abord constitué le cerveau de son entreprise, puis généré 423 créations publicitaires dans son propre ton.",
        },
        {
          slug: "cuixmala-first-campaign-us-27000-booking",
          company: "Cuixmala",
          line: "A décrit 6 produits, 4 personas et 3 ICP avant que ses premières campagnes ne rapportent plus de 300 000 $ US de réservations.",
        },
      ],
      faq: [
        {
          q: "Qu’est-ce qu’une base de connaissances de marque pour l’IA ?",
          a: "C’est un endroit structuré unique qui réunit ce qui rend votre entreprise spécifique, comme le ton de votre marque, vos produits, vos personas, vos profils clients idéaux et vos cas d’usage, pour que les outils d’IA écrivent à partir de vos faits plutôt que de suppositions génériques. Dans Checkgrow, c’est le Centre de connaissances, et chaque fonctionnalité d’IA s’appuie sur lui.",
        },
        {
          q: "D’où vient la connaissance ?",
          a: "De vous. Renseignez directement les sections, ou importez des fichiers et des liens et laissez Checkgrow les rédiger : vous les relisez et les modifiez avant tout enregistrement.",
        },
        {
          q: "Que se passe-t-il quand notre positionnement change ?",
          a: "Mettez-le à jour une fois dans le Centre de connaissances, et tout ce que Checkgrow rédige ensuite utilise la nouvelle version. Un historique de 30 jours montre ce qui a changé et quand.",
        },
        {
          q: "Quelque chose sera-t-il publié sans notre accord ?",
          a: "Non. Le contenu attend que quelqu’un l’envoie, et les modifications demandées dans la conversation ne s’appliquent qu’après votre validation.",
        },
        {
          q: "Checkgrow peut-il créer des vidéos ?",
          a: "Pas encore. Creative Studio est en version bêta et crée des images et des textes. Vérifiez les images de produits générées avant de les utiliser : elles peuvent différer du produit réel.",
        },
        {
          q: "Une agence peut-elle garder plusieurs marques séparées ?",
          a: "Oui. Chaque espace de travail a son propre Centre de connaissances : la marque, les produits et les acheteurs de chaque client restent séparés.",
        },
      ],
      keywords: [
        "IA qui connaît votre marque",
        "base de connaissances de marque",
        "ton de marque IA",
        "source de vérité marketing",
        "personas IA",
        "contenu IA avec le ton de votre marque",
        "graphe de connaissances marketing",
        "Checkgrow",
      ],
    },
    "marketing-reporting": {
      feature: "Insights",
      title: "Montrez à votre conseil d’administration ce que rapporte le marketing.",
      metaTitle: "Reporting marketing pour le conseil d’administration : un seul tunnel avec GA4, Meta et Google Ads",
      description: "Réunissez Google Analytics, Meta Ads et Google Ads dans un seul tunnel, comparez chaque publicité par coût par résultat et partagez un lien de rapport en direct avec votre conseil d’administration.",
      lede: "Checkgrow réunit Google Analytics, Meta Ads et Google Ads dans Insights : un seul tunnel de la première visite à la conversion, le coût par résultat de chaque publicité et un lien de rapport en direct que vous pouvez partager avec n’importe qui. Le conseil voit les mêmes chiffres que vous, toujours à jour.",
      builtFor: ["CMO", "Responsables growth", "Fondateurs"],
      worksWithLabel: "Données issues de",
      worksWith: [
        {
          name: "Google Analytics 4",
          icon: "/features/icons/google-analytics.svg",
        },
        {
          name: "Meta Ads",
          icon: "/features/icons/meta.webp",
        },
        {
          name: "Google Ads",
          icon: "/features/icons/google_ads_ai.svg",
        },
      ],
      inShort: [
        "Visualisez un seul tunnel, de la première visite à la conversion, avec Google Analytics, Meta Ads et Google Ads.",
        "Comparez chaque publicité par dépenses et par coût par résultat, avec les gagnantes classées et expliquées.",
        "Retracez le trafic par source et par support avec le Reporting UTM, sur n’importe quelle période.",
        "Partagez un lien de rapport en direct avec votre conseil d’administration au lieu d’une présentation mensuelle.",
      ],
      hero: {
        steps: [
          {
            label: "Annonces gagnantes",
            caption: "Les publicités qui génèrent le plus de conversions, classées et expliquées.",
          },
          {
            label: "Tunnel",
            caption: "Chaque événement suivi, en haut, au milieu ou en bas du tunnel.",
          },
          {
            label: "Smart Report",
            caption: "Dépenses, CTR, coût par clic et coût par résultat, avec une synthèse.",
          },
        ],
      },
      problem: {
        title: "Trois tableaux de bord, trois réponses différentes.",
        body: "Google Analytics compte une chose, Meta une autre, Google Ads une troisième. Quand le conseil demande ce que le marketing a rapporté, la réponse exige une semaine de tableurs et déclenche encore un débat sur les chiffres qui font foi.",
        quote: {
          text: "J’ai vraiment adoré le suivi de bout en bout, parce que je pense que beaucoup d’organisations ont du mal avec ça. Nous, on utilise juste des tableurs, et c’est tellement manuel.",
          author: "Abigail Markey, Markey Marketing Co",
        },
      },
      steps: [
        {
          title: "Un seul tunnel, de la première visite à la conversion",
          body: "Insights classe chaque événement suivi en haut, au milieu ou en bas du tunnel, et montre comment les gens passent d’une étape à l’autre, sur toutes vos sources connectées.",
          tag: "Là où les visites deviennent des conversions",
        },
        {
          title: "Chaque publicité jugée sur ce qu’elle coûte",
          body: "Le Smart Report Publicité affiche les dépenses, le taux de clics, le coût par clic et le coût par résultat de chaque campagne, avec une synthèse en langage clair de ce qui a changé et de ce que cela implique.",
          tag: "Coût par clic et par résultat",
        },
        {
          title: "Les gagnantes, expliquées",
          body: "Annonces gagnantes classe les publicités qui génèrent le plus de conversions et montre la part de chacune dans les dépenses et dans les résultats, pour que le budget suive ce qui fonctionne. Un clic génère une nouvelle publicité sur le modèle de la gagnante.",
          tag: "Part des dépenses vs part des résultats",
        },
        {
          title: "Un trafic traçable",
          body: "Le Reporting UTM montre l’évolution des sessions et leur provenance, par source, support et campagne, sur la période de votre choix.",
          tag: "N’importe quelle période",
        },
      ],
      see: {
        title: "Partagez-le avec un lien, pas avec une présentation.",
        body: "Chaque vue d’Insights a un lien de rapport en direct : le conseil, un client ou un investisseur voit les mêmes chiffres que vous, toujours à jour, sans se connecter ni attendre le dossier mensuel.",
        tag: "Un lien en direct pour le conseil",
      },
      outcomes: [
        {
          title: "Un seul tunnel",
          body: "De la première visite à la conversion, dans une seule vue qui réunit vos sources connectées.",
        },
        {
          title: "Les publicités qui méritent leur budget",
          body: "Coût par résultat et part des conversions pour chaque publicité, avec les gagnantes classées.",
        },
        {
          title: "Des rapports que le conseil peut ouvrir",
          body: "Un lien de rapport en direct au lieu d’une présentation mensuelle, avec toujours les chiffres actuels.",
        },
      ],
      testimonial: {
        text: "J’aime le fait que ce soit basé sur les événements. C’est piloté par les événements plutôt que par les métriques. C’est vraiment, vraiment utile.",
        author: "Sophia Ahrel",
      },
      proof: [
        {
          slug: "boont-30x-cheaper-meta-purchases",
          company: "Boont",
          line: "Insights a repéré 294 paiements sur le site que Meta ne voyait pas, puis a classé la nouvelle annonce gagnante.",
        },
        {
          slug: "wespa-2028-leads-in-a-month",
          company: "WESPA",
          line: "A lu son tunnel tous canaux confondus : 26,8 % des visiteurs engagés ont converti.",
        },
      ],
      faq: [
        {
          q: "Comment présenter le ROI marketing au conseil d’administration ?",
          a: "Réunissez vos outils d’analytics et vos plateformes publicitaires dans une seule vue, présentez le tunnel de la première visite à la conversion et le coût par résultat de chaque campagne, et partagez le tout sous forme de lien en direct plutôt que de présentation figée. Checkgrow Insights le fait avec Google Analytics, Meta Ads et Google Ads.",
        },
        {
          q: "Quelles sources de données alimentent Insights ?",
          a: "Google Analytics 4, Meta Ads et Google Ads. LinkedIn Ads est annoncé comme bientôt disponible.",
        },
        {
          q: "Puis-je partager un rapport avec quelqu’un qui n’utilise pas Checkgrow ?",
          a: "Oui. Chaque vue d’Insights a un lien de rapport en direct que vous pouvez envoyer à n’importe qui, et qui affiche toujours les chiffres actuels.",
        },
        {
          q: "Puis-je choisir la période ?",
          a: "Oui. Chaque vue d’Insights a sa période, et les chiffres se mettent à jour en conséquence.",
        },
        {
          q: "Pourquoi les chiffres de Meta ne correspondent-ils pas à ceux de Google Analytics ?",
          a: "Chaque plateforme compte les conversions à sa manière. Insights les affiche côte à côte : vous pouvez les comparer sans additionner des chiffres qui mesurent des événements différents.",
        },
        {
          q: "Checkgrow fait-il de l’attribution multi-touch ?",
          a: "Non. Il présente ce que mesure chaque plateforme et montre d’où vient votre trafic, mais il ne construit pas de modèle d’attribution multi-touch.",
        },
      ],
      keywords: [
        "reporting marketing pour le conseil d’administration",
        "rapport ROI marketing",
        "tableau de bord GA4 Meta Ads Google Ads",
        "coût par résultat",
        "annonces gagnantes",
        "reporting UTM",
        "rapport marketing en direct",
        "Checkgrow Insights",
      ],
    },
  },
};
