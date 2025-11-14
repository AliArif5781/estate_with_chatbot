import { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { Property } from '@shared/schema';

export default function PropertyGrid() {
  const [sortBy, setSortBy] = useState('newest');
  const { data: properties = [], isLoading } = useQuery<Property[]>({
    queryKey: ['/api/properties'],
  });

  if (isLoading) {
    return (
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="h-6 w-32 bg-muted animate-pulse rounded" />
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="h-10 w-24 bg-muted animate-pulse rounded" />
              <div className="h-10 w-40 bg-muted animate-pulse rounded" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[400px] bg-muted animate-pulse rounded-md" />
            ))}
          </div>
        </div>
      </section>
    );
  }

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
