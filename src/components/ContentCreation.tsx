import React, { useState } from 'react';
import { Video, Eye, Play, Sparkles, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { CONTENT_ITEMS } from '../data/portfolioData';
import { ContentCategory, ContentItem } from '../types';

interface ContentCreationProps {
  onSelectContent: (item: ContentItem) => void;
}

export const ContentCreation: React.FC<ContentCreationProps> = ({ onSelectContent }) => {
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory>('All');

  const categories: ContentCategory[] = [
    'All',
    'Tech Breakdowns',
    'Short-Form Reels',
    'AI Tutorials',
    'Documentaries',
  ];

  const filteredContent = selectedCategory === 'All'
    ? CONTENT_ITEMS
    : CONTENT_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="content-creation" className="py-24 relative bg-[#0B0D14] overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-xs font-mono text-purple-400 uppercase tracking-widest">
              <Video className="w-3.5 h-3.5" />
              <span>03 // Content Creation & Media</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Visual <span className="text-gradient-violet">Tech Storytelling</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Simplifying complex computer science and AI engineering into viral short-form videos, code tutorials, and documentaries reaching over 2M+ minds.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                id={`content-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectContent(item)}
              className="group cursor-pointer rounded-3xl glass-panel border border-white/10 overflow-hidden hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-purple-500/10"
              id={`content-card-${item.id}`}
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-[#0F121A]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-black/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-purple-300 font-bold flex items-center gap-1">
                      {item.platform === 'Instagram' && <Instagram className="w-3 h-3 text-pink-400" />}
                      {item.platform === 'YouTube' && <Youtube className="w-3 h-3 text-red-400" />}
                      <span>{item.platform}</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.views}</span>
                    </span>
                  </div>
                </div>

                {/* Content Text */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-mono">
                  {item.metrics?.likes} Likes • {item.metrics?.shares} Shares
                </span>

                <div className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                  <span>Watch</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
