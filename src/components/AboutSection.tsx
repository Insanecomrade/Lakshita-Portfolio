import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, Zap, Target } from 'lucide-react';
import { useCountUp, useInView } from '@/hooks/useCountUp';

const values = [
  { icon: Lightbulb, title: 'Creative Innovation', description: 'Pushing boundaries with imaginative design solutions' },
  { icon: Users, title: 'User-Centric', description: 'Designing with empathy and user needs at the core' },
  { icon: Zap, title: 'Performance Focus', description: 'Creating fast, efficient, and delightful experiences' },
  { icon: Target, title: 'Goal-Oriented', description: 'Aligning design decisions with business objectives' },
];

const technologies = [
  'Figma', 'Adobe Creative Suite', 'Sketch', 'Framer', 'Principle',
  'HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Node.js',
  'User Research', 'Prototyping', 'Design Systems', 'A/B Testing',
];

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed', color: 'text-cosmic' },
  { value: 5, suffix: '+', label: 'Years Experience', color: 'text-secondary' },
  { value: 20, suffix: '+', label: 'Happy Clients', color: 'text-accent' },
  { value: 3, suffix: '', label: 'Design Awards', color: 'text-primary' },
];

const StatItem = ({ stat, inView }: { stat: typeof stats[number]; inView: boolean }) => {
  const count = useCountUp(stat.value, 1800, inView);
  return (
    <div className="text-center">
      <div className={`font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-2 ${stat.color}`}>
        {count}
        {stat.suffix}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-muted-foreground font-space">{stat.label}</div>
    </div>
  );
};

const AboutSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-nebula">About the</span>{' '}
            <span className="text-cosmic glow-cosmic">Navigator</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-space max-w-3xl mx-auto">
            A passionate UI/UX designer with 5+ years of experience crafting digital experiences
            that bridge the gap between imagination and functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          <div className="space-y-6">
            <div className="card-cosmic">
              <h3 className="font-orbitron font-semibold text-xl sm:text-2xl mb-4 text-primary">
                My Design Journey
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-space leading-relaxed mb-4">
                I believe great design is like exploring the cosmos — it requires curiosity,
                precision, and the courage to venture into uncharted territories.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-space leading-relaxed">
                Over the years, I've worked with startups and established companies, helping them
                translate complex ideas into intuitive, beautiful experiences that users love.
              </p>
            </div>

            <div className="card-cosmic">
              <h4 className="font-orbitron font-semibold text-base sm:text-lg mb-4 text-secondary">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all cursor-default text-xs sm:text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value) => (
              <Card key={value.title} className="card-planet group cursor-pointer">
                <div className="flex flex-col items-center text-center p-5 sm:p-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-orbitron font-semibold text-base sm:text-lg mb-2 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-space">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 card-cosmic !p-6 sm:!p-8"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;