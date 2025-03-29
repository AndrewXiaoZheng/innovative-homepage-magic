
import { FadeIn } from './FadeIn';
import { Button } from '@/components/ui/button';

export default function DayInLife() {
  const activities = [
    {
      time: "9:00",
      title: "出社・朝のミーティング",
      description: "1日の予定と目標を確認します。チームメンバーと情報共有を行います。"
    },
    {
      time: "10:00",
      title: "クライアントとの打ち合わせ",
      description: "クライアントのニーズを理解し、最適な人材提案の準備をします。"
    },
    {
      time: "12:00",
      title: "ランチタイム",
      description: "同僚と一緒に食事をとりながら、リラックスした雰囲気で交流します。"
    },
    {
      time: "13:30",
      title: "候補者との面談",
      description: "求職者との面談を行い、スキルや経験、希望条件などを詳しく把握します。"
    },
    {
      time: "16:00",
      title: "データ分析と報告書作成",
      description: "面談結果や市場動向を分析し、クライアントへの報告書を作成します。"
    },
    {
      time: "18:00",
      title: "業務終了・振り返り",
      description: "1日の成果を振り返り、明日の準備をして終業します。"
    }
  ];

  return (
    <section id="day" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-700 uppercase bg-gray-100 rounded-full">
              Hustar
            </span>
          </FadeIn>
          
          <FadeIn delay={100}>
              <div className="mt-6 flex justify-center">
                <img 
                  src="/innovative-homepage-magic/images/image_logo.png" 
                  alt="Hustar Logo" 
                  className="h-16 w-auto" 
                />
              </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="mt-4 text-lg text-gray-600">
              私たちの日常業務の流れを紹介します。充実した1日を通じて、チームとして成長しています。
            </p>
          </FadeIn>
        </div>
        
        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8 md:space-y-12">
            {activities.map((activity, index) => (
              <FadeIn 
                key={index} 
                delay={300 + index * 100}
                direction={index % 2 === 0 ? "right" : "left"}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Mobile time indicator */}
                  <div className="flex md:hidden items-center mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-3">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{activity.time}</div>
                  </div>
                  
                  <div className="w-full md:w-1/2 px-4 md:p-6 flex justify-center">
                    <div className="bg-gray-100 p-4 md:p-6 rounded-xl shadow-sm w-full max-w-md">
                      <div className="hidden md:block text-xl font-bold text-primary mb-2">{activity.time}</div>
                      <h3 className="text-lg font-semibold mb-2 md:mb-3">{activity.title}</h3>
                      <p className="text-sm md:text-base text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white relative z-10">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        

      </div>
    </section>
  );
}
