"use client";

import React from "react";
import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio";
import { useTheme } from "./ThemeContext";
import { Mail, ArrowUpRight, Clock, ShieldCheck, UserCheck } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`mt-auto border-t py-12 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-950/40 border-slate-900"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start justify-between">
          
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Logo />
            <p className={`text-sm leading-relaxed max-w-xs ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              {portfolioConfig.personal.tagline}
            </p>
          </div>

          {/* Case Studies Links */}
          <div className="space-y-4">
            <h3 className={`text-sm font-semibold tracking-wider uppercase ${
              theme === "dark" ? "text-slate-200" : "text-slate-800"
            }`}>
              Case Studies
            </h3>
            <ul className={`space-y-2.5 text-sm ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}>
              <li>
                <Link href="/projects#cpaw-studio" className="hover:text-brand-primary transition-colors duration-200">Creative Agency &mdash; Lead Gen</Link>
              </li>
              <li>
                <Link href="/projects#joyix-ushering" className="hover:text-brand-primary transition-colors duration-200">Ushering Agency &mdash; Booking Portal</Link>
              </li>
              <li>
                <Link href="/projects#dapo-awobeku" className="hover:text-brand-primary transition-colors duration-200">Health Policy &mdash; Authority Platform</Link>
              </li>
              <li>
                <Link href="/projects#flash-j-mechatronics" className="hover:text-brand-primary transition-colors duration-200">Mechatronics &mdash; Lead Capture</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
            <h3 className={`text-sm font-semibold tracking-wider uppercase ${
              theme === "dark" ? "text-slate-200" : "text-slate-800"
            }`}>
              Connect
            </h3>
            <div className="flex items-center space-x-4 mt-2">
              <a
                href={portfolioConfig.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-900 hover:bg-slate-850 text-slate-350 hover:text-white border border-slate-800"
                    : "bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a
                href={portfolioConfig.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-900 hover:bg-slate-850 text-slate-350 hover:text-white border border-slate-800"
                    : "bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a
                href={portfolioConfig.personal.socials.email}
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 cursor-pointer ${
                  theme === "dark"
                    ? "bg-slate-900 hover:bg-slate-850 text-slate-350 hover:text-white border border-slate-800"
                    : "bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <a
              href={portfolioConfig.personal.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-10 w-full items-center justify-center rounded-xl bg-brand-primary px-5 text-sm font-semibold text-white shadow-md hover:bg-brand-primary/90 transition-all duration-200 mt-2 ${
                theme === "dark" ? "hover:shadow-[0_0_15px_rgba(139,101,8,0.3)]" : ""
              }`}
            >
              Book Free Strategy Call
            </a>

            <a
              href={portfolioConfig.personal.socials.email}
              className={`inline-flex items-center space-x-1 mt-4 text-sm font-medium border-b border-transparent transition-colors duration-200 hover:border-brand-primary cursor-pointer ${
                theme === "dark" ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
              }`}
            >
              <span>{portfolioConfig.personal.email}</span>
              <ArrowUpRight className="h-4 w-4 text-brand-primary" />
            </a>
          </div>

        </div>

        {/* Trust Badges */}
        <div className={`my-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-4 border-y ${
          theme === "dark" ? "border-slate-800" : "border-slate-200"
        }`}>
          {[
            { icon: Clock, text: "2-Hour Response" },
            { icon: UserCheck, text: "Direct Access" },
            { icon: ShieldCheck, text: "90-Day Guarantee" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center space-x-2">
              <badge.icon className={`h-4 w-4 ${theme === "dark" ? "text-brand-primary" : "text-brand-primary"}`} />
              <span className={`text-xs font-semibold ${theme === "dark" ? "text-slate-400" : "text-slate-500"}`}>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className={`my-8 border-t ${
          theme === "dark" ? "border-slate-900" : "border-slate-200"
        }`} />

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
            &copy; {currentYear} Segun Owolabi. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className={`hover:text-brand-primary transition-colors duration-200 ${
              theme === "dark" ? "text-slate-500" : "text-slate-400"
            }`}>Privacy</Link>
            <span className={theme === "dark" ? "text-slate-700" : "text-slate-300"}>·</span>
            <p className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
              Based in Nigeria · Working with clients worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
