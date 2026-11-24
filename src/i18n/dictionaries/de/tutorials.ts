import type { Localized } from "../../types";
import type { tutorials as source } from "../en/tutorials";

export const tutorials: Localized<typeof source> = {
  items: [
    {
      slug: "sales-outreach",
      title: "Von der Unternehmensrecherche zum LinkedIn-Outreach",
      description: "So finden Sie relevante Unternehmen, identifizieren Entscheider und bereiten mit der Sales-Suite von Checkgrow personalisierten Outreach vor.",
      category: "Sales",
      publishedAt: "2026-10-01",
      cover: "/tutorials/sales-outreach/cover.webp",
      introduction: "Guter Outreach beginnt vor der ersten Nachricht. In diesem Tutorial folgen Sie einem echten Workflow im Drooms-Workspace: Sie nutzen Ihr Unternehmenswissen, um relevante Accounts zu finden, weisen sie Ihrem Team zu und richten Nachrichten an den Menschen aus, die Sie erreichen wollen.",
      prerequisites: "Prüfen Sie Ihre idealen Kundenprofile im Wissenszentrum und verbinden Sie unter „Integrationen“ den LinkedIn-Account jedes Vertrieblers.",
      steps: [
        {
          id: "define-your-audience",
          title: "Mit der richtigen Zielgruppe starten",
          body: "Öffnen Sie Ihre idealen Kundenprofile (ICPs) im Wissenszentrum. Prüfen Sie Branchen, Regionen, Unternehmensgröße und Ziel-Jobtitel. Diese Angaben bestimmen, nach welchen Unternehmen und Entscheidern Checkgrow sucht. Stellen Sie sie also richtig ein, bevor Sie eine Liste aufbauen.",
        },
        {
          id: "find-and-track",
          title: "Relevante Unternehmen finden und verfolgen",
          body: "Öffnen Sie unter „Zielkunden“ die Suche und wählen Sie einen ICP. Prüfen Sie Unternehmensinformationen, Website und LinkedIn-Profil, wählen Sie dann die gewünschten Accounts aus und klicken Sie auf „Tracken“. In der Liste der verfolgten Unternehmen filtern Sie Accounts und öffnen die Recherche und die Entscheider eines Unternehmens.",
        },
        {
          id: "assign-your-team",
          title: "Jedem Vertriebler einen Fokus geben",
          body: "Richten Sie in Mission Control die automatische Zuweisung nach Branche und Region ein. Öffnen Sie ein verfolgtes Unternehmen, um seine Entscheider zu prüfen. Fehlt eine Rolle, passen Sie die Positionen an und nutzen Sie „Personen finden“. Ihre Vertriebler arbeiten dann in Outreach mit den ihnen zugewiesenen Zielpersonen.",
        },
        {
          id: "teach-the-brain",
          title: "Dem Brain beibringen, wie Sie kommunizieren",
          body: "Öffnen Sie in Outreach das Profil des Vertrieblers. Ergänzen Sie hilfreiche Lektionen und Beispiele erfolgreicher Gespräche und legen Sie dann Persönlichkeit, Sprache und Stil fest. Testen Sie Kommentare, erste Nachrichten und Follow-ups in der Nachrichten-Spielwiese. Das sind Übungsentwürfe: Bearbeiten Sie sie und geben Sie Feedback, um dem Brain zu zeigen, was richtig klingt.",
        },
        {
          id: "review-outreach",
          title: "Outreach prüfen, bevor er verschickt wird",
          body: "Prüfen Sie Ihre Kontaktlimits, die Einstellungen für warmen Outreach und die Freigaberegeln. Die Aufzeichnung zeigt eine Abfolge von der Kontaktanfrage über einen passenden Kommentar zu einem Beitrag bis zur Nachricht. Lassen Sie die Freigabe aktiv, solange Sie Ihren Ansatz verfeinern. In der Live-Outreach-Warteschlange wird ein Kommentar oder eine Nachricht mit der Freigabe gesendet – anders als die Übungsentwürfe in der Spielwiese.",
        },
        {
          id: "daily-routine",
          title: "Die Prüfung zur täglichen Routine machen",
          body: "Kehren Sie zu Outreach zurück, um Entwürfe zu prüfen, die Formulierung anzupassen oder Feedback zu geben, wenn eine Nachricht danebenliegt. Unter der Aktivität der Zielpersonen sehen Sie, was passiert ist, und die Übersicht „Vertriebsteam“ zeigt die zugewiesenen Zielpersonen und Aktivitäten des Teams. Bringen Sie dem Brain weiter bei, was bei Ihrer Zielgruppe funktioniert, während Sie es selbst herausfinden.",
        },
      ],
      videos: [
        {
          id: "quick-walkthrough",
          title: "Der kurze Rundgang",
          description: "Der komplette Ablauf auf einen Blick: ICPs, Unternehmens-Tracking, das Brain und Ihre tägliche Outreach-Prüfung.",
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
          title: "Der ausführliche Rundgang",
          description: "Die längere Erklärung Bildschirm für Bildschirm, mit mehr Zeit für Einrichtung, Targeting und Outreach-Einstellungen.",
          src: "/tutorials/sales-outreach/sales-full.webm",
          type: "video/webm",
          poster: "/tutorials/sales-outreach/full-poster.webp",
          captions: "/tutorials/sales-outreach/full.en.vtt",
          durationSeconds: 857,
          width: 1280,
          height: 746,
        },
      ],
      takeaway: "Definieren Sie die Zielgruppe einmal, geben Sie jedem Vertriebler einen klaren Fokus und prüfen Sie jede Nachricht, bevor Sie sie senden. Das Ziel ist ein wiederholbarer Vertriebs-Workflow auf Basis des Wissens Ihres Unternehmens, kein neues Briefing für jedes Gespräch.",
    },
  ],
};
