import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const Crystal = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle auto-rotation
    meshRef.current.rotation.y = Math.sin(t * 0.1) * 0.2;
  });

  const materialProps = {
    backside: true,
    samples: 16,
    thickness: 0.5, // Reduced thickness
    chromaticAberration: 0.05,
    anisotropy: 0.3,
    distortion: 0.2, // Reduced distortion
    distortionScale: 0.5,
    temporalDistortion: 0.1,
    iridescence: 1,
    iridescenceIOR: 1,
    iridescenceThicknessRange: [0, 1400],
    clearcoat: 1,
    roughness: 0.1,
    color: "#e0f2fe",
  };

  return (
    <group ref={meshRef} dispose={null}>
      {/* Main Quartz Point Body */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[1, 1, 3, 6]} />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>

      {/* Crystal Termination (Tip) */}
      <mesh position={[0, 1.25, 0]}>
        <coneGeometry args={[1, 1.5, 6]} />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>

      {/* Smaller side crystal for "Cluster" effect */}
      <group position={[0.8, -1.5, 0.5]} rotation={[0, 0, -0.5]} scale={0.5}>
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[1, 1, 2, 6]} />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
        <mesh position={[0, 0.75, 0]}>
          <coneGeometry args={[1, 1, 6]} />
          <MeshTransmissionMaterial {...materialProps} />
        </mesh>
      </group>
    </group>
  );
};

const CrystalHero = () => {
  return (
    <div className="h-[80vh] w-full relative overflow-hidden bg-gradient-to-br from-[#E0F2F7] via-[#FDFDFD] to-[#F5ECFF]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lumina-gold/10 rounded-full blur-[100px]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-slate-800 mb-6 tracking-tight drop-shadow-sm">
          Awaken Your <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">
            Inner Radiance
          </span>
        </h1>
        <p className="font-sans text-slate-600 text-lg md:text-xl max-w-lg tracking-wide mb-8">
          Ethically sourced tools for transformation. <br />
          Align your energy with the frequency of the earth.
        </p>
        <div className="pointer-events-auto flex gap-4">
          <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-serif tracking-widest text-sm hover:scale-105 transition-transform duration-300 shadow-xl shadow-slate-200">
            SHOP CRYSTALS
          </button>
          <button className="px-8 py-3 bg-white/50 backdrop-blur-md border border-white text-slate-800 rounded-full font-serif tracking-widest text-sm hover:bg-white transition-colors duration-300">
            TAKE THE QUIZ
          </button>
        </div>
      </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="absolute inset-0 z-0 touch-none">
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />

        {/* Interactive Controls */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Float
            speed={2}
            rotationIntensity={0.2}
            floatIntensity={0.5}
            floatingRange={[-0.1, 0.1]}
          >
            <Crystal />
          </Float>
        </PresentationControls>

        <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4} color="#a6b0c2" />
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} radius={0.4} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default CrystalHero;
