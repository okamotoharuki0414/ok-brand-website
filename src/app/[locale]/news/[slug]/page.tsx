import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

// ニュースデータを取得する関数
function getNewsData(slug: string, locale: string) {
  if (slug === 'jfs-b') {
    return {
      slug: 'jfs-b',
      title: locale === 'ja' 
        ? 'JFS-B規格の適合認証を取得しました'
        : 'Obtained JFS-B Standard Compliance Certification',
      date: locale === 'ja' ? '2024年5月28日' : 'May 28, 2024',
      category: locale === 'ja' ? '品質管理' : 'Quality Management',
      image: '/images/ニュース.avif',
      exists: true
    };
  }
  return null;
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  
  const newsItem = getNewsData(slug, locale);
  
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="pt-20">
      <div className="py-16 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href={`/${locale}/news`}
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {locale === 'ja' ? 'お知らせ一覧に戻る' : 'Back to News List'}
            </Link>
          </div>
          
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* ヘッダー画像 */}
            <div className="relative h-48 md:h-64 lg:h-72">
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                fill
                className="object-contain bg-gray-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/95 text-slate-700 text-sm font-medium px-4 py-2 rounded-full">
                  {newsItem.category}
                </span>
              </div>
            </div>
            
            {/* 記事内容 */}
            <div className="p-8">
              <div className="mb-8">
                <p className="text-sm text-slate-500 mb-4 font-medium tracking-wide">
                  {newsItem.date}
                </p>
                <h1 className="text-3xl md:text-4xl font-serif text-slate-800 leading-tight tracking-wide">
                  {newsItem.title}
                </h1>
              </div>
              
              <NewsContent slug={slug} locale={locale} />
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

// ニュースコンテンツコンポーネント
function NewsContent({ slug, locale }: { slug: string; locale: string }) {
  if (slug === 'jfs-b') {
    return <JfsBNewsContent locale={locale} />;
  }
  return null;
}

// JFS-B関連のニュース内容
function JfsBNewsContent({ locale }: { locale: string }) {
  const isJapanese = locale === 'ja';
  
  return (
    <div className="prose prose-lg max-w-none">
      <div className="bg-slate-50 p-6 rounded-lg mb-8">
        <p className="text-slate-700 leading-relaxed font-light">
          {isJapanese 
            ? '岡本食品株式会社では、２０２４年３月に一般財団法人食品マネジメント協会（JFSM）が運営する食品安全規格「JFS-B規格」の適合証明を取得いたしました。'
            : 'Okamoto Foods Co., Ltd. obtained JFS-B Standard compliance certification operated by the Japan Food Safety Management Association (JFSM) in March 2024.'}
        </p>
      </div>
      
      <section className="mb-8">
        <h2 className="text-2xl font-serif text-slate-800 mb-4 tracking-wide border-b-2 border-orange-200 pb-2">
          {isJapanese ? 'JFS-B規格について' : 'About JFS-B Standards'}
        </h2>
        <p className="text-slate-700 leading-relaxed font-light">
          {isJapanese 
            ? 'JFS‐B規格は、食品安全マネジメントシステム（FSM）、ハザード制御(HACCP)、適正製造規範（Good　Manufacturing Practice=GMP）の３つの要求事項層で構成された、国際整合性のある日本発の国際的な食品安全管理規格です。'
            : 'The JFS-B standard is an internationally harmonized food safety management standard originating from Japan, consisting of three requirement layers: Food Safety Management System (FSM), Hazard Control (HACCP), and Good Manufacturing Practice (GMP).'}
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-serif text-slate-800 mb-4 tracking-wide border-b-2 border-orange-200 pb-2">
          {isJapanese ? '今後の取り組み' : 'Our Future Commitment'}
        </h2>
        <p className="text-slate-700 leading-relaxed font-light">
          {isJapanese 
            ? '今後もお客様に安全・安心な製品をお届けできますよう、このシステムを維持するとともに、さらなる品質管理体制の強化に努めてまいります。'
            : 'We will continue to maintain this system and strive to further strengthen our quality control system so that we can continue to deliver safe and secure products to our customers.'}
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-serif text-slate-800 mb-4 tracking-wide border-b-2 border-orange-200 pb-2">
          {isJapanese ? '関連情報' : 'Related Information'}
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-slate-700 mb-4 font-light">
            {isJapanese ? '一般財団法人食品安全マネジメント協会（JFSM）' : 'Japan Food Safety Management Association (JFSM)'}
          </p>
          <a 
            href="https://www.jfsm.or.jp/scheme/documents/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {isJapanese ? '詳細はこちら' : 'Learn More'}
          </a>
        </div>
      </section>
      
      <div className="bg-orange-50 p-6 rounded-lg mt-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-medium text-slate-800 mb-2">
              {isJapanese ? '品質への取り組み' : 'Our Quality Commitment'}
            </h3>
            <p className="text-slate-600 font-light">
              {isJapanese 
                ? '岡本食品では、創業以来100年以上にわたり、安心・安全な食品をお届けするための品質管理に取り組んでまいりました。'
                : 'Since our founding over 100 years ago, Okamoto Foods has been committed to quality control to deliver safe and reliable food products.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}