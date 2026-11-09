import React from 'react';
import { ArrowUp, Terminal, Heart, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#080A0E] border-t border-[#1F2430] py-12 relative overflow-hidden font-mono text-xs">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#181C26]">
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-white text-base tracking-wider">
                SUHAIL
              </span>
              <span className="text-[#E8111B] font-bold">//</span>
              <span className="text-[#F5B041] font-bold">I BUILD BOTH SIDES.</span>
            </div>
            <p className="text-gray-500 text-[11px]">
              1st Year B.Tech CSE (AI) • Thejus Engineering College, Thrissur
            </p>
          </div>

          {/* Center: Live Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121620] border border-[#242A38] text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="text-[11px] text-gray-300 font-semibold">Open to Engineering Internships & Projects</span>
          </div>

          {/* Right: Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#161922] hover:bg-[#F5B041] text-gray-300 hover:text-[#0F1117] border border-[#2A3042] hover:border-[#F5B041] rounded-lg transition-all font-bold group shadow-md"
            title="Scroll to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Suhail. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with React, Vite, Tailwind CSS & GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

