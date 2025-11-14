import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  image: string;
  price: string;
  address: string;
  city: string;
  state: string;
  beds: number;
  baths: number;
  sqft: string;
  featured?: boolean;
  newListing?: boolean;
  onFavorite?: () => void;
  onClick?: () => void;
}

export default function PropertyCard({
  image,
  price,
  address,
  city,
  state,
  beds,
  baths,
  sqft,
  featured,
  newListing,
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
          src={image}
          alt={address}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid="img-property"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {featured && (
            <Badge className="bg-secondary text-secondary-foreground" data-testid="badge-featured">
              Featured
            </Badge>
          )}
          {newListing && (
            <Badge className="bg-primary text-primary-foreground" data-testid="badge-new">
              New Listing
            </Badge>
          )}
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
            ${price}
          </p>
        </div>
        
        <div className="mb-3">
          <p className="font-medium text-foreground" data-testid="text-address">{address}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span data-testid="text-location">{city}, {state}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-3">
          <div className="flex items-center gap-1" data-testid="text-beds">
            <Bed className="h-4 w-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1" data-testid="text-baths">
            <Bath className="h-4 w-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1" data-testid="text-sqft">
            <Square className="h-4 w-4" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
