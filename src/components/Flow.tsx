import { FadeIn } from './FadeIn';
import { Button } from '@/components/ui/button';

export default function Flow() {
  const steps = [
    {
      number: "ステップ１",
      title: "お問い合わせ",
      description: "まず担当者よりご連絡させていただきます。こちらよりお問い合わせください。(LINE、Wechat、WhatsApp等で連絡手段は合わせることが可能です)"
    },
    {
      number: "ステップ２",
      title: "お打ち合わせ",
      description: "基本情報含めて、転職の希望をヒアリングさせていただきます。もちろん決まっていなくてもまずは相談からでも可能です。"
    },
    {
      number: "ステップ３",
      title: "企業の紹介",
      description: "お伺いした希望をもとに、企業の求人をご紹介します。"
    },
    {
      number: "ステップ４",
      title: "書類添削、面接対策",
      description: "エントリーする際の書類を添削させていただき、面接時のポイントをお伝えさせていただきます。"
    },
    {
      number: "ステップ５",
      title: "面接設定",
      description: "企業人事との面接を設定します。"
    },
    {
      number: "ステップ６",
      title: "入社前後のフォロー",
      description: "入社前後のフォローもこちらでサポートさせていただきます。"
    }
  ];

  return (
    <section id="flow" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-700 uppercase bg-gray-100 rounded-full">
              Hustar
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              ご利用の流れ
            </h2>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-gray-600">
              Hustarでは、お客様のキャリアをサポートするために以下のステップでサービスを提供しています。
            </p>
          </FadeIn>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <FadeIn 
                key={index} 
                delay={300 + index * 100}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Mobile step number indicator */}
                  <div className="flex md:hidden items-center mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-3">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{step.number}</div>
                  </div>
                  
                  <div className="w-full md:w-1/2 px-4 md:p-6 flex justify-center">
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm w-full max-w-md">
                      <div className="hidden md:block text-xl font-bold text-primary mb-2">{step.number}</div>
                      <h3 className="text-lg font-semibold mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white relative z-10">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <FadeIn delay={300}>
            <Button className="rounded-full px-8" asChild>
              <a href="#contact">お問い合わせはこちら</a>
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}