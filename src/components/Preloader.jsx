import React, { useState, useEffect } from 'react';

export const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isWiping, setIsWiping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.search.includes('nopreloader') || window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      setIsDone(true);
      if (onFinish) onFinish();
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsWiping(true), 150);
          setTimeout(() => {
            setIsDone(true);
            if (onFinish) onFinish();
          }, 850);
          return 100;
        }
        // quick count up
        return prev + 15;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onFinish]);

  if (isDone) return null;

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none select-none overflow-hidden">
      {/* Left Red Wipe Half */}
      <div
        className={`w-1/2 h-full bg-[#E8111B] flex items-center justify-end pr-4 transition-transform duration-700 ease-in-out ${
          isWiping ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className={`text-right transition-opacity duration-300 ${isWiping ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tighter">
            I DESIGN.
          </div>
          <div className="text-xs font-mono text-white/80 mt-1 uppercase tracking-widest">
            Tactile Craft
          </div>
        </div>
      </div>

      {/* Right Dark Wipe Half */}
      <div
        className={`w-1/2 h-full bg-[#0F1117] flex items-center justify-start pl-4 border-l border-white/20 transition-transform duration-700 ease-in-out ${
          isWiping ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <div className={`text-left transition-opacity duration-300 ${isWiping ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-3xl sm:text-5xl font-heading font-black text-[#F5B041] tracking-tighter">
            I CODE.
          </div>
          <div className="text-xs font-mono text-gray-400 mt-1 uppercase tracking-widest flex items-center gap-2">
            <span>SYS_INIT: {Math.min(100, progress)}%</span>
            <span className="w-2 h-2 rounded-full bg-[#F5B041] animate-ping" />
          </div>
        </div>
      </div>

      {/* Center Counter Badge */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] text-white px-4 py-2 rounded-full border border-white/40 shadow-2xl font-mono text-xs font-bold transition-all duration-300 ${
          isWiping ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        SUHAIL // {Math.min(100, progress)}%
      </div>
    </div>
  );
};
