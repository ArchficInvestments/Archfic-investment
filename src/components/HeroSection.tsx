
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const img = new Image();
    img.src = "/lovable-uploads/27e1ffd7-5ac0-4a89-97df-5f1652a1484c.png";
    img.onload = () => setIsImageLoaded(true);
  }, []);

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen bg-arch-navy overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000 ${isImageLoaded ? 'opacity-70' : ''}`}
        style={{ 
          backgroundImage: 'url("/lovable-uploads/27e1ffd7-5ac0-4a89-97df-5f1652a1484c.png")', 
          backgroundPosition: 'center center' 
        }}
        aria-hidden="true"
      ></div>

      {/* Preload the hero image */}
      <link rel="preload" as="image" href="/lovable-uploads/27e1ffd7-5ac0-4a89-97df-5f1652a1484c.png" />

      {/* Content */}
      <div className="relative container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className={`transition-all duration-700 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-2 text-arch-gold font-medium uppercase tracking-widest text-sm gold-box pl-6 pt-5 pb-2">
              FROM CONCEPT TO COMPLETION
            </div>
          </div>
          
          <h1 className={`transition-all duration-700 delay-500 transform font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Construction of <br />
            <span className="text-white">private houses</span>
          </h1>
          
          <p className={`transition-all duration-700 delay-700 transform text-white/80 mb-8 max-w-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            All types of work - from designing and laying the foundation to finishing and commissioning. High standards, reasonable prices, free quoting.
          </p>
          
          <div className={`transition-all duration-700 delay-900 transform flex flex-wrap items-center gap-6 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={handleGetQuote}
              className="bg-arch-gold text-arch-navy px-8 py-3 font-medium rounded hover:bg-white transition-all duration-300"
            >
              Get a quote
            </button>
            
            <button className="text-white flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-arch-gold transition-colors duration-300">
                <div className="ml-1 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white/70 group-hover:border-l-arch-gold transition-colors duration-300"></div>
              </div>
              <span className="font-medium group-hover:text-arch-gold transition-colors duration-300">Showcase</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
