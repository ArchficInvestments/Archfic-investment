
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-arch-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-playfair font-bold text-2xl">ArchFic</span>
              <span className="text-arch-gold font-playfair font-medium text-2xl">Investment</span>
            </Link>
            <p className="text-white/70 mb-6">
              Building the future with innovative designs and quality construction in Luweero, Uganda and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-arch-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-arch-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-arch-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-arch-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative gold-border-left pl-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/70 hover:text-arch-gold transition-colors">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-arch-gold transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-arch-gold transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-arch-gold transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-arch-gold transition-colors">
                  Renovations & Remodeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative gold-border-left pl-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-arch-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-arch-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-arch-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-arch-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-arch-gold transition-colors">
                  Contact
                </Link>
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
                <a href="mailto:info@archfic.com" className="text-white/70 hover:text-arch-gold transition-colors">info@archfic.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center">
              <p className="text-white/50 text-sm mb-2 md:mb-0 md:mr-4">
                © {new Date().getFullYear()} ArchFic Investment Ltd. All rights reserved.
              </p>
              <p className="text-white/50 text-sm mb-4 md:mb-0">
                Designed by: <a href="https://drewversedesign.online" target="_blank" rel="noopener noreferrer" className="hover:text-arch-gold transition-colors">drewversedesign.online</a>
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-white/50 text-sm hover:text-arch-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white/50 text-sm hover:text-arch-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
