
import { Button } from '@/components/ui/button';
import { AnimatedImage } from './AnimatedImage';
import { FadeIn } from './FadeIn';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-70" />
      </div>
      
      <div className="container mx-auto px-4 pt-10 sm:pt-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
            <FadeIn delay={100}>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Modern Solutions
              </span>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary text-balance">
                Transforming Ideas into Digital Reality
              </h1>
            </FadeIn>
            
            <FadeIn delay={300}>
              <p className="text-lg text-muted-foreground">
                We create innovative digital experiences that connect brands with their audiences through thoughtful design and cutting-edge technology.
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="rounded-full px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Learn More
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={500} className="pt-6">
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground"> from over 2,000 reviews</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Right column - Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <FadeIn 
              direction="left" 
              delay={300} 
              className="w-full max-w-md mx-auto"
            >
              <div className="relative">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1500&q=80"
                  alt="Digital Innovation"
                  className="rounded-2xl shadow-2xl"
                  priority={true}
                  hoverAnimation="lift"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full animate-float opacity-70" />
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-100 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
