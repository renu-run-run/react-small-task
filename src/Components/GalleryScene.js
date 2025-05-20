// src/components/GalleryScene.jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Image as DreiImage, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';

function Painting({ url, index, total }) {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (!ref.current || !scroll) return;

    const r = scroll.range(index / total, 1 / total);
    const visible = r > 0.2;
    const targetOpacity = visible ? 1 : 0;
    const targetScale = visible ? 1 : 0.5;

    ref.current.material.opacity = THREE.MathUtils.lerp(ref.current.material.opacity, targetOpacity, 0.1);
    ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.1));
  });

  return (
    <DreiImage
      ref={ref}
      url={url}
      transparent
      opacity={0}
      position={[0, -index * 3.5, 0]}
      scale={[1, 1.5, 1]}
    />
  );
}

export default function GalleryScene({ images }) {
  const totalPages = images.length;

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <Environment preset="city" />
      <ScrollControls pages={totalPages}>
        <Scroll>
          {images.map((img, i) => (
            <Painting key={img.id} url={img.url} index={i} total={totalPages} />
          ))}
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}
