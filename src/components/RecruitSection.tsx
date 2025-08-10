export default function RecruitSection() {
  const jobOpenings = [
    {
      category: "正社員",
      positions: [
        "製造 管理職",
        "製造",
        "品質管理",
        "新卒（2024年春卒業）"
      ]
    },
    {
      category: "契約社員（パート）",
      positions: [
        "製造"
      ]
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              JOB OPENINGS
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              現在の求人職種
            </p>
          </div>
        </div>

        {/* 求めている人材 */}
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-8 md:p-12 shadow-sm border border-orange-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-wide mb-4">
              QUALIFICATIONS
            </h3>
            <p className="text-lg font-medium text-orange-800">
              感謝と尊重心があり、挑戦と変革に取り組める方、是非ご応募下さい。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-slate-700 leading-relaxed">
              私達は、国産フルーツ・野菜の加工を中心に、笑顔で安心・安全でおいしい食品をお届けし続けます。そのために、お客様や農業生産者様をはじめとしたあらゆる関係者様や共に働く仲間を感謝の気持ちをもって尊重できる人、現状に満足せず、常に挑戦と変革に取り組んでいく人を求めています。
            </p>

            <p className="text-slate-700 leading-relaxed">
              もちろん、誰もが最初はわからないこと、不安なことが多いです。OJT教育・フォローアップ面談他、各コミュニケーションで働くステージを整えていきます。勤務は日勤のみであり、ワークライフバランス実現の支援をしています。
            </p>

            <p className="text-slate-700 leading-relaxed">
              現在従業員80数名のアットホームな雰囲気の職場です。しっかりフォローしていきますので、安心してお仕事いただけます！
            </p>

            <div className="text-center pt-6">
              <p className="text-xl font-bold text-orange-800">
                私達と共に…FOOD FOR YOUR SMILE!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {jobOpenings.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8 shadow-sm border border-orange-100">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 pb-2 border-b border-orange-200">
                  【{category.category}】
                </h3>
                <ul className="space-y-3">
                  {category.positions.map((position, posIndex) => (
                    <li key={posIndex} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-slate-800">勤務条件</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">勤務地</p>
                  <p className="text-slate-600">愛知県名古屋市南区要町3-17</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">勤務時間</p>
                  <p className="text-slate-600">8:00～17:30 *残業あり(月10時間程度)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">年間休日</p>
                  <p className="text-slate-600">120日(当社カレンダーによる)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-slate-800">HOW TO APPLY</h3>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                ご応募される方は、下記フォーム、または電話にてご応募下さい。
              </p>
              <p className="text-slate-600 leading-relaxed">
                定員に達するまで、会社説明会・採用試験は随時実施していきます。
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800">採用担当</h4>
                  <div className="space-y-2">
                    <p className="text-slate-700">総務部 藤田</p>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="text-slate-600">TEL: 052-611-5301</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="tel:052-611-5301"
                  className="inline-flex items-center justify-center bg-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300 w-full md:w-auto"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  電話で応募する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}