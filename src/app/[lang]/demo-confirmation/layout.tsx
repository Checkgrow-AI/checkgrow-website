import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";

export default function DemoConfirmationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink target="confirmation-content" />
      <Nav homePage={false} />
      <main id="confirmation-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
