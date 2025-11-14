import FeaturedProperties from '../FeaturedProperties';
import suburbanHome from '@assets/generated_images/Modern_suburban_family_home_da32e32b.png';
import waterfrontVilla from '@assets/generated_images/Waterfront_luxury_villa_93fdeb3d.png';
import colonialHouse from '@assets/generated_images/Classic_colonial_house_5f1f450a.png';

//todo: remove mock functionality
const properties = [
  {
    id: '1',
    image: waterfrontVilla,
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
    image: suburbanHome,
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
    image: colonialHouse,
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

export default function FeaturedPropertiesExample() {
  return <FeaturedProperties properties={properties} />;
}
