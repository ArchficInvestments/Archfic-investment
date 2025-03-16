
import { MapPin, Phone, Mail } from 'lucide-react';

export interface ContactInfoItem {
  icon: typeof MapPin | typeof Phone | typeof Mail;
  title: string;
  details: string[];
}

interface ContactInfoProps {
  contactInfo: ContactInfoItem[];
}

const ContactInfo = ({ contactInfo }: ContactInfoProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-arch-gray-100 p-8 rounded-sm text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-arch-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <info.icon size={24} className="text-arch-gold" />
              </div>
              <h3 className="text-xl font-semibold text-arch-navy mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-arch-gray-800">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
