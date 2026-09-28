'use client';

import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: 'GitHub',   href: personalData.socials.github   },
    { label: 'LinkedIn', href: personalData.socials.linkedin  },
    { label: 'LeetCode', href: personalData.socials.leetcode  },
    { label: 'Email',    href: personalData.socials.email     },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-white)] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left: Name + year */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[var(--text-faint)]">
            © {year} T Santhosh Kumar
          </span>
          <span className="text-[var(--border-strong)] text-xs">·</span>
          <span className="font-mono text-xs text-[var(--text-faint)]">
            Software Engineer
          </span>
        </div>

        {/* Right: links */}
        <div className="flex items-center gap-4">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors duration-150 flex items-center gap-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
