import React from 'react';
import { X, ExternalLink, Play, Eye, ThumbsUp, Share2, MessageSquare, Instagram, Youtube } from 'lucide-react';
import { ContentItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface MediaModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ item, onClose }) => {
  const { t } = useLanguage();
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl glass-panel border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0F121A] overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Thumbnail Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#0F121A] via-black/40 to-black/20" />

          {/* Interactive Play Button */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 w-20 h-20 rounded-full bg-cyan-500 text-white dark:text-black flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:scale-110 transition-transform duration-300"
            title="Watch Full Content on Platform"
          >
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </a>

          {/* Top Platform Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-cyan-300 font-bold flex items-center gap-1.5">
              {item.platform === 'Instagram' && <Instagram className="w-3.5 h-3.5 text-pink-400" />}
              {item.platform === 'YouTube' && <Youtube className="w-3.5 h-3.5 text-red-400" />}
              <span>{item.platform}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md text-xs font-mono text-cyan-300 font-bold flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{item.views} {t.contentCreation.views}</span>
            </span>
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
              {item.category}
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed pt-1">
              {item.description}
            </p>
          </div>

          {/* Engagement Metrics */}
          {item.metrics && (
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <div className="text-center">
                <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center justify-center gap-1 mb-1">
                  <ThumbsUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Likes
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white font-mono">{item.metrics.likes}</span>
              </div>
              <div className="text-center">
                <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center justify-center gap-1 mb-1">
                  <Share2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Shares
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white font-mono">{item.metrics.shares}</span>
              </div>
              <div className="text-center">
                <span className="text-xs text-slate-500 dark:text-gray-400 flex items-center justify-center gap-1 mb-1">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Comments
                </span>
                <span className="text-base font-bold text-slate-900 dark:text-white font-mono">{item.metrics.comments}</span>
              </div>
            </div>
          )}

          {/* Direct Link Action */}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-gray-400 font-mono">
              Created by Laziz • Tashkent, Uzbekistan
            </span>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
            >
              <span>Watch on {item.platform}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
