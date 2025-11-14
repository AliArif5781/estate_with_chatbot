import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Star } from 'lucide-react';

interface AgentCardProps {
  name: string;
  image: string;
  specialization: string;
  rating: number;
  propertiesSold: number;
  onContact?: () => void;
}

export default function AgentCard({
  name,
  image,
  specialization,
  rating,
  propertiesSold,
  onContact,
}: AgentCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="p-6 hover-elevate" data-testid="card-agent">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        
        <h3 className="font-semibold text-lg mb-1" data-testid="text-agent-name">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3" data-testid="text-specialization">
          {specialization}
        </p>
        
        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 fill-secondary text-secondary" />
          <span className="font-medium" data-testid="text-rating">{rating}</span>
          <span className="text-sm text-muted-foreground">rating</span>
        </div>
        
        <Badge variant="secondary" className="mb-4" data-testid="badge-properties-sold">
          {propertiesSold} Properties Sold
        </Badge>
        
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="icon" data-testid="button-phone">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" data-testid="button-email">
            <Mail className="h-4 w-4" />
          </Button>
          <Button 
            className="flex-1" 
            onClick={onContact}
            data-testid="button-contact"
          >
            Contact
          </Button>
        </div>
      </div>
    </Card>
  );
}
