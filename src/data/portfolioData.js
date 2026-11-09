export const PORTFOLIO_DATA = {
  personal: {
    name: "Suhail",
    headlineLeft: "HE BUILDS",
    headlineRight: "BOTH SIDES.",
    subheadline: "I DESIGN. I CODE. I BUILD BOTH SIDES.",
    role: "1st Year B.Tech CSE (AI) Student | Creative Developer & UI Architect",
    institution: "Thejus Engineering College",
    location: "Thrissur, Kerala, India",
    bio: "First-year Computer Science & Engineering (Artificial Intelligence) undergraduate bridging high-fidelity tactile design systems with robust, scalable software architecture. I believe the best digital products happen when aesthetic discipline and algorithmic rigor coexist in equal measure.",
    shortBio: "Crafting bold vector interfaces by day, orchestrating neural pipelines and high-throughput web systems by night.",
    email: "suhail.thejus.ai@gmail.com",
    github: "https://github.com/suhail-dev",
    linkedin: "https://linkedin.com/in/suhail-ai",
    instagram: "https://instagram.com/suhail.crafts",
  },
  stats: [
    { label: "Completed Projects", value: "14+", sub: "Web, AI & Design" },
    { label: "Core Technologies", value: "16+", sub: "Frontend to Backend" },
    { label: "Engineering Lab Hours", value: "1,200+", sub: "Code & Exploration" },
    { label: "Year in AI Degree", value: "01", sub: "Thejus Engg College" },
  ],
  designerSide: {
    title: "The Designer",
    subtitle: "Tactile brutalism, deliberate typography & wireframe architecture",
    color: "#E8111B",
    bgColor: "#F3F0E8",
    philosophy: "Design isn't surface decoration. It is structural communication, emotional tension, and intuitive affordance.",
    skills: [
      { name: "UI/UX & Design Systems", level: 92, tag: "Figma Tokens" },
      { name: "Tactile & Neo-Brutalist Layouts", level: 90, tag: "High Contrast" },
      { name: "Figma & Interactive Prototyping", level: 95, tag: "Component Lab" },
      { name: "Typography & Micro-Copy", level: 88, tag: "Syne / Editorial" },
      { name: "Motion & Interaction Physics", level: 85, tag: "GSAP / Curves" },
      { name: "Vector Illustration & Wireframes", level: 86, tag: "SVG / Affinity" },
    ],
    tools: ["Figma", "Adobe Illustrator", "Tokens Studio", "Spline 3D", "Penpot", "Whimsical"],
  },
  developerSide: {
    title: "The Developer",
    subtitle: "Low-latency systems, AI pipelines & clean algorithmic code",
    color: "#F5B041",
    bgColor: "#0F1117",
    philosophy: "Code is architecture brought to life. Deterministic, testable, and engineered for resilience and speed.",
    skills: [
      { name: "React, Next.js & Modern Web", level: 94, tag: "Vite / SSR" },
      { name: "Tailwind CSS & CSS Architecture", level: 96, tag: "Utility First" },
      { name: "Python & AI / Neural Nets", level: 84, tag: "PyTorch / NumPy" },
      { name: "JavaScript / TypeScript", level: 90, tag: "ESNext / Types" },
      { name: "Node.js & REST / WebSockets", level: 85, tag: "FastAPI / Express" },
      { name: "Git, Docker & Linux Workflows", level: 82, tag: "CLI / Bash" },
    ],
    tools: ["React", "Python", "Tailwind CSS", "TypeScript", "Node.js", "Docker", "Git", "Linux", "FastAPI"],
  },
  projects: [
    {
      id: "auraneural",
      title: "AuraNeural — AI Vision Studio",
      subtitle: "Real-time Style & Vision Analytics",
      description: "A dual-paradigm creative platform integrating neural style transfer and edge computer vision with a high-contrast brutalist control surface.",
      tags: ["Python", "PyTorch", "React", "Tailwind", "FastAPI", "Figma"],
      designerAspect: {
        highlight: "Neo-brutalist tactile palette, custom pointer gestures, and segmented parameter dials.",
        swatches: ["#E8111B", "#111111", "#F3F0E8", "#E3DDD0"],
        wireframeConcept: "Split canvas inspector with drag-and-drop neural weights rack and real-time histogram display.",
        figmaNote: "Created with strict 8px rhythm and atomic design token hierarchy.",
      },
      developerAspect: {
        highlight: "Asynchronous WebSocket streaming for 30fps style synthesis and lightweight ONNX runtime execution.",
        terminalOutput: "$ python -m auraneural.infer --weights vgg19_style.pt\n[INFO] Loaded checkpoint weights: 142MB\n[INFO] Initialized WebGL canvas context\n[SUCCESS] Render pipeline ready (latency: 18ms)",
        metrics: "Sub-20ms inference | 98.4% model accuracy | Zero layout shift",
        codeSnippet: `async function streamInference(frame) {
  const tensor = preprocess(frame);
  const logits = await session.run({ input: tensor });
  return postprocess(logits);
}`,
      },
      liveUrl: "https://auraneural-demo.suhail.dev",
      githubUrl: "https://github.com/suhail-dev/auraneural-vision",
      featured: true,
    },
    {
      id: "hypervex",
      title: "HyperVex — UI Token & Component Lab",
      subtitle: "Autonomous Design System Engine",
      description: "Production-ready component architecture that synchronizes Figma design tokens directly into typed Tailwind configurations with live contrast checking.",
      tags: ["TypeScript", "React", "Figma API", "Tailwind CSS", "Storybook"],
      designerAspect: {
        highlight: "Bespoke typographic scale, accessible WCAG AAA contrast pairs, and spring-driven micro-interactions.",
        swatches: ["#0F1117", "#F5B041", "#38BDF8", "#F3F0E8"],
        wireframeConcept: "Interactive component matrix with live variant switcher and layout density toggles.",
        figmaNote: "Direct sync with Figma Variables and Tokens Studio plugin via webhooks.",
      },
      developerAspect: {
        highlight: "Polymorphic React components with zero runtime overhead and automated AST code generation.",
        terminalOutput: "$ npm run tokens:sync\n> hypervex@1.0.0 tokens:sync\n[FETCH] Querying Figma API v1 (file_id: x92K...)\n[TRANSFORM] Generated 48 color tokens, 12 spatial scales\n[SUCCESS] Built tailwind.config.generated.js in 340ms",
        metrics: "48 design tokens | 34 polymorphic components | 100% TypeScript typed",
        codeSnippet: `export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => (
    <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />
  )
);`,
      },
      liveUrl: "https://hypervex.suhail.dev",
      githubUrl: "https://github.com/suhail-dev/hypervex-tokens",
      featured: true,
    },
    {
      id: "thejus-ai",
      title: "Thejus Campus Intelligence Assistant",
      subtitle: "B.Tech Academic Companion & Planner",
      description: "An intelligent campus copilot designed for Thejus Engineering College students to parse syllabus modules, lab assignments, and exam schedules using vector search.",
      tags: ["Python", "FastAPI", "React", "Vector DB", "Chroma", "Tailwind"],
      designerAspect: {
        highlight: "Warm cream editorial aesthetic with warm paper textures, college timetable heatmaps, and clean badge typography.",
        swatches: ["#E8111B", "#F3F0E8", "#1E293B", "#F59E0B"],
        wireframeConcept: "Single-pane conversational terminal with collapsible engineering syllabus drawer.",
        figmaNote: "Mobile-first wireframes optimized for fast hallway queries on student smartphones.",
      },
      developerAspect: {
        highlight: "RAG architecture with chunked KTU university syllabus embeddings and local semantic caching.",
        terminalOutput: "$ python -m thejus_ai.serve\n[INFO] Loaded Chroma vectorstore (1,480 syllabus documents)\n[INFO] KTU S1/S2 curriculum indexed\n[SERVER] Uvicorn running on http://127.0.0.1:8000 (Ready for queries)",
        metrics: "KTU Syllabus Indexed | <300ms vector search | Offline local cache",
        codeSnippet: `def retrieve_syllabus_context(query: str, semester: int):
    results = vectorstore.similarity_search(query, k=4, filter={"sem": semester})
    return format_academic_context(results)`,
      },
      liveUrl: "https://thejus-companion.suhail.dev",
      githubUrl: "https://github.com/suhail-dev/thejus-campus-companion",
      featured: true,
    },
    {
      id: "omnipulse",
      title: "OmniPulse — Cloud Telemetry Terminal",
      subtitle: "High-Density Systems Monitor",
      description: "Low-overhead developer telemetry cockpit for streaming Docker container stats, server load, and API health with a vintage cyber-terminal UI.",
      tags: ["Go", "Node.js", "WebSockets", "React", "JetBrains Mono"],
      designerAspect: {
        highlight: "Monochromatic dark terminal layout with amber status pips, CRT scanline toggle, and dense tabular metrics.",
        swatches: ["#0F1117", "#171B26", "#F5B041", "#34D399"],
        wireframeConcept: "Split terminal panels with ASCII sparklines and responsive status matrices.",
        figmaNote: "Designed around strict 1ch monospace character grids.",
      },
      developerAspect: {
        highlight: "WebSocket pub/sub multiplexer broadcasting kernel CPU/memory statistics at 60fps with zero DOM thrashing.",
        terminalOutput: "$ omnipulse --listen :9090\n[DAEMON] Attached to /var/run/docker.sock\n[SOCKET] 14 telemetry channels streaming\n[TELEMETRY] CPU: 4.2% | RAM: 3.1GB/16GB | Net: 1.2MB/s [OK]",
        metrics: "60 FPS update loop | <5MB memory footprint | Native Docker metrics",
        codeSnippet: `ws.onmessage = (event) => {
  const telemetry = parseBinaryFrame(event.data);
  chartRef.current.pushMetric(telemetry.cpuUsage, telemetry.timestamp);
};`,
      },
      liveUrl: "https://omnipulse.suhail.dev",
      githubUrl: "https://github.com/suhail-dev/omnipulse-telemetry",
      featured: false,
    },
  ],
  timeline: [
    {
      period: "2024 — Present",
      title: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
      institution: "Thejus Engineering College, Thrissur, Kerala",
      side: "split",
      description: "Admitted into the specialized AI undergraduate program. Immersing in foundational discrete math, data structures, algorithm design, and exploring neural network architectures while building modern web interfaces.",
      skills: ["Data Structures", "Python for AI", "Linear Algebra", "Creative Code"],
      badge: "Academic Milestones",
    },
    {
      period: "2024",
      title: "Full-Stack Development & Design Systems Mastery",
      institution: "Self-Directed Engineering & Open Source",
      side: "designer",
      description: "Formalized a modular design system workflow connecting Figma auto-layout and variable tokens to React, Tailwind, and GSAP micro-animations. Built multiple production client prototypes.",
      skills: ["Figma Systems", "React", "Tailwind CSS", "GSAP Motion"],
      badge: "Design & Frontend",
    },
    {
      period: "2023 — 2024",
      title: "Algorithmic Foundations & Machine Learning Dive",
      institution: "Independent Research & Hackathons",
      side: "developer",
      description: "Built first computer vision experiments and explored PyTorch tensors, gradient descent mathematics, and backpropagation models. Started bridging web frontend clients with machine learning APIs.",
      skills: ["Python", "PyTorch Basics", "FastAPI", "REST Architecture"],
      badge: "AI & Backends",
    },
    {
      period: "Early Spark",
      title: "The Genesis: Code Meets Visual Arts",
      institution: "Creative Playground",
      side: "split",
      description: "Discovered the intersection of design and code through graphic design, web experiments, and crafting custom Linux dotfiles and terminal themes.",
      skills: ["HTML/CSS", "JavaScript", "Vector Graphics", "Linux"],
      badge: "The Origin",
    },
  ],
};

