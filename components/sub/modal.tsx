"use client";

import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tools?: readonly string[];
  link?: string;
  period?: string;
  company?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  tools,
  link,
  period,
  company,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-2 md:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0118] border-2 border-[#2A0E61] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              style={{
                boxShadow: "0 0 40px rgba(138, 43, 226, 0.3)",
              }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-lg p-4 md:p-6 border-b border-[#2A0E61] flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {title}
                  </h2>
                  {company && (
                    <p className="text-base md:text-lg text-purple-300 mt-1">{company}</p>
                  )}
                  {period && (
                    <p className="text-xs md:text-sm text-gray-400 mt-1">{period}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="ml-2 md:ml-4 p-1.5 md:p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 transition-colors border border-purple-500/30"
                >
                  <XMarkIcon className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-purple-300 mb-2 md:mb-3">
                    Description
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-line">
                    {description}
                  </p>
                </div>

                {/* Tools/Technologies */}
                {tools && tools.length > 0 && (
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-purple-300 mb-2 md:mb-3">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-xs md:text-sm text-purple-200 hover:border-purple-400/50 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Link */}
                {link && link !== "#" && (
                  <div>
                    {link === "private" ? (
                      <button
                        disabled
                        className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gray-600/50 rounded-lg text-sm md:text-base text-gray-400 font-semibold cursor-not-allowed opacity-60"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        Private Repository
                      </button>
                    ) : (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-lg text-sm md:text-base text-white font-semibold transition-all transform hover:scale-105"
                      >
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View on GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

