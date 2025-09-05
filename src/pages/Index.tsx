import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
