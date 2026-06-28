"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { useTheme } from "@/components/ThemeContext";
import { ArrowRight, Eye, MessageSquare, Zap, TrendingUp, ZapIcon, Target, ChevronDown, ExternalLink, Quote, Search, Pen, Code, Rocket, ShieldCheck, CheckCircle } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import HeroDashboard from "@/components/HeroDashboard";
import { H2, H3, Body, Small, Caption } from "@/components/Typography";
import ImageWithFallback from "@/components/ImageWithFallback";
import StatsCounter from "@/components/StatsCounter";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Segun Owolabi",
  "description": "Custom lead generation websites and business automation for service businesses",
  "url": "https://segun-owolabi.vercel.app",
  "email": "olusegun.work@gmail.com",
  "address": { "@type": "PostalAddress", "addressCountry": "NG" },
  "areaServed": ["NG", "Worldwide"],
  "serviceType": ["Web Development", "Business Automation", "Lead Generation"],
  "image": "https://segun-owolabi.vercel.app/og-image.jpg",
  "sameAs": [
    "https://linkedin.com/in/owolabi-olusegun",
    "https://github.com/boarnerges"
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lead Generation Websites",
  "description": "Custom websites built to rank on Google and generate qualified leads for service businesses",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Segun Owolabi"
  },
  "areaServed": ["NG", "Worldwide"],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NGN",
    "price": "300000"
  }
};

