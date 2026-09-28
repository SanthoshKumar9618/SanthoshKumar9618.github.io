'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { dsaTopics } from '../data/portfolioData';

/* Two Sum interactive visualizer */
const NUMS = [2, 7, 11, 15];
const TARGET = 9;

function TwoSumViz() {
  const prefersReduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [found, setFound] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const steps = [
    { i: 0, j: 1, sum: NUMS[0] + NUMS[1], label: `${NUMS[0]} + ${NUMS[1]} = ${NUMS[0] + NUMS[1]}` },
    { i: 0, j: 2, sum: NUMS[0] + NUMS[2], label: `${NUMS[0]} + ${NUMS[2]} = ${NUMS[0] + NUMS[2]}` },
  ];

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setStep(0);
    setRunning(false);
    setFound(false);
  };

  const runViz = () => {
    if (running) { reset(); return; }
    setRunning(true);
    setStep(0);
    setFound(false);

    let s = 0;
    intervalRef.current = setInterval(() => {
      s++;
      setStep(s);
      if (s === 1) {
        setFound(true);
        clearInterval(intervalRef.current!);
        setRunning(false);
      }
    }, prefersReduced ? 0 : 1200);
  };

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const activeStep = steps[step] ?? steps[0];

  return (
    <div className="border border-[var(--border)] rounded bg-[var(--bg-white)] p-5">
      <p className="label-mono mb-4">TWO SUM VISUALIZATION</p>

      {/* Array */}
      <div className="flex gap-2 mb-4">
        {NUMS.map((n, i) => {
          const isHighlighted = step > 0 && (i === activeStep.i || i === activeStep.j);
          return (
            <div
              key={i}
              className={`w-10 h-10 flex items-center justify-center font-mono text-sm font-600 border rounded transition-all duration-200 ${
                isHighlighted
                  ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/8'
                  : 'border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg)]'
              }`}
            >
              {n}
            </div>
          );
        })}
      </div>

      {/* Target & current sum */}
      <div className="font-mono text-xs text-[var(--text-muted)] space-y-1 mb-4">
        <p>Target = {TARGET}</p>
        {step > 0 && <p className="text-[var(--text)]">{activeStep.label}</p>}
        {found && (
          <p className="text-[var(--accent-green)] font-600 mt-2">
            ✓ Found! Indices [0, 1] → {NUMS[0]} + {NUMS[1]} = {TARGET}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={runViz}
          className="text-2xs font-mono px-3 py-1.5 border border-[var(--border)] rounded text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
        >
          {running ? 'Stop' : found ? 'Replay' : 'Run'}
        </button>
        {(step > 0 || found) && (
          <button
            onClick={reset}
            className="text-2xs font-mono px-3 py-1.5 border border-[var(--border)] rounded text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default function EngineeringPractice() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="dsa"
      className="py-24 bg-[var(--bg-white)] border-t border-[var(--border)]"
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
          <span className="label-mono">06 / PROBLEM SOLVING</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
              className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-6"
            >
              Problem solving.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.1 }}
              className="text-[var(--text-muted)] text-sm leading-relaxed mb-8"
            >
              I practice DSA regularly on LeetCode using Python, Java, and SQL. Focus areas include algorithmic problem-solving, data structures, and optimization techniques.
            </motion.p>

            {/* Platform */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.15 }}
              className="mb-8"
            >
              <a
                href="https://leetcode.com/u/SanthoshKumar96/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors border-b border-[var(--border)] hover:border-[var(--accent)] pb-px"
              >
                LeetCode: SanthoshKumar96 ↗
              </a>
              <div className="flex gap-2 mt-3">
                {['Python', 'Java', 'SQL'].map(lang => (
                  <span key={lang} className="tech-tag">{lang}</span>
                ))}
              </div>
            </motion.div>

            {/* Topics */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.2 }}
            >
              <p className="label-mono mb-3">TOPIC AREAS</p>
              <div className="flex flex-wrap gap-1.5">
                {dsaTopics.map(topic => (
                  <span key={topic} className="tech-tag">{topic}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: visualizer */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.15 }}
          >
            <TwoSumViz />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
