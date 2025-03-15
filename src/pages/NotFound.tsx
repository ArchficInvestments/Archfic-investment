
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-arch-gray-100 px-4">
      <div className="text-center max-w-lg animate-fade-up">
        <h1 className="text-8xl font-bold text-arch-navy mb-4">404</h1>
        <div className="w-16 h-1 bg-arch-gold mx-auto mb-8"></div>
        <h2 className="text-2xl font-semibold text-arch-navy mb-4">Page Not Found</h2>
        <p className="text-arch-gray-800 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-arch-navy text-white px-6 py-3 rounded hover:bg-arch-gold transition-colors duration-300"
        >
          <Home size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
