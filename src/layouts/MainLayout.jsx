import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-700 selection:bg-accent/30 selection:text-accent">
      {/* Sticky Header */}
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>
      
      {/* Footer Area */}
      <Footer />
      
      {/* Floating utility widgets */}
      <ScrollToTop />
      <FloatingWhatsApp />
    </div>
  );
}
