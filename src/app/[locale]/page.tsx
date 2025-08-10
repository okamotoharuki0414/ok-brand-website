export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          岡本食品株式会社 ({locale})
        </h1>
        <p>これは{locale === 'ja' ? '日本語' : '英語'}版のテストページです。</p>
        <p>ルーティングが正常に動作しています。</p>
      </div>
    </div>
  );
}