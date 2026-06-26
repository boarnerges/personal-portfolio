"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How I Work", href: "/about" },
    { name: "Case Studies", href: "/projects" },
    { name: "Contact", href: "/contact" },
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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue group-hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(0,64,192,0.15)]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5.5 w-5.5">
              <path d="M12 2L22 12L12 22L2 12Z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight font-heading">
            Segun<span className="text-brand-blue glow-text-blue">.O</span>
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
                  ? "text-brand-blue glow-text-blue"
                  : theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
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

          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-brand-blue px-5 text-sm font-semibold text-white shadow-md hover:bg-brand-blue/90 transition-all duration-200 cursor-pointer hover:shadow-[0_0_15px_rgba(0,64,192,0.3)] hover:scale-[1.02]"
          >
            Book a Call
          </Link>
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
                      ? "bg-brand-blue/10 text-brand-blue"
                      : theme === "dark"
                      ? "text-slate-400 hover:bg-slate-900 hover:text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-brand-blue py-3 text-base font-semibold text-white shadow-md hover:bg-brand-blue/90 transition-all duration-200 cursor-pointer"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
