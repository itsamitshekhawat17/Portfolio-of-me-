"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { isLowEndDevice } from "@/lib/mobile";
import { useEffect, useState } from "react";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // For low-end devices, use simpler rendering without animations
  const isLowEnd = mounted && isLowEndDevice();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Reduce animation delay on mobile devices
  const animationDelay = isLowEnd ? 0.02 : 0.1;
  
  // Optimize image size for mobile
  const mobileWidth = Math.min(width, 40);
  const mobileHeight = Math.min(height, 40);
  const finalWidth = isLowEnd ? mobileWidth : width;
  const finalHeight = isLowEnd ? mobileHeight : height;

  // For low-end devices, we'll use a simpler approach without motion animations
  if (isLowEnd) {
    return (
      <div>
        <Image 
          src={`/skills/${src}`} 
          width={finalWidth} 
          height={finalHeight} 
          alt={name}
          priority={index < 8} // Load first few images with priority
          loading={index < 8 ? "eager" : "lazy"}
        />
      </div>
    );
  }

  // For normal devices, use the motion animations
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image 
        src={`/skills/${src}`} 
        width={finalWidth} 
        height={finalHeight} 
        alt={name}
        loading={index < 8 ? "eager" : "lazy"}
      />
    </motion.div>
  );
};
