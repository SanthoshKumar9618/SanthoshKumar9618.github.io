'use client';

import React, { useEffect, useRef } from 'react';

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle small floating particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 35), 35);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 1.2 + 0.6,
      opacity: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Engineering Grid Texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-70"></div>

      {/* Subtle Radial Gradient Gradients (Cyan & Violet) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] opacity-25 blur-[120px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.25) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(8, 11, 16, 0) 80%)'
        }}
      />
      
      <div 
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] opacity-15 blur-[140px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(8, 11, 16, 0) 70%)'
        }}
      />

      {/* Occasional Moving Light Beam along a Grid Line */}
      <div className="absolute top-[320px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent w-full animate-grid-light pointer-events-none"></div>

      {/* Canvas for fine particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
}
