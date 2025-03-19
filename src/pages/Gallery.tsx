
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

  // Enhanced Gallery page structured data
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
    },
    "datePublished": "2023-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": "ArchFic Investment Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": "https://archficinvestmentsltd.com/lovable-uploads/ac830e73-d4d5-47f3-98e7-6418329b7677.png"
      }
    },
    "offers": {
      "@type": "Offer",
      "description": "Contact us for a quote on your construction project",
      "url": "https://archficinvestmentsltd.com/contact"
    }
  };

  return (
    <main>
      <SEO 
        title="Project Gallery - Residential & Commercial Construction Portfolio" 
        description="Browse our portfolio of completed architecture and construction projects across Uganda, showcasing our expertise in residential, commercial, and interior design with high-quality craftsmanship."
        keywords="architecture gallery, construction photos, building projects, Uganda construction portfolio, Luweero building works, residential projects, commercial buildings, interior design Uganda"
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
