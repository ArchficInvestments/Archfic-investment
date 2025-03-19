
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

  // Gallery page specific structured data
  const galleryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "ArchFic Investment Ltd Project Gallery",
    "description": "Browse our portfolio of completed architecture and construction projects across Uganda, showcasing our expertise in residential, commercial, and interior design.",
    "url": "https://archficinvestmentsltd.com/gallery",
    "image": galleryItems.slice(0, 5).map(item => item.imageUrl),
    "about": {
      "@type": "Thing",
      "name": "Architecture and Construction Projects",
      "description": "Visual showcase of our residential and commercial construction projects completed in Uganda."
    }
  };

  return (
    <main>
      <SEO 
        title="Project Gallery" 
        description="Browse our portfolio of completed architecture and construction projects across Uganda, showcasing our expertise in residential, commercial, and interior design."
        keywords="architecture gallery, construction photos, building projects, Uganda construction portfolio, Luweero building works"
        url="/gallery"
        structuredData={galleryStructuredData}
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
