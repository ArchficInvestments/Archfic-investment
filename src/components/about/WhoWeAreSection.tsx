
import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" 
                alt="ArchFic Investment team at construction site" 
                className="w-full h-auto"
                loading="lazy"
                width="1331"
                height="888"
              />
              
              {/* Yellow corner frame */}
              <div className="absolute top-[-20px] left-[-20px] w-[100px] h-[100px] border-t-4 border-l-4 border-arch-gold"></div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Who We Are</h2>
            </div>
            
            <p className="text-arch-gray-800 mb-6">
              Founded in 2017, ArchFic Investment Ltd. is a premier architecture and building company based in Luweero, Uganda. 
              With over 7 years of industry experience, we specialize in architectural design, construction, and project 
              management, delivering high-quality solutions tailored to our clients' needs.
            </p>
            
            <p className="text-arch-gray-800 mb-6">
              Our expertise spans residential, commercial, and industrial projects, ensuring innovative designs 
              and durable structures that stand the test of time. At ArchFic Investment Ltd., we don't just build 
              structures—we create lasting impressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
