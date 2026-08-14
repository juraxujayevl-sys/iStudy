import React, { useState } from 'react';
import { Cpu, ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { getAiProjects } from '../data/portfolioData';
import { Category, AiProject } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AiEngineeringProps {
  onSelectProject: (project: AiProject) => void;
}

export const AiEngineering: React.FC<AiEngineeringProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const { language, t } = useLanguage();

  const projects = getAiProjects(language);

  const categories: { label: string; value: Category }[] = [
    { label: t.aiEngineering.categories.all, value: 'All' },
    { label: t.aiEngineering.categories.agents, value: 'AI Agents' },
    { label: t.aiEngineering.categories.webApps, value: 'AI Web Apps' },
    { label: t.aiEngineering.categories.automations, value: 'Automations' },
    { label: t.aiEngineering.categories.llm, value: 'LLM & Fine-tuning' },
    { label: t.aiEngineering.categories.experiments, value: 'Experiments' },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="ai-engineering" className="py-24 relative bg-slate-50 dark:bg-[#090A0F] overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // {t.aiEngineering.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t.aiEngineering.heading}
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
              {t.aiEngineering.subheading}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-200/80 dark:bg-white/[0.03] p-1.5 rounded-2xl border border-slate-300 dark:border-white/10 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.value
                    ? 'bg-cyan-500 text-white dark:text-black shadow-md shadow-cyan-500/30'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/50 dark:hover:bg-white/5'
                }`}
                id={`filter-${cat.value.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel border border-slate-200 dark:border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10"
              id={`project-card-${project.id}`}
            >
              <div>
                {/* Cover Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#0F121A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#151824] via-transparent to-transparent opacity-90" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-cyan-300">
                      {project.category}
                    </span>
                  </div>

                  {featuredBadge(project.featured)}
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[10px] font-mono text-slate-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 group/btn"
                  id={`btn-view-${project.id}`}
                >
                  <span>{t.aiEngineering.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title={t.aiEngineering.githubCode}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                      title={t.aiEngineering.liveDemo}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

function featuredBadge(featured?: boolean) {
  if (!featured) return null;
  return (
    <div className="absolute top-4 right-4">
      <span className="px-2.5 py-1 rounded-full bg-cyan-500 text-white dark:text-black text-[10px] font-mono font-bold flex items-center gap-1 shadow-lg shadow-cyan-500/30">
        <Sparkles className="w-3 h-3 fill-current" />
        FEATURED
      </span>
    </div>
  );
}
