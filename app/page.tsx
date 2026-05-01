import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import IntroWrapper from "@/components/IntroWrapper";

export default function Home() {
  return (
    <main className="relative">
      <IntroWrapper />
      <Navbar />
      <Hero />
      <Experience />
      <Achievements />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}
