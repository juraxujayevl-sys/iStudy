import React from 'react';
import { Bot, ArrowUp, Send, Github, Instagram, Youtube } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-200 dark:bg-[#07080C] text-slate-600 dark:text-gray-400 border-t border-slate-300 dark:border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-300 dark:border-white/10">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-widest">
                LAZIZ
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-gray-400 font-mono">
              {t.footer.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-300/80 dark:bg-white/5 text-slate-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-300/80 dark:bg-white/5 text-slate-700 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-300/80 dark:bg-white/5 text-slate-700 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors"
              title="Instagram (@juraxujayev.21)"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-300/80 dark:bg-white/5 text-slate-700 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors"
              title="YouTube (@LazizJuraxujayev-ai)"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-300/80 dark:bg-white/5 hover:bg-cyan-500 hover:text-white text-slate-700 dark:text-gray-300 transition-all group"
            title="Scroll to Top"
            aria-label="Scroll to top"
            id="btn-footer-scroll-top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} LAZIZ. {t.footer.rights}</p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Samarkand, Uzbekistan 🇺🇿</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
