import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const whatsappNumber = "918291850938"; // Real number
  const message = encodeURIComponent("Hi AIXPRT, I want to automate my business operations and would love to book a consultation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip label */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-zinc-800 hidden md:block">
        Chat with an Expert
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 rotate-45 border-r border-t border-zinc-800"></div>
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        style={{ backgroundColor: '#25D366' }}
        className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full text-white shadow-xl animate-whatsapp-pulse cursor-pointer"
        aria-label="Chat with AIXPRT on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
      </motion.a>
    </div>
  );
}
