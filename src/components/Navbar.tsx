import React, { useState, useEffect } from 'react';
import { Bot, Menu, X, ArrowUpRight, Sun, Moon, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language } from '../data/translations';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.aiEngineering, href: '#ai-engineering', id: 'ai-engineering' },
    { name: t.nav.contentCreation, href: '#content-creation', id: 'content-creation' },
    { name: t.nav.technologies, href: '#technologies', id: 'technologies' },
    { name: t.nav.approach, href: '#approach', id: 'approach' },
    { name: t.nav.synergy, href: '#synergy', id: 'synergy' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-[#090A0F]/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-opacity hover:opacity-90"
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-white dark:bg-[#090A0F] rounded-[11px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-widest text-lg leading-none">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono tracking-wider mt-0.5 uppercase">
                AI & Content
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-semibold'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Status Badge, Controls & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-200/80 dark:bg-white/10 p-0.5 rounded-full border border-slate-300 dark:border-white/10 text-xs font-medium">
              <Globe className="w-3.5 h-3.5 ml-2 mr-1 text-slate-500 dark:text-gray-400 hidden sm:inline-block" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                    language === lang.code
                      ? 'bg-cyan-500 text-white shadow-sm'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-slate-200/80 dark:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-600 dark:text-emerald-400 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.nav.available}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="hidden sm:inline-flex group relative items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:scale-[1.02]"
              id="nav-cta-contact"
            >
              <span>{t.nav.letBuild}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-[#0F121A]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 p-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 mb-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400 font-mono w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.nav.available}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-3 text-sm font-medium text-slate-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-gray-500" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-center font-semibold text-sm shadow-lg shadow-cyan-500/30"
              >
                {t.nav.letBuild}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
