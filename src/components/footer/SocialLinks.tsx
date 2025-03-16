
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
