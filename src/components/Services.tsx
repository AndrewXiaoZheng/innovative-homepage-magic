
import { FadeIn } from './FadeIn';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
              Service
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              サービス
            </h2>
          </FadeIn>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-20">
          <FadeIn delay={200}>
            <Card className="overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300 p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">企業様へ</h3>
              <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-2 md:mb-3">幅広い求職者様の対応領域</h4>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              様々なサービスが複雑化する現代においてそのポジションにマッチした人材を採用する必要があります。 
              弊社ではエンジニアのオープンデータを保有してスカウトをかけたり、海外の学校と連携しグローバルな人材を紹介する等幅広く対応可能です。
              </p>
              <p className="text-sm md:text-base text-gray-600">
              これまで上場企業や中小企業のクライアントからのご依頼もいただいております。 
              </p>
            </Card>
          </FadeIn>
          
          <FadeIn delay={300}>
            <Card className="overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow duration-300 p-5 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">求職者様へ</h3>
              <h4 className="text-lg md:text-xl font-medium text-gray-800 mb-2 md:mb-3">求人数の担保</h4>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
              業界内での広範なネットワークを活かし、現在約8万件の求人情報を取り揃えています。求職者の皆様にとって、選択肢が多いことは非常に重要です。
              私たちは、あなたのスキルや希望に合った多様な求人を提供することで、最適な職場環境を見つけるお手伝いをします。
              </p>
              <p className="text-sm md:text-base text-gray-600">
              あなたの理想のキャリアを、私たちの豊富な求人情報とともに実現しましょう。まずはお気軽にご相談ください。 
              </p>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
