import React from 'react';
import { Milestone, GraduationCap, Code2, Palette, Sparkles, Terminal, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const JourneyTimeline = () => {
  return (
    <section id="journey" className="py-24 bg-[#0F1117] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#2A3042] text-[11px] font-mono text-[#F5B041] uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>04 // Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase max-w-2xl">
            The Journey So Far
          </h2>
          <p className="mt-3 text-sm font-mono text-gray-400 max-w-xl">
            From the initial spark of visual coding to formal Artificial Intelligence engineering at Thejus Engineering College.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Spine Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#E8111B] via-white to-[#F5B041] transform sm:-translate-x-1/2 opacity-40 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

          {/* Timeline Nodes */}
          <div className="space-y-12 relative">
            {PORTFOLIO_DATA.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#111] border-2 border-[#F5B041] text-[#F5B041] z-20 shadow-lg group-hover:scale-125 transition-transform">
                    {index === 0 ? (
                      <GraduationCap className="w-4 h-4 text-[#E8111B]" />
                    ) : index === 1 ? (
                      <Palette className="w-4 h-4 text-[#E8111B]" />
                    ) : index === 2 ? (
                      <Terminal className="w-4 h-4 text-[#F5B041]" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0">
                    <div 
                      className={`p-6 rounded-2xl transition-all duration-300 ${
                        item.side === 'designer' 
                          ? 'bg-[#F3F0E8] text-[#111111] border-2 border-[#111111] shadow-[6px_6px_0px_#111111]' 
                          : item.side === 'developer'
                          ? 'bg-[#161922] text-[#E5E7EB] border border-[#2A3042] shadow-xl hover:border-[#F5B041]'
                          : 'bg-[#161922] text-white border-2 border-white/20 shadow-2xl relative overflow-hidden'
                      }`}
                    >
                      {item.side === 'split' && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8111B] via-white to-[#F5B041]" />
                      )}

                      {/* Period & Badge */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${
                          item.side === 'designer' ? 'text-[#E8111B]' : 'text-[#F5B041]'
                        }`}>
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>

                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          item.side === 'designer'
                            ? 'bg-[#111111] text-white'
                            : 'bg-white/10 text-gray-300'
                        }`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg sm:text-xl font-heading font-black mb-1 ${
                        item.side === 'designer' ? 'text-[#111111]' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Institution */}
                      <div className={`text-xs font-mono mb-3 ${
                        item.side === 'designer' ? 'text-[#666]' : 'text-gray-400'
                      }`}>
                        {item.institution}
                      </div>

                      {/* Description */}
                      <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                        item.side === 'designer' ? 'text-[#333]' : 'text-gray-300'
                      }`}>
                        {item.description}
                      </p>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              item.side === 'designer'
                                ? 'bg-white text-[#111] border border-[#111]'
                                : 'bg-[#0F1117] text-gray-300 border border-[#2A3042]'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

