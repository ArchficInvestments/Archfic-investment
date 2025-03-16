
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

const ContactFormMapSection = () => {
  return (
    <section className="py-20 bg-arch-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <ContactForm />
          
          {/* Map */}
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default ContactFormMapSection;
