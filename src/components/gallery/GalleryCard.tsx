
import React from 'react';
import { GalleryItem } from '@/data/galleryData';
import { Card, CardContent } from '@/components/ui/card';
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
      <div className="relative">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="inline-block px-3 py-1 bg-arch-gold text-arch-navy text-xs font-medium rounded mb-2 capitalize">
            {item.category}
          </span>
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-200 text-sm">{item.location}</p>
        </div>
      </div>
      <CardContent className="p-4 md:p-6">
        <h3 className="font-semibold text-lg text-arch-navy mb-1">{item.title}</h3>
        <p className="text-gray-500 text-sm mb-2">{item.location}</p>
        <p className="text-gray-600 line-clamp-2">{item.description}</p>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
