import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager, NebulaCorp',
    quote:
      "Lakshita Jain transformed our product with a design that feels alive. Every interaction is thoughtful, and our users can't stop raving about it.",
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'Marcus Rivera',
    role: 'CEO, Stellar Finance',
    quote:
      'Working with Lakshita Jain was cosmic in the best way. Deep strategic thinking paired with pixel-perfect craftsmanship. A rare combo.',
    rating: 5,
    initials: 'MR',
  },
  {
    name: 'Priya Kapoor',
    role: 'Founder, OrbitLearn',
    quote:
      'From research to launch, the process was seamless. Our onboarding completion doubled after the redesign. Highly recommend.',
    rating: 5,
    initials: 'PK',
  },
  {
    name: 'James O’Neill',
    role: 'Head of Design, Cosmic Health',
    quote:
      'Rare designer who balances aesthetics, accessibility, and business goals with equal care. Lakshita Jain raised the bar for our whole team.',
    rating: 5,
    initials: 'JO',
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-nebula">Voices from</span>{' '}
            <span className="text-cosmic glow-cosmic">the Cosmos</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-space max-w-2xl mx-auto">
            What clients and collaborators have to say about our journeys together.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Card className="card-planet relative">
            <div className="p-6 sm:p-10 md:p-12">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary/40 mb-4" />
              <p className="text-base sm:text-lg md:text-xl font-space text-foreground leading-relaxed mb-6 sm:mb-8 min-h-[6rem] sm:min-h-[8rem]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-cosmic flex items-center justify-center font-orbitron font-bold text-primary-foreground flex-shrink-0">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-orbitron font-semibold text-foreground truncate">{t.name}</div>
                  <div className="text-sm text-muted-foreground truncate">{t.role}</div>
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border hover:border-primary/40 hover:text-primary flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border hover:border-primary/40 hover:text-primary flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </Card>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gradient-cosmic' : 'w-2 bg-muted hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;