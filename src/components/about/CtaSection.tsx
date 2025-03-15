
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-arch-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
            <h2 className="text-2xl font-semibold text-arch-navy">Ready To Start Your Project?</h2>
          </div>
          <p className="text-arch-gray-800 mb-8 max-w-2xl">
            Let's work together to bring your vision to life. Our team is ready to help with your next construction or renovation project.
          </p>
          <Link 
            to="/contact" 
            className="bg-arch-navy text-white px-8 py-3 font-medium rounded hover:bg-arch-gold transition-all duration-300 inline-flex items-center"
          >
            Contact Us <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
