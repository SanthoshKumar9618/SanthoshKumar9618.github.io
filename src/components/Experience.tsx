'use client';

import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            03 // TIMELINE
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            EXPERIENCE
          </h2>
          <p className="mt-2 text-sm text-primary-muted font-sans max-w-xl">
            Software engineering roles building scalable backend systems, real-time voice applications, and performant web interfaces.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-[#1E2935] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#0D1117] border border-[#1E2935] group-hover:border-cyan transition-colors">
                <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-cyan animate-pulse' : 'bg-primary-muted'}`}></div>
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#11161D] border border-[#1E2935] hover:border-[#273544] transition-all duration-300 shadow-card">
                
                {/* Header: Role & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#1E2935]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-cyan bg-[#0D1117] px-2 py-0.5 rounded border border-[#1E2935]">
                        {exp.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-primary">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-muted mt-1">
                      <Building2 className="w-3.5 h-3.5 text-cyan" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-primary-muted gap-1">
                    <div className="flex items-center gap-1.5 bg-[#0D1117] px-2.5 py-1 rounded border border-[#1E2935]">
                      <Calendar className="w-3 h-3 text-cyan" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-primary-muted/70">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="my-6 space-y-3">
                  {exp.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-primary-muted leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges */}
                <div className="pt-4 border-t border-[#1E2935]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-primary-muted/60 mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-mono rounded bg-[#0D1117] text-primary-muted border border-[#1E2935]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
