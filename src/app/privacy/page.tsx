import React from "react";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24">
      <div className="space-y-2 mb-12">
        <Link href="/" className="text-sm text-brand-blue hover:underline">&larr; Back</Link>
        <h1 className="text-4xl font-bold tracking-tight font-heading text-slate-900 dark:text-white">Privacy Policy</h1>
      </div>
      <div className="space-y-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <p>This privacy policy explains how Segun Owolabi collects, uses, and protects your information when you use this website or contact me through it.</p>
        
        <h2 className="text-lg font-bold font-heading text-slate-800 dark:text-white">Information I Collect</h2>
        <p>When you submit the contact form, I collect your name, email address, and project details. This information is used solely to respond to your enquiry.</p>
        
        <h2 className="text-lg font-bold font-heading text-slate-800 dark:text-white">How I Use Your Information</h2>
        <p>Your information is used only to communicate with you about your project enquiry. I do not share your data with third parties, sell it, or use it for marketing purposes without your consent.</p>
        
        <h2 className="text-lg font-bold font-heading text-slate-800 dark:text-white">Data Storage</h2>
        <p>Contact form submissions are stored securely and retained only as long as needed to complete your project or respond to your enquiry. You may request deletion of your data at any time by emailing olujawo1996@gmail.com.</p>
        
        <h2 className="text-lg font-bold font-heading text-slate-800 dark:text-white">Cookies</h2>
        <p>This website uses a theme preference cookie (dark/light mode) stored locally in your browser. No tracking cookies, analytics cookies, or third-party cookies are used.</p>
        
        <h2 className="text-lg font-bold font-heading text-slate-800 dark:text-white">Third-Party Services</h2>
        <p>This website is hosted on Vercel. Vercel may collect standard server logs (IP address, browser type, pages visited) for operational purposes. Please refer to Vercel&apos;s privacy policy for more details.</p>
        
        <h2 className="text-lg font-bold font-heading text-slate-800 dark:text-white">Contact</h2>
        <p>For questions about this policy or to request data deletion, contact: <a href="mailto:olujawo1996@gmail.com" className="text-brand-blue hover:underline">olujawo1996@gmail.com</a></p>
        
        <p className="text-xs text-slate-500 dark:text-slate-500 pt-6">Last updated: June 2026</p>
      </div>
    </div>
  );
}
