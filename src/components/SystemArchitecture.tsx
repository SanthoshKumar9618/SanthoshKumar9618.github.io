'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { systemArchitectureNodes } from '../data/portfolioData';

const nodes = [
  { id: 'client',    label: 'CLIENT',           sub: 'ReactJS / Web / Mobile',   detail: 'Initiates authenticated HTTP requests and WebSocket connections for real-time interaction.' },
  { id: 'gateway',   label: 'REST / WEBSOCKET',  sub: 'FastAPI + AsyncIO',         detail: 'High-performance async request routing with strict schema validation via Pydantic.' },
  { id: 'auth',      label: 'AUTH & ACCESS',     sub: 'JWT + RBAC',                detail: 'Stateless authentication and fine-grained permission enforcement across multi-tenant endpoints.' },
  { id: 'logic',     label: 'APP SERVICES',      sub: 'Python Business Logic',     detail: 'Modular service layer separating domain rules, transactions, and external integrations.' },
  { id: 'postgres',  label: 'POSTGRESQL',        sub: 'Primary DB + pgvector',     detail: 'ACID-compliant relational store for structured data and vector similarity indexing.' },
  { id: 'redis',     label: 'REDIS',             sub: 'Cache + Session State',     detail: 'Sub-millisecond caching and real-time session state for active voice interactions.' },
  { id: 'rag',       label: 'RAG PIPELINE',      sub: 'LangChain + Embeddings',    detail: 'Document chunking, embedding generation, and semantic context retrieval for AI grounding.' },
  { id: 'llm',       label: 'LLM / AGENTS',      sub: 'OpenAI / Gemini',           detail: 'Contextual reasoning, structured output, and autonomous tool execution.' },
];

export default function SystemArchitecture() {
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  const activeNode = nodes.find(n => n.id === active);

  return (
    <section
      id="architecture"
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
          <span className="label-mono">SYS / ARCHITECTURE</span>
          <div className="h-px flex-1 bg-[var(--border)] max-w-[60px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.05 }}
          className="font-heading font-700 text-3xl sm:text-4xl text-[var(--text)] tracking-tight mb-4"
        >
          Systems I've worked with.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: prefersReduced ? 0 : 0.1 }}
          className="text-[var(--text-muted)] text-sm mb-12"
        >
          Click a node to see details.
        </motion.p>

        <div className="grid lg:grid-cols-[200px_1fr] gap-10 items-start">

          {/* ── Left: vertical diagram ── */}
          <div className="flex flex-col items-start gap-0">
            {nodes.map((node, i) => {
              const isActive = active === node.id;
              return (
                <React.Fragment key={node.id}>
                  <motion.button
                    initial={{ opacity: 0, x: prefersReduced ? 0 : -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: prefersReduced ? 0 : i * 0.05 }}
                    onClick={() => setActive(isActive ? null : node.id)}
                    className={`flex items-start gap-3 text-left cursor-pointer group w-full transition-all duration-150`}
                  >
                    {/* Dot + line */}
                    <div className="flex flex-col items-center w-4 shrink-0 mt-2">
                      <div
                        className={`w-2 h-2 rounded-full border-2 transition-all duration-150 ${
                          isActive
                            ? 'border-[var(--accent)] bg-[var(--accent)]'
                            : 'border-[var(--border-strong)] bg-[var(--bg-white)] group-hover:border-[var(--accent)]'
                        }`}
                      />
                    </div>
                    {/* Label */}
                    <div className="pb-5">
                      <p className={`font-mono text-2xs font-600 tracking-[0.1em] uppercase transition-colors duration-150 ${
                        isActive ? 'text-[var(--accent)]' : 'text-[var(--text)] group-hover:text-[var(--accent)]'
                      }`}>{node.label}</p>
                      <p className="font-mono text-2xs text-[var(--text-faint)] mt-0.5">{node.sub}</p>
                    </div>
                  </motion.button>

                  {/* Connector line */}
                  {i < nodes.length - 1 && (
                    <div className="flex items-start ml-[7px] gap-0 -mt-4 mb-0">
                      <div className="w-px h-3 bg-[var(--border)]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ── Right: detail panel ── */}
          <div className="lg:pl-10 lg:border-l border-[var(--border)]">
            {activeNode ? (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.25 }}
                className="p-6 border border-[var(--border)] rounded bg-[var(--bg)]"
              >
                <span className="label-mono block mb-3">{activeNode.label}</span>
                <p className="font-mono text-xs text-[var(--accent)] mb-4">{activeNode.sub}</p>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{activeNode.detail}</p>
              </motion.div>
            ) : (
              <div className="p-6 border border-dashed border-[var(--border)] rounded text-center">
                <p className="font-mono text-xs text-[var(--text-faint)]">
                  Select a layer to view technical details
                </p>
              </div>
            )}

            {/* System overview */}
            <div className="mt-6 p-6 border border-[var(--border)] rounded bg-[var(--bg-white)]">
              <p className="label-mono mb-5">FULL STACK OVERVIEW</p>
              <div className="font-mono text-2xs text-[var(--text-muted)] leading-loose tracking-wide">
                <div className="space-y-1">
                  {[
                    'CLIENT  →  REST / WebSocket',
                    '        →  FastAPI Backend',
                    '        ├→  PostgreSQL + pgvector',
                    '        ├→  Redis Cache',
                    '        ├→  RAG Pipeline',
                    '        └→  LLM / AI Agents',
                  ].map((line, i) => (
                    <p key={i} className={i === 0 ? 'text-[var(--text)]' : ''}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
