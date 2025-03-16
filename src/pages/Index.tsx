
import { useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ExpertiseSection from '@/components/ExpertiseSection';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/data/services';
import ServicesList from '@/components/services/ServicesList';
import ServicesCta from '@/components/services/ServicesCta';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

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

  const [visibleSections, setVisibleSections] = useState<{
    [key: string]: boolean;
  }>({
    hero: false,
    about: false,
    services: false,
    expertise: false,
    testimonials: false,
    contact: false
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
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
      backgroundImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }, 
    {
      title: "Mobile home",
      description: "Construction of houses with a long-term guarantee.",
      backgroundImage: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
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

      {/* Services Section - Using the ServicesList component */}
      <section id="services" className="bg-white scroll-mt-20">
        <ServicesList services={services.slice(0, 5)} isVisible={visibleSections.services} />
      </section>

      {/* Testimonials Section - Using the new TestimonialsSection component */}
      <TestimonialsSection isVisible={visibleSections.testimonials} />

      {/* Contact Section - Using the new ContactSection component */}
      <ContactSection isVisible={visibleSections.contact} />

      {/* CTA - Using the ServicesCta component */}
      <ServicesCta />
    </main>
  );
};

export default Index;
