import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Bed, Bath, Square, MapPin } from 'lucide-react';
import type { Property } from '@shared/schema';

interface PropertyCardProps extends Property {
  onFavorite?: () => void;
  onClick?: () => void;
}

export default function PropertyCard({
  image,
  price,
  title,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  onFavorite,
  onClick,
}: PropertyCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group" 
      onClick={onClick}
      data-testid="card-property"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image || '/placeholder-property.jpg'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid="img-property"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-secondary text-secondary-foreground" data-testid="badge-type">
            {type}
          </Badge>
        </div>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onFavorite?.();
          }}
          data-testid="button-favorite"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <p className="text-2xl font-semibold text-foreground" data-testid="text-price">
            {price}
          </p>
        </div>
        
        <div className="mb-3">
          <p className="font-medium text-foreground" data-testid="text-address">{title}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span data-testid="text-location">{location}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-3">
          <div className="flex items-center gap-1" data-testid="text-beds">
            <Bed className="h-4 w-4" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1" data-testid="text-baths">
            <Bath className="h-4 w-4" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1" data-testid="text-sqft">
            <Square className="h-4 w-4" />
            <span>{area}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
