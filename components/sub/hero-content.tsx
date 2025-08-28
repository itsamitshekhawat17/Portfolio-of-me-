"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl lg:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            AMIT SINGH {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Software Developer
            </span>{" "}
            
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;am a Full Stack Developer, currently enhancing my skills in Frontend Development while building strong expertise in Backend Development and Data Structures & Algorithms (DSA) with C++
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href="#skills"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn more
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[650px] lg:h-[650px] group">
          <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 blur-md transition-all duration-500 ease-in-out group-hover:opacity-20 group-hover:blur-lg"></div>
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            fill
            sizes="(max-width: 640px) 250px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 650px"
            priority
            draggable={false}
            className="select-none object-contain transition-all duration-500 ease-in-out group-hover:scale-103 group-hover:brightness-110"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
