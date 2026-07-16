import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import planetImage from '@/assets/planet-projects.jpg';

const projects = [
  {
    id: 1,
    title: 'NebulaCommerce',
    description: 'Futuristic e-commerce platform with AI-powered recommendations and 3D product visualization.',
    tags: ['E-commerce', '3D Design', 'AI/UX', 'React'],
    category: 'Web',
    featured: true,
    image: planetImage,
    metrics: { conversion: '+45%', engagement: '+60%', satisfaction: '4.8/5' },
  },
  {
    id: 2,
    title: 'Stellar Finance',
    description: 'Comprehensive fintech dashboard that simplifies complex financial data through intuitive visualizations.',
    tags: ['Fintech', 'Dashboard', 'Data Viz', 'SaaS'],
    category: 'Web',
    featured: false,
    image: planetImage,
    metrics: { efficiency: '+30%', adoption: '+85%', errors: '-70%' },
  },
  {
    id: 3,
    title: 'Cosmic Health',
    description: 'Telemedicine app connecting patients with healthcare providers through seamless video consultations.',
    tags: ['Healthcare', 'Mobile', 'Video', 'UX Research'],
    category: 'Mobile',
    featured: true,
    image: planetImage,
    metrics: { bookings: '+120%', satisfaction: '4.9/5', retention: '+40%' },
  },
  {
    id: 4,
    title: 'Orbit Learning',
    description: 'Educational platform gamifying learning through interactive cosmic adventures and progress tracking.',
    tags: ['Education', 'Gamification', 'Interactive', 'Kids'],
    category: 'Mobile',
    featured: false,
    image: planetImage,
    metrics: { engagement: '+200%', completion: '+75%', retention: '+55%' },
  },
  {
    id: 5,
    title: 'Pulsar Design System',
    description: 'End-to-end design system powering 40+ products across web and mobile with unified components.',
    tags: ['Design System', 'Tokens', 'Documentation'],
    category: 'Design',
    featured: false,
    image: planetImage,
    metrics: { velocity: '+3x', consistency: '98%', teams: '12' },
  },
  {
    id: 6,
    title: 'Aurora Brand',
    description: 'Rebrand plus landing suite for a climate-tech startup — from identity to interactive marketing pages.',
    tags: ['Branding', 'Landing', 'Motion'],
    category: 'Design',
    featured: true,
    image: planetImage,
    metrics: { leads: '+180%', bounce: '-40%', ctr: '+92%' },
  },
];

const filters = ['All', 'Web', 'Mobile', 'Design'] as const;
type Filter = typeof filters[number];

const ProjectsSection = () => {
  const [active, setActive] = useState<Filter>('All');

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-cosmic glow-cosmic">Project</span>{' '}
            <span className="text-nebula">Galaxy</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-space max-w-3xl mx-auto">
            Explore my constellation of digital experiences — crafted with precision and creativity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-space text-sm sm:text-base font-medium transition-all duration-300 ${
                active === f
                  ? 'bg-gradient-cosmic text-primary-foreground shadow-cosmic'
                  : 'bg-card/40 border border-border text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {filtered.map((project) => (
            <Card
              key={project.id}
              className="card-planet group overflow-hidden !p-0 animate-fade-in-up"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {project.featured && (
                  <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-cosmic text-primary-foreground border-none text-xs">
                    ✨ Featured
                  </Badge>
                )}

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    aria-label="Open live"
                    className="w-9 h-9 rounded-full bg-card/80 backdrop-blur border border-border hover:border-primary/40 hover:text-primary flex items-center justify-center transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    aria-label="View repo"
                    className="w-9 h-9 rounded-full bg-card/80 backdrop-blur border border-border hover:border-primary/40 hover:text-primary flex items-center justify-center transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-orbitron font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground font-space mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary/10 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 p-3 sm:p-4 bg-card/50 rounded-lg border border-border/30">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="font-orbitron font-semibold text-primary text-xs sm:text-sm">
                        {value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground capitalize truncate">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="btn-nebula w-full group/btn !py-2 sm:!py-3 text-sm sm:text-base">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground font-space mb-4 sm:mb-6 text-sm sm:text-base">
            Interested in seeing more of my work?
          </p>
          <Button className="btn-cosmic">View Complete Portfolio</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;