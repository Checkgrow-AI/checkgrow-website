"use client";

import Image from "next/image";
import { useT } from "@/i18n/client";
import { fmt } from "@/i18n/format";

/* "Speak with the founders": two overlapping portraits and a short line.
   Colours come from the surrounding tokens, so it reads on the dark page
   (desktop, left column) and inside the light form panel (phones).
   A client component because it also renders inside the booking form. */
const founders = [
  // i18n-allow: person names never translate
  { src: "/team/bruno-mucheroni-checkgrow-founder.webp", name: "Bruno Mucheroni" },
  // i18n-allow: person names never translate
  { src: "/team/amir-babovic-checkgrow-founder.webp", name: "Amir Babovic" },
];

export function FoundersNote({ className = "" }: { className?: string }) {
  const t = useT("demo").founders;
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div className="flex shrink-0">
        {founders.map((f, i) => (
          <Image
            key={f.name}
            src={f.src}
            alt={fmt(t.alt, { name: f.name })}
            width={44}
            height={44}
            className={`size-11 rounded-full object-cover ring-2 ring-canvas ${i ? "-ml-3" : ""}`}
          />
        ))}
      </div>
      <div className="min-w-0">
        <p className="text-[0.9375rem] font-semibold leading-snug">{t.title}</p>
        <p className="text-sm leading-snug text-muted">{t.body}</p>
      </div>
    </div>
  );
}
