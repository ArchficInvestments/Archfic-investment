
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const CompanySection = () => {
  return (
    <div>
      <Link to="/" className="flex items-center mb-4">
        <span className="text-white font-playfair font-bold text-2xl">ArchFic</span>
        <span className="text-arch-gold font-playfair font-medium text-2xl">Investment</span>
      </Link>
      <p className="text-white/70 mb-6">
        Building the future with innovative designs and quality construction in Luweero, Uganda and beyond.
      </p>
      <SocialLinks />
    </div>
  );
};

export default CompanySection;
