
import { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo, { ContactInfoItem } from '@/components/contact/ContactInfo';
import ContactFormMapSection from '@/components/contact/ContactFormMapSection';
import ConsultationBanner from '@/components/contact/ConsultationBanner';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo: ContactInfoItem[] = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Pension House Building, Luweero",
        "Near Luweero Diocese Guest House/Hotel",
        "Uganda"
      ]
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+256 702 318 582", "+256 774 136 510"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["archficinvestments@gmail.com"]
    }
  ];

  // Contact page specific structured data
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ArchFic Investment Ltd",
      "url": "https://archficinvestmentsltd.com",
      "logo": "https://archficinvestmentsltd.com/lovable-uploads/ac830e73-d4d5-47f3-98e7-6418329b7677.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+256 702 318 582",
        "contactType": "customer service",
        "email": "archficinvestments@gmail.com",
        "contactOption": "TollFree",
        "areaServed": "Uganda",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pension House Building",
        "addressLocality": "Luweero",
        "addressRegion": "Central Region",
        "addressCountry": "Uganda"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ]
    }
  };

  return (
    <main className="pt-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with ArchFic Investment Ltd. Contact our team for consultations, quotes, and inquiries about our architecture and construction services in Luweero, Uganda."
        keywords="contact ArchFic, construction consultation, architecture quote, Luweero builders, Uganda construction company contact, Archfic Investments Ltd, Archfic Investment Ltd"
        url="/contact"
        structuredData={contactStructuredData}
      />
      
      {/* Hero */}
      <ContactHero backgroundImage="/lovable-uploads/cd434f2b-670a-41ea-aca2-d3c2b139c709.png" />
      
      {/* Contact Info */}
      <ContactInfo contactInfo={contactInfo} />
      
      {/* Contact Form and Map */}
      <ContactFormMapSection />
      
      {/* Consultation Banner */}
      <ConsultationBanner />
    </main>
  );
};

export default Contact;
