import { useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ExpertiseSection from '@/components/ExpertiseSection';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

// About page components
import AboutHero from '@/components/about/AboutHero';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';
import StatsSection from '@/components/about/StatsSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const serviceCards = [
    {
      title: "Traditional house",
      description: "Construction of houses with a long-term guarantee.",
      backgroundImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modern house",
      description: "Construction of houses with a long-term guarantee.",
      backgroundImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobile home",
      description: "Construction of houses with a long-term guarantee.",
      backgroundImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const offerItems = [
    { title: "Cosmetic repairs", price: "2500" },
    { title: "Major repairs", price: "5000" },
    { title: "House construction", price: "15000" },
    { title: "Design project", price: "1000" },
    { title: "Log house", price: "8000" },
    { title: "Frame house", price: "12000" }
  ];

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
      image: "https://images.unsplash.com/photo-1574359411659-11a7e1634f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1392&q=80",
      features: [
        "Kitchen and bathroom remodeling",
        "Home additions and extensions",
        "Interior and exterior renovations",
        "Historic restoration"
      ]
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Luweero", "Uganda"]
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+256 702 318 582", "+256 774 136 510"]
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@archfic.com", "support@archfic.com"]
    }
  ];

  return (
    <main>
      <SEO 
        title="ArchFic Investment Ltd - Architecture & Construction Services in Luweero, Uganda" 
        description="ArchFic Investment Ltd is a leading architecture and construction company in Luweero, Uganda offering residential and commercial construction, renovations, and architectural design services."
        keywords="architecture, construction, Uganda, Luweero, building design, residential construction, commercial construction, renovation"
        url="/"
      />
      
      {/* Hero Section - Home */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <section id="about" className="scroll-mt-20">
        <WhoWeAreSection />
        <MissionVisionSection />
        <CoreValuesSection />
        <WhyChooseUsSection />
        <StatsSection />
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={index}
                title={card.title}
                description={card.description}
                backgroundImage={card.backgroundImage}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
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
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
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
                  
                  <a 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center text-arch-navy border-b-2 border-arch-gold pb-1 transition-all duration-300 hover:text-arch-gold"
                  >
                    Request Service <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Offers</h2>
            </div>
            <p className="text-arch-gray-800 max-w-lg">
              We regularly expand the range of services to make our customers feel comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-arch-gray-200 hover:border-arch-gold transition-all duration-300 p-6 rounded-sm"
              >
                <h3 className="text-arch-navy font-medium text-lg mb-2">{item.title}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-arch-gray-800">from</span>
                  <span className="text-arch-navy font-medium text-xl mx-2">${item.price}</span>
                  <span className="text-arch-gray-800">per</span>
                </div>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-sm font-medium text-arch-navy group-hover:text-arch-gold transition-colors duration-300"
                >
                  Order Now <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-arch-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">What Our Clients Say</h2>
            </div>
            <p className="text-arch-gray-800 max-w-2xl mx-auto">
              Don't just take our word for it. Hear what our clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-white p-8 rounded-sm shadow-md highlight-hover"
              >
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-arch-gold" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-arch-gray-800 mb-6 italic">
                  "ArchFic Investment delivered our dream home on time and within budget. Their attention to detail and commitment to quality craftsmanship exceeded our expectations."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-arch-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-medium text-arch-navy">John Doe</h4>
                    <p className="text-sm text-arch-gray-800">Residential Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-arch-gray-100 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Contact Us</h2>
            </div>
            <p className="text-arch-gray-800 max-w-2xl mx-auto">
              Have questions or ready to start your project? Contact us today for a consultation. 
              Our team is ready to help bring your vision to life.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-sm text-center shadow-md"
              >
                <div className="w-16 h-16 bg-arch-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon size={24} className="text-arch-gold" />
                </div>
                <h3 className="text-xl font-semibold text-arch-navy mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-arch-gray-800">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white p-8 rounded-sm shadow-md">
              <h2 className="text-2xl font-semibold text-arch-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-arch-gray-800 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-arch-gray-300 rounded-sm focus:outline-none focus:border-arch-gold transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-arch-gray-800 mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-arch-gray-300 rounded-sm focus:outline-none focus:border-arch-gold transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-arch-gray-800 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-arch-gray-300 rounded-sm focus:outline-none focus:border-arch-gold transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-arch-gray-800 mb-2">Subject *</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-arch-gray-300 rounded-sm focus:outline-none focus:border-arch-gold transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Quote">Project Quote</option>
                      <option value="Architectural Design">Architectural Design</option>
                      <option value="Construction Services">Construction Services</option>
                      <option value="Renovation">Renovation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-arch-gray-800 mb-2">Your Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-arch-gray-300 rounded-sm focus:outline-none focus:border-arch-gold transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-arch-navy text-white px-8 py-3 rounded-sm hover:bg-arch-gold transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
            
            {/* Map */}
            <div>
              <div className="bg-white p-8 rounded-sm shadow-md h-full">
                <h2 className="text-2xl font-semibold text-arch-navy mb-6">Our Location</h2>
                
                <div className="relative h-[400px] rounded-sm overflow-hidden bg-arch-gray-200">
                  {/* This is a placeholder for the map. In a real project, you would integrate Google Maps or another mapping solution */}
                  <div className="absolute inset-0 flex items-center justify-center bg-arch-gray-200">
                    <div className="text-center">
                      <MapPin size={48} className="mx-auto text-arch-navy opacity-20 mb-4" />
                      <p className="text-arch-gray-800">Map would be displayed here</p>
                      <p className="text-arch-gray-800 mt-2">Luweero, Uganda</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="bg-arch-gold text-arch-navy px-8 py-3 font-medium rounded hover:bg-white transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
