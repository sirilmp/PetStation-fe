import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Gallery } from "@/components/site/gallery";
import { Visit } from "@/components/site/visit";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
