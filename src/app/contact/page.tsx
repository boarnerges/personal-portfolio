"use client";

import React, { useState } from "react";
import { portfolioConfig } from "@/config/portfolio";
import { useTheme } from "@/components/ThemeContext";
import { Mail, Send, AlertCircle, CheckCircle2, Sparkles, MapPin } from "lucide-react";

export default function Contact() {
  const { theme } = useTheme();
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Web App Development");
  const [message, setMessage] = useState("");
  
  // Validation and Status State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = "Full name is required";
    if (!email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email address is invalid";
    }
    if (!message.trim()) tempErrors.message = "Message details are required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate API Submission
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setProjectType("Web App Development");
      setMessage("");
    }, 1800);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-semibold leading-5 text-brand-blue bg-brand-blue/10 border border-brand-blue/20">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Consultation Intake</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight font-heading">
          Let's Grow Your Service Business
        </h1>
        <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-650"}`}>
          Ready to turn your website into a lead-generating machine or automate your enquiry management? Send an intake message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact Cards & Digital Location */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-heading">Contact Details</h2>
            <p className={`text-sm ${theme === "dark" ? "text-slate-455" : "text-slate-600"}`}>
              Reach out directly via email or check my active professional credentials on social channels.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email card */}
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              className={`flex items-center space-x-4 p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:translate-x-1 ${
                theme === "dark"
                  ? "bg-slate-900/40 border-slate-800 hover:border-brand-blue/30 text-slate-200"
                  : "bg-white border-slate-200 hover:border-brand-blue/30 text-slate-700"
              }`}
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500">Email Address</h3>
                <p className="text-sm font-medium">{portfolioConfig.personal.email}</p>
              </div>
            </a>

            {/* LinkedIn card */}
            <a
              href={portfolioConfig.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:translate-x-1 ${
                theme === "dark"
                  ? "bg-slate-900/40 border-slate-800 hover:border-brand-blue/30 text-slate-200"
                  : "bg-white border-slate-200 hover:border-brand-blue/30 text-slate-700"
              }`}
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500">LinkedIn Profile</h3>
                <p className="text-sm font-medium">linkedin.com/in/owolabi-olusegun/</p>
              </div>
            </a>

            {/* GitHub card */}
            <a
              href={portfolioConfig.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-5 rounded-2xl border transition-all duration-200 cursor-pointer hover:translate-x-1 ${
                theme === "dark"
                  ? "bg-slate-900/40 border-slate-800 hover:border-brand-blue/30 text-slate-200"
                  : "bg-white border-slate-200 hover:border-brand-blue/30 text-slate-700"
              }`}
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-850 text-slate-400 border border-slate-850">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-500">GitHub Repository</h3>
                <p className="text-sm font-medium">github.com/boarnerges</p>
              </div>
            </a>
          </div>

          {/* Interactive Mock Map */}
          <div className={`rounded-2xl border overflow-hidden p-6 relative ${
            theme === "dark" ? "bg-slate-900/25 border-slate-800" : "bg-slate-50 border-slate-200"
          }`}>
            <div className="flex items-center space-x-2 text-brand-blue mb-4">
              <MapPin className="h-4.5 w-4.5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Digital Office Location</span>
            </div>
            
            {/* Visual representation of map */}
            <div className={`h-28 rounded-xl border relative overflow-hidden flex items-center justify-center ${
              theme === "dark" ? "bg-slate-950/60 border-slate-850" : "bg-white border-slate-200"
            }`}>
              {/* Dynamic radar circles represent local presence */}
              <div className="absolute h-16 w-16 rounded-full bg-brand-blue/10 animate-ping" />
              <div className="absolute h-8 w-8 rounded-full bg-brand-blue/20 animate-pulse" />
              <div className="absolute h-3.5 w-3.5 rounded-full bg-brand-blue border border-white dark:border-slate-900 shadow-md" />
              
              {/* Monospace coordinates */}
              <span className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-500">
                8.9806° N, 7.1798° E (Abuja, Nigeria)
              </span>
            </div>
            
            <p className={`text-xs mt-3 leading-relaxed ${
              theme === "dark" ? "text-slate-450" : "text-slate-500"
            }`}>
              Working remotely for small businesses and practitioners globally.
            </p>
          </div>

        </div>

        {/* Right Side: Intake Form */}
        <div className={`lg:col-span-7 rounded-3xl p-6 sm:p-10 border shadow-md ${
          theme === "dark"
            ? "glass-panel-dark border-slate-850"
            : "glass-panel-light border-slate-200"
        }`}>
          {status === "success" ? (
            /* Success State */
            <div className="text-center py-12 space-y-6 flex flex-col items-center">
              <div className="h-16 w-16 rounded-2xl bg-brand-blue/15 text-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,64,192,0.2)]">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-heading text-slate-100 dark:text-white">
                  Intake Submission Received!
                </h3>
                <p className={`text-sm max-w-sm mx-auto ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>
                  Thank you for outlining your business needs. I will review your requirements and reach out to {email} within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-blue px-6 text-sm font-semibold text-white cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            /* Form Input Fields */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold font-heading">Outline Your Needs</h2>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  Submit your request and get a custom software roadmap mock-up.
                </p>
              </div>

              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 border ${
                    errors.name
                      ? "border-red-500/50 bg-red-500/5 focus:bg-red-500/5"
                      : theme === "dark"
                      ? "bg-slate-900/40 text-white border-slate-850 focus:border-brand-blue/50 focus:bg-slate-900"
                      : "bg-white text-slate-900 border-slate-200 focus:border-brand-blue/50 focus:bg-white"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 border ${
                    errors.email
                      ? "border-red-500/50 bg-red-500/5 focus:bg-red-500/5"
                      : theme === "dark"
                      ? "bg-slate-900/40 text-white border-slate-850 focus:border-brand-blue/50 focus:bg-slate-900"
                      : "bg-white text-slate-900 border-slate-200 focus:border-brand-blue/50 focus:bg-white"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Service Type Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Project Focus Type</label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className={`w-full px-4 py-3 text-sm rounded-xl outline-none border cursor-pointer ${
                    theme === "dark"
                      ? "bg-slate-900 text-white border-slate-850 focus:border-brand-blue/50"
                      : "bg-white text-slate-900 border-slate-200 focus:border-brand-blue/50"
                  }`}
                >
                  <option value="Web App Development">Web App Development (Automation/SaaS)</option>
                  <option value="Lead-Generating Website">Lead-Generating Website (SEO / Landing Page)</option>
                  <option value="Inventory Dashboard">Inventory Dashboard (Offline-first / Tracking)</option>
                  <option value="Custom API Integration">Custom API Integration / Automation</option>
                </select>
              </div>

              {/* Project Description Details */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Project Details / Pain points</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about what manual workflows you want to resolve or what you want your visitors to do..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 border resize-none ${
                    errors.message
                      ? "border-red-500/50 bg-red-500/5 focus:bg-red-500/5"
                      : theme === "dark"
                      ? "bg-slate-900/40 text-white border-slate-850 focus:border-brand-blue/50 focus:bg-slate-900"
                      : "bg-white text-slate-900 border-slate-200 focus:border-brand-blue/50 focus:bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full inline-flex h-12 items-center justify-center rounded-xl bg-brand-blue font-bold text-white shadow-md transition-all duration-200 cursor-pointer ${
                  status === "loading"
                    ? "opacity-80 cursor-wait bg-brand-blue/90"
                    : "hover:bg-brand-blue/90 hover:shadow-[0_0_20px_rgba(0,64,192,0.3)] hover:scale-[1.01]"
                }`}
              >
                {status === "loading" ? (
                  <span className="flex items-center space-x-2">
                    {/* Spinner */}
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Submitting Intake Request...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1.5">
                    <span>Send Intake Message</span>
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
