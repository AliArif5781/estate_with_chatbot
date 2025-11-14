import AgentCard from '../AgentCard';
import agentImage from '@assets/generated_images/Female_agent_headshot_295a80fa.png';

export default function AgentCardExample() {
  return (
    <div className="max-w-xs">
      <AgentCard
        name="Sarah Johnson"
        image={agentImage}
        specialization="Luxury Properties"
        rating={4.9}
        propertiesSold={127}
        onContact={() => console.log('Contact agent')}
      />
    </div>
  );
}
