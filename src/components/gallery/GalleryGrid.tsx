
import React from 'react';
import { GalleryCategory } from '@/pages/Gallery';
import { GalleryItem } from '@/data/galleryData';
import GalleryCard from './GalleryCard';
import { Button } from '@/components/ui/button';
import { Image, ImageIcon } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
  activeFilter: GalleryCategory;
  setFilter: (filter: GalleryCategory) => void;
}

const GalleryGrid = ({ 
  items, 
  activeFilter, 
  setFilter,
}: GalleryGridProps) => {
  const categories: { value: GalleryCategory; label: string; icon: React.ReactNode }[] = [
    { value: 'all', label: 'All', icon: <Image size={18} /> },
    { value: 'residential', label: 'Residential', icon: <ImageIcon size={18} /> },
    { value: 'commercial', label: 'Commercial', icon: <ImageIcon size={18} /> },
    { value: 'interiors', label: 'Interiors', icon: <ImageIcon size={18} /> },
    { value: 'renovations', label: 'Renovations', icon: <ImageIcon size={18} /> },
  ];

  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section className="py-8 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
        
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryGrid;
