
import React from 'react';
import { GalleryCategory } from '@/pages/Gallery';
import { GalleryItem } from '@/data/galleryData';
import GalleryCard from './GalleryCard';

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
  const filteredItems = activeFilter === 'all' 
    ? items 
    : items.filter(item => item.category === activeFilter);

  return (
    <section className="py-8 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
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
