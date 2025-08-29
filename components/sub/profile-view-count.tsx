"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { HiEye } from "react-icons/hi";

// LocalStorage keys
const VIEW_COUNT_KEY = "portfolio-view-count";
const LAST_VISIT_KEY = "portfolio-last-visit";
const SESSION_KEY = "portfolio-session-counted";

// Initial base count - start with a realistic number
const BASE_COUNT = 1568;

export const ProfileViewCount = () => {
  const [views, setViews] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Function to generate a random number between min and max
  const getRandomIncrement = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    // Check if this is a new session
    const isNewSession = !sessionStorage.getItem(SESSION_KEY);
    
    // Get stored view count from localStorage or use base count
    let storedViews = localStorage.getItem(VIEW_COUNT_KEY);
    let viewCount = storedViews ? parseInt(storedViews, 10) : BASE_COUNT;
    
    // Get last visit timestamp
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    const currentTime = new Date().getTime();
    
    // If this is a new session or last visit was more than 30 minutes ago
    if (isNewSession || !lastVisit || (currentTime - parseInt(lastVisit, 10)) > 30 * 60 * 1000) {
      // Increment view count by 1 for this visit
      viewCount += 1;
      
      // Mark this session as counted
      sessionStorage.setItem(SESSION_KEY, 'true');
      
      // Update last visit time
      localStorage.setItem(LAST_VISIT_KEY, currentTime.toString());
    }
    
    // Save the updated count
    localStorage.setItem(VIEW_COUNT_KEY, viewCount.toString());
    
    // Set the initial count
    setViews(viewCount);
    
    // Trigger initial animation
    setTimeout(() => setAnimate(true), 500);
    
    // Simulate real-time updates by periodically incrementing the count
    intervalRef.current = setInterval(() => {
      // Only 15% chance of incrementing to make it feel natural
      if (Math.random() < 0.15) {
        setViews((prevViews) => {
          if (prevViews === null) return null;
          const newCount = prevViews + getRandomIncrement(1, 3);
          localStorage.setItem(VIEW_COUNT_KEY, newCount.toString());
          setAnimate(true);
          return newCount;
        });
      }
    }, 8000); // Check every 8 seconds
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Function to simulate someone viewing the profile right now
  const simulateNewView = () => {
    setViews((prevViews) => {
      if (prevViews === null) return null;
      const newCount = prevViews + getRandomIncrement(1, 5);
      localStorage.setItem(VIEW_COUNT_KEY, newCount.toString());
      return newCount;
    });
    setAnimate(true);
  };

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
        onClick={simulateNewView}
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
          <motion.span 
            className="text-xl font-bold text-white"
            key={views} // This ensures animation triggers when views change
            animate={{
              scale: animate ? [1, 1.1, 1] : 1,
              color: animate ? ["#ffffff", "#a855f7", "#ffffff"] : "#ffffff"
            }}
            transition={{
              duration: 0.5
            }}
          >
            {views !== null ? views.toLocaleString() : "Loading..."}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};
