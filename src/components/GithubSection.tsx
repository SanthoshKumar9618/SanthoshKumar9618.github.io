'use client';

import React from 'react';
import { personalData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { ArrowUpRight, GitBranch, Star, Code2, FolderGit2 } from 'lucide-react';

export default function GithubSection() {
  const username = "SanthoshKumar9618";

  const publicRepos = [
    {
      name: "ai-voice-agent-backend",
      desc: "FastAPI & Twilio Media Streams real-time voice streaming engine with WebSockets and pgvector RAG.",
      lang: "Python",
      stars: "Public",
      forks: "FastAPI"
    },
    {
      name: "digital-business-card-platform",
      desc: "FastAPI REST API platform with PostgreSQL, JWT authentication, and QR/NFC profile endpoints.",
      lang: "Python",
      stars: "Public",
      forks: "PostgreSQL"
    },
    {
      name: "road-accident-prediction-ml",
      desc: "Supervised machine learning pipeline for road traffic accident risk prediction and feature analysis.",
      lang: "Python",
      stars: "Public",
      forks: "scikit-learn"
    }
  ];

  return (
    <section className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            08 // OPEN SOURCE
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            OPEN SOURCE & CODE
          </h2>
          <p className="mt-2 text-sm text-primary-muted font-sans max-w-xl">
            Public repositories, open architectures, and software engineering implementations on GitHub.
          </p>
        </div>

        {/* GitHub Overview Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#11161D] border border-[#1E2935] shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1E2935]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#0D1117] border border-[#1E2935] text-primary">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-primary">
                  {username}
                </h3>
                <p className="text-xs font-mono text-primary-muted">
                  GitHub Profile & Code Repositories
                </p>
              </div>
            </div>

            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D1117] border border-[#1E2935] hover:border-cyan text-primary text-xs font-mono transition-colors"
            >
              <span>View Full GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Repositories Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {publicRepos.map((repo, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0D1117] border border-[#1E2935] hover:border-[#273544] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan font-bold mb-2">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <p className="text-xs text-primary-muted font-sans line-clamp-3 leading-relaxed">
                    {repo.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1E2935]/80 flex items-center justify-between text-[11px] font-mono text-primary-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan"></span>
                    <span>{repo.lang}</span>
                  </div>
                  <span>{repo.forks}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
