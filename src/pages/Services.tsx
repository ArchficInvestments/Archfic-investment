import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({
    hero: false,
    services: false,
    process: false,
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Architectural Design",
      description: "Our team of experienced architects creates innovative, functional, and aesthetically pleasing designs tailored to your specific needs and preferences.",
      image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
      features: [
        "Custom residential and commercial designs",
        "3D rendering and visualization",
        "Space planning and optimization",
        "Green building design"
      ]
    },
    {
      title: "Residential Construction",
      description: "From modern urban homes to traditional country houses, we build high-quality residential properties with attention to detail and craftsmanship.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      features: [
        "Custom home building",
        "Multi-family housing",
        "Luxury villas and estates",
        "Affordable housing solutions"
      ]
    },
    {
      title: "Commercial Construction",
      description: "We deliver commercial projects that meet the highest standards of quality, functionality, and design, helping businesses create spaces that reflect their brand and values.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      features: [
        "Office buildings and workspaces",
        "Retail and shopping centers",
        "Hospitality and leisure facilities",
        "Industrial and warehouse construction"
      ]
    },
    {
      title: "Project Management",
      description: "Our project management services ensure your construction project is completed on time, within budget, and to the highest quality standards.",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      features: [
        "Budget development and management",
        "Schedule creation and monitoring",
        "Quality control and assurance",
        "Risk management and mitigation"
      ]
    },
    {
      title: "Renovations & Remodeling",
      description: "Transform your existing space with our renovation and remodeling services, designed to update, improve, and add value to your property.",
      image: "/lovable-uploads/d1d33731-fa6a-491a-8d63-d700a324d7e6.png",
      features: [
        "Kitchen and bathroom remodeling",
        "Home additions and extensions",
        "Interior and exterior renovations",
        "Historic restoration"
      ]
    },
    {
      title: "Eco-Friendly Building Solutions",
      description: "We specialize in sustainable construction practices and eco-friendly building solutions that minimize environmental impact while maximizing comfort and efficiency.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      features: [
        "Solar energy integration",
        "Rainwater harvesting systems",
        "Energy-efficient design",
        "Sustainable material selection"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion about your vision, requirements, and budget."
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Our team creates initial designs and concepts based on your input and our expertise."
    },
    {
      number: "03",
      title: "Design Finalization",
      description: "We refine the designs based on your feedback and prepare detailed construction plans."
    },
    {
      number: "04",
      title: "Construction",
      description: "Our skilled construction team brings the designs to life with quality craftsmanship."
    },
    {
      number: "05",
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure everything meets our high standards."
    },
    {
      number: "06",
      title: "Handover",
      description: "We complete the project on time and provide all necessary documentation and support."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section id="hero" className="relative py-20 bg-arch-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80")', 
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className={`flex flex-col items-center text-center max-w-3xl mx-auto transition-all duration-1000 ${visibleSections.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
      
      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col items-center mb-12 text-center transition-all duration-1000 ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Our Services</h2>
            </div>
            <p className="text-arch-gray-800 max-w-2xl mx-auto">
              We provide a comprehensive range of architectural and construction services tailored to meet the unique 
              needs of each client and project.
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} transition-all duration-1000 ${visibleSections.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-sm">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                    
                    {/* Yellow corner frame */}
                    <div className={`absolute ${index % 2 === 1 ? 'top-[-20px] right-[-20px] border-t-4 border-r-4' : 'top-[-20px] left-[-20px] border-t-4 border-l-4'} w-[100px] h-[100px] border-arch-gold`}></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-semibold text-arch-navy mb-4">{service.title}</h3>
                  <p className="text-arch-gray-800 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle size={18} className="text-arch-gold mt-1 mr-3 flex-shrink-0" />
                        <span className="text-arch-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-arch-navy border-b-2 border-arch-gold pb-1 transition-all duration-300 hover:text-arch-gold"
                  >
                    Request Service <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section id="process" className="py-20 bg-arch-gray-100">
        <div className="container mx-auto px-4">
          <div className={`flex flex-col items-center mb-12 text-center transition-all duration-1000 ${visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Our Process</h2>
            </div>
            <p className="text-arch-gray-800 max-w-2xl mx-auto">
              We follow a structured process to ensure every project is completed efficiently, on time, and to the 
              highest standards of quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-sm shadow-md highlight-hover transition-all duration-1000 ${visibleSections.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-arch-gold opacity-30 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-arch-navy mb-3">{step.title}</h3>
                <p className="text-arch-gray-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-arch-navy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-white mb-2">Ready to Start Your Project?</h2>
              <p className="text-white/70">Contact us today for a free consultation and quote.</p>
            </div>
            <Link 
              to="/contact" 
              className="bg-arch-gold text-arch-navy px-8 py-3 font-medium rounded hover:bg-white transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
