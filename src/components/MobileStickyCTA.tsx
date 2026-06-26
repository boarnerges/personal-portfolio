"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="flex items-center justify-between gap-3 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-3">
        <p className="text-xs text-slate-400 leading-tight">
          <span className="font-semibold text-white">Book a free call</span>
          <br />
          Discuss your business needs
        </p>
        <a
          href={portfolioConfig.personal.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex h-10 items-center justify-center rounded-xl bg-brand-blue px-5 text-sm font-semibold text-white shadow-md hover:bg-brand-blue/90 transition-all duration-200"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}
