
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
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
  );
};

export default QuickLinks;
