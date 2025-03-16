
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
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

  return (
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
  );
};

export default ContactForm;
