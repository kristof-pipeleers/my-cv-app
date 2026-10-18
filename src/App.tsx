import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import StackCorridor from "./components/StackCorridor";
import Writing from "./components/Writing";
import { useReveal } from "./lib/reveal";

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <StackCorridor />
        <Expertise />
        <Experience />
        <Education />
        <Approach />
        <Writing />
      </main>
      <Contact />
      <Footer />
      {import.meta.env.MODE === "dev" && (
        <div className="fixed bottom-4 left-4 z-50 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold tracking-wider text-black shadow-lg">
          DEV PREVIEW
        </div>
      )}
    </>
  );
}
