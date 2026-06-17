/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  BookOpen, 
  Tv, 
  Award, 
  Sparkles, 
  Search, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Brain
} from 'lucide-react';

interface AcademySectionProps {
  onOpenConsole: (tab: 'apply') => void;
}

export default function AcademySection({ onOpenConsole }: AcademySectionProps) {
  // Mini eligibility quiz state
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);

  const curriculum = [
    { title: 'Professional Communication', desc: 'Active listening, business etiquette, and crisp messaging structure.' },
    { title: 'Business English', desc: 'Terminology, written reports, proper syntax, and corporate style guides.' },
    { title: 'Customer Service', desc: 'Conflict resolution, empathy practice, ticket escalations, and satisfaction loop.' },
    { title: 'Virtual Assistant Skills', desc: 'Calendar sync, workspace tools, standard operational logging.' },
    { title: 'Appointment Setting', desc: 'Outbound pitch structuring, CRM logging, objection bypass frameworks.' },
    { title: 'CRM Systems', desc: 'Sourcing data, managing entries in Salesforce, HubSpot, and Zoho.' },
    { title: 'Administrative Support', desc: 'Document conversions, electronic spreadsheets, filing protocols.' },
    { title: 'Remote Work Best Practices', desc: 'Reliability metrics, active communication channels, secure networks.' },
    { title: 'American Business Culture', desc: 'Holiday expectations, direct conversational styles, timeline accountability.' },
    { title: 'Professional Development', desc: 'Resume enhancement, corporate interview safety, and long-term career growth.' }
  ];

  const questions = [
    {
      q: "A business client sends an urgent email outside your local hours. What is the remote best practice?",
      options: [
        { label: "Wait until your morning shift without saying anything.", score: 0 },
        { label: "Immediately trigger or send a professional acknowledgment email setting expectation for formal resolution within first-hour of shift.", score: 10 },
        { label: "Reply explaining you are off and ask them not to message.", score: 2 }
      ]
    },
    {
      q: "When logging activities in a client's CRM, what is the key standard?",
      options: [
        { label: "Log details only on Friday afternoons at the end of the week.", score: 2 },
        { label: "Only log when you close a sale.", score: 0 },
        { label: "Log clear, objective summary notes immediately after each interaction with date and action markers.", score: 10 }
      ]
    },
    {
      q: "Your home power fluctuates, temporarily dropping your internet connection. What should you do first?",
      options: [
        { label: "Utilize your backup router/mobile hot-spot instantly and alert your supervisor or team lead on a backup chat channel.", score: 10 },
        { label: "Stop working and wait until the company fixes the main power grid.", score: 1 },
        { label: "Pretend nothing happened and make up the hour metrics later.", score: 0 }
      ]
    },
    {
      q: "A customer calls highly frustrated about a late shipping package. How do you respond?",
      options: [
        { label: "Explain shipping is handled by another company and dismiss them.", score: 1 },
        { label: "Empathize naturally, search tracking details immediately, and provide a clear proactive resolution step with timeline.", score: 10 },
        { label: "Pass them to the founder directly to speak with stone-cold authority.", score: 0 }
      ]
    }
  ];

  const handleAnswerSelect = (optLabel: string, optScore: number) => {
    setSelectedAnswer(optLabel);
    setScore(score + optScore);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <section className="py-20 sm:py-24 bg-white" id="academy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block">
              Workforce Incubation & Training
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-black tracking-tight">
              New Destiny Global Academy<br />
              <span className="text-brand-blue font-normal">Train. Learn. Work. Grow.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              The New Destiny Global Workforce Academy prepares individuals for remote employment opportunities through practical training, professional development, and workforce readiness programs.
            </p>

            <div className="bg-slate-50 border-l-4 border-brand-gold p-5 rounded-r-xl">
              <p className="text-sm font-semibold text-slate-800 italic">
                &ldquo;Our goal is simple: Train qualified professionals and connect them with real opportunities.&rdquo;
              </p>
            </div>

            {/* Academy List */}
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Syllabus Curriculum Focus</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {curriculum.map((topic, idx) => (
                <div key={idx} className="flex gap-2.5 items-start bg-slate-50/50 hover:bg-slate-50 p-3.5 rounded-xl border border-slate-100 transition-colors">
                  <span className="w-6 h-6 rounded-lg bg-brand-gold-light border border-brand-gold/35 flex items-center justify-center text-[10px] font-bold text-brand-gold-dark font-mono shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-slate-900 block">{topic.title}</span>
                    <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">{topic.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenConsole('apply')}
                className="px-6 py-3.5 bg-brand-black hover:bg-brand-dark text-brand-gold font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2 border border-brand-gold/25 cursor-pointer"
              >
                <Award className="w-4 h-4 text-brand-gold" /> Apply for Virtual Academy Admittance
              </button>
            </div>
          </div>

          {/* Right Column: Interaction Readiness Sandbox */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-brand-gold" />
                <span className="text-xs uppercase font-mono tracking-wider font-bold text-slate-500">
                  Career Readiness Simulator
                </span>
                <span className="ml-auto bg-brand-gold-light text-brand-gold-dark text-[10px] font-bold px-2 py-0.5 rounded font-mono border border-brand-gold/15">
                  Live Sync
                </span>
              </div>

              {!quizComplete ? (
                <div className="space-y-4">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>Progress {Math.round(((currentQuestion) / questions.length) * 100)}%</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-gold transition-all duration-300" 
                      style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    />
                  </div>

                  <h4 className="text-sm font-semibold text-slate-800 leading-snug">
                    {questions[currentQuestion].q}
                  </h4>

                  <div className="space-y-2 pt-2">
                    {questions[currentQuestion].options.map((opt, oIdx) => {
                      const isOptionSelected = selectedAnswer === opt.label;
                      return (
                        <button
                          key={oIdx}
                          disabled={selectedAnswer !== null}
                          onClick={() => handleAnswerSelect(opt.label, opt.score)}
                          className={`w-full text-left p-3 rounded-xl border text-xs leading-normal transition-all cursor-pointer ${
                            isOptionSelected
                              ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                              : selectedAnswer !== null
                              ? 'bg-white text-slate-400 border-slate-100 opacity-60'
                              : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>

                  {selectedAnswer && (
                    <div className="pt-2 animate-in fade-in slide-in-from-bottom-2">
                      <button
                        onClick={handleNext}
                        className="w-full py-2.5 bg-brand-black hover:bg-brand-dark text-brand-gold text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 border border-brand-gold/20 cursor-pointer"
                      >
                        {currentQuestion === questions.length - 1 ? 'Calculate Score' : 'Next Question'}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4 text-center py-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-brand-gold-light text-brand-gold border border-brand-gold/20 rounded-full flex items-center justify-center mx-auto text-2xl font-extrabold font-mono">
                    {score}/40
                  </div>
                  
                  <div>
                    <h4 className="text-base font-bold text-brand-black mt-2">
                      {score === 40 
                        ? 'Distinguished Elite Candidate' 
                        : score >= 30 
                        ? 'High Competency Ready' 
                        : 'Foundation Core Potential'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                      {score === 40 
                        ? 'Outstanding! You answered with perfect remote corporate ethics. You are a prime match for fast-tracked client placements.' 
                        : score >= 30 
                        ? 'Great potential. You understand core remote norms! Our curriculum will polish CRM systems & cultural coordination quickly.'
                        : 'Welcome to your career start. Our Professional Development and Communication modules are tailored specifically to advance your destiny.'}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col gap-2">
                    <button
                      onClick={() => onOpenConsole('apply')}
                      className="w-full py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                      Apply To Academy With This Score
                    </button>
                    <button
                      onClick={resetQuiz}
                      className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition cursor-pointer"
                    >
                      Retry Assessment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
