
import { useEffect, useState } from 'react';
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

  return (
    <main className="pt-20">
      <ServicesHero isVisible={visibleSections.hero} />
      <ServicesList services={services} isVisible={visibleSections.services} />
      <ProcessSection processSteps={processSteps} isVisible={visibleSections.process} />
      <ServicesCta />
    </main>
  );
};

export default Services;
