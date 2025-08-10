import NewsSection from '@/components/NewsSection'

export default function NewsPage() {
  return (
    <div className="pt-20">
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">お知らせ</h1>
            <div className="w-16 h-px bg-orange-400 mx-auto"></div>
          </div>
          <NewsSection />
        </div>
      </div>
    </div>
  )
}