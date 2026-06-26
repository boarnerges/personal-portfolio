"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { X, MessageSquare } from "lucide-react";

export default function LeadCapture() {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.2) {
        setVisible(true);
        setMinimized(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: "Lead capture signup — interested in services" }),
      });
    } catch {}

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setVisible(false);
    }, 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs w-full">
      {minimized ? (
        <button
          onClick={() => setMinimized(false)}
          className={`ml-auto flex items-center space-x-2 h-12 px-4 rounded-2xl shadow-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${
            theme === "dark"
              ? "bg-slate-900 border-slate-700 text-slate-200"
              : "bg-white border-slate-200 text-slate-700"
          }`}
        >
          <MessageSquare className="h-5 w-5 text-brand-blue" />
          <span className="text-sm font-semibold">Get a Quote</span>
        </button>
      ) : (
        <div className={`rounded-2xl shadow-xl border p-4 ${
          theme === "dark" ? "bg-slate-900/95 border-slate-700" : "bg-white/95 border-slate-200"
        }`}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold font-heading">Not Sure Yet?</h3>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setMinimized(true)}
                className={`h-6 w-6 flex items-center justify-center rounded-md text-xs transition-colors cursor-pointer ${
                  theme === "dark" ? "hover:bg-slate-800 text-slate-400" : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setVisible(false)}
                className={`h-6 w-6 flex items-center justify-center rounded-md text-xs transition-colors cursor-pointer ${
                  theme === "dark" ? "hover:bg-slate-800 text-slate-400" : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {submitted ? (
            <p className="text-xs text-brand-blue font-semibold text-center py-2">
              Thanks! I'll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 text-xs rounded-xl outline-none border transition-colors ${
                  theme === "dark"
                    ? "bg-slate-800 text-white border-slate-700 focus:border-brand-blue/50"
                    : "bg-slate-50 text-slate-900 border-slate-200 focus:border-brand-blue/50"
                }`}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 text-xs rounded-xl outline-none border transition-colors ${
                  theme === "dark"
                    ? "bg-slate-800 text-white border-slate-700 focus:border-brand-blue/50"
                    : "bg-slate-50 text-slate-900 border-slate-200 focus:border-brand-blue/50"
                }`}
                required
              />
              <button
                type="submit"
                className="w-full py-2 text-xs font-bold text-white bg-brand-blue rounded-xl hover:bg-brand-blue/90 transition-all cursor-pointer"
              >
                Keep Me Posted
              </button>
              <p className="text-[10px] text-slate-400 text-center">
                No spam. Just project updates.
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
