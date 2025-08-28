"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

// Sample project images we'll use in our gallery
const GALLERY_IMAGES = [
  "/projects/project-1.png",
  "/projects/project-2.png",
  "/projects/project-3.png",
  "/skills/html.png",
  "/skills/css.png",
  "/skills/js.png",
  "/skills/react.png",
  "/skills/next.png",
  "/skills/tailwind.png",
  "/skills/ts.png",
  "/skills/figma.png",
  "/skills/framer.png",
  "/skills/node.png",
  "/skills/mongodb.png",
  "/skills/firebase.png",
  "/skills/graphql.png",
  "/skills/prisma.png",
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center w-full mb-10">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <h1 className="Welcome-text text-[13px]">GALLERY</h1>
        </motion.div>
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center"
        >
          Project Gallery
        </motion.div>
        
        <motion.div
          variants={slideInFromRight(0.5)}
          className="text-[20px] text-gray-200 mb-10 mt-[10px] text-center max-w-[600px]"
        >
          A showcase of my favorite projects and design work.
        </motion.div>
      </div>

      {/* Simple Image Grid */}
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="w-full max-w-[1200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4"
      >
        {GALLERY_IMAGES.map((image, index) => (
          <div 
            key={index} 
            className="relative h-40 rounded-lg overflow-hidden border border-[#7042f81c] hover:border-[#7042f8] transition-all duration-300 hover:scale-105"
          >
            <Image 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              fill 
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Background */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
