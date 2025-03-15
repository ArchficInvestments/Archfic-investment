
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    "7+ years of expertise in architecture and construction",
    "Custom-tailored designs for residential and commercial projects",
    "Timely project completion without compromising quality",
    "Advanced technology & sustainable solutions for modern living"
  ];

  return (
    <section className="py-20 bg-arch-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-white">Why Choose Us?</h2>
            </div>
            
            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-arch-gold mt-1 mr-3 flex-shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="mb-6">
                Whether you're looking to design your dream home or develop a commercial space, 
                we bring your vision to life.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-arch-gold border-b-2 border-arch-gold pb-1 transition-all duration-300 hover:text-white"
              >
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern architectural design by ArchFic Investment" 
                className="w-full h-auto"
                loading="lazy"
                width="1170"
                height="780"
              />
              
              {/* Yellow corner frame */}
              <div className="absolute bottom-[-20px] right-[-20px] w-[100px] h-[100px] border-b-4 border-r-4 border-arch-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
