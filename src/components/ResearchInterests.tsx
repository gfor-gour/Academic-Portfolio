"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";

export default function ResearchInterests() {
  return (
    <SectionWrapper id="research" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 md:col-span-4">
          <div className="accent-bar">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              Research Interests
            </h2>
          </div>
          <p className="mt-2.5 text-sm text-ink-muted max-w-xs leading-relaxed">
            My primary research focus and areas of technical interest within computer science and AI.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8">
          <div className="flex flex-wrap gap-3.5">
            {portfolioData.researchInterests.map((interest, index) => (
              <div
                key={index}
                className="px-6 py-3.5 border border-burgundy/20 bg-burgundy-light/50 text-sm font-semibold text-burgundy rounded-2xl hover:bg-burgundy hover:text-white hover:border-burgundy hover:shadow-[0_6px_18px_rgba(124,45,62,0.12)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
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
