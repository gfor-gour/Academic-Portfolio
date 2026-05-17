"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Awards() {
  const { honors, certifications } = portfolioData.honorsAndCertifications;

  return (
    <SectionWrapper id="honors">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Sidebar Info */}
        <div className="col-span-1 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Honors & Certifications
          </h2>
          <p className="mt-2 text-sm text-neutral-500 max-w-xs leading-relaxed">
            Recognition received in engineering hackathons and professional cloud and artificial intelligence certifications.
          </p>
        </div>

        {/* Content List */}
        <div className="col-span-1 md:col-span-8 space-y-8">
          {/* Honors Section */}
          <div className="space-y-4">
            {honors.map((honor, index) => (
              <div
                key={index}
                className="p-6 border border-[var(--border-color)] bg-white dark:bg-neutral-900 rounded-xl hover:border-black dark:hover:border-white transition-all duration-300 relative"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 border border-[var(--border-color)] rounded-lg bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
                      {honor.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      {honor.description}
                    </p>
                    
                    {honor.links && (
                      <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-[var(--border-color)]">
                        {honor.links.map((link, lIndex) => (
                          <a
                            key={lIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                          >
                            {link.name === "GitHub" ? <GithubIcon className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                            <span>{link.name}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Sub-section */}
          <div className="pt-6 border-t border-[var(--border-color)]">
            <h3 className="text-sm font-bold tracking-wider text-neutral-400 uppercase mb-4">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3.5 border border-[var(--border-color)] bg-white dark:bg-neutral-900 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <ShieldCheck className="w-4 h-4 text-neutral-800 dark:text-white shrink-0" />
                  <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
