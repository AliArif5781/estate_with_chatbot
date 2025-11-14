import { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';

//todo: remove mock functionality
interface Property {
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
}

const mockProperties: Property[] = [
  {
    id: '1',
    image: '',
    price: '549,000',
    address: '123 Maple Street',
    city: 'Portland',
    state: 'OR',
    beds: 4,
    baths: 3,
    sqft: '2,450',
    newListing: true,
  },
  {
    id: '2',
    image: '',
    price: '1,250,000',
    address: '456 Ocean Drive',
    city: 'Malibu',
    state: 'CA',
    beds: 5,
    baths: 4,
    sqft: '3,800',
    featured: true,
  },
  {
    id: '3',
    image: '',
    price: '875,000',
    address: '789 Colonial Way',
    city: 'Boston',
    state: 'MA',
    beds: 4,
    baths: 3,
    sqft: '3,200',
  },
  {
    id: '4',
    image: '',
    price: '695,000',
    address: '321 Downtown Plaza',
    city: 'Seattle',
    state: 'WA',
    beds: 2,
    baths: 2,
    sqft: '1,850',
  },
  {
    id: '5',
    image: '',
    price: '425,000',
    address: '654 Craftsman Lane',
    city: 'Austin',
    state: 'TX',
    beds: 3,
    baths: 2,
    sqft: '1,920',
  },
  {
    id: '6',
    image: '',
    price: '1,850,000',
    address: '987 Mediterranean Court',
    city: 'Miami',
    state: 'FL',
    beds: 6,
    baths: 5,
    sqft: '4,500',
    featured: true,
  },
];

interface PropertyGridProps {
  properties?: Property[];
}

export default function PropertyGrid({ properties = mockProperties }: PropertyGridProps) {
  const [sortBy, setSortBy] = useState('newest');

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <p className="text-muted-foreground" data-testid="text-results-count">
              Showing {properties.length} properties
            </p>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-initial" data-testid="button-filters">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]" data-testid="select-sort">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="beds">Most Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onFavorite={() => console.log('Favorited:', property.id)}
              onClick={() => console.log('View property:', property.id)}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" data-testid="button-load-more">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
