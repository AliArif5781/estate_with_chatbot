import Header from '@/components/Header';
import PropertyGrid from '@/components/PropertyGrid';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import suburbanHome from '@assets/generated_images/Modern_suburban_family_home_da32e32b.png';
import waterfrontVilla from '@assets/generated_images/Waterfront_luxury_villa_93fdeb3d.png';
import colonialHouse from '@assets/generated_images/Classic_colonial_house_5f1f450a.png';
import urbanCondo from '@assets/generated_images/Urban_luxury_condo_2db3916d.png';
import craftsman from '@assets/generated_images/Craftsman_bungalow_home_d1ff7fa3.png';
import mediterranean from '@assets/generated_images/Mediterranean_villa_9aaacac6.png';

//todo: remove mock functionality
const allProperties = [
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
    featured: false,
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
    newListing: false,
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
    featured: false,
    newListing: false,
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
    featured: false,
    newListing: false,
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
    featured: false,
    newListing: false,
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
    newListing: false,
  },
];

export default function Properties() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 pt-8">
          <h1 className="font-serif text-4xl font-semibold mb-2">Browse Properties</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Explore our complete collection of available properties
          </p>
        </div>
        <PropertyGrid properties={allProperties} />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
