
import { FadeIn } from './FadeIn';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 overflow-hidden">
      {/* Full width hero image */}
      <div className="w-full h-[600px] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/innovative-homepage-magic/images/hero-bg.png)', 
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <FadeIn delay={300}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Hustar
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>

    </section>
  );
}
