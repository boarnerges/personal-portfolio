"use client";

import React from "react";

export default function HeroBackground() {
  return (
    <>
      {/* Mobile: clean gradient fallback */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-brand-primary/[0.04] via-transparent to-brand-primary/[0.02]" />

      {/* Desktop: SVG art */}
      <div className="hidden md:block absolute inset-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" className="w-full h-full text-brand-primary dark:text-[var(--foreground)]">
          <defs>
            <linearGradient id="heroGlow" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.06"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <ellipse cx="720" cy="450" rx="500" ry="350" fill="url(#heroGlow)"/>
          <path d="M60 750 L200 720 L340 660 L480 620 L620 540 L760 480 L900 410 L1040 340 L1180 280 L1320 230 L1380 210" 
            stroke="currentColor" strokeOpacity="0.85" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M60 780 L200 755 L340 710 L480 680 L620 620 L760 570 L900 510 L1040 460 L1180 410 L1320 370 L1380 350" 
            stroke="currentColor" strokeOpacity="0.5" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" fill="none">
            <line x1="120" y1="200" x2="250" y2="150"/><line x1="120" y1="200" x2="220" y2="320"/>
            <line x1="250" y1="150" x2="380" y2="200"/><line x1="220" y1="320" x2="380" y2="200"/>
            <line x1="380" y1="200" x2="500" y2="130"/><line x1="380" y1="200" x2="480" y2="320"/>
            <line x1="500" y1="130" x2="620" y2="190"/><line x1="480" y1="320" x2="620" y2="190"/>
            <line x1="620" y1="190" x2="740" y2="140"/><line x1="620" y1="190" x2="720" y2="290"/>
            <line x1="740" y1="140" x2="860" y2="200"/><line x1="720" y1="290" x2="860" y2="200"/>
            <line x1="860" y1="200" x2="980" y2="150"/><line x1="860" y1="200" x2="960" y2="310"/>
            <line x1="980" y1="150" x2="1100" y2="200"/><line x1="960" y1="310" x2="1100" y2="200"/>
            <line x1="1100" y1="200" x2="1220" y2="160"/><line x1="1100" y1="200" x2="1200" y2="300"/>
            <line x1="1220" y1="160" x2="1320" y2="220"/><line x1="1200" y1="300" x2="1320" y2="220"/>
          </g>
          <g fill="currentColor">
            <circle cx="120" cy="200" r="5" fillOpacity="0.8"/><circle cx="250" cy="150" r="5" fillOpacity="0.85"/>
            <circle cx="220" cy="320" r="5" fillOpacity="0.8"/><circle cx="380" cy="200" r="6" fillOpacity="0.9"/>
            <circle cx="500" cy="130" r="5" fillOpacity="0.85"/><circle cx="480" cy="320" r="5" fillOpacity="0.8"/>
            <circle cx="620" cy="190" r="6" fillOpacity="0.9"/><circle cx="740" cy="140" r="5" fillOpacity="0.85"/>
            <circle cx="720" cy="290" r="5" fillOpacity="0.8"/><circle cx="860" cy="200" r="6" fillOpacity="0.9"/>
            <circle cx="980" cy="150" r="5" fillOpacity="0.85"/><circle cx="960" cy="310" r="5" fillOpacity="0.8"/>
            <circle cx="1100" cy="200" r="6" fillOpacity="0.9"/><circle cx="1220" cy="160" r="5" fillOpacity="0.85"/>
            <circle cx="1200" cy="300" r="5" fillOpacity="0.8"/><circle cx="1320" cy="220" r="5" fillOpacity="0.85"/>
          </g>
          <g stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" fill="none">
            <path d="M200 600 L350 600 L400 580 L500 580"/>
            <circle cx="200" cy="600" r="3" fill="currentColor" fillOpacity="0.15"/><circle cx="500" cy="580" r="3" fill="currentColor" fillOpacity="0.15"/>
            <path d="M900 620 L1000 620 L1050 600 L1150 600"/>
            <circle cx="900" cy="620" r="3" fill="currentColor" fillOpacity="0.15"/><circle cx="1150" cy="600" r="3" fill="currentColor" fillOpacity="0.15"/>
            <path d="M600 500 L700 500 L750 480 L850 480"/>
            <circle cx="600" cy="500" r="3" fill="currentColor" fillOpacity="0.15"/><circle cx="850" cy="480" r="3" fill="currentColor" fillOpacity="0.15"/>
          </g>
          <g fill="currentColor" fillOpacity="0.1">
            <rect x="250" y="500" width="50" height="50" rx="6" transform="rotate(20 275 525)"/>
            <rect x="1050" y="450" width="60" height="40" rx="6" transform="rotate(-15 1080 470)"/>
            <circle cx="450" cy="100" r="25"/><circle cx="1150" cy="550" r="20"/>
          </g>
          <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 8" fill="none">
            <polyline points="300,800 400,760 500,720 600,670 700,630 800,580 900,540 1000,490 1100,450 1200,400"/>
          </g>
        </svg>
      </div>
    </>
  );
}
