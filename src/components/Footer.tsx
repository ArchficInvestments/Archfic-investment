
import CompanySection from './footer/CompanySection';
import ServicesSection from './footer/ServicesSection';
import QuickLinks from './footer/QuickLinks';
import ContactInfo from './footer/ContactInfo';
import Copyright from './footer/Copyright';

const Footer = () => {
  return (
    <footer className="bg-arch-navy text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <CompanySection />
          <ServicesSection />
          <QuickLinks />
          <ContactInfo />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
