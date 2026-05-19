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
    <SectionWrapper id="honors" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar Info */}
        <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-28">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-955">
            Honors & Certifications
          </h2>
          <p className="mt-2.5 text-sm text-neutral-500 max-w-xs leading-relaxed">
            Recognition received in engineering hackathons and professional cloud and artificial intelligence certifications.
          </p>
        </div>

        {/* Content List */}
        <div className="col-span-1 lg:col-span-8 space-y-12">
          {/* Honors Section */}
          <div className="space-y-6">
            {honors.map((honor, index) => (
              <div
                key={index}
                className="p-8 border border-[var(--border-color)] bg-white rounded-2xl hover:border-neutral-900 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 relative"
              >
                <div className="flex items-start space-x-5">
                  <div className="p-3.5 border border-[var(--border-color)] rounded-xl bg-neutral-50 text-neutral-800 shadow-sm shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-neutral-950">
                      {honor.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">
                      {honor.description}
                    </p>
                    
                    {honor.links && (
                      <div className="flex items-center space-x-4 mt-5 pt-4 border-t border-neutral-100">
                        {honor.links.map((link, lIndex) => (
                          <a
                            key={lIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                          >
                            {link.name === "GitHub" ? <GithubIcon className="w-4 h-4 text-neutral-400" /> : <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />}
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
          <div className="pt-10 border-t border-[var(--border-color)]">
            <h3 className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-5">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3.5 p-4 border border-[var(--border-color)] bg-white rounded-xl hover:border-neutral-900 hover:shadow-[0_6px_18px_rgba(0,0,0,0.03)] transition-all duration-300"
                >
                  <ShieldCheck className="w-4 h-4 text-neutral-800 shrink-0" />
                  <span className="text-xs font-semibold text-neutral-800">
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
