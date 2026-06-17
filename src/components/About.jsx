import { Brain, TrendingUp, Zap, HelpCircle, CheckCircle, Database, Cpu, MessageSquare, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      title: "AI Expertise",
      description: "We design and deploy state-of-the-art LLMs, custom agents, and prompt pipelines tailor-made for your enterprise needs and workflows.",
      icon: <Brain className="w-6 h-6 text-accent" />,
      stat: "50+",
      statLabel: "AI Systems Built"
    },
    {
      title: "Business Growth",
      description: "Every tool is aligned to boost revenue, increase qualified leads, and drive measurable results. Tech that pays for itself.",
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      stat: "10x",
      statLabel: "Average ROI"
    },
    {
      title: "Automation Solutions",
      description: "We connect your systems, integrate APIs, and automate manual routines to unlock productivity across every department.",
      icon: <Zap className="w-6 h-6 text-accent" />,
      stat: "80%",
      statLabel: "Time Saved"
    },
    {
      title: "End-to-End Support",
      description: "From strategy and coding to integrations, maintenance, and analytics dashboards — we are your long-term AI partner.",
      icon: <HelpCircle className="w-6 h-6 text-accent" />,
      stat: "24/7",
      statLabel: "Dedicated Support"
    }
  ];

  // Interactive Architecture Diagram Nodes
  const pipelineNodes = [
    {
      step: "01",
      icon: <Database className="w-5 h-5 text-accent" />,
      title: "Inbound Data",
      status: "AUTO-EXTRACT",
      desc: "Web scrapers, custom webhooks, forms, and email triggers ingest leads raw."
    },
    {
      step: "02",
      icon: <Brain className="w-5 h-5 text-accent" />,
      title: "AI Cognitive",
      status: "COGNITIVE RUN",
      desc: "LLMs analyze intent, scrub data, score fit, and craft responses."
    },
    {
      step: "03",
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: "Action Pipeline",
      status: "API SYNC",
      desc: "Data syncs to CRM (HubSpot/Salesforce), pushing notifications to WhatsApp/Slack."
    },
    {
      step: "04",
      icon: <TrendingUp className="w-5 h-5 text-accent" />,
      title: "Growth Yield",
      status: "YIELD SECURED",
      desc: "Consultation booked directly on your sales reps calendar, ready for closing."
    }
  ];

  return (
    <section id="about" className="py-28 bg-white overflow-hidden bg-circuits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-accent"></span>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Who We Are</span>
            <span className="h-px w-8 bg-accent"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet AIXPRT — Your AI Transformation Partner
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
            AIXPRT is a premier AI Automation, Digital Transformation, Marketing, and Technology Solutions company. We partner with forward-thinking businesses to streamline operations, enhance customer engagement, and accelerate growth through cutting-edge AI systems.
          </p>
          
          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-bold px-7 py-3 rounded-full shadow-lg shadow-accent/20 text-xs sm:text-sm transition-colors"
            >
              <span>Work With Us</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center space-x-2 border border-slate-200 hover:border-accent/40 text-slate-700 hover:text-accent font-semibold px-7 py-3 rounded-full text-xs sm:text-sm transition-all"
            >
              <span>Our Services</span>
            </a>
          </div>
        </div>

        {/* ─── Feature Cards 2×2 Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08, type: "spring", stiffness: 85, damping: 15 }}
              className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 group overflow-hidden text-left"
            >
              {/* Top hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-3xl" />

              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <div className="group-hover:[&>svg]:text-white transition-colors">
                    {feat.icon}
                  </div>
                </div>
                {/* Stat */}
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-rose-400">
                    {feat.stat}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{feat.statLabel}</p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── Graphical AI Systems Architecture Pipeline Flowchart ─── */}
        <div className="border-t border-slate-200 pt-16 text-left">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">AI Automation Ecosystem</h3>
            <p className="text-xs text-slate-500">How data streams flow through our customized AI software pipelines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {pipelineNodes.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, type: "spring", stiffness: 80, damping: 14 }}
                className="relative flex flex-col items-center w-full"
              >
                
                {/* Visual Card Node */}
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm w-full relative group hover:border-accent/25 transition-all text-left">
                  
                  {/* Top Badge label */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[8px] font-extrabold tracking-wider bg-slate-100 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full font-mono">
                      {node.status}
                    </span>
                    <span className="text-xs font-extrabold text-slate-300">{node.step}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-rose-50 rounded-lg text-accent shrink-0">
                      {node.icon}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm">{node.title}</h4>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal">{node.desc}</p>
                </div>

                {/* Desktop horizontal flow connectors (except final node) */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 items-center justify-center z-20 text-slate-300">
                    <ArrowRight className="w-5 h-5 text-accent/40 animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
