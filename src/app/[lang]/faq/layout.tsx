import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink target="faq-content" />
      <Nav homePage={false} />
      <main id="faq-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
