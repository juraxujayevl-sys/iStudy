import React from 'react';
import { Workflow, CheckCircle } from 'lucide-react';
import { getProcessSteps } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const ApproachTimeline: React.FC = () => {
  const { language, t } = useLanguage();
  const processSteps = getProcessSteps(language);

  return (
    <section id="approach" className="py-24 relative bg-slate-100 dark:bg-[#0B0D14] overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            <Workflow className="w-3.5 h-3.5" />
            <span>05 // {t.approach.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.approach.heading}
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
            {t.approach.subheading}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-3xl glass-panel p-8 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 shadow-xl"
            >
              {/* Top Row: Number & Tagline */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold text-gradient-cyan font-mono tracking-tighter">
                    {step.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[10px] font-mono text-cyan-700 dark:text-cyan-300">
                    {step.tagline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Deliverables & Tools */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-1">
                    {t.approach.deliverable}
                  </span>
                  <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    {step.deliverable}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {step.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-200/80 dark:bg-white/5 text-[10px] font-mono text-slate-600 dark:text-gray-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
