"use client";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { useRef } from "react";

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Responsive scroll amount based on screen size
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? 290 : 420; // card width + gap
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="flex flex-col py-10 md:py-20"
    >
      <h1 className="text-[28px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20 px-4 md:px-10">
        Personal Projects
      </h1>
      <div className="w-full relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 p-1 md:p-2 transition-all duration-300 hover:scale-125 group"
          aria-label="Scroll left"
        >
          <svg
            className="w-8 h-8 md:w-12 md:h-12 text-purple-400/70 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto horizontal-scroll px-10 md:px-16"
        >
          <div className="flex gap-4 md:gap-10 pb-4 min-w-max">
            {PROJECTS.map((project, index) => (
              <div key={index} className="w-[280px] sm:w-[320px] md:w-[400px] flex-shrink-0">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  tools={project.tools}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 p-1 md:p-2 transition-all duration-300 hover:scale-125 group"
          aria-label="Scroll right"
        >
          <svg
            className="w-8 h-8 md:w-12 md:h-12 text-purple-400/70 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
