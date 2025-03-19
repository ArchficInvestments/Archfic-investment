import { useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import ProcessSection from '@/components/services/ProcessSection';
import ServicesCta from '@/components/services/ServicesCta';
import { services, processSteps } from '@/data/services';

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

  // Services page specific structured data
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "provider": {
        "@type": "Organization",
        "name": "ArchFic Investment Ltd",
        "url": "https://archfic.com"
      },
      "url": `https://archfic.com/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
    }))
  };

  return (
    <main className="pt-20">
      <SEO 
        title="Our Services" 
        description="Discover ArchFic Investment Ltd's comprehensive architecture and construction services including residential construction, commercial building, renovations, and architectural design."
        keywords="architecture services Uganda, construction services Luweero, building design, home construction, commercial construction, renovations"
        url="/services"
        structuredData={servicesStructuredData}
      />
      <ServicesHero isVisible={visibleSections.hero} />
      <ServicesList services={services} isVisible={visibleSections.services} />
      <ProcessSection processSteps={processSteps} isVisible={visibleSections.process} />
      <ServicesCta />
    </main>
  );
};

export default Services;
