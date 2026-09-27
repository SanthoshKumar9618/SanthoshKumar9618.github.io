'use client';

import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUp, Terminal } from 'lucide-react';
import { LinkedinIcon, GithubIcon, LeetCodeIcon, NaukriIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1E2935] bg-[#080B10] py-12 relative z-10 font-mono text-xs text-primary-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#1E2935]">
          
          {/* Identity & Positioning */}
          <div>
            <div className="flex items-center gap-2 text-primary font-heading font-bold text-base">
              <span className="w-2 h-2 rounded-full bg-cyan"></span>
              <span>{personalData.name}</span>
            </div>
            <div className="text-xs text-primary mt-1">
              Software Engineer
            </div>
            <div className="text-[11px] text-primary-muted mt-0.5">
              Backend • Python • Full Stack • AI
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={personalData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <LeetCodeIcon className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>

            <a
              href={personalData.socials.naukri}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan transition-colors"
            >
              <NaukriIcon className="w-3.5 h-3.5" />
              <span>Naukri</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11161D] border border-[#1E2935] hover:border-cyan text-primary-muted hover:text-primary transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-primary-muted/60">
          <div>
            © 2026 T Santhosh Kumar. All rights reserved.
          </div>
          <div>
            Designed with Next.js, TypeScript, Tailwind CSS & System Architecture principles.
          </div>
        </div>

      </div>
    </footer>
  );
}
