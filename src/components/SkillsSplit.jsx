import React, { useState } from 'react';
import { Palette, Terminal, Cpu, Layout, Sparkles, CheckCircle2, ChevronRight, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSplit = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [terminalFilter, setTerminalFilter] = useState('');

  return (
    <section id="skills" className="py-24 bg-[#0F1117] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#2A3042] text-[11px] font-mono text-[#F5B041] uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // The Dual Toolkit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase max-w-2xl">
            Split Capabilities
          </h2>
          <p className="mt-3 text-sm font-mono text-gray-400 max-w-xl">
            Two specialized halves working in synchronization: tactile visual architecture on the left, deterministic engineering on the right.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* ========================================================== */}
          {/* LEFT COLUMN: DESIGNER SKILLS (CREAM & RED BRUTALIST) */}
          {/* ========================================================== */}
          <div className="bg-[#F3F0E8] text-[#111111] rounded-2xl border-2 border-[#111111] shadow-[8px_8px_0px_#111111] p-6 sm:p-8 relative overflow-hidden group">
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#111111] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#E8111B] text-white rounded-lg shadow-sm">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black uppercase text-[#111111]">
                    Designer Arsenal
                  </h3>
                  <p className="text-xs font-mono text-[#666]">
                    UI/UX • Design Systems • Figma
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono font-bold bg-[#E8111B] text-white px-2.5 py-1 rounded-full shadow-[2px_2px_0px_#111]">
                CREATIVE
              </span>
            </div>

            {/* Philosophy quote */}
            <p className="text-xs font-sans italic text-[#444] mb-6 p-3 bg-[#EAE5D9] rounded-lg border border-[#D5CCBA]">
              "{PORTFOLIO_DATA.designerSide.philosophy}"
            </p>

            {/* Skills List with Brutalist Meters */}
            <div className="space-y-4 mb-8">
              {PORTFOLIO_DATA.designerSide.skills.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span className="text-[#111111] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E8111B]" />
                      {skill.name}
                    </span>
                    <span className="text-[#E8111B] bg-white px-1.5 py-0.5 rounded border border-[#111] text-[10px]">
                      {skill.tag} • {skill.level}%
                    </span>
                  </div>
                  {/* Custom brutalist progress track */}
                  <div className="h-3 w-full bg-[#E5DFCFC] rounded-full border border-[#111111] p-0.5 overflow-hidden">
                    <div 
                      className="h-full bg-[#E8111B] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Chip Matrix */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#777] font-bold block mb-3">
                PRIMARY DESIGN SUITE:
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.designerSide.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white hover:bg-[#E8111B] hover:text-white transition-colors duration-200 text-[#111111] border border-[#111111] rounded-md text-xs font-mono font-semibold shadow-[2px_2px_0px_#111] cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: DEVELOPER SKILLS (DARK TERMINAL STYLE) */}
          {/* ========================================================== */}
          <div className="bg-[#161922] text-[#E5E7EB] rounded-2xl border border-[#2A3042] shadow-[0_15px_35px_rgba(0,0,0,0.5)] p-6 sm:p-8 relative overflow-hidden group hover:border-[#F5B041]/50 transition-colors">
            {/* Top Bar Header (macOS terminal style) */}
            <div className="flex items-center justify-between pb-4 border-b border-[#2A3042] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#F5B041]/10 text-[#F5B041] border border-[#F5B041]/30 rounded-lg">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-black uppercase text-white">
                    Developer Stack
                  </h3>
                  <p className="text-xs font-mono text-[#8B949E]">
                    React • Python • AI/ML • Systems
                  </p>
                </div>
              </div>

              {/* Terminal traffic lights */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>
            </div>

            {/* Philosophy quote */}
            <p className="text-xs font-mono text-[#8B949E] mb-6 p-3 bg-[#0F1117] rounded-lg border border-[#242A38]">
              $ echo "{PORTFOLIO_DATA.developerSide.philosophy}"
            </p>

            {/* Skills List with Terminal Progress Meters */}
            <div className="space-y-4 mb-8">
              {PORTFOLIO_DATA.developerSide.skills.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-200 flex items-center gap-1.5">
                      <span className="text-[#F5B041]">&gt;</span>
                      {skill.name}
                    </span>
                    <span className="text-[#F5B041] bg-[#0F1117] px-2 py-0.5 rounded border border-[#2A3042] text-[10px]">
                      {skill.tag} • {skill.level}%
                    </span>
                  </div>
                  {/* Custom terminal progress track */}
                  <div className="h-3 w-full bg-[#0F1117] rounded border border-[#2A3042] p-0.5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#F5B041] to-[#E5A93C] rounded transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(245,176,65,0.4)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Chip Matrix */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8B949E] font-bold block mb-3">
                $ WHICH TOOLS_INSTALLED
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.developerSide.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-[#0F1117] hover:bg-[#F5B041]/20 hover:text-[#F5B041] hover:border-[#F5B041] transition-all duration-200 text-gray-300 border border-[#2A3042] rounded-md text-xs font-mono cursor-default flex items-center gap-1"
                  >
                    <span className="text-[#F5B041]">$</span>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

