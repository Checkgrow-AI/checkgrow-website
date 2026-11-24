import type { Localized } from "../../types";
import type { useCases as source } from "../en/useCases";

export const useCases: Localized<typeof source> = {
  index: {
    meta: {
      title: "Checkgrow-Anwendungsfälle | So steuern Teams ihr Marketing mit Checkgrow",
      description:
        "So nutzen Marketing-Teams Checkgrow: Planung und Reporting an einem Ort, KI, die ihre Marke kennt, und Zahlen, die der Geschäftsführung zeigen, was Marketing einbringt.",
    },
    title: "Anwendungsfälle",
    intro:
      "Die Aufgaben, mit denen Marketing-Teams zu Checkgrow kommen, von Anfang bis Ende gezeigt: das Problem, die vier Schritte in der Plattform und was sich für das Team ändert. Einschließlich dessen, was Checkgrow nicht kann.",
    listTitle: "Alle Anwendungsfälle",
    count: { one: "{n} Anwendungsfall", other: "{n} Anwendungsfälle" },
    builtFor: "Für {audiences}",
    audienceSeparator: " · ",
    read: "Anwendungsfall lesen",
    schemaName: "Checkgrow-Anwendungsfälle",
  },
  page: {
    metaTitle: "{title} | Checkgrow",
    socialImageAlt: "{title} Checkgrow-Produktansicht: {feature}.",
    breadcrumb: "Seitenpfad",
    back: "Alle Anwendungsfälle",
    eyebrow: "Anwendungsfall · {feature}",
    builtFor: "Entwickelt für",
    bookDemo: "Demo buchen",
    seeHow: "So funktioniert es",
    onThisPage: "Auf dieser Seite",
    sections: {
      inShort: "Kurz gesagt",
      problem: "Das Problem",
      howItWorks: "So funktioniert es",
      seeItWork: "In Aktion",
      whatYouGet: "Was Sie bekommen",
      inPractice: "In der Praxis",
      faq: "FAQ",
    },
    howTitle: "Vier Schritte, alle in Checkgrow.",
    getTitle: "Was sich für Ihr Team ändert.",
    practiceTitle: "Teams, die das schon tun.",
    readStory: "Zur Erfolgsgeschichte →",
    faqTitle: "Fragen, die Teams vor dem Start stellen.",
    relatedLabel: "Verwandte Anwendungsfälle",
    relatedTitle: "Weiter entdecken.",
    bandTitle: "Sehen Sie, was Checkgrow für Ihr Unternehmen zeigen würde.",
    updated: "Zuletzt aktualisiert am {date}. Die Produktansichten sind Illustrationen von Checkgrow, die Zahlen Beispiele.",
  },
  breadcrumbs: {
    home: "Startseite",
    useCases: "Anwendungsfälle",
  },
  items: {
    "marketing-operations": {
      feature: "Marketing-Operations",
      title: "Marketing an einem Ort planen, starten und auswerten.",
      metaTitle: "All-in-One-Marketing-Operations: an einem Ort planen, starten und auswerten",
      description: "Kampagnen planen, Creatives erstellen, die Arbeit terminieren und Ergebnisse aus GA4, Meta Ads und Google Ads sehen – in einem Checkgrow-Workspace. Schluss mit fünf Tools.",
      lede: "Checkgrow bündelt Kampagnenplanung, Creatives, Terminplanung und Reporting in einem Workspace, verbunden mit Google Analytics, Meta Ads, Google Ads, Instagram und LinkedIn. Plan und Ergebnisse stehen nebeneinander, sodass niemand mehr jede Woche das Gesamtbild aus Exporten zusammensetzt.",
      builtFor: ["Marketingleitungen", "Growth-Teams", "Agenturen"],
      worksWithLabel: "Funktioniert mit",
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
          name: "n8n und Webhooks",
        },
        {
          name: "Checkgrow MCP",
        },
      ],
      inShort: [
        "Kampagnen planen, Creatives erstellen und die Arbeit terminieren, in einem Checkgrow-Workspace.",
        "Google Analytics, Meta Ads, Google Ads, Instagram und LinkedIn verbinden und die Ergebnisse direkt neben dem Plan sehen.",
        "Ihre Anzeigen laufen weiter in Meta und Google; Checkgrow liest ihre Performance, statt sie zu ersetzen.",
        "Kampagnen, Beiträge und Aufgaben teilen sich einen Kalender, sodass das ganze Team sieht, was live ist und was als Nächstes kommt.",
      ],
      hero: {
        steps: [
          {
            label: "Kalender",
            caption: "Kampagnen, Social-Media-Beiträge und Aufgaben in einem Kalender.",
          },
          {
            label: "Kampagnen",
            caption: "Jede Kampagne mit ihren Kanälen, ihrem Budget und ihren Creatives.",
          },
          {
            label: "Integrationen",
            caption: "Google Analytics, Meta Ads, Google Ads und Instagram verbunden.",
          },
        ],
      },
      problem: {
        title: "Fünf Tools, fünf Versionen der Wahrheit.",
        body: "Das Briefing liegt in einem Dokument, die Anzeigen in zwei Werbemanagern, der Plan in einer Tabelle und die Ergebnisse in Google Analytics. Jeder Wochenbericht beginnt mit Exporten, jede Entscheidung wartet darauf, dass jemand alles zusammenfügt, und wenn das Bild endlich vollständig ist, ist es schon veraltet.",
        quote: {
          text: "Es gibt so viele Tools da draußen, vielleicht ein Tool für jede Funktion, die ihr hier abdeckt, und es ist so mühsam, 10, 15 Tools zu managen. Hier ist alles in einem.",
          author: "Florian Mueller",
        },
      },
      steps: [
        {
          title: "Jede Kampagne in einer Liste planen",
          body: "Jede Kampagne enthält Strategie, Kanäle, Budget, Zeitraum und Creatives. Sehen Sie alle auf einen Blick, aktiv oder pausiert, mit den Ausgaben und Ergebnissen jedes Kanals direkt neben dem Plan.",
          tag: "Alle Kanäle, pro Kampagne",
        },
        {
          title: "Creatives direkt in der Kampagne erstellen",
          body: "Creatives liegen in der Kampagne, zu der sie gehören, gruppiert nach Kanal und Funnel-Stufe, vom ersten Entwurf bis zur Freigabe. Textvarianten, Formate und Sprachen bleiben an der richtigen Anzeige statt in einer Tabelle.",
          tag: "Nach Kanal und Stufe gruppiert",
        },
        {
          title: "Alles in einem Kalender sehen",
          body: "Kampagnen, Social-Media-Beiträge und Aufgaben erscheinen gemeinsam, sodass das Team ohne eigene Planungstabelle sieht, was live ist und was kommt. Verschieben Sie einen Beitrag, und alle sehen das neue Datum.",
          tag: "Jede Art von Arbeit in einer Ansicht",
        },
        {
          title: "Die Tools verbinden, die Sie schon nutzen",
          body: "Google Analytics, Meta Ads, Google Ads, Instagram und LinkedIn sind in wenigen Klicks verbunden, dazu Notion, n8n, Webhooks und Checkgrow MCP für alles andere. Ihre Daten fließen herein; nichts muss die Tools verlassen, denen Sie vertrauen.",
          tag: "In wenigen Klicks verbunden",
        },
      ],
      see: {
        title: "Jeden Tag in einer Ansicht beginnen.",
        body: "Fragen Sie Grow, den KI-Assistenten, was sich über Nacht geändert hat, oder springen Sie direkt zu Kampagnen, Insights, Wettbewerbern oder dem Wissensgraphen. Jede Antwort kommt aus Ihrem eigenen Workspace.",
        tag: "Ein Ort für den Start",
      },
      outcomes: [
        {
          title: "Ein Gesamtbild Ihres Marketings",
          body: "Pläne, Creatives, Zeitplan und Ergebnisse liegen in einem Workspace statt in fünf Tools.",
        },
        {
          title: "Berichte, die mit Live-Daten beginnen",
          body: "Die Performance kommt direkt aus Ihren verbundenen Konten, nicht aus den Exporten dieser Woche.",
        },
        {
          title: "Das ganze Team auf demselben Stand",
          body: "Aufgaben, Kommentare und @-Erwähnungen stehen neben der Kampagne, zu der sie gehören, sodass Entscheidungen nicht im Chat verloren gehen.",
        },
      ],
      testimonial: {
        text: "Ich finde es toll, dass alles an einem Ort ist und man nicht einen Haufen verschiedener Apps braucht, denn das ist in der Martech-Welt gerade ein Riesenthema.",
        author: "Abigail Markey, Markey Marketing Co",
      },
      proof: [
        {
          slug: "wespa-2028-leads-in-a-month",
          company: "WESPA",
          line: "Steuerte fünf Kampagnen aus einem Workspace und sammelte 2.028 Leads in einer Liste.",
        },
        {
          slug: "barner-croatia-launch-purchases-up-160",
          company: "Barner",
          line: "Startete in Kroatien aus einem Workspace: 160,6 % mehr Käufe in einem Monat.",
        },
      ],
      faq: [
        {
          q: "Was ist eine Marketing-Operations-Plattform?",
          a: "Eine Marketing-Operations-Plattform ist ein Workspace, in dem ein Team Kampagnen plant, Creatives vorbereitet, die Arbeit terminiert und die Ergebnisse auswertet, statt all das auf Dokumente, Tabellen und Werbemanager zu verteilen. Checkgrow leistet genau das und verbindet sich mit Google Analytics, Meta Ads, Google Ads, Instagram und LinkedIn, sodass die Performance neben dem Plan steht.",
        },
        {
          q: "Mit welchen Tools verbindet sich Checkgrow?",
          a: "Mit Google Analytics 4, Meta Ads, Google Ads, Instagram und LinkedIn, dazu Notion, n8n und Webhooks für alles andere. Über Checkgrow MCP können Claude, ChatGPT und andere KI-Apps die Daten Ihres Workspace lesen. Slack, TikTok und Supabase sind als „demnächst verfügbar“ gelistet.",
        },
        {
          q: "Müssen wir den Meta Ads Manager oder Google Ads aufgeben?",
          a: "Nein. Ihre Anzeigen laufen weiter, wo sie sind. Checkgrow liest ihre Performance und zeigt sie neben dem Plan, sodass Sie Kanäle vergleichen, ohne das Tool zu wechseln.",
        },
        {
          q: "Veröffentlicht Checkgrow unsere Anzeigen für uns?",
          a: "Nein. Kampagnen werden in Checkgrow geplant und Creatives dort vorbereitet; die Anzeigen selbst laufen im Meta Ads Manager und in Google Ads.",
        },
        {
          q: "Kann das ganze Team im selben Workspace arbeiten?",
          a: "Ja. Alle teilen sich einen Workspace, mit Aufgaben, Zuständigen, Kommentaren und @-Erwähnungen, sodass Arbeit und Entscheidungen bei der Kampagne bleiben, zu der sie gehören.",
        },
        {
          q: "Ersetzt Checkgrow unser CRM?",
          a: "Nein. Checkgrow ist kein CRM und synchronisiert sich derzeit nicht mit HubSpot oder Salesforce. Leads werden in Checkgrow gesammelt, und Webhooks oder n8n können sie an das CRM weitergeben, das Sie nutzen.",
        },
      ],
      keywords: [
        "Marketing-Operations-Plattform",
        "All-in-One-Marketing-Tool",
        "Software für Kampagnenplanung",
        "Marketingkalender",
        "Marketing-Workspace",
        "GA4, Meta Ads und Google Ads an einem Ort",
        "Zusammenarbeit im Marketing-Team",
        "Checkgrow",
      ],
    },
    "brand-knowledge-ai": {
      feature: "Wissenszentrum",
      title: "KI, die Ihre Marke schon kennt.",
      metaTitle: "KI-Marketing, das Ihre Marke kennt: eine zentrale Wissensbasis für alle Inhalte",
      description: "Hinterlegen Sie Unternehmen, Marke, Produkte und Käufer einmal im Wissenszentrum von Checkgrow. Jede Kampagnenidee, jeder Beitrag und jedes Creative beginnt dort, in Ihrer Stimme.",
      lede: "Checkgrow bündelt Ihr Unternehmen, Ihre Marke, Ihre Produkte und Ihre Käufer in einem Wissenszentrum. Alles, was es für Sie schreibt, von Kampagnenideen bis zu Beiträgen und Creatives, geht von dieser Quelle aus, sodass schon der erste Entwurf nach Ihnen klingt und nicht nach jedem anderen KI-Tool.",
      builtFor: ["Marketingverantwortliche", "Content-Teams", "Agenturen mit vielen Marken"],
      worksWithLabel: "Greift zurück auf",
      worksWith: [
        {
          name: "Unternehmensprofil",
        },
        {
          name: "Marke",
        },
        {
          name: "Produkte",
        },
        {
          name: "Buyer Personas",
        },
        {
          name: "ICPs",
        },
        {
          name: "Anwendungsfälle",
        },
      ],
      inShort: [
        "Hinterlegen Sie Ihr Wissen über Unternehmen, Marke, Produkte und Käufer einmal, im Wissenszentrum.",
        "Alles, was Checkgrow entwirft, von Kampagnenideen bis zu Beiträgen und Creatives, geht von diesem Wissen aus.",
        "Der Wissensgraph zeigt, wie Ihr Wissen mit Kampagnen, Wettbewerbern, Website und Leads verbunden ist.",
        "Entwürfe warten auf Ihre Freigabe, und jede Änderung am Wissen bleibt 30 Tage lang erhalten.",
      ],
      hero: {
        steps: [
          {
            label: "Wissensgraph",
            caption: "Unternehmenswissen, verbunden mit Kampagnen, Wettbewerbern und Leads.",
          },
          {
            label: "Markenstimme",
            caption: "Tonalität und Markenbotschaft, denen jeder Entwurf folgt.",
          },
          {
            label: "Buyer Persona",
            caption: "Ein echter Käufer, einmal beschrieben und überall genutzt.",
          },
        ],
      },
      problem: {
        title: "Jeder Prompt beginnt bei null.",
        body: "Allgemeine KI-Tools kennen weder Ihre Positionierung noch Ihre Produkte oder die Menschen, an die Sie verkaufen. Also erklärt jeder Prompt die Marke aufs Neue, jeder Entwurf muss umgeschrieben werden, und die Stimme driftet mit jedem ein Stück weiter ab. Je mehr Menschen KI nutzen, desto weniger klingt das Ergebnis nach Ihnen.",
        quote: {
          text: "Das gefällt mir. Im Grunde ist das also die Single Source of Truth, die ihr aufbaut, und das ist so wichtig. Absolut. Ich finde es großartig.",
          author: "Salim Sayed, WCMO",
        },
      },
      steps: [
        {
          title: "Checkgrow Ihr Geschäft einmal beibringen",
          body: "Füllen Sie Unternehmensprofil, Marke, Produkte, Buyer Personas, ICPs und Anwendungsfälle aus, oder laden Sie Dateien und Links hoch und lassen Sie Checkgrow Entwürfe zur Prüfung erstellen. Ein Vollständigkeitswert zeigt, was noch fehlt und was Sie als Nächstes ergänzen sollten.",
          tag: "Vollständigkeit auf einen Blick",
        },
        {
          title: "Ihre Stimme festhalten",
          body: "Tonalität und Markenbotschaft liegen an einem Ort, mit den Wörtern, die Sie verwenden, und denen, die Sie meiden. So folgt jeder Inhalt denselben Regeln, egal wer ihn anfordert.",
          tag: "Eine Stimme für jeden Entwurf",
        },
        {
          title: "Die Menschen beschreiben, an die Sie verkaufen",
          body: "Buyer Personas halten fest, wer diese Menschen sind, was sie brauchen, was sie zögern lässt und wie sie entscheiden, sodass Kampagnen, Beiträge und Vertriebsnachrichten einen echten Menschen ansprechen.",
          tag: "Ein echter Käufer, einmal beschrieben",
        },
        {
          title: "Sehen, wie alles zusammenhängt",
          body: "Der Wissensgraph verknüpft Ihr Unternehmenswissen mit Kampagnen, Website, Wettbewerbern und Leads in einer Ansicht, sodass Lücken und Verbindungen auf einen Blick sichtbar werden.",
          tag: "Alles hängt an Ihrem Unternehmen",
        },
      ],
      see: {
        title: "Ein Entwurf in Ihrer Stimme, bereit zur Freigabe.",
        body: "Inhalte kommen bereit für den Feinschliff. Bitten Sie im Chat daneben um Änderungen; die gespeicherte Version ändert sich erst nach Ihrer Freigabe. Nichts wird veröffentlicht, ohne dass ein Mensch zustimmt.",
        tag: "Änderungen erst nach Freigabe",
      },
      outcomes: [
        {
          title: "Erste Entwürfe in Ihrer Stimme",
          body: "Alles, was Checkgrow schreibt, geht von Ihrer Marke, Ihren Produkten und Ihren Käufern aus, nicht von einem leeren Prompt.",
        },
        {
          title: "Eine zentrale Wissensquelle",
          body: "Aktualisieren Sie Ihre Positionierung einmal, und jeder folgende Entwurf nutzt die neue Version, für jede Person im Team.",
        },
        {
          title: "Volle Kontrolle",
          body: "Nichts wird ohne Freigabe versendet, und eine 30-Tage-Historie zeigt jede Änderung an Ihrem Wissen.",
        },
      ],
      testimonial: {
        text: "Das Entscheidende ist für mich, dass es eine zentrale Datenbank hat, eine Single Source of Truth, und das ist letztlich einer der wichtigsten Punkte bei dieser ganzen KI-Einführung.",
        author: "Salim Sayed, WCMO",
      },
      proof: [
        {
          slug: "barner-croatia-launch-purchases-up-160",
          company: "Barner",
          line: "Baute zuerst sein Firmen-Brain auf und generierte dann 423 Anzeigen-Creatives in der eigenen Stimme.",
        },
        {
          slug: "cuixmala-first-campaign-us-27000-booking",
          company: "Cuixmala",
          line: "Beschrieb 6 Produkte, 4 Personas und 3 ICPs, bevor die ersten Kampagnen Buchungen über 300.000 US$ brachten.",
        },
      ],
      faq: [
        {
          q: "Was ist eine Markenwissensbasis für KI?",
          a: "Ein strukturierter Ort, an dem alles liegt, was Ihr Unternehmen ausmacht, etwa Markenstimme, Produkte, Buyer Personas, ideale Kundenprofile und Anwendungsfälle, damit KI-Tools aus Ihren Fakten schreiben statt aus allgemeinen Annahmen. In Checkgrow ist das das Wissenszentrum, und jede KI-Funktion greift darauf zurück.",
        },
        {
          q: "Woher kommt das Wissen?",
          a: "Von Ihnen. Füllen Sie die Abschnitte direkt aus, oder laden Sie Dateien und Links hoch und lassen Sie Checkgrow Entwürfe erstellen, die Sie prüfen und bearbeiten, bevor etwas gespeichert wird.",
        },
        {
          q: "Was passiert, wenn sich unsere Positionierung ändert?",
          a: "Aktualisieren Sie sie einmal im Wissenszentrum, und alles, was Checkgrow danach schreibt, nutzt die neue Version. Eine 30-Tage-Historie zeigt, was sich wann geändert hat.",
        },
        {
          q: "Wird etwas ohne unsere Freigabe veröffentlicht?",
          a: "Nein. Inhalte warten, bis jemand sie versendet, und Änderungen aus dem Chat gelten erst, wenn Sie sie freigeben.",
        },
        {
          q: "Kann Checkgrow Videos erstellen?",
          a: "Noch nicht. Das Creative Studio ist in der Beta und erstellt Bilder und Texte. Prüfen Sie generierte Produktbilder, bevor Sie sie verwenden, denn sie können vom echten Produkt abweichen.",
        },
        {
          q: "Kann eine Agentur mehrere Marken getrennt halten?",
          a: "Ja. Jeder Workspace hat sein eigenes Wissenszentrum, sodass Marke, Produkte und Käufer jedes Kunden getrennt bleiben.",
        },
      ],
      keywords: [
        "KI, die Ihre Marke kennt",
        "Markenwissensbasis",
        "KI-Markenstimme",
        "Single Source of Truth Marketing",
        "Buyer Personas mit KI",
        "KI-Content in Ihrer Markenstimme",
        "Knowledge Graph Marketing",
        "Checkgrow",
      ],
    },
    "marketing-reporting": {
      feature: "Insights",
      title: "Zeigen Sie der Geschäftsführung, was Marketing einbringt.",
      metaTitle: "Marketing-Reporting für die Geschäftsführung: ein Funnel aus GA4, Meta und Google Ads",
      description: "Führen Sie Google Analytics, Meta Ads und Google Ads in einem Funnel zusammen, vergleichen Sie jede Anzeige nach Kosten pro Ergebnis und teilen Sie einen Live-Report-Link mit der Geschäftsführung.",
      lede: "Checkgrow bringt Google Analytics, Meta Ads und Google Ads in Insights zusammen: ein Funnel vom ersten Besuch bis zur Conversion, Kosten pro Ergebnis für jede Anzeige und ein Live-Report-Link, den Sie mit jedem teilen können. Die Geschäftsführung sieht dieselben Zahlen wie Sie, immer aktuell.",
      builtFor: ["CMOs", "Growth-Verantwortliche", "Gründer"],
      worksWithLabel: "Daten aus",
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
        "Ein Funnel vom ersten Besuch bis zur Conversion, über Google Analytics, Meta Ads und Google Ads hinweg.",
        "Jede Anzeige nach Ausgaben und Kosten pro Ergebnis vergleichen, mit den Gewinnern in einer erklärten Rangfolge.",
        "Traffic nach Quelle und Medium mit UTM-Reporting nachverfolgen, für jeden Zeitraum.",
        "Einen Live-Report-Link mit der Geschäftsführung teilen statt einer monatlichen Präsentation.",
      ],
      hero: {
        steps: [
          {
            label: "Erfolgreichste Anzeigen",
            caption: "Die Anzeigen mit den meisten Conversions, in einer Rangfolge und erklärt.",
          },
          {
            label: "Funnel",
            caption: "Jedes erfasste Event oben, in der Mitte oder unten im Funnel.",
          },
          {
            label: "Smart Report",
            caption: "Ausgaben, CTR, Kosten pro Klick und Kosten pro Ergebnis, mit Zusammenfassung.",
          },
        ],
      },
      problem: {
        title: "Drei Dashboards, drei verschiedene Antworten.",
        body: "Google Analytics zählt das eine, Meta etwas anderes, Google Ads ein Drittes. Wenn die Geschäftsführung fragt, was Marketing gebracht hat, kostet die Antwort eine Woche Tabellenarbeit und löst trotzdem eine Diskussion darüber aus, wessen Zahlen stimmen.",
        quote: {
          text: "Ich fand das End-to-End-Tracking wirklich toll, denn damit tun sich viele Organisationen schwer. Wir nutzen einfach Tabellen, und das ist alles so manuell.",
          author: "Abigail Markey, Markey Marketing Co",
        },
      },
      steps: [
        {
          title: "Ein Funnel, vom ersten Besuch bis zur Conversion",
          body: "Insights ordnet jedes erfasste Event oben, in der Mitte oder unten im Funnel ein und zeigt, wie Menschen von einer Stufe zur nächsten gelangen, über alle verbundenen Quellen hinweg.",
          tag: "Wo aus Besuchen Conversions werden",
        },
        {
          title: "Jede Anzeige nach ihren Kosten bewertet",
          body: "Der Werbe-Smart-Report zeigt Ausgaben, Klickrate, Kosten pro Klick und Kosten pro Ergebnis für jede Kampagne, mit einer verständlichen Zusammenfassung, was sich geändert hat und warum es wichtig ist.",
          tag: "Kosten pro Klick und pro Ergebnis",
        },
        {
          title: "Die Gewinner, erklärt",
          body: "„Erfolgreichste Anzeigen“ ordnet die Anzeigen mit den meisten Conversions und zeigt für jede den Anteil an Ausgaben und an Ergebnissen, damit das Budget dem folgt, was funktioniert. Ein Klick erstellt eine weitere Anzeige nach dem Vorbild des Gewinners.",
          tag: "Anteil an Ausgaben vs. Anteil an Ergebnissen",
        },
        {
          title: "Traffic, den Sie nachverfolgen können",
          body: "UTM-Reporting zeigt Sitzungen im Zeitverlauf und ihre Herkunft, nach Quelle, Medium und Kampagne, für jeden Zeitraum, den Sie wählen.",
          tag: "Jeder Zeitraum",
        },
      ],
      see: {
        title: "Teilen per Link, nicht per Präsentation.",
        body: "Jede Insights-Ansicht hat einen Live-Report-Link, sodass Geschäftsführung, Kunden oder Investoren dieselben Zahlen sehen wie Sie, immer aktuell, ohne Login und ohne auf das Monatspaket zu warten.",
        tag: "Ein Live-Link für die Geschäftsführung",
      },
      outcomes: [
        {
          title: "Ein Funnel",
          body: "Vom ersten Besuch bis zur Conversion, in einer Ansicht über alle verbundenen Quellen.",
        },
        {
          title: "Die Anzeigen, die ihr Budget verdienen",
          body: "Kosten pro Ergebnis und Anteil an den Conversions für jede Anzeige, mit den Gewinnern in einer Rangfolge.",
        },
        {
          title: "Berichte, die die Geschäftsführung öffnen kann",
          body: "Ein Live-Report-Link statt einer monatlichen Präsentation, immer mit den aktuellen Zahlen.",
        },
      ],
      testimonial: {
        text: "Mir gefällt, dass es auf Events basiert. Es ist eventbasiert statt kennzahlenbasiert. Das ist wirklich, wirklich hilfreich.",
        author: "Sophia Ahrel",
      },
      proof: [
        {
          slug: "boont-30x-cheaper-meta-purchases",
          company: "Boont",
          line: "Insights fand 294 Website-Zahlungen, die Meta nicht sehen konnte, und zeigte dann die neue Gewinneranzeige an der Spitze.",
        },
        {
          slug: "wespa-2028-leads-in-a-month",
          company: "WESPA",
          line: "Wertete seinen Funnel über alle Kanäle aus: 26,8 % der interagierenden Besucher konvertierten.",
        },
      ],
      faq: [
        {
          q: "Wie zeige ich der Geschäftsführung den Marketing-ROI?",
          a: "Bringen Sie Analytics und Werbeplattformen in eine Ansicht, zeigen Sie den Funnel vom ersten Besuch bis zur Conversion und die Kosten pro Ergebnis jeder Kampagne, und teilen Sie das als Live-Link statt als statische Präsentation. Checkgrow Insights erledigt das mit Google Analytics, Meta Ads und Google Ads.",
        },
        {
          q: "Welche Datenquellen speisen Insights?",
          a: "Google Analytics 4, Meta Ads und Google Ads. LinkedIn Ads ist als „demnächst verfügbar“ gelistet.",
        },
        {
          q: "Kann ich einen Bericht mit jemandem teilen, der Checkgrow nicht nutzt?",
          a: "Ja. Jede Insights-Ansicht hat einen Live-Report-Link, den Sie an jeden schicken können, und er zeigt immer die aktuellen Zahlen.",
        },
        {
          q: "Kann ich den Zeitraum wählen?",
          a: "Ja. Jede Insights-Ansicht hat einen Zeitraum, und die Zahlen passen sich entsprechend an.",
        },
        {
          q: "Warum stimmen die Zahlen von Meta nicht mit Google Analytics überein?",
          a: "Jede Plattform zählt Conversions auf ihre eigene Weise. Insights zeigt sie nebeneinander, sodass Sie sie vergleichen können, ohne Werte zu addieren, die unterschiedliche Ereignisse messen.",
        },
        {
          q: "Bietet Checkgrow Multi-Touch-Attribution?",
          a: "Nein. Checkgrow zeigt, was jede Plattform misst, und zeigt, woher Ihr Traffic kommt, baut aber kein Multi-Touch-Attributionsmodell.",
        },
      ],
      keywords: [
        "Marketing-Reporting für die Geschäftsführung",
        "Marketing-ROI-Report",
        "GA4 Meta Ads Google Ads Dashboard",
        "Kosten pro Ergebnis",
        "erfolgreichste Anzeigen",
        "UTM-Reporting",
        "Live-Marketing-Report",
        "Checkgrow Insights",
      ],
    },
  },
};
