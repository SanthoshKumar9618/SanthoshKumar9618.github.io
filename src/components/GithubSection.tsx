'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'GitHub',   href: personalData.socials.github,   detail: 'SanthoshKumar9618' },
  { label: 'LeetCode', href: personalData.socials.leetcode,  detail: 'SanthoshKumar96' },
  { label: 'LinkedIn', href: personalData.socials.linkedin,  detail: 'tsanthoshkumar-dev' },
  { label: 'Naukri',   href: personalData.socials.naukri,    detail: 'Profile' },
];

export default function GithubSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="practice"
      className="py-24 bg-[var(--bg)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="label-mono">ENGINEERING PRACTICE</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
          >
            <h2 className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-6">
              Where to find<br />my work.
            </h2>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-sm">
              My code, projects, problem-solving practice, and professional profile are available at the links below.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.15 }}
            className="divide-y divide-[var(--border)] border-y border-[var(--border)]"
          >
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group hover:bg-[var(--bg-white)] px-2 -mx-2 rounded transition-colors duration-150"
              >
                <div>
                  <p className="font-heading font-600 text-[var(--text)] text-sm group-hover:text-[var(--accent)] transition-colors duration-150">
                    {link.label}
                  </p>
                  <p className="font-mono text-2xs text-[var(--text-faint)] mt-0.5">{link.detail}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-faint)] group-hover:text-[var(--accent)] transition-colors duration-150" />
              </a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
