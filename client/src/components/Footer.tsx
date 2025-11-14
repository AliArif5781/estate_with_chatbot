import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-semibold">Premier Properties</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted partner in finding the perfect home. Professional real estate services since 2005.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="button-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/buy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link href="/rent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-muted-foreground hover:text-foreground transition-colors">
                  Find Agents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/houses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link href="/condos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Condos
                </Link>
              </li>
              <li>
                <Link href="/townhouses" className="text-muted-foreground hover:text-foreground transition-colors">
                  Townhouses
                </Link>
              </li>
              <li>
                <Link href="/land" className="text-muted-foreground hover:text-foreground transition-colors">
                  Land
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Subscribe to our newsletter for the latest listings and market insights.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 Premier Properties. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
