import React from 'react';
import { Bot, Video, Cpu, Globe, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  const pillars = [
    {
      icon: Cpu,
      title: t.about.pillar1Title,
      description: t.about.pillar1Desc,
    },
    {
      icon: Video,
      title: t.about.pillar2Title,
      description: t.about.pillar2Desc,
    },
    {
      icon: Zap,
      title: t.about.pillar3Title,
      description: t.about.pillar3Desc,
    },
  ];

  const highlightsMap = {
    uz: [
      'Toshkent, O\'zbekiston 🇺🇿',
      'O\'zbek tili uchun LLaMA-3 fine-tuning tajribasi',
      'Aegis Ko\'p Agentli Framework muallifi',
      'O\'zbekistondagi Top AI va Texnologik Kontent Meyker',
      'Markaziy Osiyodagi startaplar uchun AI maslahatchi',
      '4+ yillik Full-Stack va AI dasturlash tajribasi',
    ],
    ru: [
      'Ташкент, Узбекистан 🇺🇿',
      'Опыт дообучения моделей LLaMA-3 для узбекского языка',
      'Автор многоагентного фреймворка Aegis',
      'Ведущий AI инфлюенсер и технологический автор в Узбекистане',
      'AI консультант для стартапов в Центральной Азии',
      '4+ года опыта в Full-Stack и AI разработке',
    ],
    en: [
      'Based in Tashkent, Uzbekistan 🇺🇿',
      'Fine-tuned open-source Uzbek LLaMA-3 models',
      'Creator of Aegis Agent Framework',
      'Top Tech Influencer & AI Educator in Uzbekistan',
      'Consultant for startups & AI teams across Central Asia',
      '4+ Years in Full-Stack Software & AI Development',
    ],
  };

  const highlights = highlightsMap[language] || highlightsMap.uz;

  return (
    <section id="about" className="py-24 relative bg-slate-100 dark:bg-[#0B0D14] overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5" />
            <span>01 // {t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.about.heading}
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg">
            {t.about.subheading}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <Bot className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <span>{t.about.badge}</span>
              </h3>

              <div className="space-y-4 text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>{t.about.bioParagraph1}</p>
                <p>{t.about.bioParagraph2}</p>
              </div>

              {/* Bullet Highlights */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Location & Vision Badge */}
            <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Central Asia Tech Vision</h4>
                  <p className="text-xs text-slate-500 dark:text-gray-400">Pioneering AI engineering & localized LLMs for Uzbekistan</p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-cyan-500 text-white dark:text-black font-semibold text-xs hover:bg-cyan-400 transition-colors shrink-0"
              >
                {t.nav.letBuild}
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
                  className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-slate-200 dark:border-white/15 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
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
