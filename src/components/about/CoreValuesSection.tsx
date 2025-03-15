
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CoreValue {
  title: string;
  description: string;
}

const CoreValuesSection = () => {
  const coreValues: CoreValue[] = [
    { 
      title: "Excellence & Innovation", 
      description: "We combine cutting-edge design with precision construction."
    },
    { 
      title: "Integrity & Transparency", 
      description: "We build trust through honesty and professionalism."
    },
    { 
      title: "Sustainability & Quality", 
      description: "We use eco-friendly, high-quality materials to create lasting structures."
    },
    { 
      title: "Client-Centric Approach", 
      description: "Every project is customized to meet unique needs and exceed expectations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
            <h2 className="text-2xl font-semibold text-arch-navy">Our Core Values</h2>
            <div className="w-6 h-[2px] bg-arch-gold ml-3"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className="p-6 border border-arch-gray-200 rounded-sm hover:border-arch-gold transition-colors duration-300">
              <div className="flex items-start mb-4">
                <CheckCircle size={24} className="text-arch-gold mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-medium text-arch-navy">{value.title}</h3>
              </div>
              <p className="text-arch-gray-800">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
