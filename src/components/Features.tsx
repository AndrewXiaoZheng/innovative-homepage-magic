
import { FadeIn } from './FadeIn';
import { AnimatedImage } from './AnimatedImage';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 特徴セクションは現在非表示
const features = [];


export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-700 uppercase bg-gray-100 rounded-full">
              お客様の声
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              お客様からの評価
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-gray-600">
              Hustarのサービスをご利用いただいたお客様からの声をご紹介します。
            </p>
          </FadeIn>
        </div>
        

        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1500&q=80"
                alt="チームミーティング"
                className="rounded-2xl"
                hoverAnimation="scale"
              />
            </div>
          </FadeIn>
          
          <div className="space-y-6">
            <FadeIn>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-700 uppercase bg-gray-100 rounded-full">
                私たちのアプローチ
              </span>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                共に働き、共に成長する
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-gray-600">
                私たちは個人の成長とチームの成功を同じく重視しています。一人ひとりの貢献が会社全体の成功につながります。
              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <ul className="space-y-4 mt-6">
                {[
                  'オープンなコミュニケーション',
                  '継続的な学習機会',
                  '柔軟な勤務体制',
                  '健康とウェルビーイングの重視',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            

          </div>
        </div>
      </div>
    </section>
  );
}
