
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6 relative gold-border-left pl-4">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin size={18} className="text-arch-gold mt-1 mr-3" />
          <div className="text-white/70">
            <div>Pension House Building, Luweero</div>
            <div>Near Luweero Diocese Guest House/Hotel</div>
            <div>Uganda</div>
          </div>
        </li>
        <li className="flex items-center">
          <Phone size={18} className="text-arch-gold mr-3" />
          <div className="text-white/70">
            <div>+256 774 136 510</div>
            <div>+256 702 318 582</div>
          </div>
        </li>
        <li className="flex items-center">
          <Mail size={18} className="text-arch-gold mr-3" />
          <a href="mailto:archficinvestments@gmail.com" className="text-white/70 hover:text-arch-gold transition-colors">archficinvestments@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
