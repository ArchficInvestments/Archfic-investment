
import React from 'react';

const GalleryHero = () => {
  return (
    <section className="relative bg-arch-navy py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/e87808b9-e259-4e42-975b-789165a8fccb.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Our <span className="text-arch-gold">Project</span> Gallery
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Browse through our portfolio of completed projects showcasing our expertise in architecture, 
            construction, and interior design across Uganda and East Africa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
