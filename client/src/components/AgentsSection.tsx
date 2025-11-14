import AgentCard from './AgentCard';
import { Button } from '@/components/ui/button';

//todo: remove mock functionality
const mockAgents = [
  {
    id: '1',
    name: 'Sarah Johnson',
    image: '',
    specialization: 'Luxury Properties',
    rating: 4.9,
    propertiesSold: 127,
  },
  {
    id: '2',
    name: 'Michael Chen',
    image: '',
    specialization: 'Commercial Real Estate',
    rating: 4.8,
    propertiesSold: 94,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    image: '',
    specialization: 'First-Time Buyers',
    rating: 5.0,
    propertiesSold: 156,
  },
];

interface AgentsSectionProps {
  agents?: typeof mockAgents;
}

export default function AgentsSection({ agents = mockAgents }: AgentsSectionProps) {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-4xl font-semibold mb-3" data-testid="text-agents-title">
            Meet Our Top Agents
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Work with experienced professionals who know the market inside out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {agents.map((agent) => (
            <AgentCard
              key={agent.id}
              {...agent}
              onContact={() => console.log('Contact agent:', agent.id)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" data-testid="button-view-all-agents">
            View All Agents
          </Button>
        </div>
      </div>
    </section>
  );
}
