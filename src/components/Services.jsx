import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { serviceCategories } from '../data/services';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const visibleIds = [
    'ai-automation-tools',
    'custom-gpt',
    'digital-products',
    'website-software-dev',
    'digital-marketing-solutions',
  ];

  const visibleCategories = serviceCategories.filter(cat => visibleIds.includes(cat.id));
  const dropdownCategories = serviceCategories.filter(cat => !visibleIds.includes(cat.id));

  const activeDropdownCat = dropdownCategories.find(cat => cat.id === activeCategory);
  const isDropdownActive = !!activeDropdownCat;
  const moreButtonText = isDropdownActive ? activeDropdownCat.title : "More";

  const renderIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    if (!IconComponent) return <Icons.HelpCircle className="w-6 h-6" />;
    return <IconComponent className="w-6 h-6" />;
  };

  const activeCategoryData = serviceCategories.find(cat => cat.id === activeCategory);



  const cardContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 bg-circuits overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-8 bg-accent"></span>
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Capabilities</span>
            <span className="h-px w-8 bg-accent"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Tech & Growth Solutions
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
            We provide a unified ecosystem of AI integration, software development, communications, and marketing to scale your enterprise operations.
          </p>
        </div>

        {/* Transparent backdrop to close dropdown on click outside */}
        {isDropdownOpen && (
          <div 
            className="fixed inset-0 z-20 cursor-default" 
            onClick={() => setIsDropdownOpen(false)} 
          />
        )}

        {/* Category Tabs & Dropdown */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 mb-10 max-w-5xl mx-auto relative z-30">
          {visibleCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsDropdownOpen(false);
                }}
                className={`relative px-6 py-3 rounded-full text-xs sm:text-sm font-semibold cursor-pointer transition-colors duration-300 border focus:outline-none select-none ${
                  isActive
                    ? 'text-white border-transparent shadow-lg shadow-accent/25'
                    : 'text-slate-600 border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300/80 shadow-sm'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-accent to-rose-500 rounded-full"
                    style={{ zIndex: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.title}</span>
              </button>
            );
          })}

          {/* More Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className={`relative px-6 py-3 rounded-full text-xs sm:text-sm font-semibold cursor-pointer transition-colors duration-300 border focus:outline-none select-none flex items-center ${
                isDropdownActive
                  ? 'text-white border-transparent bg-gradient-to-r from-accent to-rose-500 shadow-lg shadow-accent/25'
                  : 'text-slate-600 border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300/80 shadow-sm'
              }`}
            >
              <span className="relative z-10">{moreButtonText}</span>
              <Icons.ChevronDown
                className={`w-4 h-4 ml-1.5 transition-transform duration-300 relative z-10 ${
                  isDropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2.5 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl py-2 z-50 overflow-hidden text-left origin-top-right"
                >
                  {dropdownCategories.map((category) => {
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-xs sm:text-sm text-left font-medium transition-colors focus:outline-none ${
                          isActive
                            ? 'text-accent bg-rose-50/60 font-semibold'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {category.title}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Active category tagline */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-xs sm:text-sm text-slate-400 italic font-medium">
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
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-accent/30 shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top red line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-accent group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 w-fit">
                    {renderIcon(service.icon)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-auto">
                  <a
                    href={service.link || "#contact"}
                    target={service.link ? "_blank" : undefined}
                    rel={service.link ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-xs font-semibold text-slate-900 hover:text-accent transition-colors cursor-pointer"
                  >
                    {service.link
                      ? service.link.includes('wa.me')
                        ? 'View Catalog'
                        : service.link.includes('aixprt.shop')
                        ? 'Visit Shop'
                        : 'Visit Platform'
                      : 'Inquire Details'}
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
