import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Planet component with orbit animation
function Planet({ 
  position, 
  size, 
  color, 
  orbitRadius, 
  orbitSpeed, 
  rotationSpeed = 0.01 
}: {
  position: [number, number, number];
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef({ angle: Math.random() * Math.PI * 2 });

  useFrame((state) => {
    if (meshRef.current) {
      // Orbit animation
      orbitRef.current.angle += orbitSpeed;
      const x = Math.cos(orbitRef.current.angle) * orbitRadius;
      const z = Math.sin(orbitRef.current.angle) * orbitRadius;
      meshRef.current.position.x = x;
      meshRef.current.position.z = z;
      
      // Self rotation
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhongMaterial 
        color={color} 
        shininess={100}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Sun component
function Sun() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshPhongMaterial 
        color="#FFD700" 
        emissive="#FFD700"
        emissiveIntensity={0.3}
      />
      <pointLight color="#FFD700" intensity={2} distance={100} />
    </mesh>
  );
}

// Solar system scene
function SolarSystemScene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.1} />
      
      {/* Sun */}
      <Sun />
      
      {/* Planets with realistic-ish proportions and yellow-themed colors */}
      {/* Mercury */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.08} 
        color="#FFA500" 
        orbitRadius={2} 
        orbitSpeed={0.02}
        rotationSpeed={0.02}
      />
      
      {/* Venus */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.12} 
        color="#FFB347" 
        orbitRadius={3} 
        orbitSpeed={0.015}
        rotationSpeed={0.018}
      />
      
      {/* Earth */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.13} 
        color="#4169E1" 
        orbitRadius={4} 
        orbitSpeed={0.012}
        rotationSpeed={0.02}
      />
      
      {/* Mars */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.10} 
        color="#CD5C5C" 
        orbitRadius={5} 
        orbitSpeed={0.01}
        rotationSpeed={0.019}
      />
      
      {/* Jupiter */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.35} 
        color="#DAA520" 
        orbitRadius={7} 
        orbitSpeed={0.008}
        rotationSpeed={0.025}
      />
      
      {/* Saturn */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.30} 
        color="#FAD5A5" 
        orbitRadius={9} 
        orbitSpeed={0.006}
        rotationSpeed={0.023}
      />
      
      {/* Uranus */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.18} 
        color="#4FD0E3" 
        orbitRadius={11} 
        orbitSpeed={0.004}
        rotationSpeed={0.015}
      />
      
      {/* Neptune */}
      <Planet 
        position={[0, 0, 0]} 
        size={0.17} 
        color="#4169E1" 
        orbitRadius={13} 
        orbitSpeed={0.003}
        rotationSpeed={0.016}
      />
      
      {/* Stars background */}
      <Stars 
        radius={200} 
        depth={100} 
        count={2000} 
        factor={6} 
        saturation={0.1} 
        fade={true}
      />
    </>
  );
}

const ThreeJsSolarSystem = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ 
          position: [0, 8, 15], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <SolarSystemScene />
      </Canvas>
      
      {/* Overlay gradient to maintain readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(45 100% 65% / 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(38 100% 50% / 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(50 100% 70% / 0.03) 0%, transparent 50%),
            linear-gradient(135deg, hsl(45 15% 5% / 0.8) 0%, hsl(45 15% 5% / 0.6) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeJsSolarSystem;