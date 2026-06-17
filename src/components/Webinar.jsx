import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle2, Sparkles, Gift, FileText, Video, ChevronDown, User, Mail, Phone, Building2, CheckCircle } from 'lucide-react';


export default function Webinar() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 4, minutes: 32, seconds: 15 });
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Registration States
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Mobile number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    return newErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Mock API post for Sheet integration - ready for Webhook URL replacement
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const modules = [
    {
      num: "01",
      title: "The AI-First Operations Framework",
      desc: "Audit your repetitive office tasks and map which workflows can be automated with cognitive models."
    },
    {
      num: "02",
      title: "Custom GPT & Knowledge Base Dev",
      desc: "Train custom LLM engines on your internal business documents, guidelines, and CRM logs securely."
    },
    {
      num: "03",
      title: "Automated Lead Gen & Outbound",
      desc: "Extract prospects, run cold outreach campaigns, and qualify leads automatically 24/7 without manual labor."
    },
    {
      num: "04",
      title: "WhatsApp API & Bot Automation",
      desc: "Connect the official WhatsApp business API to build self-learning response pathways that save support hours."
    }
  ];

  const bonuses = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: "AI Automation Playbook (PDF)",
      desc: "A step-by-step PDF detailing 15 ready-to-use business prompt matrices and workflows."
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Integration Blueprint Template",
      desc: "A customizable diagnostic template mapping out API structures and webhook setups."
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Live Q&A Workshop Access",
      desc: "15 minutes of live interactive audit where our engineers debug attendee automation queries."
    }
  ];

  const faqs = [
    {
      question: "Who is this webinar for?",
      answer: "This session is designed for business owners, agency heads, operations directors, and entrepreneurs who want to eliminate manual administrative bottlenecks and scale their client acquisition using custom AI integrations."
    },
    {
      question: "Will there be a live recording or replay?",
      answer: "Yes, a full high-definition recording of the masterclass, including all slides and custom link sheets, will be emailed to all registered participants within 24 hours of the webinar completion."
    },
    {
      question: "Is it really free? What's the catch?",
      answer: "It is 100% free of charge. Our goal is to provide extreme upfront value by demonstrating exactly how these AI stacks work. At the very end, we briefly show how AIXPRT can build these systems for you, but there is zero obligation to purchase anything."
    }
  ];

  return (
    <section id="webinar" className="py-24 bg-gradient-to-br from-white via-slate-50 to-white bg-circuits overflow-hidden relative border-t border-b border-slate-100">
      {/* Decorative radial lighting overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-50 border border-accent/10 rounded-full px-4 py-1 text-xs font-bold text-accent">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
            <span>EXCLUSIVELY FOR BUSINESS LEADERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            AIpreneur Webinar Masterclass
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
            Discover how to configure advanced prompt stacks, sync databases automatically, and leverage customized AI workflows to double productivity and reduce operational overhead.
          </p>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Premium Ticket Pass Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center mx-auto lg:mx-0 w-full"
          >
            {/* Holographic style ticket card */}
            <div className="w-full max-w-sm bg-slate-950 text-white rounded-3xl p-6 shadow-2xl border border-slate-800/60 relative overflow-hidden flex flex-col justify-between h-[480px]">
              
              {/* Ticket Top */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-extrabold tracking-widest text-accent uppercase">AIpreneur Ticket</span>
                  <span className="text-[10px] text-slate-500 bg-slate-900 px-2.5 py-1 rounded-full font-bold border border-slate-800">
                    ADMIT ONE
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">AI Automation Masterclass</h3>
                <p className="text-xs text-slate-400">Speaker: AIXPRT Lead Solutions Architect</p>
                
                <div className="mt-8 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-300">
                    <Calendar className="w-4 h-4 text-accent shrink-0" />
                    <span>Every Saturday (Weekly Session)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-accent shrink-0" />
                    <span>4:00 PM IST (10:30 AM GMT)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold text-[10px] border border-emerald-500/20">
                      PRICE: FREE
                    </span>
                    <span className="text-[10px] text-slate-500">Pre-Registration Required</span>
                  </div>
                </div>
              </div>

              {/* Countdown Timer Graphic in Ticket */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 my-4 text-center">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Masterclass Starts In</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hrs", value: timeLeft.hours },
                    { label: "Mins", value: timeLeft.minutes },
                    { label: "Secs", value: timeLeft.seconds }
                  ].map((unit) => (
                    <div key={unit.label} className="bg-slate-950/80 rounded-lg p-1.5 border border-slate-800/40">
                      <div className="text-base font-extrabold text-white">{formatTime(unit.value)}</div>
                      <div className="text-[8px] text-slate-500 font-bold uppercase">{unit.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ticket Footer (Barcode graphic) */}
              <div className="border-t border-dashed border-slate-800 pt-4 mt-auto">
                <div className="flex items-center justify-between">
                  {/* Visual Barcode pattern */}
                  <div className="flex items-end space-x-0.5 h-8 opacity-75">
                    {[1, 2, 4, 1, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 4, 2, 1, 2].map((w, i) => (
                      <div
                        key={i}
                        className="bg-white"
                        style={{ width: `${w}px`, height: '100%' }}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-slate-600">#AIPRENEUR-2026</span>
                </div>
              </div>

              {/* Glowing ticket notched circles (edges) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 bg-slate-50 border-r border-slate-800 rounded-full z-20" />
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 bg-slate-50 border-l border-slate-800 rounded-full z-20" />
            </div>
          </motion.div>

          {/* Right Column: Key Modules and Action Form / Success Display */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
            className="lg:col-span-7 space-y-8 text-left w-full"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                // SUCCESS SCREEN - Visual Ticket Pass
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 rounded-3xl bg-emerald-50/40 border-2 border-emerald-500/30 flex flex-col items-center text-center space-y-6 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900">Registration Confirmed!</h3>
                    <p className="text-xs text-slate-500">Your visual entry ticket pass has been generated below.</p>
                  </div>

                  {/* Confirmed Entry pass card */}
                  <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 w-full max-w-sm shadow-xl flex items-center justify-between text-left space-x-6 relative">
                    <div className="space-y-3">
                      <div>
                        <div className="text-[9px] text-slate-500 uppercase tracking-widest font-extrabold">Attendee</div>
                        <div className="text-sm font-bold text-white truncate max-w-[180px]">{formData.name}</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-slate-500 uppercase tracking-widest font-extrabold">Webinar Seat ID</div>
                        <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded w-fit">
                          #AP-{Math.floor(1000 + Math.random() * 9000)}
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">Link sent to: {formData.email}</div>
                    </div>
                    
                    {/* Simulated QR Code vector */}
                    <div className="p-2 bg-white rounded-xl shrink-0 shadow-lg border border-slate-200">
                      <svg width="60" height="60" viewBox="0 0 60 60" className="text-slate-950">
                        {/* QR Grid paths */}
                        <path d="M0,0 h16 v16 h-16 z M4,4 h8 v8 h-8 z M0,44 h16 v16 h-16 z M4,48 h8 v8 h-8 z M44,0 h16 v16 h-16 z M48,4 h8 v8 h-8 z" fill="currentColor" />
                        <path d="M22,2 h4 v4 h-4 z M28,6 h6 v4 h-6 z M22,12 h6 v4 h-6 z M44,22 h4 v4 h-4 z M50,26 h6 v6 h-6 z M32,32 h6 v6 h-6 z M22,28 h4 v4 h-4 z" fill="currentColor" />
                        <path d="M0,22 h6 v6 h-6 z M12,28 h4 v4 h-4 z M6,34 h6 v6 h-6 z M22,44 h6 v4 h-6 z M34,48 h4 v6 h-4 z M48,44 h6 v6 h-6 z M52,52 h4 v4 h-4 z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                    Check your email inbox for login instructions and calendar invites. Please add <strong>info@aixprt.in</strong> to your whitelist.
                  </p>
                </motion.div>
              ) : isRegistering ? (
                // DEDICATED REGISTRATION FORM
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleRegister}
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-5 text-left w-full relative"
                >
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">Book Your Webinar Seat</h3>
                      <p className="text-xs text-slate-500">Submit your details to receive live access credentials</p>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => setIsRegistering(false)} 
                      className="text-xs font-semibold text-slate-500 hover:text-accent cursor-pointer"
                    >
                      ← Back
                    </button>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
                        />
                      </div>
                      {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Business Email *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
                        />
                      </div>
                      {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Mobile Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all ${errors.phone ? 'border-red-400' : 'border-slate-200'}`}
                        />
                      </div>
                      {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Company / Organization</label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Name"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-bold py-3.5 rounded-xl cursor-pointer disabled:opacity-50 transition-all text-xs sm:text-sm shadow-md shadow-accent/20"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Confirming Seat...</span>
                      </>
                    ) : (
                      <span>Submit Registration</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                // MODULES OVERVIEW LIST
                <motion.div
                  key="modules"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 w-full"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">What You Will Learn</h3>
                    <p className="text-xs text-slate-400">Detailed overview of our modular webinar curriculum</p>
                  </div>

                  {/* Modules list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {modules.map((mod) => (
                      <div key={mod.num} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        {/* Subtle top left indicator number */}
                        <div className="absolute top-4 right-4 text-xs font-extrabold text-slate-200 group-hover:text-accent/20 transition-colors">
                          {mod.num}
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="p-1 rounded-md bg-rose-50 text-accent">
                              <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <h4 className="font-extrabold text-slate-900 text-sm">{mod.title}</h4>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{mod.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Registration Action Form/Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => setIsRegistering(true)}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/25 cursor-pointer text-center text-sm transition-colors"
                    >
                      <span>Reserve Free Seat</span>
                    </button>
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent animate-pulse" />
                      Only 15 seats left for this week's live cohort.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Attendance Bonuses / Inclusions block */}
        <div className="border-t border-slate-200 pt-16 mb-20 text-left">
          <div className="max-w-2xl mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Attendance Bonuses Included</h3>
            <p className="text-xs text-slate-500">Every registrant who attends the live session gets immediate access to these files.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bonuses.map((bonus, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-accent shrink-0">
                  {bonus.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{bonus.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Block */}
        <div className="border-t border-slate-200 pt-16 text-left max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">Webinar FAQ</h3>
            <p className="text-xs text-slate-500">Answers to the most common question about the AIpreneur cohort</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
