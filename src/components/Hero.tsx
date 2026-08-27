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
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-divider">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Profile Photo with Gold Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 group"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden gold-ring transition-all duration-500 group-hover:shadow-[0_0_0_3px_var(--bg-primary),0_0_0_5px_var(--accent-gold),0_8px_32px_rgba(184,134,11,0.15)]">
            <Image
              src="/profile.png"
              alt={name}
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 176px, 208px"
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-ink-muted font-semibold mb-4">
            Academic Portfolio
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-ink mb-3 leading-[1.1]">
            {name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-ink-secondary mb-1.5 leading-relaxed">
            Software Engineering Graduate
          </p>
          <p className="text-sm text-ink-muted max-w-lg mx-auto leading-relaxed font-normal">
            {institution}
          </p>
        </motion.div>

        {/* Featured Research — strongest signal for PhD admissions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8 w-full max-w-xl"
        >
          <a href="https://arxiv.org/pdf/2605.08647" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 px-5 py-3.5 rounded-xl border border-burgundy/20 bg-burgundy-light/50 shadow-sm cursor-pointer hover:border-burgundy/40 hover:shadow-md transition-all duration-300 group/paper text-left">
            <svg className="mt-1 w-4 h-4 shrink-0 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <div className="flex-1 text-sm leading-relaxed">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-ink group-hover/paper:text-burgundy transition-colors">AgentCollabBench: Diagnosing When Good Agents Make Bad Collaborators</span>
              </div>
              <p className="text-ink-muted mt-0.5 text-xs">Under Review — NeurIPS 2026 · <span className="text-burgundy font-medium group-hover/paper:underline">arXiv Preprint ↗</span></p>
            </div>
          </a>
        </motion.div>


        {/* Contact Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 text-sm text-ink-secondary"
        >
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-ink-muted shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-ink-muted shrink-0" />
            <a href={`mailto:${email}`} className="hover:text-burgundy transition-colors">
              {email}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-ink-muted shrink-0" />
            <a href={`tel:${phone}`} className="hover:text-burgundy transition-colors">
              {phone}
            </a>
          </div>
        </motion.div>

        {/* Social Icons + Resume */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-warm-border rounded-full text-ink-muted hover:text-burgundy hover:border-burgundy transition-all duration-300 hover:scale-105 bg-parchment-light"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-warm-border rounded-full text-ink-muted hover:text-burgundy hover:border-burgundy transition-all duration-300 hover:scale-105 bg-parchment-light"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=yzrG7oQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group/gs flex items-center space-x-2 pl-2.5 pr-3.5 py-2 border border-warm-border rounded-full text-ink-muted hover:text-burgundy hover:border-burgundy transition-all duration-300 hover:scale-105 bg-parchment-light"
            aria-label="Google Scholar Profile"
          >
            <GoogleScholarIcon className="w-5 h-5" />
            <span className="text-xs font-semibold tracking-wide">Google Scholar</span>
          </a>

          {/* Resume Button */}
          <a
            href="/GourGupalTalukderShawon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center space-x-2.5 px-6 py-2.5 bg-ink hover:bg-[#142240] text-white font-medium rounded-full border border-ink transition-all duration-300 shadow-[0_4px_14px_rgba(27,42,74,0.12)] hover:shadow-[0_8px_24px_rgba(27,42,74,0.2)] hover:-translate-y-0.5 ml-1"
          >
            <svg className="w-4 h-4 text-gold opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    </section>
  );
}
