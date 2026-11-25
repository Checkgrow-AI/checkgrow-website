import type { Localized } from "../../types";
import type { demo as source } from "../en/demo";

export const demo: Localized<typeof source> = {
  meta: {
    title: "Mit uns sprechen | Checkgrow",
    description:
      "Buchen Sie eine 30-minütige Checkgrow-Demo. Danach ist Ihr Unternehmen eingerichtet, die Plattform einsatzbereit und Ihre kostenlose KI-Growth-Strategie fertig – plus Wettbewerbsanalyse, Website-Review und 30 Tagen kostenlosem Zugang.",
    schemaName: "Mit Checkgrow sprechen",
  },
  page: {
    eyebrow: "Mit uns sprechen",
    title: "Erleben Sie Ihre Growth-Engine in 30 Minuten.",
    lead: "Eine Live-Session am Beispiel Ihres eigenen Unternehmens, Ihrer Wettbewerber und Ihrer Website. Danach ist Checkgrow eingerichtet, und Sie haben einen klaren Plan für die nächsten Schritte.",
    perksLabel: "Was Ihnen die Demo bringt",
    callResults: [
      "Ein 30-minütiger Deep Dive in Ergebnisse",
      "Sofortiges Onboarding, kostenlose KI-Strategie",
      "Danach direkt startklar",
    ],
    reassurance: "Keine Kreditkarte nötig · Ihre Daten bleiben Ihre",
    platformTitle: "Bei Checkgrow außerdem inklusive",
    platformPerks: [
      {
        title: "Vollständige Wettbewerbsanalyse",
        body: "Kanäle, Botschaften und Kampagnen Ihrer Wettbewerber, recherchiert.",
      },
      {
        title: "Review von Website und Conversion-Flow",
        body: "Wo Besucher abspringen und was Sie zuerst beheben sollten.",
      },
      {
        title: "30 Tage kostenloser Zugang",
        body: "Testen Sie alles mit Ihrem Team. Keine Kreditkarte nötig.",
      },
    ],
  },
  founders: {
    title: "Sprechen Sie mit den Gründern",
    body: "Wir vergeben einige exklusive Plätze für ein persönliches Onboarding.",
    alt: "{name}, Mitgründer von Checkgrow",
  },
  form: {
    stepOf: "Schritt {n} von {total} · {name}",
    phases: {
      questions: "Demo anpassen",
      time: "Gespräch buchen",
    },
    phaseLength: {
      questions: "30 Sek.",
      time: "{n} Min.",
    },
    intro: {
      questions:
        "Ihre Antworten bereiten Ihr Onboarding vor: Wir erstellen Ihren Wettbewerbsscan, Ihr Website-Review und Ihre KI-Strategie schon vor dem Termin.",
      time: "Wählen Sie den Termin, der Ihnen am besten passt. Einladung und Videolink kommen sofort per E-Mail.",
    },
    continue: "Weiter",
    back: "Zurück",
    challenges: {
      title: "Was möchten Sie zuerst angehen?",
      /* the dropdown's empty choice */
      placeholder: "Ihr wichtigstes Ziel auswählen",
      /* keyed by the id sent to the API; the first option is the general one */
      labels: {
        "growth-ops": "Mein Growth-Marketing effizienter aufstellen",
        leads: "Mehr qualifizierte Leads gewinnen",
        ads: "CAC senken mit besseren Google-, Meta- oder LinkedIn-Anzeigen",
        conversion: "Mehr Website-Besucher zu Leads machen",
        outreach: "Meinen Sales-Outreach verbessern",
        content: "Mehr und bessere Inhalte und Creatives erstellen",
        geo: "Besser ranken bei Google und in der KI-Suche (SEO und GEO)",
        agents: "KI-Agenten sicher ins Team bringen",
      },
    },
    spend: {
      title: "Wie viel geben Sie monatlich für Anzeigen aus?",
      monthly: "Monatliches Werbebudget",
      around: "Etwa",
      perMonth: "/ Monat",
      less: "Weniger",
      more: "Mehr",
      valueText: "{amount} pro Monat",
      noAds: "Noch keine aktiven Anzeigen",
    },
    contact: {
      title: "Wohin dürfen wir Ihre Einladung senden?",
      email: "Geschäftliche E-Mail",
      emailPlaceholder: "sie@unternehmen.de",
      phone: "Telefonnummer",
      phonePlaceholder: "+49 151 23456789",
      firstName: "Vorname",
      lastName: "Nachname",
      website: "Unternehmenswebsite",
      websitePlaceholder: "unternehmen.de",
      consent: {
        before: "Mit dem Absenden dieses Formulars stimmen Sie zu, vom Checkgrow-Team kontaktiert zu werden, und akzeptieren unsere",
        link: "Datenschutzerklärung",
        after: ".",
      },
      submit: "Senden",
      sending: "Wird gesendet …",
    },
    errors: {
      email: "Geben Sie eine gültige geschäftliche E-Mail-Adresse ein",
      companyEmail: "Geben Sie Ihre geschäftliche E-Mail-Adresse an",
      phoneRequired: "Geben Sie Ihre Telefonnummer an",
      phoneInvalid: "Geben Sie eine gültige Telefonnummer ein, z. B. +49 151 23456789",
      firstName: "Geben Sie Ihren Vornamen an",
      lastName: "Geben Sie Ihren Nachnamen an",
      websiteRequired: "Geben Sie Ihre Unternehmenswebsite an",
      websiteInvalid: "Geben Sie eine Website wie unternehmen.de ein",
    },
    booking: {
      taken: "Dieser Termin wurde gerade vergeben. Bitte wählen Sie einen anderen.",
      tooMany: "Zu viele Versuche. Bitte versuchen Sie es in ein paar Minuten erneut.",
      failed: "Wir konnten diesen Termin nicht buchen. Bitte versuchen Sie es erneut.",
    },
    time: {
      /* heading of the calendar step: invite the visitor to finish */
      title: "Letzter Schritt: Buchen Sie Ihr Gespräch mit uns",
      loading: "Verfügbare Termine werden geladen",
      loadError: "Der Kalender konnte nicht geladen werden.",
      loadErrorHint: "Ihre Antworten bleiben hier gespeichert. Versuchen Sie es gleich noch einmal.",
      retry: "Erneut versuchen",
      confirm: "Gespräch buchen",
      confirming: "Wird gebucht …",
      tailoredFor: "Zugeschnitten auf",
      edit: "Bearbeiten",
      noAds: "Keine aktiven Anzeigen",
      spendPerMonth: "{amount} / Monat",
      previousMonth: "Vorheriger Monat",
      nextMonth: "Nächster Monat",
      dayUnavailable: "{day}, nicht verfügbar",
      zone: "Zeiten in Ihrer Zeitzone: {zone}",
      timesOn: "Termine am {day}",
    },
  },
  confirmation: {
    meta: {
      title: "Demo bestätigt | Checkgrow",
      description: "Ihre Checkgrow-Demo ist gebucht.",
    },
    eyebrow: "Demo bestätigt",
    titleNamed: "Ihr Termin steht, {name}.",
    title: "Ihre Demo ist gebucht.",
    thanks: "Vielen Dank für Ihre Zeit. Wir freuen uns darauf, Ihnen Checkgrow mit Ihrem eigenen Unternehmen zu zeigen.",
    inviteTo: {
      before: "Die Kalendereinladung und der Meet-Link sind unterwegs an",
      after: ".",
    },
    inviteGeneric: "Schauen Sie in Ihr Postfach: Die Kalendereinladung und der Google-Meet-Link sind unterwegs.",
    prepTitle: "Vor dem Termin bereiten wir vor",
    prep: {
      competitors: {
        title: "Wettbewerbsscan",
        body: "Mit wem Sie im Wettbewerb stehen und wie sich diese Unternehmen vermarkten.",
        bodyNamed: "Wer mit {site} im Wettbewerb steht und wie sich diese Unternehmen vermarkten.",
      },
      website: {
        title: "Review von Website und Conversion",
        body: "Wo Besucher abspringen und was Sie zuerst beheben sollten.",
      },
      strategy: {
        title: "Ihre KI-Growth-Strategie",
        body: "Ein erster Plan und Report, bereit zum gemeinsamen Durchgehen.",
      },
    },
    exploreFeatures: "Funktionen entdecken",
    backHome: "Zurück zur Startseite",
  },
};
