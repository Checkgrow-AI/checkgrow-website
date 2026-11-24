import type { Localized } from "../../types";
import type { news as source } from "../en/news";

export const news: Localized<typeof source> = {
  listing: {
    meta: {
      title: "Checkgrow News | Erfolgsgeschichten, Tutorials und Security-Updates",
      description: "Erfolgsgeschichten, praxisnahe Tutorials und Security-Updates von Checkgrow. Sehen Sie, wie Teams mit der Plattform wachsen und welche Workflows dahinterstehen.",
    },
    name: "Checkgrow News",
    heading: "News",
    introLead: "Einblicke in Checkgrow.",
    introBody: "Praxisnahe Anleitungen, Neues von der Plattform und die Arbeit hinter Ihrem Workspace.",
    filterLabel: "News nach Kategorie filtern",
    count: { one: "{n} Artikel", other: "{n} Artikel" },
  },
  article: {
    metaTitle: "{title} | Checkgrow News",
    breadcrumbLabel: "Seitenpfad",
    breadcrumbHome: "Startseite",
    breadcrumbNews: "News",
    allNews: "Alle News",
    allStories: "Alle Erfolgsgeschichten",
    byline: "Von Checkgrow · {detail}",
    guidedVideos: { one: "{n} geführtes Video", other: "{n} geführte Videos" },
    securityByline: "Security-Update",
    contentsLabel: "Auf dieser Seite",
    faqLink: "FAQ",
    bookDemo: "Demo buchen",
  },
  tutorial: {
    contents: { shortVideo: "Kurzer Rundgang", steps: "Schritt für Schritt", fullVideo: "Ausführlicher Rundgang" },
    beforeYouBegin: "Bevor Sie beginnen.",
    stepsTitle: "Der Workflow, Schritt für Schritt",
    recordingNote: "Aufgezeichnet im Drooms-Workspace. Ihre Ansichten können leicht abweichen, da sich Checkgrow weiterentwickelt.",
    takeawayTitle: "Bauen Sie auf dem Gelernten auf",
  },
  video: {
    captionsLabel: "Englisch (automatisch erstellt)",
    unsupported: "Ihr Browser unterstützt keine eingebetteten Videos. Nutzen Sie den Videolink unten.",
    play: "{title} abspielen",
    playVideo: "Video abspielen",
    error: { before: "Die Wiedergabe konnte nicht starten. Nutzen Sie die Player-Steuerung oder ", link: "öffnen Sie das Video direkt", after: "." },
    watch: "{title} ansehen",
  },
  story: {
    takeaways: "Das Wichtigste in Kürze",
    about: "Über {name}",
    featuresUsed: "Genutzte Checkgrow-Funktionen",
    labelSeparator: ": ",
    faq: "Häufig gestellte Fragen",
  },
  categoryLabels: {
    all: "Alle News",
    "success-stories": "Erfolgsgeschichten",
    tutorials: "Tutorials",
    "security-releases": "Security-Updates",
  },
  readLink: {
    "success-stories": "Erfolgsgeschichte lesen",
    tutorials: "Tutorial ansehen",
    "security-releases": "Security-Update lesen",
  },
  security: {
    title: "Stärkerer Schutz für Ihren vernetzten Workspace",
    description: "Ein Security-Update aus dem Oktober zu Kontozugriff, Unternehmensdaten, verbundenen Zugangsdaten und den Prüfungen hinter unseren jüngsten Plattform-Releases.",
    intro: "Ihr Workspace verbindet Unternehmenswissen, Dateien und Business-Tools. Dieses Update erläutert die Sicherheitsmaßnahmen, die wir in unseren jüngsten Releases verstärkt haben, was jede davon bewirkt und welche Nachweise dahinterstehen.",
    summary: {
      title: "Dieses Update auf einen Blick",
      publishedLabel: "Veröffentlicht",
      items: [
        { label: "Abgedeckter Release-Zeitraum", value: "28. September bis 1. Oktober 2026" },
        { label: "Nachweisgrundlage", value: "Internes Security-Review, gezielte Tests auf Staging und Aufzeichnungen der Produktions-Releases" },
        { label: "Zweck", value: "Ein öffentlicher Überblick für Kunden und für Security-Reviews im Rahmen eines Proof of Concept" },
      ],
    },
    contents: { scope: "Umfang der Prüfung", review: "Ihr Security-Review" },
    scope: {
      title: "Was diese Zusammenfassung abdeckt",
      items: [
        { label: "Verfasser und Nachweise.", detail: "Dies ist eine von Checkgrow verfasste Zusammenfassung interner Sicherheitsarbeit, gezielter Tests und Aufzeichnungen der Produktions-Releases, aktuell für den oben genannten Zeitraum." },
        { label: "Umfang der Prüfung.", detail: "Die zugrunde liegende Prüfung untersuchte am 28. September 2026 die Staging-Umgebung. Sie umfasste ausgewählte Maßnahmen als Stichprobe; Penetrationstests der Produktionsumgebung lagen außerhalb ihres Umfangs." },
        { label: "Grenzen der Zusicherung.", detail: "Dies ist kein unabhängiger Penetrationstest-Bericht, keine Bestätigung durch Dritte und keine Compliance-Zertifizierung. Es begründet keine SOC-2- oder HIPAA-Zertifizierung und garantiert nicht, dass jede Schwachstelle beseitigt wurde." },
        { label: "Verantwortungsvolle Offenlegung.", detail: "Dieser Überblick beschreibt umgesetzte Schutzmaßnahmen, ohne detaillierte Befunde, interne Konfigurationen oder betriebliche Informationen offenzulegen." },
      ],
    },
    contact: {
      title: "Sie planen ein Security-Review oder einen POC?",
      body: "Teilen Sie uns Ihre Onboarding-Checkliste und die Zusicherungen mit, die Ihre Organisation benötigt. Unser Team erläutert die für Ihren Anwendungsfall relevanten Maßnahmen und bespricht Umfang und Verfügbarkeit unterstützender Nachweise. Wenn Sie eine unabhängige Prüfung benötigen, bitten Sie uns, diese Anforderung gesondert zu bestätigen.",
      link: "Ihre Sicherheitsanforderungen besprechen",
    },
    sections: [
      {
        id: "account-access", title: "Authentifizierung und Sitzungskontrollen", shortTitle: "Kontozugriff",
        introduction: "Der Kontoschutz verbindet Identitätsprüfung, Unternehmensrichtlinien und Kontrollen über aktive Sitzungen.",
        changes: [
          { label: "MFA per Authenticator-App", detail: "Zeitbasierte Einmalpasswörter (TOTP) ergänzen die Anmeldung um einen zweiten Prüfschritt, mit Wiederherstellungscodes für die Kontowiederherstellung." },
          { label: "Serverseitig durchgesetzte Unternehmensrichtlinie", detail: "Administratoren können MFA für ihr Unternehmen verpflichtend machen. Geschützte Aktionen prüfen die erforderliche Authentifizierungsstufe auf dem Server, nicht nur in der Oberfläche." },
          { label: "Strengere Passwortprüfung", detail: "Passwörter müssen mindestens 12 Zeichen lang sein und Groß- und Kleinbuchstaben, Ziffern und Sonderzeichen enthalten." },
        ],
        table: {
          caption: "Sitzungskontrollen in diesen Releases",
          columns: ["Kontrolle", "Funktion"],
          rows: [
            ["Überall abmelden", "Ermöglicht es Nutzern, ihre Sitzungen auf allen Geräten zu beenden."],
            ["Offboarding von Mitgliedern", "Beendet Sitzungen, wenn ein Mitglied entfernt wird."],
            ["Sitzungslimits pro Unternehmen", "Ermöglicht Unternehmen, Sitzungen einzuschränken, ergänzt durch kurzlebige Zugriffstoken und eine verbesserte Sitzungserneuerung."],
          ],
        },
        note: "MFA ist verfügbar und pro Unternehmen konfigurierbar. Sie ist nicht automatisch für jeden Workspace aktiviert.",
      },
      {
        id: "company-data", title: "Autorisierung und Isolierung von Unternehmensdaten", shortTitle: "Unternehmensdaten",
        introduction: "Angemeldet zu sein reicht nicht, um auf Unternehmensressourcen zuzugreifen. Die geprüften Pfade kontrollieren zusätzlich die Berechtigungen des Aufrufers für den jeweiligen Workspace.",
        changes: [
          { label: "Verifizierte Identität des Aufrufers", detail: "Geschützte Anwendungsvorgänge authentifizieren den Aufrufer, bevor sie die Unternehmensmitgliedschaft und den Zugriff auf Ressourcen prüfen." },
          { label: "Berechtigungen pro Unternehmen", detail: "Zugriffskontrollen auf Server- und Datenbankebene beschränken die geprüften Ressourcen auf berechtigte Nutzer im jeweiligen Unternehmen." },
          { label: "Privater Dateizugriff", detail: "Anhänge von Aufgaben sind an Aufgaben- und Unternehmensberechtigungen gebunden. Temporäre Uploads für Agenten sind nur für die hochladende Person zugänglich." },
          { label: "Eingeschränkte interne Vorgänge", detail: "Hintergrundvorgänge haben eigene Zugriffsanforderungen, statt auf gewöhnlichen anonymen oder Endnutzer-Zugriff zu setzen." },
        ],
        note: "Diese Änderungen stärken die geprüften Maßnahmen. Die Prüfung umfasste ausgewählte Pfade als Stichprobe; sie war kein vollständiger Test aller Plattformvorgänge.",
      },
      {
        id: "connected-services", title: "Verschlüsselung von Zugangsdaten und Schutz von Integrationen", shortTitle: "Verbundene Dienste",
        introduction: "Verbundene Dienste brauchen Zugangsdaten, um zu funktionieren. Diese Releases verbessern, wie diese Zugangsdaten gespeichert, offengelegt und genutzt werden.",
        changes: [
          { label: "Authentifizierte Verschlüsselung im Ruhezustand", detail: "AES-256-GCM schützt die von diesem Release erfassten gespeicherten Zugangsdaten für Integrationen, darunter Google Ads, Google Analytics, Meta, LinkedIn und Notion." },
          { label: "Weniger Offenlegung im Browser", detail: "Sensible Verbindungsdaten bleiben aus normalen browserseitigen Antworten heraus. Webhook-Secrets liegen in einem geschützten Secret-Speicher." },
          { label: "Administrative Kontrolle der Ziele", detail: "Ziele für CRM-Webhooks werden über Kontrollen verwaltet, die nur Administratoren zugänglich sind." },
          { label: "Prüfung ausgehender Adressen", detail: "Vor der Webhook-Zustellung werden aufgelöste Adressen geprüft. Das hilft, Anfragen auf zulässige externe Ziele zu beschränken." },
        ],
      },
      {
        id: "data-lifecycle", title: "Aufbewahrung, Löschung und Speicherung von KI-Antworten", shortTitle: "Datenlebenszyklus",
        introduction: "Geplante Prüfungen zu Aufbewahrung und Löschung machen den Lebenszyklus betrieblicher Datensätze klarer.",
        changes: [
          { label: "Geplante Bereinigung von Logs", detail: "Ein wiederkehrender Löschprozess wendet die unten genannten Aufbewahrungsfristen auf die erfassten betrieblichen Datensätze an." },
          { label: "Entfernung der Identität bei Kontolöschung", detail: "Wird ein Konto gelöscht, werden identifizierende Kontodaten aus den aufbewahrten Aktivitätslogs entfernt." },
          { label: "Nachweis bei Unternehmenslöschung", detail: "Die Löschung eines Unternehmens umfasst Prüfschritte, eine Bestätigungs-E-Mail und ein von Checkgrow erstelltes PDF-Zertifikat, das beschreibt, was entfernt wurde." },
          { label: "Kontrolle des Antwortstatus beim Anbieter", detail: "Anfragen an die OpenAI Responses API sind so konfiguriert, dass der Antwortstatus nicht beim Anbieter gespeichert wird." },
        ],
        table: {
          caption: "Aufbewahrung der von diesem Update erfassten betrieblichen Datensätze",
          columns: ["Datensatztyp", "Aufbewahrungsfrist"],
          rows: [
            ["Aktivitätslogs", "12 Monate, danach geplante Löschung."],
            ["Fehlerlogs", "12 Monate, danach geplante Löschung."],
            ["KI-Nutzungsdaten", "24 Monate, danach geplante Löschung."],
          ],
        },
        note: "Diese Fristen beschreiben nicht jede Kategorie von Kundendaten. Die Einstellung beim Anbieter ist keine Zusage einer Null-Aufbewahrung bei allen KI-Diensten; für deren Verarbeitung gelten weiterhin die Richtlinien der Anbieter und die jeweiligen Vereinbarungen. Auch unsere Datenschutzerklärung und unsere Nutzungsbedingungen haben wir aktualisiert, damit sie unsere Praxis genauer beschreiben.",
      },
      {
        id: "ongoing-checks", title: "Härtung der Anwendung und Sicherheitsprüfung", shortTitle: "Laufende Prüfungen",
        introduction: "Präventive Prüfungen im Entwicklungsprozess ergänzen gezielte Tests und die Verifizierung von Releases.",
        changes: [
          { label: "Monitoring von Abhängigkeiten und Audit-Gates", detail: "Automatisierte Prüfungen erkennen bekannte Sicherheitshinweise zu Paketen und helfen, Sicherheitsrückschritte bei Abhängigkeiten während der Entwicklung zu verhindern." },
          { label: "Statische Sicherheitsanalyse", detail: "Prüfungen des Quellcodes suchen nach sicherheitsrelevanten Mustern, bevor Änderungen veröffentlicht werden." },
          { label: "Sicherheits-Header im Browser", detail: "HSTS, Frame-Beschränkungen, Schutz vor MIME-Sniffing, Referrer-Policy und Permissions-Policy verbessern den browserseitigen Umgang mit Antworten der Anwendung." },
          { label: "Tests von Rollen und Unternehmensgrenzen", detail: "Die Prüfung auf Staging nutzte Quellcode-Reviews, automatisierte Analysen und gezielte Tests über verschiedene Nutzerrollen und Workspaces hinweg. Die Befunde flossen in Folgeänderungen und Regressionstests ein." },
          { label: "Verifizierung der Produktions-Releases", detail: "Release-Aufzeichnungen bestätigen, dass die hier beschriebenen Änderungen ausgeliefert wurden. Ein erfolgreiches Deployment ist nicht gleichbedeutend mit einem unabhängigen Penetrationstest jedes Produktionspfads." },
        ],
      },
    ],
  },
};
