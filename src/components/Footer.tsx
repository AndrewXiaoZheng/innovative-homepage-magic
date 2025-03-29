
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from './FadeIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <FadeIn className="space-y-6">
            <div className="mb-2">
              <img 
                src="/innovative-homepage-magic/images/image_logo_w.png" 
                alt="Hustar Logo" 
                className="h-10 w-auto" 
              />
            </div>
            <p className="text-gray-400">
              キャリアの可能性を広げ、あなたの未来をサポートします。
            </p>
            <div className="flex space-x-4">
              {[
                'facebook',
                'twitter',
                'instagram',
                'linkedin',
              ].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={100} className="space-y-6">
            <h3 className="text-lg font-semibold">会社情報</h3>
            <ul className="space-y-3">
              {[
                'Hustarについて',
                // 'チーム紹介',
                'サービス',
                'お問い合わせ',
              ].map((item, index) => (
                <li key={item}>
                  <a
                    href={['#about', '#services', '#contact'][index]}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={200} className="space-y-6">
            <h3 className="text-lg font-semibold">サービス</h3>
            <ul className="space-y-3">
              {[
                'キャリアコンサルティング',
                '転職サポート',
                '面接対策',
                '書類添削',
                'キャリア研修',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <FadeIn delay={300} className="space-y-6">
            <h3 className="text-lg font-semibold">お問い合わせ</h3>
            <p className="text-gray-400">
              キャリアに関するご相談は、お気軽にお問い合わせください。
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="block">メール: yuta.izawa@aihustar.net</span>
                <span className="block">電話: 080-3401-8956</span>
              </p>
              <Button variant="secondary" asChild>
                <a href="#contact">お問い合わせ</a>
              </Button>
            </div>
          </FadeIn>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Hustar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              'プライバシーポリシー',
              '利用規約',
              'サイトマップ',
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
