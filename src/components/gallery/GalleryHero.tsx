
import React from 'react';

const GalleryHero = () => {
  return (
    <section className="relative bg-arch-navy py-24">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/76fe468c-86ca-4781-be2f-becf4da6c82c.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Our Project Gallery
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Explore our portfolio of completed projects showcasing our expertise in architecture and construction across residential, commercial, and renovation projects.
          </p>
          <a 
            href="#gallery" 
            className="inline-block px-6 py-3 bg-arch-gold text-arch-navy font-semibold rounded-md hover:bg-yellow-400 transition duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
