'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Skills', href: '#skills' },
  { name: 'DSA', href: '#dsa' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B10]/85 backdrop-blur-md border-b border-[#1E2935] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Monogram / Name */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#11161D] border border-[#1E2935] group-hover:border-cyan transition-colors flex items-center justify-center font-mono font-bold text-xs text-primary">
            SK
          </div>
          <span className="font-heading font-semibold tracking-tight text-sm sm:text-base text-primary group-hover:text-cyan transition-colors">
            T SANTHOSH KUMAR
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1 rounded-full bg-[#0D1117]/60 border border-[#1E2935] backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-cyan bg-[#11161D] border border-[#273544]'
                    : 'text-primary-muted hover:text-primary hover:bg-[#11161D]/50'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right: Open to Work Indicator & Primary Link */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11161D] border border-[#1E2935] text-xs font-mono">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            <span className="text-primary-muted">Open to Work</span>
          </div>

          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#11161D] border border-[#1E2935] hover:border-cyan text-primary text-xs font-mono transition-all"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-primary-muted" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#11161D] border border-[#1E2935] text-[11px] font-mono sm:hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-success inline-block"></span>
            <span className="text-primary-muted">Available</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#11161D] border border-[#1E2935] text-primary"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pb-6 pt-2 bg-[#0D1117] border-b border-[#1E2935] backdrop-blur-xl">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-mono rounded-lg text-primary-muted hover:text-cyan hover:bg-[#11161D] text-left transition-colors"
              >
                <span>{item.name}</span>
                <span className="text-xs text-[#273544]">→</span>
              </button>
            ))}

            <div className="mt-3 pt-3 border-t border-[#1E2935] flex flex-col gap-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#11161D] border border-[#1E2935] text-xs font-mono text-primary hover:border-cyan"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
