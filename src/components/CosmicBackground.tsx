import { useEffect, useState } from 'react';

const CosmicBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; animationDelay: number; size: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 20,
          size: Math.random() * 3 + 1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Cosmic background gradient */}
      <div className="cosmic-bg absolute inset-0" />
      
      {/* Floating particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Orbiting planets decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-64 h-64">
          {/* Central star */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-solar rounded-full transform -translate-x-1/2 -translate-y-1/2 glow-cosmic" />
          
          {/* Orbiting planets */}
          <div className="planet-orbit absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '15s' }} />
          <div className="planet-orbit absolute top-1/2 left-1/2 w-3 h-3 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '25s', animationDelay: '-5s' }} />
          <div className="planet-orbit absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: '35s', animationDelay: '-10s' }} />
        </div>
      </div>
    </div>
  );
};

export default CosmicBackground;