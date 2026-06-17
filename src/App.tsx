/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState } from 'react';
import CompanyHeader from './components/CompanyHeader';
import HeroSection from './components/HeroSection';
import CostCalculator from './components/CostCalculator';
import ServicesSection from './components/ServicesSection';
import AcademySection from './components/AcademySection';
import FounderSection from './components/FounderSection';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesSection from './components/IndustriesSection';
import InteractiveConsole from './components/InteractiveConsole';
import { Sparkles, Globe, ShieldCheck, Mail, Phone, ExternalLink, GraduationCap, ChevronUp } from 'lucide-react';

export default function App() {
  const [consoleTab, setConsoleTab] = useState<'hire' | 'apply' | 'consult' | 'portal'>('hire');

  const triggerConsoleFocus = (tab: 'hire' | 'apply' | 'consult' | 'portal') => {
    setConsoleTab(tab);
    const consoleEl = document.getElementById('console');
    if (consoleEl) {
      consoleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 selection:bg-brand-gold selection:text-brand-black" id="main-frame">
      
      {/* Header element */}
      <CompanyHeader onOpenConsole={triggerConsoleFocus} />

      {/* Main content loop */}
      <main>
        
        {/* 1. Hero Block */}
        <HeroSection onOpenConsole={triggerConsoleFocus} />

        {/* 2. Services Segment */}
        <ServicesSection onOpenConsole={() => triggerConsoleFocus('hire')} />

        {/* 3. Cost Savings ROI Section */}
        <section className="py-20 sm:py-24 bg-white border-b border-slate-100" id="calculator-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block bg-brand-gold-light/40 border border-brand-gold/15 w-fit mx-auto px-2.5 py-1 rounded-full">
                Cost Assessment Matrix
              </span>
              <h2 className="text-3xl font-display font-semibold text-slate-955 tracking-tight">
                Evaluate Your Load Expenses
              </h2>
              <p className="text-slate-500 text-sm">
                Traditional hiring is bogged down with healthcare, space, taxes, and software variables. Slide values to calculate your actual monthly savings.
              </p>
            </div>
            <CostCalculator />
          </div>
        </section>

        {/* 4. Academy Segment */}
        <AcademySection onOpenConsole={() => triggerConsoleFocus('apply')} />

        {/* 5. Our Founder Segment */}
        <FounderSection />

        {/* 6. Why Businesses Choose Us */}
        <WhyChooseUs />

        {/* 7. Industries We Serve */}
        <IndustriesSection />

        {/* 8. Fully Functional Operations Hub */}
        <div id="interactive-hub-container" className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
          <InteractiveConsole activeTab={consoleTab} setActiveTab={setConsoleTab} />
        </div>

      </main>

      {/* Corporate footer */}
      <footer className="bg-[#0f172a] text-slate-350 border-t border-slate-800" id="corporate-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Column 1: Core Company Profile */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-black border border-brand-gold/45 flex items-center justify-center text-brand-gold font-extrabold text-lg shadow-sm">
                  ND
                </div>
                <div>
                  <span className="text-base font-display font-bold text-white block leading-none">
                    New Destiny
                  </span>
                  <span className="text-[9px] text-brand-gold font-mono tracking-widest uppercase block font-semibold mt-1">
                    Global Workforce Business Solutions
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Empowering People. Advancing Destinies. Impacting Businesses. 
              </p>
              
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                We combine business support services with professional virtual academy instruction, optimizing global talent to support scaling enterprises.
              </p>

              <div className="flex gap-4 text-xs font-mono pt-2 text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" /> Fully Insured
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-brand-gold" /> Global Scope
                </span>
              </div>
            </div>

            {/* Column 2: Reference links */}
            <div className="md:col-span-3 text-left space-y-3.5">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#e9ecf4] font-bold">
                Directory Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-brand-gold transition text-slate-400">Our Services</a></li>
                <li><a href="#academy" className="hover:text-brand-gold transition text-slate-400 font-bold text-brand-gold">Workforce Academy</a></li>
                <li><a href="#founder" className="hover:text-brand-gold transition text-slate-400">Robert D. Stone</a></li>
                <li><a href="#why-us" className="hover:text-brand-gold transition text-slate-400">Why Businesses Choose Us</a></li>
                <li><a href="#industry-btn-0" className="hover:text-brand-gold transition text-slate-400">Niche Sectors Served</a></li>
              </ul>
            </div>

            {/* Column 3: Contact & Consultations direct line */}
            <div className="md:col-span-4 text-left space-y-3.5">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#e9ecf4] font-bold">
                Consultation Desk
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Connect with our team to explore training curricula or match secure, managed Virtual Assistants for your active workflow.
              </p>
              
              <div className="space-y-2 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>solutions@newdestinyglobal.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>+1 (800) 555-DESTINY</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => triggerConsoleFocus('consult')}
                  className="px-4 py-2 bg-brand-black hover:bg-slate-900 hover:text-brand-gold text-xs font-bold text-slate-300 rounded-lg transition border border-brand-gold/30 hover:border-brand-gold cursor-pointer"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} New Destiny Global Workforce Business Solutions. All rights reserved. Registered USA.
            </p>
            <div className="flex gap-4">
              <a href="#main-header" className="hover:text-white transition flex items-center gap-1 font-mono text-[10px]">
                Back to Top <ChevronUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

