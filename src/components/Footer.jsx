import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'AI Automation Services', href: '#services' },
    { name: 'AI Training & Education', href: '#services' },
    { name: 'Done-For-You Products', href: '#services' },
    { name: 'Web & App Development', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Business Consulting', href: '#services' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedinIn className="w-3.5 h-3.5" />, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: <FaTwitter className="w-3.5 h-3.5" />, href: 'https://twitter.com' },
    { name: 'Facebook', icon: <FaFacebookF className="w-3.5 h-3.5" />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <FaInstagram className="w-3.5 h-3.5" />, href: 'https://instagram.com' },
    { name: 'YouTube', icon: <FaYoutube className="w-3.5 h-3.5" />, href: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-primary text-zinc-400 relative overflow-hidden">
      {/* Top red gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Subtle radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div className="space-y-6 lg:col-span-1">
            <a href="#home" className="flex items-center space-x-3 group">
              <img
                src={logoImg}
                className="h-10 w-auto rounded-xl object-contain border border-zinc-800 group-hover:border-accent/40 transition-colors"
                alt="AIXPRT Logo"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                AI<span className="text-accent">XPRT</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed text-zinc-400">
              AIXPRT is a premier AI Automation &amp; Digital Transformation company. We build intelligent workflows that streamline operations, improve customer engagement, and accelerate business growth.
            </p>

            {/* Newsletter quick form */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Stay Updated</p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 bg-zinc-800/80 border border-zinc-700 text-white text-xs rounded-l-xl focus:outline-none focus:border-accent/60 placeholder-zinc-500"
                />
                <button className="px-4 py-2.5 bg-accent hover:bg-red-700 text-white rounded-r-xl transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-2 pt-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-accent hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Company</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-accent hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-accent hover:translate-x-1 inline-flex items-center space-x-1.5 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <div className="p-1.5 bg-zinc-800 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="leading-relaxed text-zinc-400 text-xs">
                  102 Innovation Hub, Tech City,<br />Karnataka 560001, India
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <div className="p-1.5 bg-zinc-800 rounded-lg shrink-0">
                  <Phone className="w-3.5 h-3.5 text-accent" />
                </div>
                <a href="tel:+919999999999" className="hover:text-accent transition-colors text-zinc-400 text-xs">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <div className="p-1.5 bg-zinc-800 rounded-lg shrink-0">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                </div>
                <a href="mailto:contact@aixprt.com" className="hover:text-accent transition-colors text-zinc-400 text-xs">
                  contact@aixprt.com
                </a>
              </li>
            </ul>

            {/* Badge */}
            <div className="mt-4 inline-flex items-center space-x-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-zinc-400">Available for new projects</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-zinc-900 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>
            &copy; {currentYear} <span className="text-zinc-400 font-semibold">AIXPRT</span> — AI Automation Expert. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
