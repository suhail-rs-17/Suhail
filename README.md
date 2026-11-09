# Suhail — "I Build Both Sides" Portfolio

> **Award-style personal portfolio for Suhail — 1st Year B.Tech CSE (Artificial Intelligence) Student at Thejus Engineering College, Thrissur, Kerala.**

Designed around the **Split-Personality** concept: *"I build both sides."* (Tactile Design + Algorithmic Code).

---

## 🎨 The Split-Personality Theme

- **LEFT ("The Designer")**: Warm cream background (`#F3F0E8`), bold red (`#E8111B`), near-black typography (`#111111`), soft beige cards, UI-wireframe illustrations (browser mockup with red header, button with Figma cursor badge, color token swatches, toggle switches, mountain/sun SVG image cards).
- **RIGHT ("The Developer")**: Deep navy-black (`#0F1117`), amber/gold accents (`#F5B041`), JetBrains Mono typography, interactive terminal window with executed tests and HTTP headers, Docker server rack with live LED status indicators, and database cylinder icons.
- **CENTER HERO CHARACTER**: A clean flat SVG hooded faceless character split right down the seam — solid vivid red hoodie on the left, golden wireframe contour outline on the right with white and amber rectangular glasses lenses and subtle mouse parallax.
- **INTERACTIVE DIVIDER**: A draggable, reactive divider letting visitors reveal more of the Designer side or the Developer side.

---

## ⚡ Key Features

1. **Split Hero Canvas**: Interactive divider slider with quick ratio presets (80% Designer, 50:50, 80% Developer), floating mockups, and subtle mouse parallax.
2. **Page-Load Split Wipe Preloader**: Red and dark halves count up and slide apart in a smooth easing reveal.
3. **Dual Identity About Section**: Introduces Suhail's academic journey at **Thejus Engineering College**, Thrissur, accompanied by an animated count-up statistics strip.
4. **Split Skills Arsenal**:
   - *Left*: Designer skills (Figma, Design Systems, Typography, Wireframing, Motion) with brutalist meters.
   - *Right*: Developer stack (React, Python, AI/ML, Tailwind, Docker, Git, Linux) with terminal command styling.
5. **Interactive Projects (Dual-View)**:
   - Every project card flips dynamically between **Design View** (Figma tokens, color swatches, wireframe concept) and **Code View** (syntax-highlighted code snippet, terminal logs, performance metrics).
   - Features *AuraNeural AI Vision*, *HyperVex Design System*, *Thejus Campus Assistant*, and *OmniPulse Telemetry*.
6. **Milestone Journey Timeline**: Scroll-guided vertical spine tracking the AI engineering curriculum and open-source journey.
7. **Interactive Terminal Contact (`$ send_message`)**:
   - Terminal input prompts with validation animation, HTTP/2 simulation, and celebratory confetti dispatch!
   - One-click copy email button with clipboard toast notification.
   - Links to GitHub, LinkedIn, and Instagram.
8. **Live Kerala Time & Status Badge**: Tracks real-time IST clock in Thrissur, Kerala.
9. **Performance & Accessibility**:
   - Built with Vite, React, and Tailwind CSS.
   - Semantic HTML, zero layout shift, smooth Lenis scrolling.
   - Honors `prefers-reduced-motion` and supports mobile touch gestures.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Brutalist & Terminal Design Tokens
- **Typography**: `Syne`, `Space Grotesk`, `JetBrains Mono`, `Inter` (Google Fonts)
- **Icons**: Lucide React
- **Animations & Scrolling**: Lenis (Smooth Scroll), Canvas Confetti, CSS 3D Transforms
- **Testing & Verification**: Puppeteer-core + Chrome Headless

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone or navigate to the repository
cd d:\suhail

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` to view the live site with Hot Module Replacement (HMR).

### Production Build

```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment

### Deploying to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or push the repository to GitHub.
2. In the Vercel dashboard, click **"Add New Project"** and import the repository.
3. Configure project settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploying to Netlify
1. Push your repository to GitHub or GitLab.
2. Log in to [Netlify](https://www.netlify.com/) and choose **"Import from Git"**.
3. Set the build configurations:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

---

## 📁 Project Structure

```
d:\suhail\
├── index.html                  # HTML entry point with fonts & SEO meta tags
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Custom colors, brutalist shadows, typography
├── vite.config.js              # Vite config with relative base & react plugin
├── public/
│   └── favicon.svg             # Custom split red/gold SVG favicon
├── src/
│   ├── main.jsx                # React DOM render root
│   ├── App.jsx                 # Main layout, Lenis setup, sections coordinator
│   ├── index.css               # Tailwind base, brutalist cards, grid patterns
│   ├── data/
│   │   └── portfolioData.js    # Suhail's profile, projects, skills, timeline data
│   └── components/
│       ├── Preloader.jsx       # Split wipe page-load reveal animation
│       ├── CustomCursor.jsx    # Magnetic dot & trailing ring cursor
│       ├── Navbar.jsx          # Sticky glass nav, Thrissur time, progress bar
│       ├── HeroSplit.jsx       # Interactive split slider canvas
│       ├── SplitHeroCharacter.jsx # Flat SVG split character with parallax
│       ├── HeroIllustrations.jsx # Floating browser and terminal mockups
│       ├── AboutSection.jsx    # Dual identity narrative, college & count-up stats
│       ├── SkillsSplit.jsx     # Designer vs Developer dual columns
│       ├── ProjectsSection.jsx # Project cards with Design/Code flip toggle
│       ├── JourneyTimeline.jsx # Vertical scrolling timeline
│       ├── ContactTerminal.jsx # $ send_message terminal form & confetti
│       └── Footer.jsx          # Minimal brutalist footer & back-to-top
└── screenshots/                # Verified desktop & mobile previews
    ├── desktop.png
    ├── mobile.png
    └── fullpage-desktop.png
```

---

## 👤 Author

**Suhail**  
- **Major**: B.Tech Computer Science & Engineering (Artificial Intelligence)  
- **College**: Thejus Engineering College, Thrissur, Kerala  
- **GitHub**: [github.com/suhail-dev](https://github.com/suhail-dev)  
- **LinkedIn**: [linkedin.com/in/suhail-ai](https://linkedin.com/in/suhail-ai)  
- **Email**: `suhail.thejus.ai@gmail.com`

