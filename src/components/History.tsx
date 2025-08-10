'use client'

import { useLocale, useTranslations } from 'next-intl'

export default function History() {
  const locale = useLocale()
  const t = useTranslations('company')
  
  const getHistoryData = (locale: string) => [
    {
      year: locale === 'ja' ? "1921年(大正10年)5月" : "May 1921",
      event: locale === 'ja' ? "創業" : "Founded",
      description: locale === 'ja' 
        ? "名古屋市南区鳴尾町にて岡本千代松がトマトソース加工業を創業"
        : "Chiyomatsu Okamoto founded a tomato sauce processing business in Naruocho, Minami-ku, Nagoya"
    },
    {
      year: "1946年(昭和21年)",
      event: "事業拡大",
      description: "トマトケチャップ、ソース類に加えて各種ジャム類、魚類缶詰の製造に着手"
    },
    {
      year: "1953年(昭和28年)1月",
      event: "株式会社化",
      description: "株式会社に組織変更（資本金1,000千円）"
    },
    {
      year: "1957年(昭和32年)5月",
      event: "工場移転",
      description: "現所在地に本社及び工場移転。果実、野菜缶詰に本格的に着手する"
    },
    {
      year: "1966年(昭和41年)",
      event: "新工場建設",
      description: "新工場を同敷地内に建設。資本金12,000千円に増資"
    },
    {
      year: "1977年(昭和52年)6月",
      event: "工場拡張",
      description: "鉄筋コンクリート2F建新工場を現所在地に建設。資本金24,000千円に増資"
    },
    {
      year: "1983年(昭和58年)10月",
      event: "自動化推進",
      description: "マッシュルーム製造自動ライン完成（塩蔵戻し、国内最先発）"
    },
    {
      year: "1985年(昭和60年)9月",
      event: "設備近代化",
      description: "コンピュータ制御大型回転レトルト殺菌機導入"
    },
    {
      year: "1988年(昭和63年)9月",
      event: "施設拡充",
      description: "3F建新工場、4F建本社事務所を現所在地に建設"
    },
    {
      year: "1992年(平成4年)9月",
      event: "技術革新",
      description: "レトルトパウチ自動充填ライン導入"
    },
    {
      year: "1999年(平成11年)9月",
      event: "品質管理強化",
      description: "Ｘ線異物除去機導入"
    },
    {
      year: "2006年(平成18年)11月",
      event: "冷凍事業開始",
      description: "連続式食品急速凍結（IQF）ライン導入。冷凍フルーツ、冷凍野菜類の製造を開始"
    },
    {
      year: "2016年(平成28年)4月",
      event: "新体制",
      description: "岡本嘉久　代表取締役に就任"
    },
    {
      year: "2016年(平成28年)10月",
      event: "北工場建設",
      description: "鉄骨造2F建新工場（北工場）を本社隣接地に建設"
    },
    {
      year: "2019年(平成31年)4月",
      event: "グループ連携強化",
      description: "レトルトパウチ自動充填ライン導入。トーアス㈱名古屋工場として稼働"
    },
    {
      year: "2021年(令和3年)4月",
      event: "みかんライン更新",
      description: "みかん酸処理ライン全面更新"
    },
    {
      year: "2022年(令和4年)2月",
      event: "デザート事業開始",
      description: "カップデザート製造ライン導入。トーアス㈱名古屋工場として稼働"
    },
    {
      year: locale === 'ja' ? "2024年(令和6年)3月" : "March 2024",
      event: locale === 'ja' ? "JFS-B認証取得" : "JFS-B Certification Obtained",
      description: locale === 'ja' 
        ? "JFS-B規格の適合認証を取得"
        : "Obtained JFS-B Standard compliance certification"
    }
  ]
  
  const historyData = getHistoryData(locale)

  return (
    <section id="history" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {locale === 'ja' ? 'Timeline' : 'Company History'}
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              {locale === 'ja' ? '沿革' : 'Our journey through the years'}
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-400 to-slate-200"></div>

          <div className="space-y-12">
            {historyData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-6 w-4 h-4 bg-slate-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-800">
                          {item.event}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-800">
              {locale === 'ja' ? '100年を超える歴史' : 'Over 100 Years of History'}
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {locale === 'ja' 
                ? '大正10年の創業から現在まで、時代の変化に対応しながら技術革新を続け、お客様に愛される商品を提供し続けています。'
                : 'Since our founding in 1921, we have continued to innovate and adapt to changing times, consistently providing products beloved by our customers.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}