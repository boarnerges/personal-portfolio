"use client";

import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useTheme } from "@/components/ThemeContext";
import { Eye, MessageSquare, Zap, ArrowRight, CheckCircle, Clock, UserCheck, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

const serviceDetails = {
  "lead-generation-websites": {
    title: "Lead-Generating Websites",
    icon: Eye,
    price: "₦300,000+",
    tagline: "Stop relying on referrals. Start getting found on Google.",
    description: "Websites built to rank for local searches and convert visitors into paying customers. No templates. No generic pages. Just a system designed to bring in leads while you sleep.",
    whyItMatters: [
      "85% of consumers search online before hiring a local service provider",
      "Service businesses with websites get 40% more enquiries than those without",
      "SEO-optimised sites generate leads 24/7 without ad spend",
    ],
    howItWorks: [
      { title: "Audit", desc: "I review your current online presence, competitors, and target keywords to find exactly what your ideal clients are searching for." },
      { title: "Design", desc: "Site structure optimised for your keywords. Every page has a purpose — capture enquiries, showcase expertise, build trust." },
      { title: "Build", desc: "Fast, mobile-first, and built to rank. Lead forms, analytics, and CMS included. You can update content without touching code." },
      { title: "Launch & Monitor", desc: "Go live with Google Analytics, Search Console, and lead tracking. I monitor performance and optimise based on real data." },
    ],
    includes: ["SEO-optimised page structure for local rankings", "Lead capture forms with email/SMS notifications", "Mobile-responsive design that works on every device", "CMS so you can update content yourself", "Google Analytics & Search Console integration", "Contact forms, booking links, and enquiry capture", "Custom domain setup", "Handover training session"],
    outcomes: ["Rank on Google for your ideal clients' searches", "Consistent flow of qualified enquiries", "Stop relying on referrals for new business", "Full ownership — no monthly fees, no lock-in"],
    faq: [
      { q: "Will my site rank on Google?", a: "I build every site with SEO foundations — keyword-optimised structure, fast load times, mobile-first design, and proper meta tags. Most clients start seeing organic traffic within 4-8 weeks. I can't guarantee #1 ranking (no one can), but I guarantee your site is built to compete." },
      { q: "Can I update the site myself?", a: "Yes. Every site includes a CMS so you can add pages, update content, and change text without touching code. I'll show you how during handover." },
      { q: "What if I already have a website?", a: "I can redesign your existing site, rebuild it with better SEO and lead capture, or integrate new features. We discuss options during the discovery call." },
    ],
  },
  "enquiry-management": {
    title: "Enquiry Management",
    icon: MessageSquare,
    price: "₦450,000+",
    tagline: "Every lead tracked. Nothing slips through the cracks.",
    description: "Custom portals that centralise every enquiry — Instagram DMs, WhatsApp, email, phone — into one dashboard. Automated follow-ups, team notifications, and full pipeline visibility.",
    whyItMatters: [
      "Businesses lose 30% of leads because they don't follow up within 24 hours",
      "Scattered enquiries across DMs, email, and phone cause missed opportunities",
      "Without a system, you're guessing which leads are warm and which have gone cold",
    ],
    howItWorks: [
      { title: "Audit Your Flow", desc: "I map where your leads come from and identify exactly where they're being lost." },
      { title: "Design The Portal", desc: "A custom dashboard that centralises intake, tracks lead status, and automates follow-ups." },
      { title: "Integrate Tools", desc: "Connect WhatsApp, email, and your existing tools so every lead flows into one place automatically." },
      { title: "Launch & Train", desc: "Your team gets trained on the system. I monitor lead flow and optimise for the first 30 days." },
    ],
    includes: ["Custom enquiry portal with real-time dashboard", "Lead tracking from first contact to signed contract", "Automated follow-up sequences", "Team access with role-based permissions", "WhatsApp & email integration", "CRM integration ready", "Activity logs and audit trail", "Team training session"],
    outcomes: ["Every lead captured — zero drop-off", "Automated follow-ups that convert more prospects", "Full pipeline visibility for your team", "Hours saved on manual lead chasing"],
    faq: [
      { q: "Does this replace WhatsApp?", a: "No — it integrates with WhatsApp. All WhatsApp messages flow into the dashboard alongside emails and form submissions. Your team can respond from one place." },
      { q: "Can my whole team use it?", a: "Yes. The portal supports role-based access — your sales team sees leads, managers see pipeline, admins see everything." },
      { q: "How long does setup take?", a: "Most enquiry management portals go live within 2-3 weeks. Integration with existing tools adds 3-5 days." },
    ],
  },
  "business-automation": {
    title: "Business Automation",
    icon: Zap,
    price: "₦1,000,000+",
    tagline: "Workflows that run 24/7. Your team focuses on delivery.",
    description: "Automated systems that handle repetitive workflows — quote generation, lead follow-ups, task assignment, invoice reminders. Built to save your team hours every week.",
    whyItMatters: [
      "Service business owners spend 30% of their week on admin tasks that could be automated",
      "Manual follow-ups are inconsistent — prospects go cold waiting for responses",
      "Every hour spent on admin is an hour not spent on billable work",
    ],
    howItWorks: [
      { title: "Audit Operations", desc: "I identify every manual, repetitive workflow costing you time — quoting, follow-ups, invoicing, scheduling." },
      { title: "Design Automation", desc: "Trigger-based sequences that handle these workflows automatically." },
      { title: "Build & Integrate", desc: "Connect across your tools — email, Slack, WhatsApp, CRM. One system orchestrates everything." },
      { title: "Launch & Refine", desc: "Your team gets trained, automation goes live, and I monitor performance. We iterate based on real usage." },
    ],
    includes: ["Complete workflow automation design", "Multi-tool integration (Slack, email, WhatsApp)", "Custom dashboards with real-time reporting", "Trigger-based action sequences", "Team training & documentation", "6 months of support & updates", "Fixed-price scope — no surprises"],
    outcomes: ["Hours saved every week on manual admin", "Consistent, timely follow-ups that never miss", "Your team works on high-value work, not busywork", "Full visibility into operations performance"],
    faq: [
      { q: "What can you automate?", a: "Common automations include: lead follow-up sequences, quote generation, task assignment, invoice reminders, meeting scheduling, client onboarding emails, and report generation. We identify the highest-impact workflows during the audit." },
      { q: "Will this integrate with my existing tools?", a: "Yes. I work with your existing stack — email, Slack, WhatsApp, Google Workspace, CRMs, accounting software. The goal is to connect what you already use, not replace everything." },
      { q: "How long does an automation project take?", a: "Most automation systems take 4-6 weeks from audit to launch. Complex projects with multiple integrations may take 8 weeks." },
    ],
  },
};

export default function ServiceDetailPage() {
  const { theme } = useTheme();
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceDetails[slug as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
      <Link href="/services" className={`text-sm font-semibold text-brand-primary underline underline-offset-4 mb-8 inline-block hover:opacity-80 transition-opacity`}>
        &larr; All Services
      </Link>

      <div className="space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-semibold leading-5 text-brand-primary bg-brand-primary/10 border border-brand-primary/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>From {service.price}</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <ServiceIcon className="h-5 w-5" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight font-heading">{service.title}</h1>
          </div>
          <p className={`text-base font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
            {service.tagline}
          </p>
          <p className={`text-sm leading-relaxed max-w-xl mx-auto ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            {service.description}
          </p>
        </div>

        {/* Why It Matters */}
        <div className={`rounded-2xl border p-8 ${theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
          <h2 className="text-xl font-bold font-heading mb-6 text-center">Why It Matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.whyItMatters.map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold">!</span>
                <p className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-2xl font-bold font-heading mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.howItWorks.map((step, i) => (
              <div key={i} className={`p-6 rounded-xl border ${theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"}`}>
                <span className="h-7 w-7 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold mb-3">{i + 1}</span>
                <h3 className="text-base font-bold font-heading mb-1">{step.title}</h3>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className={`rounded-2xl border p-8 ${theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200 shadow-sm"}`}>
          <h2 className="text-xl font-bold font-heading mb-6 text-center">What's Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-xl mx-auto">
            {service.includes.map((item, i) => (
              <div key={i} className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <span className={`text-sm ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className={`text-center p-8 rounded-2xl border ${theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
          <h2 className="text-xl font-bold font-heading mb-6">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {service.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-center justify-center space-x-2">
                <TrendingUp className="h-4 w-4 text-brand-primary flex-shrink-0" />
                <p className={`text-sm font-semibold ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Clock, text: "Respond within 2 hours" },
            { icon: UserCheck, text: "Direct access to me" },
            { icon: ShieldCheck, text: "90-day guarantee" },
          ].map((item) => (
            <div key={item.text} className={`flex items-center space-x-3 p-4 rounded-xl border ${theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"}`}>
              <item.icon className="h-5 w-5 text-brand-primary flex-shrink-0" />
              <span className={`text-sm font-medium ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-xl font-bold font-heading mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {service.faq.map((item, i) => (
              <div key={i} className={`rounded-xl border p-5 ${theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200"}`}>
                <p className={`text-sm font-semibold mb-2 ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>{item.q}</p>
                <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center p-10 rounded-2xl border ${theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
          <h2 className="text-xl font-bold font-heading mb-3">Ready to Get Started?</h2>
          <p className={`text-sm mb-6 max-w-md mx-auto ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
            Book a free strategy call. We'll discuss your business, identify opportunities, and recommend the right system — no pressure.
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
    </div>
  );
}
