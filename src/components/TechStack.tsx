import React, { useState } from 'react';
import { Terminal, Code, Cpu, Layout, Workflow, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { TECHNOLOGIES } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI Frameworks', 'Languages', 'Web Stack', 'Automation & Cloud'];

  const filteredTech = selectedCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code-xml': return Code;
      case 'sparkles': return Sparkles;
      case 'cpu': return Cpu;
      case 'layout': return Layout;
      case 'workflow': return Workflow;
      case 'database': return Database;
      default: return Terminal;
    }
  };

  return (
    <section id="technologies" className="py-24 relative bg-[#090A0F] overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>04 // Technical Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Tools & <span className="text-gradient-cyan">AI Engineering Arsenal</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Battle-tested frameworks, specialized AI models, vector databases, and automation infrastructure I utilize daily.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTech.map((tech) => {
            const IconComponent = getIcon(tech.icon);
            return (
              <div
                key={tech.id}
                className="group rounded-3xl glass-panel p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar Icon & Level */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-white/15 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-300">
                        {tech.level}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">
                        {tech.experienceYears}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {/* Use cases pills */}
                  <div className="pt-2 border-t border-white/5 space-y-1.5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Common Applications:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {tech.popularUses.map((use, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-gray-300"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
