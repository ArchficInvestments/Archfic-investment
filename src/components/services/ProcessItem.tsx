
interface ProcessItemProps {
  number: string;
  title: string;
  description: string;
  isVisible: boolean;
  index: number;
}

const ProcessItem = ({ number, title, description, isVisible, index }: ProcessItemProps) => {
  return (
    <div 
      className={`bg-white p-8 rounded-sm shadow-md highlight-hover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl font-bold text-arch-gold opacity-30 mb-4">{number}</div>
      <h3 className="text-xl font-semibold text-arch-navy mb-3">{title}</h3>
      <p className="text-arch-gray-800">{description}</p>
    </div>
  );
};

export default ProcessItem;
