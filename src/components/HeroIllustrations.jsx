import React from 'react';
import { Terminal, Database, Server, Layers, Figma, Sparkles } from 'lucide-react';

export const DesignerUIElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Main Browser Mockup (Matches uploaded reference image!) - Visible on lg+ screens */}
      <div 
        className="hidden lg:block absolute top-[22%] left-[4%] xl:left-[8%] w-[300px] xl:w-[350px] bg-[#EBE5D8] rounded-xl border-2 border-[#111111] shadow-[6px_6px_0px_#111111] overflow-hidden transform -rotate-1 transition-transform hover:rotate-0 duration-300 pointer-events-auto"
      >
        {/* Vivid Red Browser Top Header Bar */}
        <div className="bg-[#E8111B] px-3 py-2 flex items-center justify-between border-b-2 border-[#111111]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white opacity-80" />
            <span className="w-2.5 h-2.5 rounded-full bg-white opacity-80" />
            <span className="w-2.5 h-2.5 rounded-full bg-white opacity-80" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">design-system.fig</span>
          <span className="w-2.5" />
        </div>

        {/* Browser Body */}
        <div className="p-4 space-y-3 bg-[#F4EFE6]">
          {/* Black Title block */}
          <div className="h-4 w-3/4 bg-[#111111] rounded-sm" />
          {/* Text placeholder lines */}
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-[#D6CEBE] rounded" />
            <div className="h-2 w-5/6 bg-[#D6CEBE] rounded" />
          </div>

          {/* Interactive Row: Red Button with Pointer + Figma Badge */}
          <div className="pt-2 flex items-center gap-3 relative">
            <div className="relative group">
              <button 
                type="button"
                className="px-4 py-1.5 bg-[#E8111B] hover:bg-[#C20E16] text-white text-xs font-bold rounded-full shadow-[2px_2px_0px_#111] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                Publish UI
              </button>
              {/* Figma cursor icon overlay */}
              <div className="absolute -bottom-3 -right-4 flex items-center gap-1 animate-bounce">
                <svg className="w-5 h-5 drop-shadow" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4L11 20L14 13L21 10L4 4Z" fill="#111111" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
                <div className="bg-white border border-[#111] rounded px-1 text-[9px] font-bold text-[#111] flex items-center gap-0.5 shadow-sm">
                  <Figma className="w-2.5 h-2.5 text-[#E8111B]" />
                  <span>Suhail</span>
                </div>
              </div>
            </div>

            {/* Red Toggle Switch */}
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="text-[10px] font-mono text-[#62605C] font-semibold">AUTO</span>
              <div className="w-9 h-5 bg-[#E8111B] rounded-full p-0.5 flex items-center justify-end shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full shadow-md" />
              </div>
            </div>
          </div>

          {/* Color Swatches Palette (from reference image) */}
          <div className="pt-2 border-t border-[#DFD6C5] flex items-center gap-2">
            <span className="text-[9px] font-mono text-[#777]">TOKENS:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-[#111111] border border-[#999] shadow-xs" title="#111111" />
              <span className="w-4 h-4 rounded bg-[#E8111B] border border-[#999] shadow-xs" title="#E8111B" />
              <span className="w-4 h-4 rounded bg-[#F8A5A5] border border-[#999] shadow-xs" title="#F8A5A5" />
              <span className="w-4 h-4 rounded bg-[#EAE5D9] border border-[#999] shadow-xs" title="#EAE5D9" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Image Placeholder Card with Mountain & Red Sun (Matches reference image!) */}
      <div 
        className="hidden sm:block absolute bottom-[18%] left-[4%] xl:left-[10%] w-[160px] sm:w-[190px] bg-white rounded-lg border-2 border-[#111111] shadow-[4px_4px_0px_#111111] p-2.5 transform rotate-2 transition-transform hover:rotate-0 pointer-events-auto"
      >
        <div className="w-full h-20 bg-[#EFE9DD] rounded relative overflow-hidden flex items-end justify-center border border-[#D5CCBA]">
          {/* Circular Red Sun */}
          <div className="absolute top-2 right-3 w-5 h-5 rounded-full bg-[#E8111B] shadow-sm" />
          {/* Black Mountain Silhouette */}
          <svg className="w-full h-14" viewBox="0 0 100 50" preserveAspectRatio="none">
            <polygon points="0,50 30,22 55,50" fill="#2E2E33" />
            <polygon points="35,50 65,10 100,50" fill="#111111" />
          </svg>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-[#666]">
          <span>asset-01</span>
          <span className="text-[#E8111B] font-bold">SVG</span>
        </div>
      </div>

      {/* 3. Typography Lettering Stamp */}
      <div 
        className="hidden md:flex absolute top-[70%] left-[2%] items-center justify-center w-12 h-12 bg-[#E8111B] text-white font-heading font-black text-2xl rounded-lg border-2 border-[#111111] shadow-[3px_3px_0px_#111111] -rotate-6"
      >
        a
      </div>
    </div>
  );
};

