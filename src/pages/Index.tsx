
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ExpertiseSection from '@/components/ExpertiseSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <main>
      <SEO 
        title="Home" 
        description="ArchFic Investment Ltd is a leading architecture and construction company in Luweero, Uganda offering residential and commercial construction, renovations, and architectural design services."
        keywords="architecture, construction, Uganda, Luweero, building design, residential construction, commercial construction, renovation"
        url="/"
      />
      
      <HeroSection />

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
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-sm font-medium text-arch-navy group-hover:text-arch-gold transition-colors duration-300"
                >
                  Order Now <ArrowRight size={16} className="ml-2" />
                </Link>
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

export default Index;
