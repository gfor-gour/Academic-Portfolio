"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="col-span-1 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="mt-2 text-sm text-neutral-500 max-w-xs leading-relaxed">
            Programming languages, framework proficiencies, database management, cloud environments, and developer operations.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-5 border border-[var(--border-color)] bg-white dark:bg-neutral-900 rounded-xl hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800 rounded-md border border-[var(--border-color)]"
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
