'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

export default function Experience() {
  const prefersReduced = useReducedMotion();
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="py-24 bg-[var(--bg-white)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-14"
        >
          <span className="label-mono">02 / EXPERIENCE</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
          className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-12"
        >
          Work experience.
        </motion.h2>

        {/* Experience list */}
        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {experienceData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: prefersReduced ? 0 : i * 0.08 }}
            >
              {/* Header row — always visible */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full text-left py-6 flex flex-col sm:flex-row sm:items-start gap-4 group cursor-pointer"
              >
                <div className="sm:w-28 shrink-0">
                  <p className="font-mono text-2xs text-[var(--text-faint)] leading-relaxed">
                    {exp.period}
                  </p>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-heading font-700 text-base text-[var(--text)] leading-snug">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="font-mono text-2xs px-2 py-0.5 border border-[var(--accent)] text-[var(--accent)] rounded-full">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">
                    {exp.company} · {exp.location}
                  </p>

                  {/* Tech tags row */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.technologies.slice(0, 6).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="tech-tag">+{exp.technologies.length - 6}</span>
                    )}
                  </div>
                </div>

                <div className="hidden sm:flex items-center shrink-0 pt-1">
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--text-faint)] transition-transform duration-200 ${expanded === i ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {/* Expandable highlights */}
              <AnimatePresence initial={false}>
                {expanded === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: prefersReduced ? 0 : 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 sm:pl-32">
                      <div className="border-l border-[var(--border)] pl-5">
                        <p className="label-mono mb-3">KEY CONTRIBUTIONS</p>
                        <ul className="space-y-2.5">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed">
                              <span className="font-mono text-[var(--border-strong)] shrink-0 mt-0.5">—</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* All technologies */}
                        {exp.technologies.length > 6 && (
                          <div className="mt-5 pt-4 border-t border-[var(--border)]">
                            <p className="label-mono mb-2.5">FULL STACK</p>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.technologies.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