export const DeveloperUIElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Terminal Window (Matches reference image!) - Visible on lg+ screens */}
      <div 
        className="hidden lg:block absolute top-[22%] right-[4%] xl:right-[8%] w-[310px] xl:w-[370px] bg-[#161922] rounded-xl border border-[#2A3042] shadow-[0_20px_40px_rgba(0,0,0,0.7)] overflow-hidden font-mono text-xs transform rotate-1 transition-transform hover:rotate-0 pointer-events-auto"
      >
        {/* Terminal Header with macOS dots */}
        <div className="bg-[#1C212E] px-3 py-2 flex items-center justify-between border-b border-[#2A3042]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          </div>
          <span className="text-[11px] text-[#8B949E] flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#F5B041]" />
            zsh — 80x24
          </span>
          <span className="text-[10px] text-[#555E6D]">UTF-8</span>
        </div>

        {/* Terminal Content (Directly from reference image) */}
        <div className="p-4 space-y-2.5 bg-[#0F1117] text-[#C9D1D9] relative">
          {/* Line 1 */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#8B949E]">$</span>
              <span className="text-white font-semibold">bin/phpunit</span>
            </div>
            <span className="text-[#484F58] text-[10px]">01 —</span>
          </div>
          <div className="flex items-center justify-between pl-4 text-[#F5B041] font-bold">
            <span>OK (3,358 tests)</span>
            <span className="text-[#484F58] text-[10px]">02 —</span>
          </div>

          {/* Line 2 */}
          <div className="flex items-start justify-between pt-1 border-t border-[#1F2430]">
            <div className="flex items-center gap-2">
              <span className="text-[#8B949E]">$</span>
              <span className="text-[#E2E8F0]">curl /api/work_orders</span>
            </div>
            <span className="text-[#484F58] text-[10px]">03 —</span>
          </div>
          <div className="flex items-center justify-between pl-4 text-[#F5B041]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              HTTP/2 200 OK
            </span>
            <span className="text-[#484F58] text-[10px]">04 —</span>
          </div>

          {/* Line 3 */}
          <div className="flex items-start justify-between pt-1 border-t border-[#1F2430]">
            <div className="flex items-center gap-2">
              <span className="text-[#8B949E]">$</span>
              <span className="text-[#38BDF8]">mercure publish /jobs</span>
            </div>
            <span className="text-[#484F58] text-[10px]">05 —</span>
          </div>

          {/* Prompt active cursor */}
          <div className="flex items-center gap-2 pt-1 text-[#F5B041]">
            <span className="text-[#8B949E]">$</span>
            <span className="w-2 h-4 bg-[#F5B041] animate-pulse" />
            <span className="text-[#484F58] text-[10px] ml-auto">06 —</span>
          </div>
        </div>
      </div>

      {/* 2. Server Rack with Docker Whale & LED Indicators (Matches reference image!) */}
      <div 
        className="hidden sm:block absolute bottom-[18%] right-[4%] xl:right-[10%] w-[180px] sm:w-[210px] bg-[#161922] rounded-lg border border-[#2A3042] p-2.5 shadow-2xl pointer-events-auto"
      >
        <div className="flex items-center justify-between pb-1.5 border-b border-[#242A38]">
          <div className="flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-[#F5B041]" />
            <span className="text-[11px] font-mono text-[#E2E8F0] font-bold">RACK-01</span>
          </div>
          {/* LED Indicators (Red & Green from reference image) */}
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#E8111B]" />
          </div>
        </div>

        {/* Server Bay 1 & Docker icon */}
        <div className="pt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#F5B041]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3v2h2V3h-2zm-3 3v2h2V6h-2zm3 0v2h2V6h-2zm3 0v2h2V6h-2zm-9 3v2h2V9H7zm3 0v2h2V9h-2zm3 0v2h2V9h-2zm3 0v2h2V9h-2zm-9 3v2h2v-2H7zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm4.5 0c-.3-.8-.9-1.5-1.7-2l.2-.9c.1-.4 0-.8-.3-1.1-.3-.3-.7-.4-1.1-.3l-1.5.4C18.1 9.4 16.6 9 15 9V8H4v5c0 3.3 2.7 6 6 6h6.5c3.6 0 6.5-2.9 6.5-6.5 0-.2 0-.3 0-.5h-.5z" />
            </svg>
            <span className="text-[10px] font-mono text-[#8B949E]">CONTAINERS: 12</span>
          </div>
          <span className="text-[9px] font-mono text-[#F5B041] bg-[#F5B041]/10 px-1.5 py-0.5 rounded">UP</span>
        </div>
      </div>

      {/* 3. Database Cylinder Icon */}
      <div 
        className="hidden 2xl:flex absolute bottom-[22%] right-[2%] flex-col items-center justify-center w-14 h-18 bg-[#161922] rounded-xl border border-[#2A3042] p-2 shadow-lg"
      >
        <Database className="w-6 h-6 text-[#F5B041] mb-1" />
        <span className="text-[8px] font-mono text-[#8B949E]">REDIS</span>
        <div className="w-1.5 h-0.5 bg-[#F5B041] mt-1 rounded-full animate-pulse" />
      </div>
    </div>
  );
};
