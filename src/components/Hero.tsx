
import { Button } from '@/components/ui/button';
import { FadeIn } from './FadeIn';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 overflow-hidden">
      {/* Full width hero image */}
      <div className="w-full h-[600px] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/lovable-uploads/a65f08fa-0022-4f78-97ce-03a8255dba93.png)', 
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
                えもび旅の1日
              </h1>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="mt-8">
                <Button size="lg" className="rounded-full px-8 bg-white/90 text-gray-900 hover:bg-white">
                  詳しく見る
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      {/* Content below hero */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn delay={200}>
            <div className="space-y-6 max-w-lg">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-700 uppercase bg-gray-100 rounded-full">
                採用情報
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
                人材を募集しています
              </h2>
              
              <p className="text-lg text-gray-600">
                私たちは常に情熱的で創造的な人材を求めています。チームに参加して、お客様の期待を超える素晴らしい体験を一緒に創りましょう。
              </p>
              
              <div className="pt-6">
                <Button size="lg" className="rounded-full px-8">
                  採用情報を見る
                </Button>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" delay={300}>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1500&q=80" 
                alt="チームワーク"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
