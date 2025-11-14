import PropertyCard from './PropertyCard';
import { useQuery } from '@tanstack/react-query';
import type { Property } from '@shared/schema';

export default function FeaturedProperties() {
  const { data: properties = [], isLoading } = useQuery<Property[]>({
    queryKey: ['/api/properties'],
  });

  if (isLoading) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-4xl font-semibold mb-3" data-testid="text-section-title">
              Featured Properties
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our hand-picked selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[400px] bg-muted animate-pulse rounded-md" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const featuredProperties = properties.slice(0, 3);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-4xl font-semibold mb-3" data-testid="text-section-title">
            Featured Properties
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our hand-picked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onFavorite={() => console.log('Favorited:', property.id)}
              onClick={() => console.log('View property:', property.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
