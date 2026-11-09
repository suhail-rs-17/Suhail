import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSplit } from './components/HeroSplit';
import { AboutSection } from './components/AboutSection';
import { SkillsSplit } from './components/SkillsSplit';
import { ProjectsSection } from './components/ProjectsSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { ContactTerminal } from './components/ContactTerminal';
import { Footer } from './components/Footer';

export function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize smooth scrolling with Lenis
    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (e) {
      console.warn("Lenis initialization skipped:", e);
    }

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1117] text-white flex flex-col relative selection:bg-[#E8111B] selection:text-white">
      {/* Page Load Split Wipe Preloader */}
      <Preloader onFinish={() => setLoaded(true)} />

      {/* Trailing Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Full-Screen Split Personality Hero */}
        <HeroSplit />

        {/* 2. College & Origin Story + Stats */}
        <AboutSection />

        {/* 3. Split Skills (Designer vs Developer) */}
        <SkillsSplit />

        {/* 4. Interactive Projects with Design View vs Code View */}
        <ProjectsSection />

        {/* 5. Scroll-drawn Journey & Milestones */}
        <JourneyTimeline />

        {/* 6. Terminal Message Dispatcher & Socials */}
        <ContactTerminal />
      </main>

      {/* 7. Minimal Brutalist Footer with Back-to-Top */}
      <Footer />
    </div>
  );
}

export default App;

