
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
