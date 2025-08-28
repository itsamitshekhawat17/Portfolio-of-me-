"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiEye } from "react-icons/hi";

// Namespace and key for CountAPI
const NAMESPACE = "amit-singhportfolio";
const KEY = "profile-views";
// LocalStorage key
const LOCAL_STORAGE_KEY = "portfolio-view-count";

export const ProfileViewCount = () => {
  const [views, setViews] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Get stored view count from localStorage
    const storedViews = localStorage.getItem(LOCAL_STORAGE_KEY);
    const initialViews = storedViews ? parseInt(storedViews, 10) : 0;
    
    // Function to increment local views
    const incrementLocalViews = (currentViews: number) => {
      const newCount = currentViews + 1;
      localStorage.setItem(LOCAL_STORAGE_KEY, newCount.toString());
      return newCount;
    };

    // Try CountAPI first
    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error('CountAPI response not ok');
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.value === 'number') {
          setViews(data.value);
          // Also update localStorage for future fallback
          localStorage.setItem(LOCAL_STORAGE_KEY, data.value.toString());
        } else {
          throw new Error('Invalid response format');
        }
        // Trigger animation after views are loaded
        setTimeout(() => setAnimate(true), 500);
      })
      .catch((error) => {
        console.warn('CountAPI failed, using localStorage fallback:', error);
        // Fallback to localStorage if API fails
        const newCount = incrementLocalViews(initialViews);
        setViews(newCount);
        setTimeout(() => setAnimate(true), 500);
      });
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: animate ? [1, 1.1, 1] : 1,
        }}
        transition={{ 
          duration: 0.8,
          scale: {
            duration: 0.3,
            repeat: 0,
          }
        }}
        className="bg-[#0300145e] p-4 px-6 rounded-full border border-[#7042f81c] backdrop-blur-sm flex items-center gap-3 cursor-pointer hover:border-[#7042f85e] transition-all group"
        onClick={() => setAnimate(true)}
        onMouseEnter={() => setAnimate(true)}
        onAnimationComplete={() => setAnimate(false)}
      >
        <div className="relative">
          <HiEye className="text-2xl text-purple-500 group-hover:text-purple-400 transition-colors" />
          <motion.div 
            className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"
            animate={{ 
              opacity: animate ? [0, 1, 0] : 0,
              scale: animate ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 1.5,
              repeat: 0,
            }}
          />
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            Portfolio Views
          </span>
          <span className="text-xl font-bold text-white">
            {views !== null ? views.toLocaleString() : "Loading..."}
          </span>
        </div>
      </motion.div>
    </div>
  );
};
