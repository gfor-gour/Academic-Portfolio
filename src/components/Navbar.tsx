"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Honors", href: "#honors" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? "bg-parchment/90 backdrop-blur-md border-warm-border py-3 shadow-[0_2px_12px_rgba(27,42,74,0.04)]"
          : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Name / Title */}
        <a href="#" className="font-serif text-lg md:text-xl font-semibold tracking-tight text-ink hover:text-burgundy transition-colors">
          g_for_gour
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-secondary hover:text-burgundy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={portfolioData.personalInfo.devPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-burgundy rounded hover:bg-[#6B2535] transition-all shadow-sm"
          >
            <span>Dev Portfolio</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-ink-secondary hover:text-ink focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-parchment border-b border-warm-border px-6 py-6 flex flex-col space-y-4 shadow-lg animate-in fade-in slide-in-from-top-5 duration-250">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-ink-secondary hover:text-burgundy transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-warm-border">
            <a
              href={portfolioData.personalInfo.devPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-burgundy rounded hover:bg-[#6B2535] transition-all text-center shadow-sm"
            >
              <span>Developer Portfolio</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
