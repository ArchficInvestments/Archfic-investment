
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
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
  );
};

export default Copyright;
