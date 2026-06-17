import { useEffect, useState, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Zap, TrendingUp, Clock, Award } from 'lucide-react';
import { whyChooseUsData } from '../data/services';

function CountUp({ end, suffix = "", duration = 1.8 }) {
  const parsedEnd = parseInt(String(end).replace(/[^0-9]/g, ''), 10);
  const isInvalid = isNaN(parsedEnd);
  const [count, setCount] = useState(isInvalid ? end : 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || isInvalid) return;
    let start = 0;
    const increment = Math.ceil(parsedEnd / (duration * 60));
    const timer = setInterval(() => {
      start += increment;
      if (start >= parsedEnd) {
        setCount(parsedEnd);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, isInvalid, parsedEnd, duration]);

  return (
    <span ref={ref} className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-rose-400">
      {count}{suffix}
    </span>
  );
}

const iconMap = [
  <TrendingUp className="w-5 h-5 text-accent" />,
  <Award className="w-5 h-5 text-accent" />,
  <Zap className="w-5 h-5 text-accent" />,
  <Clock className="w-5 h-5 text-accent" />,
];

export default function WhyChooseUs() {
  const stats = [
    { number: "10", suffix: "x", label: "Average ROI", dash: "60 100" },
    { number: "95", suffix: "%", label: "Client Satisfaction", dash: "95 100" },
    { number: "100", suffix: "+", label: "Projects Done", dash: "100 100" },
    { number: "24", suffix: "/7", label: "Support Available", dash: "100 100" },
  ];

  return (
    <section id="why-choose-us" className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-slate-50 bg-circuits text-slate-700 overflow-hidden border-t border-b border-slate-100">
      
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-accent/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Why Choose Us</span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for Real Business Results
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
            We bridge the gap between complex AI architectures and practical business applications that actually drive revenue and efficiency.
          </p>
        </div>

        {/* Highly Graphical Stats Grid with SVG Circular Gauges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Circular Gauge SVG */}
              <div className="w-24 h-24 relative flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Gauge background track */}
                  <path
                    className="text-slate-100"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Glowing Gauge active overlay path */}
                  <motion.path
                    className="text-accent"
                    strokeDasharray={stat.dash}
                    strokeWidth="3"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    initial={{ strokeDashoffset: 100 }}
                    whileInView={{ strokeDashoffset: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                {/* Gauge center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-black text-slate-900">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest text-center">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-accent/20 transition-all duration-300 group overflow-hidden flex items-start space-x-5 shadow-sm hover:shadow-md"
            >
              {/* Soft hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              {/* Icon container */}
              <div className="flex-shrink-0 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 relative z-10 shrink-0">
                <div className="group-hover:[&>svg]:text-white transition-colors">
                  {iconMap[index % iconMap.length]}
                </div>
              </div>

              {/* Text info */}
              <div className="relative z-10 flex-1 text-left">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
