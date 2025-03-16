
import { useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryItems } from '@/data/galleryData';

export type GalleryCategory = 'all' | 'residential' | 'commercial' | 'interiors' | 'renovations';

const Gallery = () => {
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 12;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset page when filter changes
  useEffect(() => {
    setPage(1);
  }, [filter]);

  return (
    <main>
      <SEO 
        title="Gallery" 
        description="Explore our project gallery"
        keywords="architecture gallery, construction photos, building projects"
        url="/gallery"
      />
      
      <GalleryHero />
      <GalleryGrid 
        items={galleryItems} 
        activeFilter={filter} 
        setFilter={setFilter} 
        page={page}
        setPage={setPage}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </main>
  );
};

export default Gallery;
