import type { Localized } from "../../types";
import type { tutorials as source } from "../en/tutorials";

export const tutorials: Localized<typeof source> = {
  items: [
    {
      slug: "sales-outreach",
      title: "De la recherche d’entreprises à la prospection LinkedIn",
      description: "Apprenez à trouver les entreprises pertinentes, à identifier les décideurs et à préparer une prospection personnalisée avec la suite Ventes de Checkgrow.",
      category: "Sales",
      publishedAt: "2026-10-01",
      cover: "/tutorials/sales-outreach/cover.webp",
      introduction: "Une bonne prospection commence avant le premier message. Dans ce tutoriel, suivez un vrai processus dans l’espace de travail Drooms : servez-vous des connaissances de votre entreprise pour trouver les comptes pertinents, les attribuer à votre équipe et construire vos messages autour des personnes que vous voulez toucher.",
      prerequisites: "Vérifiez vos profils clients idéaux dans le Centre de connaissances et connectez le compte LinkedIn de chaque commercial dans Intégrations.",
      steps: [
        {
          id: "define-your-audience",
          title: "Partez de la bonne audience",
          body: "Ouvrez vos profils clients idéaux (ICP) dans le Centre de connaissances. Vérifiez les secteurs, les régions, la taille d’entreprise et les intitulés de poste ciblés. Ces informations orientent les entreprises et les décideurs que Checkgrow recherche : assurez-vous qu’elles sont justes avant de constituer une liste.",
        },
        {
          id: "find-and-track",
          title: "Trouvez et suivez les entreprises pertinentes",
          body: "Dans Targets, ouvrez Search et choisissez un ICP. Examinez les informations sur l’entreprise, son site web et son profil LinkedIn, puis sélectionnez les comptes qui vous intéressent et choisissez Track. Servez-vous de la liste suivie pour filtrer les comptes et ouvrir la recherche et les décideurs d’une entreprise.",
        },
        {
          id: "assign-your-team",
          title: "Donnez un périmètre à chaque commercial",
          body: "Dans Mission Control, configurez l’attribution automatique par secteur et par région. Ouvrez une entreprise suivie pour passer en revue ses décideurs. Si un rôle manque, ajustez les postes recherchés et utilisez Find people. Vos commerciaux peuvent ensuite travailler sur les cibles qui leur sont attribuées dans Prospection.",
        },
        {
          id: "teach-the-brain",
          title: "Apprenez au Brain votre façon de communiquer",
          body: "Ouvrez le profil du commercial dans Prospection. Ajoutez des enseignements utiles et des exemples de conversations réussies, puis définissez la personnalité, la langue et le style. Testez commentaires, premiers messages et relances dans le Message playground. Ce sont des brouillons d’entraînement : modifiez-les et donnez votre avis pour montrer au Brain ce qui sonne juste.",
        },
        {
          id: "review-outreach",
          title: "Relisez votre prospection avant l’envoi",
          body: "Vérifiez vos limites de connexion, vos réglages de prospection « warm » et vos règles de validation. L’enregistrement montre une séquence qui va de la demande de connexion à un commentaire sur un post pertinent, puis à un message. Gardez la validation activée tant que vous affinez votre approche. Dans la file de prospection réelle, valider un commentaire ou un message l’envoie, contrairement aux brouillons d’entraînement du playground.",
        },
        {
          id: "daily-routine",
          title: "Faites de la relecture un rituel quotidien",
          body: "Revenez dans Prospection pour relire les brouillons, retoucher la formulation ou donner votre avis quand un message tombe à côté. Consultez l’activité des cibles pour voir ce qui s’est passé, et utilisez la vue d’ensemble Sales Force pour voir les cibles attribuées à l’équipe et son activité. Continuez d’entraîner le Brain à mesure que vous découvrez ce qui fonctionne auprès de votre audience.",
        },
      ],
      videos: [
        {
          id: "quick-walkthrough",
          title: "La présentation courte",
          description: "Tout le parcours en un coup d’œil : ICP, suivi des entreprises, le Brain et votre relecture quotidienne de la prospection.",
          src: "/tutorials/sales-outreach/sales-overview.mp4",
          type: "video/mp4",
          poster: "/tutorials/sales-outreach/overview-poster.webp",
          captions: "/tutorials/sales-outreach/overview.en.vtt",
          durationSeconds: 396,
          width: 1280,
          height: 746,
        },
        {
          id: "full-walkthrough",
          title: "La présentation complète",
          description: "Suivez l’explication détaillée, écran par écran, avec plus de temps consacré à la configuration, au ciblage et aux réglages de prospection.",
          src: "/tutorials/sales-outreach/sales-full.webm",
          type: "video/webm",
          poster: "/tutorials/sales-outreach/full-poster.webp",
          captions: "/tutorials/sales-outreach/full.en.vtt",
          durationSeconds: 857,
          width: 1280,
          height: 746,
        },
      ],
      takeaway: "Définissez l’audience une fois, donnez à chaque commercial un périmètre clair et relisez le message avant de l’envoyer. L’objectif : une méthode commerciale reproductible, fondé sur les connaissances de votre entreprise, et non un nouveau brief à chaque conversation.",
    },
  ],
};
