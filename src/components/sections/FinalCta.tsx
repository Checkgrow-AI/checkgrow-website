/* The closing call to action: Book a demo. Its content (logo, heading,
   sub, button) staggers in the first time the reader scrolls it into
   view (ArriveOnView adds .cta-arrive). The section keeps the id
   "waitlist" so the nav progress and the mobile scroll rail still end
   here. The early-access form (WaitlistForm) is hidden for now, not
   deleted. A server component, so any page can render it without
   handing its copy to the client. */

import Image from "next/image";
import { ArriveOnView } from "@/components/Reveal";
import { LocalLink as Link } from "@/i18n/client";
import { getT } from "@/i18n/server";

export function FinalCta() {
  const t = getT("home").finalCta;
  return (
    <section className="bg-surface py-24 text-foreground md:py-32" id="waitlist">
      <div className="wrap">
        <ArriveOnView arrivedClass="cta-arrive" className="cta-box flex flex-col items-center text-center">
          <Image
            src="/brand/logos/symbol-transparent-light.svg"
            alt={t.logoAlt}
            width={56}
            height={56}
            className="mx-auto"
          />
          <h2 className="text-h1 mx-auto mt-8 max-w-2xl text-balance">
            {t.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {t.body}
          </p>
          <div className="mt-10 flex w-full justify-center">
            <Link
              href="/book-a-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-8 text-base font-medium text-canvas transition-colors duration-200 hover:bg-accent max-sm:w-full"
            >
              {t.bookDemo}
            </Link>
          </div>
        </ArriveOnView>
      </div>
    </section>
  );
}
