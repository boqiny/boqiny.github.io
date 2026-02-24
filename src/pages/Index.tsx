import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Boqin Yuan | UCSD MSCS</title>
        <meta
          name="description"
          content="Boqin Yuan - MSCS student at UC San Diego. Interested in ML systems, LLM applications, and software engineering."
        />
        <meta name="keywords" content="Boqin Yuan, UCSD, Computer Science, Machine Learning, ML Systems, LLM" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <WorkExperienceSection />
          <ResearchSection />
          <PublicationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
