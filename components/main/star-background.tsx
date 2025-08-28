"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense, useEffect } from "react";
import type { Points as PointsType } from "three";
import { isLowEndDevice } from "@/lib/mobile";

export const StarBackground = (props: PointsProps) => {
  // Reduce particle count for mobile/low-end devices
  const particleCount = isLowEndDevice() ? 1000 : 5000;
  
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(particleCount), { radius: 1.2 })
  );

  // Reduced animation speed for mobile devices to conserve battery and CPU
  const rotationSpeedX = isLowEndDevice() ? 20 : 10;
  const rotationSpeedY = isLowEndDevice() ? 30 : 15;

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / rotationSpeedX;
      ref.current.rotation.y -= delta / rotationSpeedY;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={new Float32Array(sphere)}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={isLowEndDevice() ? 0.003 : 0.002} // Slightly larger for mobile to stay visible with fewer points
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only mount the canvas after component is mounted in client
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Don't render the canvas on low-end devices
  if (isLowEndDevice() || !isMounted) {
    return (
      <div className="w-full h-auto fixed inset-0 -z-10 bg-gradient-to-b from-[#030014] to-[#090020]"></div>
    );
  }

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
