/* Line icons for the Book a demo page: 20 × 20, 1.5 stroke, currentColor,
   matching the site's inline icon style. Icons stand alone in a
   contrasting colour; they never sit on a filled chip. */

import type { ChallengeIcon } from "@/lib/demo";

const paths: Record<string, React.ReactNode> = {
  magnet: (
    <path d="M4 3.5h3.5V10a2.5 2.5 0 0 0 5 0V3.5H16V10a6 6 0 0 1-12 0zM4 7h3.5M12.5 7H16" />
  ),
  funnel: <path d="M3 4h14l-5.5 6.5V16l-3 1.5v-7z" />,
  coins: (
    <>
      <ellipse cx="8" cy="6" rx="5" ry="2.5" />
      <path d="M3 6v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V6" />
      <path d="M7 14.2c.6.2 1.3.3 2 .3 2.8 0 5-1.1 5-2.5M10 16.4c.6.2 1.3.3 2 .3 2.8 0 5-1.1 5-2.5V10c0-1.1-1.3-2-3.3-2.4" />
    </>
  ),
  meta: (
    <path d="M2.5 12.5c0-3.5 1.8-6.5 3.8-6.5 3 0 5 8 7.6 8 1.6 0 2.6-1.4 2.6-3.6 0-2.6-1.4-4.4-3-4.4-2.6 0-4.4 5-6.6 7.6-.7.8-1.4 1.1-2.1 1.1-1.4 0-2.3-1-2.3-2.2z" />
  ),
  search: (
    <>
      <circle cx="9" cy="9" r="5.5" />
      <path d="m13 13 4 4" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="14" height="14" rx="3" />
      <path d="M7 9v4.5M7 6.5v.01M10 13.5V9M10 11c0-1.2.9-2 2-2s2 .8 2 2v2.5" />
    </>
  ),
  spark: (
    <path d="M10 2.5c.6 3.8 1.7 4.9 5.5 5.5-3.8.6-4.9 1.7-5.5 5.5-.6-3.8-1.7-4.9-5.5-5.5 3.8-.6 4.9-1.7 5.5-5.5zM15.5 13.5c.3 1.5.7 1.9 2 2-1.3.3-1.7.7-2 2-.3-1.3-.7-1.7-2-2 1.3-.1 1.7-.5 2-2z" />
  ),
  flow: (
    <>
      <rect x="2.5" y="3" width="5" height="4" rx="1" />
      <rect x="12.5" y="13" width="5" height="4" rx="1" />
      <path d="M7.5 5h3a2 2 0 0 1 2 2v6" />
      <path d="m10.5 11 2 2 2-2" />
    </>
  ),
  team: (
    <>
      <circle cx="7.5" cy="7" r="2.75" />
      <path d="M2.5 16.5c.5-2.6 2.5-4 5-4s4.5 1.4 5 4" />
      <path d="M13 4.5a2.6 2.6 0 0 1 0 5M14.5 12.7c1.6.5 2.7 1.8 3 3.8" />
    </>
  ),
  shield: (
    <>
      <path d="M10 2.5 16 5v4.5c0 4-2.6 6.6-6 8-3.4-1.4-6-4-6-8V5z" />
      <path d="m7.5 10 1.8 1.8L12.8 8" />
    </>
  ),
  clock: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 6v4l2.5 1.5" />
    </>
  ),
  bolt: <path d="M11 2.5 4.5 11H10l-1 6.5 6.5-8.5H10z" />,
  rocket: (
    <>
      <path d="M11.5 14.5 8 11l-2.5-.5C7 5.5 10.5 3 16.5 3.5 17 9.5 14.5 13 9.5 14.5z" />
      <path d="M8 11c-1.8.2-3 1.6-3.5 4.5 2.9-.5 4.3-1.7 4.5-3.5" />
      <circle cx="12.5" cy="7.5" r="1.25" />
    </>
  ),
  radar: (
    <>
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 10 15 5" />
    </>
  ),
  browser: (
    <>
      <rect x="2.5" y="3.5" width="15" height="13" rx="2" />
      <path d="M2.5 7h15M6 11h3.5M6 13.5h6" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="7.5" width="14" height="9.5" rx="1.5" />
      <path d="M2.5 7.5h15M10 7.5V17M10 7.5C8.5 4 5.5 4 5.5 5.8c0 1.2 2 1.7 4.5 1.7zM10 7.5c1.5-3.5 4.5-3.5 4.5-1.7 0 1.2-2 1.7-4.5 1.7z" />
    </>
  ),
  check: <path d="m4.5 10.5 3.5 3.5 7.5-8" />,
  calendar: (
    <>
      <rect x="3" y="4" width="14" height="13" rx="2" />
      <path d="M3 8h14M7 2.5v3M13 2.5v3" />
    </>
  ),
  globe: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M3 10h14M10 3c2 2 2.8 4.4 2.8 7S12 15 10 17c-2-2-2.8-4.4-2.8-7S8 5 10 3z" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="5" width="10.5" height="10" rx="2" />
      <path d="m13 8.5 4.5-2.5v8L13 11.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
      <path d="m3 5.5 7 5.5 7-5.5" />
    </>
  ),
  arrowLeft: <path d="M16 10H4M8.5 5.5 4 10l4.5 4.5" />,
  arrowRight: <path d="M4 10h12M11.5 5.5 16 10l-4.5 4.5" />,
  chevronLeft: <path d="M12.5 4.5 7 10l5.5 5.5" />,
  chevronRight: <path d="M7.5 4.5 13 10l-5.5 5.5" />,
  plus: <path d="M10 4.5v11M4.5 10h11" />,
  close: <path d="m5.5 5.5 9 9M14.5 5.5l-9 9" />,
};

export type DemoIconName = ChallengeIcon | keyof typeof paths;

export function DemoIcon({
  name,
  size = 20,
  className,
}: {
  name: DemoIconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
