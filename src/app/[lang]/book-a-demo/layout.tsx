import { Nav } from "@/components/Nav";
import { SkipLink } from "@/components/SkipLink";
import { Footer } from "@/components/sections/Footer";
import { DemoScrollReset } from "@/components/demo/DemoScrollReset";

export default function BookDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DemoScrollReset />
      <SkipLink target="demo-content" />
      <Nav homePage={false} />
      <main id="demo-content">{children}</main>
      <Footer homePage={false} />
    </>
  );
}
