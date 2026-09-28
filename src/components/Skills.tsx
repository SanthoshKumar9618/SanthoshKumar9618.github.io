'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const prefersReduced = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].id);

  const active = skillsCategories.find(c => c.id === activeCategory)!;

  return (
    <section
      id="skills"
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
          <span className="label-mono">05 / SKILLS</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
          className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-12"
        >
          Technical skills.
        </motion.h2>

        <div className="grid lg:grid-cols-[200px_1fr] gap-10">

          {/* ── Category tabs (left) ── */}
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillsCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: prefersReduced ? 0 : i * 0.05 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 lg:shrink text-left px-3 py-2.5 rounded text-xs font-mono transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[var(--bg-white)] border border-[var(--border)] text-[var(--text)] shadow-subtle'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg-white)]'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>

          {/* ── Skills grid (right) ── */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: prefersReduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.25 }}
          >
            <div className="mb-4">
              <p className="font-heading font-700 text-lg text-[var(--text)] mb-1">{active.name}</p>
              <p className="text-sm text-[var(--text-muted)]">{active.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {active.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: prefersReduced ? 0 : i * 0.03, duration: 0.2 }}
                  className="px-3.5 py-2 border border-[var(--border)] rounded text-sm font-mono text-[var(--text-muted)] bg-[var(--bg-white)] hover:border-[var(--border-strong)] hover:text-[var(--text)] transition-colors duration-150"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* All skills overview (desktop) */}
            <div className="hidden lg:grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[var(--border)]">
              {skillsCategories.map(cat => (
                <div key={cat.id}>
                  <p className="label-mono mb-3">{cat.name}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.slice(0, 5).map(skill => (
                      <span key={skill} className="tech-tag">{skill}</span>
                    ))}
                    {cat.skills.length > 5 && (
                      <span className="tech-tag text-[var(--text-faint)]">+{cat.skills.length - 5}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
