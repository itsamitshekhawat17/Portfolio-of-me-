"use client";

export const isMobileDevice = (): boolean => {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Use navigator.userAgent to detect mobile devices
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    window.navigator.userAgent
  );
};

// Detect low-end devices by checking processor cores
export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  // Check hardware concurrency (available CPU cores)
  // Most low-end devices have 4 or fewer cores
  const lowCPUCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  
  // For Android devices specifically
  const isLowEndAndroid = /Android/i.test(window.navigator.userAgent) && lowCPUCores;
  
  // Oppo A38 specific detection (if needed)
  const isOppoA38 = /OPPO A38/i.test(window.navigator.userAgent);
    
  return isMobileDevice() && (lowCPUCores || isLowEndAndroid || isOppoA38);
};
