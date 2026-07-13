/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Check, ShieldCheck, Award, Quote, GraduationCap } from 'lucide-react';
// @ts-ignore
import founderPortrait from '../assets/images/rob.png';
// @ts-ignore
import staceyPortrait from '../assets/images/stace2.png';

export default function FounderSection() {
  const [activeLeader, setActiveLeader] = useState<'robert' | 'stacey'>('robert');

  const robertHighlights = [
    'Founder & CEO, New Destiny Global Workforce Business Solutions',
    'Founder & CEO, New Destiny Financial Group LLC.',
    'Founder & CEO, Kingdom Come Staffing and Business Solutions of King 👑 Dom Transport LLC',
    'Business Consultant & Workforce Development Advocate',
    'Leadership Trainer & Sales Educator',
    'Entrepreneur & Organizational Development Strategist',
    'Dedicated to Workforce Development, Business Growth, and Economic Empowerment'
  ];

  const staceyHighlights = [
    'BSc. in Information Technology & Computer Science graduate, St. Paul University',
    'Expertise in System Innovation & Digital Workforce Integration',
    'Strategic Operations Management & Cross-team Coordination',
    'Pioneering Digital Solutions for Business Process Automation',
    'High-level Executive Administration & Leadership Support',
    'Committed to Operational Excellence & Enterprise Scalability'
  ];

  const staceyRoles = [
    {
      title: 'EXECUTIVE SUPPORT',
      desc: 'Providing high-level administrative support and ensuring operational excellence for leadership.'
    },
    {
      title: 'HEAD OF STAFF',
      desc: 'Managing daily operations, team coordination, and executive priorities with precision.'
    },
    {
      title: 'TECHNOLOGY DEVELOPMENT',
      desc: 'Leading system innovation, digital solutions, and technology advancement for organizational growth.'
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-100" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block">
            Executive Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Our Executive Leadership
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Empowering businesses, scaling teams, and developing cutting-edge digital workforce ecosystems.
          </p>

          {/* Quick toggle switch */}
          <div className="flex justify-center pt-4">
            <div className="bg-slate-200/60 p-1.5 rounded-2xl flex gap-1.5 max-w-md w-full border border-slate-300/40">
              <button
                onClick={() => setActiveLeader('robert')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeLeader === 'robert'
                    ? 'bg-brand-black text-brand-gold shadow-md border border-brand-gold/30'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Robert D. Stone <span className="block text-[9px] font-normal opacity-70">Founder & CEO</span>
              </button>
              <button
                onClick={() => setActiveLeader('stacey')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeLeader === 'stacey'
                    ? 'bg-brand-black text-brand-gold shadow-md border border-brand-gold/30'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Stacey Marrion <span className="block text-[9px] font-normal opacity-70">Executive Director</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Profile Presentation */}
        {activeLeader === 'robert' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-300" id="founder-robert">
            {/* Left portrait with quote block underneath */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative bg-white border border-slate-200 rounded-2xl p-4 shadow-xl overflow-hidden text-center group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold via-brand-black to-brand-blue"></div>
                
                <div className="aspect-[3/4] w-full max-w-[280px] mx-auto rounded-xl overflow-hidden border-4 border-slate-100 shadow-md mt-6 bg-slate-100 relative">
                  <img 
                    src={founderPortrait} 
                    alt="Robert D. Stone portrait" 
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-display font-semibold text-slate-900">
                    Robert D. Stone
                  </h3>
                  <p className="text-sm font-bold text-brand-gold tracking-wide mt-1">
                    Founder & CEO
                  </p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    New Destiny Global Workforce Business Solutions
                  </p>
                </div>

                {/* Decorative mini badges */}
                <div className="flex justify-center gap-3 pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" /> Vetting Steward
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4.5 h-4.5 text-brand-gold" /> Career Builder
                  </span>
                </div>
              </div>

              {/* Core Belief Pullquote */}
              <div className="relative bg-brand-black text-white rounded-2xl p-6 shadow-lg overflow-hidden border border-brand-gold/25">
                <div className="absolute right-4 bottom-2 opacity-10">
                  <Quote className="w-24 h-24 text-brand-gold" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold block uppercase mb-3">
                  Robert D. Stone's Core Belief
                </span>
                <blockquote className="text-sm sm:text-base font-medium italic leading-relaxed text-slate-150">
                  &ldquo;When opportunity meets preparation, lives are changed, businesses grow, and communities are strengthened.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right Biography & Highlights list */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs">
                <h4 className="text-lg font-display font-bold text-slate-950 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-6 bg-brand-blue rounded"></span>
                  The Vision Behind New Destiny
                </h4>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  Robert D. Stone founded New Destiny Global Workforce Business Solutions after recognizing two growing needs in today's marketplace.
                </p>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  The first was the increasing demand from business owners, entrepreneurs, ministries, and organizations for dependable, trained, and qualified professionals who could help support their operations, increase productivity, and create room for growth.
                </p>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  The second was the need for greater opportunities, workforce development, skills training, and economic advancement for individuals seeking meaningful employment and career growth.
                </p>

                <p className="text-sm text-slate-700 leading-relaxed font-semibold bg-brand-gold-light/40 p-3 rounded-xl border border-brand-gold/15">
                  Rather than simply creating another staffing company, Robert envisioned an organization that would bridge the gap between opportunity and preparation.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Through New Destiny Global Workforce Business Solutions and the New Destiny Global Workforce Academy, the company focuses on identifying talent, providing professional training, developing workforce readiness, and connecting qualified individuals with businesses seeking reliable support.
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  His vision is to create a workforce ecosystem that not only helps businesses scale and succeed but also empowers individuals through education, professional development, and access to meaningful opportunities.
                </p>
              </div>

              {/* Founder Highlights list */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                  Founder Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {robertHighlights.map((highlight, index) => (
                    <div key={index} className="flex gap-2.5 items-start bg-white rounded-xl border border-slate-100 p-4 hover:border-slate-300 hover:shadow-xs transition">
                      <span className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start animate-in fade-in duration-300" id="founder-stacey">
            
            {/* Left portrait with St. Paul University details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative bg-white border border-slate-200 rounded-2xl p-4 shadow-xl overflow-hidden text-center group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold via-brand-black to-brand-blue"></div>
                
                <div className="aspect-[3/4] w-full max-w-[280px] mx-auto rounded-xl overflow-hidden border-4 border-slate-100 shadow-md mt-6 bg-slate-100 relative">
                  <img 
                    src={staceyPortrait} 
                    alt="Stacey Marrion portrait" 
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-display font-semibold text-slate-900">
                    Stacey Marrion
                  </h3>
                  <p className="text-xs font-bold text-brand-gold tracking-wide mt-1 uppercase">
                    Executive Director & Executive Assistant to the CEO
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Head of Staff & Technology Development
                  </p>
                </div>

                {/* St. Paul University Nairobi credentials block */}
                <div className="mt-5 pt-4 border-t border-slate-150 text-left space-y-2">
                  <span className="text-[10px] uppercase font-mono font-bold text-brand-gold block tracking-wider">
                    Education & Credentials
                  </span>
                  <div className="flex gap-2.5 items-start bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <span className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold-dark flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4.5 h-4.5" />
                    </span>
                    <div>
                      <h5 className="text-[11px] font-bold text-slate-800 leading-tight">
                        ST. PAUL UNIVERSITY
                      </h5>
                      <p className="text-[9px] text-slate-500 font-mono">Nairobi, Kenya</p>
                      <p className="text-[10px] font-semibold text-brand-black mt-1">
                        BSc. in Information Technology & Computer Science
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Belief Pullquote */}
              <div className="relative bg-brand-black text-white rounded-2xl p-6 shadow-lg overflow-hidden border border-brand-gold/25">
                <div className="absolute right-4 bottom-2 opacity-10">
                  <Quote className="w-24 h-24 text-brand-gold" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold block uppercase mb-3">
                  Stacey Marrion's Mission
                </span>
                <blockquote className="text-sm sm:text-base font-medium italic leading-relaxed text-slate-150">
                  &ldquo;Organized. Innovative. Dedicated. Committed to Excellence in bridging the physical and digital horizons of corporate operations.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right Portfolio & Roles */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xs">
                <h4 className="text-lg font-display font-bold text-slate-950 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-6 bg-brand-gold rounded"></span>
                  Corporate Leadership Mandate
                </h4>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  As the Executive Director and Head of Staff & Technology Development, Stacey Marrion directs operational frameworks, aligning virtual assistant staffing and academic validation with industry-grade software compliance.
                </p>

                {/* Grid of her specific roles */}
                <div className="space-y-4 pt-2">
                  {staceyRoles.map((role, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-slate-50 border border-slate-200/50 rounded-xl hover:border-brand-gold/20 hover:bg-white transition duration-200">
                      <div className="w-10 h-10 rounded-xl bg-brand-black/5 text-brand-black border border-slate-200 flex items-center justify-center shrink-0 font-bold font-mono text-sm">
                        0{idx + 1}
                      </div>
                      <div>
                        <h5 className="text-xs font-mono font-bold text-brand-gold-dark tracking-wider">
                          {role.title}
                        </h5>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {role.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights List to match Robert's visual hierarchy */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                  Executive Competencies &amp; Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {staceyHighlights.map((highlight, index) => (
                    <div key={index} className="flex gap-2.5 items-start bg-white rounded-xl border border-slate-100 p-4 hover:border-slate-300 hover:shadow-xs transition">
                      <span className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
