import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import YouTubeSection from "@/components/YouTube";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      {/* <Journey /> */}
      <Skills />
      <Projects />
      <YouTubeSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
