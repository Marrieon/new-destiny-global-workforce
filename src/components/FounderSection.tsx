/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, Award, MessageSquare, Quote } from 'lucide-react';
// @ts-ignore
import founderPortrait from '../assets/images/founder_portrait_1781724453276.jpg';

export default function FounderSection() {
  const highlights = [
    'Founder & CEO, New Destiny Global Workforce Business Solutions',
    'Founder & CEO, New Destiny Financial Group LLC.',
    'Founder & CEO, Kingdom Come Staffing and Business Solutions of King 👑 Dom Transport LLC',
    'Business Consultant & Workforce Development Advocate',
    'Leadership Trainer & Sales Educator',
    'Entrepreneur & Organizational Development Strategist',
    'Dedicated to Workforce Development, Business Growth, and Economic Empowerment'
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-y border-slate-100" id="founder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block">
            Executive Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Meet Our Founder
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            The visionary guiding the bridging of business necessity with preparation and workforce development.
          </p>
        </div>

        {/* Primary Story Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left portrait with quote block underneath */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-white border border-slate-200 rounded-2xl p-4 shadow-xl overflow-hidden text-center group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold via-brand-black to-brand-blue"></div>
              
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-slate-100 shadow-md mt-6 bg-slate-100 relative">
                <img 
                  src={founderPortrait} 
                  alt="Robert D. Stone portrait" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
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
            <div className="space-y-4 bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 Plan shadow-xs">
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

              <p className="text-sm text-slate-600 leading-relaxed">
                Under his leadership, New Destiny Global Workforce Business Solutions is committed to excellence, integrity, innovation, and creating impact on both sides of the workforce equation—helping businesses grow while helping people advance their destinies.
              </p>
            </div>

            {/* Founder Highlights list */}
            <div className="space-y-4">
              <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                Founder Highlights
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {highlights.map((highlight, index) => (
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

      </div>
    </section>
  );
}
