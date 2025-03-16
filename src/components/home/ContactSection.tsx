
import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import ContactInfo from '../contact/ContactInfo';
import ContactFormMapSection from '../contact/ContactFormMapSection';

interface ContactInfoItem {
  icon: typeof MapPin | typeof Phone | typeof Mail;
  title: string;
  details: string[];
}

const ContactSection = ({ isVisible }: { isVisible: boolean }) => {
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
      details: ["info@archfic.com", "support@archfic.com"]
    }
  ];

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="flex flex-col items-center mb-12 text-center bg-arch-gray-100 pt-20 px-4">
        <div className="flex items-center mb-4">
          <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
          <h2 className="text-2xl font-semibold text-arch-navy">Contact Us</h2>
        </div>
        <p className="text-arch-gray-800 max-w-2xl mx-auto">
          Have questions or ready to start your project? Contact us today for a consultation. 
          Our team is ready to help bring your vision to life.
        </p>
      </div>

      <ContactInfo contactInfo={contactInfo} />
      <ContactFormMapSection />
    </section>
  );
};

export default ContactSection;
