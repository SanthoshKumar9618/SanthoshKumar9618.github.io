'use client';

import React from 'react';
import { engineeringPhilosophy } from '../data/portfolioData';
import { Compass, Hammer, Gauge, PackageCheck } from 'lucide-react';

export default function EngineeringPhilosophy() {
  const icons = [
    <Compass className="w-5 h-5 text-cyan" key="0" />,
    <Hammer className="w-5 h-5 text-cyan" key="1" />,
    <Gauge className="w-5 h-5 text-cyan" key="2" />,
    <PackageCheck className="w-5 h-5 text-violet" key="3" />
  ];

  return (
    <section className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            02 // PRINCIPLES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            HOW I THINK ABOUT SOFTWARE
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {engineeringPhilosophy.map((item, idx) => (
            <div
              key={item.number}
              className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935] hover:border-[#273544] transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-primary-muted font-bold">
                  {item.number}
                </span>
                <div className="p-2 rounded-lg bg-[#0D1117] border border-[#1E2935]">
                  {icons[idx]}
                </div>
              </div>

              <h3 className="font-heading text-base font-bold text-primary mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
