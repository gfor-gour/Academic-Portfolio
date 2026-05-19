"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { ExternalLink, Code2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Sidebar Header */}
        <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-28">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            Projects & Coding
          </h2>
          <p className="mt-2.5 text-sm text-neutral-500 max-w-xs leading-relaxed">
            A showcase of software platforms, machine learning systems, and problem-solving metrics demonstrating technical competence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="col-span-1 lg:col-span-8 space-y-16">
          {/* Projects Sub-section */}
          <div className="grid grid-cols-1 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="p-8 border border-[var(--border-color)] bg-white rounded-2xl hover:border-neutral-900 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-serif text-xl font-bold text-neutral-950">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3.5 text-neutral-400 hover:text-black transition-colors">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors p-1.5 border border-transparent hover:border-neutral-200 rounded-lg hover:bg-neutral-50"
                        aria-label={`${project.title} GitHub`}
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black transition-colors p-1.5 border border-transparent hover:border-neutral-200 rounded-lg hover:bg-neutral-50"
                        aria-label={`${project.title} Live`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <ul className="list-none space-y-3 mb-6 text-sm text-neutral-600 leading-relaxed font-normal">
                  {project.description.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-5 border-t border-neutral-100">
                  {project.tools.map((tool, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-50 rounded-lg border border-[var(--border-color)] shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Algorithmic Problem Solving Section */}
          <div className="pt-10 border-t border-[var(--border-color)]">
            <div className="flex items-center space-x-2.5 mb-6">
              <Code2 className="w-5 h-5 text-neutral-800" />
              <h3 className="text-xs font-bold tracking-widest text-neutral-800 uppercase">
                Algorithmic Problem Solving
              </h3>
            </div>

            <div className="p-8 border border-[var(--border-color)] bg-white rounded-2xl relative overflow-hidden group hover:border-neutral-900 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300">
              {/* Subtle design element */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-neutral-50 rounded-bl-full -mr-12 -mt-12 -z-10 transition-transform group-hover:scale-105 duration-350" />

              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-2">
                    LeetCode Profile Highlights
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                    {portfolioData.algorithms.leetcode}
                  </p>
                </div>
                <div className="pt-6 border-t border-neutral-100">
                  <h4 className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-2">
                    Competitive Platforms
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                    {portfolioData.algorithms.other}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
