/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  UserCheck, 
  Briefcase, 
  Headphones, 
  Calendar, 
  FileText, 
  Search, 
  Database, 
  Layers, 
  Network, 
  PhoneCall, 
  CheckCircle,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsole: (tab: 'hire') => void;
}

export default function ServicesSection({ onOpenConsole }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Virtual Assistants',
      icon: UserCheck,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      description: 'Versatile support professionals who assist with everyday administrative, organization, scheduling, and customer operations.',
      skills: ['Inbox Management', 'Calendar Syncing', 'Basic Research', 'Document Prep'],
      delivery: 'Part-time or Full-time remote assignment with daily reporting.',
      duties: [
        'Organizing inbox folders and handling routine correspondence',
        'Scheduling corporate appointments and personal business reminders',
        'Coordinating travel, travel itineraries, and remote lodging arrangements',
        'Drafting standard business correspondence and reports'
      ]
    },
    {
      id: 2,
      title: 'Executive Assistants',
      icon: Briefcase,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      description: 'Dedicated high-level partners managing calendar, communications, travel and priority workflow tasks for business executives.',
      skills: ['Priority Management', 'Meeting Minutes', 'Executive Reporting', 'Strategic Liaison'],
      delivery: 'Specialized Dedicated Executive Support (typically 30-40 hours/week).',
      duties: [
        'Acting as first-line gatekeeper for executive communication folders',
        'Aligning multi-timezone meetings and corporate calendars details',
        'Preparing quarterly boards materials and slide presentations',
        'Following up with division heads on executive project critical steps'
      ]
    },
    {
      id: 3,
      title: 'Customer Service Representatives',
      icon: Headphones,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      description: 'Trained support specialists answering inquiries, addressing client tickets, and ensuring delightful stakeholder experiences.',
      skills: ['SLA Compliance', 'Interpersonal Empathy', 'Zendesk / Intercom', 'Conflict Resolution'],
      delivery: 'Team-based or single dedicated staffing with clear metrics.',
      duties: [
        'Answering live webchat, support emails, and direct phone inquiries',
        'Logging tickets in ticketing portals and routing technical edgecases',
        'Conducting outbound safety and courtesy feedback loops',
        'Answering basic client FAQs with speed and extreme brand styling'
      ]
    },
    {
      id: 4,
      title: 'Appointment Setters',
      icon: Calendar,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      description: 'Trained outbound/inbound dialers converting warm leads and inquiries into booked calendar slots for your product sales team.',
      skills: ['Calendar Routing', 'Lead Qualification', 'Objection Handling', 'Outbound Sprints'],
      delivery: 'Outbound specialized support tied to CRM scheduling modules.',
      duties: [
        'Calling prospective marketing contacts and direct calendar opt-ins',
        'Qualifying client budget, authority, needs, and timeline guidelines',
        'Booking discovery calls directly inside Calendly / HubSpot calendars',
        'Sending modern automated appointment notifications and SMS reminders'
      ]
    },
    {
      id: 5,
      title: 'Administrative Support',
      icon: FileText,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
      description: 'Specialists equipped to streamline digital files, manage invoices, compile spreadsheets, and coordinate operational tasks.',
      skills: ['Excel/Sheets Pivot tables', 'Document Formatting', 'Basic Bookkeeping', 'Invoice Tracking'],
      delivery: 'Flexible administrative hours or full business support integration.',
      duties: [
        'Processing online receipt ledgers and monthly contractor expenses',
        'Entering clean database records and compiling reports from spreadsheets',
        'Converting raw meeting notes or PDF items into formatted digital documents',
        'Filing electronic documentation securely in cloud team folders'
      ]
    },
    {
      id: 6,
      title: 'Lead Generation Support',
      icon: Search,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
      description: 'Prospect and lead hunters mining directories, LinkedIn, and market data lists to build accurate lists for prospecting.',
      skills: ['Salesforce / HubSpot', 'LinkedIn Sales Navigator', 'Contact Verification', 'List Enrichment'],
      delivery: 'High-speed project basis or dedicated ongoing lead generation sync.',
      duties: [
        'Sourcing qualified target companies matching your exact ideal buyer profile',
        'Finding and verifying email addresses, phone extensions, and social links',
        'Scraping legal and registered target business directories securely',
        'Injecting verified target prospect data directly into outbound CRM systems'
      ]
    },
    {
      id: 7,
      title: 'Data Entry & CRM Management',
      icon: Database,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      description: 'Ensuring your systems remain clean, standardized, updated, and devoid of duplicates so your sales engine runs efficiently.',
      skills: ['CRM Hygiene', 'Zapier Triggers', 'High-speed accuracy', 'Database integrity'],
      delivery: 'Continuous audit and data feed updates.',
      duties: [
        'Cleaning database files and fixing duplicate/incorrect user records',
        'Entering offline event registration details into standard systems',
        'Setting up automated workflow triggers to route newly arrived leads',
        'Reconciling CRM user stages with active payment processing logs'
      ]
    },
    {
      id: 8,
      title: 'Business Support Services',
      icon: Layers,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
      description: 'Comprehensive fractional business back-office routines managed under professional operation structures.',
      skills: ['Back-Office Integration', 'SOP Adherence', 'Ecosystem alignment', 'Project Syncing'],
      delivery: 'Fully bespoke corporate operational bundles.',
      duties: [
        'Fulfilling recurring daily or weekly organizational audits and tasks',
        'Drafting system SOPs and operating logs for client training packages',
        'Tracking minor projects and task boards across decentralized remote teams',
        'Assisting with simple web edits, newsletters, or basic layout prep'
      ]
    },
    {
      id: 9,
      title: 'Remote Staffing Solutions',
      icon: Network,
      color: 'bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100',
      description: 'Scaling workforce requirements on demand. Skip recruiting hurdles; we supply pre-vetted professionals ready for any project.',
      skills: ['Talent Sourcing', 'Workforce Scalability', 'Vetting Protocols', 'Fast-onboarding'],
      delivery: 'Custom staff scaling of 3 to 20+ specialized agents.',
      duties: [
        'Reviewing specialized staffing requirements for expanding organizations',
        'Matching Academy graduates with precise corporate cultural parameters',
        'Providing rapid redundancy models (immediate backup coverage if needed)',
        'Scaling operational shifts on demand to matching volume periods'
      ]
    },
    {
      id: 10,
      title: 'Call Center Support',
      icon: PhoneCall,
      color: 'bg-sky-50 text-sky-600 border-sky-100',
      description: 'Omni-channel outbound/inbound support campaigns designed with state-of-the-art telecommunication routing.',
      skills: ['High Volume Dialing', 'SLA Call KPIs', 'Omnichannel queues', 'Customer Delight'],
      delivery: 'Standard shift queues matching international customer cycles.',
      duties: [
        'Handling multi-agent high volume inbound customer help queues',
        'Managing outbound followups and customer loyalty check-ins',
        'Following structured talk tracks with natural communication styles',
        'Recording clean interaction notes and logging results after every call'
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/50 border-y border-slate-100" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-black tracking-tight">
            Our Professional Workforce Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            New Destiny Global Workforce provides premium, trained virtual representation and administrative support designed to increase speed, efficiency, and scale—all while managing quality and performance.
          </p>
        </div>

        {/* Dynamic Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isOpen = selectedService === index;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border transition duration-350 overflow-hidden shadow-xs hover:shadow-md ${
                  isOpen ? 'border-brand-gold ring-4 ring-brand-gold-light' : 'border-slate-100'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Header of Card */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl border ${service.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">#{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-slate-950 mt-4">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Vetted Skills Row */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-sans">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Duty expansion */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center bg-transparent">
                    <button
                      onClick={() => setSelectedService(isOpen ? null : index)}
                      className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 cursor-pointer"
                    >
                      {isOpen ? (
                        <>
                          <Minus className="w-3.5 h-3.5" /> Close Details
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" /> View Active Duties
                        </>
                      )}
                    </button>
                    {!isOpen && (
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400">
                        Academy Vetted
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Section showing active duties list */}
                {isOpen && (
                  <div className="bg-brand-gold-light/40 p-6 border-t border-slate-100 space-y-4 animate-in slide-in-from-top-3 duration-200">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold-dark font-bold block mb-2">
                        Common Duties Handled
                      </span>
                      <ul className="space-y-2">
                        {service.duties.map((duty, dIdx) => (
                          <li key={dIdx} className="flex gap-2 text-xs text-slate-600 text-left">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{duty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold-dark font-bold block mb-1">
                        SOP Standard Framework
                      </span>
                      <p className="text-[11px] text-slate-500 italic leading-snug">
                        {service.delivery} Managed carefully by our Quality Assurance division.
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenConsole('hire')}
                      className="w-full mt-2 py-2 px-4 bg-brand-black hover:bg-brand-dark text-brand-gold font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 border border-brand-gold/30 cursor-pointer"
                    >
                      Request Specialist <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt to Hire */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-brand-gold/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left space-y-1.5 md:max-w-2xl">
            <h4 className="text-lg font-display font-semibold text-brand-black">
              Need a Custom Remote Support Package unique to your model?
            </h4>
            <p className="text-xs text-slate-500">
              Our workforce matches multiple cross-specialties listed. Speak to a Consultant to design a custom delegation checklist today.
            </p>
          </div>
          <button
            onClick={() => onOpenConsole('hire')}
            className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs rounded-xl shadow-md cursor-pointer whitespace-nowrap shrink-0 transition"
          >
            Request Customized Proposal
          </button>
        </div>

      </div>
    </section>
  );
}
