"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const cards = [
  {
    id: "enquiry",
    title: "New Enquiry",
    color: "emerald",
    dot: "animate-pulse",
    time: "2 mins ago",
    lines: [
      { label: "Project", value: "Interior Design Project", size: "sm" },
      { label: "Budget", value: "₦2.5M · 3 rooms", size: "xs" },
      { label: "From", value: "Sarah — Instagram DM", size: "xs" },
    ],
  },
  {
    id: "followup",
    title: "Follow-up Due",
    color: "amber",
    dot: "",
    time: "Tomorrow",
    lines: [
      { label: "Project", value: "Proposal Expires Tomorrow", size: "sm" },
      { label: "Call", value: "Scheduled · 10:00 AM", size: "xs" },
      { label: "Client", value: "ABC Ltd — Website Package", size: "xs" },
    ],
  },
  {
    id: "automation",
    title: "Automation Completed",
    color: "brand-primary",
    dot: "",
    time: "Just now",
    lines: [
      { label: "", value: "✓ Lead added to CRM", size: "xs" },
      { label: "", value: "✓ Welcome email sent", size: "xs" },
      { label: "", value: "✓ Task assigned to team", size: "xs" },
    ],
  },
];

export default function HeroFloatingCards() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const past = window.scrollY > window.innerHeight * 1.2;
      setScrolledPast(past);
      if (past) setExpanded(null);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCard = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <>
      {/* Desktop: fixed, stacked floating cards */}
      <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
        {cards.map((card, i) => {
          const isOpen = expanded === card.id;
          const minimized = scrolledPast && !isOpen;
          return (
            <div
              key={card.id}
              className={`transition-all duration-300 ease-out cursor-pointer relative ${
                isOpen ? "w-80" : minimized ? "w-48" : "w-64"
              } ${i > 0 ? (isOpen ? "-mt-24" : minimized ? "-mt-6" : "-mt-24") : ""}`}
              style={{ zIndex: isOpen ? cards.length + 1 : cards.length - i, animationDelay: `${i * 0.15}s` }}
            >
              <div
                onClick={() => toggleCard(card.id)}
                className={`rounded-xl shadow-xl border backdrop-blur-md overflow-hidden transition-all duration-300 ${
                  isOpen ? "ring-2 ring-brand-primary/30 shadow-2xl scale-[1.02]" : "hover:shadow-2xl hover:scale-[1.01]"
                }`}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-3.5">
                  <div className="flex items-center space-x-2">
                    <div className={`h-2 w-2 rounded-full ${card.dot} ${
                      card.color === "emerald" ? "bg-emerald-500" : card.color === "amber" ? "bg-amber-500" : "bg-brand-primary"
                    }`} />
                    <span className={`text-xs font-semibold ${
                      card.color === "emerald" ? "text-emerald-600" : card.color === "amber" ? "text-amber-600" : "text-brand-primary"
                    }`}>{card.title}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px]" style={{ color: "var(--card-text-muted)" }}>{card.time}</span>
                    {isOpen && (
                      <X className="h-3 w-3 transition-colors" style={{ color: "var(--card-text-muted)" }} />
                    )}
                  </div>
                </div>
                {/* Body — visible in hero, hidden when scrolled past (unless expanded) */}
                {!minimized && (
                <div className="border-t p-4" style={{ borderColor: "var(--card-border)" }}>
                  <div className="space-y-1">
                    {card.lines.map((line, j) => (
                      <p key={j} className={
                        line.size === "sm"
                          ? "text-sm font-semibold"
                          : "text-xs"
                      }
                      style={{ color: line.size === "sm" ? "var(--card-text-primary)" : "var(--card-text-secondary)" }}
                      >
                        {line.value}
                      </p>
                    ))}
                  </div>
                  {isOpen && (
                  <div className="mt-3 pt-3 border-t space-y-2 animate-[slideUp_0.2s_ease-out]" style={{ borderColor: "var(--card-border)" }}>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--card-text-muted)" }}>
                      {card.id === "enquiry" && "New lead captured via Instagram DM. Ready for qualification call."}
                      {card.id === "followup" && "Follow-up reminder: proposal was sent 5 days ago. Close or extend."}
                      {card.id === "automation" && "Enquiry-to-CRM pipeline completed. 3 automated actions triggered."}
                    </p>
                    <button className="text-xs font-semibold text-brand-primary hover:underline">
                      {card.id === "enquiry" && "Qualify Lead →"}
                      {card.id === "followup" && "View Proposal →"}
                      {card.id === "automation" && "View Report →"}
                    </button>
                  </div>
                  )}
                </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: single card inline */}
      <div className="lg:hidden mt-8 mx-auto max-w-sm">
        <div className="rounded-xl shadow-lg border p-3.5 backdrop-blur-md"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600">New Enquiry</span>
            </div>
            <span className="text-[10px]" style={{ color: "var(--card-text-muted)" }}>2 mins ago</span>
          </div>
          <div className="border-t pt-2 space-y-1" style={{ borderColor: "var(--card-border)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--card-text-primary)" }}>Interior Design Project</p>
            <p className="text-xs" style={{ color: "var(--card-text-secondary)" }}>Budget: ₦2.5M · 3 rooms</p>
            <p className="text-xs" style={{ color: "var(--card-text-muted)" }}>From: Sarah — Instagram DM</p>
          </div>
        </div>
      </div>
    </>
  );
}
