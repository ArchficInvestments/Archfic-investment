
import React from 'react';

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-arch-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 shadow-sm rounded-sm">
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Our Mission</h2>
            </div>
            <p className="text-arch-gray-800">
              To provide exceptional architectural and construction services that enhance communities, 
              improve lifestyles, and contribute to Uganda's growing infrastructure.
            </p>
          </div>
          
          {/* Vision */}
          <div className="bg-white p-8 shadow-sm rounded-sm">
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Our Vision</h2>
            </div>
            <p className="text-arch-gray-800">
              To be a leading force in architecture and construction in Uganda, setting industry standards 
              in innovation, sustainability, and quality craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
