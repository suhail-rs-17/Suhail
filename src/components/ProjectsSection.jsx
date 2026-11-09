import React, { useState } from 'react';
import { Palette, Terminal, ExternalLink, Github, Sparkles, Layers, Code, CheckCircle, RefreshCw, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ProjectsSection = () => {
  // Store view mode ('design' | 'code') for each project by ID
  const [projectViews, setProjectViews] = useState({
    auraneural: 'design',
    hypervex: 'code',
    'thejus-ai': 'design',
    omnipulse: 'code',
  });

  const toggleView = (projectId) => {
    setProjectViews(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 'design' ? 'code' : 'design',
    }));
  };

  return (
    <section id="projects" className="py-24 bg-[#0B0D12] border-t border-b border-[#202533] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#2A3042] text-[11px] font-mono text-[#F5B041] uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>03 // Dual-Engine Works</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase max-w-2xl">
            Selected Projects
          </h2>
          <p className="mt-3 text-sm font-mono text-gray-400 max-w-xl">
            Every project is conceived on both sides of the screen: testable code algorithms paired with deliberate, high-contrast visual design.
          </p>

          {/* Interactive Hint */}
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#161922] px-3 py-1 rounded-full border border-[#2A3042]">
            <RefreshCw className="w-3 h-3 text-[#F5B041] animate-spin" />
            <span>Flip card between [Design View] and [Code View] below</span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PORTFOLIO_DATA.projects.map((project) => {
            const currentView = projectViews[project.id] || 'design';
            const isDesign = currentView === 'design';

            return (
              <div
                key={project.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group ${
                  isDesign 
                    ? 'bg-[#F3F0E8] text-[#111111] border-2 border-[#111111] shadow-[8px_8px_0px_#111111]' 
                    : 'bg-[#161922] text-[#E5E7EB] border border-[#2A3042] shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-[#F5B041]'
                }`}
              >
                {/* Project Header Bar */}
                <div className={`p-5 sm:p-6 pb-4 border-b ${
                  isDesign ? 'border-[#111111] bg-[#EBE5D8]' : 'border-[#242A38] bg-[#12151D]'
                } flex items-center justify-between`}>
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${
                      isDesign ? 'text-[#E8111B]' : 'text-[#F5B041]'
                    }`}>
                      {project.subtitle}
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-heading font-black tracking-tight ${
                      isDesign ? 'text-[#111111]' : 'text-white'
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* FLIP TOGGLE BUTTON */}
                  <button
                    onClick={() => toggleView(project.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all shadow-sm ${
                      isDesign
                        ? 'bg-[#111111] text-white hover:bg-[#E8111B]'
                        : 'bg-[#F5B041] text-[#0F1117] hover:bg-white'
                    }`}
                    title="Flip between Design View and Code View"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{isDesign ? 'Switch to Code' : 'Switch to Design'}</span>
                  </button>
                </div>

                {/* Card Body with Dynamic View */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <p className={`text-xs sm:text-sm mb-5 leading-relaxed ${
                    isDesign ? 'text-[#333]' : 'text-gray-300'
                  }`}>
                    {project.description}
                  </p>

                  {/* ================================================== */}
                  {/* VIEW A: DESIGN VIEW */}
                  {/* ================================================== */}
                  {isDesign ? (
                    <div className="bg-[#FAF7F0] rounded-xl border border-[#D5CCBA] p-4 mb-5 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-[#E8111B]">
                        <span className="flex items-center gap-1.5">
                          <Palette className="w-3.5 h-3.5" />
                          DESIGN SYSTEM SPEC
                        </span>
                        <span className="text-[10px] bg-[#E8111B] text-white px-2 py-0.5 rounded">
                          FIGMA COMPONENT
                        </span>
                      </div>

                      <p className="text-xs text-[#222] font-sans">
                        {project.designerAspect.highlight}
                      </p>

                      {/* Color Palette Swatches */}
                      <div className="pt-2 border-t border-[#DFD6C5] flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#666]">PALETTE:</span>
                        <div className="flex items-center gap-1.5">
                          {project.designerAspect.swatches.map((hex, i) => (
                            <span 
                              key={i} 
                              className="w-5 h-5 rounded border border-[#111] shadow-xs cursor-help"
                              style={{ backgroundColor: hex }}
                              title={hex}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="text-[10px] font-mono text-[#555] bg-white p-2 rounded border border-[#E0D8C8]">
                        <strong>Wireframe Note:</strong> {project.designerAspect.wireframeConcept}
                      </div>
                    </div>
                  ) : (
                    /* ================================================== */
                    /* VIEW B: CODE VIEW */
                    /* ================================================== */
                    <div className="bg-[#0B0E14] rounded-xl border border-[#242A38] p-4 mb-5 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-[#F5B041]">
                        <span className="flex items-center gap-1.5 font-bold">
                          <Terminal className="w-3.5 h-3.5" />
                          ENGINEERING RUNTIME
                        </span>
                        <span className="text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">
                          {project.developerAspect.metrics.split('|')[0]}
                        </span>
                      </div>

                      {/* Code Snippet Box */}
                      <pre className="p-3 bg-[#080A0E] rounded border border-[#1E2430] text-[#E2E8F0] overflow-x-auto text-[11px] leading-tight">
                        <code>{project.developerAspect.codeSnippet}</code>
                      </pre>

                      {/* Terminal Output */}
                      <div className="p-2.5 bg-[#121620] rounded text-[10px] text-[#8B949E] border border-[#1F2633] whitespace-pre-wrap">
                        {project.developerAspect.terminalOutput}
                      </div>
                    </div>
                  )}

                  {/* Tags Pill Row */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isDesign 
                            ? 'bg-[#E3DDD0] text-[#111] border border-[#111]' 
                            : 'bg-[#0F1117] text-gray-300 border border-[#2A3042]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Links */}
                  <div className={`pt-4 border-t flex items-center justify-between ${
                    isDesign ? 'border-[#D5CCBA]' : 'border-[#242A38]'
                  }`}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold transition-colors ${
                        isDesign 
                          ? 'text-[#E8111B] hover:text-black' 
                          : 'text-[#F5B041] hover:text-white'
                      }`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Sandbox</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors ${
                        isDesign 
                          ? 'text-[#111111] hover:text-[#E8111B]' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

