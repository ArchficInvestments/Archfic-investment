
import { useState, useEffect } from 'react';

interface ServicesHeroProps {
  isVisible: boolean;
}

const ServicesHero = ({ isVisible }: ServicesHeroProps) => {
  return (
    <section id="hero" className="relative py-20 bg-arch-navy overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/fcbce94b-f77a-436c-8d38-8cb1cd327ee8.png")', 
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className={`flex flex-col items-center text-center max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2 text-arch-gold font-medium uppercase tracking-widest text-sm gold-box pl-6 pt-5 pb-2">
            OUR SERVICES
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
            Comprehensive Building Solutions
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl">
            From concept to completion, we offer a full range of architectural design and construction services 
            to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
