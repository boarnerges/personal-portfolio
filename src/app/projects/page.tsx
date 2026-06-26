"use client";

import React, { useState } from "react";
import { portfolioConfig, Project } from "@/config/portfolio";
import { useTheme } from "@/components/ThemeContext";
import { Search, ExternalLink, ChevronDown, ChevronUp, Sparkles, TrendingUp } from "lucide-react";

export default function Projects() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const categories = ["All", "Web App", "Lead Gen", "Inventory", "Portal"];

  const filteredProjects = portfolioConfig.projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 rounded-full px-3 py-1 text-xs font-semibold leading-5 text-brand-blue bg-brand-blue/10 border border-brand-blue/20">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Case Studies</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight font-heading">
          Custom Solutions Portfolio
        </h1>
        <p className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-slate-650"}`}>
          Browse software systems built specifically to improve search engine rankings, acquire clients directly, and automate back-office workflows.
        </p>
      </div>

      {/* Filters & Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                  : theme === "dark"
                  ? "bg-slate-900/60 text-slate-350 hover:bg-slate-800 border border-slate-800"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="h-4.5 w-4.5" />
          </span>
          <input
            type="text"
            placeholder="Search case studies..."
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

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                id={project.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-slate-900/35 border-slate-800 hover:border-brand-blue/25"
                    : "bg-white border-slate-200 hover:border-brand-blue/25 hover:shadow-md"
                }`}
              >
                {/* Header info */}
                <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-transparent">
                  <div className="space-y-3.5 max-w-xl">
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        theme === "dark" ? "bg-slate-800 text-slate-350" : "bg-slate-100 text-slate-650"
                      }`}>
                        {project.category}
                      </span>
                      <div className="inline-flex items-center space-x-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold text-brand-blue bg-brand-blue/10">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>{project.impact}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl font-bold font-heading">
                      {project.title}
                    </h2>
                    
                    <p className={`text-sm leading-relaxed ${
                      theme === "dark" ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Top Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className={`inline-flex items-center justify-center space-x-1 px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                        theme === "dark"
                          ? "bg-slate-850 text-slate-200 hover:bg-slate-800 border border-slate-750"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                      }`}
                    >
                      <span>{isExpanded ? "Collapse Case" : "Read Case Study"}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-brand-blue" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-brand-blue" />
                      )}
                    </button>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-10 w-10 flex items-center justify-center rounded-xl border transition-all duration-200 cursor-pointer ${
                        theme === "dark"
                          ? "bg-slate-850 hover:bg-slate-800 border-slate-750 text-slate-300 hover:text-white"
                          : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-650 hover:text-slate-900"
                      }`}
                      title="GitHub Repository"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                </div>

                {/* Expandable Case Study Panel */}
                {isExpanded && (
                  <div className={`p-6 sm:p-8 border-t transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-slate-950/40 border-slate-850"
                      : "bg-slate-50/50 border-slate-150"
                  }`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left details */}
                      <div className="lg:col-span-2 space-y-4">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800">
                          <img 
                            src={`/images/${project.image}.jpg`} 
                            alt={project.title}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        {project.longDescription.split('\n\n').map((section, idx) => {
                          const isChallenge = section.startsWith('**The Challenge**');
                          const isSolution = section.startsWith('**My Solution**');
                          const isOutcome = section.startsWith('**The Outcome**');
                          
                          if (isChallenge || isSolution || isOutcome) {
                            const title = section.match(/\*\*(.*?)\*\*/)?.[1] || '';
                            const body = section.replace(/\*\*(.*?)\*\*/, '').trim();
                            const color = isChallenge 
                              ? 'text-amber-600 dark:text-amber-400' 
                              : isSolution 
                                ? 'text-brand-blue' 
                                : 'text-emerald-600 dark:text-emerald-400';
                            const icon = isChallenge ? '!' : isSolution ? '→' : '✓';
                            return (
                              <div key={idx} className="space-y-1.5">
                                <h4 className={`text-sm font-bold ${color} flex items-center space-x-1.5`}>
                                  <span>{icon}</span>
                                  <span>{title}</span>
                                </h4>
                                <p className={`text-sm leading-relaxed whitespace-pre-line ${
                                  theme === "dark" ? "text-slate-350" : "text-slate-650"
                                }`}>
                                  {body.split(/(\*\*.*?\*\*)/).map((part, i) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                      return <strong key={i} className="text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
                                    }
                                    return part;
                                  })}
                                </p>
                              </div>
                            );
                          }
                          return (
                            <p key={idx} className={`text-sm leading-relaxed whitespace-pre-line ${
                              theme === "dark" ? "text-slate-350" : "text-slate-650"
                            }`}>
                              {section}
                            </p>
                          );
                        })}
                      </div>

                      {/* Right metadata box */}
                      <div className={`p-6 rounded-xl border ${
                        theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                      } space-y-4`}>
                        <div className="space-y-1.5">
                          <h4 className={`text-xs font-semibold uppercase tracking-wider ${
                            theme === "dark" ? "text-slate-400" : "text-slate-550"
                          }`}>
                            Key System Output
                          </h4>
                          <p className="text-sm font-bold text-brand-blue flex items-center space-x-1.5">
                            <span className="h-2 w-2 rounded-full bg-brand-blue" />
                            <span>{project.impact}</span>
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className={`text-xs font-semibold uppercase tracking-wider ${
                            theme === "dark" ? "text-slate-400" : "text-slate-550"
                          }`}>
                            Key Capabilities
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                  theme === "dark"
                                    ? "bg-slate-800 text-slate-300"
                                    : "bg-slate-100 text-slate-650"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <a
                            href={project.liveUrl}
                            className="flex items-center justify-center space-x-2 w-full py-2.5 text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue/90 rounded-lg transition-all duration-200 cursor-pointer"
                          >
                            <span>Launch Live System Demo</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className={theme === "dark" ? "text-slate-500" : "text-slate-400"}>
            No case studies found matching current filter or search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
