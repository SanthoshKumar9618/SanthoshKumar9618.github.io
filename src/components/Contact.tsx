'use client';

import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon, LeetCodeIcon, NaukriIcon } from './SocialIcons';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.85 } });
    } catch (e) {}
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject || 'Engineering Opportunity')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 border-t border-[#1E2935]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono text-cyan uppercase tracking-widest mb-2">
            09 // CONTACT
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            LET'S BUILD SOMETHING USEFUL.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary-muted font-sans leading-relaxed">
            I'm open to Software Engineering, Backend Engineering, Python Full Stack, and AI application opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935] shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0D1117] border border-[#1E2935] text-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-primary-muted uppercase">Email</div>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm sm:text-base font-mono font-bold text-primary hover:text-cyan transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-[#0D1117] border border-[#1E2935] text-primary-muted hover:text-cyan transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedEmail && (
                <div className="mt-2 text-[11px] font-mono text-success">
                  ✓ Copied email to clipboard
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935] shadow-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0D1117] border border-[#1E2935] text-cyan">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-primary-muted uppercase">Phone / WhatsApp</div>
                    <a
                      href={`tel:${personalData.phone}`}
                      className="text-sm sm:text-base font-mono font-bold text-primary hover:text-cyan transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-[#0D1117] border border-[#1E2935] text-primary-muted hover:text-cyan transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedPhone && (
                <div className="mt-2 text-[11px] font-mono text-success">
                  ✓ Copied phone to clipboard
                </div>
              )}
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0D1117] border border-[#1E2935] text-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-primary-muted uppercase">Location</div>
                  <div className="text-sm font-mono text-primary">
                    {personalData.location} <span className="text-success">({personalData.relocationStatus})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Matrix */}
            <div className="p-6 rounded-2xl bg-[#11161D] border border-[#1E2935]">
              <div className="text-[11px] font-mono text-primary-muted uppercase mb-3">Professional Profiles</div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] hover:border-cyan text-primary-muted hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-cyan" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] hover:border-cyan text-primary-muted hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-primary" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] hover:border-cyan text-primary-muted hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LeetCodeIcon className="w-4 h-4 text-cyan" />
                    <span>LeetCode</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalData.socials.naukri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] hover:border-cyan text-primary-muted hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <NaukriIcon className="w-4 h-4 text-cyan" />
                    <span>Naukri</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11161D] border border-[#1E2935] shadow-card">
              <h3 className="font-heading text-lg font-bold text-primary mb-6">
                Send Direct Message
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-primary-muted mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Engineer"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] text-primary text-sm focus:border-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-primary-muted mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] text-primary text-sm focus:border-cyan focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-primary-muted mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Opportunity"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] text-primary text-sm focus:border-cyan focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-primary-muted mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief description of the role, technology stack, and engineering requirements..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0D1117] border border-[#1E2935] text-primary text-sm focus:border-cyan focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-cyan text-[#080B10] font-mono font-bold text-xs sm:text-sm hover:bg-cyan/90 transition-all shadow-cyan-glow cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
