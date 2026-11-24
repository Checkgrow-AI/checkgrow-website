export type TutorialVideo = {
  id: string;
  title: string;
  description: string;
  src: string;
  type: "video/mp4" | "video/webm";
  poster: string;
  captions?: string;
  durationSeconds: number;
  width: number;
  height: number;
};

export type Tutorial = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  cover: string;
  introduction: string;
  prerequisites: string;
  steps: readonly { id: string; title: string; body: string }[];
  videos: readonly [TutorialVideo, TutorialVideo];
  takeaway: string;
};

export const findTutorial = (items: readonly Tutorial[], slug: string) => items.find(tutorial => tutorial.slug === slug);
export const tutorialPath = (slug: string) => `/news/${slug}`;
export function videoDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
/* a publication date in the reader's language (en-GB for English) */
export function tutorialDate(date: string, tag = "en-GB") {
  return new Intl.DateTimeFormat(tag === "en" ? "en-GB" : tag, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
