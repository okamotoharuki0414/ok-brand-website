export default function Access() {
  const accessMethods = [
    {
      type: "電車",
      routes: [
        {
          line: "JR東海道線",
          station: "笠寺駅",
          method: "タクシー",
          time: "約10分"
        },
        {
          line: "JR東海道線",
          station: "大高駅",
          method: "タクシー",
          time: "約10分"
        },
        {
          line: "名鉄常滑線",
          station: "柴田駅",
          method: "徒歩",
          time: "15分"
        }
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      type: "車",
      routes: [
        {
          line: "名古屋高速2号",
          station: "大高IC",
          method: "車",
          time: "1.5km"
        },
        {
          line: "伊勢湾岸道",
          station: "豊明IC",
          method: "車",
          time: "5km"
        }
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7l-7-7m2-6h3.5a2 2 0 011.922 1.922l.5 2.5a2 2 0 01-1.922 2.578H5.5a2 2 0 01-1.922-2.578l.5-2.5A2 2 0 015.5 8H9m3 0V6l1-1h2l1 1v2m-5 0h5" />
        </svg>
      )
    }
  ]

  return (
    <section id="access" className="py-24 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              Access
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              アクセス情報
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">会社所在地</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">岡本食品株式会社</p>
                    <p className="text-slate-600">〒457-0802</p>
                    <p className="text-slate-600">愛知県名古屋市南区要町3‑17</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-600">TEL: 052‑611‑5301</p>
                    <p className="text-slate-600">FAX: 052‑613‑2607</p>
                  </div>
                </div>
              </div>
            </div>

            {accessMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-lg border border-orange-100 p-8 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{method.type}でのアクセス</h3>
                </div>
                
                <div className="space-y-4">
                  {method.routes.map((route, routeIndex) => (
                    <div key={routeIndex} className="border-l-4 border-orange-200 pl-4">
                      <div className="space-y-2">
                        <p className="font-medium text-slate-800">{route.line}</p>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <span>{route.station}</span>
                          <span>→</span>
                          <span>{route.method}</span>
                          <span>{route.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-slate-100 to-stone-100 rounded-lg p-8 text-center">
              <div className="space-y-6">
                <div className="w-32 h-32 bg-orange-100 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800">地図</h3>
                  <p className="text-slate-600 text-sm">
                    詳細な地図情報は<br />
                    お電話でお問い合わせください
                  </p>
                </div>
                <div className="pt-4">
                  <a
                    href="tel:052-611-5301"
                    className="inline-flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    052‑611‑5301
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg border border-orange-100 p-6 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-4">営業時間</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>平日</span>
                  <span>8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>土曜</span>
                  <span>8:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>日曜・祝日</span>
                  <span>休業</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}