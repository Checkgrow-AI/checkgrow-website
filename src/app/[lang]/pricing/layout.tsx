import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink target="pricing-content" />
      <Nav homePage={false} />
      <main id="pricing-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
