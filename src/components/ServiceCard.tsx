
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  backgroundImage?: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, backgroundImage, index }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setImageLoaded(true);
      img.onerror = () => {
        console.error(`Failed to load image: ${backgroundImage}`);
        setImageError(true);
      };
    } else {
      setImageLoaded(true);
    }
  }, [backgroundImage]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden bg-arch-navy text-white rounded-sm transition-all duration-700 shadow-md highlight-hover ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {backgroundImage && !imageError && (
        <>
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
              imageLoaded ? 'opacity-20' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <img
            ref={imgRef}
            src={backgroundImage}
            alt={title}
            className="hidden"
            loading="lazy"
            width="800"
            height="600"
            onError={() => setImageError(true)}
          />
        </>
      )}
      <div className="relative p-8 h-full flex flex-col">
        {/* Yellow dot */}
        <div className="absolute top-5 left-5 w-2 h-2 bg-arch-gold"></div>
        
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-white/70 mb-6 flex-grow">{description}</p>
        
        <Link 
          to="/services" 
          className="inline-flex items-center text-sm font-medium text-white hover:text-arch-gold transition-colors duration-300"
        >
          Read More <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
