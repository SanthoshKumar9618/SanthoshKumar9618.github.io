'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

/* Mini architecture pipeline diagram */
function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-white)] shrink-0" />
            <span className="font-mono text-2xs text-[var(--text-muted)] uppercase tracking-wide">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center gap-2 my-0.5">
              <div className="w-px h-3 bg-[var(--border)] ml-[3px]" />
              <span className="font-mono text-2xs text-[var(--text-faint)] ml-0.5">↓</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Projects() {
  const prefersReduced = useReducedMotion();
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
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
          <span className="label-mono">03 / PROJECTS</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
          className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-12"
        >
          Selected projects.
        </motion.h2>

        {/* Project list */}
        <div className="space-y-0 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {projectsData.map((project, i) => {
            const isOpen = activeProject === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: prefersReduced ? 0 : i * 0.08 }}
              >
                {/* Main row */}
                <div className="py-8 grid lg:grid-cols-[80px_1fr_240px] gap-6 lg:gap-10 items-start">

                  {/* Number */}
                  <div className="hidden lg:block pt-1">
                    <span className="font-mono text-3xl font-700 text-[var(--border)] leading-none">{project.number}</span>
                  </div>

                  {/* Center: title + description + tags */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="lg:hidden font-mono text-xs text-[var(--text-faint)]">{project.number}</span>
                      <span className="label-mono">{project.category}</span>
                    </div>
                    <h3 className="font-heading font-700 text-xl sm:text-2xl text-[var(--text)] tracking-tight mb-3 leading-snug">
                      {project.title.replace(/ — /g, ' ')}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 max-w-xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {/* Expand button */}
                    <button
                      onClick={() => setActiveProject(isOpen ? null : project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors cursor-pointer border-b border-transparent hover:border-[var(--accent)] pb-px"
                    >
                      {isOpen ? 'Hide details' : 'View details'}
                    </button>
                  </div>

                  {/* Right: pipeline diagram */}
                  <div className="hidden lg:block pl-6 border-l border-[var(--border)]">
                    <p className="label-mono mb-4">ARCHITECTURE</p>
                    <Pipeline steps={project.pipeline} />
                  </div>
                </div>

                {/* Expandable details */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: prefersReduced ? 0 : 0.28 }}
                    className="overflow-hidden pb-8 lg:pl-[calc(80px+2.5rem)]"
                  >
                    <div className="border border-[var(--border)] rounded bg-[var(--bg-white)] p-6">
                      <p className="label-mono mb-4">HIGHLIGHTS</p>
                      <ul className="space-y-2.5 mb-6">
                        {project.highlights.map((h, j) => (
                          <li key={j} className="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed">
                            <span className="font-mono text-[var(--border-strong)] shrink-0">—</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="label-mono mb-2.5">TECHNICAL OVERVIEW</p>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {project.architectureDetails}
                      </p>

                      {/* Mobile pipeline */}
                      <div className="lg:hidden mt-6 pt-6 border-t border-[var(--border)]">
                        <p className="label-mono mb-4">PIPELINE</p>
                        <Pipeline steps={project.pipeline} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
