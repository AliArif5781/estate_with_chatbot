import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, Home } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-semibold">Premier Properties</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by location, property type..."
                className="pl-10"
                data-testid="input-search"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <Button variant="ghost" asChild data-testid="link-buy">
              <Link href="/buy">Buy</Link>
            </Button>
            <Button variant="ghost" asChild data-testid="link-sell">
              <Link href="/sell">Sell</Link>
            </Button>
            <Button variant="ghost" asChild data-testid="link-rent">
              <Link href="/rent">Rent</Link>
            </Button>
            <Button variant="ghost" asChild data-testid="link-agents">
              <Link href="/agents">Agents</Link>
            </Button>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="outline" data-testid="button-signin">Sign In</Button>
            <Button data-testid="button-list-property">List Your Property</Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t">
            <div className="pb-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search properties..."
                  className="pl-10"
                  data-testid="input-mobile-search"
                />
              </div>
            </div>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/buy">Buy</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/sell">Sell</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/rent">Rent</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/agents">Agents</Link>
            </Button>
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">List Your Property</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
