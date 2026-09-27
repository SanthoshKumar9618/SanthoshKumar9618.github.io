import React from 'react';
import GlobalBackground from '../components/GlobalBackground';
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
    <div className="relative min-h-screen bg-[#080B10] text-[#F1F5F9] font-sans selection:bg-cyan selection:text-[#080B10] overflow-x-hidden">
      {/* Subtle Engineering Global Background */}
      <GlobalBackground />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <EngineeringPhilosophy />
        <Experience />
        <Projects />
        <SystemArchitecture />
        <Skills />
        <EngineeringPractice />
        <GithubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
