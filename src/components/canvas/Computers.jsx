import React from 'react'
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

// Mobile fallback component
const MobileFallback = ({ showTryButton, onTryClick }) => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 rounded-lg"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h3 className="text-white text-2xl font-bold mb-2">Developer Workspace</h3>
        <p className="text-gray-300 text-base mb-6">Building amazing experiences</p>
        
        {/* Try 3D Model Button */}
        {showTryButton && (
          <button 
            onClick={onTryClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg mb-6 hover:scale-105 transform"
          >
            Try 3D Model
          </button>
        )}
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [hasWebGLError, setHasWebGLError] = useState(false)
  const [forceLoad3D, setForceLoad3D] = useState(false)
  
  useEffect(() => {
    // Conservative mobile detection - only actual mobile devices
    const checkMobile = () => {
      // Only detect actual mobile devices, not tablets or small laptops
      const isMobileDevice = /Android.*Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isSmallScreen = window.innerWidth <= 500 // Only very small screens
      
      return isMobileDevice || isSmallScreen
    }
    
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(checkMobile())
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(checkMobile())
    }
    
    const handleResize = () => {
      setIsMobile(checkMobile())
    }
    
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    window.addEventListener('resize', handleResize)
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Only show fallback for actual mobile devices or WebGL errors (unless user forces 3D)
  if ((isMobile || hasWebGLError) && !forceLoad3D) {
    return (
      <div className="w-full h-full">
        <MobileFallback 
          showTryButton={isMobile && !hasWebGLError} 
          onTryClick={() => setForceLoad3D(true)} 
        />
      </div>
    )
  }

  return (
    <Canvas 
      frameloop='demand' 
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
      onError={(error) => {
        console.warn('WebGL Error:', error)
        setHasWebGLError(true)
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas