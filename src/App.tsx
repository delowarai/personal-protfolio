import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { Experience } from "./components/Experience";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { ScrollToTop } from "./components/ScrollToTop";
import { Skills } from "./components/Skills";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Skills />
      <Projects />
      <Experience />
      <FAQ />
      <Cta />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
