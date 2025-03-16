
import { useEffect, useState } from 'react';
import SEO from '@/components/SEO';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryItems } from '@/data/galleryData';

export type GalleryCategory = 'all' | 'residential' | 'commercial' | 'interiors' | 'renovations';

const Gallery = () => {
  const [filter, setFilter] = useState<GalleryCategory>('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      />
    </main>
  );
};

export default Gallery;
