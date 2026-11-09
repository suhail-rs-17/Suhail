import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowDown, Code2, Palette, Sparkles, Terminal, ExternalLink, MoveHorizontal } from 'lucide-react';
import { SplitHeroCharacter } from './SplitHeroCharacter';
import { DesignerUIElements, DeveloperUIElements } from './HeroIllustrations';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HeroSplit = () => {
  const [splitPercent, setSplitPercent] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef(null);

  // Mouse tracking for character parallax
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });

    if (isDragging) {
      const clamped = Math.max(15, Math.min(85, x * 100));
      setSplitPercent(clamped);
    }
  }, [isDragging]);

  // Touch tracking for drag
  const handleTouchMove = useCallback((e) => {
    if (!containerRef.current || !isDragging) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    const clamped = Math.max(15, Math.min(85, x * 100));
    setSplitPercent(clamped);
  }, [isDragging]);

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full min-h-screen pt-20 sm:pt-24 pb-12 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* ============================================================== */}
      {/* BACKGROUND SPLIT CANVAS */}
      {/* ============================================================== */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left Side: Cream Grid (The Designer) */}
        <div 
          className="h-full bg-[#F3F0E8] bg-cream-grid relative transition-all duration-75"
          style={{ width: `${splitPercent}%` }}
        >
          <DesignerUIElements />
        </div>

        {/* Right Side: Deep Navy-Black Grid (The Developer) */}
        <div 
          className="h-full bg-[#0F1117] bg-dark-grid relative transition-all duration-75"
          style={{ width: `${100 - splitPercent}%` }}
        >
          <DeveloperUIElements />
        </div>
      </div>

      {/* ============================================================== */}
      {/* INTERACTIVE DRAGGABLE SPLIT DIVIDER SEAM */}
      {/* ============================================================== */}
      <div 
        className="absolute top-0 bottom-0 z-20 flex flex-col items-center pointer-events-auto cursor-ew-resize transition-all duration-75"
        style={{ left: `${splitPercent}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Top Handle / Seam Line */}
        <div className="w-[2px] h-full bg-gradient-to-b from-[#E8111B] via-white to-[#F5B041] shadow-[0_0_12px_rgba(255,255,255,0.7)]" />

        {/* Sleek Vertical Drag Badge (Positioned safely above character) */}
        <div 
          className="absolute top-[28%] bg-[#111111] text-white border border-white/70 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-2xl hover:scale-110 active:scale-95 transition-transform"
        >
          <MoveHorizontal className="w-3 h-3 text-[#F5B041]" />
          <span className="text-[9px] font-mono font-bold tracking-wider uppercase hidden sm:inline">
            {Math.round(splitPercent)}%
          </span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* HERO HEADLINE (MATCHES UPLOADED REFERENCE IMAGE ALIGNMENT) */}
      {/* ============================================================== */}
      <div className="relative z-10 container mx-auto px-2 sm:px-6 flex flex-col items-center text-center">
        {/* Top Sub-Badge: First-year B.Tech CSE (AI) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono mb-3 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E8111B] animate-pulse" />
          <span className="font-semibold text-gray-200">SUHAIL</span>
          <span className="text-gray-500">|</span>
          <span className="text-amber-400">1st Year B.Tech CSE (AI) • Thejus Engg College</span>
        </div>

        {/* Split Headline: HE BUILDS (Left, Black) | BOTH SIDES. (Right, Amber) */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 items-center gap-0 my-1">
          {/* Left half: HE BUILDS */}
          <div className="flex flex-col items-end pr-3 sm:pr-8">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#111111] uppercase select-none leading-none">
              {PORTFOLIO_DATA.personal.headlineLeft}
            </h1>
            <div className="w-12 sm:w-24 h-1 bg-[#111111] mt-2 rounded-full opacity-60" />
          </div>

          {/* Right half: BOTH SIDES. */}
          <div className="flex flex-col items-start pl-3 sm:pl-8">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#F5B041] uppercase select-none drop-shadow-[0_0_20px_rgba(245,176,65,0.4)] leading-none">
              {PORTFOLIO_DATA.personal.headlineRight}
            </h1>
            <div className="w-12 sm:w-24 h-1 bg-[#F5B041] mt-2 rounded-full opacity-60" />
          </div>
        </div>

        {/* Subtitle pill */}
        <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/20 text-[11px] font-mono text-gray-200 shadow-md">
          <span className="text-[#E8111B] font-bold">I DESIGN.</span>
          <span className="text-white">I CODE.</span>
          <span className="text-[#F5B041] font-bold">I BUILD BOTH SIDES.</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* HERO CHARACTER (SPLIT IN THE CENTER) */}
      {/* ============================================================== */}
      <div className="relative z-10 w-full flex items-center justify-center my-auto py-1">
        <SplitHeroCharacter 
          mouseX={mousePos.x} 
          mouseY={mousePos.y} 
          splitPercent={splitPercent} 
        />
      </div>

      {/* ============================================================== */}
      {/* CTA BUTTONS & QUICK PRESETS */}
      {/* ============================================================== */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center gap-3">
        {/* Buttons Group */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="group relative px-5 sm:px-6 py-3 bg-[#E8111B] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg border-2 border-[#111111] shadow-brutalist-dark hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
          >
            <Palette className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>View Projects</span>
          </a>

          <a
            href="#contact"
            className="group px-5 sm:px-6 py-3 bg-[#161922] text-[#F5B041] hover:text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase rounded-lg border border-[#F5B041]/50 hover:border-[#F5B041] shadow-[0_0_15px_rgba(245,176,65,0.2)] hover:bg-[#F5B041]/10 transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-[#F5B041]" />
            <span>$ contact_me</span>
          </a>
        </div>

        {/* Quick Split Balance Presets */}
        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-gray-300 bg-[#111111]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-md">
          <span className="text-gray-400">SPLIT:</span>
          <button 
            onClick={() => setSplitPercent(80)}
            className={`px-1.5 py-0.5 rounded transition-colors ${splitPercent > 65 ? 'bg-[#E8111B] text-white font-bold' : 'hover:text-white'}`}
          >
            Designer 80%
          </button>
          <span>/</span>
          <button 
            onClick={() => setSplitPercent(50)}
            className={`px-1.5 py-0.5 rounded transition-colors ${splitPercent >= 45 && splitPercent <= 55 ? 'bg-white text-black font-bold' : 'hover:text-white'}`}
          >
            50:50
          </button>
          <span>/</span>
          <button 
            onClick={() => setSplitPercent(20)}
            className={`px-1.5 py-0.5 rounded transition-colors ${splitPercent < 35 ? 'bg-[#F5B041] text-black font-bold' : 'hover:text-white'}`}
          >
            Dev 80%
          </button>
        </div>

        {/* Scroll prompt */}
        <a 
          href="#about" 
          className="text-gray-400 hover:text-white flex flex-col items-center gap-0.5 transition-colors animate-bounce mt-1"
        >
          <span className="text-[9px] font-mono uppercase tracking-widest">Explore</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
