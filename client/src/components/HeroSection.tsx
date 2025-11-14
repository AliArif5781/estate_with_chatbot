import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import heroImage from '@assets/generated_images/Luxury_home_hero_image_7d14fba7.png';

export default function HeroSection() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    console.log('Search:', { location, propertyType, priceRange });
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl text-white/90" data-testid="text-hero-subtitle">
            Discover the perfect property from our curated collection of luxury homes
          </p>
        </div>

        <div className="w-full max-w-4xl bg-background/95 backdrop-blur-md rounded-lg p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <Input
                placeholder="Location (City, ZIP)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-12"
                data-testid="input-location"
              />
            </div>
            
            <div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-12" data-testid="select-property-type">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="h-12" data-testid="select-price-range">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-300k">$0 - $300k</SelectItem>
                  <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                  <SelectItem value="500k-750k">$500k - $750k</SelectItem>
                  <SelectItem value="750k-1m">$750k - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button 
            className="w-full h-12 text-base" 
            onClick={handleSearch}
            data-testid="button-search"
          >
            <Search className="mr-2 h-5 w-5" />
            Search Properties
          </Button>
        </div>
      </div>
    </div>
  );
}
