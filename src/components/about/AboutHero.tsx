
import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-arch-navy overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541976490233-5be7220ae911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")', 
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block mb-2 text-arch-gold font-medium uppercase tracking-widest text-sm gold-box pl-6 pt-5 pb-2">
            ABOUT US
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
            Building Dreams Since 2017
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl">
            ArchFic Investment Ltd. is a leading architecture and construction company in Luweero, Uganda, 
            delivering innovative designs and quality construction for residential and commercial clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
