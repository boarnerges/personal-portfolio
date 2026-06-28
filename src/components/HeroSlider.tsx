"use client";

export default function HeroSlider() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {/* Primary Headline */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.15] md:leading-[1.1] mb-4 max-w-4xl mx-auto px-4">
        Lead Generation Websites & Automation{" "}
        <span className="text-brand-primary">for Service Businesses</span>
      </h1>

      {/* Credibility — directly under headline */}
      <p className="text-sm font-medium mb-0"
        style={{ color: "var(--card-text-secondary)" }}
      >
        Helping 50+ service businesses capture and convert more leads
      </p>
    </div>
  );
}
