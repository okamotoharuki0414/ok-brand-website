import Image from 'next/image'

export default function Greeting() {
  return (
    <section id="greeting" className="py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              ごあいさつ
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                弊社は大正10年5月にトマトソース加工業者として創業しました。以来、みかん、もも等のフルーツ加工品のトップブランドとして親しまれ、学校給食をはじめ各方面から幅広くご愛顧を頂戴しております。
              </p>
              
              <p>
                時代とともに変化する&ldquo;食&rdquo;の流れをとらえ、原料の仕入れから加工、流通に至るまで日夜改善努力を続けています。
              </p>
              
              <p>
                今後も、創業以来培われた高い信頼と実績を礎に、ますます製造技術の向上に努め、健康で豊かな食生活の発展に貢献して参りたいと考えています。
              </p>
              
              <p className="font-medium text-slate-800">
                今後とも、なお一層のご支援、ご愛顧のほど、よろしくお願い申し上げます。
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src="/images/社長写真.avif"
                    alt="代表取締役社長 岡本 嘉久"
                    fill
                    className="object-cover rounded-full shadow-lg"
                    sizes="128px"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-medium text-slate-800">
                    代表取締役社長
                  </h3>
                  <p className="text-2xl md:text-3xl font-serif text-slate-800 tracking-wide">
                    岡本 嘉久
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}