
import { useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

// Define project categories
const categories = ['All', 'Residential', 'Commercial', 'Renovation'];

// Project data
const projects = [
  {
    id: 1,
    title: 'Modern Family Home',
    description: 'A contemporary 4-bedroom family home with sustainable features and open-concept design.',
    image: '/lovable-uploads/9639e92e-28d5-4b64-a7bd-c6f5982cb61a.png',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2023'
  },
  {
    id: 2,
    title: 'Office Complex',
    description: 'A multi-story office building with modern amenities and energy-efficient systems.',
    image: '/lovable-uploads/a0e2168b-d411-46c9-8eec-45d545588260.png',
    category: 'Commercial',
    location: 'Luweero, Uganda',
    year: '2022'
  },
  {
    id: 3,
    title: 'Historic House Renovation',
    description: 'Careful restoration of a colonial-era home with modern updates while preserving historical elements.',
    image: '/lovable-uploads/28cef5c4-7df4-4b0a-8977-da34130766cc.png',
    category: 'Renovation',
    location: 'Entebbe, Uganda',
    year: '2023'
  },
  {
    id: 4,
    title: 'Luxury Apartment Complex',
    description: 'High-end residential development featuring premium finishes and community amenities.',
    image: '/lovable-uploads/27e1ffd7-5ac0-4a89-97df-5f1652a1484c.png',
    category: 'Residential',
    location: 'Kampala, Uganda',
    year: '2022'
  },
  {
    id: 5,
    title: 'Shopping Mall',
    description: 'Mixed-use retail space with modern design elements and efficient traffic flow.',
    image: '/lovable-uploads/d1d33731-fa6a-491a-8d63-d700a324d7e6.png',
    category: 'Commercial',
    location: 'Jinja, Uganda',
    year: '2021'
  },
  {
    id: 6,
    title: 'Hotel Renovation',
    description: 'Complete overhaul of existing hotel property with updated amenities and design.',
    image: '/lovable-uploads/91cf1076-7091-4501-ac07-b5a7e0f5649b.png',
    category: 'Renovation',
    location: 'Gulu, Uganda',
    year: '2023'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <SEO 
        title="Portfolio" 
        description="Explore our portfolio of residential, commercial and renovation projects across Uganda."
        keywords="architecture portfolio, construction projects, Uganda architecture, building projects"
      />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-r from-arch-navy to-arch-navy/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-gray-100 mb-8">
              Explore our diverse collection of completed projects spanning residential, 
              commercial, and renovation work across Uganda.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 bg-white" id="portfolio">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="All" className="w-full mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-white">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-arch-gold data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Pagination */}
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-arch-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-arch-navy mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-arch-gray-800 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can bring your vision to life with our expertise in architecture and construction.
          </p>
          <Button 
            className="bg-arch-gold hover:bg-arch-gold/90 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-arch-navy">{project.title}</CardTitle>
        <CardDescription className="text-arch-gray-800">
          {project.location} | {project.year}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-arch-gray-800">{project.description}</p>
      </CardContent>
      <CardFooter>
        <div className="inline-block px-3 py-1 bg-arch-navy/10 text-arch-navy text-sm rounded">
          {project.category}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
