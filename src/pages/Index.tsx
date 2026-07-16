import ThreeJsSolarSystem from '@/components/ThreeJsSolarSystem';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import CursorTail from '@/components/CursorTail';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Three.js Solar System Background */}
      <ThreeJsSolarSystem />

      {/* Cursor Trail Effect (desktop only) */}
      <div className="hidden md:block">
        <CursorTail />
      </div>

      {/* Scroll progress bar + back-to-top */}
      <ScrollProgress />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 py-6 sm:py-8 border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground font-space">
            © 2026 Lakshita Jain. Crafted with cosmic energy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;