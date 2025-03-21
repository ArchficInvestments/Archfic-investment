
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-arch-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative overflow-hidden">
              <img 
                src="/lovable-uploads/91cf1076-7091-4501-ac07-b5a7e0f5649b.png" 
                alt="Modern residential design with mountain view" 
                className="w-full h-auto rounded-sm"
              />
              
              {/* Dot pattern */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, index) => (
                  <div 
                    key={index} 
                    className="w-1.5 h-1.5 bg-arch-gold opacity-50"
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Yellow corner frame */}
            <div className="absolute top-[-20px] left-[-20px] w-[100px] h-[100px] border-t-4 border-l-4 border-arch-gold"></div>
          </div>
          
          {/* Content */}
          <div>
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center mb-4">
                <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
                <h2 className="text-2xl font-semibold text-arch-navy">We Are Experts</h2>
              </div>
              
              <p className="text-arch-gray-800 mb-6">
                Our company provides a full range of services for the construction of private houses and cottages since 2017.
              </p>
              
              <p className="text-arch-gray-800 mb-6">
                With over 7 years of industry experience, we specialize in architectural design, construction, and project management. 
                We successfully cope with tasks of varying complexity, provide long-term guarantees for the quality of our work, and 
                deliver high-quality solutions tailored to our clients' needs.
              </p>
              
              <Link
                to="/about"
                className="inline-flex items-center text-arch-navy border-b-2 border-arch-gold pb-1 transition-all duration-300 hover:text-arch-gold"
              >
                About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
