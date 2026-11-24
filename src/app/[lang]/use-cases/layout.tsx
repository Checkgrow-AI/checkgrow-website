import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink target="use-cases-content" />
      <Nav homePage={false} />
      <main id="use-cases-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
