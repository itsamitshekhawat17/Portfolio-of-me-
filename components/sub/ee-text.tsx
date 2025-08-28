'use client';
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const EEText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-[13px]">EDUCATION & EXPERIENCE</h1>
      </motion.div>
      <motion.div
        variants={slideInFromTop}
        className="text-[30px] text-white font-medium mt-[10px] text-center"
      >
        My Academic & Professional Journey
      </motion.div>
      <motion.div
        variants={slideInFromTop}
        className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        A timeline of my education and work experience
      </motion.div>
    </div>
  );
};
