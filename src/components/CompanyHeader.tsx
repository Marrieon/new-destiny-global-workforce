/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, Globe, Phone, BookOpen, User, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenConsole: (tab: 'hire' | 'apply' | 'consult') => void;
}

export default function CompanyHeader({ onOpenConsole }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Academy', href: '#academy' },
    { name: 'Our Founder', href: '#founder' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Industries', href: '#industries' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Frame */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center text-brand-gold font-extrabold text-xl shadow-md border border-brand-gold/30">
              ND
            </div>
            <div>
              <span className="text-lg font-display font-bold text-brand-black tracking-tight block leading-tight">
                New Destiny
              </span>
              <span className="text-[10px] text-brand-gold font-mono block tracking-wider uppercase font-bold">
                Global Workforce
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenConsole('apply')}
              className="px-4 py-2 text-xs font-bold text-brand-gold bg-brand-gold-light hover:bg-brand-100/40 rounded-lg transition border border-brand-gold/25"
            >
              Apply for Training
            </button>
            <button
              onClick={() => onOpenConsole('hire')}
              className="px-4 py-2 text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-dark rounded-lg transition shadow-md shadow-brand-blue/15 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Hire Talent
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsole('consult')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-dark rounded-lg transition"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Responsive Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                className="block w-full text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-brand-blue rounded-md"
              >
                {link.name}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsole('apply');
                }}
                className="w-full py-2.5 px-3 text-center text-xs font-bold text-brand-gold bg-brand-gold-light hover:bg-brand-100/40 rounded-lg transition border border-brand-gold/25"
              >
                Apply for Training
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsole('hire');
                }}
                className="w-full py-2.5 px-3 text-center text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-dark rounded-lg transition shadow-md"
              >
                Hire Talent
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsole('consult');
              }}
              className="w-full py-2.5 bg-brand-black hover:bg-brand-dark text-brand-gold font-bold text-xs rounded-lg text-center border border-brand-gold/20"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
