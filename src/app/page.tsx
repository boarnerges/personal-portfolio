"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { useTheme } from "@/components/ThemeContext";
import { ArrowRight, Eye, MessageSquare, Zap, Sparkles, TrendingUp, CheckCircle, Wrench, ZapIcon, Target, ChevronDown, ExternalLink, Quote, Search, Pen, Code, Rocket } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import HeroBackground from "@/components/HeroBackground";
import HeroFloatingCards from "@/components/HeroFloatingCards";

export default function Home() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-80px" },
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };
  
  // Highlight specific projects on the landing page
  const featuredProjects = portfolioConfig.projects.filter(p =>
    p.id === "dapo-awobeku" || p.id === "cpaw-studio"
  );

  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[120px] dark:bg-brand-blue/10" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-brand-warm/5 blur-[100px] dark:bg-brand-warm/10" />

      {/* Hero Section */}
      <section className="relative min-h-screen lg:min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <HeroBackground />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-10 w-full flex flex-col justify-center">
            
            {/* Subtle Tag/Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 rounded-full px-4 py-1.5 text-xs font-semibold leading-5 text-brand-blue bg-brand-blue/10 border border-brand-blue/20 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Available for Select Clients</span>
              </div>
            </div>

            {/* Main Headline & Subtitle Slider */}
            <HeroSlider currentSlide={currentSlide} onSlideChange={setCurrentSlide} />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 rounded-xl bg-brand-blue px-6 font-semibold text-white shadow-md hover:bg-brand-blue/90 transition-all duration-200 cursor-pointer hover:shadow-[0_0_20px_rgba(0,64,192,0.35)] hover:scale-[1.02]"
              >
                <span>View Case Studies</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                href="/about"
                className={`w-full sm:w-auto inline-flex items-center justify-center h-12 rounded-xl border font-semibold px-6 transition-all duration-200 cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-900/60 hover:bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700 backdrop-blur-md"
                    : "bg-white/80 hover:bg-white text-slate-700 border-slate-200 hover:border-slate-300 backdrop-blur-md"
                }`}
              >
                See How It Works
              </Link>
            </div>

            {/* Slider indicators below buttons */}
            <div className="flex justify-center space-x-2 pt-6">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? "w-8 bg-brand-blue"
                      : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <HeroFloatingCards />
      </section>

      {/* Sound Familiar? */}
      <motion.section {...fadeInUp} className={`py-16 sm:py-20 ${
        theme === "dark" ? "bg-slate-950/20" : "bg-slate-50/50"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center">Sound Familiar?</h2>
            <p className={`text-sm text-center mt-3 mb-10 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>You might need this if...</p>
            <div className={`p-8 sm:p-10 rounded-2xl border ${
              theme === "dark" ? "bg-slate-900/30 border-slate-800" : "bg-white border-slate-200 shadow-sm"
            }`}>
              <ul className="space-y-4">
                {[
                  "Your business depends mostly on referrals and word-of-mouth.",
                  "People visit your website but rarely get in touch.",
                  "Enquiries are scattered across WhatsApp, Instagram, and email.",
                  "Following up with prospects feels inconsistent.",
                  "You're spending too much time on admin instead of serving clients.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-brand-blue mt-0.5" />
                    <span className={`text-sm sm:text-base leading-relaxed ${
                      theme === "dark" ? "text-slate-300" : "text-slate-700"
                    }`}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <p className={`text-base font-semibold text-center ${
                  theme === "dark" ? "text-slate-200" : "text-slate-800"
                }`}>
                  If you answered yes to any of these, you're exactly who I build for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Focus & Value Propositions */}
      <section className={`py-16 sm:py-20 border-y ${
        theme === "dark" ? "bg-slate-950/20 border-slate-900" : "bg-slate-50/50 border-slate-250"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading">
                How I Help You Grow
              </h2>
            <p className={`text-sm mt-3 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Three growth systems, one purpose: more paying customers.
            </p>
          </div>

          <motion.div {...staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Lead-Generating Websites */}
            <motion.div {...staggerItem} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
              theme === "dark"
                ? "bg-slate-900/40 border-slate-800 hover:border-brand-blue/30"
                : "bg-white border-slate-200 hover:border-brand-blue/30 hover:shadow-lg"
            }`}>
              <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-3">Lead-Generating Websites</h3>
              <p className={`text-sm leading-relaxed ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}>
                SEO-ready sites built to rank on Google and pull in qualified leads — no ad spend required.
              </p>
            </motion.div>

            {/* Card 2: Enquiry Management */}
            <motion.div {...staggerItem} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
              theme === "dark"
                ? "bg-slate-900/40 border-slate-800 hover:border-brand-blue/30"
                : "bg-white border-slate-200 hover:border-brand-blue/30 hover:shadow-lg"
            }`}>
              <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-3">Enquiry Management</h3>
              <p className={`text-sm leading-relaxed ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}>
                Booking portals and capture systems that organise every lead from first contact to signed client.
              </p>
            </motion.div>

            {/* Card 3: Business Automation */}
            <motion.div {...staggerItem} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
              theme === "dark"
                ? "bg-slate-900/40 border-slate-800 hover:border-brand-blue/30"
                : "bg-white border-slate-200 hover:border-brand-blue/30 hover:shadow-lg"
            }`}>
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 shadow-sm">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-3">Business Automation</h3>
              <p className={`text-sm leading-relaxed ${
                theme === "dark" ? "text-slate-400" : "text-slate-600"
              }`}>
                Custom software that replaces spreadsheets and manual busywork — your operations run on autopilot.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className={`py-14 sm:py-16 border-y ${
        theme === "dark" ? "bg-slate-950/20 border-slate-900" : "bg-slate-50/50 border-slate-250"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Why Work With Me
            </h2>
            <p className={`text-sm mt-3 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Built differently so your business grows differently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Custom Built, Not Templated", desc: "Every system is built from the ground up for your specific business. No WordPress themes, no page builders — just purpose-built software tailored to how you operate.", icon: Wrench },
              { title: "Fast Communication", desc: "You get a direct line to the person building your system. No account managers, no runaround. Questions answered within hours, not days.", icon: ZapIcon },
              { title: "End-to-End Service", desc: "From strategy to design to development to launch — I handle everything. Your website or automation system ships complete and ready to grow your business.", icon: Target },
            ].map((item) => (
              <div key={item.title} className={`p-8 rounded-2xl border text-center transition-all duration-300 hover:scale-[1.01] hover:shadow-md ${
                theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold font-heading mb-2">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow: How It Works */}
      <section className={`py-16 sm:py-20 ${
        theme === "dark" ? "bg-slate-950/20" : "bg-slate-50/50"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              How It Works
            </h2>
            <p className={`text-sm mt-3 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              From audit to automation in five steps.
            </p>
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
                      ? "bg-slate-900/60 border-slate-800 text-brand-blue"
                      : "bg-white border-slate-200 shadow-sm text-brand-blue"
                  }`}>
                    <step.icon className="h-9 w-9" />
                  </div>
                  <p className="text-sm font-bold font-heading">{step.label}</p>
                  <p className={`text-[11px] mt-0.5 ${
                    theme === "dark" ? "text-slate-500" : "text-slate-400"
                  }`}>{step.desc}</p>
                </div>
                {i < 4 && (
                  <>
                    <div className={`hidden md:flex items-center ${
                      theme === "dark" ? "text-slate-600" : "text-slate-300"
                    }`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div className="md:hidden h-8 w-px border-l-2 border-dashed" />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 sm:py-20 ${
        theme === "dark" ? "bg-slate-950/20" : "bg-slate-50/50"
      }`}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Frequently Asked Questions
            </h2>
            <p className={`text-sm mt-3 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Everything you need to know before we start.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { q: "How long does it take to build a website or system?", a: "Most lead-generation websites take 2-3 weeks from kickoff to launch. More complex systems (booking portals, automation dashboards) typically take 4-6 weeks. I'll give you a precise timeline after our discovery call." },
              { q: "What does a typical project cost?", a: "Projects range from ₦300,000 for a lead-generation website to ₦2,000,000+ for an advanced business automation system. I'll provide a fixed-price quote after understanding your needs — no surprises, no hidden fees." },
              { q: "What happens after we start working together?", a: "We begin with a strategy call to map out your goals, then I design and build your system in stages. You'll see progress throughout and have direct input at every milestone." },
              { q: "Do you offer ongoing support after launch?", a: "Yes. Every project includes a handover period where I ensure everything runs smoothly. Ongoing maintenance and updates are available on a retainer basis." },
              { q: "What do you need from me to get started?", a: "Just a clear picture of your business and what you want to achieve. I'll handle the strategy, design, development, and launch — you focus on running your business." },
            ].map((faq, i) => (
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
                  <ChevronDown className={`h-4 w-4 text-brand-blue transition-transform duration-200 flex-shrink-0 ml-4 ${
                    openFaq === i ? "rotate-180" : ""
                  }`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-200 ${
                  openFaq === i ? "pb-4 max-h-40" : "max-h-0 pb-0"
                }`}>
                  <p className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Featured Case Studies
            </h2>
            <p className={`text-sm mt-3 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Lead-generating websites, enquiry systems, and automation built for real service businesses.
            </p>
          </div>
          <Link
            href="/projects"
            className="group flex items-center space-x-1.5 text-sm font-semibold text-brand-blue mt-4 sm:mt-0 hover:underline cursor-pointer"
          >
            <span>View Case Studies</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl overflow-hidden border flex flex-col transition-all duration-300 hover:scale-[1.01] hover:shadow-lg ${
                theme === "dark"
                  ? "bg-slate-900/30 border-slate-800 hover:border-brand-blue/20"
                  : "bg-white border-slate-200 hover:border-brand-blue/20"
              }`}
            >
                {/* Project Card Header */}
              <div className={`p-4 border-b flex items-center justify-between ${
                theme === "dark" ? "bg-slate-950/40 border-slate-800" : "bg-slate-50 border-slate-150"
              }`}>
                <span className={`text-xs font-mono font-medium rounded-full px-2.5 py-1 ${
                  theme === "dark" ? "bg-slate-800 text-slate-350" : "bg-slate-200/60 text-slate-600"
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative w-full aspect-video border-b border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={`/images/${project.image}.jpg`} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-brand-blue text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md">
                  {project.impact}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2.5">
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${
                    theme === "dark" ? "text-slate-400" : "text-slate-600"
                  }`}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-mono px-2 py-0.5 rounded ${
                          theme === "dark"
                            ? "bg-slate-800 text-slate-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                    href={`/projects#${project.id}`}
                    className="inline-flex items-center space-x-1 text-sm font-semibold text-brand-blue hover:underline cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer"
                  >
                    <span>View Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-16 sm:py-20 border-y ${
        theme === "dark" ? "bg-slate-950/20 border-slate-900" : "bg-slate-50/50 border-slate-200"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              What Clients Say
            </h2>
            <p className={`text-sm mt-3 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              Real feedback from real projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "This is nice and beautiful", name: "Eyitayo Oloruntoba", role: "Founder, Joyix Ushering Agency" },
              { quote: "Really like this, it demonstrates my projects perfectly", name: "Ebenezer Abegunde", role: "Founder, CPAW Studio" },
            ].map((t) => (
              <div key={t.name} className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
                theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-sm"
              }`}>
                <Quote className="h-6 w-6 text-brand-blue/30 mb-4" />
                <p className={`text-base leading-relaxed italic mb-6 ${
                  theme === "dark" ? "text-slate-300" : "text-slate-700"
                }`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold font-heading">{t.name}</p>
                  <p className={`text-xs ${
                    theme === "dark" ? "text-slate-500" : "text-slate-400"
                  }`}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mb-8">
        <div className={`relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border-2 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 ${
          theme === "dark"
            ? "bg-slate-900 border-brand-blue/20"
            : "bg-white border-brand-blue/10"
        }`}>
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-brand-blue/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-blue/5 blur-[80px]" />
          
          <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-bold font-heading">
                Ready to build a system that grows your business?
              </h2>
            <p className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>
              Let's build a dedicated portal that brings in enquiries, manages them from start to finish, and automates the operations that eat up your day.
            </p>
          </div>

          <div className="w-full lg:w-auto text-center">
            <a
              href="https://calendly.com/olujawo1996"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex h-14 items-center justify-center rounded-2xl bg-brand-blue px-8 text-base font-bold text-white shadow-lg hover:bg-brand-blue/90 transition-all duration-200 cursor-pointer hover:shadow-[0_0_25px_rgba(0,64,192,0.4)] hover:scale-[1.02]"
            >
              Book a Strategy Call
            </a>
            <p className={`text-xs mt-3 ${theme === "dark" ? "text-slate-500" : "text-slate-400"}`}>
              Projects from ₦300,000 · Custom quote for your business
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
