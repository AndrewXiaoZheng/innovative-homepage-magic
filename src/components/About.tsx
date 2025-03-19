import { FadeIn } from './FadeIn';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              ABOUT US
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Hustarについて
            </h2>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1500&q=80" 
                alt="Hustar team"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn delay={200}>
              <p className="text-lg text-gray-600">
                Hustarは、人材紹介を軸に事業展開する企業です。
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">企業様へ</h3>
                <p className="text-gray-600">
                  クライアントが必要としている人材を、独自のルートで探し出しご紹介させていただくことが可能です。
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-primary mb-3">求職者様へ</h3>
                <p className="text-gray-600">
                  あなたのスキルや経験を最大限に活かせる職場を見つけるお手伝いをいたします。
                  私たちは、業界のトレンドや企業のニーズを把握し、あなたに最適な求人情報を提供します。
                </p>
              </div>
            </FadeIn>
            

          </div>
        </div>
      </div>
    </section>
  );
}