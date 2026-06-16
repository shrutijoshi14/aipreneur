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
    <span ref={ref} className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">
      {count}{suffix}
    </span>
  );
}

const iconMap = [
  <TrendingUp className="w-6 h-6" />,
  <Award className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
  <Clock className="w-6 h-6" />,
];

export default function WhyChooseUs() {
  const stats = [
    { number: "10", suffix: "x", label: "Average ROI" },
    { number: "95", suffix: "%", label: "Client Satisfaction" },
    { number: "100", suffix: "+", label: "Projects Done" },
    { number: "24", suffix: "/7", label: "Support Available" },
  ];

  return (
    <section id="why-choose-us" className="relative py-28 bg-primary text-white overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/8 blur-[180px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Why Choose Us</span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Real Business Results
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            We bridge the gap between complex AI architectures and practical business applications that actually drive revenue and efficiency.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm"
            >
              <p className="text-4xl sm:text-5xl font-extrabold mb-1">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm flex items-start space-x-5 hover:border-red-900/60 hover:bg-zinc-900/90 transition-all duration-300 group overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              {/* Icon */}
              <div className="flex-shrink-0 p-3.5 rounded-2xl bg-zinc-800 border border-zinc-700 text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 relative z-10">
                {iconMap[index % iconMap.length]}
              </div>

              {/* Text */}
              <div className="relative z-10 flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
