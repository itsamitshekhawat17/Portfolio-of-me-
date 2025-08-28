"use client";

import { HeroContent } from "@/components/sub/hero-content";
import { isMobileDevice, isLowEndDevice } from "@/lib/mobile";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col h-full w-full">
      {mounted && isLowEndDevice() ? (
        // Optimized static image for mobile devices
        <div className="rotate-180 absolute top-[-340px] left-0 w-full h-full -z-20">
          <Image
            src="/hero-bg1.png" 
            alt="Hero background" 
            fill
            priority
            sizes="100vw"
            quality={60}
            className="object-cover"
          />
        </div>
      ) : (
        // Video for desktop
        <video
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
      )}

      <HeroContent />
    </div>
  );
};
