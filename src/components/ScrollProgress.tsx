import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setShowTop(scrollTop > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-cosmic transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%`, boxShadow: '0 0 10px hsl(var(--primary) / 0.6)' }}
        />
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-cosmic text-primary-foreground flex items-center justify-center shadow-cosmic hover:shadow-glow hover:scale-110 transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default ScrollProgress;