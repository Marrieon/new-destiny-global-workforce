/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Percent, CalendarRange, Users, ShieldCheck, HeartPulse } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Trained Professionals',
      description: 'Our workforce is trained through our academy and prepared to support business operations from day one.',
      icon: GraduationCap,
      color: 'bg-brand-gold-light text-brand-gold-dark border-brand-gold/20',
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Access professional support without the expense of traditional hiring models, employee health plans, or workstation licensing.',
      icon: Percent,
      color: 'bg-brand-blue-light/50 text-brand-blue-dark border-brand-blue/15',
    },
    {
      title: 'Flexible Staffing',
      description: 'Whether you need part-time support, project-based assistance, or ongoing administrative help, we offer solutions designed to fit your business.',
      icon: CalendarRange,
      color: 'bg-brand-gold-light text-brand-gold-dark border-brand-gold/20',
    },
    {
      title: 'Managed Support',
      description: 'We help oversee quality, communication, and performance so business owners can focus purely on business growth and leadership alignment.',
      icon: Users,
      color: 'bg-brand-blue-light/50 text-brand-blue-dark border-brand-blue/15',
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block">
            Why Partner With Us?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-black tracking-tight">
            Why Businesses Choose Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We solve the remote hiring puzzle. From specialized training to active quality control oversight, our ecosystem guarantees excellent execution.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:bg-white hover:border-brand-gold/20 hover:shadow-lg transition-all duration-300 relative group"
                id={`why-card-${index}`}
              >
                <div className={`p-3 rounded-xl border w-fit ${point.color}`}>
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                
                <h3 className="text-base font-display font-semibold text-brand-black mt-5">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                  {point.description}
                </p>

                {/* Accent link line decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-brand-gold group-hover:to-brand-blue rounded-b-2xl transition-all"></div>
              </div>
            );
          })}
        </div>

        {/* Dynamic callout box */}
        <div className="mt-12 bg-gradient-to-r from-white to-brand-gold-light/40 rounded-2xl p-6 sm:p-8 border border-brand-gold/20 flex flex-col md:flex-row items-center gap-6 justify-between text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-brand-black uppercase tracking-wider font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Vetting Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              We stand by our talent. If a matched virtual operations specialist doesn't align with your workflow within the first two weeks, we issue a prompt replacement, free of training gaps.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <div className="bg-white border border-brand-gold/20 px-4 py-2 rounded-xl text-center">
              <span className="text-xs text-slate-400 font-mono block">Retention</span>
              <span className="text-sm font-bold text-brand-blue">96.8%</span>
            </div>
            <div className="bg-white border border-brand-gold/20 px-4 py-2 rounded-xl text-center">
              <span className="text-xs text-slate-400 font-mono block">Satisfaction</span>
              <span className="text-sm font-bold text-brand-gold">4.9 / 5</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
