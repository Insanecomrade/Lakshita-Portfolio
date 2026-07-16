import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Rocket, Palette, Sparkles, Download } from 'lucide-react';
import heroImage from '@/assets/hero-cosmic.jpg';

const roles = [
  'UI/UX Designer',
  'Product Designer',
  'Design Systems Expert',
  'Interaction Designer',
];

const HeroSection = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <h1
          className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 animate-fade-in-up leading-none break-words"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="text-cosmic glow-cosmic">LAKSHITA JAIN</span>
        </h1>

        <div
          className="h-8 sm:h-10 md:h-12 mb-6 sm:mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.35s' }}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-space text-foreground">
            <span className="text-muted-foreground">I'm a </span>
            <span className="text-cosmic font-semibold">{text}</span>
            <span className="text-primary animate-pulse">|</span>
          </p>
        </div>

        <p
          className="text-sm sm:text-base md:text-xl text-muted-foreground font-space max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in-up px-2"
          style={{ animationDelay: '0.5s' }}
        >
          Crafting digital experiences that are out of this world — where creativity meets usability.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {[
            { icon: Palette, label: 'Creative Design', color: 'text-primary' },
            { icon: Rocket, label: 'User Experience', color: 'text-secondary' },
            { icon: Sparkles, label: 'Innovation', color: 'text-accent' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-muted-foreground text-sm sm:text-base"
            >
              <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
              <span className="font-space">{item.label}</span>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up px-4"
          style={{ animationDelay: '0.8s' }}
        >
          <Button
            className="btn-cosmic text-base sm:text-lg !px-6 sm:!px-8 !py-3 sm:!py-4"
            onClick={() => scrollTo('projects')}
          >
            Explore My Universe
          </Button>
          <Button
            className="btn-nebula text-base sm:text-lg !px-6 sm:!px-8 !py-3 sm:!py-4"
            onClick={() => scrollTo('contact')}
          >
            <Download className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => scrollTo('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs sm:text-sm font-space">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute top-1/4 left-4 sm:left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-cosmic rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute top-3/4 right-4 sm:right-1/4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-nebula rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 right-2 sm:right-1/6 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-solar rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: '2s' }}
      />
    </section>
  );
};

export default HeroSection;