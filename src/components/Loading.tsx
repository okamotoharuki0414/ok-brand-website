'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #ffffff 2px, transparent 2px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0, 25px 25px',
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* メインロゴアニメーション */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-300 blur-2xl opacity-30 animate-pulse"></div>
          <div className="relative">
            <div className="flex items-center space-x-4">
              <div className="relative">
                {/* 回転する外側のリング */}
                <div className="w-16 h-16 border-4 border-slate-600 border-t-white rounded-full animate-spin"></div>
                
                {/* 内側のOKロゴ */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-black text-white tracking-wider animate-pulse">
                    OK
                  </div>
                </div>
              </div>
              
              {/* ブランド名 */}
              <div className="text-3xl font-serif text-white tracking-wide">
                <span className="opacity-100 animate-pulse delay-100">BRAND</span>
              </div>
            </div>
          </div>
        </div>

        {/* サブタイトル */}
        <div className="text-center space-y-2">
          <p className="text-slate-300 text-sm tracking-widest uppercase font-semibold animate-pulse delay-200">
            Loading...
          </p>
          <div className="text-xs text-slate-400 font-light">
            果実のちからを、もっと自由に
          </div>
        </div>

        {/* プログレスバー風アニメーション */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-slate-400 to-white rounded-full animate-pulse"></div>
          <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse delay-75 -mt-1"></div>
        </div>

        {/* 装飾的な要素 */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* コーナー装飾 */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-slate-600 rounded-tl-lg opacity-30"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-slate-600 rounded-tr-lg opacity-30"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-slate-600 rounded-bl-lg opacity-30"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-slate-600 rounded-br-lg opacity-30"></div>
    </div>
  )
}