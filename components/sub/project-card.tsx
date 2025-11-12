"use client";

import { useState } from "react";
import { Modal } from "./modal";
import { motion } from "framer-motion";

type ProjectCardProps = {
  src?: string;
  title: string;
  description: string;
  link?: string;
  tools?: string[];
};

export const ProjectCard = ({
  title,
  description,
  link,
  tools,
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer bg-gradient-to-br from-[#0a0118] to-[#1a0b2e] hover:border-purple-500/50 transition-all h-full"
      >
        {/* Icon Placeholder */}
        <div className="w-full h-32 md:h-48 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 flex items-center justify-center border-b border-[#2A0E61]">
          <svg
            className="w-16 h-16 md:w-24 md:h-24 text-purple-400/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>

        <div className="relative p-4 md:p-6">
          <h1 className="text-lg md:text-2xl font-semibold text-white mb-2">{title}</h1>
          <p className="text-sm md:text-base text-gray-400 line-clamp-3">{description}</p>
          <div className="mt-3 md:mt-4 text-purple-400 text-xs md:text-sm font-medium">
            Click to view details →
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        tools={tools}
        link={link}
      />
    </>
  );
};
