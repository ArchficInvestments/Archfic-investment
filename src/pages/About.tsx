
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import AboutHero from '@/components/about/AboutHero';
import WhoWeAreSection from '@/components/about/WhoWeAreSection';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import CoreValuesSection from '@/components/about/CoreValuesSection';
import WhyChooseUsSection from '@/components/about/WhyChooseUsSection';
import StatsSection from '@/components/about/StatsSection';
import TeamSection from '@/components/about/TeamSection';
import CtaSection from '@/components/about/CtaSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20">
      <SEO 
        title="About Us" 
        description="Learn about ArchFic Investment Ltd, a leading architecture and construction company in Luweero, Uganda with over 7 years of experience building dreams since 2017."
        keywords="architecture company Uganda, construction experts, Luweero construction, building team, quality construction company"
        url="/about"
      />
      
      <AboutHero />
      <WhoWeAreSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TeamSection />
      <CtaSection />
    </main>
  );
};

export default About;
