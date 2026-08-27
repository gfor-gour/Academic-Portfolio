"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`py-16 md:py-24 section-divider ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
}
