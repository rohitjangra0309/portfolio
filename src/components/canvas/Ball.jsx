import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Mobile fallback component for technology icons
const TechIconFallback = ({ icon, name }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-full border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
      <div className="relative p-6 group-hover:scale-110 transition-transform duration-300">
        <img 
          src={icon} 
          alt={name}
          className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
          style={{ 
            filter: 'drop-shadow(0 4px 8px rgba(147, 51, 234, 0.3))'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

const BallCanvas = ({ icon, name }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Conservative mobile detection
    const checkMobile = () => {
      const isMobileDevice = /Android.*Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isSmallScreen = window.innerWidth <= 500;
      return isMobileDevice || isSmallScreen;
    };

    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use fallback for mobile devices to prevent WebGL context issues
  if (isMobile || hasError) {
    return <TechIconFallback icon={icon} name={name || "Technology"} />;
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false, // Disable for better mobile performance
        powerPreference: "default" // Use default instead of high-performance
      }}
      onError={(error) => {
        console.warn('WebGL Error in Ball Canvas:', error);
        setHasError(true);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;