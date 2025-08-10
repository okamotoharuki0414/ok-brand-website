export default function BlogPage() {
  return (
    <div className="pt-20">
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">ブログ</h1>
            <div className="w-16 h-px bg-orange-400 mx-auto"></div>
            <p className="text-lg text-slate-600 mt-6">
              岡本食品の最新情報や取り組みをご紹介します。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
              <p className="text-gray-600">ブログ記事を準備中です。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}