const faqData = [
  { q: "How long does it take to build a website or system?", a: "Most lead-generation websites take 2-3 weeks from kickoff to launch. More complex systems (booking portals, automation dashboards) typically take 4-6 weeks. I'll give you a precise timeline after our discovery call." },
  { q: "Can you work with my existing website or brand?", a: "Yes, absolutely. I'm happy to integrate with your existing brand, design language, and colour palette. If you want a complete rebrand, I handle that too. We discuss this during the discovery call." },
  { q: "What tools and platforms do you use?", a: "I build custom systems tailored to what you need. I typically use Next.js and React for fast, modern front-ends, with Node.js or Python on the backend depending on requirements. For integrations I work with Make.com, Zapier, or your existing tools. The goal is always: you're not locked into me or any platform. Everything is transferable." },
  { q: "How quickly do you respond?", a: "I respond to all enquiries within 2 hours during business hours (Monday-Friday, 9 AM - 6 PM WAT). For urgent matters, you can reach me by phone for immediate assistance." },
  { q: "What happens after my system launches?", a: "Every project includes handover training so you understand the system, 6 months of free updates and support, a 2-hour response time guarantee for urgent issues, and direct access to me by email or phone. After 6 months, you can maintain it yourself or arrange ongoing support on a retainer basis." },
  { q: "What if I want to change things mid-project?", a: "We start with a clear, fixed-price scope before any code is written. If changes come up mid-project, I provide a transparent change order with the cost and timeline adjustment. In practice, over 90% of clients don't need scope changes because we nail the requirements during the discovery call." },
  { q: "What if the results don't meet expectations?", a: "That's exactly why I offer a 90-day guarantee. If within 90 days of launch you don't see at least 20% increase in qualified enquiries, I'll optimise the system for free until you do. If we still haven't hit that target by day 180, you get a full refund. Your success is my success." },
  { q: "What do you need from me to get started?", a: "Just a clear picture of your business and what you want to achieve. I'll handle the strategy, design, development, and launch — you focus on running your business." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export default function Home() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: prefersReducedMotion ? {} : { opacity: 0 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  };

  const staggerItem = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };
  
  // Highlight specific projects on the landing page
  const featuredProjects = portfolioConfig.projects.filter(p =>
    p.id === "dapo-awobeku" || p.id === "cpaw-studio"
  );

  const primaryCTA = "inline-flex items-center justify-center h-12 rounded-xl bg-brand-primary px-8 text-base font-semibold text-white shadow-md hover:bg-brand-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200";

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-primary/5 blur-[120px] dark:bg-brand-primary/10" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-brand-primary/5 blur-[100px] dark:bg-brand-primary/10" />

      {/* Hero Section */}
      <section className="relative min-h-screen lg:min-h-[90vh] flex flex-col justify-center">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto w-full flex flex-col justify-center">
            <HeroSlider />

            {/* CTA Buttons — single primary action */}
            <div className="flex items-center justify-center mt-8">
            <motion.a
              href="https://calendly.com/olujawo1996"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCTA}
              {...(prefersReducedMotion ? {} : {
                animate: { scale: [1, 1.02, 1] },
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              })}
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
            </div>
          </div>
        </div>

        <HeroDashboard />
      </section>

      {/* About / Bio */}
      <motion.section {...fadeInUp} className={`py-16 sm:py-20 ${theme === "dark" ? "bg-slate-950/10" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex-shrink-0">
              <ImageWithFallback
                src="/images/segun.png"
                alt="Segun Owolabi — custom software builder for service businesses"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-[center_37%] border-2 border-brand-primary/20 shadow-lg"
                width={112}
                height={112}
              />
            </div>
            <div className="text-center sm:text-left">
              <Small className={`mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                Built for people like you.
              </Small>
              <H2 className="mb-2">Hi, I'm Segun.</H2>
              <Body className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                I build custom websites and automation for service businesses tired of losing leads to poor systems. Over the years I've helped creative agencies, design studios, and consultancies capture more enquiries, organise their intake, and automate the admin that eats into billable hours.
              </Body>
              <Body className={`mt-3 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                No templates. No generic SaaS. Just purpose-built systems tailored to how you actually work.
              </Body>
              <div className={`mt-4 p-4 rounded-xl border ${theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>Team & Capacity</p>
                <Small className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>
                  I work with a small team of developers and designers to ensure your project gets specialized expertise. This means faster delivery, backup support, and higher quality — while I remain your direct contact.
                </Small>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Client Logos */}
      <motion.section {...fadeInUp} className="py-12 sm:py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Caption className="block text-center mb-8" style={{ color: "var(--card-text-muted)" }}>
            Trusted by Business Owners Like You
          </Caption>
            <div className="marquee-container relative flex overflow-hidden max-w-3xl mx-auto">
              <div className="marquee-track flex gap-16 items-center">
                {[...Array(2)].map((_, groupIndex) => (
                  <div key={groupIndex} className="flex gap-16 items-center">
                  {[
                    { name: "CPAW Studio", type: "Creative Agency" },
                    { name: "Joyix Ushering", type: "Event Staffing" },
                    { name: "Dapo Awobeku", type: "Health Advisory" },
                    { name: "Flash-J Mechatronics", type: "Renewable Energy" },
                  ].map((client) => (
                    <div key={client.name} className={`flex-shrink-0 text-center px-4 py-3 rounded-xl border ${
                      theme === "dark"
                        ? "border-slate-800 bg-slate-900/20"
                        : "border-slate-200 bg-slate-50/50"
                    }`}>
                      <p className="text-sm font-bold font-heading whitespace-nowrap">{client.name}</p>
                      <p className={`text-[10px] mt-0.5 whitespace-nowrap ${
                        theme === "dark" ? "text-slate-500" : "text-slate-400"
                      }`}>{client.type}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section {...fadeInUp} className={`py-16 ${theme === "dark" ? "bg-slate-950/10" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <StatsCounter value={50} suffix="+" label="Businesses Served" />
            <StatsCounter value={11} suffix="M+" label="Additional Revenue Generated" />
            <StatsCounter value={3} suffix="+" label="Average Delivery (Weeks)" />
            <StatsCounter value={100} suffix="%" label="Satisfaction Rate" />
          </div>
        </div>
      </motion.section>

      {/* What I Solve For You */}
      <motion.section {...fadeInUp} className={`py-16 border-y ${
        theme === "dark" ? "bg-slate-950/30 border-slate-900" : "bg-slate-50/50 border-slate-250"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <H2>What I Solve For You</H2>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Lead generation, enquiry management, and automation — engineered for service businesses.
            </Small>
          </div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...staggerItem} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
              theme === "dark"
                ? "bg-slate-900/40 border-slate-800 hover:border-brand-primary/30"
                : "bg-white border-slate-200 hover:border-brand-primary/30 hover:shadow-lg"
            }`}>
              <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <Eye className="h-6 w-6" />
              </div>
              <H3 className="mb-3">Lead-Generating Websites</H3>
              <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                Websites that rank on Google for local searches. Interior designers find clients searching &ldquo;interior design in Lagos.&rdquo; Accountants get found by &ldquo;accounting services in Abuja.&rdquo; Your ideal clients find you instead of competitors.
              </Small>
            </motion.div>

            <motion.div {...staggerItem} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
              theme === "dark"
                ? "bg-slate-900/40 border-slate-800 hover:border-brand-primary/30"
                : "bg-white border-slate-200 hover:border-brand-primary/30 hover:shadow-lg"
            }`}>
              <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <MessageSquare className="h-6 w-6" />
              </div>
              <H3 className="mb-3">Enquiry Management</H3>
              <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                Every lead organized in one place. Instagram DMs, WhatsApp, email — all funnel to one dashboard. You see who messaged, when they messaged, and exactly where they are in the process. Nothing falls through the cracks.
              </Small>
            </motion.div>

            <motion.div {...staggerItem} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
              theme === "dark"
                ? "bg-slate-900/40 border-slate-800 hover:border-brand-primary/30"
                : "bg-white border-slate-200 hover:border-brand-primary/30 hover:shadow-lg"
            }`}>
              <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 shadow-sm">
                <Zap className="h-6 w-6" />
              </div>
              <H3 className="mb-3">Business Automation</H3>
              <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                Workflows that run while you sleep. New lead comes in → auto-response sent → task created for your team → follow-up scheduled → quote prepared. All without you doing anything. You focus on delivery, not admin.
              </Small>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pain Points — validate visitor's problems */}
      <motion.section {...fadeInUp} className={`py-16 ${
        theme === "dark" ? "bg-slate-950/20" : "bg-slate-50/50"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <H2>Is this your reality?</H2>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              If any of these sound familiar, you are losing money right now.
            </Small>
          </div>
          <div className={`max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl border ${
            theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200 shadow-sm"
          }`}>
            <ul className="space-y-4 mb-8">
              {[
                "You're missing enquiries on Instagram DMs you never see.",
                "Your website exists but doesn't pull consistent business.",
                "Follow-ups happen \"whenever you remember\" — and prospects move to competitors.",
                "You're turning down work because you can't manage the admin.",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 h-5 w-5 text-red-400 font-bold text-lg leading-none mt-0.5">✗</span>
                  <Small className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>{item}</Small>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <p className={`text-base font-bold text-center ${
                theme === "dark" ? "text-red-400" : "text-red-600"
              }`}>
                Right now, this is costing you roughly ₦2–5 million annually.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Case studies referral link */}
      <motion.section {...fadeInUp} className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-500"}>
              Want to see proof before booking?{" "}
              <a href="#case-studies" className="text-brand-primary underline underline-offset-4 font-semibold hover:opacity-80 transition-opacity">
                View case studies below
              </a>
            </Small>
          </div>
        </div>
      </motion.section>

      {/* Case Studies — proof with metrics */}
      <motion.section {...fadeInUp} id="case-studies" className={`py-16 border-y ${
        theme === "dark" ? "bg-slate-950/30 border-slate-900" : "bg-slate-50/50 border-slate-250"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div className="space-y-3">
              <H2>Real Results for Real Businesses</H2>
              <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                Problem → Solution → Result. No fluff.
              </Small>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-brand-primary underline underline-offset-4 mt-4 sm:mt-0 hover:opacity-80 transition-opacity"
            >
              View All Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
              const problemLine = project.longDescription.split("**The Challenge**\\n")[1]?.split("\\n\\n")[0]?.split(".").slice(0, 2).join(".") || "Business growth limited by poor online systems.";
              const solutionLine = project.longDescription.split("**My Solution**\\n")[1]?.split("\\n\\n")[0] || "Custom system built to solve this.";
              
              return (
              <motion.div
                key={project.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl overflow-hidden border flex flex-col ${
                  theme === "dark"
                    ? "bg-slate-900/30 border-slate-800 hover:border-brand-primary/20"
                    : "bg-white border-slate-200 hover:border-brand-primary/20"
                }`}
              >
                {/* Problem */}
                <div className={`px-6 pt-6 pb-3 ${
                  theme === "dark" ? "bg-slate-950/40" : "bg-slate-50/60"
                }`}>
                  <Caption className="text-red-500 dark:text-red-400">Problem</Caption>
                  <Small className={`mt-1 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                    {problemLine}
                  </Small>
                </div>

                {/* Solution + Image */}
                <div className="p-6">
                  <Caption className="text-brand-primary">Solution</Caption>
                  <Small className={`mt-1 mb-4 ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
                    {solutionLine}
                  </Small>

                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <ImageWithFallback
                      src={`/images/${project.image}.jpg`}
                      alt={`Case study: ${project.title} — website dashboard showing lead generation system with ${project.leadIncrease} enquiry increase`}
                      className="w-full h-full object-cover object-top"
                      width={640}
                      height={360}
                    />
                    <div className="absolute top-3 left-3 bg-brand-primary text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md">
                      +{project.leadIncrease}
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                <div className={`px-6 pb-6 border-b ${
                  theme === "dark" ? "border-slate-800" : "border-slate-200"
                }`}>
                  <Caption className="text-emerald-600 dark:text-emerald-400">Results</Caption>
                  <div className="mt-2 space-y-1.5">
                    {project.keyResults.map((result, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <Small className={theme === "dark" ? "text-slate-300" : "text-slate-700"}>{result}</Small>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Quote */}
                <div className={`px-6 py-4 ${
                  theme === "dark" ? "bg-slate-950/30" : "bg-slate-50/50"
                }`}>
                  <div className="flex space-x-2">
                    <Quote className="h-4 w-4 text-brand-primary/40 flex-shrink-0 mt-0.5" />
                    <Small className={`italic ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>
                      &ldquo;{project.clientQuote}&rdquo;
                    </Small>
                  </div>
                </div>

                {/* Timeline & Investment */}
                <div className={`px-6 py-3 flex items-center justify-between border-t text-xs ${
                  theme === "dark" ? "border-slate-800 text-slate-500" : "border-slate-200 text-slate-400"
                }`}>
                  <span>Timeline: {project.timeline}</span>
                  <span>Investment: {project.investment}</span>
                </div>

                {/* CTA — text links only */}
                <div className={`px-6 py-4 flex items-center gap-4 border-t ${
                  theme === "dark" ? "border-slate-800" : "border-slate-200"
                }`}>
                  <Link
                    href={`/projects#${project.id}`}
                    className="text-sm font-semibold text-brand-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    Read Full Case Study
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-slate-300 flex items-center space-x-1 transition-colors"
                  >
                    <span>View Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section {...fadeInUp} className={`py-16 border-y ${
        theme === "dark" ? "bg-slate-950/20 border-slate-900" : "bg-slate-50/50 border-slate-200"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <H2>What Clients Say</H2>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Real feedback from real projects.
            </Small>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                quote: "Before this system, we were losing 30% of leads to poor follow-up. Now everything is tracked from first message to signed contract. We closed 12 new clients in Q2 — that would have taken us six months before.",
                name: "Ebenezer Abegunde",
                role: "Founder, CPAW Studio"
              },
              { 
                quote: "For the first time, my career is in one place. Speaking invitations and consulting requests now come to me instead of me chasing them through LinkedIn. The publication index alone has saved me hours of emailing PDF CVs.",
                name: "Dapo Awobeku",
                role: "Health Systems & Policy Advisor"
              },
              { 
                quote: "We had people searching for our services online and couldn't find us. Now we get diagnostic requests weekly. The enquiry form pre-qualifies leads so we only spend time on serious clients.",
                name: "Ajo Olasco",
                role: "Director, Flash-J Mechatronics"
              },
              { 
                quote: "Segun and team were great to work with. Our online presence matched our ambitions — professional, responsive, mobile-first. We've had positive feedback from clients who previously couldn't find us online.",
                name: "Eyitayo Oloruntoba",
                role: "Founder, Joyix Ushering Agency"
              },
            ].map((t) => (
              <div key={t.name} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <Quote className="h-6 w-6 text-brand-primary/30 mb-4" />
                <Body className={`italic mb-6 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
                  &ldquo;{t.quote}&rdquo;
                </Body>
                <div>
                  <p className="text-sm font-bold font-heading">{t.name}</p>
                  <Small className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>{t.role}</Small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Work With Me */}
      <motion.section {...fadeInUp} className={`py-16 border-y ${
        theme === "dark" ? "bg-slate-950/30 border-slate-900" : "bg-slate-50/50 border-slate-250"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <H2>Why Work With Me</H2>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Not every developer builds this way. Here's what makes the difference.
            </Small>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className={`md:col-span-1 p-6 sm:p-8 rounded-2xl border-l-4 border-brand-primary flex flex-col justify-center ${
              theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                <Code className="h-5 w-5" />
              </div>
              <H3 className="mb-2">You Watch It Being Built</H3>
              <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                Most developers disappear until launch day. I don't. You see progress every 3 days — weekly video calls show exactly what was built, what's next, and whether we need to pivot. This removes 80% of revision cycles because we course-correct in real-time.
              </Small>
              <p className={`text-xs font-semibold text-brand-primary mt-4 flex items-center space-x-1 ${
                theme === "dark" ? "" : ""
              }`}>
                <span className="text-base leading-none">→</span>
                <span>Most agencies hide. I show.</span>
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-center ${
              theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                <ZapIcon className="h-5 w-5" />
              </div>
              <H3 className="mb-2">Direct Access</H3>
              <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                Questions answered in 2 hours, not days. You get my direct email and phone number. No project managers, no ticket queues. The person building your system answers when you call.
              </Small>
              <p className={`text-xs font-semibold text-brand-primary mt-3 flex items-center space-x-1 ${
                theme === "dark" ? "" : ""
              }`}>
                <CheckCircle className="h-3.5 w-3.5" />
                <span>I respond within 2 hours (Mon-Fri, 9 AM - 6 PM WAT)</span>
              </p>
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-center ${
              theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                <Target className="h-5 w-5" />
              </div>
              <H3 className="mb-2">Accountability for Results</H3>
              <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                You're not paying for hours or deliverables. You're paying for enquiry flow. I measure success by leads you capture and convert, not my billable hours. My success = your enquiries going up.
              </Small>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Internal Links */}
      <motion.section {...fadeInUp} className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`max-w-2xl mx-auto text-center p-6 rounded-xl border ${
            theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"
          }`}>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Learn more about{" "}
              <Link href="/about" className="text-brand-primary underline underline-offset-4 font-semibold hover:opacity-80 transition-opacity">
                how I build these systems
              </Link>
              {" "}or{" "}
              <Link href="/projects" className="text-brand-primary underline underline-offset-4 font-semibold hover:opacity-80 transition-opacity">
                view detailed case studies
              </Link>
              .
            </Small>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section {...fadeInUp} className={`py-16 ${
        theme === "dark" ? "bg-slate-950/20" : "bg-slate-50/50"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <H2>How It Works</H2>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              From audit to automation in five steps.
            </Small>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { label: "We Audit", icon: Search, desc: "Identify bottlenecks & lead gaps" },
              { label: "We Design", icon: Pen, desc: "Map solution to your workflow" },
              { label: "We Build", icon: Code, desc: "Custom website, portal, or system" },
              { label: "We Launch", icon: Rocket, desc: "Deploy, test, and go live" },
              { label: "You Grow", icon: TrendingUp, desc: "More enquiries, less admin" },
            ].map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center text-center px-3">
                  <div className={`h-20 w-20 rounded-2xl flex items-center justify-center border-2 mb-3 ${
                    theme === "dark"
                      ? "bg-slate-900/60 border-slate-800 text-brand-primary"
                      : "bg-white border-slate-200 shadow-sm text-brand-primary"
                  }`}>
                    <step.icon className="h-9 w-9" />
                  </div>
                  <p className="text-sm font-bold font-heading">{step.label}</p>
                  <Small className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>{step.desc}</Small>
                </div>
                {i < 4 && (
                  <>
                    <div className={`hidden md:flex items-center justify-center h-10 w-10 rounded-full border-2 ${
                      theme === "dark"
                        ? "border-slate-800 text-slate-600 bg-slate-900/40"
                        : "border-slate-200 text-slate-400 bg-white shadow-sm"
                    }`}>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div className="md:hidden h-8 w-px border-l-2 border-dashed" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section {...fadeInUp} className={`py-16 ${theme === "dark" ? "bg-slate-950/10" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <H2>Transparent Pricing</H2>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Fixed prices based on what you need. No surprises, no hidden fees.
            </Small>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col ${
              theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <Caption className="text-brand-primary font-semibold mb-1">Lead-Generating Website</Caption>
              <p className="text-3xl font-bold font-heading mb-6">₦300,000+</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>SEO-optimised pages that rank locally</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Lead capture forms with auto-notifications</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Mobile-responsive design</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>CMS included — you can update content</Small></li>
              </ul>
              <a
                href="https://calendly.com/olujawo1996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-primary px-5 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 transition-all duration-200 text-center"
              >
                Get Started
              </a>
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col relative ${
              theme === "dark" ? "bg-slate-900/60 border-brand-primary/40" : "bg-white border-brand-primary/30 shadow-md"
            }`}>
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                theme === "dark" ? "bg-brand-primary text-white" : "bg-brand-primary text-white"
              }`}>Most Popular</div>
              <Caption className="text-brand-primary font-semibold mb-1">Enquiry Management</Caption>
              <p className="text-3xl font-bold font-heading mb-6">₦450,000+</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Custom enquiry portal with dashboard</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Lead tracking from first contact to close</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Automated follow-ups & notifications</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>CRM integration ready</Small></li>
              </ul>
              <a
                href="https://calendly.com/olujawo1996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-primary px-5 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 transition-all duration-200 text-center"
              >
                Get Started
              </a>
            </div>

            <div className={`p-6 sm:p-8 rounded-2xl border flex flex-col ${
              theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <Caption className="text-brand-primary font-semibold mb-1">Business Automation</Caption>
              <p className="text-3xl font-bold font-heading mb-6">₦1,000,000+</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Complete workflow automation</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Multi-tool integration (Slack, email, WhatsApp)</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Custom dashboards & reporting</Small></li>
                <li className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Team training & documentation</Small></li>
              </ul>
              <a
                href="https://calendly.com/olujawo1996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-primary px-5 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 transition-all duration-200 text-center"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className={`max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl border ${
            theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-slate-50 border-slate-200"
          }`}>
            <H3 className="text-center mb-4">What Determines Your Final Price?</H3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              <div className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Which features you need</Small></div>
              <div className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Which tools we're integrating with</Small></div>
              <div className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Complexity of your workflows</Small></div>
              <div className="flex items-start space-x-2"><CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" /><Small>Timeline (rush projects cost more)</Small></div>
            </div>
            <p className={`text-center text-sm font-semibold mt-6 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
              All projects include 3-4 week delivery, direct access, and 90-day guarantee.
            </p>
          </div>

          <div className="text-center mt-8 space-y-3">
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-500"}>
              Not sure what you need? Book a free strategy call and I'll give you a fixed price.
            </Small>
            <a
              href="https://calendly.com/olujawo1996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 h-11 rounded-xl bg-brand-primary px-6 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 transition-all duration-200"
            >
              <span>Get Your Free Pricing Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section {...fadeInUp} className={`py-16 ${
        theme === "dark" ? "bg-slate-950/20" : "bg-slate-50/50"
      }`}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <H2>Frequently Asked Questions</H2>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Everything you need to know before we start.
            </Small>
          </div>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <div key={i} className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200"
              }`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    theme === "dark" ? "text-slate-200 hover:text-white" : "text-slate-800 hover:text-slate-900"
                  }`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-brand-primary transition-transform duration-200 flex-shrink-0 ml-4 ${
                    openFaq === i ? "rotate-180" : ""
                  }`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-200 ${
                  openFaq === i ? "pb-4 max-h-96" : "max-h-0 pb-0"
                }`}>
                  <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
                    {faq.a}
                  </Small>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="text-center mt-10 space-y-3">
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Still have questions?
            </Small>
            <a
              href="https://calendly.com/olujawo1996"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 h-10 rounded-xl border-2 border-brand-primary px-5 text-sm font-semibold text-brand-primary transition-all duration-200 hover:bg-brand-primary/5 ${theme === "dark" ? "" : ""}`}
            >
              <span>Book Free Strategy Call</span>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Risk Reversal */}
      <motion.section {...fadeInUp} className={`py-16 ${
        theme === "dark" ? "bg-slate-950/20" : "bg-slate-50/50"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`max-w-2xl mx-auto text-center p-8 sm:p-10 rounded-2xl border-l-4 border-brand-primary ${
            theme === "dark"
              ? "bg-slate-900/30 border-slate-800"
              : "bg-white border-slate-200 shadow-sm"
          }`}>
            <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mx-auto mb-6">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <H3 className="mb-4">90-Day No-Risk Guarantee</H3>
            <Body className={`font-semibold mb-4 ${theme === "dark" ? "text-slate-200" : "text-slate-800"}`}>
              At least 20% increase in qualified enquiries.
            </Body>
            <ul className={`space-y-3 text-left max-w-md mx-auto mb-6 ${theme === "dark" ? "text-slate-300" : "text-slate-700"}`}>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <Small>If you don't see 20%+ more qualified enquiries in 90 days, we optimize for free through day 180.</Small>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <Small>If we still don't hit 20% by day 180, you get a full refund — no questions asked.</Small>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                <Small>Your success is our success. We don't get paid unless you get results.</Small>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mb-8">
        <div className={`relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border-2 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 ${
          theme === "dark"
            ? "bg-slate-900 border-brand-primary/20"
            : "bg-white border-brand-primary/10"
        }`}>
          <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-brand-primary/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-primary/5 blur-[80px]" />
          
          <div className="max-w-xl space-y-4">
            <H3>Ready to stop losing leads to poor systems?</H3>
            <Small className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              We'll audit your current process, identify exactly where you're losing opportunities, and build a custom system that captures and converts more leads.
            </Small>
            <Small className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
              No pitch. Just honest feedback about your business.
            </Small>
          </div>

          <div className="w-full lg:w-auto text-center space-y-3">
            <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${theme === "dark" ? "bg-slate-900 border-slate-700 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
              <CheckCircle className="h-3.5 w-3.5 text-brand-primary" />
              <span>Respond within 2 hours · No hidden fees · 90-day guarantee</span>
            </div>
            <a
              href="https://calendly.com/olujawo1996"
              target="_blank"
              rel="noopener noreferrer"
              className={primaryCTA + " h-14 px-10"}
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Small className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
              Most projects ship in 3–4 weeks · From ₦300,000
            </Small>
          </div>
        </div>
      </section>

    </div>
  );
}
