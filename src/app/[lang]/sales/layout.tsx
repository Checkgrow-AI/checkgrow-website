import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";

export default function SalesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink target="sales-content" />
      <Nav homePage={false} />
      <main id="sales-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
