
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export interface ServiceItemProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
  isVisible: boolean;
}

const ServiceItem = ({ title, description, image, features, index, isVisible }: ServiceItemProps) => {
  return (
    <div 
      className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-sm">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto"
          />
          
          {/* Yellow corner frame */}
          <div className={`absolute ${index % 2 === 1 ? 'top-[-20px] right-[-20px] border-t-4 border-r-4' : 'top-[-20px] left-[-20px] border-t-4 border-l-4'} w-[100px] h-[100px] border-arch-gold`}></div>
        </div>
      </div>
      
      <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
        <h3 className="text-2xl font-semibold text-arch-navy mb-4">{title}</h3>
        <p className="text-arch-gray-800 mb-6">{description}</p>
        
        <div className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <CheckCircle size={18} className="text-arch-gold mt-1 mr-3 flex-shrink-0" />
              <span className="text-arch-gray-800">{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center text-arch-navy border-b-2 border-arch-gold pb-1 transition-all duration-300 hover:text-arch-gold"
        >
          Request Service <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
