
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import SEO from '@/components/SEO';
import { toast } from "sonner";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Show toast notification
    toast.error("Page not found", {
      description: "The page you're looking for doesn't exist or has been moved."
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-arch-gray-100 px-4">
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        keywords="404, page not found, error page"
        url={location.pathname}
      />
      <div className="text-center max-w-lg animate-fade-up">
        <h1 className="text-8xl font-bold text-arch-navy mb-4">404</h1>
        <div className="w-16 h-1 bg-arch-gold mx-auto mb-8"></div>
        <h2 className="text-2xl font-semibold text-arch-navy mb-4">Page Not Found</h2>
        <p className="text-arch-gray-800 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center bg-arch-navy text-white px-6 py-3 rounded hover:bg-arch-gold transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center border border-arch-navy text-arch-navy px-6 py-3 rounded hover:bg-arch-navy hover:text-white transition-colors duration-300 w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
