'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Terminal, Server, Code2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import ArchitectureVisualization from './ArchitectureVisualization';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, NaukriIcon } from './SocialIcons';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#11161D] border border-[#1E2935] text-cyan text-xs font-mono mb-6">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wider uppercase">{personalData.label}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-primary leading-[1.12]">
              Building scalable <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan to-primary">
                backend systems
              </span> <br />
              and AI-powered applications.
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-primary-muted text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {personalData.supportingText}
            </p>

            {/* Location & Status Tag */}
            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-primary-muted">
              <span className="flex items-center gap-1.5 text-primary">
                <MapPin className="w-3.5 h-3.5 text-cyan" />
                {personalData.location}
              </span>
              <span className="text-[#273544]">•</span>
              <span className="text-success">{personalData.relocationStatus}</span>
            </div>

            {/* Tech Stack Line */}
            <div className="mt-7 w-full">
              <div className="text-[11px] font-mono uppercase tracking-wider text-primary-muted/70 mb-2">
                Core Stack:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {personalData.techStackLine.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#0D1117] text-primary border border-[#1E2935] hover:border-[#273544] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan text-[#080B10] font-mono font-bold text-xs sm:text-sm hover:bg-cyan/90 transition-all shadow-cyan-glow cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#11161D] border border-[#1E2935] hover:border-cyan text-primary font-mono text-xs sm:text-sm transition-all"
              >
                <GithubIcon className="w-4 h-4 text-primary-muted" />
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-primary-muted" />
              </a>
            </div>

            {/* Secondary Profile Links */}
            <div className="mt-8 pt-6 border-t border-[#1E2935]/80 w-full flex flex-wrap items-center gap-5 text-xs font-mono">
              <span className="text-primary-muted/60">PROFILES:</span>
              
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary-muted hover:text-cyan transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary-muted hover:text-cyan transition-colors"
              >
                <LeetCodeIcon className="w-3.5 h-3.5" />
                <span>LeetCode</span>
              </a>

              <a
                href={personalData.socials.naukri}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-primary-muted hover:text-cyan transition-colors"
              >
                <NaukriIcon className="w-3.5 h-3.5" />
                <span>Naukri</span>
              </a>
            </div>

          </div>

          {/* Right Column: Animated System Architecture Visualization */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ArchitectureVisualization />
          </div>

        </div>
      </div>
    </section>
  );
}
