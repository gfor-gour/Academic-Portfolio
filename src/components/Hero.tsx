"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/data/content";
import { motion } from "framer-motion";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-1.75a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z" />
    <path d="M12 9.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    <path d="M1 7.5 12 1l11 6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M22 7.5V14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Hero() {
  const { name, institution, location, email, phone, github, linkedin } = portfolioData.personalInfo;

  return (
    <section className="pt-32 pb-16 md:py-36 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Bio Text Column */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-3">
              Academic Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 mb-4 leading-[1.1]">
              {name}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-neutral-800 mb-2 leading-relaxed">
              Software Engineering Graduate
            </p>
            <p className="text-base text-neutral-600 mb-4 max-w-lg leading-relaxed font-normal">
              {institution}
            </p>

            {/* Current Research Position */}
            <a href="#intern-research-assistant" className="mb-8 flex items-start space-x-3 px-4 py-3 rounded-xl border border-emerald-200/80 bg-gradient-to-r from-emerald-50/80 to-teal-50/60 shadow-sm max-w-lg cursor-pointer hover:border-emerald-400 hover:shadow-md transition-all duration-300 group/pos">
              <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
              <div className="flex-1 text-sm leading-relaxed">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-neutral-800 group-hover/pos:text-neutral-950 transition-colors">Intern Research Assistant</span>
                  <span className="text-xs text-neutral-500 whitespace-nowrap ml-3">Feb 2026 - Present</span>
                </div>
                <p className="text-neutral-600 mt-0.5">Advanced Machine Intelligence Research Lab, AIUB</p>
              </div>
            </a>
          </motion.div>

          {/* Quick Contact & Details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-4 mb-8 text-sm text-neutral-700"
          >
            <div className="flex items-center space-x-3.5">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-3.5">
              <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
              <a href={`mailto:${email}`} className="hover:underline hover:text-black transition-colors">
                {email}
              </a>
            </div>
            <div className="flex items-center space-x-3.5">
              <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
              <a href={`tel:${phone}`} className="hover:underline hover:text-black transition-colors">
                {phone}
              </a>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[var(--border-color)] rounded-full text-neutral-500 hover:text-black hover:border-neutral-950 transition-all duration-300 hover:scale-105 shadow-sm bg-white"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[var(--border-color)] rounded-full text-neutral-500 hover:text-black hover:border-neutral-950 transition-all duration-300 hover:scale-105 shadow-sm bg-white"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=yzrG7oQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group/gs flex items-center space-x-2 pl-2.5 pr-3.5 py-2 border border-[var(--border-color)] rounded-full text-neutral-500 hover:text-black hover:border-neutral-950 transition-all duration-300 hover:scale-105 shadow-sm bg-white"
              aria-label="Google Scholar Profile"
            >
              <GoogleScholarIcon className="w-5 h-5" />
              <span className="text-xs font-semibold tracking-wide">Google Scholar</span>
            </a>
          </motion.div>
        </div>

        {/* Profile Picture & Resume Column */}
        <div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center order-1 md:order-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-64 md:w-80 md:h-80 group"
          >
            {/* Glowing dark type shadow/glow backdrop */}
            <div className="absolute inset-0 bg-neutral-950/5 rounded-3xl blur-2xl transform translate-y-4 opacity-75 group-hover:translate-y-6 transition-all duration-500"></div>
            {/* Outer offset frame */}
            <div className="absolute inset-0 border border-neutral-300/80 rounded-3xl transform translate-x-3.5 translate-y-3.5 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"></div>
            {/* Inner Image Container with glowing/shadow effect */}
            <div className="relative w-full h-full overflow-hidden rounded-3xl border border-neutral-300/80 bg-white shadow-[0_12px_36px_rgba(0,0,0,0.1)] transition-all duration-300">
              <Image
                src="/profile.png"
                alt={name}
                fill
                priority
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-w-768px) 100vw, 350px"
              />
            </div>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-[256px] md:max-w-[320px] px-3.5"
          >
            <a
              href="/GourGupalTalukderShawon.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-2.5 w-full py-3 bg-neutral-950 hover:bg-black text-white font-medium rounded-2xl border border-neutral-900 transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 text-neutral-300 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
              <span className="text-sm tracking-wide font-semibold">View Resume</span>
              <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
