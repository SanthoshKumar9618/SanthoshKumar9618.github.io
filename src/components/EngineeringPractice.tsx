'use client';

import React, { useState } from 'react';
import { dsaTopics, personalData } from '../data/portfolioData';
import { LeetCodeIcon } from './SocialIcons';
import { ArrowUpRight, Play, RotateCcw, Check, Sparkles, Code2 } from 'lucide-react';

export default function EngineeringPractice() {
  // Two Sum visualizer step state
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const array = [2, 7, 11, 15];
  const target = 9;

  const steps = [
    { title: "Initialize Hash Map", desc: "Lookup map = {}, Target = 9", index1: -1, index2: -1, found: false },
    { title: "Inspect Index 0 (Value = 2)", desc: "Complement = 9 - 2 = 7. Not in map. Insert {2: 0}", index1: 0, index2: -1, found: false },
    { title: "Inspect Index 1 (Value = 7)", desc: "Complement = 9 - 7 = 2. Found in map at index 0!", index1: 0, index2: 1, found: true }
  ];

  const handleNextStep = () => {
    setStep((prev) => (prev + 1) % steps.length);
  };

  const handleReset = () => {
    setStep(0);
  };

  const currentStep = steps[step];

  return (
    <section id="dsa" className="py-20 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            07 // PROBLEM SOLVING
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            ENGINEERING PRACTICE
          </h2>
          <p className="mt-2 text-sm text-primary-muted font-sans max-w-xl">
            Strong algorithmic foundation in Data Structures, algorithmic complexity analysis (\(O(1)\) to \(O(N)\)), and rigorous problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive DSA Visualizer (Two Sum) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D1117] border border-[#1E2935] shadow-card font-mono">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E2935] text-xs">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan" />
                <span className="text-primary font-bold">ALGORITHM_WALK // TWO_SUM</span>
              </div>
              <span className="text-cyan text-[11px] bg-[#11161D] px-2 py-0.5 rounded border border-[#1E2935]">
                Target = {target}
              </span>
            </div>

            {/* Array Box Visualization */}
            <div className="py-6 flex flex-col items-center justify-center gap-4">
              <div className="text-xs text-primary-muted font-mono">ARRAY // nums:</div>
              <div className="flex items-center gap-2 sm:gap-3">
                {array.map((num, idx) => {
                  const isSelected1 = currentStep.index1 === idx;
                  const isSelected2 = currentStep.index2 === idx;
                  const isFound = currentStep.found && (isSelected1 || isSelected2);

                  return (
                    <div
                      key={idx}
                      className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
                        isFound
                          ? 'scale-110'
                          : isSelected1 || isSelected2
                          ? 'scale-105'
                          : ''
                      }`}
                    >
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg border transition-all ${
                          isFound
                            ? 'bg-success/20 border-success text-success shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                            : isSelected1
                            ? 'bg-cyan/20 border-cyan text-cyan shadow-cyan-glow'
                            : isSelected2
                            ? 'bg-violet/20 border-violet text-violet shadow-violet-glow'
                            : 'bg-[#11161D] border-[#1E2935] text-primary'
                        }`}
                      >
                        {num}
                      </div>
                      <span className="text-[10px] text-primary-muted/70">
                        idx {idx}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step Explanation Banner */}
            <div className="mt-4 p-4 rounded-xl bg-[#11161D] border border-[#1E2935]">
              <div className="flex items-center justify-between text-xs text-cyan mb-1.5 font-bold">
                <span>{currentStep.title}</span>
                {currentStep.found && (
                  <span className="text-success flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> PAIR FOUND [0, 1]
                  </span>
                )}
              </div>
              <p className="text-xs text-primary-muted font-sans">
                {currentStep.desc}
              </p>
            </div>

            {/* Interactive Control Buttons */}
            <div className="mt-6 pt-4 border-t border-[#1E2935] flex items-center justify-between">
              <div className="text-[11px] text-primary-muted">
                Step {step + 1} of {steps.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg bg-[#11161D] border border-[#1E2935] hover:border-[#273544] text-primary-muted transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>

                <button
                  onClick={handleNextStep}
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs rounded-lg bg-cyan text-[#080B10] font-bold hover:bg-cyan/90 transition-all shadow-cyan-glow cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  <span>{step === steps.length - 1 ? 'Replay' : 'Next Step'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: LeetCode Profile & Topics Mastered */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* LeetCode Card */}
            <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935] shadow-card">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E2935]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#0D1117] border border-[#1E2935] text-cyan">
                    <LeetCodeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-primary">
                      LeetCode Profile
                    </h3>
                    <p className="text-xs font-mono text-primary-muted">@SanthoshKumar96</p>
                  </div>
                </div>

                <a
                  href={personalData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0D1117] border border-[#1E2935] hover:border-cyan text-xs font-mono text-primary transition-colors"
                >
                  <span>View LeetCode Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Core Languages */}
              <div className="text-xs font-mono text-primary-muted mb-4 flex items-center gap-2">
                <span>Languages:</span>
                <span className="text-primary bg-[#0D1117] px-2 py-0.5 rounded border border-[#1E2935]">Python</span>
                <span className="text-primary bg-[#0D1117] px-2 py-0.5 rounded border border-[#1E2935]">Java</span>
                <span className="text-primary bg-[#0D1117] px-2 py-0.5 rounded border border-[#1E2935]">SQL</span>
              </div>

              {/* Mastered Topics Chips */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-primary-muted uppercase tracking-wider mb-3">
                  Algorithmic Focus Topics:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {dsaTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-[#0D1117] text-primary-muted border border-[#1E2935]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Complexity & Principles Box */}
            <div className="p-5 rounded-xl bg-[#0D1117] border border-[#1E2935] text-xs font-mono text-primary-muted space-y-1.5">
              <div className="text-cyan font-bold">SYSTEM COMPLEXITY STANDARD:</div>
              <p className="text-primary-muted font-sans text-xs leading-relaxed">
                Prioritizing optimal space-time trade-offs, cache locality, amortized bounds, and non-blocking asynchronous processing in backend workloads.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
