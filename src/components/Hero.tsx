'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

/* ──────────────────────────────────────────
   ENGINEERING SYSTEM DIAGRAM (right panel)
   ────────────────────────────────────────── */
const systemLayers = [
  { label: 'CLIENT',         sub: 'ReactJS / Mobile'    },
  { label: 'API GATEWAY',    sub: 'FastAPI + AsyncIO'    },
  { label: 'BUSINESS LOGIC', sub: 'Python Services'      },
  { label: 'DATA LAYER',     sub: 'PostgreSQL + Redis'   },
  { label: 'AI PIPELINE',    sub: 'RAG / LLM'            },
];

function SystemDiagram() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[260px] mx-auto lg:mx-0">
      {/* Header label */}
      <p className="label-mono mb-5">ENGINEERING PROFILE</p>

      <div className="flex flex-col gap-0">
        {systemLayers.map((layer, i) => (
          <React.Fragment key={layer.label}>
            {/* Node */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: prefersReduced ? 0 : 0.4 + i * 0.1, duration: 0.4 }}
              className="flex items-start gap-3"
            >
              {/* Left: connector line */}
              <div className="flex flex-col items-center w-5 shrink-0 mt-2.5">
                <div className="w-2 h-2 rounded-full border-2 border-[var(--border-strong)] bg-[var(--bg-white)]" />
                {i < systemLayers.length - 1 && (
                  <div className="w-px flex-1 bg-[var(--border)] mt-1 min-h-[28px]" />
                )}
              </div>

              {/* Content */}
              <div className="pb-5">
                <p className="font-mono text-2xs font-600 tracking-[0.12em] text-[var(--text)] uppercase">{layer.label}</p>
                <p className="font-mono text-2xs text-[var(--text-muted)] mt-0.5">{layer.sub}</p>
              </div>
            </motion.div>

            {/* Flow dot between nodes */}
            {!prefersReduced && i < systemLayers.length - 1 && (
              <div
                className="flow-dot w-1 h-1 rounded-full bg-[var(--accent)] ml-[10px] -mt-4 mb-1 opacity-0"
                style={{ animationDelay: `${i * 0.44}s` }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────── */
export default function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: prefersReduced ? 0 : delay, ease: 'easeOut' as const },
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[var(--bg)] pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_280px] gap-16 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="max-w-2xl">

            {/* Label */}
            <motion.p {...fadeUp(0)} className="label-mono mb-6">
              SOFTWARE ENGINEER
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading font-800 text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.1] tracking-tight text-[var(--text)] mb-6"
            >
              I build reliable<br />
              backend systems<br />
              <span className="text-[var(--text-muted)] font-600">and full-stack</span><br />
              <span className="text-[var(--text-muted)] font-600">applications.</span>
            </motion.h1>

            {/* Tech line */}
            <motion.p {...fadeUp(0.2)} className="font-mono text-xs text-[var(--text-muted)] tracking-widest mb-6">
              Python · FastAPI · PostgreSQL · Redis · React
            </motion.p>

            {/* Location */}
            <motion.div {...fadeUp(0.25)} className="flex items-center gap-1.5 text-sm text-[var(--text-muted)] mb-8">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bangalore, India</span>
              <span className="text-[var(--border-strong)] mx-1">·</span>
              <span>Open to relocation</span>
            </motion.div>

            {/* Editorial annotation */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-[var(--text-muted)] text-sm leading-relaxed border-l-2 border-[var(--border-strong)] pl-4 mb-10 max-w-sm italic"
            >
              Currently building backend systems<br />
              and AI-powered applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white text-sm font-mono rounded hover:bg-[#1152cc] transition-colors duration-200 cursor-pointer"
              >
                View Projects
              </button>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-[var(--border)] text-[var(--text)] text-sm font-mono rounded hover:border-[var(--border-strong)] hover:bg-[var(--bg-white)] transition-all duration-200"
              >
                GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-[var(--border)] text-[var(--text)] text-sm font-mono rounded hover:border-[var(--border-strong)] hover:bg-[var(--bg-white)] transition-all duration-200"
              >
                LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: System diagram ── */}
          <motion.div
            {...fadeUp(0.5)}
            className="hidden lg:block pt-6 pl-8 border-l border-[var(--border)]"
          >
            <SystemDiagram />

            {/* Bottom: focus areas */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] grid grid-cols-2 gap-3">
              {[
                { area: 'BACKEND',   detail: 'Python / FastAPI' },
                { area: 'DATA',      detail: 'PostgreSQL / Redis' },
                { area: 'REAL-TIME', detail: 'WebSockets / AsyncIO' },
                { area: 'AI',        detail: 'RAG / LLM Apps' },
              ].map(f => (
                <div key={f.area} className="space-y-0.5">
                  <p className="font-mono text-2xs font-600 tracking-[0.1em] text-[var(--text)]">{f.area}</p>
                  <p className="font-mono text-2xs text-[var(--text-muted)]">{f.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom: scroll indicator */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-16 flex items-center gap-3 text-[var(--text-faint)] text-xs font-mono"
        >
          <div className="h-px w-12 bg-[var(--border)]" />
          <span>scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
