import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => document.getElementById(item.id));
      const currentSection = sections.find((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || mobileOpen
          ? 'bg-card/40 backdrop-blur-lg border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-orbitron font-bold text-lg sm:text-xl text-cosmic glow-cosmic"
          >
            LAKSHITA JAIN
          </button>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-space font-medium text-sm xl:text-base transition-all duration-300 relative ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-cosmic rounded-full" />
                )}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('contact')}
            className="btn-cosmic hidden lg:block !px-6 !py-2 text-sm"
          >
            Let's Create
          </Button>

          <button
            className="lg:hidden text-foreground hover:text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-space px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-muted-foreground hover:bg-card/40 hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => scrollToSection('contact')} className="btn-cosmic mt-2">
              Let's Create
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;