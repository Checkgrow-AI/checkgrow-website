import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink target="news-content" />
      <Nav homePage={false} />
      <main id="news-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
