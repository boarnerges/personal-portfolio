"use client";

import React, { useState, useEffect } from "react";

const slides = [
  <React.Fragment key="1">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.2] mb-6">
        More enquiries. Faster follow-ups.{" "}
        <span className="text-brand-blue glow-text-blue">Less admin.</span>
      </h1>
      <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed">
        I build websites and systems that bring in leads, organise enquiries, and put your operations on autopilot.
      </p>
    </div>
  </React.Fragment>,
  <React.Fragment key="2">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.2] mb-6">
        Stop relying on{" "}
        <span className="text-brand-blue glow-text-blue">referrals alone</span>.
      </h1>
      <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed">
        A website that ranks on Google. A system that captures every lead. Automation that follows up — so you never miss an opportunity.
      </p>
    </div>
  </React.Fragment>,
  <React.Fragment key="3">
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.2] mb-6">
        Stop losing leads to{" "}
        <span className="text-brand-blue glow-text-blue">DMs and spreadsheets</span>.
      </h1>
      <p className="text-base sm:text-lg max-w-2xl mx-auto text-slate-500 dark:text-slate-400 leading-relaxed">
        Purpose-built software that captures every enquiry, organises your intake, and runs your operations on autopilot.
      </p>
    </div>
  </React.Fragment>
];

export default function HeroSlider({
  currentSlide,
  onSlideChange,
}: {
  currentSlide: number;
  onSlideChange: (index: number) => void;
}) {
  useEffect(() => {
    const timer = setInterval(() => {
      onSlideChange((currentSlide + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide, onSlideChange]);

  return (
    <div className="relative min-h-[320px] sm:min-h-[280px] lg:min-h-[300px] w-full flex items-center justify-center overflow-hidden py-8 my-4">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full top-0 left-0 transition-all duration-1000 transform ${
            index === currentSlide ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-4 z-0 pointer-events-none"
          }`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
}
