import { ArrowRight, Sparkles, Cpu, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden pt-24 pb-16"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-red-900/20 blur-[130px] pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(204,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center space-x-2 bg-zinc-800/80 border border-red-900/50 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-accent backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>AI-Powered Business Growth</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              AI Automation &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">
                Digital Transformation
              </span>
              <br />Solutions
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-400 max-w-xl leading-relaxed"
            >
              We help businesses automate workflows, generate leads, improve efficiency, and scale faster with customized, cutting-edge AI-powered solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-red-900/30 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-2 bg-zinc-800/60 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/65 font-semibold px-8 py-4 rounded-full cursor-pointer"
              >
                <span>Explore Services</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Animated Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-[450px] lg:h-[500px]">
            {/* Glow center */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-accent/20 to-red-900/20 blur-2xl animate-red-glow" />

            {/* Circuit SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative w-80 h-80 z-10"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-700 opacity-50">
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.25" />
                <path d="M 50,10 L 50,90 M 10,50 L 90,50" stroke="currentColor" strokeWidth="0.25" />
                <path d="M 22,22 L 78,78 M 22,78 L 78,22" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
              </svg>

              {/* Spinning rings — brand red */}
              <div className="absolute inset-4 rounded-full border border-accent/40 border-t-transparent animate-spin" style={{ animationDuration: '6s' }} />
              <div className="absolute inset-10 rounded-full border border-dashed border-red-700/50 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />

              {/* Center icon */}
              <div className="absolute inset-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-2xl">
                <Cpu className="w-12 h-12 text-accent" />
              </div>
            </motion.div>

            {/* Floating card 1 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-6 left-2 sm:-left-4 z-20 flex items-center space-x-3 bg-zinc-900/90 border border-zinc-700/50 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float-slow"
            >
              <div className="p-2 rounded-lg bg-accent/20 text-accent">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">100+</p>
                <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Projects</p>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-6 right-2 sm:-right-4 z-20 flex items-center space-x-3 bg-zinc-900/90 border border-zinc-700/50 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float-medium"
            >
              <div className="p-2 rounded-lg bg-accent/20 text-accent">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white leading-none">95%</p>
                <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Satisfaction</p>
              </div>
            </motion.div>

            {/* Floating card 3 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-12 left-6 sm:left-12 z-20 flex items-center space-x-3 bg-zinc-900/90 border border-zinc-700/50 backdrop-blur-md rounded-2xl p-4 shadow-xl animate-float-fast"
            >
              <div className="p-2 rounded-lg bg-red-900/30 text-accent">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">AI-Powered</p>
                <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider">Solutions</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
