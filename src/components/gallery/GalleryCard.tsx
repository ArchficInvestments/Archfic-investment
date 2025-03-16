
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

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <AspectRatio ratio={4/3}>
        {isLoading && (
          <Skeleton className="absolute inset-0 z-10" />
        )}
        <img
          src={item.imageUrl}
          alt={item.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          onLoad={() => setIsLoading(false)}
        />
      </AspectRatio>
    </Card>
  );
};

export default GalleryCard;
