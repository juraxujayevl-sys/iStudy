import React, { useState } from 'react';
import { Send, Mail, MessageSquare, Phone, Globe, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'AI Application',
    budget: '$3k - $10k',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'AI Application',
    'AI Agent System',
    'Tech Content Campaign',
    'LLM Fine-Tuning',
    'AI Consultation'
  ];

  const budgetRanges = [
    '< $3,000',
    '$3,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'AI Application',
        budget: '$3k - $10k',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0D14] overflow-hidden border-t border-white/5">
      {/* Background Lights */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <Send className="w-3.5 h-3.5" />
            <span>07 // Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea? <span className="text-gradient-cyan">Let’s Build It.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Whether you want to build an autonomous AI agent, fine-tune a specialized LLM, or launch a viral tech video campaign — I’d love to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Direct Channels</span>
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                Prefer direct messaging? Message me on Telegram or email me for fast responses regarding AI projects and media partnerships.
              </p>

              {/* Direct Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300 font-semibold text-sm flex items-center justify-between transition-all group"
                  id="contact-btn-telegram"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span>Message on Telegram</span>
                      <span className="text-[10px] text-gray-400 font-mono">@laziz_ai • Fastest Response</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full p-4 rounded-2xl glass-panel border border-white/15 hover:border-white/30 text-white font-semibold text-sm flex items-center justify-between transition-all group"
                  id="contact-btn-email"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span>Email Directly</span>
                      <span className="text-[10px] text-gray-400 font-mono">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://wa.me/998900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-sm flex items-center justify-between transition-all group"
                  id="contact-btn-whatsapp"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span>WhatsApp Inquiry</span>
                      <span className="text-[10px] text-emerald-400 font-mono">Direct Business Chat</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs font-mono text-gray-400">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Base Location: Tashkent, Uzbekistan (UTC+5)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden bg-[#0F121A]">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'friend'}. I will review your project details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sardor"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        id="input-contact-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sardor@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        id="input-contact-email"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                            formData.projectType === type
                              ? 'bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20'
                              : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      Estimated Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3 py-2 rounded-xl text-xs font-mono text-center transition-all ${
                            formData.budget === b
                              ? 'bg-purple-600 text-white font-bold border border-purple-400'
                              : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      Project Details & Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your vision, timeline, or what problem you want AI to solve..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      id="input-contact-message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                    id="btn-submit-contact-form"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Laziz</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
