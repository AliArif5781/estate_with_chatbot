import PropertyCard from './PropertyCard';

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
    id: '2',
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
    id: '3',
    image: '',
    price: '875,000',
    address: '789 Colonial Way',
    city: 'Boston',
    state: 'MA',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    featured: true,
  },
];

interface FeaturedPropertiesProps {
  properties?: Property[];
}

export default function FeaturedProperties({ properties = mockProperties }: FeaturedPropertiesProps) {
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
          {properties.map((property) => (
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
