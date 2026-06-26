"use client";

import React from "react";

export default function HeroFloatingCards() {
  return (
    <>
      {/* Desktop: stacked cards */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        {/* New Enquiry Card */}
        <div className="relative animate-[slideUp_0.6s_ease-out]" style={{ zIndex: 3 }}>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-3.5 w-64 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">New Enquiry</span>
              </div>
              <span className="text-[10px] text-slate-400">2 mins ago</span>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2 space-y-1">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Interior Design Project</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Budget: ₦2.5M · 3 rooms</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">From: Sarah — Instagram DM</p>
            </div>
          </div>
        </div>

        {/* Follow-up Reminder Card */}
        <div className="relative animate-[slideUp_0.6s_ease-out_0.15s_both] -mt-16" style={{ zIndex: 2 }}>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-3.5 w-64 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">Follow-up Due</span>
              </div>
              <span className="text-[10px] text-slate-400">Tomorrow</span>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2 space-y-1">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Proposal Expires Tomorrow</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Call scheduled · 10:00 AM</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">ABC Ltd — Website Design Package</p>
            </div>
          </div>
        </div>

        {/* Automation Completed Card */}
        <div className="relative animate-[slideUp_0.6s_ease-out_0.3s_both] -mt-16" style={{ zIndex: 1 }}>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-3.5 w-64 backdrop-blur-md">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="text-xs font-semibold text-brand-blue">Automation Completed</span>
              </div>
              <span className="text-[10px] text-slate-400">Just now</span>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-2 space-y-1">
              <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                <span>✓</span><span>Lead added to CRM</span>
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                <span>✓</span><span>Welcome email sent</span>
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                <span>✓</span><span>Task assigned to team</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: single card inline */}
      <div className="lg:hidden mt-8 mx-auto max-w-sm">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-3.5 backdrop-blur-md">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">New Enquiry</span>
            </div>
            <span className="text-[10px] text-slate-400">2 mins ago</span>
          </div>
          <div className="border-t border-slate-100 dark:border-slate-800 pt-2 space-y-1">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Interior Design Project</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Budget: ₦2.5M · 3 rooms</p>
            <p className="text-xs text-slate-400 dark:text-slate-500">From: Sarah — Instagram DM</p>
          </div>
        </div>
      </div>
    </>
  );
}
