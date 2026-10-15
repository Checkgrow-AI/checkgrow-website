import Image from "next/image";

/* "Speak with the founders": two overlapping portraits and a short line.
   Colours come from the surrounding tokens, so it reads on the dark page
   (desktop, left column) and inside the light form panel (phones). */
const founders = [
  { src: "/team/bruno-mucheroni-checkgrow-founder.webp", name: "Bruno Mucheroni" },
  { src: "/team/amir-babovic-checkgrow-founder.webp", name: "Amir Babovic" },
];

export function FoundersNote({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div className="flex shrink-0">
        {founders.map((f, i) => (
          <Image
            key={f.name}
            src={f.src}
            alt={`${f.name}, Checkgrow co-founder`}
            width={44}
            height={44}
            className={`size-11 rounded-full object-cover ring-2 ring-canvas ${i ? "-ml-3" : ""}`}
          />
        ))}
      </div>
      <div className="min-w-0">
        <p className="text-[0.9375rem] font-semibold leading-snug">Speak with the founders</p>
        <p className="text-sm leading-snug text-muted">We are opening special seats for a private onboarding.</p>
      </div>
    </div>
  );
}
