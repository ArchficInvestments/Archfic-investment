
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-arch-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <a 
              href="#home" 
              className="flex items-center mb-4"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              <span className="text-white font-playfair font-bold text-2xl">ArchFic</span>
              <span className="text-arch-gold font-playfair font-medium text-2xl">Investment</span>
            </a>
            <p className="text-white/70 mb-6">
              Building the future with innovative designs and quality construction in Luweero, Uganda and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-arch-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-arch-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-arch-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-arch-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative gold-border-left pl-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Architectural Design
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Residential Construction
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Commercial Construction
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Project Management
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Renovations & Remodeling
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative gold-border-left pl-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/70 hover:text-arch-gold transition-colors"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative gold-border-left pl-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-arch-gold mt-1 mr-3" />
                <span className="text-white/70">Luweero, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-arch-gold mr-3" />
                <span className="text-white/70">+256 774 136 510</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-arch-gold mr-3" />
                <span className="text-white/70">info@archfic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} ArchFic Investment Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-white/50 text-sm hover:text-arch-gold transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-white/50 text-sm hover:text-arch-gold transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
