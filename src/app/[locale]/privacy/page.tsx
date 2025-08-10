export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide mb-4">
            プライバシーポリシー
          </h1>
          <div className="w-16 h-px bg-orange-600 mx-auto" />
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="text-slate-700 leading-relaxed space-y-8">
            <p>
              岡本食品株式会社(以下、当社)は、当社が取得した個人情報の取扱いに関し、個人情報の保護に関する法律、個人情報保護に関するガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します。
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">1. 個人情報の安全管理</h2>
              <p>
                当社は、個人情報の保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、当社の取り扱う個人情報の漏えい、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講ずるものとします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">2. 個人情報の取得等の遵守事項</h2>
              <p>当社による個人情報の取得、利用、提供については、以下の事項を遵守します。</p>
              
              <div className="space-y-6 ml-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">個人情報の取得</h3>
                  <p>
                    当社は、当社が管理するインターネットによる情報提供サイト（以下「本サイト」といいます。）の運営に必要な範囲で、本サイトの一般利用者（以下「ユーザー」といいます。）から、ユーザーに係る、名前やメールアドレス等の個人情報を取得することがあります。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">個人情報の利用目的</h3>
                  <p>
                    当社は、当社が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>本サイトの運営、維持、管理</li>
                    <li>本サイトを通じたサービスの提供及び紹介</li>
                    <li>本サイトからのお問い合わせに対する回答や必要な情報の送付</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">個人情報の提供等</h3>
                  <p>
                    当社は、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。なお、本人の求めによる個人情報の開示、訂正、追加若しくは削除又は利用目的の通知については、法令に従いこれを行うとともに、ご意見、ご相談に関して適切に対応します。
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">3. 個人情報の利用目的の変更</h2>
              <p>
                当社は、前項で特定した利用目的は、予め本人の同意を得た場合を除くほかは、原則として変更しません。但し、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲において、予め変更後の利用目的を公表の上で変更を行う場合はこの限りではありません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">4. 個人情報の第三者提供</h2>
              <p>
                当社は、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行うこととします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">5. アクセス解析ツールの使用</h2>
              <p>
                本サイトは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">6. 個人情報の取扱いの改善・見直し</h2>
              <p>
                当社は、個人情報の取扱い、管理体制及び取組みに関する点検を実施し、継続的に改善・見直しを行います。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">7. 個人情報の廃棄</h2>
              <p>
                当社は、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">8. 免責事項</h2>
              <p>
                本サイトからのリンクなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
              </p>
              <p>
                また本サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもあります。
              </p>
              <p>
                本サイトに掲載された内容によって生じた損害等の一切の責任を負いかねます。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">9. 著作権</h2>
              <p>
                本サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
              </p>
              <p>
                本サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がありましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">10. プライバシーポリシーの変更</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>本ポリシーの内容は、法令その他本ポリシー別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
                <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本サイトに掲載したときから効力を生じるものとします。</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">11. リンク</h2>
              <p>
                本サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800">12. 苦情や相談の担当窓口</h2>
              <p>当社は、個人情報の取扱いに関する担当窓口及び責任者を以下の通り設けます。</p>
              
              <div className="bg-stone-50 p-6 rounded-lg mt-4">
                <p className="font-semibold text-slate-800 mb-2">【岡本食品株式会社】</p>
                <div className="space-y-1 text-slate-700">
                  <p>〒457-0802</p>
                  <p>愛知県名古屋市南区要町3-17</p>
                  <p>Tel：052-611-5301</p>
                  <p>個人情報苦情・相談窓口責任者　総務部　藤田 知也</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}