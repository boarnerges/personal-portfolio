"use client";

import React, { useState } from "react";
import { portfolioConfig, BlogPost } from "@/config/portfolio";
import { useTheme } from "@/components/ThemeContext";
import { Search, Calendar, Clock, BookOpen, ChevronLeft, ArrowRight, Sparkles } from "lucide-react";

export default function Blog() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ["All", "Business", "Visibility", "Development"];

  const filteredPosts = portfolioConfig.blog.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24">
      {activePost ? (
        /* Full Article View */
        <article className="max-w-3xl mx-auto space-y-8">
          <button
            onClick={() => setActivePost(null)}
            className={`inline-flex items-center space-x-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
              theme === "dark" ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ChevronLeft className="h-4.5 w-4.5 text-brand-blue" />
            <span>Back to Article Directory</span>
          </button>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                theme === "dark" ? "bg-slate-800 text-slate-350" : "bg-slate-100 text-slate-650"
              }`}>
                {activePost.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold font-heading leading-tight">
              {activePost.title}
            </h1>

            <div className={`flex items-center space-x-6 text-xs ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4 text-brand-blue" />
                <span>{activePost.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-brand-blue" />
                <span>{activePost.readTime}</span>
              </div>
            </div>
          </div>

          <div className={`border-t pt-8 leading-relaxed text-base sm:text-lg space-y-6 ${
            theme === "dark" ? "text-slate-300 border-slate-900" : "text-slate-700 border-slate-200"
          }`}>
            <p className="font-semibold text-lg leading-normal">
              {activePost.excerpt}
            </p>
            <p className="whitespace-pre-line leading-relaxed">
              {activePost.content}
            </p>
            <div className={`p-6 rounded-2xl border ${
              theme === "dark" ? "bg-slate-900/40 border-slate-800" : "bg-slate-50 border-slate-200"
            } space-y-4`}>
              <h4 className="font-bold text-sm">Need a customized system built for your business?</h4>
              <p className="text-xs text-slate-400">
                I help service businesses launch lead-generating websites and automate their operations. Let's talk about your setup.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center space-x-1 text-xs font-bold text-brand-blue hover:underline cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </article>
      ) : (
        /* Blog Directory Listing */
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-semibold leading-5 text-brand-blue bg-brand-blue/10 border border-brand-blue/20">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Insights & Tech Philosophy</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight font-heading">
              Digital Systems Blog
            </h1>
            <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-650"}`}>
              Articles covering lead-generating websites, enquiry management systems, and business automation for service businesses.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Category selection */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-brand-blue text-white"
                      : theme === "dark"
                      ? "bg-slate-900/60 text-slate-350 hover:bg-slate-800 border border-slate-800"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search filter */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl outline-none transition-all duration-200 border ${
                  theme === "dark"
                    ? "bg-slate-900/40 text-white border-slate-850 focus:border-brand-blue/50 focus:bg-slate-900"
                    : "bg-white text-slate-900 border-slate-200 focus:border-brand-blue/50 focus:bg-white"
                }`}
              />
            </div>
          </div>

          {/* Grid of articles */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:scale-[1.01] hover:shadow-lg transition-all duration-300 cursor-pointer ${
                    theme === "dark"
                      ? "bg-slate-900/35 border-slate-800 hover:border-brand-blue/20"
                      : "bg-white border-slate-200 hover:border-brand-blue/20"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] uppercase tracking-wider font-semibold rounded-full px-2.5 py-0.5 ${
                        theme === "dark" ? "bg-slate-850 text-slate-350 border border-slate-800" : "bg-slate-100 text-slate-650"
                      }`}>
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold font-heading line-clamp-2 hover:text-brand-blue transition-colors duration-200">
                      {post.title}
                    </h2>

                    <p className={`text-sm leading-relaxed line-clamp-3 ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div className={`flex items-center justify-between pt-4 border-t text-[11px] ${
                    theme === "dark" ? "border-slate-850 text-slate-450" : "border-slate-150 text-slate-500"
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-3.5 w-3.5 text-brand-blue" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3.5 w-3.5 text-brand-blue" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <span className="inline-flex items-center space-x-1 font-semibold text-brand-blue hover:underline">
                      <span>Read Article</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
                No blog posts found matching current search.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
