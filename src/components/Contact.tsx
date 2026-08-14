import React, { useState } from 'react';
import { Send, Mail, Phone, Globe, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
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
    <section id="contact" className="py-24 relative bg-slate-100 dark:bg-[#0B0D14] overflow-hidden border-t border-slate-200 dark:border-white/5">
      {/* Background Lights */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            <Send className="w-3.5 h-3.5" />
            <span>07 // {t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>{t.contact.badge}</span>
              </h3>

              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                {t.contact.subheading}
              </p>

              {/* Direct Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-semibold text-sm flex items-center justify-between transition-all group"
                  id="contact-btn-telegram"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span>{t.contact.telegram}</span>
                      <span className="text-[10px] text-slate-500 dark:text-gray-400 font-mono">@juraxujayev_1 • Fast Response</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full p-4 rounded-2xl glass-panel border border-slate-300 dark:border-white/15 hover:border-slate-400 dark:hover:border-white/30 text-slate-900 dark:text-white font-semibold text-sm flex items-center justify-between transition-all group"
                  id="contact-btn-email"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span>{t.contact.directEmail}</span>
                      <span className="text-[10px] text-slate-500 dark:text-gray-400 font-mono">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 dark:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://wa.me/998900000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold text-sm flex items-center justify-between transition-all group"
                  id="contact-btn-whatsapp"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col text-left">
                      <span>WhatsApp Inquiry</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Direct Business Chat</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-gray-400">
                <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Location: Samarkand, Uzbekistan (UTC+5)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-white/10 relative overflow-hidden bg-white dark:bg-[#0F121A]">
              
              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.contact.successTitle}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-300 max-w-md mx-auto">
                    {t.contact.successMessage}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 dark:text-gray-300 block">
                        {t.contact.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        id="input-contact-name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-700 dark:text-gray-300 block">
                        {t.contact.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        id="input-contact-email"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-700 dark:text-gray-300 block">
                      {t.contact.typeLabel}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                            formData.projectType === type
                              ? 'bg-cyan-500 text-white dark:text-black font-bold shadow-md shadow-cyan-500/20'
                              : 'bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-700 dark:text-gray-300 block">
                      {t.contact.budgetLabel}
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
                              : 'bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-700 dark:text-gray-300 block">
                      {t.contact.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
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
                    <span>{t.contact.submit}</span>
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
