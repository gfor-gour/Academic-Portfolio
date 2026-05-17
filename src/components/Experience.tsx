"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { Briefcase, Calendar, MapPin, BookOpen, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Sidebar Info */}
        <div className="col-span-1 md:col-span-4 sticky top-24">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Experience
          </h2>
          <p className="mt-2 text-sm text-neutral-500 max-w-xs leading-relaxed">
            A chronological overview of my research contributions, undergraduate thesis work, and industry software engineering experience.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="col-span-1 md:col-span-8 space-y-12">
          {/* Research Experience Sub-section */}
          <div>
            <div className="flex items-center space-x-2.5 mb-6">
              <BookOpen className="w-5 h-5 text-neutral-800 dark:text-white" />
              <h3 className="text-lg font-bold tracking-tight text-neutral-800 dark:text-white uppercase text-xs tracking-wider">
                Research Experience
              </h3>
            </div>
            
            <div className="space-y-8 relative pl-6 border-l border-neutral-200 dark:border-neutral-800 ml-3.5">
              {portfolioData.researchExperience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white transition-colors duration-300" />
                  
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end text-xs text-neutral-500 dark:text-neutral-400 gap-1.5">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 md:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Thesis Details */}
                  {exp.thesis && (
                    <div className="mb-4 p-4 bg-neutral-50 dark:bg-neutral-900 border border-[var(--border-color)] rounded-lg">
                      <p className="text-xs uppercase tracking-wider text-neutral-500 font-bold mb-1">
                        Undergraduate Thesis
                      </p>
                      <h5 className="font-serif text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 mb-1 leading-snug">
                        {exp.thesis.title}
                      </h5>
                      <p className="text-xs text-neutral-750 dark:text-neutral-300">
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">Supervisor:</span> {exp.thesis.supervisor}
                      </p>
                      {exp.thesis.paperUrl && (
                        <div className="mt-3 pt-3 border-t border-[var(--border-color)] flex flex-wrap gap-3">
                          <a
                            href={exp.thesis.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-xs font-medium text-neutral-750 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                          >
                            <span>Thesis Paper</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Research Paper Details */}
                  {exp.paper && (
                    <div className="mb-4 p-4 bg-neutral-50 dark:bg-neutral-900 border border-[var(--border-color)] rounded-lg">
                      <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-black text-white dark:bg-white dark:text-black rounded">
                          Paper under review
                        </span>
                        <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                          {exp.paper.status}
                        </span>
                      </div>
                      <h5 className="font-serif text-sm md:text-base font-bold text-neutral-800 dark:text-neutral-200 mb-3 leading-snug">
                        {exp.paper.title}
                      </h5>
                      
                      {exp.paper.resources && (
                        <div className="flex flex-wrap gap-3">
                          {exp.paper.resources.map((res, rIndex) => (
                            <a
                              key={rIndex}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-xs font-medium text-neutral-750 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                            >
                              <span>{res.name}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bullet points */}
                  <ul className="list-disc pl-4 space-y-2 text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Experience Sub-section */}
          <div className="pt-6 border-t border-[var(--border-color)]">
            <div className="flex items-center space-x-2.5 mb-6">
              <Briefcase className="w-5 h-5 text-neutral-800 dark:text-white" />
              <h3 className="text-lg font-bold tracking-tight text-neutral-800 dark:text-white uppercase text-xs tracking-wider">
                Industry Experience
              </h3>
            </div>

            <div className="space-y-8 relative pl-6 border-l border-neutral-200 dark:border-neutral-800 ml-3.5">
              {portfolioData.industryExperience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white transition-colors duration-300" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end text-xs text-neutral-500 dark:text-neutral-400 gap-1.5">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 md:justify-end">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="list-disc pl-4 space-y-2 text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
