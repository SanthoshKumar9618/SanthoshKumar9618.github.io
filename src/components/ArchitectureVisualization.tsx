'use client';

import React, { useState } from 'react';
import { Database, Server, Cpu, Globe, Radio, Layers, Sparkles } from 'lucide-react';

export default function ArchitectureVisualization() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodeDetails: Record<string, { label: string; role: string; latency: string }> = {
    client: { label: "Client Layer", role: "Browser & Mobile App Requests", latency: "HTTP / WSS" },
    react: { label: "React Frontend", role: "Component UI & Optimistic State", latency: "Virtual DOM" },
    fastapi: { label: "FastAPI Backend", role: "AsyncIO Event Loop & Pydantic Validation", latency: "< 5ms processing" },
    postgres: { label: "PostgreSQL Primary DB", role: "ACID Structured Data & pgvector Indices", latency: "Indexed Queries" },
    redis: { label: "Redis Cache & State", role: "In-memory Session Store & Rate Limiting", latency: "< 1ms sub-cache" },
    websocket: { label: "WebSocket Gateway", role: "Real-time Duplex Voice / Data Stream", latency: "Persistent State" },
    airag: { label: "AI / RAG Pipeline", role: "LangChain Orchestration, Embeddings & LLMs", latency: "Streaming Tokens" }
  };

  return (
    <div className="w-full relative rounded-2xl bg-[#0D1117] border border-[#1E2935] p-5 sm:p-7 shadow-2xl overflow-hidden font-mono">
      {/* Visualizer Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E2935] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse"></div>
          <span className="font-mono text-primary font-semibold tracking-wide">SYSTEM_TOPOLOGY.ARCH</span>
        </div>
        <span className="text-[11px] text-primary-muted font-mono bg-[#11161D] px-2 py-0.5 rounded border border-[#1E2935]">
          LIVE DATA STREAM
        </span>
      </div>

      {/* Main Architecture Flow Diagram */}
      <div className="relative flex flex-col items-center gap-4 py-2">
        
        {/* Node 1: CLIENT */}
        <div 
          onMouseEnter={() => setActiveNode('client')}
          onMouseLeave={() => setActiveNode(null)}
          className={`w-full max-w-[220px] p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
            activeNode === 'client' 
              ? 'bg-[#11161D] border-cyan shadow-cyan-glow text-cyan' 
              : 'bg-[#11161D] border-[#1E2935] text-primary-muted hover:border-[#273544]'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold">
            <Globe className="w-3.5 h-3.5 text-cyan" />
            <span>CLIENT</span>
          </div>
        </div>

        {/* Down Arrow 1 with moving pulse */}
        <div className="relative flex flex-col items-center">
          <div className="w-[1px] h-4 bg-[#1E2935] relative overflow-hidden">
            <div className="w-full h-2 bg-cyan animate-line-flow"></div>
          </div>
          <span className="text-[9px] text-cyan/70">↓</span>
        </div>

        {/* Node 2: REACT */}
        <div 
          onMouseEnter={() => setActiveNode('react')}
          onMouseLeave={() => setActiveNode(null)}
          className={`w-full max-w-[220px] p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
            activeNode === 'react' 
              ? 'bg-[#11161D] border-cyan shadow-cyan-glow text-cyan' 
              : 'bg-[#11161D] border-[#1E2935] text-primary hover:border-[#273544]'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-cyan" />
            <span>ReactJS Client</span>
          </div>
        </div>

        {/* Down Arrow 2 */}
        <div className="relative flex flex-col items-center">
          <div className="w-[1px] h-4 bg-[#1E2935] relative overflow-hidden">
            <div className="w-full h-2 bg-cyan animate-line-flow"></div>
          </div>
          <span className="text-[9px] text-cyan/70">↓ REST / WSS</span>
        </div>

        {/* Node 3: FASTAPI BACKEND (CENTRAL CORE) */}
        <div 
          onMouseEnter={() => setActiveNode('fastapi')}
          onMouseLeave={() => setActiveNode(null)}
          className={`w-full max-w-[260px] p-3 rounded-xl border text-center transition-all cursor-pointer ${
            activeNode === 'fastapi' 
              ? 'bg-[#161D27] border-cyan shadow-cyan-glow text-cyan' 
              : 'bg-[#11161D] border-cyan/40 text-primary hover:border-cyan'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold">
            <Server className="w-4 h-4 text-cyan" />
            <span>FastAPI Server</span>
          </div>
          <div className="text-[10px] text-primary-muted mt-0.5">AsyncIO • Routing • JWT/RBAC</div>
        </div>

        {/* Branching Connection Bus */}
        <div className="w-full max-w-[340px] flex flex-col items-center">
          <div className="w-[1px] h-3 bg-[#1E2935]"></div>
          <div className="w-full h-[1px] bg-[#1E2935] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/40 to-transparent"></div>
          </div>
          <div className="w-full flex justify-between px-6">
            <span className="text-[9px] text-cyan/60">↓</span>
            <span className="text-[9px] text-cyan/60">↓</span>
            <span className="text-[9px] text-cyan/60">↓</span>
          </div>
        </div>

        {/* 3 Distributed Persistence / Transport Nodes */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-3 max-w-[380px]">
          
          {/* Node 4A: PostgreSQL */}
          <div 
            onMouseEnter={() => setActiveNode('postgres')}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
              activeNode === 'postgres' 
                ? 'bg-[#161D27] border-cyan text-cyan' 
                : 'bg-[#11161D] border-[#1E2935] text-primary-muted hover:border-[#273544]'
            }`}
          >
            <Database className="w-3.5 h-3.5 mx-auto text-cyan mb-1" />
            <div className="text-[10px] sm:text-xs font-bold">PostgreSQL</div>
            <div className="text-[8px] sm:text-[9px] text-primary-muted">+ pgvector</div>
          </div>

          {/* Node 4B: Redis */}
          <div 
            onMouseEnter={() => setActiveNode('redis')}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
              activeNode === 'redis' 
                ? 'bg-[#161D27] border-cyan text-cyan' 
                : 'bg-[#11161D] border-[#1E2935] text-primary-muted hover:border-[#273544]'
            }`}
          >
            <Server className="w-3.5 h-3.5 mx-auto text-violet mb-1" />
            <div className="text-[10px] sm:text-xs font-bold">Redis</div>
            <div className="text-[8px] sm:text-[9px] text-primary-muted">Cache & State</div>
          </div>

          {/* Node 4C: WebSocket */}
          <div 
            onMouseEnter={() => setActiveNode('websocket')}
            onMouseLeave={() => setActiveNode(null)}
            className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
              activeNode === 'websocket' 
                ? 'bg-[#161D27] border-cyan text-cyan' 
                : 'bg-[#11161D] border-[#1E2935] text-primary-muted hover:border-[#273544]'
            }`}
          >
            <Radio className="w-3.5 h-3.5 mx-auto text-cyan mb-1" />
            <div className="text-[10px] sm:text-xs font-bold">WebSocket</div>
            <div className="text-[8px] sm:text-[9px] text-primary-muted">Real-time Stream</div>
          </div>

        </div>

        {/* Down connection to AI/RAG */}
        <div className="relative flex flex-col items-center">
          <div className="w-[1px] h-3 bg-[#1E2935]"></div>
          <span className="text-[9px] text-violet/80">↓ Retrieval & Reason</span>
        </div>

        {/* Node 5: AI / RAG Pipeline */}
        <div 
          onMouseEnter={() => setActiveNode('airag')}
          onMouseLeave={() => setActiveNode(null)}
          className={`w-full max-w-[260px] p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
            activeNode === 'airag' 
              ? 'bg-[#161D27] border-violet shadow-violet-glow text-violet' 
              : 'bg-[#11161D] border-[#1E2935] text-primary hover:border-violet/40'
          }`}
        >
          <div className="flex items-center justify-center gap-2 text-xs font-bold">
            <Cpu className="w-3.5 h-3.5 text-violet" />
            <span>AI / RAG Engine</span>
          </div>
          <div className="text-[9px] text-primary-muted mt-0.5">LangChain • OpenAI • Gemini • Tool Agent</div>
        </div>

      </div>

      {/* Interactive Info Footer */}
      <div className="mt-5 pt-3 border-t border-[#1E2935] text-[11px] text-primary-muted flex items-center justify-between">
        {activeNode ? (
          <div>
            <span className="text-cyan font-semibold">{nodeDetails[activeNode]?.label}: </span>
            <span>{nodeDetails[activeNode]?.role} ({nodeDetails[activeNode]?.latency})</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-primary-muted/70">
            <Sparkles className="w-3 h-3 text-cyan" />
            <span>Hover on any node to inspect system role</span>
          </div>
        )}
      </div>

    </div>
  );
}
