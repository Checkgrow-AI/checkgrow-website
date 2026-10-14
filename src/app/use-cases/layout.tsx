import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#use-cases-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-card focus:bg-foreground focus:px-5 focus:py-3 focus:text-canvas">Skip to content</a>
      <Nav homePage={false} />
      <main id="use-cases-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
