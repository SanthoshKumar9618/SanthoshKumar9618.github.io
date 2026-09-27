'use client';

import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, Cpu, ChevronRight, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            04 // CASE STUDIES
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            SELECTED PROJECTS
          </h2>
          <p className="mt-2 text-sm text-primary-muted font-sans max-w-xl">
            Detailed engineering case studies covering real-time voice architectures, backend REST APIs, and predictive machine learning.
          </p>
        </div>

        {/* Project Case Study Cards */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 sm:p-8 rounded-2xl bg-[#11161D] border border-[#1E2935] hover:border-cyan/50 transition-all duration-300 shadow-card cursor-pointer group hover:-translate-y-0.5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Project Details & Meta */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-cyan font-bold">PROJECT {project.number}</span>
                    <span className="text-[#273544]">/</span>
                    <span className="text-primary-muted uppercase tracking-wider">{project.category}</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-primary group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-primary-muted leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="text-xs text-primary-muted flex items-start gap-2">
                        <span className="text-cyan mt-0.5">▪</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-mono rounded bg-[#0D1117] text-primary-muted border border-[#1E2935] group-hover:border-[#273544] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Architecture Diagram Flow Box */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full p-5 rounded-xl bg-[#0D1117] border border-[#1E2935] group-hover:border-[#273544] transition-colors">
                  <div>
                    <div className="text-[11px] font-mono text-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Architecture Pipeline</span>
                    </div>

                    {/* Flow steps */}
                    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                      {project.pipeline.map((step, idx) => (
                        <React.Fragment key={idx}>
                          <span className="px-2 py-1 rounded bg-[#11161D] text-primary border border-[#1E2935] text-[11px]">
                            {step}
                          </span>
                          {idx < project.pipeline.length - 1 && (
                            <span className="text-cyan text-xs">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#1E2935] flex items-center justify-between text-xs font-mono text-cyan">
                    <span className="group-hover:underline">Open Case Study Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
