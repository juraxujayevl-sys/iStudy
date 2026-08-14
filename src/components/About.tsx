import React from 'react';
import { Bot, Video, Cpu, Globe, Zap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Autonomous AI Systems',
      description: 'Designing multi-agent graphs, RAG pipelines, and fine-tuning open-source LLMs like LLaMA-3 for complex enterprise workflows.'
    },
    {
      icon: Video,
      title: 'Cinematic Tech Storytelling',
      description: 'Translating dense computer science & AI concepts into engaging short-form reels, code walkthroughs, and documentaries for 2M+ viewers.'
    },
    {
      icon: Zap,
      title: 'Production Engineering',
      description: 'Shipping clean, type-safe full-stack React applications, FastAPI microservices, and automated N8n workflows ready for global scale.'
    }
  ];

  const highlights = [
    'Based in Tashkent, Uzbekistan 🇺🇿',
    'Fine-tuned open-source Uzbek LLaMA-3 models',
    'Creator of Aegis Agent Framework',
    'Top Tech Influencer & AI Educator in Uzbekistan',
    'Consultant for startups & AI teams across Central Asia',
    '4+ Years in Full-Stack Software & AI Development'
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0B0D14] overflow-hidden border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" />
            <span>01 // About Laziz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Architecting <span className="text-gradient-cyan">AI Intelligence</span> & Educating the Future
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            I combine deep software engineering with visual storytelling to make cutting-edge Artificial Intelligence understandable, accessible, and actionable.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Bot className="w-6 h-6 text-cyan-400" />
                <span>My Creative & Technical Philosophy</span>
              </h3>

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Artificial Intelligence is not just code or mathematics — it is the most powerful catalyst of human creativity in history. As an <strong className="text-white">AI Engineer and Content Creator</strong> based in Tashkent, Uzbekistan, my goal is twofold: build high-utility autonomous AI applications and empower developers to harness them.
                </p>
                <p>
                  Whether I am fine-tuning open-source LLMs on local datasets, building multi-agent software auditors with Python and Gemini, or producing a viral technical reel explaining transformer attention mechanisms, I maintain the highest standards of craft, clarity, and performance.
                </p>
              </div>

              {/* Bullet Highlights */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Location & Vision Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-purple-950/40 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Central Asia Tech Vision</h4>
                  <p className="text-xs text-gray-400">Pioneering AI engineering & localized LLMs for Uzbekistan</p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition-colors shrink-0"
              >
                Collab with Laziz
              </a>
            </div>
          </div>

          {/* Right Side: 3 Core Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-white/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
