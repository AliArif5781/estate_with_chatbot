import { Card } from '@/components/ui/card';
import { Award, TrendingUp, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Knowledge',
    description: 'Over 18 years of experience in the real estate market with proven results.',
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description: 'Access to comprehensive market data and trends to make informed decisions.',
  },
  {
    icon: Shield,
    title: 'Trusted Service',
    description: 'Licensed professionals committed to protecting your interests every step.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our team is always available to answer your questions and provide guidance.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl font-semibold mb-3" data-testid="text-why-choose-title">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference with our dedicated team and professional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-feature-${index}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
