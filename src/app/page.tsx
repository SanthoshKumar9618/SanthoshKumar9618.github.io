'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import EngineeringPhilosophy from '../components/EngineeringPhilosophy';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import SystemArchitecture from '../components/SystemArchitecture';
import Skills from '../components/Skills';
import EngineeringPractice from '../components/EngineeringPractice';
import GithubSection from '../components/GithubSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 01: Hero */}
        <Hero />

        {/* 02: About */}
        <About />

        {/* 03: Experience */}
        <Experience />

        {/* 04: Projects */}
        <Projects />

        {/* 05: Engineering Philosophy */}
        <EngineeringPhilosophy />

        {/* 06: System Architecture */}
        <SystemArchitecture />

        {/* 07: Skills */}
        <Skills />

        {/* 08: Problem Solving / DSA */}
        <EngineeringPractice />

        {/* 09: Find My Work */}
        <GithubSection />

        {/* 10: Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
