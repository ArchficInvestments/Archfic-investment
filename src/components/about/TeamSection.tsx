
import React from 'react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
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

  return (
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
  );
};

export default TeamSection;
