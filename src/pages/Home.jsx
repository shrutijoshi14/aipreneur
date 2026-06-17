import SEO from '../seo/SEO';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Webinar from '../components/Webinar';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      {/* Search Engine Optimization Metadata */}
      <SEO 
        title="AIXPRT | AI Automation & Digital Transformation Solutions"
        description="AIXPRT provides professional AI Automation, Digital Transformation, Custom Website & App Development, Digital Marketing, and Telecommunications Integration."
        keywords="AI automation, AI agency, workflow automation, digital transformation, custom GPT, lead generation, chatbots, CRM ERP LMS systems, Web development, WhatsApp API, bulk SMS, business email, SEO"
      />
      
      {/* General Layout wrap */}
      <MainLayout>
        {/* Sections */}
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Webinar />
        <Contact />
      </MainLayout>
    </>
  );
}
