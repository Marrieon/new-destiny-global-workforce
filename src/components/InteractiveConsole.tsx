/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { 
  Building2, 
  GraduationCap, 
  CalendarClock, 
  FolderLock, 
  Check, 
  Sparkles, 
  Laptop, 
  PhoneCall, 
  ClipboardCheck, 
  Clock, 
  Calendar,
  ChevronRight,
  User,
  Mail,
  Smartphone,
  Briefcase,
  Sliders,
  Send,
  Trash2,
  FileCheck
} from 'lucide-react';
import { BusinessInquiry, StudentApplication, ScheduledConsultation } from '../types';

interface ConsoleProps {
  activeTab: 'hire' | 'apply' | 'consult' | 'portal';
  setActiveTab: (tab: 'hire' | 'apply' | 'consult' | 'portal') => void;
}

export default function InteractiveConsole({ activeTab, setActiveTab }: ConsoleProps) {
  // --- INQUIRY STATE ---
  const [inquiries, setInquiries] = useState<BusinessInquiry[]>(() => {
    const s = localStorage.getItem('nd_inquiries');
    return s ? JSON.parse(s) : [];
  });
  const [hireClientName, setHireClientName] = useState('');
  const [hireCompanyName, setHireCompanyName] = useState('');
  const [hireEmail, setHireEmail] = useState('');
  const [hirePhone, setHirePhone] = useState('');
  const [hireIndustry, setHireIndustry] = useState('Real Estate');
  const [hireMessage, setHireMessage] = useState('');
  const [hireRoles, setHireRoles] = useState<string[]>([]);
  const [hireHours, setHireHours] = useState<number>(30);
  const [hireSuccess, setHireSuccess] = useState(false);

  // --- ACADEMY STUDENT STATE ---
  const [applications, setApplications] = useState<StudentApplication[]>(() => {
    const s = localStorage.getItem('nd_applications');
    return s ? JSON.parse(s) : [];
  });
  const [stdName, setStdName] = useState('');
  const [stdEmail, setStdEmail] = useState('');
  const [stdPhone, setStdPhone] = useState('');
  const [stdGoal, setStdGoal] = useState('Remote Career Transition');
  const [stdSkills, setStdSkills] = useState<string[]>([]);
  const [stdRig, setStdRig] = useState<'Basic Laptop' | 'Standard PC' | 'High Performance'>('Standard PC');
  const [stdCourse, setStdCourse] = useState('Virtual Assistant Skills');
  const [stdSuccess, setStdSuccess] = useState(false);

  // --- CONSULTATION STATE ---
  const [consultations, setConsultations] = useState<ScheduledConsultation[]>(() => {
    const s = localStorage.getItem('nd_consultations');
    return s ? JSON.parse(s) : [];
  });
  const [consName, setConsName] = useState('');
  const [consCompany, setConsCompany] = useState('');
  const [consEmail, setConsEmail] = useState('');
  const [consDate, setConsDate] = useState('2026-06-25');
  const [consSlot, setConsSlot] = useState('');
  const [consType, setConsType] = useState('Virtual Assistant Scope assessment');
  const [consSuccess, setConsSuccess] = useState(false);

  // Synchronize storage
  useEffect(() => {
    localStorage.setItem('nd_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('nd_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('nd_consultations', JSON.stringify(consultations));
  }, [consultations]);

  // Roles available for selection
  const roleOptions = [
    'Virtual Assistant',
    'Executive Assistant',
    'Customer Service rep',
    'Appointment Setter',
    'Lead Gen specialist',
    'Data Entry operator',
    'Call Center queue'
  ];

  // Skills checkbox options
  const studentSkillOptions = [
    'Microsoft Office / GSuite',
    'Typing speed > 50WPM',
    'Social Media templates',
    'CRM Management',
    'Basic Cold Calling',
    'Strong Verbal English'
  ];

  // Mock Calendar date slots helper
  const availableSlots = [
    '09:00 AM EST',
    '10:30 AM EST',
    '01:00 PM EST',
    '02:30 PM EST',
    '04:00 PM EST'
  ];

  const handleHireSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!hireClientName || !hireEmail || !hireCompanyName) return;

    const newInquiry: BusinessInquiry = {
      id: 'INQ_' + Math.random().toString(36).substr(2, 9),
      clientName: hireClientName,
      companyName: hireCompanyName,
      email: hireEmail,
      phone: hirePhone || 'None Provided',
      industry: hireIndustry,
      requiredRoles: hireRoles.length > 0 ? hireRoles : ['General Support Representative'],
      hoursPerWeek: hireHours,
      message: hireMessage,
      status: 'Received',
      createdAt: new Date().toLocaleDateString()
    };

    setInquiries([newInquiry, ...inquiries]);
    setHireSuccess(true);
    setTimeout(() => {
      setHireSuccess(false);
      // Reset
      setHireClientName('');
      setHireCompanyName('');
      setHireEmail('');
      setHirePhone('');
      setHireMessage('');
      setHireRoles([]);
      setActiveTab('portal'); // Navigate to submissions dashboard automatically
    }, 2500);
  };

  const handleApplySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!stdName || !stdEmail) return;

    const newApp: StudentApplication = {
      id: 'APP_' + Math.random().toString(36).substr(2, 9),
      studentName: stdName,
      email: stdEmail,
      phone: stdPhone || 'None Provided',
      academicGoal: stdGoal,
      technicalSkills: stdSkills,
      computerPower: stdRig,
      preferredCourse: stdCourse,
      submittedAt: new Date().toLocaleDateString(),
      status: 'Received'
    };

    setApplications([newApp, ...applications]);
    setStdSuccess(true);
    setTimeout(() => {
      setStdSuccess(false);
      setStdName('');
      setStdEmail('');
      setStdPhone('');
      setStdSkills([]);
      setActiveTab('portal');
    }, 2500);
  };

  const handleConsultSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!consName || !consEmail || !consSlot) return;

    const newCons: ScheduledConsultation = {
      id: 'CNS_' + Math.random().toString(36).substr(2, 9),
      clientName: consName,
      companyName: consCompany || 'Self Employed / Startup',
      email: consEmail,
      date: consDate,
      timeSlot: consSlot,
      consultationType: consType,
      createdAt: new Date().toLocaleDateString()
    };

    setConsultations([newCons, ...consultations]);
    setConsSuccess(true);
    setTimeout(() => {
      setConsSuccess(false);
      setConsName('');
      setConsCompany('');
      setConsEmail('');
      setConsSlot('');
      setActiveTab('portal');
    }, 2500);
  };

  const toggleRole = (r: string) => {
    if (hireRoles.includes(r)) {
      setHireRoles(hireRoles.filter(role => role !== r));
    } else {
      setHireRoles([...hireRoles, r]);
    }
  };

  const toggleStudentSkill = (s: string) => {
    if (stdSkills.includes(s)) {
      setStdSkills(stdSkills.filter(sk => sk !== s));
    } else {
      setStdSkills([...stdSkills, s]);
    }
  };

  const deleteInquiry = (id: string) => {
    setInquiries(inquiries.filter(i => i.id !== id));
  };

  const deleteApplication = (id: string) => {
    setApplications(applications.filter(a => a.id !== id));
  };

  const deleteConsultation = (id: string) => {
    setConsultations(consultations.filter(c => c.id !== id));
  };

  const hasAnySubmissions = inquiries.length > 0 || applications.length > 0 || consultations.length > 0;

  return (
    <section className="py-16 sm:py-24 bg-white" id="console">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Core title detailing operational console */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block">
            Ecosystem Portals
          </span>
          <h2 className="text-3xl font-display font-bold text-brand-black tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-slate-500 text-sm">
            Launch your hiring cycle, initiate student professional training intake, or schedule a quick workflow scoping consultation using our unified operational terminal.
          </p>
        </div>

        {/* Console Hub Container */}
        <div className="bg-slate-50 rounded-2xl border border-slate-150 overflow-hidden shadow-xl" id="unified-terminal">
          
          {/* Top Tabs Controller */}
          <div className="flex border-b border-slate-200 bg-white overflow-x-auto select-none scrollbar-none">
            <button
              onClick={() => setActiveTab('hire')}
              className={`flex-1 min-w-[140px] px-6 py-4 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'hire'
                  ? 'border-brand-gold text-brand-black bg-brand-gold-light/20 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Building2 className="w-4 h-4" /> For Businesses
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`flex-1 min-w-[140px] px-6 py-4 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'apply'
                  ? 'border-brand-gold text-brand-black bg-brand-gold-light/20 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <GraduationCap className="w-4 h-4" /> For Students
            </button>
            <button
              onClick={() => setActiveTab('consult')}
              className={`flex-1 min-w-[145px] px-6 py-4 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'consult'
                  ? 'border-brand-gold text-brand-black bg-brand-gold-light/20 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <CalendarClock className="w-4 h-4" /> Book Consultation
            </button>
            <button
              onClick={() => setActiveTab('portal')}
              className={`flex-1 min-w-[140px] px-6 py-4 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-all cursor-pointer whitespace-nowrap relative ${
                activeTab === 'portal'
                  ? 'border-brand-gold text-brand-black bg-brand-gold-light/20 font-extrabold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FolderLock className="w-4 h-4" /> User Portal Logs
              {hasAnySubmissions && (
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              )}
            </button>
          </div>

          <div className="p-6 sm:p-10">
            
            {/* 1. HIRE TALENT PANEL */}
            {activeTab === 'hire' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="text-left border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-display font-bold text-slate-900">
                    Find the support your business needs.
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Complete our intake form. We will match you with pre-trained virtual professionals within our academy.
                  </p>
                </div>

                {hireSuccess ? (
                  <div className="p-10 text-center space-y-4 bg-white rounded-xl border border-slate-100 shadow-sm animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Inquiry Logged Securely!</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Thanks, {hireClientName}. Your credentials and service request for <strong>{hireCompanyName}</strong> were cataloged under the User Portal Logs. Directing you to status trackers...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleHireSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-blue-500" /> Full Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your Professional Name"
                          value={hireClientName}
                          onChange={(e) => setHireClientName(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-blue-500" /> Company / Organization Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="My Destiny Agency LLC"
                          value={hireCompanyName}
                          onChange={(e) => setHireCompanyName(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-blue-500" /> Professional Email Address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="partner@yourdomain.com"
                          value={hireEmail}
                          onChange={(e) => setHireEmail(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <Smartphone className="w-3.5 h-3.5 text-blue-500" /> Contact Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 012-3456"
                          value={hirePhone}
                          onChange={(e) => setHirePhone(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="text-left space-y-2">
                        <label className="text-xs font-semibold text-slate-600 block">
                          Industry Classification
                        </label>
                        <select
                          value={hireIndustry}
                          onChange={(e) => setHireIndustry(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-blue-600 focus:ring-1"
                        >
                          <option value="Financial Services">Financial Services</option>
                          <option value="Insurance">Insurance</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Transportation & Logistics">Transportation & Logistics</option>
                          <option value="Coaching & Consulting">Coaching & Consulting</option>
                          <option value="Healthcare Support">Healthcare Support</option>
                          <option value="Churches & Ministries">Churches & Ministries</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="Small Businesses">Small Businesses</option>
                          <option value="Entrepreneurs">Entrepreneurs</option>
                        </select>
                      </div>

                      <div className="text-left space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                            <Sliders className="w-4 h-4 text-emerald-500" /> Support Volume Required
                          </label>
                          <span className="text-xs font-mono font-bold text-slate-700">{hireHours} hrs/week</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="40"
                          step="5"
                          value={hireHours}
                          onChange={(e) => setHireHours(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg accent-blue-600 cursor-pointer mt-1"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                          <span>10hr (Fractional)</span>
                          <span>20hr (Part-time)</span>
                          <span>30hr (Standard)</span>
                          <span>40hr (Full-time)</span>
                        </div>
                      </div>
                    </div>

                    {/* Roles Multi Selection Checklist */}
                    <div className="text-left space-y-3.5">
                      <span className="text-xs font-semibold text-slate-600 block">
                        Select Specialized Talent Role Profiles Needed
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {roleOptions.map((role) => {
                          const isSelected = hireRoles.includes(role);
                          return (
                            <button
                              type="button"
                              key={role}
                              onClick={() => toggleRole(role)}
                              className={`p-3 rounded-xl text-left border text-[11px] font-semibold transition-all flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-brand-gold-light text-brand-gold border-brand-gold/45 ring-1 ring-brand-gold/15 font-bold'
                                  : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span>{role}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-brand-gold" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">
                        Operational Context / Core Project Directives
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us what business operations you hope your Virtual Assistant will assume first."
                        value={hireMessage}
                        onChange={(e) => setHireMessage(e.target.value)}
                        className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 text-slate-705 focus:outline-hidden"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-brand-black hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-lg transition-colors flex items-center gap-2 cursor-pointer border border-brand-gold/30 hover:border-brand-gold"
                      >
                        <Send className="w-3.5 h-3.5 text-brand-gold" /> Submit Match request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* 2. APPLY FOR TRAINING PANEL */}
            {activeTab === 'apply' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="text-left border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-display font-bold text-brand-black">
                    Begin your training and prepare for remote work opportunities.
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in standard applicant credentials to qualify for admittance into the New Destiny Global Workforce Academy.
                  </p>
                </div>

                {stdSuccess ? (
                  <div className="p-10 text-center space-y-4 bg-white rounded-xl border border-slate-100 shadow-sm animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Intake Application Filed!</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Dear {stdName}, your applicant catalog profile was verified and passed to the academic desk. Check updates below inside the user submissions log feed.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-brand-blue" /> Full Student Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Enter your registered name"
                          value={stdName}
                          onChange={(e) => setStdName(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        />
                      </div>

                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-brand-blue" /> Email for Syllabus Delivery
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="your.address@gmail.com"
                          value={stdEmail}
                          onChange={(e) => setStdEmail(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        />
                      </div>

                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <Smartphone className="w-3.5 h-3.5 text-brand-blue" /> Mobile / Chat Contact Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+233 or +1 345 - ... "
                          value={stdPhone}
                          onChange={(e) => setStdPhone(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                      <div className="text-left space-y-2">
                        <label className="text-xs font-semibold text-slate-600 block">
                          Core Target Goal Category
                        </label>
                        <select
                          value={stdGoal}
                          onChange={(e) => setStdGoal(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        >
                          <option value="Remote Career Transition">Remote Career Transition</option>
                          <option value="Supplemental Direct Income">Supplemental Direct Income</option>
                          <option value="Corporate Professional Development">Corporate Professional Development</option>
                          <option value="Basic Skills Mastery">Basic Skills Mastery</option>
                        </select>
                      </div>

                      <div className="text-left space-y-2">
                        <label className="text-xs font-semibold text-slate-600 block">
                          Syllabus Track Choice
                        </label>
                        <select
                          value={stdCourse}
                          onChange={(e) => setStdCourse(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        >
                          <option value="Professional Communication Track">Professional Communication Track</option>
                          <option value="Specialized Virtual Assistant Track">Specialized Virtual Assistant Track</option>
                          <option value="CRM, Database, and Lead Generation Track">CRM, Database, and Lead Generation Track</option>
                          <option value="Outbound Appointment Setter Track">Outbound Appointment Setter Track</option>
                        </select>
                      </div>

                      <div className="text-left space-y-2">
                        <label className="text-xs font-semibold text-slate-600 block">
                          Tech Workstation Setup
                        </label>
                        <select
                          value={stdRig}
                          onChange={(e) => setStdRig(e.target.value as any)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        >
                          <option value="Basic Laptop">Basic Dual-Core Laptop</option>
                          <option value="Standard PC">Standard Desktop PC & Headset</option>
                          <option value="High Performance">High Performance Workstation with Ups Backup</option>
                        </select>
                      </div>
                    </div>

                    {/* Pre skills selection */}
                    <div className="text-left space-y-2">
                      <span className="text-xs font-semibold text-slate-600 block">
                        Describe Your Extant Technical Foundations (Select any held)
                      </span>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                        {studentSkillOptions.map((sk) => {
                          const isSel = stdSkills.includes(sk);
                          return (
                            <button
                              type="button"
                              key={sk}
                              onClick={() => toggleStudentSkill(sk)}
                              className={`p-3 rounded-lg text-left border text-[11px] font-semibold transition-all flex items-center justify-between cursor-pointer ${
                                isSel
                                  ? 'bg-brand-gold-light text-brand-gold-dark border-brand-gold/40 font-bold'
                                  : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              <span>{sk}</span>
                              {isSel && <Check className="w-3.5 h-3.5 text-brand-gold" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1 bg-white border border-slate-100 rounded px-2 py-1">
                        <Laptop className="w-4 h-4 text-brand-blue" /> Web-Camera required for live lecture validations!
                      </span>
                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-brand-black hover:bg-slate-900 text-white text-xs font-bold rounded-xl shadow-md transition-colors border border-brand-gold/30 hover:border-brand-gold cursor-pointer"
                      >
                        Validate Admittance File
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* 3. BOOK CONSULTATION WIDGET */}
            {activeTab === 'consult' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="text-left border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-display font-bold text-brand-black">
                    Book a Scoping Consultation Call
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select your preferred consult date, pick an available hourly slot, and confirm instantly.
                  </p>
                </div>

                {consSuccess ? (
                  <div className="p-10 text-center space-y-4 bg-white rounded-xl border border-slate-100 shadow-sm animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Calendar Consultation Locked!</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Done! A scoping calendar ticket was locked for <strong>{consDate}</strong> at <strong>{consSlot}</strong>. Check your receipt inside updates logger!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-brand-blue" /> Your Full Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Robert Stone"
                          value={consName}
                          onChange={(e) => setConsName(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        />
                      </div>

                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-brand-blue" /> Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Corporate LLC"
                          value={consCompany}
                          onChange={(e) => setConsCompany(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        />
                      </div>

                      <div className="text-left space-y-1.5">
                        <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-brand-blue" /> Professional Email
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="lead@agency.com"
                          value={consEmail}
                          onChange={(e) => setConsEmail(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                      
                      {/* Left: Select Subject */}
                      <div className="md:col-span-4 text-left space-y-3">
                        <label className="text-xs font-semibold text-slate-600 block">
                          Scoping Scope Choice
                        </label>
                        <select
                          value={consType}
                          onChange={(e) => setConsType(e.target.value)}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:outline-hidden"
                        >
                          <option value="Executive Support alignment">Executive Support Alignment</option>
                          <option value="BPO Call Center scale blueprint">BPO Call Center Blueprint</option>
                          <option value="Appointment Setting Outbound Pipeline Review">Appointment Setting Review</option>
                          <option value="General delegation audit">General Delegation Audit</option>
                        </select>

                        <div className="space-y-1.5 pt-1">
                          <label className="text-xs font-semibold text-slate-600 block">
                            Choose Target Consultation Date
                          </label>
                          <input
                            type="date"
                            min="2026-06-18"
                            max="2026-07-30"
                            value={consDate}
                            onChange={(e) => setConsDate(e.target.value)}
                            className="w-full text-xs p-3 bg-white border border-slate-200 rounded-xl focus:border-brand-gold focus:ring-1 focus:outline-hidden"
                          />
                        </div>
                      </div>

                      {/* Right: Select Available Hours Slots */}
                      <div className="md:col-span-8 text-left space-y-3">
                        <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                          <Clock className="w-4 h-4 text-brand-blue" /> Available Hourly Time-Slots (UTC-5 / EST Standard)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {availableSlots.map((slot) => {
                            const isChosen = consSlot === slot;
                            return (
                              <button
                                type="button"
                                key={slot}
                                onClick={() => setConsSlot(slot)}
                                className={`p-4 rounded-xl text-center border text-xs font-semibold transition-all cursor-pointer ${
                                  isChosen
                                    ? 'bg-brand-gold text-brand-black border-brand-gold shadow-md font-extrabold'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                        <p className="text-[10px] text-slate-400 italic">
                          Meetings are generated instantly with a Zoom/Google Meet video attachment link included on booking. We allow 30 minutes.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-slate-100">
                      <button
                        type="submit"
                        disabled={!consSlot}
                        className={`px-8 py-3.5 text-xs font-extrabold rounded-xl transition-all shadow-md cursor-pointer ${
                          consSlot 
                            ? 'bg-brand-black hover:bg-slate-900 border border-brand-gold/30 hover:border-brand-gold text-white'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        Confirm Consult Slot
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* 4. USER PORTAL LOGS (LIVE RECEIPT BOARD) */}
            {activeTab === 'portal' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="text-left border-b border-slate-200 pb-4">
                  <h3 className="text-xl font-display font-bold text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-emerald-500" /> 
                    Live Client Portal Workspace Logs
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Verify credentials, review active applications, scheduled appointments, and corporate staffing tickets saved securely within your sandbox.
                  </p>
                </div>

                {!hasAnySubmissions ? (
                  <div className="text-center py-16 space-y-4 bg-white rounded-xl border border-dashed border-slate-200">
                    <ClipboardCheck className="w-12 h-12 text-slate-300 mx-auto" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700">No Submissions Recorded Yet</h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                        Inquiries, academy application filings, or Zoom consultation schedule locks will appear dynamically here upon submission.
                      </p>
                    </div>
                    <div className="flex justify-center gap-2 pt-2">
                      <button
                        onClick={() => setActiveTab('hire')}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg cursor-pointer"
                      >
                        Hire Talent Intake
                      </button>
                      <button
                        onClick={() => setActiveTab('consult')}
                        className="px-4 py-2 bg-brand-black hover:bg-slate-900 border border-brand-gold/30 hover:border-brand-gold text-brand-gold font-bold text-xs rounded-lg cursor-pointer shadow-sm"
                      >
                        Book Scoping Slot
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    
                    {/* Active business inquiries */}
                    {inquiries.length > 0 && (
                      <div className="space-y-3">
                        <span className="text-xs uppercase font-mono tracking-wider font-bold text-brand-gold block text-left">
                          Active Business Staffing Requests ({inquiries.length})
                        </span>
                        
                        <div className="space-y-3 text-left">
                          {inquiries.map((inq) => (
                            <div key={inq.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row justify-between items-start gap-4">
                              <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-slate-900">{inq.companyName}</span>
                                  <span className="text-[10px] bg-slate-100 text-slate-500 font-mono px-1.5 py-0.5 rounded">
                                    ID: {inq.id}
                                  </span>
                                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-100 animate-pulse">
                                    {inq.status}
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500">
                                  Contact Person: <strong>{inq.clientName}</strong> &bull; {inq.email} &bull; {inq.phone}
                                </p>
                                <p className="text-xs text-slate-600 leading-relaxed pt-1 font-mono">
                                  Roles Sought: <strong>{inq.requiredRoles.join(', ')}</strong> ({inq.hoursPerWeek} hrs/week focus)
                                </p>
                                {inq.message && (
                                  <p className="text-xs text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                                    &ldquo;{inq.message}&rdquo;
                                  </p>
                                )}
                              </div>
                              <button
                                onClick={() => deleteInquiry(inq.id)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg self-end sm:self-start transition-colors cursor-pointer"
                                title="Remove Inquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Active Student Academy Applications */}
                    {applications.length > 0 && (
                      <div className="space-y-3">
                        <span className="text-xs uppercase font-mono tracking-wider font-bold text-brand-gold block text-left">
                          Academy Student Application Submissions ({applications.length})
                        </span>
                        
                        <div className="space-y-3 text-left">
                          {applications.map((app) => (
                            <div key={app.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col sm:flex-row justify-between items-start gap-4">
                              <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-slate-900">{app.studentName}</span>
                                  <span className="text-[10px] bg-slate-100 text-slate-500 font-mono px-1.5 py-0.5 rounded">
                                    ID: {app.id}
                                  </span>
                                  <span className="text-[10px] bg-brand-gold-light text-brand-gold-dark font-bold px-2 py-0.5 rounded-full border border-brand-gold/15">
                                    Verified Academy Intake
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500">
                                  Intake Contact: &bull; {app.email} &bull; {app.phone}
                                </p>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  Track Choice: <strong>{app.preferredCourse}</strong> &bull; Goal: <strong>{app.academicGoal}</strong>
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1 text-[10px]">
                                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                                    Setup: {app.computerPower}
                                  </span>
                                  {app.technicalSkills.map((sk) => (
                                    <span key={sk} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                      {sk}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <button
                                onClick={() => deleteApplication(app.id)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-550 rounded-lg self-end sm:self-start transition-colors cursor-pointer"
                                title="Remove Application"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Active Scheduled Consultations */}
                    {consultations.length > 0 && (
                      <div className="space-y-3">
                        <span className="text-xs uppercase font-mono tracking-wider font-bold text-brand-blue block text-left">
                          Confirmed Video Scoping Consultations ({consultations.length})
                        </span>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                          {consultations.map((cons) => (
                            <div key={cons.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex justify-between items-start gap-4">
                              <div className="space-y-1.5">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className="text-xs font-bold text-slate-900">{cons.clientName}</span>
                                  <span className="text-[10px] bg-slate-100 text-slate-400 font-mono px-1">
                                    CNS: {cons.id}
                                  </span>
                                </div>
                                <p className="text-[11px] text-slate-500 font-mono leading-none">
                                  Company: {cons.companyName} &bull; {cons.email}
                                </p>
                                
                                <div className="bg-brand-gold-light/40 rounded-lg p-2.5 border border-brand-gold/15 mt-2 space-y-1">
                                  <div className="flex items-center gap-1.5 text-xs text-brand-black font-semibold font-mono">
                                    <Calendar className="w-3.5 h-3.5 text-brand-blue" /> {cons.date}
                                  </div>
                                  <div className="flex items-center gap-1.5 text-xs text-brand-black font-semibold font-mono">
                                    <Clock className="w-3.5 h-3.5 text-brand-blue" /> {cons.timeSlot}
                                  </div>
                                  <div className="text-[10px] text-slate-550 pt-0.5 leading-tight">
                                    Goal: <strong>{cons.consultationType}</strong>
                                  </div>
                                </div>

                                <div className="pt-2 text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                                  <Sparkles className="w-3.5 h-3.5" /> Zoom links cataloged securely in registered inbox.
                                </div>
                              </div>
                              <button
                                onClick={() => deleteConsultation(cons.id)}
                                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-550 rounded-lg transition-colors cursor-pointer"
                                title="Remove Consultation"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
