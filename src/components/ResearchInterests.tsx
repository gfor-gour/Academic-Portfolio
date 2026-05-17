"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";

export default function ResearchInterests() {
  return (
    <SectionWrapper id="research">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="col-span-1 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Research Interests
          </h2>
          <p className="mt-2 text-sm text-neutral-500 max-w-xs">
            My primary research focus and areas of technical interest within computer science and AI.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8">
          <div className="flex flex-wrap gap-3">
            {portfolioData.researchInterests.map((interest, index) => (
              <div
                key={index}
                className="px-5 py-3 border border-[var(--border-color)] bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-800 dark:text-neutral-200 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
