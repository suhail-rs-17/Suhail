import React, { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Trailing ring animation
  useEffect(() => {
    if (isTouchDevice) return;

    let frameId;
    const animateTrail = () => {
      setTrailingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      frameId = requestAnimationFrame(animateTrail);
    };

    frameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(frameId);
  }, [pos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small Lead Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#E8111B] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-difference"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />

      {/* Trailing Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-200 ease-out border ${
          isHovering
            ? 'w-12 h-12 bg-[#F5B041]/20 border-[#F5B041] scale-110'
            : 'w-7 h-7 bg-transparent border-white/60 scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

