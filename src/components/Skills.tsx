'use client';

import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Server, Database, Cpu, Layout, Terminal, Code } from 'lucide-react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    backend: <Server className="w-4 h-4 text-cyan" />,
    database: <Database className="w-4 h-4 text-cyan" />,
    ai_genai: <Cpu className="w-4 h-4 text-violet" />,
    frontend: <Layout className="w-4 h-4 text-cyan" />,
    devops: <Terminal className="w-4 h-4 text-cyan" />,
    fundamentals: <Code className="w-4 h-4 text-primary" />
  };

  const filteredCategories = activeFilter === 'all'
    ? skillsCategories
    : skillsCategories.filter(c => c.id === activeFilter);

  return (
    <section id="skills" className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            06 // CAPABILITIES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <p className="mt-2 text-sm text-primary-muted font-sans max-w-xl">
            Categorized technology stack across core backend engineering, distributed databases, applied GenAI, and computer science fundamentals.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-cyan text-[#080B10] font-bold'
                  : 'bg-[#11161D] text-primary-muted border border-[#1E2935] hover:border-[#273544]'
              }`}
            >
              ALL GROUPS
            </button>
            {skillsCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === c.id
                    ? 'bg-cyan text-[#080B10] font-bold'
                    : 'bg-[#11161D] text-primary-muted border border-[#1E2935] hover:border-[#273544]'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935] hover:border-[#273544] transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E2935]">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#0D1117] border border-[#1E2935]">
                      {categoryIcons[cat.id]}
                    </div>
                    <h3 className="font-heading text-base font-bold text-primary">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-primary-muted font-sans mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Animated Technology Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono rounded-md bg-[#0D1117] text-primary border border-[#1E2935] hover:border-cyan/50 hover:text-cyan transition-all transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1E2935]/80 text-[10px] font-mono text-primary-muted/60 flex justify-between">
                <span>VERIFIED STACK</span>
                <span>{cat.skills.length} TECHNOLOGIES</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
