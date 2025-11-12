"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Software Engineer & Network Security Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              scalable systems
            </span>{" "}
            that solve real problems.
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px]"
        >
          <p className={`text-base md:text-lg text-gray-400 ${!isExpanded ? 'line-clamp-3' : ''}`}>
            Engineering student passionate about building scalable systems and solving real-world problems.
            Experience spanning full-stack development, network security, and data engineering with tools like Spark.
            Strong interest in AI-driven applications, deep learning, and intelligent systems.
            Focused on creating reliable and efficient software solutions across diverse technical domains.
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 border-l-2 border-purple-500 pl-4"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="text-lg md:text-xl text-white font-semibold">
                    Bachelor of Science in Software Engineering
                  </p>
                  <p className="text-base md:text-lg text-gray-300">
                    Faculty of Sciences of Bizerte, University of Carthage
                  </p>
                  <p className="text-sm md:text-base text-gray-400">
                    Bizerte, Tunisia
                  </p>
                  <p className="text-sm md:text-base text-purple-400 font-medium">
                    Expected Graduation: September 2026 (Currently in final year)
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          variants={slideInFromLeft(1)}
          onClick={() => setIsExpanded(!isExpanded)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] transition-all hover:scale-105"
        >
          {isExpanded ? 'Show less' : 'Learn more'}
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden md:flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
