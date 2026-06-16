import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "AIXPRT | AI Automation & Digital Transformation Solutions",
  description = "AIXPRT is a leading AI Automation, Digital Transformation, Marketing, and Technology Solutions company. We help businesses automate operations, generate leads, increase revenue, and scale.",
  keywords = "AI automation, AI agency, workflow automation, digital transformation, custom GPT, lead generation, chatbots, CRM ERP LMS, web development, WhatsApp API, bulk SMS, business email, SEO, AI training, corporate AI coaching",
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://aixprt.com',
  ogType = "website",
  ogImage = "https://aixprt.com/og-image.jpg",
  twitterCard = "summary_large_image"
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "name": "AIXPRT",
    "alternateName": "AIXPRT AI Automation Expert",
    "url": "https://aixprt.com",
    "logo": "https://aixprt.com/logo.jpg",
    "image": ogImage,
    "description": "AIXPRT is a leading AI Automation, Digital Transformation, Marketing, and Technology Solutions company that helps businesses automate operations, generate leads, increase revenue, and scale.",
    "telephone": "+919999999999",
    "email": "contact@aixprt.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "102 Innovation Hub, Tech City",
      "addressLocality": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919999999999",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://twitter.com/aixprt",
      "https://linkedin.com/company/aixprt",
      "https://facebook.com/aixprt",
      "https://instagram.com/aixprt"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation & Digital Transformation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Training & Education" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web & App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing Solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telecommunications Integration" } }
      ]
    }
  };

  return (
    <Helmet>
      {/* Primary Meta */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AIXPRT" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#CC0000" />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="AIXPRT" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@aixprt" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}
