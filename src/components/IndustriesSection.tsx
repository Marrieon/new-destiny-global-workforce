/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Home, 
  Truck, 
  HelpCircle, 
  BriefcaseMedical, 
  Heart, 
  Compass, 
  Box, 
  User, 
  Check,
  ChevronRight
} from 'lucide-react';

export default function IndustriesSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const industries = [
    {
      title: 'Financial Services',
      icon: TrendingUp,
      problems: 'Data handling overhead, administrative invoicing bottlenecks, prospect reporting lag.',
      tasks: ['Report preparation & data logging', 'CRM update hygiene', 'Billing reconciliations', 'Document management compliance'],
      placementSpeed: 'Fast-tracked profile match',
    },
    {
      title: 'Insurance',
      icon: ShieldCheck,
      problems: 'High policyholder claims volumes, inbound telephone queues, client renewal tracking.',
      tasks: ['Claims scheduling & logging', 'Renewals followups tracking', 'Inbound policyholder query guides', 'Quote preparation support'],
      placementSpeed: 'Requires 4-day prep audit',
    },
    {
      title: 'Real Estate',
      icon: Home,
      problems: 'Coordinating inspections, property calendar overlaps, social promotions, lead outreach.',
      tasks: ['Tenant communication routing', 'Listing descriptions copy updates', 'Escrow milestone appointment updates', 'Prospect intake call routing'],
      placementSpeed: 'Immediate profile match',
    },
    {
      title: 'Transportation & Logistics',
      icon: Truck,
      problems: 'High dispatch tracking lag, driver status logs, driver safety updates, load sheet entries.',
      tasks: ['Load sheet entry compliance', 'Carrier status communications', 'Client dispatch updates logs', 'Invoice dispatch generation'],
      placementSpeed: 'Express setup support',
    },
    {
      title: 'Coaching & Consulting',
      icon: Compass,
      problems: 'High content coordination times, student Calendly clashes, webinar emails setups.',
      tasks: ['Student scheduling management', 'Community comments moderators', 'Invoice tracking metrics', 'Presentation materials layout assist'],
      placementSpeed: 'Immediate profile match',
    },
    {
      title: 'Healthcare Support',
      icon: BriefcaseMedical,
      problems: 'Answering basic patient appointment questions, medical data directory cleanups, safety queues.',
      tasks: ['General directory logs maintenance', 'Patient appointment slot routing', 'Billing inquiry coordination', 'Physician message logging'],
      placementSpeed: 'Requires HIPAA-ready match',
    },
    {
      title: 'Churches & Ministries',
      icon: Heart,
      problems: 'Community calendars adjustments, prayer logs maintenance, newsletter communications.',
      tasks: ['Volunteer coordination logging', 'Donations tracking registers', 'Newsletter broadcast setups', 'Event RSVP scheduling'],
      placementSpeed: 'Value-aligned elite specialists',
    },
    {
      title: 'Professional Services',
      icon: Box,
      problems: 'Administrative routines overtaking client billable consultation time.',
      tasks: ['Timesheet logging records', 'Drafting service agreements', 'Filing client records securely', 'Invoice generation checkouts'],
      placementSpeed: 'Immediate profile match',
    },
    {
      title: 'Small Businesses',
      icon: User,
      problems: 'Entrepreneurs wearing too many hats, missing incoming leads due to active project works.',
      tasks: ['Inbox filtering routines', 'Answering customer emails', 'Supplier coordinate logs', 'General virtual support tasks'],
      placementSpeed: 'Flexible part-time assignments',
    },
    {
      title: 'Entrepreneurs',
      icon: HelpCircle,
      problems: 'Rapidly shifting ideas, no structure to execute daily administrative routines.',
      tasks: ['Daily agenda management', 'Basic social postings setups', 'Travel routing coordinates', 'Market prospecting lists compilation'],
      placementSpeed: 'Matching partner matched in 48h',
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/50 border-t border-slate-100" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block">
            Target Placements
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-black tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Our virtual assistants and support services are tailored for your specific regulatory, language, and cultural compliance needs. Select your niche space to see typical assignments.
          </p>
        </div>

        {/* Categories Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Vertical List selection (10 items) */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-2.5">
            {industries.map((ind, index) => {
              const IconComponent = ind.icon;
              const isActive = activeCategory === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue text-white border-brand-blue shadow-md translate-x-1 lg:translate-x-2'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-150'
                  }`}
                  id={`industry-btn-${index}`}
                >
                  <span className={`p-1.5 rounded-lg shrink-0 ${
                    isActive ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-500'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-semibold font-display truncate">
                    {ind.title}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ml-auto shrink-0 transition-transform ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right panel: Active industry breakdown */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-brand-gold/15 p-6 sm:p-8 shadow-md relative overflow-hidden animate-in fade-in duration-200">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold-light rounded-full blur-2xl opacity-45"></div>
            
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-3 bg-brand-gold-light text-brand-gold border border-brand-gold/15 rounded-xl shadow-xs">
                {(() => {
                  const Icon = industries[activeCategory].icon;
                  return <Icon className="w-6 h-6" />;
                })()}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block">Active Placement Niche</span>
                <h3 className="text-xl font-display font-bold text-brand-black">
                  {industries[activeCategory].title}
                </h3>
              </div>
            </div>

            <div className="py-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 font-bold block mb-1">
                  Primary Pain Points Resolved
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {industries[activeCategory].problems}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase font-mono tracking-wider text-brand-blue font-bold block mb-3">
                  Tailored Delegations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industries[activeCategory].tasks.map((task, keyIdx) => (
                    <div key={keyIdx} className="flex gap-2.5 items-start bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="w-4 h-4 rounded-full bg-brand-gold-light text-brand-gold-dark flex items-center justify-center shrink-0 mt-0.5 border border-brand-gold/15">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span className="text-xs font-semibold text-slate-705 leading-snug">
                        {task}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Standard Placement: <strong>{industries[activeCategory].placementSpeed}</strong></span>
              <span className="bg-brand-gold-light text-brand-gold-dark font-bold px-2 py-1 rounded border border-brand-gold/10">Academy Certified</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
