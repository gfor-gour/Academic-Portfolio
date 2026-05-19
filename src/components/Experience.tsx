"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { Briefcase, Calendar, MapPin, BookOpen, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Sidebar Info */}
        <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-28">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            Experience
          </h2>
          <p className="mt-2.5 text-sm text-neutral-500 max-w-xs leading-relaxed">
            A chronological overview of my research contributions, undergraduate thesis work, and industry software engineering experience.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="col-span-1 lg:col-span-8 space-y-16">
          {/* Research Experience Sub-section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2.5 mb-2">
              <BookOpen className="w-5 h-5 text-neutral-800" />
              <h3 className="text-xs font-bold tracking-widest text-neutral-800 uppercase">
                Research Experience
              </h3>
            </div>
            
            <div className="space-y-8">
              {portfolioData.researchExperience.map((exp, index) => (
                <div key={index} className="p-6 md:p-8 border border-[var(--border-color)] bg-white rounded-2xl hover:border-neutral-900 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 relative group">
                  
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-neutral-950">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-neutral-800 mt-1">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs text-neutral-500 gap-2 shrink-0">
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-neutral-50 border border-[var(--border-color)] rounded-lg font-semibold text-neutral-700">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:justify-end text-neutral-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-neutral-550 font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Thesis Details */}
                  {exp.thesis && (
                    <div className="mb-6 p-5 bg-[#FAF9F6] border border-[var(--border-color)] rounded-xl">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-1.5">
                        Undergraduate Thesis
                      </p>
                      <h5 className="font-serif text-base font-bold text-neutral-900 mb-2 leading-snug">
                        {exp.thesis.title}
                      </h5>
                      <p className="text-xs text-neutral-600">
                        <span className="font-semibold text-neutral-800">Supervisor:</span> {exp.thesis.supervisor}
                      </p>
                      {exp.thesis.paperUrl && (
                        <div className="mt-4 pt-3.5 border-t border-neutral-200/60 flex flex-wrap gap-3">
                          <a
                            href={exp.thesis.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-neutral-700 hover:text-black transition-colors"
                          >
                            <span>Thesis Paper</span>
                            <ExternalLink className="w-3 h-3 text-neutral-400" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Research Paper Details */}
                  {exp.paper && (
                    <div className="mb-6 p-5 bg-[#F8FAFC] border border-blue-100 rounded-xl">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-neutral-900 text-white rounded">
                          Paper under review
                        </span>
                        <span className="text-xs font-semibold text-neutral-500">
                          {exp.paper.status}
                        </span>
                      </div>
                      <h5 className="font-serif text-base font-bold text-neutral-900 mb-4 leading-snug">
                        {exp.paper.title}
                      </h5>
                      
                      {exp.paper.resources && (
                        <div className="flex flex-wrap gap-2.5">
                          {exp.paper.resources.map((res, rIndex) => (
                            <a
                              key={rIndex}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:border-black hover:text-black transition-colors shadow-sm"
                            >
                              <span>{res.name}</span>
                              <ExternalLink className="w-3 h-3 text-neutral-400" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bullet points */}
                  <ul className="list-none space-y-3 text-sm text-neutral-600 leading-relaxed font-normal">
                    {exp.bullets.map((bullet, bIndex) => {
                      const wordsToHighlight = [
                        "AgentCollabBench",
                        "Software Engineering",
                        "DevOps",
                        "Data Engineering",
                        "LLM",
                        "JSON",
                        "GPT-4 Turbo",
                        "Claude 3.5",
                        "Gemini 1.5 Pro",
                        "BLEU",
                        "BERTScore",
                        "Next.js",
                        "Node.js",
                        "MongoDB",
                        "federated unlearning",
                        "LoRA-tuned",
                        "GDPR",
                        "non-IID",
                        "spectral restoration",
                        "diffusion-based",
                        "React Native",
                        "Expo",
                        "REST APIs",
                        "AWS Lambda",
                        "distributed systems",
                        "Agile"
                      ];
                      
                      let highlightedText = bullet;
                      wordsToHighlight.forEach(word => {
                        const regex = new RegExp(`\\b${word}\\b`, 'gi');
                        highlightedText = highlightedText.replace(regex, (match) => `<span class="text-neutral-950 font-semibold underline decoration-neutral-200 decoration-2 underline-offset-2">${match}</span>`);
                      });

                      return (
                        <li key={bIndex} className="flex items-start space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Experience Sub-section */}
          <div className="pt-10 border-t border-[var(--border-color)] space-y-8">
            <div className="flex items-center space-x-2.5 mb-2">
              <Briefcase className="w-5 h-5 text-neutral-800" />
              <h3 className="text-xs font-bold tracking-widest text-neutral-800 uppercase">
                Industry Experience
              </h3>
            </div>

            <div className="space-y-8">
              {portfolioData.industryExperience.map((exp, index) => (
                <div key={index} className="p-6 md:p-8 border border-[var(--border-color)] bg-white rounded-2xl hover:border-neutral-900 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 relative group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-neutral-950">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-neutral-800 mt-1">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end text-xs text-neutral-500 gap-2 shrink-0">
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-neutral-50 border border-[var(--border-color)] rounded-lg font-semibold text-neutral-700">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 sm:justify-end text-neutral-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-neutral-550 font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="list-none space-y-3 text-sm text-neutral-600 leading-relaxed font-normal">
                    {exp.bullets.map((bullet, bIndex) => {
                      const wordsToHighlight = [
                        "React Native",
                        "Expo",
                        "Next.js",
                        "REST APIs",
                        "AWS Lambda",
                        "distributed systems",
                        "Agile"
                      ];
                      
                      let highlightedText = bullet;
                      wordsToHighlight.forEach(word => {
                        const regex = new RegExp(`\\b${word}\\b`, 'gi');
                        highlightedText = highlightedText.replace(regex, (match) => `<span class="text-neutral-950 font-semibold underline decoration-neutral-200 decoration-2 underline-offset-2">${match}</span>`);
                      });

                      return (
                        <li key={bIndex} className="flex items-start space-x-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2.5 shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
                        </li>
                      );
                    })}
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
