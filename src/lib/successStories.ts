/* Success stories (News category "success-stories"), imported from the
   "Checkgrow Case Study Articles" design on 14 October 2026. Images live in
   public/success-stories/<slug>/. Every figure is dated and confirmed by the
   client; a story stays a draft until the client approves it.

   Drafts render in local development only: production builds leave them out
   of the listing, the article routes and the sitemap. To publish a story,
   set draft: false once the client has approved it. */

export type StoryStat = { value: string; label: string; big?: boolean };
export type StoryImage = { src: string; alt: string; width: number; height: number };
export type StoryBlock =
  | { type: "p"; text: string }
  | { type: "figure"; variant: "wide" | "narrow"; image: StoryImage; caption: string }
  | { type: "figure"; variant: "card"; image: StoryImage; stats: StoryStat[]; caption: string }
  | { type: "gallery"; images: StoryImage[]; caption: string }
  | { type: "stats"; variant: "findings" | "results"; items: StoryStat[] }
  | { type: "callout"; text: string; cite: string };

export type SuccessStory = {
  slug: string;
  company: string;
  draft: boolean;
  title: string;
  description: string;
  kicker: string;
  publishedAt: string;
  heroStats: StoryStat[];
  features: string[];
  hero: StoryImage;
  /* "contain" for logo artwork that must not be cropped on square cards */
  coverFit?: "contain";
  clientMark: string;
  about: { summary: string; facts: { label: string; value: string }[] };
  lead: string;
  /* "Key takeaways": short, self-contained statements near the top, the
     form search and AI answer engines quote */
  takeaways?: string[];
  /* article keywords for structured data (schema.org BlogPosting) */
  keywords?: string[];
  sections: { label: string; title: string; blocks: StoryBlock[] }[];
  statement: { text: string; cite: string } | null;
  faq: { q: string; a: string }[];
  footnote: string;
};

