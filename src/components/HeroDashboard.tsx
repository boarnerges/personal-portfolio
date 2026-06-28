"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Mail, Smartphone, CheckCircle, Calendar, Bell, Users } from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-6 lg:gap-8 items-center">
        {/* BEFORE — Problem State */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-xs font-semibold mb-3 flex items-center space-x-2"
            style={{ color: "var(--card-text-muted)" }}
          >
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span>BEFORE — Scattered Leads</span>
          </div>
          <div className="rounded-2xl border-2 border-red-200 dark:border-red-900/40 overflow-hidden shadow-xl"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            {/* Mobile message chaos */}
            <div className="p-4 space-y-3">
              <div className="flex items-start space-x-2 opacity-70">
                <Smartphone className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold mb-1" style={{ color: "var(--card-text-muted)" }}>WhatsApp</div>
                  <div className="text-xs p-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/20 leading-relaxed"
                    style={{ color: "var(--card-text-secondary)" }}
                  >
                    Hi, I saw your page on Instagram. Do you still have slots for <strong className="font-semibold" style={{ color: "var(--card-text-primary)" }}>event decoration</strong> in December?
                  </div>
                  <div className="text-[10px] mt-0.5 text-right opacity-50" style={{ color: "var(--card-text-muted)" }}>2 days ago • unread</div>
                </div>
              </div>

              <div className="flex items-start space-x-2 opacity-60">
                <Mail className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold mb-1" style={{ color: "var(--card-text-muted)" }}>Email</div>
                  <div className="text-xs p-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/20 leading-relaxed"
                    style={{ color: "var(--card-text-secondary)" }}
                  >
                    Request for quotation — 3-bedroom apartment painting
                  </div>
                  <div className="text-[10px] mt-0.5 text-right opacity-50" style={{ color: "var(--card-text-muted)" }}>Yesterday • unread</div>
                </div>
              </div>

              <div className="flex items-start space-x-2 opacity-50">
                <MessageSquare className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-[11px] font-semibold mb-1" style={{ color: "var(--card-text-muted)" }}>Instagram DM</div>
                  <div className="text-xs p-2 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/20 leading-relaxed"
                    style={{ color: "var(--card-text-secondary)" }}
                  >
                    Please what&apos;s your number? I need a website for my business
                  </div>
                  <div className="text-[10px] mt-0.5 text-right opacity-50" style={{ color: "var(--card-text-muted)" }}>3 days ago • read</div>
                </div>
              </div>

              <div className="pt-1 flex items-center space-x-1 text-[11px] font-medium opacity-60"
                style={{ color: "var(--card-text-muted)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                <span>4 more unread enquiries</span>
              </div>
            </div>

            {/* Loss indicator */}
            <div className="border-t px-4 py-3"
              style={{ borderColor: "var(--card-border)", backgroundColor: "color-mix(in srgb, var(--card-bg) 95%, transparent)" }}
            >
              <div className="text-[11px] font-medium flex items-center space-x-1"
                style={{ color: "var(--card-text-muted)" }}
              >
                <span>Leads scattered everywhere. Opportunities slip away.</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Arrow — visible on desktop */}
        <div className="hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <ArrowRight className="h-8 w-8 lg:h-12 lg:w-12"
              style={{ color: "var(--card-text-muted)" }}
            />
          </motion.div>
        </div>

        {/* AFTER — Solution State */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="text-xs font-semibold mb-3 flex items-center space-x-2"
            style={{ color: "var(--card-text-muted)" }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>AFTER — Organized Dashboard</span>
          </div>
          <div className="rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/40 overflow-hidden shadow-2xl"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            {/* Dashboard header */}
            <div className="flex items-center justify-between px-4 py-3 border-b"
              style={{ borderColor: "var(--card-border)" }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-1">
                  <div className="h-6 w-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Users className="h-3 w-3 text-brand-primary" />
                  </div>
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--card-text-primary)" }}>Enquiry Dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="h-3.5 w-3.5" style={{ color: "var(--card-text-muted)" }} />
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 space-y-3">
              {/* Lead 1 */}
              <div className="flex items-center justify-between p-3 rounded-xl border"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--card-text-primary)" }}>Interior Design Project</div>
                    <div className="text-[10px]" style={{ color: "var(--card-text-muted)" }}>Sarah — Instagram DM</div>
                  </div>
                </div>
                <div className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                  Qualified
                </div>
              </div>

              {/* Lead 2 */}
              <div className="flex items-center justify-between p-3 rounded-xl border"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--card-text-primary)" }}>Website Package — ABC Ltd</div>
                    <div className="text-[10px]" style={{ color: "var(--card-text-muted)" }}>Follow-up due tomorrow • 10:00 AM</div>
                  </div>
                </div>
                <div className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                  Follow-up
                </div>
              </div>

              {/* Lead 3 */}
              <div className="flex items-center justify-between p-3 rounded-xl border"
                style={{ borderColor: "var(--card-border)" }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--card-text-primary)" }}>3-Bedroom Painting Quote</div>
                    <div className="text-[10px]" style={{ color: "var(--card-text-muted)" }}>Estimate sent • Awaiting response</div>
                  </div>
                </div>
                <div className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary">
                  Proposal
                </div>
              </div>
            </div>

            {/* Outcome indicator */}
            <div className="border-t px-4 py-3"
              style={{ borderColor: "var(--card-border)", backgroundColor: "color-mix(in srgb, var(--card-bg) 95%, transparent)" }}
            >
              <div className="text-[11px] font-medium flex items-center space-x-1"
                style={{ color: "var(--card-text-muted)" }}
              >
                <span>Everything organized. Nothing falls through the cracks.</span>
              </div>
            </div>
          </div>

          {/* Pulse glow */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-emerald-500/5 blur-2xl dark:bg-emerald-500/10" />
        </motion.div>
      </div>
    </div>
  );
}
