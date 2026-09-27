'use client';

import React, { useState } from 'react';
import { systemArchitectureNodes } from '../data/portfolioData';
import { Cpu, Server, Database, Shield, Radio, Sparkles, Layers, Info } from 'lucide-react';

export default function SystemArchitecture() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('postgres');

  const selectedNode = systemArchitectureNodes.find(n => n.id === selectedNodeId) || systemArchitectureNodes[0];

  const nodePositions = [
    { id: 'client', label: 'CLIENT LAYER', sub: 'React / Web / Mobile / Twilio Voice', group: 'Ingress' },
    { id: 'gateway', label: 'REST / WS GATEWAY', sub: 'FastAPI + AsyncIO Event Loop', group: 'Routing' },
    { id: 'auth', label: 'AUTH & ACCESS CONTROL', sub: 'JWT + Role-Based Access Control', group: 'Security' },
    { id: 'app_logic', label: 'APPLICATION SERVICES', sub: 'Python Domain Services & Pipelines', group: 'Core' },
    { id: 'postgres', label: 'POSTGRESQL PRIMARY DB', sub: 'ACID Structured Data & pgvector', group: 'Storage' },
    { id: 'redis', label: 'REDIS CACHE & STATE', sub: 'In-Memory State & Rate Limiting', group: 'Cache' },
    { id: 'rag', label: 'RAG RETRIEVAL PIPELINE', sub: 'Document Chunking & Embeddings', group: 'Knowledge' },
    { id: 'llm', label: 'LLM REASONING & AGENTS', sub: 'OpenAI / Gemini / Tool Execution', group: 'Inference' }
  ];

  return (
    <section id="architecture" className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            05 // SYSTEM DESIGN
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            HOW I BUILD SYSTEMS
          </h2>
          <p className="mt-2 text-sm text-primary-muted font-sans max-w-xl">
            Interactive reference architecture illustrating how I design resilient, low-latency backend systems, relational databases, caching, and integrated AI pipelines.
          </p>
        </div>

        {/* Interactive Architecture Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Architecture Visual Graph */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1117] border border-[#1E2935] p-5 sm:p-7 shadow-card">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E2935] text-xs font-mono">
              <span className="text-primary font-bold">SYSTEM_TOPOLOGY_V2</span>
              <span className="text-cyan text-[11px] flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                Select any component to inspect specifications
              </span>
            </div>

            <div className="space-y-3 font-mono">
              {nodePositions.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#11161D] border-cyan text-primary shadow-cyan-glow'
                        : 'bg-[#11161D]/50 border-[#1E2935] text-primary-muted hover:border-[#273544] hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan animate-pulse' : 'bg-[#273544]'}`}></div>
                      <div>
                        <div className={`text-xs font-bold ${isSelected ? 'text-cyan' : 'text-primary'}`}>
                          {node.label}
                        </div>
                        <div className="text-[11px] text-primary-muted font-sans">
                          {node.sub}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase bg-[#080B10] px-2 py-0.5 rounded border border-[#1E2935] text-primary-muted shrink-0">
                      {node.group}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Component Inspector Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#11161D] border border-cyan/40 shadow-card space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#1E2935]">
                <div className="text-xs font-mono text-cyan uppercase tracking-wider">
                  COMPONENT SPECIFICATION
                </div>
                <div className="p-1.5 rounded-md bg-[#0D1117] border border-[#1E2935] text-cyan">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>

              {/* Component Name */}
              <div>
                <h3 className="font-heading text-xl font-bold text-primary">
                  {selectedNode.name}
                </h3>
                <div className="text-xs font-mono text-cyan mt-1">
                  Stack: {selectedNode.tech}
                </div>
              </div>

              {/* Purpose */}
              <div>
                <div className="text-[11px] font-mono uppercase text-primary-muted/70 tracking-wider mb-1">
                  Architectural Purpose:
                </div>
                <p className="text-xs sm:text-sm text-primary font-medium leading-relaxed font-sans bg-[#0D1117] p-3 rounded-lg border border-[#1E2935]">
                  "{selectedNode.purpose}"
                </p>
              </div>

              {/* Detailed Operational Role */}
              <div>
                <div className="text-[11px] font-mono uppercase text-primary-muted/70 tracking-wider mb-1">
                  System Operation:
                </div>
                <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-sans">
                  {selectedNode.details}
                </p>
              </div>

              {/* Engineering Standard Tag */}
              <div className="pt-4 border-t border-[#1E2935] text-[11px] font-mono text-primary-muted flex items-center justify-between">
                <span>CONCURRENCY: THREAD-SAFE</span>
                <span className="text-success">HEALTH: 100% OK</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
