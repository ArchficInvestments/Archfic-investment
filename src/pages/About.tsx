
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import AboutHero from '@/components/about/AboutHero';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';
import StatsSection from '@/components/about/StatsSection';
import CtaSection from '@/components/about/CtaSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // About page specific structured data
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ArchFic Investment Ltd",
      "description": "A leading architecture and construction company in Luweero, Uganda with over 7 years of experience building dreams since 2017.",
      "foundingDate": "2017",
      "founders": [
        {
          "@type": "Person",
          "name": "ArchFic Founder"
        }
      ],
      "numberOfEmployees": "20+",
      "slogan": "Building Dreams, Creating Futures",
      "areaServed": "Uganda",
      "award": "Best Construction Company in Luweero, 2022",
      "url": "https://archficinvestmentsltd.com/about"
    }
  };

  return (
    <main className="pt-20">
      <SEO 
        title="About Us" 
        description="Learn about ArchFic Investment Ltd, a leading architecture and construction company in Luweero, Uganda with over 7 years of experience building dreams since 2017."
        keywords="architecture company Uganda, construction experts, Luweero construction, building team, quality construction company"
        url="/about"
        structuredData={aboutStructuredData}
      />
      
      <AboutHero />
      <WhoWeAreSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CtaSection />
    </main>
  );
};

export default About;
