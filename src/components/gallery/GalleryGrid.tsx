
import React from 'react';
import { GalleryCategory } from '@/pages/Gallery';
import { GalleryItem } from '@/data/galleryData';
import GalleryCard from './GalleryCard';
import { Button } from '@/components/ui/button';
import { Image, ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
  activeFilter: GalleryCategory;
  setFilter: (filter: GalleryCategory) => void;
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
}

const GalleryGrid = ({ 
  items, 
  activeFilter, 
  setFilter,
  page,
  setPage,
  itemsPerPage
}: GalleryGridProps) => {
  const categories: { value: GalleryCategory; label: string; icon: React.ReactNode }[] = [
    { value: 'all', label: 'All Projects', icon: <Image size={18} /> },
    { value: 'residential', label: 'Residential', icon: <ImageIcon size={18} /> },
    { value: 'commercial', label: 'Commercial', icon: <ImageIcon size={18} /> },
    { value: 'interiors', label: 'Interiors', icon: <ImageIcon size={18} /> },
    { value: 'renovations', label: 'Renovations', icon: <ImageIcon size={18} /> },
  ];

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-arch-navy mb-4">
            Explore Our <span className="text-arch-gold">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our diverse portfolio of successful projects, showcasing our commitment to 
            quality craftsmanship and innovative design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeFilter === category.value ? "default" : "outline"}
                className={`
                  flex items-center gap-2 px-4 py-2
                  ${activeFilter === category.value ? 'bg-arch-navy' : 'text-arch-navy'}
                `}
                onClick={() => setFilter(category.value)}
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        {paginatedItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedItems.map((item) => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <Button 
                  variant="outline" 
                  onClick={handlePrevPage} 
                  disabled={page === 1}
                  className="flex items-center gap-1"
                >
                  <ChevronLeft size={16} />
                  Previous
                </Button>
                
                <div className="text-sm text-gray-600">
                  Page {page} of {totalPages}
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={handleNextPage} 
                  disabled={page === totalPages}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRight size={16} />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
