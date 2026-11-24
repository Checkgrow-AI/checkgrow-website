# Translation glossary and style

The reference for every translation of checkgrow.com (see `docs/i18n.md`).
When the app (`checkgrow-insight-hub/src/locales`) names a feature, German
follows it. The app's Portuguese is European, so Brazilian Portuguese follows
this file, not the app.

## Voice

Write as a native B2B marketer in that language would: direct, concrete,
confident, no hype, short sentences. Translate meaning and rhythm, not
words. Keep established marketing terms the audience uses at work (lead,
go-to-market, CMO, CAC) rather than forcing a translation nobody uses.

| | Address | Headlines | Notes |
|---|---|---|---|
| pt-BR | você (never tu, never o senhor) | sentence case | Brazilian vocabulary: equipe (not equipa), tela, celular, site, cadastro, contato |
| de | Sie (formal), consistently | sentence case; nouns capitalised | English terms hyphenate in compounds: Go-to-Market-Strategie, Sales-Team, KI-gestützt |
| fr | vous, consistently | sentence case | French typography is mandatory (below) |

## Names that never translate

Checkgrow, Grow (the assistant: "Ask Grow" → pt-BR "Pergunte ao Grow", de
„Grow fragen“, fr « Demander à Grow »), Growth Credits, plan names
(Business, Agency, Growth, Enterprise), customer and partner names, product
names of other companies, Creative Studio, Insights, Sales Brain.

## Feature and concept names

| English | pt-BR | de | fr |
|---|---|---|---|
| Knowledge Center | Centro de conhecimento | Wissenszentrum | Centre de connaissances |
| company brain | cérebro da empresa | Firmen-Brain | cerveau de l'entreprise |
| Competitors | Concorrentes | Wettbewerber | Concurrents |
| Campaigns | Campanhas | Kampagnen | Campagnes |
| Creative Studio | Creative Studio | Creative Studio | Creative Studio |
| Content | Conteúdo | Inhalte | Contenus |
| Social Media | Redes sociais | Social Media | Réseaux sociaux |
| Website (feature) | Site | Website | Site web |
| Calendar | Calendário | Kalender | Calendrier |
| Insights | Insights | Insights | Insights |
| Integrations | Integrações | Integrationen | Intégrations |
| Sales Brain | Sales Brain | Sales Brain | Sales Brain |
| Lists | Listas | Listen | Listes |
| Outreach | Prospecção | Outreach | Prospection |
| Leads | Leads | Leads | Leads |
| Use cases | Casos de uso | Anwendungsfälle | Cas d'usage |
| buyer personas | personas | Buyer Personas | personas |
| ideal customer profile (ICP) | perfil de cliente ideal (ICP) | ideales Kundenprofil (ICP) | profil client idéal (ICP) |
| brand voice | tom de voz da marca | Markenstimme | ton de la marque |
| go-to-market | go-to-market | Go-to-Market | go-to-market |
| growth marketing | growth marketing | Growth-Marketing | growth marketing |
| AI | IA | KI | IA |
| AI-native | nativo em IA | KI-nativ | nativement IA |
| agency | agência | Agentur | agence |
| success story | caso de sucesso | Erfolgsgeschichte | témoignage client |
| Book a demo | Agendar uma demo | Demo buchen | Réserver une démo |
| Talk to our team | Fale com nosso time | Mit uns sprechen (button), mit unserem Team sprechen (prose) | Parler à notre équipe |
| Contact sales | Falar com vendas | Vertrieb kontaktieren | Contacter les ventes |
| Pricing | Preços | Preise | Tarifs |
| Real stories | Histórias reais | Echte Geschichten | Histoires vraies |

## Numbers, money and dates

Customer figures keep their value; only the format follows the language.
Prices are billed in euros; the currency selector only changes the display.

| | Number | Money | Date |
|---|---|---|---|
| en | 307,650 · 3.45% | €499 · US$27,000 | 23 November 2026 |
| pt-BR | 307.650 · 3,45% | € 499 · US$ 27.000 | 23 de novembro de 2026 |
| de | 307.650 · 3,45 % | 499 € · 27.000 US$ | 23. November 2026 |
| fr | 307 650 · 3,45 % | 499 € · 27 000 $ US | 23 novembre 2026 |

In French, thousands and the space before % use the narrow no-break space
(U+202F); in German the space before % and € is a no-break space (U+00A0).
"x" multipliers stay: 30x → 30x (fr: 30 fois when written out in prose).

## Typography

- **pt-BR:** “aspas curvas”, ‘simples’ inside; em dash with spaces only when
  English had one; no space before punctuation.
- **de:** „Anführungszeichen“, ‚einfache‘ inside; Gedankenstrich – with
  spaces; never "Sie" lowercase when it means you.
- **fr:** « guillemets » with U+202F inside; U+202F before ; : ! ? and »;
  apostrophe ’ (typographic) in prose; no capitals after a colon.
- No straight double quotes in prose in any translation (`pnpm i18n:check`).

## Length

German runs about 30% longer than English, French 15–20%, Brazilian
Portuguese 15–25%. Buttons, nav labels, chips and badges have little room:
choose the shortest natural phrasing there (de "Demo buchen", not
„Eine Demo vereinbaren“). Headlines may wrap; never truncate meaning.
`pnpm i18n:layout` checks every page at 390, 768 and 1440 px.
