"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="h-8 w-8 bg-brand-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
        <span className="text-white font-bold text-sm tracking-tight">SO</span>
      </div>
      <span className="text-xl font-bold tracking-tight font-heading hidden sm:inline">
        Segun <span className="text-brand-primary">Owolabi</span>
      </span>
    </Link>
  );
}
