
import { FadeIn } from './FadeIn';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 overflow-hidden">
      {/* Full width hero image */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/innovative-homepage-magic/images/Image1.jpeg)', 
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Centered text overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <FadeIn delay={300}>
              <div className="flex justify-center">
                <img 
                  src="/innovative-homepage-magic/images/image_logo_w1.svg" 
                  alt="Hustar Logo" 
                  className="h-20 sm:h-24 md:h-32 w-auto" 
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

    </section>
  );
}
