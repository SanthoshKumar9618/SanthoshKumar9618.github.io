'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [isScrolled,      setIsScrolled]      = useState(false);
  const [mobileOpen,      setMobileOpen]       = useState(false);
  const [activeSection,   setActiveSection]    = useState('');
  const [theme,           setTheme]            = useState<'light'|'dark'>('light');

  /* ── Theme init: LIGHT is always default ── */
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      // Guarantee light mode — remove dark class even if system is dark
      setTheme('light');
      document.documentElement.classList.remove('dark');
      if (!stored) localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  /* ── Scroll tracking ── */
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
    const scrollY = window.scrollY + 100;
    for (const item of navItems) {
      const el = document.getElementById(item.href.slice(1));
      if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
        setActiveSection(item.href.slice(1));
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-white)]/95 backdrop-blur-sm border-b border-[var(--border)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Left: Initials / Name */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); scrollTo('#home'); }}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          aria-label="Home"
        >
          <span className="font-mono text-xs font-600 w-8 h-8 flex items-center justify-center border border-[var(--border)] rounded text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors duration-200">
            TSK
          </span>
          <span className="hidden sm:block font-heading font-700 text-sm tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-200">
            T Santhosh Kumar
          </span>
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map(item => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`px-3.5 py-2 text-xs font-mono transition-colors duration-200 rounded cursor-pointer ${
                  isActive
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="block h-px bg-[var(--accent)] mt-0.5 mx-auto rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Open to Work + Theme + Mobile */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Open to Work badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-2xs font-mono rounded border border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg-white)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green)] inline-block animate-ping-slow" />
            <span>Open to Work</span>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-colors duration-200 bg-[var(--bg-white)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg-white)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--bg-white)] px-4 pb-5 pt-3">
          {/* Open to Work — mobile */}
          <div className="flex items-center gap-1.5 text-2xs font-mono text-[var(--text-muted)] mb-3 pb-3 border-b border-[var(--border)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green)] inline-block" />
            Open to Work
          </div>
          <div className="flex flex-col gap-0.5">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="flex items-center justify-between w-full px-2 py-2.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] font-mono text-left rounded hover:bg-[var(--bg)] transition-colors"
              >
                <span>{item.name}</span>
                <span className="text-[var(--text-faint)] text-xs">→</span>
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-[var(--border)] flex gap-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 text-xs font-mono border border-[var(--border)] rounded text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 text-xs font-mono border border-[var(--border)] rounded text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
