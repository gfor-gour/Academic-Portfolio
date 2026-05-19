"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            Technical Skills
          </h2>
          <p className="mt-2.5 text-sm text-neutral-500 max-w-xs leading-relaxed">
            Programming languages, framework proficiencies, database management, cloud environments, and developer operations.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-7 border border-[var(--border-color)] bg-white rounded-2xl hover:border-neutral-900 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300"
            >
              <h3 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3.5 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-50 rounded-xl border border-[var(--border-color)] hover:border-neutral-400 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
