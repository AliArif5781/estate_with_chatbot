import PropertyCard from '../PropertyCard';
import heroImage from '@assets/generated_images/Modern_suburban_family_home_da32e32b.png';

export default function PropertyCardExample() {
  return (
    <div className="max-w-sm">
      <PropertyCard
        id="1"
        image={heroImage}
        price="549,000"
        address="123 Oak Street"
        city="San Francisco"
        state="CA"
        beds={4}
        baths={3}
        sqft="2,450"
        featured
        newListing
        onFavorite={() => console.log('Favorited')}
        onClick={() => console.log('Property clicked')}
      />
    </div>
  );
}
