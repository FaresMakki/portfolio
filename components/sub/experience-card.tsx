"use client";

import { useState } from "react";
import { Modal } from "./modal";
import { motion } from "framer-motion";

type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  tools?: readonly string[];
};

export const ExperienceCard = ({
  title,
  company,
  period,
  description,
  tools,
}: ExperienceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer bg-gradient-to-br from-[#0a0118] to-[#1a0b2e] hover:border-cyan-500/50 transition-all h-full"
      >
        {/* Icon Placeholder */}
        <div className="w-full h-32 md:h-48 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 flex items-center justify-center border-b border-[#2A0E61]">
          <svg
            className="w-16 h-16 md:w-24 md:h-24 text-cyan-400/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>

        <div className="relative p-4 md:p-6">
          <h1 className="text-lg md:text-2xl font-semibold text-white mb-1">{title}</h1>
          <p className="text-cyan-400 text-base md:text-lg mb-1">{company}</p>
          <p className="text-gray-500 text-xs md:text-sm mb-2 md:mb-3">{period}</p>
          <p className="text-sm md:text-base text-gray-400 line-clamp-3">{description}</p>
          <div className="mt-3 md:mt-4 text-cyan-400 text-xs md:text-sm font-medium">
            Click to view details →
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        company={company}
        period={period}
        description={description}
        tools={tools}
      />
    </>
  );
};

