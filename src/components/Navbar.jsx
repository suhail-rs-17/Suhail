import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      setLocalTime(`${istTime} IST`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "$ contact", href: "#contact", isCode: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Scroll Reading Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-[#E8111B] via-white to-[#F5B041] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0F1117]/95 backdrop-blur-md border-b border-[#2A3042] py-2.5 shadow-xl' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand Pill (High-contrast on both cream and dark backgrounds) */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 bg-[#111111]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md group hover:border-[#F5B041] transition-all"
          >
            <div className="w-7 h-7 rounded-full bg-[#1E2330] border border-[#E8111B] flex items-center justify-center font-heading font-black text-xs text-white group-hover:scale-105 transition-transform">
              <span className="text-[#E8111B]">S</span>
              <span className="text-[#F5B041]">.</span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-heading font-black tracking-wider text-xs sm:text-sm text-white">
                SUHAIL
              </span>
              <span className="text-[9px] font-mono text-gray-400 hidden xs:inline">
                Thejus AI • Thrissur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#161922]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#2A3042] shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1 text-xs font-mono rounded-full transition-all ${
                  link.isCode 
                    ? 'text-[#F5B041] hover:bg-[#F5B041]/10 font-bold' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Extras: Kerala Time + GitHub */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live Clock / Location Pill */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-300 bg-[#111111]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Thrissur, KL</span>
              <span className="text-gray-500">|</span>
              <span className="text-amber-400 font-semibold">{localTime || '14:40 IST'}</span>
            </div>

            {/* Social Icons */}
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111111]/90 text-gray-300 hover:text-white border border-white/20 hover:border-[#F5B041] transition-colors shadow-md"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#111111]/90 border border-white/20 text-white shadow-md"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1117] border-b border-[#2A3042] px-6 py-6 space-y-4 shadow-2xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-mono text-gray-300 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2A3042] flex items-center justify-between text-xs font-mono text-gray-400">
            <span>Thejus Engineering College</span>
            <span className="text-amber-400">{localTime}</span>
          </div>
        </div>
      )}
    </header>
  );
};
