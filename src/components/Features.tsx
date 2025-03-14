
import { FadeIn } from './FadeIn';
import { AnimatedImage } from './AnimatedImage';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Modern Design',
    description: 'Sleek interfaces that adapt to any device with precision and elegance.',
    icon: '✨',
  },
  {
    title: 'Performance',
    description: 'Lightning-fast experiences built with the latest optimization techniques.',
    icon: '⚡',
  },
  {
    title: 'Scalability',
    description: 'Solutions that grow with your business, from startups to enterprises.',
    icon: '📈',
  },
  {
    title: 'Security',
    description: 'Best-in-class protection for your data and your users\' information.',
    icon: '🔒',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Why Choose Us
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Exceptional Features for Modern Solutions
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine cutting-edge technology with thoughtful design to create digital experiences that stand out in today's competitive landscape.
            </p>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn 
              key={index} 
              delay={300 + index * 100} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=80"
                alt="Technology Innovation"
                className="rounded-2xl"
                hoverAnimation="scale"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full opacity-70 animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-100 rounded-full opacity-70 animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Our Approach
              </span>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                A Perfect Blend of Design and Functionality
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-muted-foreground">
                Our design philosophy emphasizes clean aesthetics with intuitive user experiences. We believe the best digital products are both beautiful and functional.
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <ul className="space-y-4 mt-6">
                {[
                  'User-centered design approach',
                  'Performance-focused development',
                  'Accessibility as a standard',
                  'Mobile-first responsive design',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn delay={400}>
              <Button className="mt-6 rounded-full group">
                <span>Learn more about our process</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
