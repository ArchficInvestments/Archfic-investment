
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
      details: ["Luweero", "Uganda"]
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+256 702 318 582", "+256 774 136 510"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@archfic.com", "support@archfic.com"]
    }
  ];

  return (
    <main className="pt-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with ArchFic Investment Ltd. Contact our team for consultations, quotes, and inquiries about our architecture and construction services in Luweero, Uganda."
        keywords="contact ArchFic, construction consultation, architecture quote, Luweero builders, Uganda construction company contact"
        url="/contact"
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
