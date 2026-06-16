import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) { setErrors(formErrors); return; }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1800);
  };

  const inputBase = "w-full px-4 py-3 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 transition-all";
  const inputNormal = `${inputBase} border-zinc-200 focus:ring-accent/30 focus:border-accent`;
  const inputError = `${inputBase} border-red-400 focus:ring-red-400/30 focus:border-red-500`;

  return (
    <div id="contact" className="relative scroll-mt-16">

      {/* 1. CTA Banner */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.15),transparent)] pointer-events-none" />
        {/* Top + bottom red lines */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight text-white"
          >
            Ready to Transform Your Business with AI?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-zinc-300 max-w-xl mx-auto"
          >
            Unlock automation, capture qualified prospects, and future-proof your digital operations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <a href="#contact-form" className="px-8 py-3.5 bg-accent hover:bg-red-700 text-white font-bold rounded-full shadow-lg shadow-red-900/30 transition-colors">
              Book Consultation
            </a>
            <a href="mailto:contact@aixprt.com" className="px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 rounded-full font-semibold transition-colors">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Form Section */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left: Details */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <span className="h-px w-8 bg-accent"></span>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">Get in Touch</span>
                </div>
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">
                  Let&apos;s Build Something Great Together
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Fill out the form to schedule a strategy call. Our engineers will analyze your operations and outline custom automation possibilities.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email Us", sub: "Inquiries & partnerships", value: "contact@aixprt.com", href: "mailto:contact@aixprt.com" },
                  { icon: <Phone className="w-5 h-5" />, label: "Call Us", sub: "Monday – Friday (9 AM – 6 PM)", value: "+91 99999 99999", href: "tel:+919999999999" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Visit Office", sub: "102 Innovation Hub, Tech City, Karnataka 560001, India", value: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start space-x-4 p-5 rounded-2xl bg-section-bg border border-zinc-100">
                    <div className="p-3 bg-white border border-zinc-200 rounded-xl text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-sm">{item.label}</h3>
                      <p className="text-xs text-zinc-400 mt-1">{item.sub}</p>
                      {item.value && (
                        <a href={item.href} className="text-sm font-semibold text-accent hover:text-red-700 mt-1 block">
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-section-bg border border-zinc-200 shadow-sm">
                <AnimatePresence mode="wait">
                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 text-green-500">
                        <CheckCircle className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-primary">Consultation Scheduled!</h3>
                      <p className="text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. An AI solutions consultant will get in touch within 24 hours.
                      </p>
                      <button onClick={() => setSubmitStatus(null)} className="px-6 py-2 bg-primary text-white text-xs font-semibold rounded-full hover:bg-zinc-800">
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 text-left"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">Name <span className="text-red-500">*</span></label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className={errors.name ? inputError : inputNormal} />
                          {errors.name && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">Email <span className="text-red-500">*</span></label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@company.com" className={errors.email ? inputError : inputNormal} />
                          {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">Phone</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" className={inputNormal} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">Company</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="ACME Corp" className={inputNormal} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">Message <span className="text-red-500">*</span></label>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your automation or software needs..." className={errors.message ? inputError : inputNormal} />
                        {errors.message && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center space-x-2 bg-accent hover:bg-red-700 text-white font-bold px-6 py-4 rounded-xl cursor-pointer disabled:opacity-50 transition-all text-sm shadow-lg shadow-red-900/20">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Scheduling Consultation...</span>
                          </>
                        ) : (
                          <><span>Submit Request</span><Send className="w-4 h-4" /></>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
