import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { serviceCategories } from '../data/services';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    if (!IconComponent) return <Icons.HelpCircle className="w-6 h-6" />;
    return <IconComponent className="w-6 h-6" />;
  };

  const activeCategoryData = serviceCategories.find(cat => cat.id === activeCategory);

  const tabVariants = {
    inactive: { scale: 1, backgroundColor: "rgba(250,250,250,1)", color: "#555555" },
    active: { scale: 1.04, backgroundColor: "#1A1A1A", color: "#FFFFFF" },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.09 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-accent"></span>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Capabilities</span>
            <span className="h-px w-8 bg-accent"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Comprehensive Tech & Growth Solutions
          </h2>
          <p className="text-zinc-500 leading-relaxed">
            We provide a unified ecosystem of AI integration, software development, communications, and marketing to scale your enterprise operations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variants={tabVariants}
              animate={activeCategory === category.id ? "active" : "inactive"}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer border border-zinc-200 shadow-sm focus:outline-none"
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Active category tagline */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm text-zinc-400 italic">
            &ldquo;{activeCategoryData?.description}&rdquo;
          </p>
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={cardContainerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategoryData?.services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-section-bg border border-zinc-200 hover:border-accent/40 shadow-sm transition-all text-left flex flex-col justify-between group relative overflow-hidden glow-card-hover"
              >
                {/* Top red line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-zinc-200 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 w-fit">
                    {renderIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-primary tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-auto">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-primary hover:text-accent space-x-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Inquire Details</span>
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
