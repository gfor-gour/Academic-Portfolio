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
          <div className="accent-bar">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              Experience
            </h2>
          </div>
          <p className="mt-2.5 text-sm text-ink-muted max-w-xs leading-relaxed">
            A chronological overview of my research contributions, undergraduate thesis work, and industry software engineering experience.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="col-span-1 lg:col-span-8 space-y-16">
          {/* Research Experience Sub-section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2.5 mb-2">
              <BookOpen className="w-5 h-5 text-burgundy" />
              <h3 className="text-xs font-bold tracking-widest text-ink uppercase">
                Research Experience
              </h3>
            </div>
            
            {/* Timeline container */}
            <div className="relative space-y-8 pl-10">
              {/* Timeline line */}
              <div className="timeline-line" />
              
              {portfolioData.researchExperience.map((exp, index) => (
                <div key={index} id={exp.role.toLowerCase().replace(/\s+/g, '-')} className="relative scroll-mt-28">
                  {/* Timeline dot */}
                  <div className="timeline-dot" />
                  
                  <div className="p-6 md:p-8 border border-warm-border bg-parchment-deep rounded-2xl hover:border-warm-border-strong hover:shadow-[0_12px_24px_rgba(27,42,74,0.05)] transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <h4 className="font-serif text-xl font-semibold text-ink">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-ink-secondary mt-1">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end text-xs text-ink-muted gap-2 shrink-0">
                        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-parchment-light border border-warm-border rounded-lg font-semibold text-ink-secondary">
                          <Calendar className="w-3.5 h-3.5 text-ink-muted" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 sm:justify-end text-ink-muted">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Thesis Details */}
                    {exp.thesis && (
                      <div className="mb-6 p-5 thesis-card rounded-xl">
                        <p className="text-[10px] uppercase tracking-wider text-ink-muted font-bold mb-1.5">
                          Undergraduate Thesis
                        </p>
                        <h5 className="font-serif text-base font-semibold text-ink mb-2 leading-snug">
                          {exp.thesis.title}
                        </h5>
                        <p className="text-xs text-ink-secondary">
                          <span className="font-semibold text-ink">Supervisor:</span> {exp.thesis.supervisor}
                        </p>
                        {exp.thesis.paperUrl && (
                          <div className="mt-4 pt-3.5 border-t border-gold/15 flex flex-wrap gap-3">
                            <a
                              href={exp.thesis.paperUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-burgundy hover:text-[#6B2535] transition-colors"
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
                      <div className="mb-6 p-5 paper-card rounded-xl">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-burgundy text-white rounded">
                            Paper under review
                          </span>
                          <span className="text-xs font-semibold text-ink-muted">
                            {exp.paper.status}
                          </span>
                        </div>
                        <h5 className="font-serif text-base font-semibold text-ink mb-4 leading-snug">
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
                                className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-ink-secondary bg-parchment-light border border-warm-border rounded-lg hover:border-burgundy hover:text-burgundy transition-colors shadow-sm"
                              >
                                <span>{res.name}</span>
                                <ExternalLink className="w-3 h-3 text-ink-muted" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Bullet points */}
                    <ul className="list-none space-y-3 text-sm text-ink-secondary leading-relaxed font-normal">
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
                          highlightedText = highlightedText.replace(regex, (match) => `<span class="keyword-highlight">${match}</span>`);
                        });

                        return (
                          <li key={bIndex} className="flex items-start space-x-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-burgundy/40 mt-2.5 shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Experience Sub-section */}
          <div className="pt-10 border-t border-dashed border-warm-border space-y-8">
            <div className="flex items-center space-x-2.5 mb-2">
              <Briefcase className="w-5 h-5 text-burgundy" />
              <h3 className="text-xs font-bold tracking-widest text-ink uppercase">
                Industry Experience
              </h3>
            </div>

            <div className="relative space-y-8 pl-10">
              <div className="timeline-line" />
              
              {portfolioData.industryExperience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="timeline-dot" />
                  
                  <div className="p-6 md:p-8 border border-warm-border bg-parchment-deep rounded-2xl hover:border-warm-border-strong hover:shadow-[0_12px_24px_rgba(27,42,74,0.05)] transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div>
                        <h4 className="font-serif text-xl font-semibold text-ink">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-ink-secondary mt-1">
                          {exp.organization}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end text-xs text-ink-muted gap-2 shrink-0">
                        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-parchment-light border border-warm-border rounded-lg font-semibold text-ink-secondary">
                          <Calendar className="w-3.5 h-3.5 text-ink-muted" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 sm:justify-end text-ink-muted">
                          <MapPin className="w-3.5 h-3.5" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="list-none space-y-3 text-sm text-ink-secondary leading-relaxed font-normal">
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
                          highlightedText = highlightedText.replace(regex, (match) => `<span class="keyword-highlight">${match}</span>`);
                        });

                        return (
                          <li key={bIndex} className="flex items-start space-x-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-burgundy/40 mt-2.5 shrink-0" />
                            <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
