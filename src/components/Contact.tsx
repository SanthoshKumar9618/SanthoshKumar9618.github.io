'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const prefersReduced = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const socials = [
    { label: 'LinkedIn', href: personalData.socials.linkedin },
    { label: 'GitHub',   href: personalData.socials.github   },
    { label: 'LeetCode', href: personalData.socials.leetcode  },
    { label: 'Naukri',   href: personalData.socials.naukri    },
  ];

  return (
    <section
      id="contact"
      className="py-28 bg-[var(--bg-white)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="label-mono">06 / CONTACT</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">

          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
              className="font-heading font-800 text-4xl sm:text-5xl text-[var(--text)] tracking-tight leading-tight mb-6"
            >
              Let's talk<br />software.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.1 }}
              className="text-[var(--text-muted)] text-sm leading-relaxed mb-10 max-w-md"
            >
              I'm open to Software Engineering, Backend Engineering, Python Full Stack, and AI application opportunities. Feel free to reach out.
            </motion.p>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.15 }}
              className="flex items-center gap-3"
            >
              <a
                href={`mailto:${personalData.email}`}
                className="font-heading font-600 text-xl sm:text-2xl text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {personalData.email}
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1 text-xs font-mono text-[var(--text-faint)] hover:text-[var(--text)] transition-colors cursor-pointer border border-[var(--border)] rounded px-2 py-1"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-3 h-3 text-[var(--accent-green)]" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </motion.div>
          </div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.2 }}
          >
            <p className="label-mono mb-5">FIND ME ON</p>
            <div className="grid grid-cols-2 gap-2">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 border border-[var(--border)] rounded text-sm font-mono text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-150 group"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                </a>
              ))}
            </div>

            <div className="mt-6 p-4 border border-[var(--border)] rounded bg-[var(--bg)]">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green)] inline-block" />
                Available for new opportunities
              </div>
              <p className="font-mono text-2xs text-[var(--text-faint)] mt-1.5">
                Bangalore, India · Open to Relocation
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
