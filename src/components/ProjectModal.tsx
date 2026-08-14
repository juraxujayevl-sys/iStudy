import React from 'react';
import { X, ExternalLink, Github, Cpu, CheckCircle2, Layers, Award, Sparkles } from 'lucide-react';
import { AiProject } from '../types';

interface ProjectModalProps {
  project: AiProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] my-auto rounded-3xl glass-panel border border-white/15 bg-[#0F121A] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-30 px-6 py-4 bg-[#0F121A]/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
              {project.category} // Technical Deep Dive
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
            id="btn-close-project-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Header & Title */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                Role: {project.role}
              </span>
              <span>•</span>
              <span className="text-gray-300">Tashkent, Uzbekistan</span>
            </div>
          </div>

          {/* Hero Project Cover Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10 bg-[#090A0F]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F121A] via-transparent to-transparent opacity-80" />
          </div>

          {/* Full Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Project Overview</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Breakdown */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Architecture & System Design</span>
              </h3>
              <ul className="space-y-2.5 pt-1">
                {project.architecture.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Measured Results */}
          {project.results && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-purple-950/40 border border-cyan-500/30 space-y-2">
              <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Impact & Results</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                {project.results}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs font-mono text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
                >
                  <span>Launch Live App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel text-gray-200 border border-white/15 hover:border-white/40 text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
