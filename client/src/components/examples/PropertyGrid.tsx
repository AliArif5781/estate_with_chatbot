import PropertyGrid from '../PropertyGrid';
import suburbanHome from '@assets/generated_images/Modern_suburban_family_home_da32e32b.png';
import waterfrontVilla from '@assets/generated_images/Waterfront_luxury_villa_93fdeb3d.png';
import colonialHouse from '@assets/generated_images/Classic_colonial_house_5f1f450a.png';
import urbanCondo from '@assets/generated_images/Urban_luxury_condo_2db3916d.png';
import craftsman from '@assets/generated_images/Craftsman_bungalow_home_d1ff7fa3.png';
import mediterranean from '@assets/generated_images/Mediterranean_villa_9aaacac6.png';

//todo: remove mock functionality
const properties = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
    image: colonialHouse,
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
    image: urbanCondo,
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
    image: craftsman,
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
    image: mediterranean,
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

export default function PropertyGridExample() {
  return <PropertyGrid properties={properties} />;
}
