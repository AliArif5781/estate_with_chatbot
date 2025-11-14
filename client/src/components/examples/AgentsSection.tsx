import AgentsSection from '../AgentsSection';
import agent1 from '@assets/generated_images/Female_agent_headshot_295a80fa.png';
import agent2 from '@assets/generated_images/Male_agent_headshot_0bafd7f8.png';
import agent3 from '@assets/generated_images/Senior_agent_headshot_5f0f0ef2.png';

//todo: remove mock functionality
const agents = [
  {
    id: '1',
    name: 'Sarah Johnson',
    image: agent1,
    specialization: 'Luxury Properties',
    rating: 4.9,
    propertiesSold: 127,
  },
  {
    id: '2',
    name: 'Michael Chen',
    image: agent2,
    specialization: 'Commercial Real Estate',
    rating: 4.8,
    propertiesSold: 94,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    image: agent3,
    specialization: 'First-Time Buyers',
    rating: 5.0,
    propertiesSold: 156,
  },
];

export default function AgentsSectionExample() {
  return <AgentsSection agents={agents} />;
}
