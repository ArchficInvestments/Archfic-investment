
import { useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Jane Smith",
      position: "Principal Architect",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Mike Johnson",
      position: "Construction Manager",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sarah Williams",
      position: "Interior Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
  ];

  const stats = [
    { value: "7+", label: "Years of Experience" },
    { value: "250+", label: "Projects Completed" },
    { value: "50+", label: "Professional Staff" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  const coreValues = [
    { 
      title: "Excellence & Innovation", 
      description: "We combine cutting-edge design with precision construction."
    },
    { 
      title: "Integrity & Transparency", 
      description: "We build trust through honesty and professionalism."
    },
    { 
      title: "Sustainability & Quality", 
      description: "We use eco-friendly, high-quality materials to create lasting structures."
    },
    { 
      title: "Client-Centric Approach", 
      description: "Every project is customized to meet unique needs and exceed expectations."
    }
  ];

  const whyChooseUs = [
    "7+ years of expertise in architecture and construction",
    "Custom-tailored designs for residential and commercial projects",
    "Timely project completion without compromising quality",
    "Advanced technology & sustainable solutions for modern living"
  ];

  return (
    <main className="pt-20">
      <SEO 
        title="About Us" 
        description="Learn about ArchFic Investment Ltd, a leading architecture and construction company in Luweero, Uganda with over 7 years of experience building dreams since 2017."
        keywords="architecture company Uganda, construction experts, Luweero construction, building team, quality construction company"
        url="/about"
      />
      
      {/* Hero */}
      <section className="relative py-20 bg-arch-navy overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1541976490233-5be7220ae911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")', 
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-block mb-2 text-arch-gold font-medium uppercase tracking-widest text-sm gold-box pl-6 pt-5 pb-2">
              ABOUT US
            </div>
            <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
              Building Dreams Since 2017
            </h1>
            <p className="text-white/80 mb-8 max-w-2xl">
              ArchFic Investment Ltd. is a leading architecture and construction company in Luweero, Uganda, 
              delivering innovative designs and quality construction for residential and commercial clients.
            </p>
          </div>
        </div>
      </section>
      
      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" 
                  alt="ArchFic Investment team at construction site" 
                  className="w-full h-auto"
                  loading="lazy"
                  width="1331"
                  height="888"
                />
                
                {/* Yellow corner frame */}
                <div className="absolute top-[-20px] left-[-20px] w-[100px] h-[100px] border-t-4 border-l-4 border-arch-gold"></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
                <h2 className="text-2xl font-semibold text-arch-navy">Who We Are</h2>
              </div>
              
              <p className="text-arch-gray-800 mb-6">
                Founded in 2017, ArchFic Investment Ltd. is a premier architecture and building company based in Luweero, Uganda. 
                With over 7 years of industry experience, we specialize in architectural design, construction, and project 
                management, delivering high-quality solutions tailored to our clients' needs.
              </p>
              
              <p className="text-arch-gray-800 mb-6">
                Our expertise spans residential, commercial, and industrial projects, ensuring innovative designs 
                and durable structures that stand the test of time. At ArchFic Investment Ltd., we don't just build 
                structures—we create lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-arch-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 shadow-sm rounded-sm">
              <div className="flex items-center mb-4">
                <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
                <h2 className="text-2xl font-semibold text-arch-navy">Our Mission</h2>
              </div>
              <p className="text-arch-gray-800">
                To provide exceptional architectural and construction services that enhance communities, 
                improve lifestyles, and contribute to Uganda's growing infrastructure.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-8 shadow-sm rounded-sm">
              <div className="flex items-center mb-4">
                <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
                <h2 className="text-2xl font-semibold text-arch-navy">Our Vision</h2>
              </div>
              <p className="text-arch-gray-800">
                To be a leading force in architecture and construction in Uganda, setting industry standards 
                in innovation, sustainability, and quality craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Our Core Values</h2>
              <div className="w-6 h-[2px] bg-arch-gold ml-3"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 border border-arch-gray-200 rounded-sm hover:border-arch-gold transition-colors duration-300">
                <div className="flex items-start mb-4">
                  <CheckCircle size={24} className="text-arch-gold mt-1 mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-medium text-arch-navy">{value.title}</h3>
                </div>
                <p className="text-arch-gray-800">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-arch-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
                <h2 className="text-2xl font-semibold text-white">Why Choose Us?</h2>
              </div>
              
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-arch-gold mt-1 mr-3 flex-shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="mb-6">
                  Whether you're looking to design your dream home or develop a commercial space, 
                  we bring your vision to life.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-arch-gold border-b-2 border-arch-gold pb-1 transition-all duration-300 hover:text-white"
                >
                  Contact Us <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Modern architectural design by ArchFic Investment" 
                  className="w-full h-auto"
                  loading="lazy"
                  width="1170"
                  height="780"
                />
                
                {/* Yellow corner frame */}
                <div className="absolute bottom-[-20px] right-[-20px] w-[100px] h-[100px] border-b-4 border-r-4 border-arch-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-arch-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-arch-gold mb-2">{stat.value}</div>
                <div className="text-arch-gray-800">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Our Expert Team</h2>
            </div>
            <p className="text-arch-gray-800 max-w-2xl mx-auto">
              Meet the talented professionals behind our success. Our team combines years of experience with fresh, 
              innovative ideas to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative highlight-hover">
                <div className="relative overflow-hidden rounded-sm">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.position} at ArchFic Investment`}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    width="687"
                    height="800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-medium text-lg">{member.name}</h3>
                    <p className="text-arch-gold">{member.position}</p>
                  </div>
                </div>
                <div className="p-4 text-center group-hover:bg-arch-navy transition-colors duration-300">
                  <h3 className="font-medium text-lg text-arch-navy group-hover:text-white transition-colors duration-300">{member.name}</h3>
                  <p className="text-arch-gray-800 group-hover:text-arch-gold transition-colors duration-300">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-arch-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-6 h-[2px] bg-arch-gold mr-3"></div>
              <h2 className="text-2xl font-semibold text-arch-navy">Ready To Start Your Project?</h2>
            </div>
            <p className="text-arch-gray-800 mb-8 max-w-2xl">
              Let's work together to bring your vision to life. Our team is ready to help with your next construction or renovation project.
            </p>
            <Link 
              to="/contact" 
              className="bg-arch-navy text-white px-8 py-3 font-medium rounded hover:bg-arch-gold transition-all duration-300 inline-flex items-center"
            >
              Contact Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
