"use client";

import React from "react";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { ExternalLink } from "lucide-react";

const toneClass = {
  accepted: "bg-emerald-700",
  review: "bg-burgundy",
  progress: "bg-gold",
} as const;

function renderAuthors(text: string) {
  return text.split(/(\*\*[^*]+\*\*[*†]*)/g).map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*([*†]*)$/);
    if (m) {
      return (
        <span key={i}>
          <span className="font-semibold text-ink">{m[1]}</span>
          {m[2]}
        </span>
      );
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function Publications() {
  return (
    <SectionWrapper id="publications" className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-28">
          <div className="accent-bar">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-ink">
              Publications
            </h2>
          </div>
          <p className="mt-2.5 text-sm text-ink-muted max-w-xs leading-relaxed">
            Peer-reviewed papers, manuscripts under review, and work in progress.
          </p>
        </div>

        <div className="col-span-1 lg:col-span-8 space-y-6">
          {portfolioData.publications.map((pub, index) => (
            <div
              key={index}
              className="p-6 md:p-8 paper-card rounded-2xl hover:border-warm-border-strong hover:shadow-[0_12px_24px_rgba(27,42,74,0.05)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <span className="font-serif text-lg font-semibold text-ink-muted">
                  [{index + 1}]
                </span>
                <span
                  className={`inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded text-white ${toneClass[pub.badgeTone]}`}
                >
                  {pub.badge}
                </span>
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-ink leading-snug mb-2">
                {pub.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {renderAuthors(pub.authors)}
              </p>
              <p className="text-sm font-semibold text-burgundy mt-2">{pub.venue}</p>
              {pub.note && (
                <p className="text-xs text-ink-muted mt-1.5 italic">{pub.note}</p>
              )}
              {pub.resources && pub.resources.length > 0 && (
                <div className="flex flex-wrap gap-2.5 mt-4 pt-4 border-t border-warm-border/40">
                  {pub.resources.map((res, rIndex) => (
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
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
