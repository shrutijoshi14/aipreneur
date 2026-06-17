import { Sparkles, Cpu, Award, Users, Database, TrendingUp, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 bg-circuits overflow-hidden pt-28 pb-20"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-accent/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-slate-300/20 blur-[130px] pointer-events-none" />

      {/* Decorative subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 text-left space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center space-x-2 bg-slate-100/90 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-accent backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span>AI-Powered Business Growth</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              AI Automation &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-rose-400">
                Digital Transformation
              </span>
              <br />Solutions
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              We help businesses automate complex workflows, generate qualified leads, integrate intelligent CRM platforms, and scale faster with custom AI-powered software systems.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-accent/25 cursor-pointer transition-colors animate-float-fast"
              >
                <span>Get Free Consultation</span>
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold px-8 py-4 rounded-full cursor-pointer shadow-sm transition-colors"
              >
                <span>Explore Services</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Exact Graphic Style Conversion (Robot holding Holographic Earnings Screen) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex items-center justify-center h-[520px] w-full"
          >
            {/* 1. Backdrop Circuit Paths Layer (glowing circuit traces behind the robot) */}
            <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
              <svg className="w-full h-full text-slate-300" viewBox="0 0 400 400" fill="none">
                <path d="M 50,150 L 120,150 L 150,180 L 150,250 M 80,100 L 140,100 L 170,130 L 170,300 M 350,120 L 280,120 L 250,90 L 250,50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 320,300 L 260,300 L 220,260 L 220,150" stroke="currentColor" strokeWidth="1" />
                <circle cx="150" cy="250" r="3" fill="#E11D48" className="animate-ping" />
                <circle cx="170" cy="300" r="3" fill="#E11D48" />
                <circle cx="250" cy="50" r="3" fill="#E11D48" />
              </svg>
            </div>

            {/* 2. Sleek Vector Humanoid Robot (torso + head) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 select-none pointer-events-none">
              <svg viewBox="0 0 320 400" className="w-[340px] h-[420px] drop-shadow-2xl">
                {/* Robot Neck */}
                <rect x="145" y="150" width="30" height="25" rx="5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
                <line x1="145" y1="160" x2="175" y2="160" stroke="#64748b" strokeWidth="1.5" />
                <line x1="145" y1="168" x2="175" y2="168" stroke="#64748b" strokeWidth="1.5" />

                {/* Torso / Shoulders */}
                <path d="M 90,180 L 230,180 C 240,195 245,215 240,240 L 230,350 L 90,350 L 80,240 C 75,215 80,195 90,180 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                {/* Chest Accent plate */}
                <path d="M 110,200 L 210,200 L 200,285 L 120,285 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                {/* Chest Stats line bar */}
                <line x1="130" y1="220" x2="190" y2="220" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
                <rect x="130" y="235" width="60" height="6" rx="3" fill="#334155" />
                <circle cx="135" cy="255" r="3" fill="#0ea5e9" />
                <circle cx="150" cy="255" r="3" fill="#10b981" />
                <circle cx="165" cy="255" r="3" fill="#e11d48" />

                {/* Shoulder Joints */}
                <circle cx="80" cy="195" r="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
                <circle cx="240" cy="195" r="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />

                {/* Arms extending forward to hold screen */}
                <path d="M 70,205 Q 40,260 75,290 L 100,290" fill="none" stroke="#f8fafc" strokeWidth="16" strokeLinecap="round" />
                <path d="M 70,205 Q 40,260 75,290 L 100,290" fill="none" stroke="#cbd5e1" strokeWidth="18" strokeLinecap="round" className="opacity-25" />
                
                <path d="M 250,205 Q 280,260 245,290 L 220,290" fill="none" stroke="#f8fafc" strokeWidth="16" strokeLinecap="round" />
                <path d="M 250,205 Q 280,260 245,290 L 220,290" fill="none" stroke="#cbd5e1" strokeWidth="18" strokeLinecap="round" className="opacity-25" />

                {/* Hands/Claws holding screen */}
                <path d="M 98,280 C 105,280 110,290 102,298 C 95,302 90,292 98,280 Z" fill="#64748b" />
                <path d="M 222,280 C 215,280 210,290 218,298 C 225,302 230,292 222,280 Z" fill="#64748b" />

                {/* Robot Head / Helmet */}
                <circle cx="160" cy="100" r="50" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                {/* Visor Panel */}
                <path d="M 120,90 C 120,70 200,70 200,90 C 200,110 120,110 120,90 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1.5" />
                
                {/* Glowing cyan eyes (Blinking animation) */}
                <ellipse cx="145" cy="90" rx="6" ry="4" fill="#0ea5e9" className="animate-pulse" />
                <ellipse cx="175" cy="90" rx="6" ry="4" fill="#0ea5e9" className="animate-pulse" />
                <ellipse cx="145" cy="90" rx="2" ry="1" fill="#fff" />
                <ellipse cx="175" cy="90" rx="2" ry="1" fill="#fff" />

                {/* Ear caps */}
                <rect x="105" y="85" width="7" height="30" rx="3" fill="#cbd5e1" />
                <rect x="208" y="85" width="7" height="30" rx="3" fill="#cbd5e1" />
              </svg>
            </div>

            {/* 3. Floating Holographic Screen (Exact Style Matching Image) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute z-20 w-72 bg-sky-500/10 border border-sky-400/35 backdrop-blur-md rounded-2xl p-5 shadow-[0_0_25px_rgba(56,189,248,0.25)] flex flex-col justify-between text-left select-none"
              style={{ top: '190px' }}
            >
              {/* Screen Header */}
              <div className="flex items-center justify-between pb-3 border-b border-sky-400/20 mb-3">
                <span className="text-[10px] font-bold text-sky-300 uppercase tracking-widest">Earnings: ₹1 Lacs</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              </div>

              {/* Earnings Line Chart */}
              <div className="h-20 relative flex items-end mb-2">
                <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  {/* Glowing gradient path */}
                  <defs>
                    <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,45 Q20,35 40,25 T80,8 T100,2 L100,40 Z" fill="url(#glowGrad)" />
                  <motion.path
                    d="M0,40 Q20,35 40,25 T80,8 T100,2"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                {/* Floating Node marker */}
                <div className="absolute right-0.5 top-[2%] w-2 h-2 bg-white rounded-full shadow-[0_0_8px_#38bdf8]" />
              </div>

              {/* Stat footer */}
              <div className="flex justify-between items-center text-[10px] text-sky-200">
                <span>AI Core optimization</span>
                <span className="font-bold text-sky-400">+312% Growth</span>
              </div>
            </motion.div>

            {/* 4. Floating Cash / Currency symbols (Matching Cash stack in image) */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute z-30 right-14 top-28 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl px-3 py-2 text-xs font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm"
            >
              <span>💵</span>
              <span>₹ Cash Stacked</span>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5], rotate: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              className="absolute z-30 left-12 top-48 bg-slate-900/80 text-white border border-slate-700/50 rounded-xl px-3 py-1.5 text-[10px] shadow-lg flex items-center gap-1 backdrop-blur-sm"
            >
              <span>📈</span>
              <span>Revenue Sync</span>
            </motion.div>

            {/* Faint sparkles/stars around the robot (from the image) */}
            <div className="absolute top-16 right-20 text-slate-300 opacity-60 animate-pulse text-lg select-none">✦</div>
            <div className="absolute bottom-24 left-16 text-slate-300 opacity-40 animate-pulse text-sm select-none">✦</div>
            <div className="absolute top-1/2 left-8 text-slate-300 opacity-50 animate-pulse text-xl select-none">✦</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
