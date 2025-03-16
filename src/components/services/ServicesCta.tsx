
import { Link } from 'react-router-dom';

const ServicesCta = () => {
  return (
    <section className="py-16 bg-arch-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-2">Ready to Start Your Project?</h2>
            <p className="text-white/70">Contact us today for a free consultation and quote.</p>
          </div>
          <Link 
            to="/contact" 
            className="bg-arch-gold text-arch-navy px-8 py-3 font-medium rounded hover:bg-white transition-all duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCta;
