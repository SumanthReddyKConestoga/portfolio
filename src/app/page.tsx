import FloatingNavigation from "@/components/navigation/FloatingNavigation";
import HeroSection from "@/components/hero/HeroSection";
import ArchitectureDiagram from "@/components/architecture/ArchitectureDiagram";
import ProjectGrid from "@/components/projects/ProjectGrid";
import CapabilityPanel from "@/components/capabilities/CapabilityPanel";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <FloatingNavigation />
      <main id="main">
        <HeroSection />
        <ArchitectureDiagram />
        <ProjectGrid />
        <CapabilityPanel />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
