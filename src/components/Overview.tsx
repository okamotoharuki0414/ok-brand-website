'use client'

import { useLocale } from 'next-intl'

export default function Overview() {
  const locale = useLocale()
  return (
    <section id="overview" className="py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {locale === 'ja' ? 'Company Overview' : 'Company Overview'}
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              {locale === 'ja' ? '会社概要' : 'About our company'}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-stone-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800 w-1/4">
                    {locale === 'ja' ? '商号' : 'Company Name'}
                  </td>
                  <td className="px-6 py-4 text-stone-700">
                    {locale === 'ja' ? '岡本食品株式会社' : 'Okamoto Foods Co., Ltd.'}
                  </td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">
                    {locale === 'ja' ? '事業内容' : 'Business'}
                  </td>
                  <td className="px-6 py-4 text-stone-700">
                    {locale === 'ja' ? '野菜・果物等の缶詰、パウチ、冷凍食品の製造・販売' : 'Manufacturing and sales of canned vegetables and fruits, pouches, and frozen foods'}
                  </td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">本社・工場</td>
                  <td className="px-6 py-4 text-stone-700">
                    愛知県名古屋市南区要町3‑17<br />
                    TEL 052‑611‑5301<br />
                    FAX 052‑613‑2607
                  </td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">設立</td>
                  <td className="px-6 py-4 text-stone-700">昭和28年1月</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">資本金</td>
                  <td className="px-6 py-4 text-stone-700">24,000千円</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">代表取締役</td>
                  <td className="px-6 py-4 text-stone-700">岡本 嘉久</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">従業員数</td>
                  <td className="px-6 py-4 text-stone-700">約100名</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">関連会社</td>
                  <td className="px-6 py-4 text-stone-700">
                    トーヨーホールディングス㈱関連会社：<br />
                    トーアス㈱、トーヨーフーズ㈱（愛知県豊川市）
                  </td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">取り扱い品目</td>
                  <td className="px-6 py-4 text-stone-700">
                    みかん、黄桃、トマト、マッシュルーム、パインアップル、冷凍フルーツ等
                  </td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">取引銀行</td>
                  <td className="px-6 py-4 text-stone-700">
                    三菱東京UFJ銀行 笠寺支店<br />
                    みずほ銀行 名古屋支店<br />
                    名古屋銀行 鳴尾支店<br />
                    日本政策金融公庫 名古屋・熱田支店
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 bg-orange-50 font-semibold text-stone-800">主な販売先</td>
                  <td className="px-6 py-4 text-stone-700">
                    名給・トーアス㈱・名古屋教育スポーツ協会・東海コープ・コーミ㈱・サトー商会・ハウス食品グループ本社など
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="text-center bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8">
            <div className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">100+</div>
            <div className="text-sm text-stone-600 font-light">年の歴史</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8">
            <div className="text-3xl md:text-4xl font-bold text-orange-800 mb-2">約100</div>
            <div className="text-sm text-stone-600 font-light">従業員数</div>
          </div>
        </div>
      </div>
    </section>
  )
}