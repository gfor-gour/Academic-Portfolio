"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="col-span-1 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Education
          </h2>
          <p className="mt-2 text-sm text-neutral-500 max-w-xs">
            Academic training, degrees, and university affiliation details.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8 space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="p-6 border border-[var(--border-color)] bg-white dark:bg-neutral-900 rounded-xl hover:border-black dark:hover:border-white transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-50 dark:bg-neutral-800 rounded-bl-full -mr-8 -mt-8 -z-10 transition-transform group-hover:scale-105 duration-300" />
              
              <div className="flex items-start space-x-4">
                <div className="p-3 border border-[var(--border-color)] rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-1 md:mt-0">
                      <span className="inline-block px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-[var(--border-color)]">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
