
import { FadeIn } from './FadeIn';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <FadeIn>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                お問い合わせ
              </span>
            </FadeIn>
            
            <FadeIn delay={100}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
                お気軽にご相談ください
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-muted-foreground">
                キャリアに関するご質問やサービスについてもっと知りたい方は、お気軽にお問い合わせください。担当者が丁寧にご対応いたします。
              </p>
            </FadeIn>
            
            <div className="space-y-6 md:space-y-8 pt-4">
              <FadeIn delay={300}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm mb-3 sm:mb-0 self-start">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium">メールでのお問い合わせ</h3>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground">担当者が丁寧にご対応いたします。</p>
                    <a href="mailto:yuta.izawa@aihustar.net" className="mt-2 inline-block text-primary hover:text-primary/80 transition-colors break-all">
                      yuta.izawa@aihustar.net
                    </a>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm mb-3 sm:mb-0 self-start">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium">オフィス所在地</h3>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground">お気軽にお立ち寄りください。</p>
                    <p className="mt-2 text-sm">
                      〒100-0004<br />
                      東京都千代田区大手町1-6-1<br />
                      大手町ビル1F/2F
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={500}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-sm mb-3 sm:mb-0 self-start">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium">お電話でのお問い合わせ</h3>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground">平日9:00〜20:00で対応しております。</p>
                    <a href="tel:08034018956" className="mt-2 inline-block text-primary hover:text-primary/80 transition-colors">
                      080-3401-8956
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
