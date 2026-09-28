'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { engineeringPhilosophy } from '../data/portfolioData';

const principles = [
  {
    number: '01',
    title: 'CLARITY',
    description: 'Design systems that are easy to understand before making them complex. Clear naming, predictable behavior, and readable code.',
  },
  {
    number: '02',
    title: 'RELIABILITY',
    description: 'Build APIs and services that behave predictably under normal conditions and degrade gracefully when something fails.',
  },
  {
    number: '03',
    title: 'PERFORMANCE',
    description: 'Use appropriate caching, asynchronous processing, and efficient database access. Optimize when there is evidence to do so.',
  },
  {
    number: '04',
    title: 'MAINTAINABILITY',
    description: 'Prefer clean boundaries, reusable components, and understandable code over clever solutions that are hard to modify.',
  },
];

export default function EngineeringPhilosophy() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="engineering"
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
          <span className="label-mono">04 / ENGINEERING</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
          className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-16"
        >
          How I approach software.
        </motion.h2>

        {/* Principles — horizontal on desktop, stacked on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--border)] rounded divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: prefersReduced ? 0 : 0.1 + i * 0.08 }}
              className="p-6 lg:p-7 bg-[var(--bg-white)] hover:bg-[var(--bg)] transition-colors duration-200 group"
            >
              <span className="font-mono text-2xs text-[var(--text-faint)] mb-4 block">{p.number}</span>
              <h3 className="font-mono text-xs font-600 tracking-[0.15em] text-[var(--text)] mb-3 uppercase">
                {p.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
