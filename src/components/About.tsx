'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { aboutData, educationData } from '../data/portfolioData';

export default function About() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, delay: prefersReduced ? 0 : delay },
  });

  return (
    <section
      id="about"
      className="py-24 bg-[var(--bg-white)] border-t border-[var(--border)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-14">
          <span className="label-mono">01 / ABOUT</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-16">

          {/* ── LEFT: text ── */}
          <div>
            <motion.h2
              {...fadeUp(0.05)}
              className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] leading-tight tracking-tight mb-8"
            >
              A little about me.
            </motion.h2>

            <div className="space-y-5">
              {[
                "I'm a Software Engineer focused on backend engineering and Python-based full-stack development.",
                "I work with APIs, databases, real-time systems, and modern application architectures, while also exploring practical applications of Generative AI.",
                "My current work involves building production backend services, real-time communication workflows, RAG pipelines, and AI-powered applications — mostly in Python and FastAPI.",
                "I care about writing code that's easy to understand, behaves predictably, and is maintainable long-term."
              ].map((para, i) => (
                <motion.p
                  key={i}
                  {...fadeUp(0.1 + i * 0.06)}
                  className="text-[var(--text-muted)] leading-relaxed text-[0.95rem]"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Specialization grid */}
            <motion.div {...fadeUp(0.35)} className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aboutData.cards.map((card, i) => (
                <div
                  key={card.number}
                  className="p-4 border border-[var(--border)] rounded bg-[var(--bg)] hover:border-[var(--border-strong)] transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-2xs text-[var(--text-faint)]">{card.number}</span>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>
                  <p className="font-mono text-2xs font-600 tracking-widest text-[var(--text)] mb-2.5 uppercase">{card.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.skills.slice(0, 5).map(skill => (
                      <span key={skill} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Education + quick facts ── */}
          <motion.div {...fadeUp(0.2)} className="space-y-8">

            {/* Education */}
            <div>
              <p className="label-mono mb-4">EDUCATION</p>
              <div className="space-y-5">
                {educationData.map((edu, i) => (
                  <div key={i} className="border-l border-[var(--border)] pl-4">
                    <p className="font-mono text-2xs text-[var(--text-faint)] mb-1">{edu.period}</p>
                    <p className="text-sm font-600 text-[var(--text)] leading-snug">{edu.degree}</p>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{edu.institution}</p>
                    <p className="font-mono text-2xs text-[var(--accent)] mt-1">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div>
              <p className="label-mono mb-4">QUICK FACTS</p>
              <div className="space-y-2.5">
                {[
                  { label: 'Location',  value: 'Bangalore, India' },
                  { label: 'Status',    value: 'Open to Relocation' },
                  { label: 'Focus',     value: 'Backend & Full-Stack' },
                  { label: 'Languages', value: 'Python · JavaScript' },
                ].map(f => (
                  <div key={f.label} className="flex gap-3 text-xs">
                    <span className="font-mono text-[var(--text-faint)] w-20 shrink-0">{f.label}</span>
                    <span className="text-[var(--text-muted)]">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
