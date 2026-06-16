import { Brain, TrendingUp, Zap, HelpCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      title: "AI Expertise",
      description: "We design and deploy state-of-the-art LLMs, custom agents, and prompt pipelines tailor-made for your enterprise needs and workflows.",
      icon: <Brain className="w-7 h-7 text-accent" />,
      stat: "50+",
      statLabel: "AI Systems Built"
    },
    {
      title: "Business Growth",
      description: "Every tool is aligned to boost revenue, increase qualified leads, and drive measurable results. Tech that pays for itself.",
      icon: <TrendingUp className="w-7 h-7 text-accent" />,
      stat: "10x",
      statLabel: "Average ROI"
    },
    {
      title: "Automation Solutions",
      description: "We connect your systems, integrate APIs, and automate manual routines to unlock productivity across every department.",
      icon: <Zap className="w-7 h-7 text-accent" />,
      stat: "80%",
      statLabel: "Time Saved"
    },
    {
      title: "End-to-End Support",
      description: "From strategy and coding to integrations, maintenance, and analytics dashboards — we are your long-term AI partner.",
      icon: <HelpCircle className="w-7 h-7 text-accent" />,
      stat: "24/7",
      statLabel: "Dedicated Support"
    }
  ];

  const highlights = [
    "Custom AI solutions for any business size",
    "Certified AI automation specialists",
    "Proven framework across 100+ projects",
    "Transparent reporting & analytics",
    "Seamless integration with existing tools",
    "Post-launch maintenance & scale support"
  ];

  return (
    <section id="about" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-accent"></span>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Who We Are</span>
            <span className="h-px w-8 bg-accent"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Meet AIXPRT — Your AI Transformation Partner
          </h2>
          <p className="text-zinc-500 leading-relaxed text-base">
            AIXPRT is a premier AI Automation, Digital Transformation, Marketing, and Technology Solutions company. We partner with forward-thinking businesses to streamline operations, enhance customer engagement, and accelerate growth through cutting-edge AI systems.
          </p>
          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-red-700 text-white font-bold px-7 py-3 rounded-full shadow-lg shadow-red-900/20 text-sm transition-colors"
            >
              <span>Work With Us</span>
              <span>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center space-x-2 border border-zinc-200 hover:border-accent/50 text-zinc-600 hover:text-accent font-semibold px-7 py-3 rounded-full text-sm transition-all"
            >
              <span>Our Services</span>
            </a>
          </div>
        </div>

        {/* ─── Feature Cards 2×2 Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(204,0,0,0.12)" }}
              className="relative p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-accent/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Top hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-t-3xl" />

              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <div className="group-hover:[&>svg]:text-white transition-colors">
                    {feat.icon}
                  </div>
                </div>
                {/* Stat */}
                <div className="text-right">
                  <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">
                    {feat.stat}
                  </p>
                  <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wide">{feat.statLabel}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">{feat.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── Highlights Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm text-zinc-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
