'use client';

import React from 'react';
import { X, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#0D1117] border border-[#1E2935] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#11161D] border border-[#1E2935] text-primary-muted hover:text-primary hover:border-cyan transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Number */}
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan">
          <span>PROJECT {project.number}</span>
          <span>•</span>
          <span className="uppercase">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-primary-muted text-sm sm:text-base leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Architecture Pipeline Flow Banner */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#11161D] border border-[#1E2935]">
          <div className="text-xs font-mono text-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>DATA FLOW PIPELINE</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {project.pipeline.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="px-2.5 py-1 rounded bg-[#080B10] text-primary border border-[#1E2935]">
                  {step}
                </span>
                {idx < project.pipeline.length - 1 && (
                  <span className="text-cyan font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Architecture Deep Dive Description */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-primary-muted/80 font-bold mb-2">
            Engineering Architecture:
          </h4>
          <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-sans bg-[#11161D] p-4 rounded-xl border border-[#1E2935]">
            {project.architectureDetails}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-primary-muted/80 font-bold mb-3">
            Implementation Highlights:
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-primary-muted font-sans">
                <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Badges */}
        <div className="mt-6 pt-5 border-t border-[#1E2935]">
          <div className="text-[11px] font-mono text-primary-muted/60 uppercase mb-2">Technologies Used:</div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs font-mono rounded bg-[#11161D] text-primary border border-[#1E2935]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#1E2935] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#11161D] border border-[#1E2935] hover:border-cyan text-primary text-xs font-mono transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
