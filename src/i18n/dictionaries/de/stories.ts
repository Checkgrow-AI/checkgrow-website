import type { Localized } from "../../types";
import type { stories as source } from "../en/stories";

/* Erfolgsgeschichten. Jede Zahl behält ihren Wert, nur das Format folgt
   dem Deutschen (docs/i18n-glossary.md). Bilder, Slugs und IDs bleiben. */
export const stories: Localized<typeof source> = {
  items: [
    {
      "slug": "cuixmala-first-campaign-us-27000-booking",
      "company": "Cuixmala",
      "draft": false,
      "title": "Wie das Luxusresort Cuixmala mit seinen ersten Kampagnen Buchungen über 300.000 US$ erzielte",
      "description": "Wie das mexikanische Luxusresort Cuixmala mit Checkgrow seine ersten Anzeigen schaltete: 307.650 US$ an Buchungen, 369 % mehr Buchungsumsatz und eine erste Buchung über 27.000 US$.",
      "kicker": "Hotellerie, Mexiko",
      "publishedAt": "2026-10-06",
      "heroStats": [
        {
          "value": "307.650 US$",
          "label": "an Buchungen, in Google Analytics erfasst, während Checkgrow die Kampagnen von Cuixmala betreute, 15. September bis 22. November",
          "big": true
        },
        {
          "value": "369 %",
          "label": "Wachstum beim Buchungsumsatz gegenüber derselben Anzahl Tage davor"
        },
        {
          "value": "27.000 US$",
          "label": "die erste Buchung aus den Google-Ads-Kampagnen von Cuixmala, im Buchungssystem bestätigt"
        }
      ],
      "features": [
        "Wissenszentrum",
        "Wettbewerber",
        "Kampagnen",
        "Creative Studio",
        "Insights"
      ],
      "hero": {
        "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-luxury-resort-casa-cuixmala-pacific-coast-mexico.webp",
        "alt": "Casa Cuixmala, das von Kuppeln gekrönte Haupthaus des Luxusresorts Cuixmala, im Dschungel über dem Strand und dem Pazifik in Jalisco, Mexiko",
        "width": 1000,
        "height": 680
      },
      "clientMark": "CUIXMALA",
      "about": {
        "summary": "Ein Luxusresort an der mexikanischen Pazifikküste, gelegen in einem privaten Naturschutzgebiet, das seit 1987 Gäste empfängt.",
        "facts": [
          {
            "label": "Branche",
            "value": "Hotellerie, Luxusresort"
          },
          {
            "label": "Standort",
            "value": "Jalisco, Mexiko"
          },
          {
            "label": "Markt",
            "value": "Reisende in den USA und in Mexiko"
          },
          {
            "label": "Zeitraum",
            "value": "15. September bis 22. November 2026"
          }
        ]
      },
      "lead": "Cuixmala empfängt seit 1987 Gäste in seinem Resort an der mexikanischen Pazifikküste, hatte aber nie Werbung geschaltet. Die ersten bezahlten Kampagnen, betreut von Checkgrow, gingen im September auf Google und Meta live. Wenige Wochen später verzeichnete Google Ads die erste Buchung: einen Aufenthalt im Wert von 27.000 US$, abgeglichen mit dem eigenen Buchungssystem des Resorts. Bis zum 22. November hatte Google Analytics seit dem Start Buchungen über 307.650 US$ erfasst, 369 % mehr als in derselben Anzahl Tage davor. Die Prüfung dieser ersten Buchung deckte zudem eine Tracking-Lücke auf, die sich früh zu schließen lohnte.",
      "takeaways": [
        "Das Firmen-Brain von Cuixmala im Wissenszentrum von Checkgrow beschrieb das Angebot im Detail: 6 Produkte, 4 Buyer Personas, 3 ideale Kundenprofile und 5 Anwendungsfälle.",
        "Im Bereich Wettbewerber verfolgte Checkgrow 14 konkurrierende Resorts: 8 davon warben, mit 166 laufenden Anzeigen auf Meta, während Cuixmala mit 210.000 Instagram-Followern auf Platz 3 der 14 lag.",
        "Checkgrow plante die Kampagne Cuixmala: The Reserve Awaits und generierte die Anzeigen im Creative Studio aus den eigenen Fotos des Resorts, auf Englisch für die USA und auf Spanisch für Mexiko.",
        "Google Ads verzeichnete die erste Buchung im Wert von 27.000 US$, und sie stimmte exakt mit dem Buchungssystem von Cuixmala überein.",
        "Vom 15. September bis 22. November erfasste Google Analytics 44 Buchungen im Wert von 307.650 US$, der Buchungsumsatz lag 369 % über derselben Anzahl Tage davor. Für 270.230 US$ davon war Google der erste Kanal.",
        "Insights zeigte, dass Google Analytics den Kauf ohne Quelle erfasst hatte: eine Tagging-Lücke, die in den ersten Wochen auffiel statt erst Monate später."
      ],
      "keywords": [
        "Hotelmarketing",
        "Werbung für Luxusresorts",
        "Google Ads für Hotels",
        "Meta Ads für Hotels",
        "Buchungstracking",
        "Wettbewerbsanalyse",
        "mehrsprachige Kampagnen",
        "Marketing-Attribution",
        "KI-Marketing-Plattform",
        "Mexiko",
        "Cuixmala",
        "Checkgrow"
      ],
      "sections": [
        {
          "label": "Die Herausforderung",
          "title": "Ein Luxusresort wirbt zum ersten Mal",
          "blocks": [
            {
              "type": "p",
              "text": "Cuixmala ist ein seltener Ort: private Villen, ein eigenes Restaurant und ein privates Naturschutzgebiet an der Pazifikküste. Fast vier Jahrzehnte lang hatte das Resort Gäste empfangen, ohne je eine bezahlte Kampagne zu schalten."
            },
            {
              "type": "p",
              "text": "Eine erste Kampagne wirft zwei Fragen zugleich auf. Wo steht ein Resort wie Cuixmala in einem Markt voller professionell auftretender Wettbewerber? Und woran erkennt man, ob die Anzeigen wirken, wenn ein Gast zwischen Klick und bestätigtem Aufenthalt mehrere Seiten und Systeme durchläuft und jede Werbeplattform Ergebnisse auf ihre eigene Weise zählt?"
            }
          ]
        },
        {
          "label": "Firmen-Brain",
          "title": "Zuerst das Angebot von Cuixmala in Worte fassen",
          "blocks": [
            {
              "type": "p",
              "text": "Checkgrow steuerte den Start aus einem einzigen Workspace, und am Anfang stand das Wissenszentrum. Dort wurde das Angebot von Cuixmala im Detail beschrieben: 6 Produkte, 4 Buyer Personas, 3 ideale Kundenprofile und 5 Anwendungsfälle. Dieses Firmen-Brain wurde zum Briefing für alles, was folgte – von der Frage, wen man erreichen will, bis zu dem, was jede Anzeige sagen sollte."
            },
            {
              "type": "p",
              "text": "Anschließend wurden die Konten von Cuixmala bei Google Analytics, Meta und Google Ads mit Insights verbunden, sodass sich jeder Kanal vom ersten Kampagnentag an direkt neben den anderen messen ließ."
            }
          ]
        },
        {
          "label": "Wettbewerbsanalyse",
          "title": "Anzeigen und Publikum aller konkurrierenden Resorts an einem Ort",
          "blocks": [
            {
              "type": "p",
              "text": "Im Bereich Wettbewerber verfolgt Checkgrow 14 konkurrierende Resorts an der mexikanischen Pazifikküste und jede Anzeige, die sie schalten, aktualisiert durch einen monatlichen Scan. Die erste Ansicht zeigte, wer wirklich um dieselben Reisenden warb: 8 der 14 schalteten Werbung, zusammen 166 laufende Anzeigen, alle auf Meta. An der Spitze lag Almar Resort mit 40, gefolgt von The St. Regis Punta Mita mit 36, Garza Blanca Preserve mit 27 sowie Hotel Mousai und Secrets Vallarta Bay mit je 19."
            },
            {
              "type": "figure",
              "variant": "narrow",
              "image": {
                "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-competitors-who-is-advertising-resort-ads.webp",
                "alt": "Checkgrow-Bereich Wettbewerber, Ansicht „Wer wirbt“, für Cuixmala: 14 konkurrierende Resorts verfolgt, 8 davon werben, 166 laufende Anzeigen auf Meta, angeführt von Almar Resort mit 40, The St. Regis Punta Mita mit 36, Garza Blanca Preserve Resort & Spa mit 27, Hotel Mousai Puerto Vallarta und Secrets Vallarta Bay mit je 19, Casa Velas mit 16, Chable mit 7 und Las Alamandas mit 2",
                "width": 1310,
                "height": 1086
              },
              "caption": "Wer unter den 14 verfolgten Wettbewerbern von Cuixmala wirbt, im Checkgrow-Bereich Wettbewerber."
            },
            {
              "type": "p",
              "text": "Das Wettbewerber-Dashboard zeigte dann, wo Cuixmala stand. Auf Instagram lag das Resort mit 210.000 Followern auf Platz 3 der 14 Resorts, 357 % über dem Median der Wettbewerber, nur hinter The St. Regis Punta Mita mit 2,5 Millionen und Secrets Vallarta Bay. Auf LinkedIn war das Bild umgekehrt: 934 Follower, 85 % unter dem Median. Eine Marke mit starkem visuellem Publikum und fast ohne bezahlte Präsenz – genau die Lücke, die eine erste Kampagne nutzen konnte."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-competitors-dashboard-instagram-linkedin-ads.webp",
                "alt": "Wettbewerber-Dashboard in Checkgrow für Cuixmala: die Position gegenüber 14 Wettbewerbern, mit 934 LinkedIn-Followern, 210K Instagram-Followern auf Platz 3 und 357 % über dem Median sowie 161 laufenden Meta-Anzeigen der Wettbewerber, angeführt von Almar Resort und The St. Regis Punta Mita",
                "width": 2000,
                "height": 1071
              },
              "caption": "Cuixmala im Vergleich mit seinen 14 Wettbewerbern bei LinkedIn, Instagram und Werbung, im Wettbewerber-Dashboard von Checkgrow."
            },
            {
              "type": "p",
              "text": "Die Analyse zeigte auch, wie geduldig die Konkurrenz war. Der aktivste Wettbewerber hatte eine einzige Anzeige 260 Tage lang laufen lassen. Über die Menge würde Cuixmala nicht gewinnen. Das Resort musste genau wissen, wen es anspricht und was es sagt."
            }
          ]
        },
        {
          "label": "Kampagnen",
          "title": "The Reserve Awaits, in zwei Sprachen",
          "blocks": [
            {
              "type": "p",
              "text": "Im Bereich Kampagnen plante Checkgrow Cuixmala: The Reserve Awaits für Reisende in den USA, mit spanischen Versionen derselben Anzeigen für den mexikanischen Markt. Die Kampagne ging zuerst auf Google live und drei Tage später auf Meta."
            },
            {
              "type": "p",
              "text": "Die im Creative Studio erstellten Anzeigen verkaufen, was kein Wettbewerber kopieren kann: Abgeschiedenheit. Ein gedeckter Tisch unter einem weißen Bogen mit Blick aufs Meer, ein geschnitzter Türrahmen, der sich zu einer Terrasse öffnet, das Haupthaus mit seinen Kuppeln zwischen Palmen, dazu Zeilen wie „Where Restorative Stays Begin in Seclusion“ und „Un santuario natural en la costa de México“."
            },
            {
              "type": "gallery",
              "images": [
                {
                  "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-restorative-stays-dining-arch-sea-view.webp",
                  "alt": "Meta-Anzeige von Cuixmala: ein gedeckter Tisch unter einem weißen Bogen mit Meerblick, Headline „Where Restorative Stays Begin in Seclusion“ und ein Button „Book your stay“",
                  "width": 900,
                  "height": 1125
                },
                {
                  "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-restorative-stays-terrace-doorway.webp",
                  "alt": "Meta-Anzeige von Cuixmala: ein geschnitzter Türrahmen, der sich zu einer Terrasse über dem Meer öffnet, Headline „Where Restorative Stays Begin in Seclusion“ und ein Button „Book your stay“",
                  "width": 900,
                  "height": 1125
                },
                {
                  "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-private-reserve-pacific-coast.webp",
                  "alt": "Meta-Anzeige von Cuixmala: ein Terrassentisch über dem Dschungel und der Küste, Headline „A Private Reserve on Mexico's Pacific Coast“ und ein Button „Book your stay“",
                  "width": 900,
                  "height": 1125
                },
                {
                  "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-spanish-santuario-natural-mexico.webp",
                  "alt": "Spanischsprachige Meta-Anzeige von Cuixmala: das Haupthaus mit seinen Kuppeln zwischen Palmen, dahinter das Meer, Headline „Un santuario natural en la costa de México“ und ein Button „Reserva tu estancia“",
                  "width": 900,
                  "height": 1125
                }
              ],
              "caption": "Anzeigen für Cuixmala: The Reserve Awaits, auf Englisch und auf Spanisch."
            },
            {
              "type": "p",
              "text": "Das Creative Studio baute sie aus dem eigenen Material des Resorts. Das Team gab ihm die Fotos von Restaurant, Außenbereichen und Küste, dazu die Kampagne selbst als Kontext, und beschrieb, was es brauchte. Jede Anfrage lieferte ein Set fertiger Anzeigen im passenden Format, und eine einfache Nachricht wie „Erstelle 3 weitere Optionen mit dem anderen Bild als Kontext“ genügte für die nächste Runde, in 4:5, 1:1, 1,91:1 oder 9:16."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-creative-studio-ai-luxury-resort-ads.webp",
                "alt": "Creative Studio in Checkgrow für Cuixmala: drei KI-generierte Anzeigen für ein Luxusresort, „A Private Reserve on Mexico's Pacific Coast“ und „Where Restorative Stays Begin in Seclusion“, erstellt aus den Fotos von Restaurant und Außenbereichen und der Kampagne The Reserve Awaits als Kontext, mit Optionen für Format und Seitenverhältnis",
                "width": 2000,
                "height": 1076
              },
              "caption": "Anzeigen für Cuixmala, im Creative Studio von Checkgrow aus eigenen Fotos und dem Kampagnenkontext generiert."
            },
            {
              "type": "p",
              "text": "Auf Meta erreichten die ersten Anzeigen 49.403 Menschen und erzielten 2.039 Klicks bei einer Klickrate von 3,45 %, während Google Ads im September 4.228 Klicks brachte. Jeder dieser Klicks ließ sich in Insights verfolgen, direkt neben den anderen."
            }
          ]
        },
        {
          "label": "Was Checkgrow fand",
          "title": "Eine Buchung über 27.000 US$ und die Lücke dahinter",
          "blocks": [
            {
              "type": "p",
              "text": "Als die erste Buchung einging, beließ es Checkgrow nicht beim Feiern. Es prüfte die Buchung überall dort, wo sie auftauchen sollte. Google Ads hatte sie samt Wert erfasst, und der Eintrag stimmte exakt mit dem eigenen Buchungssystem von Cuixmala überein: ein Aufenthalt im Wert von 27.000 US$."
            },
            {
              "type": "p",
              "text": "Auch Google Analytics hatte den Kauf erfasst, aber nicht, woher er kam. Die Kampagnen-Tags waren in Google Ads eingerichtet, kamen aber nie in Analytics an, sodass die Buchung ohne Quelle erschien. Wer nur auf Analytics geschaut hätte, hätte die erste Buchung der Kampagne nie Google Ads zugeordnet."
            },
            {
              "type": "p",
              "text": "Genau diese Art von Lücke will man in den ersten Wochen einer Kampagne finden, solange sie noch klein ist – und nicht Monate später, wenn Budgetentscheidungen davon abhängen."
            }
          ]
        },
        {
          "label": "Die Ergebnisse",
          "title": "Mehr als 300.000 US$ an Buchungen, Umsatz plus 369 %",
          "blocks": [
            {
              "type": "p",
              "text": "Der Start brachte das Ergebnis, das für ein Resort am meisten zählt: echte, bestätigte Buchungen. Die erste, aus der bezahlten Suche, war 27.000 US$ wert und kam in den ersten Wochen der Kampagne. Bis zum 22. November hatte Google Analytics seit dem Start 44 Buchungen im Wert von 307.650 US$ erfasst, gegenüber 6 in derselben Anzahl Tage davor, und der Buchungsumsatz lag 369 % höher. Für 270.230 US$ davon war Google der erste Kanal, gefolgt von direkten Besuchen mit 21.155 US$ und Instagram mit 12.002 US$."
            },
            {
              "type": "stats",
              "variant": "results",
              "items": [
                {
                  "value": "307.650 US$",
                  "label": "an Buchungen, in Google Analytics erfasst, 15. September bis 22. November",
                  "big": true
                },
                {
                  "value": "369 %",
                  "label": "Wachstum beim Buchungsumsatz gegenüber derselben Anzahl Tage davor"
                },
                {
                  "value": "44",
                  "label": "Buchungen, gegenüber 6 in derselben Anzahl Tage davor"
                },
                {
                  "value": "27.000 US$",
                  "label": "erste Buchung aus Google Ads, abgeglichen mit dem Buchungssystem von Cuixmala"
                }
              ]
            },
            {
              "type": "p",
              "text": "Insights zeigte außerdem, woher bereits Interesse kam. Im September erzeugte die organische Google-Suche 6.623 Schlüsselereignisse aus 4.718 Sitzungen, und die Seite mit den Zimmerpreisen hielt die Aufmerksamkeit der Besucher, mit 88,2 % Engagement über 1.271 Sitzungen. Mit allen Kanälen in einer Ansicht sieht Cuixmala jetzt, was jeder einzelne beiträgt und wo das Tracking noch Arbeit braucht."
            }
          ]
        }
      ],
      "statement": {
        "text": "In den ersten zehn Wochen seiner Kampagnen mit Checkgrow überschritt Cuixmala die Marke von 300.000 US$ an Buchungen, bei einem Umsatzplus von 369 %. Die erste Buchung über Google Ads im Wert von 27.000 US$ zeigte zudem, wo das Tracking versagte – und genau das will man früh wissen, bevor eine Kampagne wächst.",
        "cite": "Checkgrow"
      },
      "faq": [
        {
          "q": "Wie startet ein Luxushotel oder Resort mit Checkgrow in die Onlinewerbung?",
          "a": "Indem es den Start aus einem Checkgrow-Workspace steuert: Haus, Gäste und Angebote im Wissenszentrum beschreiben, konkurrierende Hotels im Bereich Wettbewerber analysieren, die Kampagnen im Bereich Kampagnen planen und alle Kanäle gemeinsam in Insights messen. Cuixmala, ein Luxusresort in Mexiko, startete so seine ersten bezahlten Kampagnen, verzeichnete innerhalb weniger Wochen eine Buchung über 27.000 US$ und überschritt in den ersten zehn Wochen 300.000 US$ an Buchungen."
        },
        {
          "q": "Was gehört in das Firmen-Brain eines Hotels?",
          "a": "Alles, was ein gutes Kampagnenbriefing braucht: die angebotenen Zimmer, Villen und Erlebnisse, die Gästetypen und ihre Herkunft, die idealen Kundenprofile und die Gründe, aus denen Menschen buchen. Im Wissenszentrum von Cuixmala standen 6 Produkte, 4 Buyer Personas, 3 ideale Kundenprofile und 5 Anwendungsfälle. Sie bestimmten, wen die Anzeigen erreichten und was sie sagten."
        },
        {
          "q": "Wie verfolgt Checkgrow die Anzeigen konkurrierender Hotels?",
          "a": "Der Bereich Wettbewerber in Checkgrow verfolgt per KI-Recherche die Hotels und Resorts, die Sie auswählen: mit einem monatlichen Scan ihrer laufenden Anzeigen auf Meta und LinkedIn und einem Dashboard, das Ihre Position bei Instagram, LinkedIn und Werbung zeigt. Cuixmala sah 166 laufende Anzeigen seiner 14 konkurrierenden Resorts in einer Ansicht – und dass sein Instagram-Publikum auf Platz 3 der 14 lag."
        },
        {
          "q": "Woran erkenne ich, ob eine Buchung wirklich aus Google Ads kam?",
          "a": "Prüfen Sie sie in jedem System, das sie erfassen sollte: Google Ads, Google Analytics und die Buchungsmaschine. Checkgrow Insights bringt Google Analytics, Google Ads und Meta in eine Ansicht, sodass sich eine Buchung nachverfolgen und vergleichen lässt. Die Buchung über 27.000 US$ erschien bei Cuixmala in Google Ads samt Wert und stimmte exakt mit dem Buchungssystem überein."
        },
        {
          "q": "Warum zeigt Google Analytics eine Buchung ohne Quelle an?",
          "a": "Meist, weil Kampagneninformationen aus der Werbeplattform nicht an Analytics weitergegeben werden und der Besuch ohne seine Kampagnen-Tags ankommt. Die Buchung wird erfasst, aber nicht der Anzeige zugeordnet, die sie ausgelöst hat. Insights machte das bei Cuixmala in den ersten Wochen sichtbar, als es noch leicht zu beheben war."
        },
        {
          "q": "Kann eine Luxusmarke mit KI markengerechte Anzeigen erstellen?",
          "a": "Ja, wenn die KI mit dem eigenen Material der Marke arbeitet. Das Creative Studio von Checkgrow nutzt Ihre Fotos, Ihre Marke und Ihre Kampagne als Kontext, sodass die Anzeigen nach Ihrem Haus aussehen statt nach Stockfotos. Die Anzeigen von Cuixmala entstanden aus eigenen Fotos von Restaurant, Außenbereichen und Küste, und für neue Varianten genügte ein einziger Satz."
        },
        {
          "q": "Kann Checkgrow Kampagnen in mehreren Sprachen umsetzen?",
          "a": "Ja. Eine Checkgrow-Kampagne kann dieselben Creatives in mehreren Sprachen für verschiedene Märkte ausspielen und dabei einer einzigen Strategie folgen. Die Kampagne von Cuixmala lief auf Englisch für Reisende in den USA und auf Spanisch für den mexikanischen Markt."
        }
      ],
      "footnote": "Zahlen aus dem Checkgrow-Workspace von Cuixmala. Buchungsumsatz, Buchungen und erste Kanäle sind Kaufdaten aus Google Analytics für den Zeitraum vom 15. September bis 22. November 2026, verglichen mit derselben Anzahl Tage davor. Weitere Kampagnen- und Wettbewerberzahlen beziehen sich auf den 15. September bis 5. Oktober 2026, Website-Zahlen und Google-Ads-Klicks auf den September. Der Buchungswert von 27.000 US$ wurde von Cuixmala bestätigt. Followerzahlen in sozialen Medien zuletzt abgerufen am 27. April 2026."
    },
    {
      "slug": "boont-30x-cheaper-meta-purchases",
      "company": "Boont",
      "draft": false,
      "title": "Wie der kroatische Online-Versicherer Boont Käufe über Meta 30x günstiger machte",
      "description": "Wie Boont dafür sorgte, dass Meta die Verkäufe sieht, seine Anzeigen im Checkgrow Creative Studio erstellte und eine neue Kampagne testete: Käufe 30x günstiger, dann 2x so viele Conversions.",
      "kicker": "Versicherungen, Kroatien",
      "publishedAt": "2026-10-12",
      "heroStats": [
        {
          "value": "30x",
          "label": "niedrigere Kosten pro Kauf in den ersten Tagen der neuen Kampagne: 70,85 € gegenüber 2.121,05 € bei der bestehenden Kampagne von Boont"
        },
        {
          "value": "2x",
          "label": "so viele Conversions, als beide Kampagnen über dieselben Tage verglichen wurden: 10 gegenüber 5, zu je 69,45 € gegenüber 144,41 €"
        }
      ],
      "features": [
        "Wissenszentrum",
        "Creative Studio",
        "Kalender",
        "Kampagnen",
        "Insights"
      ],
      "hero": {
        "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-meta-ad-car-insurance-drive-less-pay-less.webp",
        "alt": "Meta-Anzeige von Boont für Online-Kfz-Versicherung aus der Checkgrow-Kampagne: „Voziš manje od 5.000 km? Saznaj koliko štediš“ (Fährst du weniger als 5.000 km? Finde heraus, wie viel du sparst), mit einem grauen SUV und einem grünen Schild",
        "width": 1600,
        "height": 900
      },
      "clientMark": "",
      "about": {
        "summary": "Ein Versicherungsvermittler aus Zagreb, gegründet 2022, der digitale Kfz-Versicherungen mit Cashback für sichere Fahrer verkauft.",
        "facts": [
          {
            "label": "Branche",
            "value": "Versicherungen, digitale Kfz-Versicherung"
          },
          {
            "label": "Standort",
            "value": "Zagreb, Kroatien"
          },
          {
            "label": "Markt",
            "value": "Autofahrer in Kroatien"
          },
          {
            "label": "Zeitraum",
            "value": "September bis Oktober 2026"
          }
        ]
      },
      "lead": "Boont verkauft in Kroatien Kfz-Versicherungen online und belohnt sichere Fahrer mit Cashback. Das Team warb bereits auf Meta, doch die Kampagne konnte die verkauften Policen nicht sehen. Checkgrow sorgte zuerst dafür, dass Meta die Verkäufe sehen konnte, und startete dann eine zweite Kampagne neben der von Boont. In den ersten Tagen brachte die neue Kampagne Käufe zu je 70,85 €, gegenüber 2.121,05 € bei der bestehenden: Kosten pro Kauf, die 30-mal niedriger lagen.",
      "takeaways": [
        "Die Website von Boont verzeichnete in einem Monat 294 abgeschlossene Zahlungen, während Meta für die Kampagne keine einzige meldete. Checkgrow Insights fand die Lücke, indem es Google Analytics und Meta nebeneinander auswertete.",
        "Checkgrow verband Google Analytics, Meta Ads und Google Ads mit Insights und richtete das Firmen-Brain von Boont im Wissenszentrum ein, bevor es auch nur eine Anzeige änderte.",
        "Die neuen Anzeigen von Boont entstanden im Creative Studio von Checkgrow, auf Kroatisch und aus der eigenen Marke heraus. Jede Version blieb erhalten, und mit einem Klick ließ sich ein Beitrag einplanen oder mehr nach dem Vorbild eines Bildes erstellen.",
        "Eine zweite Meta-Kampagne mit Lookalike- und Remarketing-Zielgruppen lief neben der von Boont. In den ersten Tagen brachte sie Käufe zu je 70,85 € gegenüber 2.121,05 €, 30-mal günstiger.",
        "Die Hauptanzeige der neuen Kampagne stand schnell auf Platz 1 der erfolgreichsten Anzeigen im Konto, mit 50 % aller Conversions zu je 79,88 €, und ein Klick auf „Ähnliche erstellen“ startet die nächste Runde."
      ],
      "keywords": [
        "Versicherungsmarketing",
        "Meta Ads Tracking",
        "Conversion-Tracking",
        "Kosten pro Kauf",
        "Meta-Kampagnentest",
        "Lookalike Audiences",
        "Remarketing",
        "Marketing-Attribution",
        "KI-Marketing-Plattform",
        "Kfz-Versicherung online Kroatien",
        "Boont",
        "Checkgrow"
      ],
      "sections": [
        {
          "label": "Die Herausforderung",
          "title": "Ein Online-Versicherer, dessen Anzeigen die eigenen Verkäufe nicht sahen",
          "blocks": [
            {
              "type": "p",
              "text": "Boont ist ein Versicherungsvermittler aus Zagreb, gegründet 2022. Gemeinsam mit Groupama osiguranje verkauft das Unternehmen Kfz-Versicherungen, die Autofahrer komplett online abschließen und verwalten, mit Cashback für alle, die schadenfrei fahren."
            },
            {
              "type": "p",
              "text": "Das Marketing-Team von Boont betrieb bereits eine eigene Meta-Kampagne, live seit Juni 2024, die breite Zielgruppen auf Facebook und Instagram erreichte. Als Checkgrow dazukam, lautete der erste Auftrag schlicht, das Team bei den laufenden Kampagnen zu unterstützen. Darunter lag ein größeres Problem."
            },
            {
              "type": "p",
              "text": "Auf der Website wurden Policen gekauft, aber Meta ordnete diese Verkäufe nicht der Kampagne zu. Ohne dieses Signal konnte niemand sagen, welche Anzeige eine Police verkauft und welche nur Geld gekostet hatte, und Meta konnte nicht lernen, wem es die Anzeigen zeigen sollte."
            }
          ]
        },
        {
          "label": "Verbundene Daten",
          "title": "Erst alles verbinden, dann etwas ändern",
          "blocks": [
            {
              "type": "p",
              "text": "Checkgrow begann mit dem Verbinden, nicht mit dem Ändern von Anzeigen. Google Analytics, Meta Ads und Google Ads kamen in Insights, sodass sich Zahlungen auf der Website und Anzeigenergebnisse endlich nebeneinander lesen ließen. Das Unternehmensprofil von Boont kam ins Wissenszentrum, damit jede Empfehlung davon ausging, wie Boont tatsächlich verkauft."
            },
            {
              "type": "p",
              "text": "Das erste Insights-Briefing machte die Lücke unübersehbar. Die Website hatte in einem Monat 294 abgeschlossene Zahlungen erfasst, während Meta für die Kampagne von Boont überhaupt keine Ergebnisse meldete. Das Fazit des Briefings war eindeutig:"
            },
            {
              "type": "callout",
              "text": "Solange das Conversion-Reporting nicht repariert ist, gibt es bei den Meta-Kampagnen keinen messbaren Gewinner oder Verlierer.",
              "cite": "Checkgrow-Insights-Briefing"
            }
          ]
        },
        {
          "label": "Kampagnentest",
          "title": "Eine zweite Kampagne, direkt daneben",
          "blocks": [
            {
              "type": "p",
              "text": "Statt die Kampagne von Boont abzuschalten, startete Checkgrow eine eigene daneben, damit sich beide unter denselben Bedingungen messen ließen. CheckGrow Conversion ging auf Meta live, mit neuen Anzeigen aus dem Creative Studio und zwei Anzeigengruppen: eine für Menschen, die den Käufern von Boont ähneln, aufgebaut auf einer Lookalike Audience, und eine für Menschen, die die Website schon besucht hatten, aufgebaut auf Remarketing."
            },
            {
              "type": "p",
              "text": "Die Hauptanzeige sprach einen ganz bestimmten Fahrer an: „VOZIŠ MANJE OD 5.000 KM?“ (Fährst du weniger als 5.000 km?), unter dem Versprechen „Voziš bez štete, plaćaš manje“ (Fahr schadenfrei, zahl weniger). In der Insights-Ansicht „Erfolgreichste Anzeigen“ steht sie nach Conversions im gesamten Konto an erster Stelle."
            }
          ]
        },
        {
          "label": "Creative Studio",
          "title": "Jede Anzeige aus der eigenen Marke von Boont, in wenigen Klicks",
          "blocks": [
            {
              "type": "p",
              "text": "Die Anzeigen für die neue Kampagne kamen aus dem Creative Studio. Das Team beschreibt in einfachen Worten, was es braucht, und Checkgrow erstellt Bilder, Beiträge und Anzeigen aus der Marke von Boont: ihren Farben, ihren Produktseiten und ihren eigenen Fotos, die als Kontext für jedes Set dienen. Jede Anfrage liefert ein Set aus fünf Motiven, im Format und in der Größe, die der Kanal braucht."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-creative-studio-ai-car-insurance-ads-croatian.webp",
                "alt": "Creative Studio in Checkgrow für Boont: ein Set KI-generierter kroatischer Anzeigen für Kfz-Versicherung mit der Headline „Povrat novca svakih 12 tjedana“ (Cashback alle 12 Wochen), erstellt aus dem Markenkontext von Boont, darunter das Über-uns-Bild, Screens der mobilen App und die Produktseite auf boont.hr",
                "width": 2000,
                "height": 1072
              },
              "caption": "Ein Set Boont-Anzeigen aus dem Creative Studio von Checkgrow, rechts der verwendete Markenkontext."
            },
            {
              "type": "p",
              "text": "Die Sets von Boont waren auf Kroatisch geschrieben und griffen die echten Versprechen auf: Cashback alle 12 Wochen für sichere Fahrer, eine Versicherung, die komplett online verwaltet wird, und eine Prämie für die Empfehlung an Freunde. Manche Sets gingen weiter, etwa eine Serie humorvoller Anzeigen, aus der 26 Favoriten hervorgingen. Statt einen Designer zu briefen und tagelang auf eine Runde Entwürfe zu warten, konnte das Team in Minuten auf ein Set reagieren und einfach sagen, was sich beim nächsten ändern sollte."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-creative-studio-ad-versions-calendar-make-more.webp",
                "alt": "Eine einzelne Boont-Anzeige im Creative Studio von Checkgrow, „Mislis da vozis bez greske? Boont Izazov krece“, mit ihren Versionen und den Optionen, sie als Entwurf eines Social-Media-Beitrags in den Kalender zu legen, herunterzuladen, mehr davon zu erstellen oder sie durch eine Beschreibung der gewünschten Änderung anzupassen",
                "width": 2000,
                "height": 1245
              },
              "caption": "Eine Boont-Anzeige im Creative Studio, mit ihren Versionen und den nächsten Möglichkeiten für das Team."
            },
            {
              "type": "p",
              "text": "Jedes Bild behält seine Historie. Bitten Sie um eine Änderung, etwa eine neue Headline oder eine andere Logo-Position, erstellt Checkgrow eine neue Version, ohne die alte zu überschreiben. Ist ein Bild fertig, legt es ein Klick als Entwurf eines Social-Media-Beitrags zur Freigabe in den Kalender, lädt es in der richtigen Größe herunter oder macht es mit „Mehr davon machen“ zum Ausgangspunkt für das nächste Set. Ein Bild direkt in eine aktive Kampagne zu schicken, wird bald möglich sein."
            }
          ]
        },
        {
          "label": "Was Checkgrow fand",
          "title": "Besseres Tracking und eine bessere Kampagne",
          "blocks": [
            {
              "type": "p",
              "text": "Sobald beide Kampagnen liefen, zeigte das Tagesdiagramm in Insights genau den Moment, ab dem Meta Verkäufe sah. Drei Wochen lang hatte Meta überhaupt keine Conversions erfasst. Die erste erschien am Tag nach dem Start von CheckGrow Conversion, und von da an erfassten beide Kampagnen Conversions."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-insights-meta-cost-vs-conversions-tracking.webp",
                "alt": "Insights-Diagramm in Checkgrow mit den täglichen Meta-Ausgaben und Conversions von Boont: Die Conversions bleiben drei Wochen lang bei null, die erste erscheint am Tag nach dem Start der neuen Checkgrow-Kampagne, danach steigen sie weiter",
                "width": 1254,
                "height": 438
              },
              "caption": "Tägliche Meta-Ausgaben und Conversions von Boont in Checkgrow Insights. Die erste Conversion erscheint am Tag nach dem Start der neuen Kampagne."
            },
            {
              "type": "p",
              "text": "Das Tracking erklärte einen Teil des Unterschieds, aber nicht alles. Die beiden Kampagnen waren unterschiedlich aufgebaut, und die Menschen reagierten unterschiedlich. Die neue Kampagne erzielte eine Klickrate von 1,39 % gegenüber 0,56 %, bei 0,30 € pro Klick gegenüber 0,95 €: Bei ähnlichem Budget brachten kaufnähere Zielgruppen und eigens für sie geschriebene Anzeigen dreimal so viele Klicks, 2.322 gegenüber 761."
            }
          ]
        },
        {
          "label": "Die Ergebnisse",
          "title": "Anfangs 30-mal günstiger, im direkten Vergleich doppelt so viele Conversions",
          "blocks": [
            {
              "type": "stats",
              "variant": "results",
              "items": [
                {
                  "value": "30x",
                  "label": "niedrigere Kosten pro Kauf in den ersten Tagen der neuen Kampagne: 70,85 € gegenüber 2.121,05 €",
                  "big": true
                },
                {
                  "value": "10 zu 5",
                  "label": "Conversions, als beide Kampagnen über dieselben Tage verglichen wurden, bei Ausgaben von 694,50 € gegenüber 722,04 €"
                },
                {
                  "value": "69,45 €",
                  "label": "Kosten pro Conversion der neuen Kampagne in diesem Zeitraum, gegenüber 144,41 €"
                }
              ]
            },
            {
              "type": "p",
              "text": "In den ersten Tagen brachte die neue Kampagne 3 Käufe bei Ausgaben von 212,56 €, also 70,85 € pro Kauf. Die bestehende Kampagne von Boont hatte in den 30 Tagen davor 1 Kauf bei Ausgaben von 2.121,05 € erfasst: Kosten pro Kauf, die 30-mal höher lagen."
            },
            {
              "type": "p",
              "text": "Boont hat diesen Vergleich mit uns geprüft, und wir haben beide Kampagnen zusätzlich in Insights über exakt dieselben Tage ausgewertet. Dort, wo eine Conversion ein Kauf, ein Lead oder eine Registrierung ist, die Meta der Anzeige zuordnet, erfasste die neue Kampagne 10 Conversions gegenüber 5, bei Ausgaben von 694,50 € gegenüber 722,04 €. Jede Conversion kostete 69,45 € statt 144,41 €: Die Hürde, die jeder Verkauf nehmen muss, um seine Werbung zu bezahlen, halbierte sich."
            },
            {
              "type": "p",
              "text": "Das deutlichste Zeichen kam aus der Insights-Ansicht „Erfolgreichste Anzeigen“, die jede Anzeige nach ihren Conversions ordnet und jede im Vergleich zu den anderen erklärt. Innerhalb weniger Tage übernahm die Hauptanzeige der neuen Kampagne, die Auto-Anzeige „Voziš bez štete, plaćaš manje“, Platz 1 im gesamten Konto: 9 Conversions zu je 79,88 €, 50 % aller Conversions, bei einer Klickrate von 1,37 %. Die beste Anzeige der bestehenden Kampagne von Boont folgte auf Platz zwei, mit 4 Conversions zu je 142,79 € und 22 % des Gesamtvolumens."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-insights-winning-ads-meta-conversions.webp",
                "alt": "Insights-Ansicht „Erfolgreichste Anzeigen“ in Checkgrow für Boont: die Anzeige der neuen Checkgrow-Kampagne auf Platz 1 mit 9 Conversions zu 79,88 € pro Conversion, 50 % der Conversions und einer Klickrate von 1,37 %, vor der bestehenden Boont-Anzeige auf Platz 2 mit 4 Conversions zu 142,79 € und 22 % der Conversions, jeweils mit den Buttons „Creative öffnen“ und „Ähnliche erstellen“",
                "width": 1852,
                "height": 902
              },
              "caption": "Die Anzeige der neuen Kampagne auf Platz 1 im Konto von Boont, in der Ansicht „Erfolgreichste Anzeigen“ von Checkgrow Insights."
            },
            {
              "type": "p",
              "text": "Den Gewinner zu sehen, ist nur die halbe Sache. Neben jeder erfolgreichen Anzeige steht „Ähnliche erstellen“: Damit geht die Anzeige als Ausgangspunkt für ein neues Set zurück ins Creative Studio. Die Anzeige mit den besten Conversions wird in wenigen Klicks zum Briefing für die nächste Runde, sodass die Kampagne weiterlernt, statt auf den nächsten Kreativzyklus zu warten."
            },
            {
              "type": "p",
              "text": "Zwei ehrliche Einschränkungen. Die 30x vergleichen die ersten Tage der neuen Kampagne mit einem Monat der bestehenden, einem Zeitraum, in dem Meta noch nicht alle Verkäufe von Boont sah. Und es handelt sich um die ersten 11 Tage an Ergebnissen, Meta kann also noch spät zugeordnete Conversions nachtragen. Im direkten Vergleich erfasste die neue Kampagne dennoch doppelt so viele Conversions zu weniger als der Hälfte der Kosten."
            }
          ]
        }
      ],
      "statement": {
        "text": "Die Ergebnisse von Boont gehen auf mehr als eine Korrektur zurück: ein Tracking, das Verkäufe sehen konnte, ein anderes Setup, neue Creatives und kaufnähere Zielgruppen. In den ersten Tagen brachte die neue Kampagne Käufe zu einem Dreißigstel der Kosten, und im direkten Vergleich erfasste sie doppelt so viele Conversions zu weniger als der Hälfte der Kosten pro Conversion.",
        "cite": "Checkgrow"
      },
      "faq": [
        {
          "q": "Warum zeigen meine Meta-Anzeigen nicht die Verkäufe, die meine Website erfasst?",
          "a": "Meist, weil das Conversion-Signal der Website nicht bei Meta ankommt und Meta Käufe deshalb nicht den Anzeigen zuordnen kann, die sie ausgelöst haben. Checkgrow Insights liest Google Analytics und Meta nebeneinander, was die Lücke sichtbar macht: Die Website von Boont erfasste in einem Monat 294 abgeschlossene Zahlungen, während Meta für die Kampagne keine einzige meldete."
        },
        {
          "q": "Wie findet Checkgrow Insights Tracking-Probleme?",
          "a": "Insights verbindet Google Analytics, Meta Ads und Google Ads an einem Ort und vergleicht, was jedes System erfasst, mit schriftlichen Briefings und Diagrammen wie den täglichen Ausgaben im Vergleich zu den Conversions. Passen die Zahlen nicht zusammen, etwa Verkäufe auf der Website, aber keine Conversions im Werbekonto, weist Insights darauf hin, bevor Budgetentscheidungen auf unvollständigen Daten getroffen werden."
        },
        {
          "q": "Wie teste ich eine neue Meta-Kampagne, ohne die laufende zu stoppen?",
          "a": "Lassen Sie die neue Kampagne neben der bestehenden laufen und werten Sie beide über dieselben Tage mit derselben Conversion-Definition aus. Der Werbe-Smart-Report von Checkgrow stellt die Kampagnen nebeneinander, mit Ausgaben, Conversions, Kosten pro Conversion, Klickrate und Kosten pro Klick. Der Test von Boont ergab 10 Conversions gegenüber 5, zu jeweils halben Kosten."
        },
        {
          "q": "Wie kann ein Versicherungsunternehmen mit KI Anzeigen-Creatives erstellen?",
          "a": "Mit dem Creative Studio von Checkgrow: Das Team beschreibt, was es braucht, und erhält Anzeigen aus der eigenen Marke, den Produktseiten und eigenen Fotos, in der eigenen Sprache und in den Größen, die jeder Kanal braucht. Jede Änderung erzeugt eine neue Version, und ein fertiges Bild lässt sich als Social-Media-Beitrag einplanen oder als Vorlage für weitere nutzen. So hat Boont seine kroatischen Anzeigen für Kfz-Versicherung erstellt."
        },
        {
          "q": "Woran erkenne ich, welche Anzeige am besten konvertiert, und wie erstelle ich mehr davon?",
          "a": "Die Ansicht „Erfolgreichste Anzeigen“ in Checkgrow Insights ordnet jede Anzeige nach ihren Conversions, mit Ausgaben, Kosten pro Conversion, Klickrate und Anteil an allen Conversions. Ein Klick auf „Ähnliche erstellen“ schickt den Gewinner zurück ins Creative Studio und startet das nächste Set. Die neue Anzeige von Boont kam mit 50 % aller Conversions auf Platz 1."
        },
        {
          "q": "Was sind Lookalike- und Remarketing-Zielgruppen, und wann helfen sie?",
          "a": "Eine Lookalike Audience findet neue Menschen, die Ihren bestehenden Käufern ähneln; eine Remarketing-Zielgruppe erreicht Menschen, die Ihre Website bereits besucht haben. Beide sind meist kaufnäher als breite Zielgruppen. Die Checkgrow-Kampagne für Boont nutzte je eine Anzeigengruppe von beiden und erzielte eine Klickrate von 1,39 % gegenüber 0,56 % bei breitem Targeting."
        },
        {
          "q": "Wie vergleicht man zwei Werbekampagnen fair?",
          "a": "Über dieselben Tage, mit derselben Conversion-Definition und demselben Tracking, und mit Blick auf die Kosten pro Conversion ebenso wie auf das Volumen. Frühe Ergebnisse und spät zugeordnete Conversions sind mit Vorsicht zu lesen. Der Fall Boont zeigt beide Sichtweisen: einen Unterschied von 30x in den ersten Tagen und doppelt so viele Conversions zu weniger als der Hälfte der Kosten im selben Zeitraum."
        },
        {
          "q": "Kann Checkgrow Versicherern und Finanzdienstleistern beim Onlinevertrieb helfen?",
          "a": "Ja. Unternehmen, die Policen oder Finanzprodukte online verkaufen, sind auf genaues Conversion-Tracking und effiziente bezahlte Neukundengewinnung angewiesen. Checkgrow verbindet ihre Website-Analytics und Werbekonten, findet heraus, wo Verkäufe nicht zugeordnet werden, und hilft, Kampagnen für kaufnähere Zielgruppen aufzubauen und zu messen – wie bei der digitalen Kfz-Versicherung von Boont."
        }
      ],
      "footnote": "Zahlen aus dem Checkgrow-Workspace von Boont (Insights, Meta), Zeitraum 12. September bis 12. Oktober 2026. Ausgaben und Kosten mit Zustimmung von Boont veröffentlicht."
    },
    {
      "slug": "barner-croatia-launch-purchases-up-160",
      "company": "Barner",
      "draft": false,
      "title": "Wie Barner mit KI-Marketing in Kroatien startete: 160,6 % mehr Käufe in einem Monat",
      "description": "Wie Barner seine Bildschirmbrillen mit Checkgrow in Kroatien einführte: Wettbewerbsanalyse, 423 KI-Anzeigen-Creatives und ein durchgängiger Funnel. 160,6 % mehr Käufe in einem Monat.",
      "kicker": "Brillen, Kroatien",
      "publishedAt": "2026-10-14",
      "heroStats": [
        {
          "value": "357",
          "label": "Käufe in einem Monat, 160,6 % mehr als im Vorzeitraum"
        },
        {
          "value": "+119 %",
          "label": "neue Besucher: 10.290 Erstbesuche gegenüber 4.700 im Vorzeitraum"
        }
      ],
      "features": [
        "Wissenszentrum",
        "Social Media",
        "Wettbewerber",
        "Kampagnen",
        "Creative Studio",
        "Insights",
        "KI-Assistent"
      ],
      "hero": {
        "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-screen-glasses-tortoiseshell.webp",
        "alt": "Ein Mann rückt eine runde Barner-Bildschirmbrille mit Schildpatt-Fassung zurecht",
        "width": 1080,
        "height": 680
      },
      "clientMark": "BARNER",
      "about": {
        "summary": "Eine Marke für Bildschirmbrillen, jetzt mit eigenem Webshop in Kroatien.",
        "facts": [
          {
            "label": "Branche",
            "value": "Brillen, E-Commerce"
          },
          {
            "label": "Standort",
            "value": "Kroatien"
          },
          {
            "label": "Markt",
            "value": "Verbraucher in Kroatien"
          },
          {
            "label": "Zeitraum",
            "value": "2. September bis 2. Oktober 2026"
          }
        ]
      },
      "lead": "Barner stellt Brillen für Menschen her, die ihre Tage vor Bildschirmen verbringen. Als die Marke beschloss, 2026 in Kroatien zu starten, hatte sie einen neuen Webshop, ein klares Produkt und überhaupt kein lokales Publikum. Einen Monat nach dem Start mit Checkgrow verzeichnete der Webshop 357 Käufe, 160,6 % mehr als im Vormonat, und die Zahl neuer Besucher hatte sich mehr als verdoppelt. So kam das Team dorthin, Funktion für Funktion.",
      "takeaways": [
        "Barner baute sein Firmen-Brain im Wissenszentrum von Checkgrow auf und verband Google Analytics, Meta, Google Ads und Instagram, sodass jede Kampagne, jedes Creative und jede KI-Antwort auf denselben Daten beruhte.",
        "Der Bereich Wettbewerber zeigte die Anzeigen und Social-Media-Kanäle aller Wettbewerber in einer Ansicht: 20 Marken verfolgt, 15 davon mit Werbung, rund 1.000 laufende Anzeigen.",
        "Das Creative Studio generierte 423 KI-Anzeigen-Creatives auf Kroatisch, 395 davon gingen direkt in die Meta- und Google-Ads-Kampagnen von Barner.",
        "Insights führte Meta, Google Ads und Google Analytics in einem Funnel zusammen, und der KI-Assistent beantwortete Performance-Fragen in etwa einer halben Minute.",
        "Im Monat bis zum 2. Oktober 2026 stiegen die Käufe um 160,6 % auf 357 und die neuen Besucher um 119 % auf 10.290."
      ],
      "keywords": [
        "KI-Marketing-Plattform",
        "Markteinführung",
        "E-Commerce-Wachstum",
        "Anzeigen der Konkurrenz analysieren",
        "KI-Anzeigen-Creatives",
        "Meta Ads",
        "Google Ads",
        "Marketing-Attribution",
        "KI-Marketing-Assistent",
        "Kroatien",
        "Bildschirmbrille",
        "Barner",
        "Checkgrow"
      ],
      "sections": [
        {
          "label": "Die Herausforderung",
          "title": "Bildschirmbrillen für einen Markt, der schon gut versorgt war",
          "blocks": [
            {
              "type": "p",
              "text": "Barner kam ohne jede Vorgeschichte nach Kroatien. Noch suchte niemand nach dem Namen, und der Brillenmarkt war bereits voll mit Modemarken, Sonnenbrillenlabels und lokalen Optikern, von denen viele jeden einzelnen Tag Werbung schalteten."
            },
            {
              "type": "p",
              "text": "Das Produkt war fertig. Was das Team noch nicht kannte, war der Markt: wer sonst verkaufte, was die anderen sagten und welche Kanäle die ersten Käufer in einen Webshop bringen würden, von dem niemand je gehört hatte. Und wie die meisten Launch-Teams hatte es mehr zu tun als Leute dafür, verteilt auf mehr Tools, als irgendjemand öffnen wollte."
            }
          ]
        },
        {
          "label": "Firmen-Brain",
          "title": "Zuerst Checkgrow alles über Barner beibringen",
          "blocks": [
            {
              "type": "p",
              "text": "Der Start begann im Wissenszentrum, dem Firmen-Brain von Checkgrow. Produkte, Zielgruppen, Markenstimme und Angebot von Barner wurden einmal im Detail erfasst. Von da an ging alles, was Checkgrow erstellte, vom Kampagnenplan über die Anzeigentexte bis zu den Antworten des KI-Assistenten, von den Fakten der Marke aus statt von einem leeren Blatt."
            },
            {
              "type": "p",
              "text": "Dann kamen die Konten. Barner verband Google Analytics, Meta und Google Ads und verknüpfte sein Instagram-Profil im Bereich Social Media. Jede Verbindung ist mit wenigen Klicks erledigt, und zusammen veränderten sie, was das Firmen-Brain leisten konnte: Es beschrieb nicht mehr nur das Unternehmen, sondern sah Traffic, Anzeigen und Verkäufe von Barner in Echtzeit."
            }
          ]
        },
        {
          "label": "Wettbewerbsanalyse",
          "title": "Die Anzeigen aller Wettbewerber sehen, bevor ein Euro ausgegeben ist",
          "blocks": [
            {
              "type": "p",
              "text": "Mit dem Firmen-Brain als Grundlage wandte sich das Team dem Markt zu. Im Bereich Wettbewerber erfasste die KI-Recherche von Checkgrow die 20 Marken und Optiker, die in Barners Segment verkaufen, und behielt sie im Blick. Die erste Ansicht war aufschlussreich: 15 von ihnen schalteten Werbung, zusammen rund 1.000 laufende Anzeigen. D.Franklin und Hawkers hatten jeweils 100 aktive Meta-Anzeigen, Meller 99 und Kaleos 87, während MÓ auf LinkedIn setzte."
            },
            {
              "type": "figure",
              "variant": "narrow",
              "image": {
                "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-competitors-ai-research.webp",
                "alt": "Checkgrow-Bereich Wettbewerber, Ansicht „Wer wirbt“: 20 Wettbewerber verfolgt, 15 davon mit Werbung und rund 1.000 laufende Anzeigen, mit der Zahl der LinkedIn- und Meta-Anzeigen von COTTET, D.Franklin, General Optica, Hawkers, KALEOS, Meller, Miller & Marc und MÓ",
                "width": 916,
                "height": 1160
              },
              "caption": "Wer in Barners Markt wirbt, im Checkgrow-Bereich Wettbewerber, 2. Oktober 2026."
            },
            {
              "type": "p",
              "text": "Zum ersten Mal sah Barner alle Anzeigen seiner Wettbewerber an einem Ort, neben ihren Social-Media-Kanälen: Follower, Wachstum und die erfolgreichsten Beiträge. Die Ansicht blieb aktuell. Als Optika Anda Ende September von 13 auf 31 aktive Meta-Anzeigen ging und General Optica an einem einzigen Tag 7 hinzufügte, sah das Team es noch in derselben Woche – nicht Monate später in einer Präsentation. Die Ansicht zeigte auch, wo Barner bereits herausstach: Auf LinkedIn lag die Marke auf Platz 4 der 10 verfolgten Marken, 25,3 % über dem Median."
            }
          ]
        },
        {
          "label": "Creatives im großen Stil",
          "title": "Mehr als 400 KI-Anzeigen-Creatives, auf Kroatisch erstellt und direkt an die Kampagnen geliefert",
          "blocks": [
            {
              "type": "p",
              "text": "Wer den Markt kennt, schreibt das Briefing leicht. Im Bereich Kampagnen plante Checkgrow den Start: Barner Launch - Aug 2026 ging am 27. Juli 2026 auf Instagram und Google Ads live, ab dem 8. September kam eine Influencer-Kampagne auf Meta hinzu."
            },
            {
              "type": "p",
              "text": "Dann leistete das Creative Studio, was ein kleines Team von Hand nie schaffen würde. Auf Basis von Marke, Produkten und Zielgruppen aus dem Firmen-Brain generierte es 423 Anzeigen-Creatives für Barner, auf Kroatisch getextet und für jede Platzierung zugeschnitten. Zeilen wie „Predugo si pred ekranom? Zaštiti svoj vid“ („Zu lange vor dem Bildschirm? Schütze deine Augen“) sprachen direkt die Menschen an, für die Barner Brillen macht, und ein einfaches Angebot von 30 % Rabatt mit dem Code ALL30 gab ihnen einen Grund, es auszuprobieren."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-creative-studio-ai-meta-ad-creatives-croatian.webp",
                "alt": "Creative Studio in Checkgrow innerhalb der Barner-Kampagne: freigegebene, KI-generierte Meta-Anzeigen-Creatives auf Kroatisch für Barner-Bildschirmbrillen, jeweils mit dem Angebot 30 % Rabatt mit ALL30, einem Kaufen-Button und ihrer Headline",
                "width": 2000,
                "height": 1073
              },
              "caption": "Freigegebene Meta-Creatives auf Kroatisch, im Creative Studio innerhalb der Barner-Kampagne generiert."
            },
            {
              "type": "p",
              "text": "Von diesen Creatives wurden 395 freigegeben und aus derselben Ansicht direkt in die Kampagnen geschickt – ohne Export, erneutes Hochladen oder Nachbauen von Anzeigen in einem anderen Tool. Weil jedes Creative mit seinen Ergebnissen verknüpft blieb, prägte das Reporting die nächste Runde: Die KI-Optimierungen zeigten, welche Anzeigen konvertierten, und genau davon erstellte das Team mehr. Erstellen, starten, lernen, verbessern – alles in einem Kreislauf."
            },
            {
              "type": "stats",
              "variant": "findings",
              "items": [
                {
                  "value": "423",
                  "label": "KI-Anzeigen-Creatives, im Creative Studio für Barner generiert"
                },
                {
                  "value": "395",
                  "label": "freigegeben und direkt an die Meta- und Google-Ads-Kampagnen von Barner gesendet"
                }
              ]
            }
          ]
        },
        {
          "label": "Tracking und KPIs",
          "title": "Ein Funnel, von der ersten Impression bis zum Kauf",
          "blocks": [
            {
              "type": "p",
              "text": "Vor Checkgrow bedeutete die Frage „Funktioniert das?“, drei Plattformen zu öffnen und Zahlen abzugleichen, die nie ganz zusammenpassten. In Insights stehen Meta, Google Ads und Google Analytics in einem Funnel, sodass sich die gesamte Customer Journey von oben nach unten lesen lässt."
            },
            {
              "type": "p",
              "text": "Oben im Funnel erzielten die Meta-Anzeigen 3,8 Millionen Impressionen und 33.600 Klicks, Google Ads 605.700 Impressionen und 7.727 Klicks. In der Mitte riefen Besucher 86.765-mal Produktlisten und 25.039-mal einzelne Produkte auf. Unten standen die Käufe, und ein Klick darauf zeigte, woher sie kamen."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-insights-conversion-funnel-attribution.webp",
                "alt": "Conversion-Funnel von Barner in Checkgrow Insights: Impressionen und Klicks von Meta und Google Ads oben im Funnel, Produktaufrufe in der Mitte, Käufe unten sowie die Kaufquellen nach Sitzung: Katalogverkäufe über bezahltes Instagram 39,5 %, direkt 13,2 %, Performance Max 11,1 %",
                "width": 1596,
                "height": 1150
              },
              "caption": "Funnel und Kaufquellen von Barner in Checkgrow Insights."
            },
            {
              "type": "p",
              "text": "Dieser Klick klärte die Frage, über die jedes Launch-Team streitet. Nach Sitzung brachte die Katalogverkaufskampagne auf bezahltem Instagram die meisten Käufe, 39,5 %, vor direkten Besuchen mit 13,2 % und der Performance-Max-Kampagne von Google mit 11,1 %. Insgesamt kamen 151 Käufe über eine Kampagne und 92 ohne. Insights erklärt sogar, warum zwei unterschiedliche Zahlen beide richtig sein können: Die Sitzungs-Attribution zeigt, welcher Besuch konvertiert hat, die Erstnutzer-Attribution, welcher Kanal den Kunden ursprünglich gebracht hat."
            }
          ]
        },
        {
          "label": "KI-Assistent",
          "title": "Die Daten fragen, statt in ihnen zu graben",
          "blocks": [
            {
              "type": "p",
              "text": "Sobald alles verbunden war, baute das Team keine Berichte mehr, um Fragen zu beantworten. Es fragte einfach. Anfang Oktober tippte jemand eine schlichte Frage in den KI-Assistenten: Welche Anzeigen konvertieren auf Meta am besten?"
            },
            {
              "type": "p",
              "text": "Etwa eine halbe Minute später kam die Antwort, mit einer Tabelle. In den 30 Tagen vom 7. September bis 6. Oktober war Brad Offer 34,30 die stärkste Meta-Anzeige: 13 Conversions bei Ausgaben von 736,11 €, mit 56,62 € die niedrigsten Kosten pro Conversion aller Anzeigen mit nennenswertem Volumen, und der höchste Umsatz, 679,07 €. Tortoise Offer 34,30 brachte die meisten Conversions, 16, allerdings zu je 68,76 €."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-ai-assistant-best-converting-meta-ads.webp",
                "alt": "Der KI-Assistent von Checkgrow beantwortet die Frage „Which ads are converting the best in Meta“: eine Tabelle der Top-Meta-Anzeigen von Barner nach Conversions, Ausgaben, Kosten pro Conversion, Klickrate und Umsatz, angeführt von Brad Offer 34,30",
                "width": 1380,
                "height": 1012
              },
              "caption": "Der KI-Assistent beantwortet eine Performance-Frage aus den verbundenen Meta-Daten von Barner, Oktober 2026."
            },
            {
              "type": "p",
              "text": "Keine Exporte, keine Tabellenkalkulationen, kein Warten auf den Wochenbericht. Derselbe Chat kann die Wettbewerber, die Creatives oder den Funnel einbeziehen, weil der KI-Assistent aus dem Firmen-Brain und den verbundenen Konten von Barner antwortet statt aus dem offenen Internet. Aus der Performance-Analyse wird ein Gespräch."
            },
            {
              "type": "stats",
              "variant": "findings",
              "items": [
                {
                  "value": "56,62 €",
                  "label": "niedrigste Kosten pro Conversion bei nennenswertem Volumen: Brad Offer 34,30, 7. September bis 6. Oktober 2026"
                },
                {
                  "value": "679,07 €",
                  "label": "Umsatz aus Brad Offer 34,30 in denselben 30 Tagen, der höchste aller Meta-Anzeigen"
                },
                {
                  "value": "16",
                  "label": "Conversions aus Tortoise Offer 34,30, die meisten nach Volumen"
                }
              ]
            }
          ]
        },
        {
          "label": "Was Checkgrow fand",
          "title": "Instagram brachte die Menge, der Webshop machte daraus Käufe",
          "blocks": [
            {
              "type": "p",
              "text": "Sobald die Instagram- und Meta-Konten von Barner verbunden waren, wurde das Bild der Kanäle innerhalb weniger Tage klar, und die Sitzungen pro Kanal waren in Insights nur einen Klick entfernt. Instagram war der Motor des Starts: 9.545 Sitzungen, davon 6.966 aus bezahlten Anzeigen, vor Google mit 4.143 und direkten Besuchen mit 3.444. Bezahltes Instagram allein brachte 32.198 Nutzer, die bezahlte Google-Suche 16.186."
            },
            {
              "type": "p",
              "text": "Auch die Suche leistete still ihren Beitrag. Wenn Menschen in Kroatien den neuen Namen nachschlugen, wartete dort die Google-Anzeige „Barner je stigao u Hrvatsku“ („Barner ist in Kroatien angekommen“). Sie konvertierte 13-mal, bei einer Klickrate von 11,82 %."
            },
            {
              "type": "stats",
              "variant": "findings",
              "items": [
                {
                  "value": "9.545",
                  "label": "Instagram-Sitzungen, davon 6.966 aus bezahlten Anzeigen"
                },
                {
                  "value": "32.198",
                  "label": "Nutzer über bezahltes Instagram, vor der bezahlten Google-Suche mit 16.186"
                },
                {
                  "value": "11,82 %",
                  "label": "Klickrate der Suchanzeige zur Marke, mit 13 Conversions"
                }
              ]
            }
          ]
        },
        {
          "label": "Die Ergebnisse",
          "title": "160,6 % mehr Käufe, 119 % mehr neue Besucher",
          "blocks": [
            {
              "type": "p",
              "text": "Einen Monat nach dem Start bestätigten die Zahlen, was das Team Tag für Tag hatte wachsen sehen. Zwischen dem 2. September und dem 2. Oktober 2026 verzeichnete der Webshop von Barner 357 Käufe, 160,6 % mehr als die 137 im Vormonat. Die Zahl neuer Besucher hat sich mehr als verdoppelt, von 4.700 auf 10.290, ein Plus von 119 %."
            },
            {
              "type": "stats",
              "variant": "results",
              "items": [
                {
                  "value": "357",
                  "label": "Käufe, 160,6 % mehr als im Vorzeitraum"
                },
                {
                  "value": "+119 %",
                  "label": "neue Besucher: 10.290 Erstbesuche gegenüber 4.700"
                },
                {
                  "value": "69.190",
                  "label": "Seitenaufrufe, dazu 86.765 Aufrufe von Produktlisten"
                }
              ]
            },
            {
              "type": "p",
              "text": "Der stärkste Tag war der 29. September mit 14.809 Events auf der Website, und der Freitag wurde zum stärksten Wochentag. Die Launch-Kampagne allein verzeichnete bis zum 2. Oktober 316 Käufe. Smart Reporting fasst all das automatisch zusammen, sodass das Team den Monat in einer Minute liest, statt den Bericht selbst zu bauen."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-smart-reporting-new-visitors-119.webp",
                "alt": "Smart Reporting in Checkgrow für Barner: bezahltes Instagram als wichtigste Traffic-Quelle, neue Besucher plus 119 % mit 10.290 Erstbesuchen gegenüber 4.700, Spitzenaktivität am 29. September mit 14.809 Events, Top-Events und Sitzungen nach Kanal, angeführt von Instagram mit 9.545",
                "width": 1796,
                "height": 1084
              },
              "caption": "Neue Besucher plus 119 % und Sitzungen nach Kanal, im Smart Reporting von Checkgrow."
            }
          ]
        }
      ],
      "statement": {
        "text": "Barner trat in Kroatien gegen 20 Wettbewerber und rund 1.000 laufende Anzeigen an, mit einem neuen Webshop und ohne lokalen Namen. Checkgrow gab dem Team einen Ort, um den Markt kennenzulernen, die Creatives zu erstellen, die Kampagnen zu steuern und die Ergebnisse auszuwerten – und einen Monat später verzeichnete der Webshop 357 Käufe gegenüber 137 zuvor.",
        "cite": "Checkgrow"
      },
      "faq": [
        {
          "q": "Wie kann eine E-Commerce-Marke mit Checkgrow in einem neuen Land starten?",
          "a": "Indem sie den gesamten Start aus einem Checkgrow-Workspace steuert. Barner richtete sein Firmen-Brain im Wissenszentrum ein, verband Google Analytics, Meta, Google Ads und Instagram, analysierte die Anzeigen aller Wettbewerber im Bereich Wettbewerber, generierte seine Anzeigen-Creatives im Creative Studio und verfolgte die Ergebnisse in Insights. Im ersten Monat des Starts in Kroatien stiegen die Käufe um 160,6 % und die neuen Besucher um 119 %."
        },
        {
          "q": "Was ist ein Firmen-Brain, und warum ist es für KI-Marketing wichtig?",
          "a": "Ein Firmen-Brain ist eine strukturierte Sammlung all dessen, was Ihr Unternehmen ausmacht: Produkte, Zielgruppen, Markenstimme, Angebote und Ziele. In Checkgrow liegt es im Wissenszentrum und speist jede KI-Funktion, sodass Kampagnenpläne, Anzeigentexte und Antworten des KI-Assistenten auf Ihren eigenen Fakten beruhen statt auf allgemeinen Vermutungen. Verbundene Konten wie Google Analytics, Meta und Google Ads ergänzen diesen Kontext um Live-Performance-Daten."
        },
        {
          "q": "Welche Konten und Tools kann Checkgrow verbinden?",
          "a": "Checkgrow ist mit Meta (Facebook- und Instagram-Anzeigen), Google Ads, Google Analytics, LinkedIn, Instagram und Notion integriert, außerdem mit Automatisierungs-Workflows. Nach dem Verbinden fließen ihre Daten in einen Workspace: Insights wertet Traffic, Anzeigen und Conversions gemeinsam aus, und der KI-Assistent beantwortet Fragen über alle Quellen hinweg."
        },
        {
          "q": "Wie verfolgt Checkgrow die Anzeigen und Social-Media-Kanäle von Wettbewerbern?",
          "a": "Im Bereich Wettbewerber verfolgt die KI-Recherche von Checkgrow die Marken, die Sie auswählen, und zeigt ihre aktiven Anzeigen auf Meta und LinkedIn, ihre Social-Media-Follower und deren Wachstum sowie die erfolgreichsten Beiträge, dazu Themen, Keywords und News. Barner verfolgte so 20 Wettbewerber, sah rund 1.000 laufende Anzeigen in einer Ansicht und erkannte Veränderungen noch in derselben Woche, etwa einen Wettbewerber, der seine aktiven Anzeigen mehr als verdoppelte."
        },
        {
          "q": "Wie produziert ein kleines Marketing-Team mit KI Hunderte Anzeigen-Creatives?",
          "a": "Mit dem Creative Studio, das Anzeigen-Creatives aus Marke, Produkten und Zielgruppen in Ihrem Firmen-Brain generiert, in den Sprachen und Formaten, die jeder Kanal braucht. Ihr Team prüft und gibt sie frei und schickt sie dann direkt in die Kampagne, ohne Anzeigen in einem anderen Tool nachzubauen. Barner generierte 423 Creatives auf Kroatisch, schickte 395 an seine Meta- und Google-Ads-Kampagnen und nutzte dann das KI-Reporting, um mehr von den Anzeigen zu erstellen, die konvertierten."
        },
        {
          "q": "Wie sehe ich, welche Anzeigen und Kanäle tatsächlich Käufe bringen?",
          "a": "Checkgrow Insights führt Meta, Google Ads und Google Analytics in einem Funnel zusammen, von Impressionen und Klicks oben bis zu Käufen unten, und zeigt, woher jede Conversion kam. Es trennt die Sitzungs-Attribution, also den Besuch, in dem ein Kauf stattfand, von der Erstnutzer-Attribution, also dem Kanal, der den Kunden zuerst gebracht hat, sodass sich beide Zahlen richtig lesen lassen."
        },
        {
          "q": "Was kann ich den KI-Assistenten von Checkgrow fragen?",
          "a": "Alles über Ihr Unternehmen und seine Performance: welche Anzeigen am besten konvertieren, wie dieser Monat im Vergleich zum letzten abschneidet, was ein Wettbewerber diese Woche gestartet hat oder welche Creatives als Nächstes entstehen sollten. Der KI-Assistent antwortet aus Ihrem Firmen-Brain und Ihren verbundenen Konten, nicht aus dem offenen Internet. Als Barner fragte, welche Anzeigen auf Meta am besten konvertieren, lieferte er in etwa 33 Sekunden eine Tabelle der Top-Anzeigen mit Ausgaben, Conversions, Kosten pro Conversion, Klickrate und Umsatz."
        },
        {
          "q": "Wie schnell sieht ein Unternehmen mit Checkgrow Ergebnisse?",
          "a": "Das hängt von Markt, Budget und Angebot ab, und keine Plattform kann eine Zahl versprechen. Zuerst werden das Firmen-Brain eingerichtet und die Konten verbunden; Wettbewerbsanalyse und Creatives können direkt folgen. Bei Barner zeigte bereits der erste volle Monat des Starts in Kroatien 160,6 % mehr Käufe und 119 % mehr neue Besucher als im Vorzeitraum."
        }
      ],
      "footnote": "Zahlen aus dem Checkgrow-Workspace von Barner, erfasst am 2. Oktober 2026. Die Antwort des KI-Assistenten bezieht sich auf den 7. September bis 6. Oktober 2026."
    },
    {
      "slug": "wespa-2028-leads-in-a-month",
      "company": "WESPA",
      "draft": false,
      "title": "Wie WESPA, ein Coworking- und Hospitality-Anbieter in Zagreb, mit KI-Marketing 2.028 Leads gewann",
      "description": "Wie der Zagreber Coworking- und Hospitality-Anbieter WESPA Checkgrow für Wettbewerbsanalyse, Website-Audits, KI-Inhalte und Aufgaben nutzte: 2.028 Leads, 6x so viele WhatsApp-Chats.",
      "kicker": "Coworking und Hospitality, Kroatien",
      "publishedAt": "2026-10-14",
      "heroStats": [
        {
          "value": "2.028",
          "label": "in Checkgrow erfasste Leads aus sieben Kampagnen"
        },
        {
          "value": "+496 %",
          "label": "WhatsApp-Gespräche in einem Monat, von 99 auf 590"
        }
      ],
      "features": [
        "Wissenszentrum",
        "Wettbewerber",
        "Social Media",
        "Website",
        "Kampagnen",
        "Inhalte",
        "Leads",
        "Aufgaben",
        "Insights"
      ],
      "hero": {
        "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-hospitality-zagreb-live-music-event.webp",
        "alt": "WESPA Hospitality in Zagreb: ein DJ und ein Saxofonist treten bei einer WESPA-Veranstaltung unter blauem Licht auf, daneben das Logo von WESPA Hospitality",
        "width": 1800,
        "height": 1200
      },
      "clientMark": "",
      "about": {
        "summary": "Ein Anbieter von Coworking, Büroflächen und Eventlocations in Zagreb, mit Besprechungsräumen, einem Hospitality-Programm aus Veranstaltungen und einer wachsenden Community.",
        "facts": [
          {
            "label": "Branche",
            "value": "Coworking, Büroflächen und Hospitality"
          },
          {
            "label": "Standort",
            "value": "Zagreb, Kroatien"
          },
          {
            "label": "Markt",
            "value": "Unternehmen und Berufstätige in Zagreb"
          },
          {
            "label": "Zeitraum",
            "value": "2. September bis 2. Oktober 2026"
          }
        ]
      },
      "lead": "WESPA betreibt in Zagreb Coworking-Spaces, private Büros, Besprechungsräume und Eventlocations, mit einem Veranstaltungsprogramm und einer wachsenden Community. Räume und Menschen waren da. Was WESPA suchte, war ein stetiger Strom neuer Anfragen: nach einer Führung, einem Schreibtisch, einem Raum für einen Workshop, einer Location für eine Feier. Seit das Marketing über Checkgrow läuft, hat WESPA 2.028 Leads an einem Ort gesammelt, und die WhatsApp-Gespräche haben sich in einem Monat versechsfacht.",
      "takeaways": [
        "WESPA richtete sein Firmen-Brain im Wissenszentrum von Checkgrow ein und verband Google Analytics, Meta, Google Ads und Instagram, sodass jede Kampagne von denselben Fakten und Daten ausging.",
        "Die Bereiche Wettbewerber und Social Media verfolgten Social-Media-Kanäle, Wachstum und laufende Anzeigen von neun Coworking-Wettbewerbern an einem Ort und zeigten, dass WESPA auf Instagram auf Platz 2 von 8 lokalen Accounts lag.",
        "Der Bereich Website prüfte wespa.hr auf Conversion, SEO und KI-Sichtbarkeit, und der Bereich Inhalte lieferte Markttrends, die sich mit einem Klick in Beiträge und Artikel verwandeln ließen.",
        "Der Bereich Aufgaben machte daraus eine priorisierte, von der KI empfohlene To-do-Liste, während fünf Kampagnen, eine pro Angebot, jeden Lead in Checkgrow Leads brachten: 2.028 aus sieben Kampagnen.",
        "Über alle Kanäle hinweg konvertierten 26,8 % der interagierenden Besucher am Ende des Funnels, die WhatsApp-Gespräche stiegen um 496 % und die neuen Besucher um 136 %."
      ],
      "keywords": [
        "Coworking Marketing",
        "Hospitality-Marketing",
        "Eventlocation Marketing",
        "Leadgenerierung",
        "Coworking Space Zagreb",
        "Website-Conversion-Audit",
        "SEO und GEO",
        "KI-Sichtbarkeit",
        "Content-Trends",
        "KI-Marketingaufgaben",
        "Marketing-Funnel",
        "WhatsApp-Leads",
        "Wettbewerbsanalyse",
        "WESPA",
        "Checkgrow"
      ],
      "sections": [
        {
          "label": "Die Herausforderung",
          "title": "Viel Fläche zu vermarkten, und neun Wettbewerber mit demselben Angebot",
          "blocks": [
            {
              "type": "p",
              "text": "Coworking ist ein Markt, in dem alle dieselben drei Dinge versprechen: Flexibilität, Community und guten Kaffee. WESPA bietet mehr als einen Schreibtisch: In seinen Räumen finden Fotoshootings, Workshops, Konzerte und Firmenfeiern statt. In Zagreb konkurrierte WESPA jedoch mit neun anderen Anbietern um dieselben Freelancer, Start-ups und Unternehmen, und einige davon gaben viel Geld für Werbung aus."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-event-space-zagreb-catering-bar.webp",
                "alt": "Eventfläche von WESPA in Zagreb, hergerichtet für eine Firmenveranstaltung: eine lange Catering-Tafel mit Canapés unter einem modernen Kronleuchter, eine pink beleuchtete Bar und eine Tanzfläche mit Discolicht",
                "width": 1800,
                "height": 1201
              },
              "caption": "Die Eventfläche von WESPA in Zagreb, hergerichtet für eine Firmenfeier."
            },
            {
              "type": "p",
              "text": "Die Community gehörte bereits zu den Stärken von WESPA, und das Instagram-Publikum zeigte es. Aber Follower sind keine Leads. Die eigentliche Frage war, wie sich diese Aufmerksamkeit in Gespräche mit Menschen verwandeln lässt, die bereit sind, eine Führung, einen Besprechungsraum, einen Schreibtisch oder eine Location zu buchen – und wie man erfährt, welche Botschaft sie hergebracht hat."
            }
          ]
        },
        {
          "label": "Firmen-Brain",
          "title": "Am Anfang steht alles, was WESPA besonders macht",
          "blocks": [
            {
              "type": "p",
              "text": "Die Arbeit begann im Wissenszentrum, dem Firmen-Brain von Checkgrow. Räume, Mitgliedschaften, Besprechungsräume, Veranstaltungen und Community-Programm von WESPA wurden im Detail beschrieben, jeweils mit den Zielgruppen, die sie ansprechen. Das Brain ist heute zu 79 % vollständig – genug, damit jede Kampagne und jeder Text vom echten Angebot von WESPA ausgeht statt von einem generischen Coworking-Pitch."
            },
            {
              "type": "p",
              "text": "Dann verband WESPA seine Konten: Google Analytics, Meta, Google Ads und sein Instagram, @wespa.hr. Im Wissensgraphen läuft alles rund um WESPA selbst zusammen: auf der einen Seite das Unternehmenswissen mit Marke, Produkten, Buyer Personas, idealen Kundenprofilen, Anwendungsfällen, SEO-Keywords und Conversion-Strategie, auf der anderen Website, Kampagnen, Leads, verfolgte Wettbewerber, Vertrieb und Integrationen. Jede KI-Funktion in Checkgrow liest aus diesem Graphen. Deshalb klangen die Kampagnen, Inhalte und Empfehlungen, die folgten, alle nach WESPA."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-knowledge-center-company-brain-knowledge-graph.webp",
                "alt": "Wissenszentrum in Checkgrow für WESPA Spaces bei 79 % Master-Wissen: der Wissensgraph, der WESPA mit seinem Unternehmenswissen (Marke, Produkte, Buyer Personas, ideale Kundenprofile, Anwendungsfälle, SEO-Keywords, Conversion-Strategie) sowie mit Website, Kampagnen, Leads, verfolgten Unternehmen, Wettbewerbern, Vertrieb, Integrationen und KI-Erinnerungen verbindet",
                "width": 2000,
                "height": 1073
              },
              "caption": "Das Firmen-Brain von WESPA als Wissensgraph im Wissenszentrum von Checkgrow."
            }
          ]
        },
        {
          "label": "Wettbewerbsanalyse",
          "title": "Social Media und Anzeigen aller Wettbewerber an einem Ort",
          "blocks": [
            {
              "type": "p",
              "text": "Als Nächstes richtete Checkgrow den Blick nach außen. Im Bereich Wettbewerber behält WESPA die neun Coworking- und Workspace-Anbieter, mit denen es konkurriert, in einer Tabelle im Blick: ihre Websites, ihre Social-Media-Kanäle, wie schnell ihr Publikum wächst, wo sie ansässig sind und wie viele Anzeigen sie schalten. Ein monatlicher Scan hält das Bild aktuell, sodass niemand neun Instagram-Profile und zwei Anzeigenbibliotheken von Hand prüfen muss."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-competitors-coworking-social-media-ads-tracking.webp",
                "alt": "Checkgrow-Bereich Wettbewerber für WESPA Spaces: neun verfolgte Coworking-Wettbewerber, darunter Regus, Impact Hub Zagreb, Instant Office, Rent24, Spaces, STIR UP, Coworking Labin, Terminal Zagreb und MatchBOX Coworking, mit ihren Websites, Social-Media-Kanälen, Follower-Wachstum, Hauptsitz, automatischem Tracking und aktiven LinkedIn- und Meta-Anzeigen",
                "width": 2000,
                "height": 1068
              },
              "caption": "Die neun verfolgten Wettbewerber von WESPA, mit Social-Media-Wachstum und aktiven Anzeigen, im Checkgrow-Bereich Wettbewerber."
            },
            {
              "type": "p",
              "text": "Die Tabelle machte den Markt auf einen Blick lesbar. Regus, der internationale Riese, schaltete 98 Anzeigen auf Meta und 45 auf LinkedIn, während die meisten lokalen Anbieter kaum warben: Instant Office hatte 3 laufende Meta-Anzeigen, Terminal Zagreb 1. Auch das Wachstum des Publikums erzählte seine eigene Geschichte: Instant Office legte um 3,38 % zu und Coworking Labin um 1,91 %, während Terminal Zagreb Follower verlor."
            },
            {
              "type": "p",
              "text": "Der Bereich Social Media stellte das eigene Instagram von WESPA in diesen Kontext, und das Bild war ermutigend. Unter den acht verfolgten lokalen Accounts lag WESPA mit 5.000 Followern auf Platz 2, 172,9 % über dem Median der Wettbewerber von 1.800 und vor Rent24, MatchBOX Coworking Studio und Coworking Labin. Nur Spaces lag vorn. WESPA musste kein Publikum aus dem Nichts aufbauen; es musste dem vorhandenen einen Grund geben, sich zu melden."
            }
          ]
        },
        {
          "label": "Website",
          "title": "wespa.hr so sehen, wie Besucher, Suchmaschinen und KI die Website sehen",
          "blocks": [
            {
              "type": "p",
              "text": "Anzeigen wirken nur, wenn die Website die Menschen konvertiert, die sie schicken. Im Bereich Website führte Checkgrow einen vollständigen Conversion-Audit von wespa.hr durch, über mehrere Seiten auf Desktop und Mobilgeräten, und bewertete die Website Bereich für Bereich: Conversion-Strategie, Marke und Botschaft, UX und UI sowie die Übereinstimmung mit Best Practices für Dienstleister. Daneben stehen SEO, Tracking und KI-Sichtbarkeit, die zeigt, wie die Website in KI-Antwortmaschinen und in der Suche erscheint."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-website-analysis-seo-geo-ai-visibility-conversion-audit.webp",
                "alt": "Website-Analyse in Checkgrow für wespa.hr: ein Conversion-Audit-Score von 32 von 100 mit Bewertungen nach Bereich für Conversion-Strategie, Marke und Botschaft, UX und UI sowie Playbook-Fit, 5 Probleme, die Anmeldungen blockieren, 7 Quick Wins, eine Prüfung von serverseitigem Tracking und Compliance sowie Tabs für KI-Sichtbarkeit, SEO, Tracking und Wettbewerber",
                "width": 2000,
                "height": 1074
              },
              "caption": "Die Website-Analyse für wespa.hr in Checkgrow, daneben KI-Sichtbarkeit, SEO und Tracking."
            },
            {
              "type": "p",
              "text": "Der Audit war ehrlich, und genau darum geht es. Er bewertete die Website mit 32 von 100 Punkten und nannte die Gründe: ein mobiler Hero-Bereich ohne klaren Call to Action, ein Kontaktformular mit 11 Feldern und keine FAQ für häufige Fragen. Außerdem listete er auf, was zuerst zu beheben war: 5 Probleme, die Anmeldungen blockierten, und 7 Quick Wins, dazu eine Tracking-Prüfung mit der Empfehlung für serverseitiges Tagging. Für WESPA war die Website damit kein Ratespiel mehr, sondern eine priorisierte Liste von Korrekturen."
            }
          ]
        },
        {
          "label": "Kampagnen",
          "title": "Fünf Kampagnen, eine für jeden Grund vorbeizukommen",
          "blocks": [
            {
              "type": "p",
              "text": "Ein Coworking-Space verkauft mehrere Dinge zugleich, und eine einzige generische Anzeige kann nicht alle ansprechen. Statt einer Kampagne plante Checkgrow deshalb eine pro Angebot. Die Markenkampagne Work. Meet. Belong. WESPA. lief auf Meta, ergänzt um vier weitere: eine für Veranstaltungen, eine für Büros und Besprechungsräume, eine für Coworking-Mitgliedschaften und eine für Recruiting. Parallel lief Google Ads und fing die Menschen ab, die bereits suchten."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-coworking-zagreb-photo-shoot-creative-studio-space.webp",
                "alt": "Ein Mode-Fotoshooting im Kreativraum von WESPA in Zagreb: ein Fotograf, ein Lichtassistent mit Schirmblitz und Softbox und ein Model vor einer Wand aus Kletterpflanzen",
                "width": 1800,
                "height": 1202
              },
              "caption": "Ein Fotoshooting in einem der Kreativräume von WESPA in Zagreb, eines der Angebote, für das die Kampagnen werben."
            },
            {
              "type": "p",
              "text": "Weil jede Kampagne auf demselben Firmen-Brain aufbaute, konnte jede ihrer Zielgruppe etwas Spezifisches sagen und trotzdem nach WESPA klingen. Eine Gründerin auf der Suche nach einem privaten Büro und ein Freelancer, der einen Schreibtisch auf Wochenbasis sucht, konnten jeweils eine Anzeige sehen, die für sie geschrieben war, von derselben Marke."
            }
          ]
        },
        {
          "label": "Inhalte",
          "title": "Trend-Inhalte für den Markt, einen Klick entfernt",
          "blocks": [
            {
              "type": "p",
              "text": "Eine Community-Marke braucht einen steten Strom an Themen, die sich zu posten lohnen. Im Bereich Inhalte recherchiert Checkgrow jede Woche die Trends, die den Markt von WESPA prägen, zu Keywords wie Coworking-Spaces und Eventflächen in Europa, und ordnet jeden Artikel danach, wie relevant er für das Geschäft von WESPA ist."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-content-trends-coworking-market-ai-articles.webp",
                "alt": "Content-Trends in Checkgrow für WESPA Spaces: Markenempfehlungen mit 7 Chancen, bereit zum Umschreiben, und 28 Fokusartikel zu Coworking-Spaces und Eventflächen in Europa, nach Relevanz geordnet, jeweils mit den Aktionen „Ansehen“ und „Umschreiben“",
                "width": 2000,
                "height": 1078
              },
              "caption": "Markttrends für WESPA im Bereich Inhalte von Checkgrow, nach Relevanz geordnet und bereit zum Umschreiben."
            },
            {
              "type": "p",
              "text": "Statt bei einem leeren Blatt anzufangen, beginnt das Team beim Markt: mit einem Bericht, wonach der Coworking-Markt bis 2035 ein Volumen von 17,07 Milliarden US-Dollar erreichen soll, oder mit einer Analyse, wo sich digitale Nomaden in Europa niederlassen sollten. Ein Klick auf „Umschreiben“ macht aus einem Trend einen Beitrag oder Artikel in der eigenen Stimme von WESPA, gestützt auf das Firmen-Brain. Sieben Markenempfehlungen standen zum Umschreiben bereit."
            }
          ]
        },
        {
          "label": "Leads",
          "title": "Jeder Lead in einer Liste, mit der Kampagne, die ihn gebracht hat",
          "blocks": [
            {
              "type": "p",
              "text": "Fünf Kampagnen zu betreiben, hilft nur, wenn man sie auseinanderhalten kann. In Checkgrow Leads landet jede Anfrage in einer Liste, markiert mit der Kampagne, die sie gebracht hat. Niemand bei WESPA musste Kontakte aus Meta kopieren, Formulareinträge Anzeigen zuordnen oder raten, auf welches Angebot jemand reagiert hatte."
            },
            {
              "type": "p",
              "text": "Die Liste wuchs schnell: 2.028 Leads aus sieben Kampagnen, davon 202 allein in der letzten Woche. Für ein Team, das nebenbei auch Räume, Veranstaltungen und Community betreut, war das der Unterschied zwischen einem vollen Posteingang und einer echten Pipeline: jeder Lead an einem Ort, bereit für das Follow-up."
            },
            {
              "type": "stats",
              "variant": "results",
              "items": [
                {
                  "value": "2.028",
                  "label": "Leads in Checkgrow Leads, jeder mit seiner Kampagne verknüpft"
                },
                {
                  "value": "7",
                  "label": "Kampagnen, die Leads brachten, über Meta und Google Ads"
                },
                {
                  "value": "202",
                  "label": "neue Leads in der letzten Woche"
                }
              ]
            }
          ]
        },
        {
          "label": "Aufgaben",
          "title": "Eine KI-To-do-Liste für das, was diese Woche zählt",
          "blocks": [
            {
              "type": "p",
              "text": "Wenn Wettbewerber, Website, Inhalte und Kampagnen in einem Workspace liegen, lautet die nächste Frage immer gleich: Was sollen wir zuerst tun? Der Bereich Aufgaben beantwortet sie. Die KI von Checkgrow liest alles, was mit dem Workspace verbunden ist, und empfiehlt die Aufgaben, die für WESPA gerade zählen, jeweils mit Priorität, Kategorie und Zeitschätzung."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-ai-recommended-marketing-tasks.webp",
                "alt": "Empfohlene Aufgaben in Checkgrow für WESPA: acht KI-generierte Aufgaben aus Marketing, Analytics, Design und Vertrieb mit Priorität, Kategorie und Zeitschätzung, darunter eine Videokampagne für Coworking in Zagreb starten, das Conversion-Tracking validieren, eine Karussell-Kampagne mit vier Angeboten aufbauen und eine Landingpage zum Vergleich von Coworking-Angeboten erstellen",
                "width": 2000,
                "height": 1265
              },
              "caption": "Von der KI empfohlene Aufgaben für WESPA im Bereich Aufgaben von Checkgrow, wöchentlich aktualisiert."
            },
            {
              "type": "p",
              "text": "Die Empfehlungen waren auf WESPA zugeschnitten, keine allgemeinen Marketingratschläge: eine Videokampagne für Coworking in Zagreb mit 20 € pro Tag starten, das Conversion-Tracking validieren, eine Karussell-Kampagne mit vier Angeboten von WESPA aufbauen, eine Landingpage erstellen, die Coworking-Tarife vergleicht, einen SEO-Cluster für Coworking-Suchen in Zagreb entwickeln und eine Follow-up-Sequenz für Anfragen einrichten. Ein Klick auf „Aufgabe generieren“ macht aus jeder Empfehlung eine Aufgabe mit bereits umrissenem Umfang, und die Liste wird jede Woche aktualisiert."
            }
          ]
        },
        {
          "label": "Tracking und KPIs",
          "title": "Ein Funnel, der zeigt, wo Menschen konvertieren",
          "blocks": [
            {
              "type": "p",
              "text": "Mit Google Analytics, Meta und Google Ads nebeneinander in Insights liest WESPA seinen gesamten Funnel über alle Kanäle, vom ersten Besuch bis zu dem Moment, in dem sich jemand meldet. Oben 71.039 Events: Seitenaufrufe, Sitzungen und Erstbesuche. In der Mitte 2.119 Interaktionen, angeführt von 1.032 WhatsApp-Interaktionen, 749 Datei-Downloads und 338 begonnenen Formularen. Unten 567 Conversions: Bestätigungen und abgeschickte Formulare."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-insights-funnel-reporting-conversion-rate.webp",
                "alt": "Funnel-Reporting in Checkgrow Insights für WESPA über alle Kanäle: 71.039 Events oben im Funnel, 2.119 Events in der Mitte, angeführt von 1.032 WhatsApp-Interaktionen, und 567 Conversions unten, mit einer Rate von 26,8 % von interagierenden Besuchern zu Conversions und der bezahlten Google-Suche als wichtigster Quelle",
                "width": 2000,
                "height": 612
              },
              "caption": "Der Funnel von WESPA über alle Kanäle in Checkgrow Insights, mit den Conversion-Raten zwischen den Stufen."
            },
            {
              "type": "p",
              "text": "Herausragend war der letzte Schritt. Von den Menschen, die interagierten, konvertierten anschließend 26,8 % am Ende des Funnels – eine starke Rate für ein Geschäft, in dem jede Conversion eine echte Anfrage ist. Die bezahlte Google-Suche brachte die meisten Conversions, gefolgt von der organischen Google-Suche und direkten Besuchen."
            },
            {
              "type": "p",
              "text": "Insights zeigte auch, was Menschen dazu brachte, sich zu melden. Es war nicht die polierte Markenbotschaft, sondern die Community. Zwei Versionen des Creatives community5 .1 brachten auf Meta die meisten Ergebnisse, 239 und 133, beide mit Klickraten über 3 %, und ein Creative für ein einzelnes Kochevent brachte allein 128 Ergebnisse."
            },
            {
              "type": "stats",
              "variant": "findings",
              "items": [
                {
                  "value": "26,8 %",
                  "label": "der interagierenden Besucher konvertierten am Ende des Funnels, über alle Kanäle"
                },
                {
                  "value": "1.032",
                  "label": "WhatsApp-Interaktionen in der Mitte des Funnels"
                },
                {
                  "value": "239",
                  "label": "Ergebnisse aus dem stärksten Community-Creative, bei einer Klickrate von 3,56 %"
                }
              ]
            }
          ]
        },
        {
          "label": "Die Ergebnisse",
          "title": "Sechsmal so viele WhatsApp-Gespräche",
          "blocks": [
            {
              "type": "p",
              "text": "Für WESPA findet das wichtigste Gespräch auf WhatsApp statt, wo aus einer Frage nach einem Schreibtisch eine Führung wird. In einem Monat stiegen diese Gespräche von 99 auf 590, ein Plus von 496 %, begonnen von 275 verschiedenen Menschen. Smart Reporting machte das automatisch sichtbar: WhatsApp war die wichtigste Aktion auf der Website von WESPA."
            },
            {
              "type": "stats",
              "variant": "results",
              "items": [
                {
                  "value": "590",
                  "label": "WhatsApp-Gespräche, plus 496 %, von 275 Personen"
                },
                {
                  "value": "+136 %",
                  "label": "neue Besucher: 4.963 Erstbesuche gegenüber 2.103 zuvor"
                },
                {
                  "value": "+85,6 %",
                  "label": "Seitenaufrufe, auf 10.975"
                }
              ]
            },
            {
              "type": "p",
              "text": "Der Rest des Funnels zog mit. Die neuen Besucher stiegen um 136 % auf 4.963, die Seitenaufrufe um 85,6 % auf 10.975, und der Montag wurde zum besucherstärksten Wochentag auf der Website."
            },
            {
              "type": "figure",
              "variant": "wide",
              "image": {
                "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-smart-reporting-new-visitors-whatsapp-leads.webp",
                "alt": "Smart Reporting in Checkgrow für WESPA: bezahlte Google-Suche als wichtigste Traffic-Quelle, neue Besucher plus 136 % mit 4.963 Erstbesuchen gegenüber 2.103, Montag als stärkster Wochentag und WhatsApp als wichtigstes Aktions-Event mit 590 Klicks von 275 Nutzern",
                "width": 852,
                "height": 273
              },
              "caption": "Neue Besucher plus 136 % und WhatsApp als wichtigste Aktion, im Smart Reporting von Checkgrow."
            }
          ]
        }
      ],
      "statement": {
        "text": "WESPA hatte die Räume und die Community bereits. Checkgrow gab dem Unternehmen einen Ort, um seinen Markt zu verstehen, die Website zu verbessern, zu veröffentlichen, worüber der Markt sprach, für jedes Angebot eine Kampagne zu steuern und zu wissen, was als Nächstes zu tun ist – und das machte aus Aufmerksamkeit 2.028 Leads und sechsmal so viele WhatsApp-Gespräche.",
        "cite": "Checkgrow"
      },
      "faq": [
        {
          "q": "Wie kann ein Coworking-Space mit Checkgrow mehr Leads gewinnen?",
          "a": "Indem er sein Marketing aus einem Checkgrow-Workspace steuert: Räume und Angebote im Wissenszentrum beschreiben, lokale Wettbewerber analysieren, für jedes Angebot eine Kampagne starten und jede Anfrage in Leads sammeln. WESPA, ein Coworking-Anbieter in Zagreb, gewann so 2.028 Leads und steigerte seine WhatsApp-Gespräche in einem Monat um 496 %."
        },
        {
          "q": "Warum eine eigene Kampagne für jedes Angebot?",
          "a": "Weil Menschen, die einen Besprechungsraum, ein privates Büro oder einen Coworking-Platz suchen, auf unterschiedliche Botschaften reagieren. Im Bereich Kampagnen von Checkgrow kann jedes Angebot eine eigene Kampagne bekommen, aufgebaut auf demselben Firmen-Brain, damit die Marke konsistent bleibt. WESPA betrieb so fünf Meta-Kampagnen, für Community, Veranstaltungen, Büros und Besprechungsräume, Coworking und Recruiting, dazu Google Ads."
        },
        {
          "q": "Wie zeigt Checkgrow Leads, woher ein Lead kommt?",
          "a": "Jede Anfrage aus einer verbundenen Kampagne landet in einer Liste in Checkgrow Leads, markiert mit der Kampagne, die sie gebracht hat. Das erspart die manuelle Arbeit, Kontakte aus Werbeplattformen zu exportieren und Anzeigen zuzuordnen, und es zeigt, auf welches Angebot jeder Lead reagiert hat, sodass das Follow-up mit dem richtigen Gespräch beginnen kann."
        },
        {
          "q": "Wie prüft Checkgrow eine Website auf Conversion, SEO und KI-Sichtbarkeit?",
          "a": "Der Bereich Website in Checkgrow führt einen Conversion-Audit über mehrere Seiten auf Desktop und Mobilgeräten durch, bewertet jeden Bereich wie Conversion-Strategie, Botschaft und UX und macht aus den Ergebnissen eine priorisierte Liste aus Blockern und Quick Wins. SEO, Tracking und KI-Sichtbarkeit, also wie die Website in KI-Antwortmaschinen erscheint, liegen am selben Ort. Der Audit von WESPA fand 5 Probleme, die Anmeldungen blockierten, und 7 Quick Wins."
        },
        {
          "q": "Wie erstellt ein Unternehmen mit KI Inhalte zu den Trends seines Marktes?",
          "a": "Der Bereich Inhalte in Checkgrow recherchiert jede Woche die News und Trends hinter Ihren Keywords und ordnet jeden Artikel nach Relevanz für Ihr Geschäft. Ein Klick auf „Umschreiben“ macht aus einem Trend einen Beitrag oder Artikel in Ihrer eigenen Stimme, gestützt auf Ihr Firmen-Brain. WESPA verfolgt so Trends rund um Coworking und Eventflächen in Europa."
        },
        {
          "q": "Was sind von der KI empfohlene Aufgaben in Checkgrow?",
          "a": "Der Bereich Aufgaben in Checkgrow liest Ihre verbundenen Daten, Kampagnen, den Website-Audit und Ihre Wettbewerber und empfiehlt die Aufgaben, die gerade am wichtigsten sind, jeweils mit Priorität, Kategorie und Zeitschätzung. Ein Klick erzeugt die vollständige Aufgabe. Für WESPA gehörten dazu die Validierung des Conversion-Trackings, eine Videokampagne für Coworking in Zagreb und eine Vergleichs-Landingpage."
        },
        {
          "q": "Wie vergleiche ich mein Instagram mit meinen Wettbewerbern?",
          "a": "Der Bereich Social Media in Checkgrow stellt Ihr Instagram in eine Rangfolge mit den Wettbewerber-Accounts, die Sie verfolgen, mit Ihrer Position, dem Abstand bei den Followern und dem Wert über oder unter dem Median der Wettbewerber. WESPA sah so, dass es auf Platz 2 von 8 lokalen Coworking-Accounts lag, 172,9 % über dem Median, und richtete seine Strategie auf die bestehende Community aus."
        },
        {
          "q": "Was zeigt Checkgrow über die Werbung von Wettbewerbern?",
          "a": "Der Bereich Wettbewerber in Checkgrow verfolgt per KI-Recherche die Unternehmen, die Sie auswählen, und sammelt ihre laufenden Anzeigen auf Meta und LinkedIn, zusammen mit ihrem Social-Media-Publikum, ihren Themen und News. WESPA verfolgt so neun Coworking-Wettbewerber, von Regus mit 143 laufenden Anzeigen bis zu lokalen Anbietern, die fast keine schalten, ohne jede Anzeigenbibliothek von Hand zu prüfen."
        },
        {
          "q": "Woran erkenne ich, welche Anzeigen zu WhatsApp-Gesprächen führen?",
          "a": "Checkgrow Insights bringt Google Analytics, Meta und Google Ads in eine Ansicht und verfolgt die Aktionen, die für Ihr Geschäft zählen, etwa WhatsApp-Klicks, Formulare oder Buchungen, neben den Kampagnen und Creatives, die sie ausgelöst haben. Bei WESPA zeigte sich, dass Community-Creatives und Google-Anzeigen für Besprechungsräume und kostenlose Probetage die meisten Gespräche anstießen."
        },
        {
          "q": "Eignet sich Checkgrow für lokale Dienstleister?",
          "a": "Ja. Lokale Unternehmen, die mehrere Leistungen verkaufen, etwa Coworking-Spaces, Studios, Praxen oder Locations, profitieren davon, jedes Angebot, jede Kampagne und jeden Lead in einem Workspace zu haben. Checkgrow gibt einem kleinen Team die Wettbewerbsanalyse, Kampagnenplanung, Lead-Verfolgung und das Reporting, für die es sonst mehrere Tools und Spezialisten bräuchte."
        }
      ],
      "footnote": "Zahlen aus dem Checkgrow-Workspace von WESPA, Zeitraum 2. September bis 2. Oktober 2026."
    }
  ],
};