const allStories: SuccessStory[] = [
  {
    "slug": "cuixmala-first-campaign-us-27000-booking",
    "company": "Cuixmala",
    "draft": false,
    "title": "How luxury resort Cuixmala's first Google Ads campaign brought a US$27,000 booking",
    "description": "How Mexican luxury resort Cuixmala launched its first ads with Checkgrow: competitor research, campaigns in two languages and a US$27,000 first booking.",
    "kicker": "Hospitality, Mexico",
    "publishedAt": "2026-10-06",
    "heroStats": [
      {
        "value": "US$27,000",
        "label": "the first booking from Cuixmala's Google Ads campaigns, confirmed in its booking system"
      },
      {
        "value": "49,403",
        "label": "people reached by Cuixmala's first Meta ads"
      }
    ],
    "features": [
      "Knowledge Center",
      "Competitors",
      "Campaigns",
      "Creative Studio",
      "Insights"
    ],
    "hero": {
      "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-luxury-resort-casa-cuixmala-pacific-coast-mexico.webp",
      "alt": "Casa Cuixmala, the domed main house of the Cuixmala luxury resort, set in jungle above the beach and the Pacific Ocean in Jalisco, Mexico",
      "width": 1000,
      "height": 680
    },
    "clientMark": "CUIXMALA",
    "about": {
      "summary": "A luxury resort on Mexico's Pacific coast, set within a private nature reserve, welcoming guests since 1987.",
      "facts": [
        {
          "label": "Industry",
          "value": "Hospitality, luxury resort"
        },
        {
          "label": "Location",
          "value": "Jalisco, Mexico"
        },
        {
          "label": "Market",
          "value": "Travellers in the United States and Mexico"
        },
        {
          "label": "Period covered",
          "value": "15 September to 5 October 2026"
        }
      ]
    },
    "lead": "Cuixmala has welcomed guests to its resort on Mexico's Pacific coast since 1987, but it had never advertised. Its first paid campaigns, run by Checkgrow, went live on Google and Meta in September. Within weeks, Google Ads recorded the first booking: a stay worth US$27,000, confirmed against Cuixmala's own booking system. Checking that booking also revealed a tracking gap worth fixing early.",
    "takeaways": [
      "Cuixmala's company brain in Checkgrow's Knowledge Center set out its offer in detail: 6 products, 4 buyer personas, 3 ideal customer profiles and 5 use cases.",
      "Checkgrow Competitors tracked 14 rival resorts: 8 were advertising, with 166 live ads on Meta, while Cuixmala's 210,000 Instagram followers ranked it 3rd of the 14.",
      "Checkgrow planned Cuixmala: The Reserve Awaits and generated its ads in Creative Studio from the resort's own photography, in English for the United States and in Spanish for Mexico.",
      "Google Ads recorded the first booking, worth US$27,000, and it matched Cuixmala's booking system exactly.",
      "Insights showed that Google Analytics had recorded the purchase without its source, a tagging gap found in the first weeks rather than months later."
    ],
    "keywords": [
      "hotel marketing",
      "luxury resort advertising",
      "Google Ads for hotels",
      "Meta ads for hotels",
      "booking tracking",
      "competitor research",
      "multilingual campaigns",
      "marketing attribution",
      "AI marketing platform",
      "Mexico",
      "Cuixmala",
      "Checkgrow"
    ],
    "sections": [
      {
        "label": "The challenge",
        "title": "A luxury resort advertising for the first time",
        "blocks": [
          {
            "type": "p",
            "text": "Cuixmala is a rare place: private villas, its own restaurant and a private nature reserve on the Pacific coast. It had welcomed guests for almost four decades without ever running a paid campaign."
          },
          {
            "type": "p",
            "text": "A first campaign raises two questions at once. Where does a resort like Cuixmala stand in a market full of polished competitors? And once the ads are live, how do you know they are working, when a guest passes through several pages and systems between a click and a confirmed stay, and every ad platform counts results its own way?"
          }
        ]
      },
      {
        "label": "Company brain",
        "title": "Putting Cuixmala's offer into words first",
        "blocks": [
          {
            "type": "p",
            "text": "Checkgrow ran the launch from a single workspace, and it started in the Knowledge Center. Cuixmala's offer was set out there in detail: 6 products, 4 buyer personas, 3 ideal customer profiles and 5 use cases. That company brain became the brief behind everything that followed, from who to reach to what each ad should say."
          },
          {
            "type": "p",
            "text": "Cuixmala's Google Analytics, Meta and Google Ads accounts were then connected to Insights, so every channel could be measured side by side from the very first day of the campaign."
          }
        ]
      },
      {
        "label": "Competitor research",
        "title": "Every rival resort's ads and audience, tracked in one place",
        "blocks": [
          {
            "type": "p",
            "text": "In Competitors, Checkgrow tracks 14 rival resorts on Mexico's Pacific coast and every ad they run, refreshed by a monthly scan. The first view showed who was really courting the same travellers: 8 of the 14 were advertising, with 166 live ads between them, all of them on Meta. Almar Resort led with 40, followed by The St. Regis Punta Mita with 36, Garza Blanca Preserve with 27, and Hotel Mousai and Secrets Vallarta Bay with 19 each."
          },
          {
            "type": "figure",
            "variant": "narrow",
            "image": {
              "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-competitors-who-is-advertising-resort-ads.webp",
              "alt": "Checkgrow Competitors, Who is advertising, for Cuixmala: 14 rival resorts tracked, 8 advertising, 166 live ads on Meta, led by Almar Resort with 40, The St. Regis Punta Mita with 36, Garza Blanca Preserve Resort & Spa with 27, Hotel Mousai Puerto Vallarta and Secrets Vallarta Bay with 19 each, Casa Velas with 16, Chable with 7 and Las Alamandas with 2",
              "width": 1310,
              "height": 1086
            },
            "caption": "Who is advertising among Cuixmala's 14 tracked competitors, in Checkgrow Competitors."
          },
          {
            "type": "p",
            "text": "The Competitors dashboard then showed where Cuixmala stood. On Instagram, its 210,000 followers ranked it 3rd of the 14 resorts, 357% above the competitor median, behind only The St. Regis Punta Mita with 2.5 million and Secrets Vallarta Bay. On LinkedIn the picture was the opposite, with 934 followers, 85% below the median. A brand with a strong visual audience and almost no paid presence: exactly the gap a first campaign could use."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-competitors-dashboard-instagram-linkedin-ads.webp",
              "alt": "Checkgrow Competitors dashboard for Cuixmala: where it stands against 14 competitors, with 934 LinkedIn followers, 210K Instagram followers ranked 3rd and 357% above the median, and 161 ads running across competitors on Meta led by Almar Resort and The St. Regis Punta Mita",
              "width": 2000,
              "height": 1071
            },
            "caption": "Cuixmala against its 14 competitors on LinkedIn, Instagram and advertising, in the Checkgrow Competitors dashboard."
          },
          {
            "type": "p",
            "text": "The research also showed how patient the competition was. The most active rival had kept one ad running for 260 days. Cuixmala was not going to win on volume. It had to be precise about who it spoke to, and what it said."
          }
        ]
      },
      {
        "label": "Campaigns",
        "title": "The Reserve Awaits, in two languages",
        "blocks": [
          {
            "type": "p",
            "text": "In Campaigns, Checkgrow planned Cuixmala: The Reserve Awaits for travellers in the United States, with Spanish versions of the same ads for the Mexican market. It went live on Google first, and on Meta three days later."
          },
          {
            "type": "p",
            "text": "The ads, made in Creative Studio, sell what no competitor can copy: seclusion. A dining table under a white arch facing the sea, a carved doorway opening onto a terrace, the domed main house framed by palms, under lines like \"Where Restorative Stays Begin in Seclusion\" and \"Un santuario natural en la costa de México\"."
          },
          {
            "type": "gallery",
            "images": [
              {
                "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-restorative-stays-dining-arch-sea-view.webp",
                "alt": "Cuixmala Meta ad: a dining table under a white arch with a sea view, headline Where Restorative Stays Begin in Seclusion and a Book your stay button",
                "width": 900,
                "height": 1125
              },
              {
                "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-restorative-stays-terrace-doorway.webp",
                "alt": "Cuixmala Meta ad: a carved doorway opening onto a terrace above the sea, headline Where Restorative Stays Begin in Seclusion and a Book your stay button",
                "width": 900,
                "height": 1125
              },
              {
                "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-private-reserve-pacific-coast.webp",
                "alt": "Cuixmala Meta ad: a terrace table above the jungle and the coastline, headline A Private Reserve on Mexico's Pacific Coast and a Book your stay button",
                "width": 900,
                "height": 1125
              },
              {
                "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-spanish-santuario-natural-mexico.webp",
                "alt": "Cuixmala Meta ad in Spanish: the domed main house framed by palms with the sea behind, headline Un santuario natural en la costa de México and a Reserva tu estancia button",
                "width": 900,
                "height": 1125
              }
            ],
            "caption": "Ads for Cuixmala: The Reserve Awaits, in English and in Spanish."
          },
          {
            "type": "p",
            "text": "Creative Studio built them from Cuixmala's own material. The team gave it the resort's photography of its restaurant, exteriors and coastline, plus the campaign itself as context, and described what it needed. Each request returned a set of finished ads in the right format, and a simple message such as \"generate 3 more options with the other picture in context\" was enough to get the next round, in 4:5, 1:1, 1.91:1 or 9:16."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-creative-studio-ai-luxury-resort-ads.webp",
              "alt": "Checkgrow Creative Studio for Cuixmala: three AI-generated luxury resort ads, A Private Reserve on Mexico's Pacific Coast and Where Restorative Stays Begin in Seclusion, built from Cuixmala's restaurant and exterior photography and The Reserve Awaits campaign as context, with format and shape options",
              "width": 2000,
              "height": 1076
            },
            "caption": "Cuixmala ads generated in Checkgrow Creative Studio from its own photography and campaign context."
          },
          {
            "type": "p",
            "text": "On Meta, the first ads reached 49,403 people and drew 2,039 clicks at a 3.45% click-through rate, while Google Ads brought 4,228 clicks in September. Every one of those clicks could be followed in Insights, next to the others."
          }
        ]
      },
      {
        "label": "What Checkgrow found",
        "title": "A US$27,000 booking, and the gap behind it",
        "blocks": [
          {
            "type": "p",
            "text": "When the first booking came in, Checkgrow did not stop at celebrating it. It checked the booking everywhere it should appear. Google Ads had recorded it with its value, and the entry matched Cuixmala's own booking system exactly: a stay worth US$27,000."
          },
          {
            "type": "p",
            "text": "Google Analytics had recorded the purchase too, but not where it came from. The campaign tags were set up in Google Ads but never reached Analytics, so the booking showed no source. Looking at Analytics alone, the campaign's first booking would never have been credited to Google Ads."
          },
          {
            "type": "p",
            "text": "That is exactly the kind of gap you want to find in the first weeks of a campaign, while it is still small, rather than months later, when budget decisions depend on it."
          }
        ]
      },
      {
        "label": "The results",
        "title": "A first booking worth US$27,000",
        "blocks": [
          {
            "type": "p",
            "text": "The launch delivered the result that matters most to a resort: a real, confirmed booking from paid search, worth US$27,000, within the campaign's first weeks."
          },
          {
            "type": "stats",
            "variant": "results",
            "items": [
              {
                "value": "US$27,000",
                "label": "first booking from Google Ads, matched to Cuixmala's booking system"
              },
              {
                "value": "4,228",
                "label": "clicks on Cuixmala's Google Ads campaigns in September"
              },
              {
                "value": "3.45%",
                "label": "click-through rate on Cuixmala's first Meta ads"
              }
            ]
          },
          {
            "type": "p",
            "text": "Insights also showed where interest was already coming from. In September, organic Google search produced 6,623 key events from 4,718 sessions, and the rates page held people's attention, with 88.2% engagement across 1,271 sessions. With every channel in one view, Cuixmala can now see what each one contributes, and where the tracking still needs work."
          }
        ]
      }
    ],
    "statement": {
      "text": "Cuixmala's first Google Ads booking was worth US$27,000. Checking it against the booking system also showed where the tracking breaks down, and that is exactly what you want to know early, before a campaign grows.",
      "cite": "Checkgrow"
    },
    "faq": [
      {
        "q": "How can a luxury hotel or resort start advertising online with Checkgrow?",
        "a": "By running the launch from one Checkgrow workspace: describe the property, its guests and offers in the Knowledge Center, research rival hotels in Competitors, plan the campaigns in Campaigns and measure every channel together in Insights. Cuixmala, a luxury resort in Mexico, launched its first paid campaigns this way and recorded a US$27,000 booking within weeks."
      },
      {
        "q": "What should a hotel put in its company brain?",
        "a": "Everything a good campaign brief needs: the rooms, villas and experiences on offer, the types of guests and where they come from, the ideal customer profiles and the reasons people book. Cuixmala's Knowledge Center held 6 products, 4 buyer personas, 3 ideal customer profiles and 5 use cases, which shaped who the ads reached and what they said."
      },
      {
        "q": "How does Checkgrow track competitor hotels' ads?",
        "a": "Checkgrow Competitors uses AI research to follow the hotels and resorts you choose, with a monthly scan of their live ads on Meta and LinkedIn and a dashboard of where you stand on Instagram, LinkedIn and advertising. Cuixmala saw 166 live ads across its 14 rival resorts in one view, and that its Instagram audience ranked 3rd of the 14."
      },
      {
        "q": "How do I know if a booking really came from Google Ads?",
        "a": "Check it in every system that should record it: Google Ads, Google Analytics and the booking engine. Checkgrow Insights puts Google Analytics, Google Ads and Meta in one view, so a booking can be traced and compared. Cuixmala's US$27,000 booking appeared in Google Ads with its value and matched its booking system exactly."
      },
      {
        "q": "Why would Google Analytics show a booking with no source?",
        "a": "Most often because campaign information from the ad platform is not being passed through to Analytics, so the visit arrives without its campaign tags. The booking is recorded, but not credited to the ad that drove it. Insights surfaced this for Cuixmala in the first weeks, while it was still easy to fix."
      },
      {
        "q": "Can a luxury brand create on-brand ads with AI?",
        "a": "Yes, when the AI works from the brand's own material. Checkgrow Creative Studio uses your photography, brand and campaign as context, so the ads look like your property rather than stock imagery. Cuixmala's ads were generated from its own restaurant, exterior and coastline photography, and new variations took a single sentence."
      },
      {
        "q": "Can Checkgrow run campaigns in several languages?",
        "a": "Yes. A Checkgrow campaign can carry the same creative in several languages for different markets while keeping one strategy. Cuixmala's campaign ran in English for travellers in the United States and in Spanish for the Mexican market."
      }
    ],
    "footnote": "Figures from Cuixmala's Checkgrow workspace, covering 15 September to 5 October 2026; website and Google Ads figures cover September. The booking value was confirmed by Cuixmala. Social media follower counts last read 27 April 2026."
  },
  {
    "slug": "boont-30x-cheaper-meta-purchases",
    "company": "Boont",
    "draft": false,
    "title": "How Croatian online insurer Boont made Meta purchases 30x cheaper",
    "description": "How Boont fixed what Meta could see, made its ads in Checkgrow Creative Studio and tested a new campaign: purchases 30x cheaper, then 2x conversions.",
    "kicker": "Insurance, Croatia",
    "publishedAt": "2026-10-12",
    "heroStats": [
      {
        "value": "30x",
        "label": "lower cost per purchase in the new campaign's first days: €70.85 against €2,121.05 on Boont's existing campaign"
      },
      {
        "value": "2x",
        "label": "the conversions when both campaigns were read over the same days: 10 against 5, at €69.45 each against €144.41"
      }
    ],
    "features": [
      "Knowledge Center",
      "Creative Studio",
      "Calendar",
      "Campaigns",
      "Insights"
    ],
    "hero": {
      "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-meta-ad-car-insurance-drive-less-pay-less.webp",
      "alt": "Boont Meta ad for online car insurance from Checkgrow's campaign: \"Voziš manje od 5.000 km? Saznaj koliko štediš\" (Driving less than 5,000 km? Find out how much you save), with a grey SUV and a green shield",
      "width": 1600,
      "height": 900
    },
    "clientMark": "",
    "about": {
      "summary": "A Zagreb-based insurance intermediary, founded in 2022, selling digital motor insurance with cashback for safe drivers.",
      "facts": [
        {
          "label": "Industry",
          "value": "Insurance, digital motor insurance"
        },
        {
          "label": "Location",
          "value": "Zagreb, Croatia"
        },
        {
          "label": "Market",
          "value": "Drivers in Croatia"
        },
        {
          "label": "Period covered",
          "value": "September to October 2026"
        }
      ]
    },
    "lead": "Boont sells motor insurance online in Croatia and rewards safe drivers with cashback. Its team was already advertising on Meta, but the campaign could not see the policies it sold. Checkgrow first fixed what Meta could see, then launched a second campaign beside Boont's own. In its first days, the new campaign brought purchases at €70.85 each, against €2,121.05 on the existing one: a cost per purchase 30 times lower.",
    "takeaways": [
      "Boont's website recorded 294 completed payments in a month while Meta reported none from its campaign. Checkgrow Insights found the gap by reading Google Analytics and Meta side by side.",
      "Checkgrow connected Google Analytics, Meta Ads and Google Ads to Insights and set up Boont's company brain in the Knowledge Center before changing any ads.",
      "Boont's new ads were generated in Checkgrow Creative Studio, in Croatian and from its own brand, with every version kept and one-click options to schedule a post or make more like a picture.",
      "A second Meta campaign with lookalike and remarketing audiences ran beside Boont's own. In its first days it brought purchases at €70.85 each against €2,121.05, 30 times lower.",
      "Its lead ad quickly became the #1 winning ad on the account, with 50% of all conversions at €79.88 each, and one click on Generate another like it starts the next round."
    ],
    "keywords": [
      "insurance marketing",
      "Meta ads tracking",
      "conversion tracking",
      "cost per purchase",
      "Meta campaign test",
      "lookalike audiences",
      "remarketing",
      "marketing attribution",
      "AI marketing platform",
      "online car insurance Croatia",
      "Boont",
      "Checkgrow"
    ],
    "sections": [
      {
        "label": "The challenge",
        "title": "An online insurer whose ads could not see its sales",
        "blocks": [
          {
            "type": "p",
            "text": "Boont is an insurance intermediary from Zagreb, founded in 2022. Together with Groupama osiguranje, it sells motor insurance that drivers buy and manage entirely online, with cashback for those who drive without claims."
          },
          {
            "type": "p",
            "text": "Boont's marketing team was already running its own Meta campaign, live since June 2024 and reaching broad audiences on Facebook and Instagram. When Checkgrow joined, the first brief was simply to support the team on the campaigns already running. Underneath it, there was a bigger problem."
          },
          {
            "type": "p",
            "text": "People were buying policies on the website, but Meta was not seeing those sales against the campaign. Without that signal, nobody could say which ad sold a policy and which one only spent money, and Meta could not learn who to show the ads to."
          }
        ]
      },
      {
        "label": "Connected data",
        "title": "Connecting everything before changing anything",
        "blocks": [
          {
            "type": "p",
            "text": "Checkgrow started by connecting, not by changing ads. Google Analytics, Meta Ads and Google Ads went into Insights, so website payments and ad results could finally be read side by side. Boont's company profile went into the Knowledge Center, so every recommendation started from how Boont actually sells."
          },
          {
            "type": "p",
            "text": "The first Insights briefing made the gap impossible to miss. The website had recorded 294 completed payments in a month, while Meta reported no results at all from Boont's campaign. The briefing's verdict was direct:"
          },
          {
            "type": "callout",
            "text": "There is no measurable Meta campaign winner or loser until conversion reporting is fixed.",
            "cite": "Checkgrow Insights briefing"
          }
        ]
      },
      {
        "label": "Campaign test",
        "title": "A second campaign, running side by side",
        "blocks": [
          {
            "type": "p",
            "text": "Rather than switch Boont's campaign off, Checkgrow launched its own beside it, so both could be measured on the same terms. CheckGrow Conversion went live on Meta with new ads generated in Creative Studio and two ad sets: one for people who resemble Boont's buyers, built on a lookalike audience, and one for people who had already visited, built on remarketing."
          },
          {
            "type": "p",
            "text": "The lead ad spoke to a very specific driver: \"VOZIŠ MANJE OD 5.000 KM?\" (Driving less than 5,000 km?), under the promise \"Voziš bez štete, plaćaš manje\" (Drive claim-free, pay less). In Insights' Winning ads, it ranks first by conversions on the whole account."
          }
        ]
      },
      {
        "label": "Creative Studio",
        "title": "Every ad made from Boont's own brand, in a few clicks",
        "blocks": [
          {
            "type": "p",
            "text": "The ads for the new campaign came from Creative Studio. The team describes what it needs in plain words, and Checkgrow makes pictures, posts and ads from Boont's brand: its colours, its product pages and its own photos, used as context for every set. Each request produces a set of five, in the format and size the channel needs."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-creative-studio-ai-car-insurance-ads-croatian.webp",
              "alt": "Checkgrow Creative Studio for Boont: a set of AI-generated Croatian car insurance ads with the headline Povrat novca svakih 12 tjedana (Cashback every 12 weeks), built from Boont's brand context including its about-us image, mobile app screens and the boont.hr product page",
              "width": 2000,
              "height": 1072
            },
            "caption": "A set of Boont ads generated in Checkgrow Creative Studio, with the brand context it used on the right."
          },
          {
            "type": "p",
            "text": "Boont's sets were written in Croatian and spoke to its real promises: cashback every 12 weeks for safe drivers, insurance managed entirely online, and a reward for recommending a friend. Some sets went further, with a series of humorous ads that kept 26 favourites. Instead of briefing a designer and waiting days for a round of options, the team could react to a set in minutes and simply say what to change for the next one."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-creative-studio-ad-versions-calendar-make-more.webp",
              "alt": "A single Boont ad in Checkgrow Creative Studio, Mislis da vozis bez greske? Boont Izazov krece, with its versions, and options to put it on the calendar as a draft social post, download it, make more like it or change it by describing what should be different",
              "width": 2000,
              "height": 1245
            },
            "caption": "One Boont ad in Creative Studio, with its versions and what the team can do with it next."
          },
          {
            "type": "p",
            "text": "Every picture keeps its history. Ask for a change, such as a new headline or a different logo position, and Checkgrow makes a new version without overwriting the old one. When a picture is ready, one click puts it on the Calendar as a draft social media post for approval, downloads it in the right size or uses it as the starting point for the next set with Make more like it. Sending a picture straight into an active campaign is coming soon."
          }
        ]
      },
      {
        "label": "What Checkgrow found",
        "title": "Better tracking, and a better campaign",
        "blocks": [
          {
            "type": "p",
            "text": "Once both campaigns were running, the daily chart in Insights showed the exact moment Meta started to see sales. For three weeks, Meta had recorded no conversions at all. The first appeared the day after CheckGrow Conversion went live, and from then on both campaigns were recording them."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-insights-meta-cost-vs-conversions-tracking.webp",
              "alt": "Checkgrow Insights chart of daily Meta spend against conversions for Boont: conversions stay at zero for three weeks, then the first conversion appears the day after the new Checkgrow campaign went live and conversions keep rising",
              "width": 1254,
              "height": 438
            },
            "caption": "Daily Meta spend against conversions for Boont, in Checkgrow Insights. The first conversion appears the day after the new campaign went live."
          },
          {
            "type": "p",
            "text": "Tracking explained part of the difference, but not all of it. The two campaigns were built differently, and people responded differently. The new campaign drew a 1.39% click-through rate against 0.56%, at €0.30 a click against €0.95: from a similar budget, audiences closer to buying and ads written for them brought three times as many clicks, 2,322 against 761."
          }
        ]
      },
      {
        "label": "The results",
        "title": "30 times cheaper at first, twice the conversions side by side",
        "blocks": [
          {
            "type": "stats",
            "variant": "results",
            "items": [
              {
                "value": "30x",
                "label": "lower cost per purchase in the new campaign's first days: €70.85 against €2,121.05",
                "big": true
              },
              {
                "value": "10 to 5",
                "label": "conversions when both campaigns were read over the same days, from €694.50 against €722.04"
              },
              {
                "value": "€69.45",
                "label": "cost per conversion on the new campaign over those days, against €144.41"
              }
            ]
          },
          {
            "type": "p",
            "text": "In its first days, the new campaign brought 3 purchases from €212.56, or €70.85 each. Boont's existing campaign had recorded 1 purchase from €2,121.05 over its previous 30 days: a cost per purchase 30 times higher."
          },
          {
            "type": "p",
            "text": "Boont reviewed that comparison with us, and we also read both campaigns over exactly the same days in Insights. There, where a conversion is a purchase, lead or registration that Meta attributes to the ad, the new campaign recorded 10 conversions against 5, from €694.50 against €722.04. Each conversion cost €69.45 instead of €144.41: the bar every sale has to clear to pay for its advertising was cut in half."
          },
          {
            "type": "p",
            "text": "The clearest sign came from Winning ads in Insights, which ranks every ad by the conversions it brought and explains each one against the others. Within days, the new campaign's lead ad, the \"Voziš bez štete, plaćaš manje\" car ad, took the #1 position on the whole account: 9 conversions at €79.88 each, 50% of all conversions, on a 1.37% click-through rate. Boont's best ad from its existing campaign came second, with 4 conversions at €142.79 each and 22% of the total."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/boont-30x-cheaper-meta-purchases/boont-insights-winning-ads-meta-conversions.webp",
              "alt": "Checkgrow Insights Winning ads for Boont: the new Checkgrow campaign ad ranked #1 winner with 9 conversions at €79.88 per conversion, 50% of conversions and a 1.37% click-through rate, ahead of Boont's existing ad at #2 with 4 conversions at €142.79 and 22% of conversions, each with Open creative and Generate another like it buttons",
              "width": 1852,
              "height": 902
            },
            "caption": "The new campaign's ad as the #1 winning ad on Boont's account, in Checkgrow Insights Winning ads."
          },
          {
            "type": "p",
            "text": "Seeing the winner is only half of it. Next to every winning ad sits Generate another like it, which sends the ad back to Creative Studio as the starting point for a new set. The ad that converts best becomes the brief for the next round, in a few clicks, so the campaign keeps learning instead of waiting for the next creative cycle."
          },
          {
            "type": "p",
            "text": "Two honest caveats. The 30x compares the new campaign's first days with a month of the existing one, a period when Meta was not yet seeing all of Boont's sales. And these are the first 11 days of results, so Meta can still add conversions it attributes late. Side by side, the new campaign still recorded twice the conversions at under half the cost."
          }
        ]
      }
    ],
    "statement": {
      "text": "Boont's results came from more than one fix: tracking that could see sales, a different setup, new creative and audiences closer to buying. In its first days the new campaign brought purchases at a thirtieth of the cost, and side by side it recorded twice the conversions at under half the cost each.",
      "cite": "Checkgrow"
    },
    "faq": [
      {
        "q": "Why don't my Meta ads show the sales my website records?",
        "a": "Usually because the conversion signal from the website is not reaching Meta, so Meta cannot attribute purchases to the ads that drove them. Checkgrow Insights reads Google Analytics and Meta side by side, which makes the gap visible: Boont's website recorded 294 completed payments in a month while Meta reported none from its campaign."
      },
      {
        "q": "How does Checkgrow Insights find tracking problems?",
        "a": "Insights connects Google Analytics, Meta Ads and Google Ads in one place and compares what each one records, with written briefings and charts such as daily spend against conversions. When the numbers disagree, for example sales on the website but no conversions in the ad account, Insights flags it before budget decisions are made on incomplete data."
      },
      {
        "q": "How can I test a new Meta campaign without stopping the one that is running?",
        "a": "Run the new campaign beside the existing one and read both over the same days with the same definition of a conversion. Checkgrow's Advertising Smart Report puts the campaigns next to each other with spend, conversions, cost per conversion, click-through rate and cost per click. Boont's test showed 10 conversions against 5 at half the cost each."
      },
      {
        "q": "How can an insurance company create ad creatives with AI?",
        "a": "With Checkgrow Creative Studio, the team describes what it needs and gets ads made from its own brand, product pages and photos, in its language and in the sizes each channel needs. Every change creates a new version, and a finished picture can be scheduled as a social post or used to make more like it. Boont generated its Croatian car insurance ads this way."
      },
      {
        "q": "How do I know which ad is converting best, and make more like it?",
        "a": "Checkgrow Insights' Winning ads ranks every ad by the conversions it brought, with its spend, cost per conversion, click-through rate and share of all conversions. One click on Generate another like it sends the winner back to Creative Studio to start the next set. Boont's new ad took the #1 position with 50% of all conversions."
      },
      {
        "q": "What are lookalike and remarketing audiences, and when do they help?",
        "a": "A lookalike audience finds new people who resemble your existing buyers; a remarketing audience reaches people who already visited your website. Both are usually closer to buying than broad audiences. Checkgrow's campaign for Boont used one ad set of each, and it drew a 1.39% click-through rate against 0.56% for broad targeting."
      },
      {
        "q": "How should two ad campaigns be compared fairly?",
        "a": "Compare them over the same days, with the same conversion definition and the same tracking, and look at cost per conversion as well as volume. Early results and late-attributed conversions should be read with care. Boont's case shows both views: a 30x difference in the first days, and twice the conversions at under half the cost when read over the same period."
      },
      {
        "q": "Can Checkgrow help insurance and financial services companies sell online?",
        "a": "Yes. Companies that sell policies or financial products online depend on accurate conversion tracking and efficient paid acquisition. Checkgrow connects their website analytics and ad accounts, finds where sales are not being attributed, and helps build and measure campaigns aimed at people closer to buying, as it did for Boont's digital motor insurance."
      }
    ],
    "footnote": "Figures from Boont's Checkgrow workspace (Insights, Meta), covering 12 September to 12 October 2026. Spend and cost figures published with Boont's approval."
  },
  {
    "slug": "barner-croatia-launch-purchases-up-160",
    "company": "Barner",
    "draft": false,
    "title": "How Barner launched in Croatia with AI marketing: purchases up 160.6% in a month",
    "description": "How Barner launched its screen glasses in Croatia with Checkgrow: competitor research, 423 AI ad creatives and one connected funnel. Purchases up 160.6% in a month.",
    "kicker": "Eyewear, Croatia",
    "publishedAt": "2026-10-14",
    "heroStats": [
      {
        "value": "357",
        "label": "purchases in a month, up 160.6% on the previous period"
      },
      {
        "value": "+119%",
        "label": "new visitors: 10,290 first visits against 4,700 in the previous period"
      }
    ],
    "features": [
      "Knowledge Center",
      "Social Media",
      "Competitors",
      "Campaigns",
      "Creative Studio",
      "Insights",
      "AI Assistant"
    ],
    "hero": {
      "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-screen-glasses-tortoiseshell.webp",
      "alt": "A man adjusting round tortoiseshell Barner screen glasses",
      "width": 1080,
      "height": 680
    },
    "clientMark": "BARNER",
    "about": {
      "summary": "An eyewear brand selling screen glasses, now in Croatia with its own webshop.",
      "facts": [
        {
          "label": "Industry",
          "value": "Eyewear, e-commerce"
        },
        {
          "label": "Location",
          "value": "Croatia"
        },
        {
          "label": "Market",
          "value": "Croatian consumers"
        },
        {
          "label": "Period covered",
          "value": "2 September to 2 October 2026"
        }
      ]
    },
    "lead": "Barner makes glasses for people who spend their days in front of screens. When it decided to launch in Croatia in 2026, it had a new webshop, a clear product and no local audience at all. A month after running the launch on Checkgrow, the webshop recorded 357 purchases, 160.6% more than the month before, and new visitors had more than doubled. This is how the team got there, one feature at a time.",
    "takeaways": [
      "Barner built its company brain in Checkgrow's Knowledge Center and connected Google Analytics, Meta, Google Ads and Instagram, so every campaign, creative and AI answer worked from the same data.",
      "Checkgrow Competitors showed every rival's ads and social media in one view: 20 brands tracked, 15 of them advertising, about 1,000 live ads.",
      "Creative Studio generated 423 AI ad creatives in Croatian, and 395 went straight into Barner's Meta and Google Ads campaigns.",
      "Insights joined Meta, Google Ads and Google Analytics into one funnel, and the AI Assistant answered performance questions in about half a minute.",
      "In the month to 2 October 2026, purchases rose 160.6% to 357 and new visitors 119% to 10,290."
    ],
    "keywords": [
      "AI marketing platform",
      "market launch",
      "e-commerce growth",
      "competitor ad research",
      "AI ad creatives",
      "Meta ads",
      "Google Ads",
      "marketing attribution",
      "AI marketing assistant",
      "Croatia",
      "eyewear",
      "Barner",
      "Checkgrow"
    ],
    "sections": [
      {
        "label": "The challenge",
        "title": "Launching screen glasses in a market that already had plenty",
        "blocks": [
          {
            "type": "p",
            "text": "Barner arrived in Croatia with no history there. Nobody was searching for the name yet, and the eyewear market was already crowded with fashion brands, sunglasses labels and local opticians, many of them advertising every single day."
          },
          {
            "type": "p",
            "text": "The product was ready. What the team did not know yet was the market: who else was selling, what they were saying, and which channels would bring the first buyers to a webshop nobody had heard of. And like most launch teams, they had more to do than people to do it, spread across more tools than anyone wanted to open."
          }
        ]
      },
      {
        "label": "Company brain",
        "title": "First, teaching Checkgrow everything about Barner",
        "blocks": [
          {
            "type": "p",
            "text": "The launch started in the Knowledge Center, Checkgrow's company brain. Barner's products, audiences, brand voice and offer went in once, in detail. From that point on, everything Checkgrow produced, from the campaign plan to the ad copy to the answers in the AI Assistant, started from Barner's own facts instead of a blank page."
          },
          {
            "type": "p",
            "text": "Then came the accounts. Barner connected Google Analytics, Meta and Google Ads, and linked its Instagram profile in Social Media. Each connection is a few clicks, and together they changed what the company brain could do: it no longer only described the business, it could see Barner's traffic, ads and sales as they happened."
          }
        ]
      },
      {
        "label": "Competitor research",
        "title": "Seeing every competitor's ads before spending a euro",
        "blocks": [
          {
            "type": "p",
            "text": "With the brain in place, the team turned to the market. In Competitors, Checkgrow's AI research mapped the 20 brands and opticians selling in Barner's space and kept watching them. The first view was eye-opening: 15 of them were advertising, with about 1,000 live ads between them. D.Franklin and Hawkers each ran 100 active Meta ads, Meller 99 and Kaleos 87, while MÓ was putting its effort into LinkedIn."
          },
          {
            "type": "figure",
            "variant": "narrow",
            "image": {
              "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-competitors-ai-research.webp",
              "alt": "Checkgrow Competitors, Who is advertising: 20 competitors tracked, 15 advertising and about 1,000 live ads, with LinkedIn and Meta ad counts for COTTET, D.Franklin, General Optica, Hawkers, KALEOS, Meller, Miller & Marc and MÓ",
              "width": 916,
              "height": 1160
            },
            "caption": "Who is advertising in Barner's market, in Checkgrow Competitors, 2 October 2026."
          },
          {
            "type": "p",
            "text": "For the first time, Barner could see all of its competitors' ads in one place, next to their social media: followers, growth and the posts that performed. The view stayed live. When Optika Anda went from 13 active Meta ads to 31 in late September, and General Optica added 7 in a single day, the team saw it that week, not months later in a slide deck. It also showed where Barner already stood out: on LinkedIn, it ranked 4th of the 10 brands tracked, 25.3% above the median."
          }
        ]
      },
      {
        "label": "Creative at scale",
        "title": "More than 400 AI ad creatives, made in Croatian and shipped straight to the campaigns",
        "blocks": [
          {
            "type": "p",
            "text": "Knowing the market made the brief easy to write. In Campaigns, Checkgrow planned the launch: Barner Launch - Aug 2026 went live on Instagram and Google Ads on 27 July 2026, and an influencer campaign joined on Meta from 8 September."
          },
          {
            "type": "p",
            "text": "Then Creative Studio did what a small team could never do by hand. Working from the brand, products and audiences in the company brain, it generated 423 ad creatives for Barner, written in Croatian and sized for every placement. Lines like \"Predugo si pred ekranom? Zaštiti svoj vid\" (\"Too long in front of a screen? Protect your eyes\") spoke directly to the people Barner makes glasses for, and a simple 30% offer with the code ALL30 gave them a reason to try."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-creative-studio-ai-meta-ad-creatives-croatian.webp",
              "alt": "Checkgrow Creative Studio inside Barner's campaign: approved AI-generated Meta ad creatives in Croatian for Barner screen glasses, each with a 30% off ALL30 offer, a Buy Now button and its headline",
              "width": 2000,
              "height": 1073
            },
            "caption": "Approved Meta creatives in Croatian, generated in Creative Studio inside Barner's campaign."
          },
          {
            "type": "p",
            "text": "395 of those creatives were approved and sent into the campaigns from the same screen, with no exporting, re-uploading or rebuilding ads in another tool. Because every creative stayed linked to its results, the reporting shaped the next round: the AI optimisations showed which ads were converting, and those were the ones the team made more of. Create, launch, learn, improve, all in one loop."
          },
          {
            "type": "stats",
            "variant": "findings",
            "items": [
              {
                "value": "423",
                "label": "AI ad creatives generated for Barner in Creative Studio"
              },
              {
                "value": "395",
                "label": "approved and sent directly to Barner's Meta and Google Ads campaigns"
              }
            ]
          }
        ]
      },
      {
        "label": "Tracking and KPIs",
        "title": "One funnel, from the first impression to the purchase",
        "blocks": [
          {
            "type": "p",
            "text": "Before Checkgrow, the question \"is this working?\" meant opening three platforms and reconciling numbers that never quite matched. In Insights, Meta, Google Ads and Google Analytics sit in one funnel, so the whole customer journey reads from top to bottom."
          },
          {
            "type": "p",
            "text": "At the top, Meta ads made 3.8 million impressions and 33,600 clicks, and Google Ads 605,700 impressions and 7,727 clicks. In the middle, shoppers browsed product lists 86,765 times and opened single products 25,039 times. At the bottom were the purchases, and one click on them showed where they came from."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-insights-conversion-funnel-attribution.webp",
              "alt": "Barner's conversion funnel in Checkgrow Insights: Meta and Google Ads impressions and clicks at the top of the funnel, product views in the middle, purchases at the bottom, and the purchase sources by session: catalogue sales on paid Instagram 39.5%, direct 13.2%, Performance Max 11.1%",
              "width": 1596,
              "height": 1150
            },
            "caption": "Barner's funnel and purchase sources in Checkgrow Insights."
          },
          {
            "type": "p",
            "text": "That click settled the question every launch team argues about. By session, the catalogue sales campaign on paid Instagram brought the most purchases, 39.5%, ahead of direct visits with 13.2% and Google's Performance Max campaign with 11.1%. In total, 151 purchases came from a campaign and 92 without one. Insights even explains why two different numbers can both be right: session attribution tells you which visit converted, first-user attribution tells you which channel first brought the customer in."
          }
        ]
      },
      {
        "label": "AI Assistant",
        "title": "Asking the data instead of digging through it",
        "blocks": [
          {
            "type": "p",
            "text": "With everything connected, the team stopped building reports to answer questions. They asked. In early October, someone typed a simple question into the AI Assistant: which ads are converting the best in Meta?"
          },
          {
            "type": "p",
            "text": "About half a minute later the answer came back, with a table. Over the 30 days from 7 September to 6 October, Brad Offer 34,30 was the strongest Meta ad: 13 conversions from €736.11, the lowest cost per conversion of any ad with real volume at €56.62, and the most revenue, €679.07. Tortoise Offer 34,30 brought the most conversions, 16, but at €68.76 each."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-ai-assistant-best-converting-meta-ads.webp",
              "alt": "Checkgrow AI Assistant answering the question Which ads are converting the best in Meta: a table of Barner's top Meta ads by conversions, spend, cost per conversion, click-through rate and revenue, led by Brad Offer 34,30",
              "width": 1380,
              "height": 1012
            },
            "caption": "The AI Assistant answering a performance question from Barner's connected Meta data, October 2026."
          },
          {
            "type": "p",
            "text": "No exports, no spreadsheets and no waiting for the weekly report. The same chat can bring in the competitors, the creatives or the funnel, because the AI Assistant answers from Barner's company brain and connected accounts rather than from the open internet. It turns a performance review into a conversation."
          },
          {
            "type": "stats",
            "variant": "findings",
            "items": [
              {
                "value": "€56.62",
                "label": "lowest cost per conversion with real volume: Brad Offer 34,30, 7 September to 6 October 2026"
              },
              {
                "value": "€679.07",
                "label": "revenue from Brad Offer 34,30 in the same 30 days, the most of any Meta ad"
              },
              {
                "value": "16",
                "label": "conversions from Tortoise Offer 34,30, the most by volume"
              }
            ]
          }
        ]
      },
      {
        "label": "What Checkgrow found",
        "title": "Instagram brought the crowd, and the webshop converted it",
        "blocks": [
          {
            "type": "p",
            "text": "Once Barner's Instagram and Meta accounts were connected, the channel picture became clear within days, and the sessions per channel were one click away in Insights. Instagram was the engine of the launch: 9,545 sessions, 6,966 of them from paid ads, ahead of Google with 4,143 and direct visits with 3,444. Paid Instagram alone brought 32,198 users, and Google paid search 16,186."
          },
          {
            "type": "p",
            "text": "Search did its own quiet work. When people in Croatia looked up the new name, the Google ad \"Barner je stigao u Hrvatsku\" (\"Barner has arrived in Croatia\") was waiting, and it converted 13 times on an 11.82% click-through rate."
          },
          {
            "type": "stats",
            "variant": "findings",
            "items": [
              {
                "value": "9,545",
                "label": "Instagram sessions, 6,966 of them from paid ads"
              },
              {
                "value": "32,198",
                "label": "users brought by paid Instagram, ahead of Google paid search with 16,186"
              },
              {
                "value": "11.82%",
                "label": "click-through rate on the brand search ad, with 13 conversions"
              }
            ]
          }
        ]
      },
      {
        "label": "The results",
        "title": "Purchases up 160.6%, new visitors up 119%",
        "blocks": [
          {
            "type": "p",
            "text": "A month into the launch, the numbers confirmed what the team had watched build day by day. Between 2 September and 2 October 2026, Barner's webshop recorded 357 purchases, up 160.6% from 137 the month before. New visitors more than doubled, from 4,700 to 10,290, up 119%."
          },
          {
            "type": "stats",
            "variant": "results",
            "items": [
              {
                "value": "357",
                "label": "purchases, up 160.6% on the previous period"
              },
              {
                "value": "+119%",
                "label": "new visitors: 10,290 first visits against 4,700"
              },
              {
                "value": "69,190",
                "label": "page views, with 86,765 product list views"
              }
            ]
          },
          {
            "type": "p",
            "text": "The busiest day was 29 September, with 14,809 events on the site, and Fridays became the strongest day of the week. The launch campaign alone recorded 316 purchases by 2 October. Smart Reporting summarises all of it automatically, so the team reads the month in a minute instead of building the report."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/barner-croatia-launch-purchases-up-160/barner-smart-reporting-new-visitors-119.webp",
              "alt": "Checkgrow Smart Reporting for Barner: paid Instagram as the top traffic source, new visitors up 119% with 10,290 first visits against 4,700, peak activity on 29 September with 14,809 events, top events, and sessions by channel led by Instagram with 9,545",
              "width": 1796,
              "height": 1084
            },
            "caption": "New visitors up 119% and sessions by channel, in Checkgrow Smart Reporting."
          }
        ]
      }
    ],
    "statement": {
      "text": "Barner entered Croatia against 20 competitors and about 1,000 live ads, with a new webshop and no local name. Checkgrow gave the team one place to learn the market, make the creative, run the campaigns and read the results, and a month later the webshop was recording 357 purchases against 137 before.",
      "cite": "Checkgrow"
    },
    "faq": [
      {
        "q": "How can an e-commerce brand launch in a new country with Checkgrow?",
        "a": "By running the whole launch from one Checkgrow workspace. Barner set up its company brain in the Knowledge Center, connected Google Analytics, Meta, Google Ads and Instagram, researched every competitor's ads in Competitors, generated its ad creatives in Creative Studio and followed the results in Insights. In the first month of its Croatian launch, purchases rose 160.6% and new visitors 119%."
      },
      {
        "q": "What is a company brain, and why does it matter for AI marketing?",
        "a": "A company brain is a structured record of everything that makes your business specific: products, audiences, brand voice, offers and goals. In Checkgrow it lives in the Knowledge Center and feeds every AI feature, so campaign plans, ad copy and AI Assistant answers are grounded in your own facts instead of generic guesses. Connecting accounts such as Google Analytics, Meta and Google Ads adds live performance data to that context."
      },
      {
        "q": "Which accounts and tools can Checkgrow connect?",
        "a": "Checkgrow integrates with Meta (Facebook and Instagram ads), Google Ads, Google Analytics, LinkedIn, Instagram and Notion, as well as automation workflows. Once connected, their data flows into one workspace: Insights reads traffic, ads and conversions together, and the AI Assistant can answer questions across all of them."
      },
      {
        "q": "How does Checkgrow track competitors' ads and social media?",
        "a": "In Competitors, Checkgrow's AI research follows the brands you choose and shows their active ads on Meta and LinkedIn, their social media followers and growth, and the posts that perform, alongside themes, keywords and news. Barner tracked 20 competitors this way and could see about 1,000 live ads in one view, and spot changes, such as a rival more than doubling its active ads, within the same week."
      },
      {
        "q": "How can a small marketing team produce hundreds of ad creatives with AI?",
        "a": "With Creative Studio, which generates ad creatives from the brand, products and audiences in your company brain, in the languages and formats each channel needs. Your team reviews and approves them, then sends them straight into the campaign without rebuilding ads in another tool. Barner generated 423 creatives in Croatian and sent 395 to its Meta and Google Ads campaigns, then used the AI reporting to make more of the ads that converted."
      },
      {
        "q": "How do I see which ads and channels actually bring purchases?",
        "a": "Checkgrow Insights combines Meta, Google Ads and Google Analytics into one funnel, from impressions and clicks at the top to purchases at the bottom, and shows where each conversion came from. It separates session attribution, the visit in which a purchase happened, from first-user attribution, the channel that first brought the customer in, so both numbers can be read correctly."
      },
      {
        "q": "What can I ask Checkgrow's AI Assistant?",
        "a": "Anything about your company and its performance: which ads convert best, how this month compares with the last, what a competitor launched this week or which creatives to make next. The AI Assistant answers from your company brain and connected accounts, not the open internet. When Barner asked which ads were converting best on Meta, it returned a table of its top ads with spend, conversions, cost per conversion, click-through rate and revenue in about 33 seconds."
      },
      {
        "q": "How quickly can a company see results with Checkgrow?",
        "a": "It depends on the market, the budget and the offer, and no platform can promise a number. Setting up the company brain and connecting accounts comes first, and competitor research and creatives can follow straight after. In Barner's case, the first full month of the Croatian launch already showed purchases up 160.6% and new visitors up 119% on the previous period."
      }
    ],
    "footnote": "Figures from Barner's Checkgrow workspace, captured 2 October 2026. The AI Assistant answer covers 7 September to 6 October 2026."
  },
  {
    "slug": "wespa-2028-leads-in-a-month",
    "company": "WESPA",
    "draft": false,
    "title": "How WESPA, a Zagreb coworking and hospitality space, captured 2,028 leads with AI marketing",
    "description": "How Zagreb coworking and hospitality space WESPA used Checkgrow for competitor research, website audits, AI content and tasks: 2,028 leads, 6x WhatsApp chats.",
    "kicker": "Coworking and hospitality, Croatia",
    "publishedAt": "2026-10-14",
    "heroStats": [
      {
        "value": "2,028",
        "label": "leads captured in Checkgrow across seven campaigns"
      },
      {
        "value": "+496%",
        "label": "WhatsApp conversations in a month, from 99 to 590"
      }
    ],
    "features": [
      "Knowledge Center",
      "Competitors",
      "Social Media",
      "Website",
      "Campaigns",
      "Content",
      "Leads",
      "Tasks",
      "Insights"
    ],
    "hero": {
      "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-hospitality-zagreb-live-music-event.webp",
      "alt": "WESPA Hospitality in Zagreb: a DJ and a saxophonist performing under blue light at a WESPA event, with the WESPA Hospitality logo",
      "width": 1800,
      "height": 1200
    },
    "clientMark": "",
    "about": {
      "summary": "A coworking, office-space and event-venue operator in Zagreb, with meeting rooms, a hospitality programme of events and a growing community.",
      "facts": [
        {
          "label": "Industry",
          "value": "Coworking, office space and hospitality"
        },
        {
          "label": "Location",
          "value": "Zagreb, Croatia"
        },
        {
          "label": "Market",
          "value": "Companies and professionals in Zagreb"
        },
        {
          "label": "Period covered",
          "value": "2 September to 2 October 2026"
        }
      ]
    },
    "lead": "WESPA runs coworking spaces, private offices, meeting rooms and event venues in Zagreb, with a programme of events and a growing community. It had the spaces and the people. What it wanted was a steady flow of new people asking about them: a tour, a desk, a room for a workshop, a venue for a party. With its marketing running on Checkgrow, WESPA captured 2,028 leads in one place, and its WhatsApp conversations grew six-fold in a month.",
    "takeaways": [
      "WESPA set up its company brain in Checkgrow's Knowledge Center and connected Google Analytics, Meta, Google Ads and Instagram, so every campaign started from the same facts and data.",
      "Competitors and Social Media tracked nine coworking rivals' social media, growth and live ads in one place, and showed WESPA's Instagram ranked 2nd of 8 local accounts.",
      "Website audited wespa.hr for conversion, SEO and AI visibility, and Content surfaced market trends ready to turn into posts and articles with one click.",
      "Tasks turned all of it into a prioritised, AI-recommended to-do list, while five campaigns, one per offer, brought every lead into Checkgrow Leads: 2,028 from seven campaigns.",
      "Across all channels, 26.8% of engaged visitors converted at the bottom of the funnel, WhatsApp conversations rose 496% and new visitors 136%."
    ],
    "keywords": [
      "coworking marketing",
      "hospitality marketing",
      "event venue marketing",
      "lead generation",
      "coworking space Zagreb",
      "website conversion audit",
      "SEO and GEO",
      "AI visibility",
      "content trends",
      "AI marketing tasks",
      "marketing funnel",
      "WhatsApp leads",
      "competitor research",
      "WESPA",
      "Checkgrow"
    ],
    "sections": [
      {
        "label": "The challenge",
        "title": "Plenty of space to sell, and nine rivals selling the same",
        "blocks": [
          {
            "type": "p",
            "text": "Coworking is a market where everyone promises the same three things: flexibility, community and good coffee. WESPA offers more than a desk: its spaces host photo shoots, workshops, concerts and company parties. But in Zagreb it was competing with nine other operators for the same freelancers, startups and companies, and some of them were spending heavily on ads."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-event-space-zagreb-catering-bar.webp",
              "alt": "WESPA event space in Zagreb set up for a company event: a long catering table with canapés under a modern chandelier, a lit pink bar and a dance floor with disco lights",
              "width": 1800,
              "height": 1201
            },
            "caption": "WESPA's event space in Zagreb, set up for a company celebration."
          },
          {
            "type": "p",
            "text": "WESPA's community was already one of its strengths, and its Instagram audience showed it. But followers are not leads. The real question was how to turn that attention into conversations with people ready to book a tour, a meeting room, a desk or a venue, and to know which message brought them in."
          }
        ]
      },
      {
        "label": "Company brain",
        "title": "Starting with everything that makes WESPA different",
        "blocks": [
          {
            "type": "p",
            "text": "The work started in the Knowledge Center, Checkgrow's company brain. WESPA's spaces, memberships, meeting rooms, events and community programme were set out in detail, with the audiences each one serves. The brain is now 79% complete, enough for every campaign and every piece of copy to start from WESPA's real offer rather than a generic coworking pitch."
          },
          {
            "type": "p",
            "text": "WESPA then connected its accounts: Google Analytics, Meta, Google Ads and its Instagram, @wespa.hr. In the Knowledge Graph, all of it comes together around WESPA itself: the company knowledge on one side, with its brand, products, buyer personas, ideal customer profiles, use cases, SEO keywords and conversion strategy, and on the other the website, campaigns, leads, tracked competitors, sales and integrations. Every AI feature in Checkgrow reads from this graph, which is why the campaigns, content and recommendations that followed all sounded like WESPA."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-knowledge-center-company-brain-knowledge-graph.webp",
              "alt": "Checkgrow Knowledge Center for WESPA Spaces at 79% Master Knowledge: the Knowledge Graph connecting WESPA to its company knowledge (brand, products, buyer personas, ideal customer profiles, use cases, SEO keywords, conversion strategy) and to its website, campaigns, leads, tracked companies, competitors, sales, integrations and AI memories",
              "width": 2000,
              "height": 1073
            },
            "caption": "WESPA's company brain as a Knowledge Graph in Checkgrow's Knowledge Center."
          }
        ]
      },
      {
        "label": "Competitor research",
        "title": "Every competitor's social media and ads in one place",
        "blocks": [
          {
            "type": "p",
            "text": "Next, Checkgrow looked outward. In Competitors, WESPA keeps track of the nine coworking and workspace operators it competes with, in one table: their websites, their social channels, how fast their audiences are growing, where they are based and how many ads they are running. A monthly scan keeps the picture current, so nobody has to check nine Instagram profiles and two ad libraries by hand."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-competitors-coworking-social-media-ads-tracking.webp",
              "alt": "Checkgrow Competitors for WESPA Spaces: nine tracked coworking competitors including Regus, Impact Hub Zagreb, Instant Office, Rent24, Spaces, STIR UP, Coworking Labin, Terminal Zagreb and MatchBOX Coworking, with their websites, social channels, follower growth, headquarters, auto-tracking and active LinkedIn and Meta ads",
              "width": 2000,
              "height": 1068
            },
            "caption": "WESPA's nine tracked competitors, with social growth and active ads, in Checkgrow Competitors."
          },
          {
            "type": "p",
            "text": "The table made the market legible at a glance. Regus, the international giant, was running 98 ads on Meta and 45 on LinkedIn, while most local operators were barely advertising at all: Instant Office had 3 live Meta ads and Terminal Zagreb 1. Audience growth told its own story, with Instant Office up 3.38% and Coworking Labin 1.91%, while Terminal Zagreb was losing followers."
          },
          {
            "type": "p",
            "text": "Social Media put WESPA's own Instagram in that context, and the picture was encouraging. Among the eight local accounts tracked, WESPA ranked 2nd with 5,000 followers, 172.9% above the competitor median of 1,800 and ahead of Rent24, MatchBOX Coworking Studio and Coworking Labin. Only Spaces was ahead. WESPA did not need to build an audience from nothing; it needed to give the one it had a reason to get in touch."
          }
        ]
      },
      {
        "label": "Website",
        "title": "Seeing wespa.hr the way visitors, search engines and AI see it",
        "blocks": [
          {
            "type": "p",
            "text": "Ads only work if the website converts the people they send. In Website, Checkgrow ran a full conversion audit of wespa.hr, across several pages on desktop and mobile, and scored it area by area: conversion strategy, brand and message, UX and UI, and fit with best practice for service businesses. Alongside it sit SEO, tracking and AI visibility, which shows how the site appears in AI answer engines as well as in search."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-website-analysis-seo-geo-ai-visibility-conversion-audit.webp",
              "alt": "Checkgrow Website analysis for wespa.hr: a conversion audit score of 32 of 100 with scores by area for conversion strategy, brand and message, UX and UI and playbook fit, 5 issues blocking signups, 7 quick wins, a server-side and compliance tracking check, and tabs for AI visibility, SEO, tracking and competitors",
              "width": 2000,
              "height": 1074
            },
            "caption": "The website analysis for wespa.hr in Checkgrow, with AI visibility, SEO and tracking alongside."
          },
          {
            "type": "p",
            "text": "The audit was honest, which is the point. It scored the site 32 out of 100 and named exactly why: a mobile hero without a clear call to action, a contact form with 11 fields and no FAQ to answer common questions. It also listed what to fix first: 5 issues blocking sign-ups and 7 quick wins, plus a tracking check recommending server-side tagging. For WESPA, the website stopped being a guess and became a prioritised fix list."
          }
        ]
      },
      {
        "label": "Campaigns",
        "title": "Five campaigns, one for every reason to walk in",
        "blocks": [
          {
            "type": "p",
            "text": "A coworking space sells several things at once, and one generic ad cannot speak to all of them. So instead of a single campaign, Checkgrow planned one per offer. The brand campaign, Work. Meet. Belong. WESPA., ran on Meta, joined by four more: one for events, one for offices and meeting rooms, one for coworking memberships and one for hiring. Google Ads ran alongside them, catching the people already searching."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-coworking-zagreb-photo-shoot-creative-studio-space.webp",
              "alt": "A fashion photo shoot at WESPA's creative space in Zagreb: a photographer, a lighting assistant with an umbrella flash and a softbox, and a model in front of a wall of climbing plants",
              "width": 1800,
              "height": 1202
            },
            "caption": "A photo shoot in one of WESPA's creative spaces in Zagreb, one of the offers its campaigns promote."
          },
          {
            "type": "p",
            "text": "Because every campaign was built from the same company brain, each one could say something specific to its audience while still sounding like WESPA. A founder looking for a private office and a freelancer looking for a weekly desk could each see an ad written for them, from the same brand."
          }
        ]
      },
      {
        "label": "Content",
        "title": "Trend content for the market, one click away",
        "blocks": [
          {
            "type": "p",
            "text": "A community brand needs a steady stream of things worth posting. In Content, Checkgrow researches the trends shaping WESPA's market every week, for keywords like coworking spaces and event spaces in Europe, and ranks each article by how relevant it is to WESPA's business."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-content-trends-coworking-market-ai-articles.webp",
              "alt": "Checkgrow Content trends for WESPA Spaces: brand picks with 7 ready-to-rewrite opportunities, and 28 focus articles on coworking spaces and event spaces in Europe ranked by relevance, each with View and Rewrite actions",
              "width": 2000,
              "height": 1078
            },
            "caption": "Market trends for WESPA in Checkgrow Content, ranked by relevance and ready to rewrite."
          },
          {
            "type": "p",
            "text": "Instead of starting from a blank page, the team starts from the market: a report that the coworking market is set to reach $17.07 billion by 2035, or an analysis of where digital nomads should base themselves in Europe. One click on Rewrite turns a trend into a post or article in WESPA's own voice, grounded in its company brain. Seven brand picks were ready to rewrite."
          }
        ]
      },
      {
        "label": "Leads",
        "title": "Every lead in one list, with the campaign that brought it",
        "blocks": [
          {
            "type": "p",
            "text": "Running five campaigns only helps if you can tell them apart. In Checkgrow Leads, every enquiry lands in one list, tagged with the campaign that brought it. Nobody at WESPA had to copy contacts out of Meta, match form entries to ads or guess which offer someone responded to."
          },
          {
            "type": "p",
            "text": "The list grew quickly: 2,028 leads from seven campaigns, with 202 arriving in the last week alone. For a team that also runs the spaces, the events and the community, having every lead in one place, ready to follow up, was the difference between a busy inbox and a pipeline."
          },
          {
            "type": "stats",
            "variant": "results",
            "items": [
              {
                "value": "2,028",
                "label": "leads in Checkgrow Leads, each linked to its campaign"
              },
              {
                "value": "7",
                "label": "campaigns bringing leads, across Meta and Google Ads"
              },
              {
                "value": "202",
                "label": "new leads in the last week"
              }
            ]
          }
        ]
      },
      {
        "label": "Tasks",
        "title": "An AI to-do list for what matters this week",
        "blocks": [
          {
            "type": "p",
            "text": "With competitors, the website, content and campaigns all in one workspace, the next question is always the same: what should we do first? Tasks answers it. Checkgrow's AI reads everything connected to the workspace and recommends the tasks that matter for WESPA at that moment, each with a priority, a category and a time estimate."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-ai-recommended-marketing-tasks.webp",
              "alt": "Checkgrow Recommended Tasks for WESPA: eight AI-generated marketing, analytics, design and sales tasks with priority, category and time estimate, including launching a Zagreb coworking video campaign, validating conversion tracking, building a four-offer carousel campaign and creating a coworking comparison landing page",
              "width": 2000,
              "height": 1265
            },
            "caption": "AI-recommended tasks for WESPA in Checkgrow Tasks, refreshed weekly."
          },
          {
            "type": "p",
            "text": "The recommendations were specific to WESPA, not generic marketing advice: launch a Zagreb coworking video campaign at €20 a day, validate the conversion tracking, build a carousel campaign showing four of WESPA's offers, create a landing page comparing coworking plans, develop an SEO cluster for Zagreb coworking searches and set up a follow-up sequence for enquiries. One click on Generate Task turns any of them into a task with the work already scoped, and the list refreshes every week."
          }
        ]
      },
      {
        "label": "Tracking and KPIs",
        "title": "A funnel that shows where people convert",
        "blocks": [
          {
            "type": "p",
            "text": "With Google Analytics, Meta and Google Ads side by side in Insights, WESPA can read its whole funnel across all channels, from the first visit to the moment someone gets in touch. At the top, 71,039 events: page views, sessions and first visits. In the middle, 2,119 engaged actions, led by 1,032 WhatsApp interactions, 749 file downloads and 338 forms started. At the bottom, 567 conversions: confirmations and submitted forms."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-insights-funnel-reporting-conversion-rate.webp",
              "alt": "Checkgrow Insights funnel reporting for WESPA across all channels: 71,039 top-of-funnel events, 2,119 middle-of-funnel events led by 1,032 WhatsApp interactions, and 567 bottom-of-funnel conversions, with a 26.8% rate from engaged visitors to conversions and Google paid search as the top source",
              "width": 2000,
              "height": 612
            },
            "caption": "WESPA's funnel across all channels in Checkgrow Insights, with conversion rates between stages."
          },
          {
            "type": "p",
            "text": "The number that stood out was the last step. 26.8% of the people who engaged went on to convert at the bottom of the funnel, a strong rate for a business where every conversion is a real enquiry. Paid Google search brought the most conversions, followed by organic Google search and direct visits."
          },
          {
            "type": "p",
            "text": "Insights also showed what made people reach out. It was not the polished brand message; it was the community. Two versions of the community5 .1 creative brought the most results on Meta, 239 and 133, both with click-through rates above 3%, and a creative for a single cooking event brought 128 results on its own."
          },
          {
            "type": "stats",
            "variant": "findings",
            "items": [
              {
                "value": "26.8%",
                "label": "of engaged visitors converted at the bottom of the funnel, across all channels"
              },
              {
                "value": "1,032",
                "label": "WhatsApp interactions in the middle of the funnel"
              },
              {
                "value": "239",
                "label": "results from the top community creative, at a 3.56% click-through rate"
              }
            ]
          }
        ]
      },
      {
        "label": "The results",
        "title": "Six times the WhatsApp conversations",
        "blocks": [
          {
            "type": "p",
            "text": "For WESPA, the conversation that matters most happens on WhatsApp, where a question about a desk becomes a tour. In a month, those conversations grew from 99 to 590, up 496%, started by 275 different people. Smart Reporting surfaced it automatically: WhatsApp was the top action on WESPA's website."
          },
          {
            "type": "stats",
            "variant": "results",
            "items": [
              {
                "value": "590",
                "label": "WhatsApp conversations, up 496%, from 275 people"
              },
              {
                "value": "+136%",
                "label": "new visitors: 4,963 first visits against 2,103 before"
              },
              {
                "value": "+85.6%",
                "label": "page views, to 10,975"
              }
            ]
          },
          {
            "type": "p",
            "text": "The rest of the funnel moved with it. New visitors rose 136% to 4,963 and page views 85.6% to 10,975, and Mondays became the busiest day of the week on the website."
          },
          {
            "type": "figure",
            "variant": "wide",
            "image": {
              "src": "/success-stories/wespa-2028-leads-in-a-month/wespa-smart-reporting-new-visitors-whatsapp-leads.webp",
              "alt": "Checkgrow Smart Reporting for WESPA: Google paid search as the top traffic source, new visitors up 136% with 4,963 first visits against 2,103, Monday as the busiest weekday, and WhatsApp as the top action event with 590 clicks from 275 users",
              "width": 852,
              "height": 273
            },
            "caption": "New visitors up 136% and WhatsApp as the top action, in Checkgrow Smart Reporting."
          }
        ]
      }
    ],
    "statement": {
      "text": "WESPA already had the spaces and the community. Checkgrow gave it one place to understand its market, fix its website, publish what the market was talking about, run a campaign for every offer and know what to do next, and that turned attention into 2,028 leads and six times the WhatsApp conversations.",
      "cite": "Checkgrow"
    },
    "faq": [
      {
        "q": "How can a coworking space generate more leads with Checkgrow?",
        "a": "By running its marketing from one Checkgrow workspace: describe the spaces and offers in the Knowledge Center, research local competitors, launch a campaign for each offer and collect every enquiry in Leads. WESPA, a coworking operator in Zagreb, captured 2,028 leads this way and grew its WhatsApp conversations by 496% in a month."
      },
      {
        "q": "Why run a separate campaign for each offer?",
        "a": "Because people looking for a meeting room, a private office or a coworking desk respond to different messages. In Checkgrow Campaigns, each offer can have its own campaign, built from the same company brain so the brand stays consistent. WESPA ran five Meta campaigns this way, for community, events, offices and meeting rooms, coworking and hiring, plus Google Ads."
      },
      {
        "q": "How does Checkgrow Leads keep track of where leads come from?",
        "a": "Every enquiry from a connected campaign lands in one list in Checkgrow Leads, tagged with the campaign that brought it. That removes the manual work of exporting contacts from ad platforms and matching them to ads, and it shows which offer each lead responded to, so follow-up can start from the right conversation."
      },
      {
        "q": "How does Checkgrow audit a website for conversion, SEO and AI visibility?",
        "a": "Checkgrow Website runs a conversion audit across several pages on desktop and mobile, scores each area such as conversion strategy, messaging and UX, and turns the findings into a prioritised fix list of blockers and quick wins. SEO, tracking and AI visibility, how the site appears in AI answer engines, sit in the same place. WESPA's audit found 5 issues blocking sign-ups and 7 quick wins."
      },
      {
        "q": "How can a company create content about its market trends with AI?",
        "a": "Checkgrow Content researches the news and trends behind your keywords every week and ranks each article by relevance to your business. One click on Rewrite turns a trend into a post or article in your own voice, grounded in your company brain. WESPA follows coworking and European event-space trends this way."
      },
      {
        "q": "What are AI-recommended tasks in Checkgrow?",
        "a": "Checkgrow Tasks reads your connected data, campaigns, website audit and competitors, and recommends the tasks that matter most right now, each with a priority, category and time estimate. One click generates the full task. For WESPA, the recommendations included validating conversion tracking, a Zagreb coworking video campaign and a comparison landing page."
      },
      {
        "q": "How can I compare my Instagram with my competitors?",
        "a": "Checkgrow Social Media ranks your Instagram against the competitor accounts you track, with your position, follower gap and how far you sit above or below the competitor median. WESPA used it to see that it ranked 2nd of 8 local coworking accounts, 172.9% above the median, which shaped a strategy built on its existing community."
      },
      {
        "q": "What does Checkgrow show about competitors' advertising?",
        "a": "Checkgrow Competitors uses AI research to follow the companies you choose and collect their live ads on Meta and LinkedIn, together with their social media audiences, themes and news. WESPA follows nine coworking rivals this way, from Regus with 143 live ads to local operators running almost none, without checking each ad library by hand."
      },
      {
        "q": "How do I know which ads lead to WhatsApp conversations?",
        "a": "Checkgrow Insights brings Google Analytics, Meta and Google Ads into one view and tracks the actions that matter to your business, such as WhatsApp clicks, forms or bookings, next to the campaigns and creatives that drove them. For WESPA, it showed that community-led creatives and Google ads for meeting rooms and free trial passes started the most conversations."
      },
      {
        "q": "Is Checkgrow suitable for local service businesses?",
        "a": "Yes. Local businesses that sell several services, such as coworking spaces, studios, clinics or venues, benefit from keeping every offer, campaign and lead in one workspace. Checkgrow gives a small team the competitor research, campaign planning, lead tracking and reporting that would otherwise need several tools and specialists."
      }
    ],
    "footnote": "Figures from WESPA's Checkgrow workspace, covering 2 September to 2 October 2026."
  }
];

export const showDrafts = process.env.NODE_ENV !== "production";
export const successStories = allStories.filter(story => showDrafts || !story.draft);
export const getSuccessStory = (slug: string) => successStories.find(story => story.slug === slug);
export const storySectionId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
