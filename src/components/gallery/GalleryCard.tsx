
import React from 'react';
import { GalleryItem } from '@/data/galleryData';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard = ({ item }: GalleryCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Create descriptive alt text based on item data
  const altText = item.title 
    ? `${item.title} - ${item.category} project by ArchFic Investment Ltd` 
    : `${item.category} architecture and construction project in Uganda by ArchFic Investment Ltd`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <AspectRatio ratio={4/3}>
        {isLoading && (
          <Skeleton className="absolute inset-0 z-10" />
        )}
        <img
          src={item.imageUrl}
          alt={altText}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setIsLoading(false)}
          loading="lazy"
          width="400"
          height="300"
        />
      </AspectRatio>
    </Card>
  );
};

export default GalleryCard;
