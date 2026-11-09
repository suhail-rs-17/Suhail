import React, { useState } from 'react';
import { Terminal, Send, CheckCircle2, Copy, Github, Linkedin, Instagram, Mail, Sparkles, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactTerminal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'transmitting' | 'sent' | 'error'
  const [statusLogs, setStatusLogs] = useState([]);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all terminal parameters before dispatching.");
      return;
    }

    setStatus('transmitting');
    setStatusLogs([
      "[$] INITIALIZING SOCKET CONNECTION...",
      "[$] VALIDATING PAYLOAD & CIPHER HEADERS...",
    ]);

    setTimeout(() => {
      setStatusLogs(prev => [
        ...prev,
        "[$] HANDSHAKE ESTABLISHED (HTTP/2 200 OK)",
        "[$] TRANSMITTING PACKET TO SUHAIL'S WORKSTATION...",
      ]);
    }, 700);

    setTimeout(() => {
      setStatus('sent');
      setStatusLogs(prev => [
        ...prev,
        "[$] 200 DISPATCHED: Message stored successfully!",
        "[$] Thank you! Suhail will review and ping back shortly.",
      ]);

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E8111B', '#F5B041', '#FFFFFF', '#111111'],
        });
      } catch (err) {
        // fallback gracefully
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
    setStatusLogs([]);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0D12] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B041]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161922] border border-[#2A3042] text-[11px] font-mono text-[#F5B041] uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // Establish Uplink</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase max-w-2xl">
            Let’s Build Together
          </h2>
          <p className="mt-3 text-sm font-mono text-gray-400 max-w-xl">
            Have a project in mind, an AI challenge, a design system to architect, or just want to connect with an engineering student from Kerala?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ========================================================== */}
          {/* TERMINAL INTERACTIVE FORM */}
          {/* ========================================================== */}
          <div className="lg:col-span-7 bg-[#161922] rounded-2xl border border-[#2A3042] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden font-mono">
            {/* Terminal Window Header */}
            <div className="bg-[#1B202D] px-4 py-3 border-b border-[#2A3042] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="text-xs text-gray-400 ml-2 hidden sm:inline">
                  suhail@thejus-ai:~ ($ send_message)
                </span>
              </div>
              <span className="text-[10px] text-[#F5B041] bg-[#F5B041]/10 px-2 py-0.5 rounded border border-[#F5B041]/30">
                TLS 1.3 ENCRYPTED
              </span>
            </div>

            {/* Terminal Window Body */}
            <div className="p-6 text-xs text-gray-300">
              <div className="mb-4 text-[#8B949E] text-[11px] leading-relaxed">
                # Execute dispatch protocol to ping Suhail directly.<br />
                # All fields are sanitized and routed via async socket handler.
              </div>

              {status === 'sent' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/40 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-white">
                    Transmission Dispatched!
                  </h4>
                  <div className="bg-[#0F1117] p-3 rounded border border-[#2A3042] text-left text-[11px] text-[#F5B041] space-y-1">
                    {statusLogs.map((log, i) => (
                      <div key={i}>{log}</div>
                    ))}
                  </div>
                  <button
                    onClick={resetForm}
                    className="mt-4 px-4 py-2 bg-[#F5B041] text-[#0F1117] font-bold rounded-lg hover:bg-white transition-colors"
                  >
                    $ send_another_message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-gray-400 flex items-center gap-1.5">
                      <span className="text-[#F5B041]">$</span>
                      <span>set_sender_name</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Linus Torvalds / Jane Doe"
                      className="w-full bg-[#0F1117] border border-[#2A3042] focus:border-[#F5B041] rounded-lg px-3 py-2.5 text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-gray-400 flex items-center gap-1.5">
                      <span className="text-[#F5B041]">$</span>
                      <span>set_sender_email</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.dev"
                      className="w-full bg-[#0F1117] border border-[#2A3042] focus:border-[#F5B041] rounded-lg px-3 py-2.5 text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label className="text-gray-400 flex items-center gap-1.5">
                      <span className="text-[#F5B041]">$</span>
                      <span>set_message_body</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your project brief, question, or hello..."
                      className="w-full bg-[#0F1117] border border-[#2A3042] focus:border-[#F5B041] rounded-lg px-3 py-2.5 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Transmission Log Stream during transmitting */}
                  {status === 'transmitting' && (
                    <div className="bg-[#0F1117] p-3 rounded border border-[#2A3042] space-y-1 text-[#F5B041] text-[10px]">
                      {statusLogs.map((log, i) => (
                        <div key={i}>{log}</div>
                      ))}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'transmitting'}
                    className="w-full py-3.5 bg-gradient-to-r from-[#E8111B] to-[#F5B041] hover:opacity-95 text-white font-heading font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'transmitting' ? 'DISPATCHING PACKET...' : '$ execute_dispatch'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ========================================================== */}
          {/* CONTACT INFO & SOCIAL HUBS */}
          {/* ========================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card with One-Click Copy */}
            <div className="bg-[#161922] rounded-2xl border border-[#2A3042] p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  Direct Inbox
                </span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>

              <div className="text-base sm:text-lg font-mono font-bold text-white break-all mb-3">
                {PORTFOLIO_DATA.personal.email}
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full py-2 bg-[#0F1117] hover:bg-[#202737] border border-[#2A3042] rounded-lg text-xs font-mono text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981] font-bold">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#F5B041]" />
                    <span>Click to Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Hub Links */}
            <div className="bg-[#161922] rounded-2xl border border-[#2A3042] p-6 shadow-xl">
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                Connect on Networks
              </h3>

              <div className="space-y-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0F1117] border border-[#2A3042] hover:border-[#F5B041] text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-[#F5B041]" />
                    <div>
                      <div className="font-heading font-bold text-sm text-white">GitHub</div>
                      <div className="text-[10px] font-mono text-gray-400">@suhail-dev</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-[#F5B041] transition-colors">
                    &rarr;
                  </span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0F1117] border border-[#2A3042] hover:border-[#38BDF8] text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-[#38BDF8]" />
                    <div>
                      <div className="font-heading font-bold text-sm text-white">LinkedIn</div>
                      <div className="text-[10px] font-mono text-gray-400">in/suhail-ai</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-[#38BDF8] transition-colors">
                    &rarr;
                  </span>
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0F1117] border border-[#2A3042] hover:border-[#E8111B] text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#E8111B]" />
                    <div>
                      <div className="font-heading font-bold text-sm text-white">Instagram</div>
                      <div className="text-[10px] font-mono text-gray-400">@suhail.crafts</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-[#E8111B] transition-colors">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* College & Geo Metadata */}
            <div className="p-4 rounded-xl bg-[#0F1117] border border-[#2A3042] text-xs font-mono text-gray-400 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#E8111B]" />
                <span>Thejus Engineering College, Thrissur, Kerala</span>
              </div>
              <div className="text-[11px] text-gray-500 pl-6">
                Coordinates: 10.5276° N, 76.2144° E • Kerala, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

