"use client";

import { useEffect, useState } from "react";
import { isLowEndDevice } from "@/lib/mobile";

export default function MobileOptimization() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if it's a low-end device
    if (isLowEndDevice()) {
      setShowBanner(true);
    }

    // Apply performance optimizations globally
    if (isLowEndDevice()) {
      // Reduce animation frame rate
      document.body.classList.add('reduce-motion');
      
      // Remove any other heavy animations
      const style = document.createElement('style');
      style.textContent = `
        .reduce-motion * {
          transition-duration: 0.15s !important;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Close the banner
  const closeBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 p-3 z-50 backdrop-blur-sm border-t border-purple-500/30 text-xs text-white">
      <p>
        Performance mode activated for your device. Some animations may be disabled for smoother experience.
      </p>
      <button 
        onClick={closeBanner}
        className="mt-2 bg-purple-600 text-white px-3 py-1 rounded-md text-xs"
      >
        Close
      </button>
    </div>
  );
}
