
import { ServiceData } from '@/types/service';
import ServiceItem from './ServiceItem';

interface ServicesListProps {
  services: ServiceData[];
  isVisible: boolean;
}

const ServicesList = ({ services, isVisible }: ServicesListProps) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col items-center mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-4">
            <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
            <h2 className="text-2xl font-semibold text-arch-navy">Our Services</h2>
          </div>
          <p className="text-arch-gray-800 max-w-2xl mx-auto">
            We provide a comprehensive range of architectural and construction services tailored to meet the unique 
            needs of each client and project.
          </p>
        </div>
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
