import type { Localized } from "../../types";
import type { sales as source } from "../en/sales";

export const sales: Localized<typeof source> = {
  meta: {
    title: "Checkgrow Sales | Das KI-Sales-Brain für Go-to-Market-Teams",
    description:
      "Checkgrow Sales baut aus Ihren eigenen Gesprächen ein KI-Sales-Brain: nach ICP priorisierte Listen, freigegebener LinkedIn-Outreach in der Stimme jedes Vertrieblers, vorsortierte Antworten und ein Verlauf, den die Führung jederzeit nachvollziehen kann.",
  },
  nowrap: "Go-to-Market",
  hero: {
    eyebrow: "Checkgrow Sales",
    title: "Die besten Go-to-Market-Teams verkaufen mit Checkgrow.",
    intro: "Ein KI-Sales-Brain, das lernt, wie Ihr Unternehmen verkauft, konsistenten Outreach über alle Vertriebler skaliert und jedes Gespräch in einem Verlauf festhält, den Ihre Führung jederzeit nachvollziehen kann.",
    bookDemo: "Demo buchen",
    seeHow: "So funktioniert es",
  },
  film: {
    label: "Rundgang durch Checkgrow Sales",
    watchLabel: "Rundgang durch Checkgrow Sales mit Ton ansehen",
    watch: "Mit Ton ansehen",
    length: "3 Min.",
  },
  proof: {
    label: "Was Go-to-Market-Verantwortliche sagen",
    quote: "„{quote}“",
    byline: "{role}, {company}",
  },
  overview: {
    eyebrow: "Ein Brain für jeden Vertriebler",
    title: "Die richtigen Accounts finden, gut ansprechen und jede Woche besser werden.",
    intro:
      "Drei Module arbeiten mit demselben Firmen-Brain wie Ihr Marketing: Ihre ICPs, Personas, Produkte und Ihre Stimme. Jedes Ergebnis fließt dorthin zurück.",
  },
  modules: [
    {
      id: "lists",
      name: "Listen",
      promise: "Genau wissen, wen Sie ansprechen",
      title: "Ihr Markt, priorisiert und klar zugeordnet.",
      intro: "Machen Sie aus Ihrem idealen Kundenprofil eine priorisierte Account-Liste, finden Sie die Entscheider darin und geben Sie jedem Unternehmen genau einen Owner.",
      functions: [
        {
          mockup: "lists-1",
          title: "Vom ICP zur priorisierten Liste",
          body: "Ihr ICP füllt die Suche aus. Passende Unternehmen erscheinen, nach Fit bewertet und absteigend sortiert, und die Top-Accounts landen in Sekunden direkt in der Liste eines Vertrieblers.",
          screen: "Ein ICP füllt die Unternehmenssuche aus; passende Unternehmen werden nach ICP-Fit bewertet, absteigend sortiert und der Liste eines Vertrieblers hinzugefügt.",
        },
        {
          mockup: "lists-2",
          title: "Die richtige Person zuerst",
          body: "Jeder Kontakt wird mit Ihrem ICP abgeglichen, Entscheider werden priorisiert, und Checkgrow erklärt, warum jemand an erster Stelle steht – vom Lead-Score bis zur aktuellen LinkedIn-Aktivität.",
          screen: "Personen in einem Zielunternehmen werden mit dem ICP abgeglichen und nach Priorität sortiert, mit den Signalen, die zeigen, wen Sie zuerst kontaktieren.",
        },
        {
          mockup: "lists-3",
          title: "Listen, die sich selbst verteilen",
          body: "Legen Sie einmal eine Zuweisungsregel fest, und neue passende Unternehmen landen bei der richtigen Person. Ein Owner pro Unternehmen, keine Duplikate, und Kunden oder gesperrte Accounts werden nie angesprochen.",
          screen: "Eine Regel zur automatischen Zuweisung verteilt neue passende Unternehmen an die einzelnen Vertriebler, während Kunden und gesperrte Unternehmen blockiert werden.",
        },
      ],
    },
    {
      id: "outreach",
      name: "Outreach",
      promise: "Ansprechen wie Ihr bester Vertriebler",
      title: "Outreach, der nach Recherche klingt – in menschlichem Tempo.",
      intro: "Jeder Vertriebler schreibt über sein eigenes LinkedIn, in seiner eigenen Stimme, und ein Mensch gibt frei, was verschickt wird. Beziehungen beginnen vor dem Pitch, und keine Antwort geht verloren.",
      functions: [
        {
          mockup: "outreach-1",
          title: "Aufwärmen vor dem Pitch",
          body: "Grow entwirft einen echten Kommentar zum Beitrag eines Prospects und erklärt, warum er zählt. Like, Kommentar, Einladung, angenommen: Die Beziehung beginnt vor der ersten Nachricht.",
          screen: "Der LinkedIn-Beitrag eines Prospects erhält einen entworfenen Kommentar, dann geht die Journey vom Like über den Kommentar bis zur angenommenen Einladung.",
        },
        {
          mockup: "outreach-2",
          title: "In Minuten freigeben",
          body: "Erste Nachrichten kommen in der Stimme des Vertrieblers an, jeweils mit den Brain-Regeln dahinter. Vertriebler geben eine nach der anderen frei, und eine ganze Kampagne ist in Minuten statt Stunden geplant.",
          screen: "Ein Vertriebler gibt erste Nachrichten einzeln frei, jede mit den genutzten Sales-Brain-Regeln, bis 41 Nachrichten geplant sind.",
        },
        {
          mockup: "outreach-3",
          title: "Jede Antwort gelesen und sortiert",
          body: "Antworten werden gelesen und mit ihrer Absicht als heiß, warm, kühl oder kalt markiert, die wärmsten zuerst. Heiße Antworten werden zu Meetings, und einfache Antworten werden für Sie erledigt.",
          screen: "Eingehende LinkedIn-Antworten werden als heiß, warm, kühl oder kalt markiert und nach Wärme sortiert, und die heiße Antwort wird zum Meeting.",
        },
      ],
    },
    {
      id: "sales-brain",
      name: "Sales Brain",
      promise: "Mit jedem Gespräch besser werden",
      title: "Ein Sales Brain, das Ihrem Unternehmen gehört.",
      intro: "Jede Antwort, jede Bearbeitung, jeder Kommentar und jede Anweisung bringt dem Brain bei, wie Ihr Unternehmen verkauft. Das Wissen wächst im ganzen Team, und es bleibt bei Ihnen, wenn Menschen gehen.",
      functions: [
        {
          mockup: "brain-1",
          title: "Ihr Feedback schreibt die nächste Nachricht",
          body: "Sagen Sie dem Brain in einfachen Worten, was nicht gepasst hat. Es schreibt die Nachricht neu, macht aus Ihrem Feedback eine Regel, und mit einem Klick teilen Sie diese Regel mit allen Vertrieblern.",
          screen: "Eine generische Nachricht erhält Feedback, das Sales Brain schreibt sie neu, und das Feedback wird zu einer Regel für alle Vertriebler.",
        },
        {
          mockup: "brain-2",
          title: "Lernt aus jedem Signal",
          body: "Antworten, Kommentare, Bearbeitungen, Freigaben, Anweisungen und Playbooks fließen ins Brain. Jede Woche zeigt es, was es gelernt hat und woher jede Regel stammt.",
          screen: "Antworten, Kommentare, Bearbeitungen, Freigaben, Anweisungen und ein Playbook fließen in das Sales Brain eines Vertrieblers, das die in dieser Woche gelernten Regeln und ihre Quellen auflistet.",
        },
        {
          mockup: "brain-3",
          title: "Jede Woche mehr Antworten",
          body: "Während das Brain lernt, führt derselbe Outreach zu mehr Gesprächen. Die Führung sieht die Kurve und die Erkenntnisse hinter jedem Schritt.",
          screen: "Die Antwortrate eines Vertrieblers steigt Woche für Woche, versehen mit dem, was das Sales Brain bei jedem Schritt gelernt hat.",
          note: "Beispieldaten",
        },
      ],
    },
  ],
  functionsLabel: "Funktionen von {module}",
  difference: {
    eyebrow: "Warum Checkgrow Sales",
    title: "Die meisten Tools versenden Nachrichten. Checkgrow baut Ihr Sales-Brain.",
    intro:
      "Jedes Gespräch wird zu Unternehmenswissen: ein eigener Datensatz darüber, worauf Ihre Käufer reagieren – in Ihrem Besitz und mit jedem Vertriebler wertvoller.",
  },
  pillars: [
    {
      title: "Konsistent bei jeder Teamgröße",
      body: "Jeder Vertriebler arbeitet mit denselben freigegebenen Regeln, derselben Stimme und demselben Playbook. Die Qualität des Outreach hängt nicht mehr davon ab, wer ihn versendet.",
    },
    {
      title: "Ein eigener Sales-Datensatz",
      body: "Jedes Gespräch, jede Antwort, jede Bearbeitung und jede Entscheidung wird zu strukturierten Unternehmensdaten. Daraus lernt das Brain, wie Ihr Unternehmen verkauft.",
    },
    {
      title: "Sichtbar für die Führung",
      body: "Listen, Freigaben, Antworten und das, was jedes Brain gelernt hat, liegen an einem Ort. Führungskräfte verfolgen die Arbeit, ohne Updates hinterherzulaufen.",
    },
    {
      title: "Ein Verlauf, der bleibt",
      body: "Der gesamte Outreach-Verlauf liegt zentral. Wenn ein Vertriebler geht, bleiben seine Accounts, Gespräche und Erkenntnisse im Unternehmen.",
    },
  ],
  governance: {
    eyebrow: "Gebaut für Go-to-Market in Großunternehmen",
    title: "Outreach skalieren, ohne die Kontrolle zu verlieren.",
    intro:
      "Die Führung legt die Regeln einmal fest. Jeder Vertriebler arbeitet innerhalb dieser Regeln, jede Aktion wird von einem Menschen freigegeben, und das ganze Team arbeitet in einem kontrollierten System.",
  },
  controls: [
    {
      icon: "approve",
      title: "Ein Mensch gibt alles frei",
      body: "Das Brain schlägt Kommentare und Nachrichten vor; nichts wird veröffentlicht, bevor ein Vertriebler es freigibt, bearbeitet oder ablehnt.",
    },
    {
      icon: "pace",
      title: "Im Tempo eines umsichtigen Menschen",
      body: "3 bis 15 Kontaktanfragen pro Vertriebler und Tag, werktags zwischen 8:00 und 19:00 Uhr, ein Kommentar pro Zielperson und Tag und ein Notfall-Stopp.",
    },
    {
      icon: "linkedin",
      title: "Das eigene LinkedIn jedes Vertrieblers",
      body: "Vertriebler verbinden ihren eigenen Account über eine LinkedIn-konforme API und können ihn jederzeit trennen, was alle Aktivitäten sofort stoppt.",
    },
    {
      icon: "owner",
      title: "Ein Owner pro Unternehmen",
      body: "Importe werden mit allen Vertrieblern abgeglichen, zwei Personen kontaktieren nie denselben Menschen, und Kunden sowie gesperrte Accounts sind geschützt.",
    },
    {
      icon: "data",
      title: "Ihre Daten kommen mit",
      body: "Importieren Sie bis zu 5.000 Unternehmen oder Personen aus CSV oder Excel, oder holen Sie sie aus HubSpot, Zoho CRM und GoHighLevel.",
    },
    {
      icon: "security",
      title: "Sicherheit auf Enterprise-Niveau",
      body: "Rollen und verpflichtende Zwei-Faktor-Authentifizierung, EU-Hosting in AWS Frankfurt und Verschlüsselung bei der Übertragung und im Ruhezustand.",
    },
  ],
  team: {
    eyebrow: "Das Team hinter Checkgrow",
    title: "Gebaut von Go-to-Market-Fanatikern.",
    body: [
      "Wir haben fünfzehn Jahre an der Front von Marketing und Vertrieb verbracht: erst als Agentur, dann als Plattform. Wir haben Kampagnen, Outreach und Pipeline für unsere Kunden gesteuert und wurden an einer einzigen Sache gemessen – an Ergebnissen.",
      "Mit Checkgrow haben wir diese Obsession in ein System gegossen. Jedes Modul auf dieser Seite stammt aus Problemen, die wir zuerst von Hand gelöst haben. So bekommt Ihr Team die Methode, nicht nur die Software.",
    ],
    imageAlt: "Das Checkgrow-Team bespricht gemeinsam am Besprechungstisch die Go-to-Market-Arbeit eines Kunden",
  },
  faqTitle: "Fragen von Vertriebsleitern",
  allQuestions: "Alle Fragen",
  faq: [
    {
      q: "Was ist ein Sales Brain?",
      a: "Ein Sales Brain ist die KI, die Outreach für Ihre Vertriebler schreibt und lernt, wie Ihr Unternehmen verkauft. Es liest Ihr Unternehmenswissen (ICPs, Personas, Produkte und Stimme) und lernt aus jeder Antwort, jedem Kommentar, jeder Bearbeitung, jeder Freigabe und jeder Anweisung. Was es lernt, wird zu Regeln, die Ihr Team sehen, bis zur Quelle zurückverfolgen und mit allen Vertrieblern teilen kann.",
    },
    {
      q: "Was unterscheidet Checkgrow Sales von einem Sales-Engagement-Tool?",
      a: "Sequencing-Tools versenden Vorlagen. Checkgrow baut aus Ihren eigenen Gesprächen ein eigenes Sales Brain. So bleibt der Outreach über alle Vertriebler konsistent, wird mit jeder Antwort und Bearbeitung besser, und der gesamte Verlauf liegt zentral für die Führung, statt über Postfächer verstreut zu sein.",
    },
    {
      q: "Gehen Nachrichten ohne Freigabe raus?",
      a: "Nein. Das Brain schlägt Kommentare und Nachrichten vor, und jede wartet darauf, dass ein Vertriebler sie freigibt, bearbeitet oder ablehnt. Freigegebenes wird dann in menschlichem Tempo innerhalb der Tageslimits versendet.",
    },
    {
      q: "Wie bleibt LinkedIn-Outreach sicher?",
      a: "Outreach läuft über den eigenen LinkedIn-Account jedes Vertrieblers, verbunden über eine LinkedIn-konforme API. Sie legen ein Tageslimit von 3 bis 15 Kontaktanfragen fest, die werktags zwischen 8:00 und 19:00 Uhr in zufälligen Abständen versendet werden, mit einem Kommentar pro Zielperson und Tag und einem Notfall-Stopp. Keine Automatisierung ist risikofrei, deshalb bleibt die Aktivität klar im Rahmen normaler beruflicher Nutzung.",
    },
    {
      q: "Können Führungskräfte verfolgen, was jeder Vertriebler tut?",
      a: "Ja. Jeder Vertriebler hat seinen eigenen Workspace und sein eigenes Sales Brain, während Listen, Zuweisungen, Freigaben, Antworten und das, was jedes Brain gelernt hat, zentral liegen. So kann die Führung Arbeit und Ergebnisse im ganzen Team verfolgen.",
    },
    {
      q: "Können wir unsere bestehenden Accounts und Kontakte mitbringen?",
      a: "Ja. Importieren Sie eine CSV- oder Excel-Datei mit bis zu 5.000 Unternehmen oder Personen, oder holen Sie sie aus HubSpot, Zoho CRM oder GoHighLevel. Jeder Import wird mit Ihren Vertrieblern abgeglichen, damit jedes Unternehmen genau einen Owner behält, und auch Ihre bestehenden LinkedIn-Kontakte können zu einer Liste werden.",
    },
    {
      q: "Was passiert mit unseren Daten, wenn ein Vertriebler geht?",
      a: "Sie bleiben im Unternehmen. Accounts, Gespräche, Freigaben und die Regeln, die das Brain gelernt hat, liegen zentral in Ihrem Workspace, nicht in einem persönlichen Postfach. Die nächste Person startet mit dem vollständigen Verlauf.",
    },
  ],
  cta: {
    title: "Vertrieb, der mit jedem Gespräch besser wird, beginnt hier.",
    body: "Sehen Sie Checkgrow Sales mit Ihrem eigenen ICP, Ihren Accounts und Ihrer Stimme – in einer 30-minütigen Demo mit unserem Team.",
    bookDemo: "Demo buchen",
  },
  schema: {
    product: "Checkgrow Sales",
    videoName: "Rundgang durch Checkgrow Sales",
    videoDescription:
      "Ein Rundgang durch Checkgrow Sales: die LinkedIn-Pipeline des Teams von der Einladung bis zum Meeting, von Grow sortierte Antworten, Entwürfe in der Stimme jedes Vertrieblers zur Freigabe und das Sales Brain, das aus jedem Gespräch lernt.",
    home: "Startseite",
    page: "Vertrieb",
  },
};
