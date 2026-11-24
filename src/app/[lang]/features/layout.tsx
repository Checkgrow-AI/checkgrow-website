import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink target="features-content" />
      <Nav homePage={false} />
      <main id="features-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
