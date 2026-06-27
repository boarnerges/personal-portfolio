"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "How I Work", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Lead-Generating Websites", href: "/about" },
    { name: "Enquiry Management", href: "/about" },
    { name: "Business Automation", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-4 left-4 right-4 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav
        className={`rounded-2xl transition-all duration-300 ${
          theme === "dark" ? "glass-panel-dark" : "glass-panel-light"
        } py-3.5 px-6 flex items-center justify-between shadow-lg`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-warm/10 text-brand-warm group-hover:scale-105 transition-transform duration-200">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5">
              <path d="M12 2L22 12L12 22L2 12Z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight font-heading">
            Segun<span className="text-brand-warm glow-text-blue">.O</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                isActive(link.href)
                  ? "text-brand-warm"
                  : theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`appearance-none border-0 p-0 bg-transparent cursor-pointer text-sm font-medium tracking-wide transition-colors duration-200 leading-5 ${
                servicesOpen
                  ? "text-brand-warm"
                  : theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span className="inline-flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-50">
                <div className={`rounded-xl shadow-xl border overflow-hidden ${
                  theme === "dark" ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
                }`}>
                {services.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className={`block px-5 py-3 text-sm font-medium transition-colors duration-150 ${
                      theme === "dark"
                        ? "text-slate-300 hover:bg-slate-900 hover:text-white"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {s.name}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>

          {/* Case Studies — prominent */}
          <Link
            href="/projects"
            className={`inline-flex items-center h-8 px-4 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              isActive("/projects")
                ? "bg-brand-warm text-white"
                : theme === "dark"
                ? "bg-brand-warm/10 text-brand-warm hover:bg-brand-warm/20"
                : "bg-brand-warm/10 text-brand-warm hover:bg-brand-warm/20"
            }`}
          >
            Case Studies
          </Link>
          </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border border-transparent transition-all duration-200 cursor-pointer ${
              theme === "dark"
                ? "bg-slate-800/50 hover:bg-slate-800 text-yellow-400 hover:border-slate-700"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:border-slate-300"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <a
            href={portfolioConfig.personal.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-brand-warm px-5 text-sm font-semibold text-white shadow-md hover:bg-brand-warm/90 transition-all duration-200 cursor-pointer hover:shadow-[0_0_15px_rgba(192,122,58,0.3)] hover:scale-[1.02]"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border border-transparent transition-all duration-200 cursor-pointer ${
              theme === "dark"
                ? "bg-slate-800/50 text-yellow-400"
                : "bg-slate-100 text-slate-700"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer ${
              theme === "dark"
                ? "bg-slate-800/50 text-slate-200 border-slate-800"
                : "bg-slate-100 text-slate-700 border-slate-200"
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2">
          <div
            className={`rounded-2xl p-4 shadow-xl border ${
              theme === "dark"
                ? "bg-slate-950/95 border-slate-850"
                : "bg-white/95 border-slate-150"
            }`}
          >
            <div className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-2.5 text-base font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    isActive(link.href)
                      ? "bg-brand-warm/10 text-brand-warm"
                      : theme === "dark"
                      ? "text-slate-400 hover:bg-slate-900 hover:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services submenu */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center justify-between w-full rounded-xl px-4 py-2.5 text-base font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                    servicesOpen
                      ? "bg-brand-warm/10 text-brand-warm"
                      : theme === "dark"
                      ? "text-slate-400 hover:bg-slate-900 hover:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                          theme === "dark"
                            ? "text-slate-500 hover:bg-slate-900 hover:text-white"
                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Case Studies — prominent */}
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-brand-warm py-2.5 text-base font-semibold text-white shadow-md hover:bg-brand-warm/90 transition-all duration-200"
              >
                Case Studies
              </Link>
              <div className="pt-2">
                <a
                  href={portfolioConfig.personal.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-brand-warm py-3 text-base font-semibold text-white shadow-md hover:bg-brand-warm/90 transition-all duration-200 cursor-pointer"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
