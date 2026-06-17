/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, Check, DollarSign, ShieldCheck, Zap, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CostCalculator() {
  const [workersCount, setWorkersCount] = useState<number>(1);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(30);
  const [usHourlyRate, setUsHourlyRate] = useState<number>(32);

  // New Destiny's flat rate for fully-trained, managed virtual assistant
  const ndHourlyRate = 14; 

  // US fully loaded rate includes payroll taxes, healthcare, equipment, benefits (approx 1.3x base rate)
  const usLoadedHourlyRate = Math.round(usHourlyRate * 1.3);

  // Calculate annual/monthly values
  const hoursPerMonth = hoursPerWeek * 4.33 * workersCount;
  const usMonthlyCost = Math.round(hoursPerMonth * usLoadedHourlyRate);
  const ndMonthlyCost = Math.round(hoursPerMonth * ndHourlyRate);
  
  const monthlySavings = usMonthlyCost - ndMonthlyCost;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden" id="savings-calculator">
      <div className="bg-brand-black text-white p-6 sm:p-8 border-b border-brand-gold/15">
        <span className="bg-brand-gold-light/20 text-brand-gold font-mono text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-brand-gold/25">
          Interactive ROI Tool
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-semibold mt-3 text-white">
          Calculate Your Staffing Savings
        </h3>
        <p className="text-slate-350 text-sm sm:text-base mt-2">
          Compare the total loaded costs of traditional in-house hiring versus a fully trained New Destiny professional.
        </p>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Hand: Controls & Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-blue" />
                Number of Assistants / Specialists
              </label>
              <span className="text-lg font-bold text-brand-black font-mono">{workersCount} {workersCount === 1 ? 'Specialist' : 'Specialists'}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={workersCount}
              onChange={(e) => setWorkersCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
              <span>1</span>
              <span>3</span>
              <span>5</span>
              <span>8</span>
              <span>10+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700">
                Hours of Support Needed (per week / focus)
              </label>
              <span className="text-lg font-bold text-brand-black font-mono">{hoursPerWeek} Hours</span>
            </div>
            <input
              type="range"
              min="10"
              max="40"
              step="5"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
              <span>10 hr (Part-Time)</span>
              <span>20 hr</span>
              <span>30 hr</span>
              <span>40 hr (Full-Time)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-brand-gold" />
                In-house Base Hourly Wage (US Average)
                <span className="group relative cursor-pointer">
                  <HelpCircle className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600 transition" />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-48 bg-slate-800 text-white text-[10px] p-2 rounded shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition duration-200 z-10">
                    Traditional hiring includes ~30% in hidden taxes, health benefits, equipment setups, and recruiter overhead.
                  </span>
                </span>
              </label>
              <span className="text-lg font-bold text-brand-black font-mono">${usHourlyRate}/hr</span>
            </div>
            <input
              type="range"
              min="18"
              max="60"
              value={usHourlyRate}
              onChange={(e) => setUsHourlyRate(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
              <span>$18/hr</span>
              <span>$30/hr</span>
              <span>$45/hr</span>
              <span>$60/hr</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
            <div className="flex gap-2">
              <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>New Destiny package contains:</strong> Professional training, performance management, dedicated customer success advisor, backup replacement assurance, and robust data protection standard.</span>
            </div>
            <div className="flex gap-2">
              <Check className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span><strong>Fully Loaded US Employee:</strong> Real in-house target incorporates an estimated 30% added overhead (taxes, space, equipment & holidays). Calculated rate used: <strong>${usLoadedHourlyRate}/hr</strong>.</span>
            </div>
          </div>
        </div>

        {/* Right Hand: Interactive ROI Grid */}
        <div className="flex flex-col justify-between bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
          <div className="text-center pb-6 border-b border-slate-200">
            <span className="text-xs uppercase font-mono tracking-widest text-[#1d3557] font-semibold">Your Estimated Savings</span>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-display font-extrabold text-brand-blue font-mono">
                ${monthlySavings.toLocaleString()}
              </span>
              <span className="text-slate-500 text-sm font-sans">/ month</span>
            </div>
            <div className="mt-1 text-sm font-semibold text-brand-gold bg-brand-gold-light border border-brand-gold/15 inline-block px-3 py-1 rounded-full">
              Save ${annualSavings.toLocaleString()} annually
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-6">
            <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm text-center">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Traditional In-House</p>
              <p className="text-lg font-bold text-slate-700 mt-1 font-mono">${usMonthlyCost.toLocaleString()}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono">${usLoadedHourlyRate}/hr loaded</p>
            </div>

            <div className="bg-brand-blue-light/55 rounded-xl p-4 border border-brand-blue/15 text-center">
              <p className="text-xs text-brand-blue font-semibold uppercase tracking-wider">New Destiny</p>
              <p className="text-lg font-bold text-brand-blue-dark mt-1 font-mono">${ndMonthlyCost.toLocaleString()}</p>
              <p className="text-[10px] text-brand-blue mt-0.5 font-mono">${ndHourlyRate}/hr direct</p>
            </div>
          </div>

          <div className="bg-brand-black text-slate-100 rounded-xl p-4 text-xs space-y-2 border border-brand-gold/15">
            <div className="flex justify-between items-center text-brand-gold font-semibold border-b border-slate-800 pb-1.5">
              <span>Why the overhead drops so low?</span>
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
            </div>
            <div className="flex justify-between">
              <span>Federal, State & Payroll Taxes</span>
              <span className="text-emerald-400 font-mono font-bold">100% Eliminated</span>
            </div>
            <div className="flex justify-between">
              <span>Benefits, Health & Retirement Plans</span>
              <span className="text-emerald-400 font-mono font-bold">100% Eliminated</span>
            </div>
            <div className="flex justify-between">
              <span>Workstations, Laptops & Licensing</span>
              <span className="text-emerald-400 font-mono font-bold">Included</span>
            </div>
            <div className="flex justify-between">
              <span>Training, Academy Alignment & Coaching</span>
              <span className="text-emerald-400 font-mono font-bold">Included</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
