import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowDown, Send, Github, Instagram, Youtube, Linkedin, Cpu, Play } from 'lucide-react';
import { PERSONAL_INFO, getPersonalStats } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { language, t } = useLanguage();
  const stats = getPersonalStats(language);

  // Neural network canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor(width / 25), 50);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = ['#00F0FF', '#7000FF', '#3B82F6'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#090A0F] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Interactive Neural Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none" />

      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-300 shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>Tashkent, Uzbekistan 🇺🇿</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Giant Name Typography */}
            <div className="space-y-1">
              <span className="text-sm font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                {t.hero.greeting}
              </span>
              <h1 className="text-6xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                LAZIZ
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-gradient-cyan pt-2">
                {t.hero.role}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#ai-engineering"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#ai-engineering');
                }}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
                id="hero-cta-explore"
              >
                <Cpu className="w-4 h-4 text-cyan-200" />
                <span>{t.hero.ctaProjects}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#content-creation"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#content-creation');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-panel text-slate-800 dark:text-gray-200 font-semibold text-sm border border-slate-300 dark:border-white/15 hover:border-cyan-400/50 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-all duration-300"
                id="hero-cta-contact"
              >
                <Play className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{t.hero.ctaMedia}</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10 w-full max-w-lg">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                  title="Telegram"
                  id="hero-social-telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/40 transition-colors"
                  title="GitHub"
                  id="hero-social-github"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                  title="Instagram"
                  id="hero-social-instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:border-red-500/40 transition-colors"
                  title="YouTube"
                  id="hero-social-youtube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                  title="LinkedIn"
                  id="hero-social-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High Fashion Portrait & Neural Interactive Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-lg animate-pulse-glow" />

              <div className="relative rounded-3xl glass-panel p-3 border border-slate-200 dark:border-white/15 overflow-hidden group">
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-200 dark:bg-[#0F121A]">
                  <img
                    src="/src/assets/images/laziz_portrait_1786512507735.jpg"
                    alt="Laziz — AI Engineer & Content Creator"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#090A0F] via-transparent to-transparent opacity-80" />

                  {/* Code Overlay Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      <span>SYSTEM_READY</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/30 text-[10px] font-mono text-purple-300">
                      LLaMA3 • Gemini 1.5
                    </div>
                  </div>

                  {/* Bottom Portrait Info Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 dark:bg-[#0F121A]/85 backdrop-blur-xl border border-slate-200 dark:border-white/15 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>Lazizbek</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-mono">
                            UZB 🇺🇿
                          </span>
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-gray-400">{t.hero.role}</p>
                      </div>
                      <a
                        href="#synergy"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('#synergy');
                        }}
                        className="p-2 rounded-xl bg-cyan-500 text-white dark:text-black hover:bg-cyan-400 transition-colors shadow-md"
                        title="Interact with AI Studio"
                      >
                        <Play className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Quick Stats Ticker underneath Hero */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-all text-center md:text-left group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline justify-center md:justify-start gap-1">
                <span className="group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-cyan-600 dark:text-cyan-400 text-2xl">{stat.suffix}</span>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
