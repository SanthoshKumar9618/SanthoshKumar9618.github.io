'use client';

import React from 'react';
import { aboutData } from '../data/portfolioData';
import { Server, Layers, Cpu } from 'lucide-react';

export default function About() {
  const cardIcons = [
    <Server className="w-5 h-5 text-cyan" key="0" />,
    <Layers className="w-5 h-5 text-cyan" key="1" />,
    <Cpu className="w-5 h-5 text-violet" key="2" />
  ];

  return (
    <section id="about" className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            01 // BACKGROUND
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            {aboutData.heading}
          </h2>
        </div>

        {/* Positioning Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-8 space-y-4 text-primary-muted text-base sm:text-lg leading-relaxed">
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0D1117] border border-[#1E2935] flex flex-col justify-center">
            <div className="text-xs font-mono text-cyan uppercase tracking-wider mb-2">Engineering Focus</div>
            <div className="text-xl font-heading font-bold text-primary">High-Throughput Backends & Integrated AI</div>
            <p className="text-xs text-primary-muted font-mono mt-2">
              Architected for resilience, deterministic concurrency, and sub-millisecond retrieval.
            </p>
          </div>
        </div>

        {/* 3 Core Competency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.cards.map((card, idx) => (
            <div
              key={card.number}
              className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935] hover:border-[#273544] transition-all duration-300 group hover:-translate-y-1 shadow-card"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-primary-muted group-hover:text-cyan transition-colors">
                  {card.number}
                </span>
                <div className="p-2 rounded-lg bg-[#0D1117] border border-[#1E2935]">
                  {cardIcons[idx]}
                </div>
              </div>

              <h3 className="font-heading text-lg font-bold text-primary mb-4 tracking-tight">
                {card.title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-[#0D1117] text-primary-muted border border-[#1E2935]/80 group-hover:border-[#273544] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
