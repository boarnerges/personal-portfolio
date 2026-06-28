"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeContext";
import { Eye, MessageSquare, Zap, ArrowRight, CheckCircle, Search, Pen, Code, Rocket, TrendingUp } from "lucide-react";

const services = [
  {
    slug: "lead-generation-websites",
    title: "Lead-Generating Websites",
    icon: Eye,
    price: "₦300,000+",
    description: "Websites that rank on Google for local searches and turn visitors into paying customers.",
    longDescription: "Most service business websites look nice but don't generate enquiries. I build sites purpose-built for lead capture — optimised for local search, mobile-first, and designed to convert. You stop relying on referrals and start getting found by people actively searching for what you offer.",
    process: [
      "Audit your current online presence & competitors",
      "Design a site structure optimised for your target keywords",
      "Build with SEO foundations, lead forms, and analytics",
      "Launch and monitor — optimise based on real data",
    ],
    includes: ["SEO-optimised pages that rank locally", "Lead capture forms with auto-notifications", "Mobile-responsive design", "CMS included — you can update content", "Google Analytics & Search Console setup", "Contact forms, booking links, enquiry capture"],
    outcomes: ["Appear on Google for your ideal clients' searches", "Wake up to new enquiries in your inbox", "Stop relying solely on referrals and word-of-mouth"],
  },
  {
    slug: "enquiry-management",
    title: "Enquiry Management",
    icon: MessageSquare,
    price: "₦450,000+",
    description: "Custom portals that organise every lead — from first message to signed contract — in one place.",
    longDescription: "Leaks happen when leads are scattered across Instagram DMs, WhatsApp, email, and phone calls. I build custom portals that centralise every enquiry into one dashboard — with automated follow-ups, lead tracking, and team notifications — so nothing slips through",
    process: [
      "Map your current enquiry flow — where leads come from, where they get lost",
      "Design a portal that centralises intake, tracking, and follow-ups",
      "Integrate with WhatsApp, email, and your existing tools",
      "Train your team and launch with live lead tracking",
    ],
    includes: ["Custom enquiry portal with dashboard", "Lead tracking from first contact to close", "Automated follow-ups & notifications", "CRM integration ready", "Team access with role-based permissions", "WhatsApp & email integration"],
    outcomes: ["Every lead tracked — nothing falls through the cracks", "Automated follow-ups that convert more prospects", "Know exactly where every lead is in your pipeline"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    icon: Zap,
    price: "₦1,000,000+",
    description: "Automated workflows that handle admin, follow-ups, and operations while you focus on delivery.",
    longDescription: "Your business runs on repetitive tasks — sending quotes, following up with leads, assigning tasks, generating invoices. I build automation systems that run these workflows 24/7 so your team focuses on delivery, not admin.",
    process: [
      "Identify every manual workflow costing you time",
      "Design automated sequences — triggers, actions, integrations",
      "Build and connect across your tools (email, Slack, WhatsApp, CRM)",
      "Test, train, and launch — then monitor & refine",
    ],
    includes: ["Complete workflow automation", "Multi-tool integration (Slack, email, WhatsApp)", "Custom dashboards & reporting", "Team training & documentation", "6 months of support & updates", "Fixed-price scope with no surprises"],
    outcomes: ["Hours saved every week on manual admin", "Consistent follow-ups that never miss a lead", "Your team works on high-value work, not busywork"],
  },
];

export default function ServicesPage() {
  const { theme } = useTheme();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-heading">
          What I Build for Service Businesses
        </h1>
        <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Three systems, one purpose: more paying customers with less admin. Every project includes direct access, fixed pricing, and a 90-day guarantee.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, idx) => (
          <section key={service.slug} className={`rounded-2xl border overflow-hidden ${
            theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className={`p-8 sm:p-10 ${idx % 2 === 0 ? "" : "sm:order-1"}`}>
              <div className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:items-start`}>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading">{service.title}</h2>
                      <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>From {service.price}</p>
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                    {service.longDescription}
                  </p>

                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>How It Works</h3>
                    <ul className="space-y-2">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            theme === "dark" ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-600"
                          }`}>{i + 1}</span>
                          <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>What's Included</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {service.includes.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                          <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>What You Get</h3>
                    <ul className="space-y-1.5">
                      {service.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-brand-primary text-sm leading-none mt-0.5">→</span>
                          <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="https://calendly.com/olujawo1996"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-xl bg-brand-primary px-6 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 transition-all duration-200"
                    >
                      Book Free Strategy Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex h-12 min-h-[44px] items-center justify-center rounded-xl border px-6 text-sm font-semibold transition-all duration-200 ${
                        theme === "dark"
                          ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                          : "border-slate-300 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className={`mt-16 text-center p-10 rounded-2xl border ${
        theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-slate-50 border-slate-200"
      }`}>
        <h2 className="text-2xl font-bold font-heading mb-3">Not Sure What You Need?</h2>
        <p className={`text-sm mb-6 max-w-lg mx-auto ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          Every project starts with a free strategy call. We'll discuss your business, identify where you're losing opportunities, and recommend the right system — no pressure, no pitch.
        </p>
        <a
          href="https://calendly.com/olujawo1996"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 min-h-[44px] items-center justify-center rounded-xl bg-brand-primary px-8 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 transition-all duration-200"
        >
          Book Free Strategy Call
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
