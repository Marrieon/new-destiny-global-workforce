/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Sparkles, CheckCircle2, Award, Users } from 'lucide-react';
// @ts-ignore
import workspaceHero from '../assets/images/workspace_hero_1781724468738.jpg';

interface HeroSectionProps {
  onOpenConsole: (tab: 'hire' | 'apply' | 'consult') => void;
}

export default function HeroSection({ onOpenConsole }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-gold-light/60 via-white to-white pt-12 pb-20 sm:pb-24 lg:pt-16" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Message & Pillars */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-brand-gold-light border border-brand-gold/30 rounded-full py-1 px-3.5 text-xs font-bold text-brand-gold-dark">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Global Staffing meets Academic Excellence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-black tracking-tight leading-tight">
              Empowering People.<br />
              <span className="text-brand-blue">Advancing Destinies.</span><br />
              <span className="text-brand-gold">Impacting Businesses.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              We help businesses grow by providing trained, professional virtual assistants, customer service representatives, appointment setters, administrative support professionals, and business support specialists.
            </p>
            
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed border-l-2 border-brand-gold pl-4">
              At the same time, we create opportunities by training and developing a global workforce prepared to serve businesses with excellence, professionalism, and integrity.
            </p>

            {/* Core Pillars Grid */}
            <div className="py-2">
              <p className="text-xs font-mono font-bold uppercase text-brand-gold tracking-widest mb-3">Core Pillars</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/80 backdrop-blur-sm border border-brand-gold/20 p-3 rounded-xl shadow-xs hover:border-brand-gold/50 transition">
                  <span className="text-lg font-bold text-brand-black block font-display">Affordable</span>
                  <span className="text-xs text-slate-500">Premium staffing value</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-brand-gold/20 p-3 rounded-xl shadow-xs hover:border-brand-gold/50 transition">
                  <span className="text-lg font-bold text-brand-black block font-display">Reliable</span>
                  <span className="text-xs text-slate-500 font-sans">Supervised action</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm border border-brand-gold/20 p-3 rounded-xl shadow-xs hover:border-brand-gold/50 transition">
                  <span className="text-lg font-bold text-brand-black block font-display">Scalable</span>
                  <span className="text-xs text-slate-500 font-sans">Dynamic expansion</span>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onOpenConsole('hire')}
                className="px-8 py-4 bg-brand-black hover:bg-brand-dark text-brand-gold font-bold text-sm rounded-xl transition shadow-lg border border-brand-gold/30 hover:border-brand-gold text-center cursor-pointer"
              >
                Hire Professional Talent
              </button>
              <button
                onClick={() => onOpenConsole('apply')}
                className="px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm rounded-xl transition text-center cursor-pointer"
              >
                Apply for Training
              </button>
              <button
                onClick={() => onOpenConsole('consult')}
                className="px-6 py-4 bg-white hover:bg-brand-gold-light border border-slate-200 hover:border-brand-gold/25 text-slate-700 font-bold text-sm rounded-xl transition text-center cursor-pointer"
              >
                Book Consultation
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Academy Vetted
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Active Supervision Included
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Zero Hiring Risk
              </span>
            </div>

          </div>

          {/* Right Block: Hero Image / Decorative elements */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white border border-slate-100 rounded-2xl p-3 shadow-2xl">
              <img
                src={workspaceHero}
                alt="New Destiny remote specialists collaborate globally"
                className="w-full h-auto rounded-xl object-cover hover:scale-[1.01] transition duration-300"
                referrerPolicy="no-referrer"
              />
              
              {/* Dynamic Overlay Floating Badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-brand-gold/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white shadow-md">
                  <Award className="w-5 h-5 text-brand-black" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono font-bold block uppercase tracking-wider">Talent Standard</span>
                  <span className="text-sm font-bold text-brand-black">100% Prepared</span>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-brand-gold/15 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-md">
                  <Users className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono font-bold block uppercase tracking-wider">Ecosystem scale</span>
                  <span className="text-sm font-bold text-brand-black">Global Workforce</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
