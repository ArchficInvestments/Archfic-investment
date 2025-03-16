
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
}

const TestimonialsSection = ({ isVisible }: { isVisible: boolean }) => {
  const testimonials: Testimonial[] = [
    { name: "Dembe Derrick" },
    { name: "Ssemakula Yashin" },
    { name: "Namiro Annet" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-arch-gray-100">
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
          {testimonials.map((testimonial, item) => (
            <div key={item} className="bg-white p-8 rounded-sm shadow-md highlight-hover">
              <div className="flex mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} className="w-5 h-5 text-arch-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-arch-gray-800 mb-6 italic">
                "ArchFic Investment delivered our dream home on time and within budget. Their attention to detail and commitment to quality craftsmanship exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-medium text-arch-navy">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
