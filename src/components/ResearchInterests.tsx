"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";

export default function ResearchInterests() {
  return (
    <SectionWrapper id="research" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            Research Interests
          </h2>
          <p className="mt-2.5 text-sm text-neutral-500 max-w-xs leading-relaxed">
            My primary research focus and areas of technical interest within computer science and AI.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8">
          <div className="flex flex-wrap gap-3.5">
            {portfolioData.researchInterests.map((interest, index) => (
              <div
                key={index}
                className="px-6 py-3.5 border border-[var(--border-color)] bg-white text-sm font-semibold text-neutral-800 rounded-2xl hover:border-neutral-900 hover:shadow-[0_6px_18px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300"
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
