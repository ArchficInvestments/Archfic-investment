
import { ProcessStep } from '@/types/service';
import ProcessItem from './ProcessItem';

interface ProcessSectionProps {
  processSteps: ProcessStep[];
  isVisible: boolean;
}

const ProcessSection = ({ processSteps, isVisible }: ProcessSectionProps) => {
  return (
    <section id="process" className="py-20 bg-arch-gray-100">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col items-center mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-4">
            <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
            <h2 className="text-2xl font-semibold text-arch-navy">Our Process</h2>
          </div>
          <p className="text-arch-gray-800 max-w-2xl mx-auto">
            We follow a structured process to ensure every project is completed efficiently, on time, and to the 
            highest standards of quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <ProcessItem 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
