import { motion } from 'framer-motion';
import { processSteps } from '../data/services';

export default function Process() {
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="process" className="py-24 bg-section-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-24">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-accent"></span>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Methodology</span>
            <span className="h-px w-8 bg-accent"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            How We Partner With You
          </h2>
          <p className="text-zinc-500 leading-relaxed max-w-xl mx-auto">
            A structured, collaborative approach to delivering high-impact AI integration and software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line — brand red gradient */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-red-700 to-zinc-300 -translate-x-1/2" />
          {/* Mobile left line */}
          <div className="block lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-red-800" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-start lg:items-center ${isEven ? 'lg:flex-row-reverse' : ''} relative`}
                >

                  {/* Main step card */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 flex justify-start lg:justify-end">
                    <motion.div
                      variants={cardVariants}
                      className={`w-full max-w-lg p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm text-left relative overflow-hidden ${isEven ? 'lg:text-left' : 'lg:text-right'}`}
                    >
                      {/* Red top accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-red-400" />

                      <span className="text-5xl font-extrabold text-zinc-100 absolute top-4 right-6 pointer-events-none select-none">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-primary mb-3 relative z-10">
                        {step.title}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-normal relative z-10">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center node badge — red */}
                  <div className="absolute left-0 lg:left-1/2 top-4 lg:top-auto lg:-translate-y-1/2 lg:-translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
                      className="w-16 h-16 rounded-full bg-accent border-4 border-red-800 flex items-center justify-center shadow-lg shadow-red-900/40 text-white text-lg font-bold"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Opposite-side detail card */}
                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 flex justify-start">
                    <motion.div
                      variants={cardVariants}
                      className="w-full max-w-lg p-8 rounded-3xl bg-white/70 border border-dashed border-zinc-300 text-left relative"
                    >
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-accent/10 border border-accent/25 rounded-full text-xs font-semibold text-accent mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Focus: {step.opposite?.focus}</span>
                      </span>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 mb-1">Key Objectives</h4>
                          <p className="text-sm text-zinc-600 leading-relaxed">{step.opposite?.objectives}</p>
                        </div>
                        <div className="pt-3 border-t border-zinc-200">
                          <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 mb-1">Deliverables</h4>
                          <p className="text-sm font-semibold text-primary">{step.opposite?.deliverables}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
