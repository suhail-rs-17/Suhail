import React from 'react';
import { Award, GraduationCap, MapPin, Sparkles, Terminal, Flame, Compass, Cpu, Palette } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#0B0D12] border-t border-b border-[#202533] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E8111B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5B041]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#2A3042] text-[11px] font-mono text-[#F5B041] uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 // The Dual Identity</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase max-w-3xl">
            Where Aesthetic Craft Meets <span className="text-[#E8111B]">Artificial Intelligence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8111B] to-[#F5B041] mt-4 rounded-full" />
        </div>

        {/* Main Content Grid: Split Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Academic & Origin Story */}
          <div className="lg:col-span-7 bg-[#161922] border border-[#2A3042] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <GraduationCap className="w-36 h-36 text-white" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-[#E8111B]" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                  Engineering Student Profile
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                Hey, I’m <span className="text-white underline decoration-[#E8111B] decoration-4 underline-offset-4">Suhail</span>.
              </h3>

              <div className="space-y-4 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  I am a first-year <strong className="text-white">B.Tech Computer Science and Engineering (Artificial Intelligence)</strong> undergraduate at <span className="text-[#F5B041] font-semibold">Thejus Engineering College</span>, nestled in Vellarakkad, Thrissur, Kerala.
                </p>
                <p>
                  Most developers either treat design as an afterthought or designers view code as an impenetrable black box. I chose not to compromise: <em className="text-white font-medium">I build both sides.</em>
                </p>
                <p className="text-gray-400">
                  By day, I study discrete mathematics, algorithms, and tensor calculus while designing neo-brutalist component architectures in Figma. By night, I turn those designs into living, responsive web software and experiment with real-time neural interfaces.
                </p>
              </div>
            </div>

            {/* Badges bar */}
            <div className="mt-8 pt-6 border-t border-[#242A38] flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1117] border border-[#2A3042] text-xs font-mono text-gray-300">
                <GraduationCap className="w-3.5 h-3.5 text-[#E8111B]" />
                <span>Thejus Engineering College</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1117] border border-[#2A3042] text-xs font-mono text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-[#F5B041]" />
                <span>Thrissur, Kerala</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1117] border border-[#2A3042] text-xs font-mono text-gray-300">
                <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>CSE (Artificial Intelligence)</span>
              </div>
            </div>
          </div>

          {/* Right Column: The Split Philosophy Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* The Designer Side Pill */}
            <div className="bg-[#F3F0E8] text-[#111111] p-6 rounded-2xl border-2 border-[#111111] shadow-[4px_4px_0px_#111111] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[#E8111B] font-bold text-xs uppercase font-mono tracking-wider">
                    <Palette className="w-4 h-4" />
                    <span>The Designer Half</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-white">#F3F0E8</span>
                </div>
                <h4 className="font-heading font-black text-xl mb-2">Tactile, Brutalist & Intuitive</h4>
                <p className="text-xs text-[#444] leading-relaxed">
                  Deep reverence for typography, visual rhythm, micro-affordances, and spatial tension. Designing systems that feel concrete and memorable.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DFD6C5] flex items-center justify-between text-[11px] font-mono font-semibold">
                <span>FIGMA • DESIGN TOKENS • UI/UX</span>
                <span className="text-[#E8111B]">92% ACCURACY</span>
              </div>
            </div>

            {/* The Developer Side Pill */}
            <div className="bg-[#161922] text-white p-6 rounded-2xl border border-[#F5B041]/40 shadow-[0_0_20px_rgba(245,176,65,0.1)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[#F5B041] font-bold text-xs uppercase font-mono tracking-wider">
                    <Terminal className="w-4 h-4" />
                    <span>The Developer Half</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5B041]/20 text-[#F5B041]">#0F1117</span>
                </div>
                <h4 className="font-heading font-black text-xl mb-2">Resilient, Typed & Fast</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-mono">
                  Writing clean, self-documenting code with strong typing, zero unnecessary dependencies, and high-performance rendering loops.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#242A38] flex items-center justify-between text-[11px] font-mono font-semibold text-gray-400">
                <span className="text-[#F5B041]">REACT • PYTHON • AI • TAILWIND</span>
                <span className="text-[#10B981]">OK (100% TESTS)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Count-Up Statistics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#161922] border border-[#2A3042] hover:border-[#F5B041]/60 p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className={`w-2 h-2 rounded-full ${idx % 2 === 0 ? 'bg-[#E8111B]' : 'bg-[#F5B041]'}`} />
              </div>
              <div className="text-3xl sm:text-5xl font-heading font-black text-white group-hover:text-[#F5B041] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-500 mt-2">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

