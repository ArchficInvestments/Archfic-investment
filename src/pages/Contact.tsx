import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
    // Open WhatsApp with the form data
    const phoneNumber = '+256702318582'; // Use the first phone number
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Show success message
    toast.success('Redirecting to WhatsApp...');
    
    // Clear form (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

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
    <main className="pt-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with ArchFic Investment Ltd. Contact our team for consultations, quotes, and inquiries about our architecture and construction services in Luweero, Uganda."
        keywords="contact ArchFic, construction consultation, architecture quote, Luweero builders, Uganda construction company contact"
        url="/contact"
      />
      
      {/* Hero */}
      <section className="relative py-20 bg-arch-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/cd434f2b-670a-41ea-aca2-d3c2b139c709.png")', 
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-block mb-2 text-arch-gold font-medium uppercase tracking-widest text-sm gold-box pl-6 pt-5 pb-2">
              CONTACT US
            </div>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-white/80 mb-8 max-w-2xl">
              Have questions or ready to start your project? Contact us today for a consultation. 
              Our team is ready to help bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-arch-gray-100 p-8 rounded-sm text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
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
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-20 bg-arch-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white p-8 rounded-sm shadow-md animate-fade-up">
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
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-arch-navy text-white px-8 py-3 rounded-sm hover:bg-arch-gold transition-colors duration-300"
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
                </Button>
              </form>
            </div>
            
            {/* Map */}
            <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
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
      
      {/* Consultation Banner */}
      <section className="py-16 bg-arch-navy">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-white mb-2">Request a Free Consultation</h2>
              <p className="text-white/70">Get expert advice on your construction or renovation project.</p>
            </div>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-arch-gold text-arch-navy px-8 py-3 font-medium rounded hover:bg-white transition-all duration-300"
            >
              Schedule Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
