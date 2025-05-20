 
 import * as THREE from 'three';
import { Canvas, useFrame, useLoader  } from '@react-three/fiber';
import { useRef } from 'react';

 function Moon() {
  const meshRef = useRef();

  // Load moon texture
  const texture = useLoader(THREE.TextureLoader, images);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Slow moon rotation
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
       <Canvas camera={{ position: [3, 3, 5] }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Moon />
          
        </Canvas> 
      
    </mesh>

  );
}

