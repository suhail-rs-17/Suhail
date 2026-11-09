import React from 'react';

export const SplitHeroCharacter = ({ mouseX = 0, mouseY = 0, splitPercent = 50 }) => {
  // Parallax subtle offset based on cursor
  const offsetX = (mouseX - 0.5) * 16;
  const offsetY = (mouseY - 0.5) * 12;

  return (
    <div 
      className="relative w-full max-w-[460px] aspect-square select-none pointer-events-none transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
    >
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dynamic Clip Paths based on split percent */}
          <clipPath id="charLeftClip">
            <rect x="0" y="0" width={`${splitPercent * 5}`} height="500" />
          </clipPath>
          <clipPath id="charRightClip">
            <rect x={`${splitPercent * 5}`} y="0" width={`${(100 - splitPercent) * 5}`} height="500" />
          </clipPath>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ============================================================== */}
        {/* LEFT SIDE: THE DESIGNER (VIVID RED SOLID HOODIE & TACTILE UI) */}
        {/* ============================================================== */}
        <g clipPath="url(#charLeftClip)">
          {/* Subtle Back Glow / Shadow */}
          <circle cx="250" cy="270" r="170" fill="#E8111B" fillOpacity="0.06" />

          {/* Shoulders & Torso: Solid Bold Red */}
          <path
            d="M 120 490 C 120 370, 160 320, 250 320 L 250 490 Z"
            fill="#E8111B"
          />
          {/* Dark under-arm shade */}
          <path
            d="M 120 490 C 120 410, 140 370, 170 350 L 120 490 Z"
            fill="#C20E16"
          />

          {/* Hood Contour (Outer Red) */}
          <path
            d="M 250 110 C 170 110, 165 170, 165 240 C 165 315, 185 340, 250 345 L 250 110 Z"
            fill="#E8111B"
          />
          {/* Inner Hood Dark Recess */}
          <path
            d="M 250 145 C 190 145, 188 190, 188 245 C 188 305, 205 325, 250 328 L 250 145 Z"
            fill="#111111"
          />

          {/* Face Silhouette: Pure Deep Black */}
          <path
            d="M 250 160 C 205 160, 202 195, 202 245 C 202 295, 218 315, 250 320 L 250 160 Z"
            fill="#18181B"
          />

          {/* Iconic White Rectangular Sunglass / Glasses Lens */}
          <rect
            x="214"
            y="228"
            width="32"
            height="18"
            rx="3"
            fill="#FFFFFF"
            className="drop-shadow-sm"
          />

          {/* White Hoodie Drawstring */}
          <path
            d="M 234 324 L 234 400"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="234" cy="402" r="3" fill="#FFFFFF" />

          {/* Laptop Lid / Desk Foreground */}
          <path
            d="M 150 490 L 180 440 L 250 440 L 250 490 Z"
            fill="#111111"
          />
          <line x1="180" y1="440" x2="250" y2="440" stroke="#E8111B" strokeWidth="3" />
        </g>

        {/* ============================================================== */}
        {/* RIGHT SIDE: THE DEVELOPER (AMBER/GOLD WIREFRAME ARCHITECTURE) */}
        {/* ============================================================== */}
        <g clipPath="url(#charRightClip)">
          {/* Dark Silhouette Foundation */}
          <path
            d="M 250 110 C 330 110, 335 170, 335 240 C 335 315, 315 340, 250 345 Z"
            fill="#0B0E14"
          />
          <path
            d="M 250 320 C 340 320, 380 370, 380 490 L 250 490 Z"
            fill="#0E121B"
          />

          {/* Amber Outer Hood Contour Wireframe */}
          <path
            d="M 250 110 C 330 110, 335 170, 335 240 C 335 315, 315 340, 250 345"
            stroke="#F5B041"
            strokeWidth="3.5"
            fill="none"
          />

          {/* Wireframe Horizontal Contour Ribs (Curved rings from reference image) */}
          <path
            d="M 250 135 C 290 135, 318 155, 322 175"
            stroke="#F5B041"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="none"
          />
          <path
            d="M 250 165 C 302 165, 326 185, 330 205"
            stroke="#F5B041"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 250 198 C 308 198, 332 215, 334 235"
            stroke="#F5B041"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            fill="none"
          />
          <path
            d="M 250 232 C 310 232, 330 250, 332 270"
            stroke="#F5B041"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 250 268 C 306 268, 324 285, 326 305"
            stroke="#F5B041"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            fill="none"
          />
          <path
            d="M 250 305 C 298 305, 316 320, 320 338"
            stroke="#F5B041"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Inner Face Cavity Contour */}
          <path
            d="M 250 160 C 295 160, 298 195, 298 245 C 298 295, 282 315, 250 320"
            stroke="#F5B041"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Amber Wireframe Glasses / Sensor Lens */}
          <rect
            x="254"
            y="228"
            width="32"
            height="18"
            rx="3"
            stroke="#F5B041"
            strokeWidth="2.5"
            fill="#F5B041"
            fillOpacity="0.1"
            filter="url(#goldGlow)"
          />
          {/* Eyewear Bridge */}
          <line x1="248" y1="237" x2="254" y2="237" stroke="#F5B041" strokeWidth="2" />

          {/* Shoulders & Body Wireframe Architecture */}
          <path
            d="M 250 320 C 340 320, 380 370, 380 490"
            stroke="#F5B041"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M 250 355 C 310 355, 350 390, 360 490"
            stroke="#F5B041"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            fill="none"
          />
          <path
            d="M 250 400 C 285 400, 320 430, 335 490"
            stroke="#F5B041"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Vertical Bus & Grid Connector Lines */}
          <line x1="268" y1="320" x2="268" y2="490" stroke="#F5B041" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="290" y1="340" x2="290" y2="490" stroke="#F5B041" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <line x1="320" y1="375" x2="320" y2="490" stroke="#F5B041" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />

          {/* Data Cable leading from neck/chest towards server */}
          <path
            d="M 268 440 C 290 460, 330 465, 410 475"
            stroke="#F5B041"
            strokeWidth="1.8"
            strokeDasharray="6 2"
            fill="none"
            opacity="0.8"
          />

          {/* Developer Workstation Terminal Edge */}
          <path
            d="M 250 440 L 320 440 L 350 490 L 250 490 Z"
            fill="#161922"
            stroke="#2A3042"
            strokeWidth="1.5"
          />
          <line x1="250" y1="440" x2="320" y2="440" stroke="#F5B041" strokeWidth="2.5" />
        </g>

        {/* Center Split Dashed Seam */}
        <line
          x1={`${splitPercent * 5}`}
          y1="80"
          x2={`${splitPercent * 5}`}
          y2="490"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

