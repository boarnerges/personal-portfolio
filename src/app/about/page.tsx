"use client";

import React from "react";
import { portfolioConfig } from "@/config/portfolio";
import { useTheme } from "@/components/ThemeContext";
import { Code2, TrendingUp, Database, Settings, Target, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Lead-Generating Websites",
    description: "SEO-optimised websites that rank on Google and convert visitors into paying customers for your service business."
  },
  {
    icon: Target,
    title: "Enquiry Management Portals",
    description: "Booking portals, enquiry capture systems, and client intake workflows that organise every lead from first contact to close."
  },
  {
    icon: Settings,
    title: "Business Automation",
    description: "Replace manual workflows — scheduling, invoicing, stock tracking, client records — with automated systems that save hours every week."
  },
  {
    icon: Database,
    title: "Data & Operations Dashboards",
    description: "Structured databases and dashboards that organise inventory, client records, and operational data so you can make informed decisions."
  },
  {
    icon: TrendingUp,
    title: "Custom Business Software",
    description: "Tailored software solutions built around your specific service business operations — no off-the-shelf compromises."
  }
];

const approach = [
  "Identify operational bottlenecks and lead gaps through conversation",
  "Design a solution mapped to your specific service business workflow",
  "Build and deploy a custom website, portal, or automation system",
  "Optimise for lead generation, enquiry capture, and operational efficiency"
];

export default function About() {
  const { theme } = useTheme();
  const { personal } = portfolioConfig;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-semibold leading-5 text-brand-blue bg-brand-blue/10 border border-brand-blue/20">
          <Sparkles className="h-3.5 w-3.5" />
          <span>How I Work</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight font-heading">
          How I Build Growth Systems for Service Businesses
        </h1>
        <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          {personal.about}
        </p>
      </div>

      {/* Mission Statement */}
      <div className={`max-w-4xl mx-auto mb-20 p-8 sm:p-10 rounded-3xl border ${
        theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"
      }`}>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="/images/segun.png"
              alt={personal.name}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover object-[center_37%] border-2 border-brand-blue/20 shadow-lg"
            />
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4">
              <h2 className="text-lg sm:text-xl font-bold font-heading text-brand-blue">
                {personal.name}
              </h2>
              <span className="hidden sm:block h-4 w-px bg-slate-400/40" />
              <p className={`text-sm font-semibold ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                {personal.title}
              </p>
            </div>
            <p className={`text-base leading-relaxed font-medium ${
              theme === "dark" ? "text-slate-200" : "text-slate-800"
            }`}>
              I identify bottlenecks in your business, then build custom websites and software that fix them.
            </p>
            <p className={`text-sm leading-relaxed mt-4 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Every project starts with a conversation about how your business operates. I look for where leads are leaking, where admin is eating your time, and where manual processes could be automated. Then I build the system that fixes it — from SEO-optimised websites that bring in enquiries to portals that organise them to automation that handles the rest.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-1.5 h-10 rounded-xl bg-brand-blue px-5 text-sm font-semibold text-white hover:bg-brand-blue/90 transition-all duration-200"
          >
            <span>View My Work</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className={`inline-flex items-center space-x-1.5 h-10 rounded-xl border px-5 text-sm font-semibold transition-all duration-200 ${
              theme === "dark"
                ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            <span>Book a Call</span>
          </Link>
        </div>
      </div>

      {/* Services */}
      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-center mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                theme === "dark"
                  ? "bg-slate-900/30 border-slate-800 hover:border-brand-blue/30"
                  : "bg-white border-slate-200 hover:border-brand-blue/30 hover:shadow-md"
              }`}
            >
              <div className="h-10 w-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold font-heading mb-2">{service.title}</h3>
              <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div className={`max-w-3xl mx-auto mb-20 p-8 sm:p-10 rounded-3xl border ${
        theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"
      }`}>
        <h2 className="text-2xl font-bold font-heading mb-8 text-center">
          How I Work
        </h2>
        <div className="space-y-6">
          {approach.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-brand-blue" />
              </div>
              <div>
                <span className={`text-sm font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
                  Step {index + 1}
                </span>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={`max-w-3xl mx-auto text-center p-8 sm:p-10 rounded-3xl border ${
        theme === "dark" ? "glass-panel-dark border-slate-850" : "glass-panel-light border-slate-200"
      }`}>
        <h2 className="text-xl sm:text-2xl font-bold font-heading mb-4">
          Ready to Improve How You Operate & Grow?
        </h2>
        <p className={`text-sm mb-6 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Always open to connecting with business owners, founders, and professionals looking to improve how they operate and grow.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center space-x-1.5 h-12 rounded-xl bg-brand-blue px-6 text-sm font-bold text-white hover:bg-brand-blue/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,64,192,0.3)]"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
