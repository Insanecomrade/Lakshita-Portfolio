import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useCountUp';
import { useEffect, useState } from 'react';
import { 
  Palette, 
  Code, 
  Users, 
  Zap, 
  Figma, 
  Smartphone,
  Monitor,
  BarChart3
} from 'lucide-react';
import constellationImage from '@/assets/constellation-skills.jpg';

const AnimatedProgress = ({ value, inView }: { value: number; inView: boolean }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setCurrent(value), 100);
    return () => clearTimeout(t);
  }, [inView, value]);
  return <Progress value={current} className="h-2 bg-muted transition-all duration-1000" />;
};

const SkillsSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const skillCategories = [
    {
      icon: Palette,
      title: "Design Systems",
      skills: [
        { name: "UI Design", level: 95 },
        { name: "Design Systems", level: 90 },
        { name: "Prototyping", level: 88 },
        { name: "Visual Design", level: 92 }
      ],
      color: "primary"
    },
    {
      icon: Users,
      title: "User Experience",
      skills: [
        { name: "User Research", level: 85 },
        { name: "Information Architecture", level: 90 },
        { name: "Interaction Design", level: 88 },
        { name: "Usability Testing", level: 82 }
      ],
      color: "secondary"
    },
    {
      icon: Code,
      title: "Technical Skills",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 78 },
        { name: "React", level: 75 },
        { name: "Framer", level: 80 }
      ],
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Strategy & Analysis",
      skills: [
        { name: "Product Strategy", level: 85 },
        { name: "Analytics", level: 80 },
        { name: "A/B Testing", level: 75 },
        { name: "Market Research", level: 78 }
      ],
      color: "primary"
    }
  ];

  const tools = [
    { name: "Figma", icon: Figma, category: "Design" },
    { name: "Adobe CC", icon: Palette, category: "Creative" },
    { name: "Framer", icon: Monitor, category: "Prototyping" },
    { name: "Principle", icon: Zap, category: "Animation" },
    { name: "Sketch", icon: Palette, category: "Design" },
    { name: "InVision", icon: Smartphone, category: "Collaboration" },
  ];

  const certifications = [
    "Google UX Design Certificate",
    "Adobe Certified Expert",
    "Figma Professional Certification",
    "Nielsen Norman Group UX Certificate"
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="text-cosmic glow-cosmic">Skills</span> <span className="text-nebula">Constellation</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-space max-w-3xl mx-auto">
            A carefully curated collection of design and technical abilities, 
            each honed through years of exploration and real-world application.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {skillCategories.map((category, index) => (
                <Card key={index} className="card-cosmic group hover:-translate-y-1 transition-transform">
                  <div className="p-5 sm:p-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-cosmic rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>
                      <h3 className="font-orbitron font-semibold text-base sm:text-lg text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3 sm:space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-space text-xs sm:text-sm text-foreground">
                              {skill.name}
                            </span>
                            <span className="font-space text-xs sm:text-sm text-primary">
                              {skill.level}%
                            </span>
                          </div>
                          <AnimatedProgress value={skill.level} inView={inView} />
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Constellation Visual */}
          <div className="lg:col-span-1">
            <Card className="card-planet h-full">
              <div className="p-5 sm:p-6 flex flex-col h-full">
                <h3 className="font-orbitron font-semibold text-lg sm:text-xl mb-4 text-center text-primary">
                  Design Universe
                </h3>
                
                <div className="flex-1 flex items-center justify-center mb-4 sm:mb-6">
                  <img 
                    src={constellationImage} 
                    alt="Skills Constellation" 
                    loading="lazy"
                    className="w-full max-w-sm h-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-orbitron font-medium text-xs sm:text-sm mb-3 text-secondary">
                      Certifications
                    </h4>
                    <div className="space-y-2">
                      {certifications.map((cert, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="block text-[10px] sm:text-xs border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tools Section */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="font-orbitron font-semibold text-xl sm:text-2xl mb-4 sm:mb-6 text-foreground">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="card-cosmic group cursor-pointer hover:-translate-y-2 transition-all duration-500">
                <div className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-nebula rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <tool.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-space font-medium text-xs sm:text-sm text-foreground mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
                    {tool.category}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;