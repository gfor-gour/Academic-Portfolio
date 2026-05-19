"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="col-span-1 md:col-span-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-neutral-950">
            Education
          </h2>
          <p className="mt-2.5 text-sm text-neutral-500 max-w-xs leading-relaxed">
            Academic training, degrees, and university affiliation details.
          </p>
        </div>
        <div className="col-span-1 md:col-span-8 space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="p-8 border border-[var(--border-color)] bg-white rounded-2xl hover:border-neutral-900 hover:shadow-[0_12px_24px_rgba(0,0,0,0.03)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-neutral-50 rounded-bl-full -mr-8 -mt-8 -z-10 transition-transform group-hover:scale-105 duration-350" />
              
              <div className="flex items-start space-x-5">
                <div className="p-3.5 border border-[var(--border-color)] rounded-xl bg-neutral-50 text-neutral-700 shrink-0 shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-neutral-950 leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-neutral-800 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-1 md:mt-0">
                      <span className="inline-block px-3.5 py-1.5 text-xs font-semibold text-neutral-700 bg-neutral-50 rounded-lg border border-[var(--border-color)] shadow-sm">
                        {edu.gpa}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-xs text-neutral-500 font-medium">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-4 h-4 text-neutral-400" />
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
