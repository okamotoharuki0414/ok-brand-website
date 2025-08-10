const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// 静的ファイルの配信
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/icons', express.static(path.join(__dirname, 'public/icons')));
app.use(express.static(path.join(__dirname, 'public')));

// /newsルート用のエラーハンドリングを追加
app.get('/news', (req, res) => {
    res.redirect('/');
});

// メインページ用のHTMLテンプレート
const generateHTML = (title, content) => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .hero-title {
            font-size: 3.5rem;
            line-height: 1.1;
        }
        
        @media (min-width: 768px) {
            .hero-title {
                font-size: 4.5rem;
            }
        }
        
        @media (min-width: 1024px) {
            .hero-title {
                font-size: 6rem;
            }
        }
        
        .font-serif {
            font-family: serif;
        }
        
        .nav-link {
            color: #6b7280;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .nav-link:hover {
            color: #ea580c;
        }
        
        .btn-primary {
            background-color: #ea580c;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: background-color 0.3s ease;
        }
        
        .btn-primary:hover {
            background-color: #c2410c;
        }
        
        .btn-secondary {
            background-color: transparent;
            color: white;
            border: 2px solid white;
            padding: 0.75rem 2rem;
            border-radius: 0.5rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
            background-color: white;
            color: #1f2937;
        }
        
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        
        .font-company-name {
            font-weight: 900;
        }
        
        #mobileMenu {
            display: none;
        }
        
        #mobileMenu.show {
            display: block;
        }
    </style>
    <script>
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('show');
        }
        
        function closeMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.remove('show');
        }
    </script>
</head>
<body class="min-h-screen bg-white">
    <!-- ヘッダー -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="/" class="flex items-center group gap-3">
                    <img src="/images/岡本食品マーク.avif" alt="岡本食品株式会社のロゴマーク" class="w-12 h-12 object-contain" onerror="this.style.display='none'">
                    <div class="flex flex-col">
                        <div class="text-xl font-black text-gray-800 font-company-name">
                            岡本食品株式会社
                        </div>
                        <div class="text-xs text-orange-600 font-light tracking-wider">
                            EST. 1921
                        </div>
                    </div>
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="/goods" class="nav-link">商品</a>
                    <a href="/company" class="nav-link">企業情報</a>
                    <a href="/news" class="nav-link">お知らせ</a>
                    <a href="/recruit" class="nav-link">採用情報</a>
                    <a href="/contact" class="btn-primary text-sm">お問い合わせ</a>
                </nav>

                <!-- Mobile menu button -->
                <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobileMenu" class="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div class="px-4 py-6 space-y-4">
                <a href="/goods" class="block text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors" onclick="closeMobileMenu()">商品</a>
                <a href="/company" class="block text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors" onclick="closeMobileMenu()">企業情報</a>
                <a href="/news" class="block text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors" onclick="closeMobileMenu()">お知らせ</a>
                <a href="/recruit" class="block text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors" onclick="closeMobileMenu()">採用情報</a>
                <a href="/contact" class="block btn-primary text-center mt-4" onclick="closeMobileMenu()">お問い合わせ</a>
            </div>
        </div>
    </header>

    <!-- メインコンテンツ -->
    <main>
        ${content}
    </main>

    <!-- フッター -->
    <footer class="bg-gray-50">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                <div class="space-y-8 xl:col-span-1">
                    <div class="text-xl font-bold text-orange-800">岡本食品株式会社</div>
                    <p class="text-gray-500 text-base">
                        大正10年創業。100年を超える歴史の中で培われた技術と想いで、
                        国産原料にこだわった安心・安全な食品をお届けします。
                    </p>
                </div>
                <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                    <div>
                        <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">会社情報</h3>
                        <ul class="mt-4 space-y-4">
                            <li><a href="/company" class="text-base text-gray-500 hover:text-gray-900">会社概要</a></li>
                            <li><a href="/company#history" class="text-base text-gray-500 hover:text-gray-900">沿革</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">お問い合わせ</h3>
                        <ul class="mt-4 space-y-4">
                            <li class="text-base text-gray-500">〒457-0802</li>
                            <li class="text-base text-gray-500">愛知県名古屋市南区要町3-17</li>
                            <li class="text-base text-gray-500">TEL: 052-611-5301</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-12 border-t border-gray-200 pt-8">
                <p class="text-base text-gray-400 xl:text-center">
                    &copy; 2025 岡本食品株式会社. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
</body>
</html>
`;

// ルート定義
app.get('/', (req, res) => {
    const content = `
        <!-- ヒーローセクション -->
        <section class="relative w-full overflow-hidden mt-20">
            <div class="relative h-screen overflow-hidden">
                <!-- Background Image -->
                <img src="/images/みかんフリー.avif" alt="新鮮なみかんと農園の風景" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.background='linear-gradient(135deg, #ff7900 0%, #ffb347 100%)'">
                
                <!-- Overlay -->
                <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
                
                <!-- Content -->
                <div class="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4 sm:px-6 lg:px-8">
                    <div class="max-w-4xl">
                        <div class="space-y-8">
                            <div class="space-y-6">
                                <div class="text-orange-200 text-sm tracking-widest font-light uppercase">
                                    Since 1921
                                </div>
                                <h1 class="hero-title text-white">
                                    <span class="block text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-orange-100">
                                        果実のちからを、
                                    </span>
                                    <span class="font-bold tracking-wide">もっと自由に</span>
                                </h1>
                                <div class="w-24 h-px bg-orange-300 mx-auto mt-8"></div>
                            </div>
                            
                            <p class="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-2xl mx-auto">
                                安心・美味しさ・笑顔を詰めてお届けします
                            </p>
                            <p class="text-base md:text-lg text-orange-200 leading-relaxed max-w-2xl mx-auto font-light tracking-wider">
                                FOOD FOR YOUR SMILE
                            </p>
                            
                            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                                <a href="/goods" class="btn-primary bg-orange-600 hover:bg-orange-700 border-none px-8 py-4 rounded-lg text-lg">
                                    商品を見る
                                </a>
                                <a href="/company" class="btn-secondary bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg">
                                    私たちについて
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Scroll indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce z-20">
                <div class="flex flex-col items-center space-y-2">
                    <span class="text-xs tracking-widest font-light">SCROLL</span>
                    <svg class="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section class="py-16 px-4 bg-gradient-to-b from-neutral-50 to-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <div class="space-y-4">
                        <h2 class="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
                            Gallery
                        </h2>
                        <div class="w-16 h-px bg-slate-400 mx-auto"></div>
                        <p class="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            自然の恵みから工場まで、<br class="hidden sm:block">
                            私たちの想いをお伝えします
                        </p>
                    </div>
                </div>

                <!-- Desktop Grid -->
                <div class="hidden lg:grid lg:grid-cols-4 gap-6">
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/みかん農場.avif" alt="みかん農場" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #ff7900 0%, #ffb347 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-1">
                                        <h3 class="text-lg font-medium">みかん農場</h3>
                                        <p class="text-sm text-white/90 font-light leading-tight">永年の経験と情熱で育てた美味しいみかんたち</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/工場写真.avif" alt="製造工場" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #64748b 0%, #94a3b8 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-1">
                                        <h3 class="text-lg font-medium">製造工場</h3>
                                        <p class="text-sm text-white/90 font-light leading-tight">最新設備と伝統技術が融合した製造現場</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/品質管理.avif" alt="品質管理" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #059669 0%, #34d399 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-1">
                                        <h3 class="text-lg font-medium">品質管理</h3>
                                        <p class="text-sm text-white/90 font-light leading-tight">徹底した品質管理で安心・安全な商品をお届け</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/みかんレーン.avif" alt="製造ライン" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #dc2626 0%, #f87171 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-1">
                                        <h3 class="text-lg font-medium">製造ライン</h3>
                                        <p class="text-sm text-white/90 font-light leading-tight">効率的な製造ラインで品質と生産性を両立</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Carousel -->
                <div class="lg:hidden">
                    <div class="flex overflow-x-auto scrollbar-hide gap-4 pb-4" style="scroll-snap-type: x mandatory;">
                        <div class="flex-none w-80 sm:w-96" style="scroll-snap-align: start;">
                            <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
                                <div class="relative aspect-[4/3]">
                                    <img src="/images/みかん農場.avif" alt="みかん農場" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.background='linear-gradient(135deg, #ff7900 0%, #ffb347 100%)'">
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                                    
                                    <div class="absolute inset-0 flex items-end p-6">
                                        <div class="text-white space-y-2">
                                            <h3 class="text-xl font-medium">みかん農場</h3>
                                            <p class="text-sm text-white/90 font-light leading-relaxed">永年の経験と情熱で育てた美味しいみかんたち</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-none w-80 sm:w-96" style="scroll-snap-align: start;">
                            <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
                                <div class="relative aspect-[4/3]">
                                    <img src="/images/工場写真.avif" alt="製造工場" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.background='linear-gradient(135deg, #64748b 0%, #94a3b8 100%)'">
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                                    
                                    <div class="absolute inset-0 flex items-end p-6">
                                        <div class="text-white space-y-2">
                                            <h3 class="text-xl font-medium">製造工場</h3>
                                            <p class="text-sm text-white/90 font-light leading-relaxed">最新設備と伝統技術が融合した製造現場</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-none w-80 sm:w-96" style="scroll-snap-align: start;">
                            <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
                                <div class="relative aspect-[4/3]">
                                    <img src="/images/品質管理.avif" alt="品質管理" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.background='linear-gradient(135deg, #059669 0%, #34d399 100%)'">
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                                    
                                    <div class="absolute inset-0 flex items-end p-6">
                                        <div class="text-white space-y-2">
                                            <h3 class="text-xl font-medium">品質管理</h3>
                                            <p class="text-sm text-white/90 font-light leading-relaxed">徹底した品質管理で安心・安全な商品をお届け</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-none w-80 sm:w-96" style="scroll-snap-align: start;">
                            <div class="relative overflow-hidden bg-white rounded-lg shadow-lg">
                                <div class="relative aspect-[4/3]">
                                    <img src="/images/みかんレーン.avif" alt="製造ライン" class="absolute inset-0 w-full h-full object-cover" onerror="this.style.background='linear-gradient(135deg, #dc2626 0%, #f87171 100%)'">
                                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                                    
                                    <div class="absolute inset-0 flex items-end p-6">
                                        <div class="text-white space-y-2">
                                            <h3 class="text-xl font-medium">製造ライン</h3>
                                            <p class="text-sm text-white/90 font-light leading-relaxed">効率的な製造ラインで品質と生産性を両立</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Products Section -->
        <section class="py-24 px-4 bg-neutral-50">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div class="space-y-4">
                        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 tracking-wide">
                            Products
                        </h2>
                        <div class="w-16 h-px bg-slate-400 mx-auto"></div>
                        <p class="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            良い製品は良い原料からしかつくることはできません<br class="hidden sm:block">
                            安心・美味しさ・笑顔を詰めてお届けします
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <!-- みかん (Main product - larger) -->
                    <div class="lg:col-span-2 lg:row-span-2 group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/みかん商品.avif" alt="みかん" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #ff7900 0%, #ffb347 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">みかん</h3>
                                        <p class="text-sm text-white/90 font-light">収穫されたばかりの新鮮なみかんを、旬のうちに皮や種、スジを取り除いて一粒ずつ食べやすく加工し、あっさりした甘さのシラップに漬込みました。果肉の風味を引き出したおいしさをお楽しみ頂けます。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6 lg:hidden">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">みかん</h3>
                                <p class="text-sm text-slate-600 font-light">収穫されたばかりの新鮮なみかんを、旬のうちに皮や種、スジを取り除いて一粒ずつ食べやすく加工し、あっさりした甘さのシラップに漬込みました。果肉の風味を引き出したおいしさをお楽しみ頂けます。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 黄桃 -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-square">
                                <img src="/images/桃.avif" alt="黄桃" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #fbbf24 0%, #fde047 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">黄桃</h3>
                                        <p class="text-sm text-white/90 font-light">国内で収穫した黄桃やギリシャ産の黄桃を、種や皮を取り除き使いやすいダイス状にカットしました。あっさりとした甘さのシラップ漬けで、果肉本来のおいしさをお楽しみいただけます。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6 lg:hidden">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">黄桃</h3>
                                <p class="text-sm text-slate-600 font-light">国内で収穫した黄桃やギリシャ産の黄桃を、種や皮を取り除き使いやすいダイス状にカットしました。あっさりとした甘さのシラップ漬けで、果肉本来のおいしさをお楽しみいただけます。</p>
                            </div>
                        </div>
                    </div>

                    <!-- トマト -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-square">
                                <img src="/images/whole_tomato_canned.avif" alt="トマト" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #dc2626 0%, #f87171 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">トマト</h3>
                                        <p class="text-sm text-white/90 font-light">国内で収穫したトマトを旬の時期に芯を取り除き皮をむいて、トマトを搾汁したジュースに漬け込みました。製造工程で水分を加えておらず、国産トマトのフレッシュな風味を閉じ込めました。ダイスカットの他、国産トマトでは希少なホールタイプも製造しています。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6 lg:hidden">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">トマト</h3>
                                <p class="text-sm text-slate-600 font-light">国内で収穫したトマトを旬の時期に芯を取り除き皮をむいて、トマトを搾汁したジュースに漬け込みました。製造工程で水分を加えておらず、国産トマトのフレッシュな風味を閉じ込めました。ダイスカットの他、国産トマトでは希少なホールタイプも製造しています。</p>
                            </div>
                        </div>
                    </div>

                    <!-- マッシュルーム -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-square">
                                <img src="/images/マッシュルーム.avif" alt="マッシュルーム" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #8b5a3c 0%, #d4a574 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">マッシュルーム</h3>
                                        <p class="text-sm text-white/90 font-light">歯切れがよく、風味豊かなマッシュルームを薄くスライスしました。収穫後すぐに加工する国産の他、世界の主要な産地であるヨーロッパ産、中国産もございます。※冷凍大容量タイプ（ホール・スライス）も取扱っております。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6 lg:hidden">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">マッシュルーム</h3>
                                <p class="text-sm text-slate-600 font-light">歯切れがよく、風味豊かなマッシュルームを薄くスライスしました。収穫後すぐに加工する国産の他、世界の主要な産地であるヨーロッパ産、中国産もございます。※冷凍大容量タイプ（ホール・スライス）も取扱っております。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 冷凍フルーツ -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-square">
                                <img src="/images/冷凍みかんイメージ_edited.avif" alt="冷凍フルーツ" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">冷凍フルーツ</h3>
                                        <p class="text-sm text-white/90 font-light">「国産フルーツ」「皮無し」「シラップ漬け」の冷凍フルーツです。生果調達（産地直送）・生果の一次処理から最終製品まで一貫して行なっています。国産フルーツの皮を除去し、シラップ漬けしたフルーツを一粒ずつ冷凍しています。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6 lg:hidden">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">冷凍フルーツ</h3>
                                <p class="text-sm text-slate-600 font-light">「国産フルーツ」「皮無し」「シラップ漬け」の冷凍フルーツです。生果調達（産地直送）・生果の一次処理から最終製品まで一貫して行なっています。国産フルーツの皮を除去し、シラップ漬けしたフルーツを一粒ずつ冷凍しています。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <div class="space-y-6">
                        <p class="text-slate-600 font-light max-w-xl mx-auto">
                            すべての商品は国産原料にこだわり、厳格な品質管理のもとで製造しています。
                        </p>
                        <a href="/goods" class="inline-flex items-center bg-slate-800 text-white px-8 py-4 font-medium tracking-wide hover:bg-slate-700 transition-colors duration-300 group">
                            商品一覧を見る
                            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Company Introduction Section -->
        <section class="py-24 px-4 bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="order-2 lg:order-1 space-y-8">
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div class="bg-neutral-50 p-6 space-y-2">
                                <div class="text-3xl font-serif font-bold text-slate-800">1921</div>
                                <div class="text-sm text-slate-600 font-light tracking-wide">創業年</div>
                            </div>
                            <div class="bg-neutral-50 p-6 space-y-2">
                                <div class="text-3xl font-serif font-bold text-slate-800">100+</div>
                                <div class="text-sm text-slate-600 font-light tracking-wide">年の歴史</div>
                            </div>
                            <div class="bg-neutral-50 p-6 space-y-2">
                                <div class="text-3xl font-serif font-bold text-slate-800">∞</div>
                                <div class="text-sm text-slate-600 font-light tracking-wide">品質への想い</div>
                            </div>
                        </div>
                    </div>

                    <div class="order-1 lg:order-2 space-y-8">
                        <div class="space-y-6">
                            <div class="space-y-4">
                                <h2 class="text-4xl md:text-5xl font-serif text-slate-800 leading-tight tracking-wide">
                                    私たちについて
                                </h2>
                                <div class="w-16 h-px bg-slate-400"></div>
                            </div>
                            
                            <div class="space-y-6 text-slate-700 leading-relaxed font-light">
                                <div class="space-y-4">
                                    <h3 class="text-2xl md:text-3xl font-serif text-slate-800 leading-tight">
                                        OUR MISSION
                                    </h3>
                                    <div class="space-y-3">
                                        <p class="text-xl text-slate-700 leading-relaxed font-medium">
                                            全ての人に安心・安全でおいしい食を提供し
                                        </p>
                                        <p class="text-xl text-slate-700 leading-relaxed font-medium">
                                            健康で幸せな社会づくりに貢献します
                                        </p>
                                    </div>
                                </div>
                                
                                <p class="text-lg">
                                    大正10年にトマトソース加工業者として創業して以来、みかん、もも等のフルーツ加工品を学校給食をはじめ各方面から幅広くご愛顧を頂戴しております名古屋の食品加工業社です。
                                </p>
                                
                                <p>
                                    今後も安心・安全でおいしい食を提供し、健康で幸せな社会づくりに貢献していきます。
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="/company" class="inline-flex items-center bg-slate-800 text-white px-8 py-4 font-medium tracking-wide hover:bg-slate-700 transition-colors duration-300 group">
                                会社情報を見る
                                <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <a href="/contact" class="inline-flex items-center border-2 border-slate-300 text-slate-700 px-8 py-4 font-medium tracking-wide hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                                お問い合わせ
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-24 pt-16 border-t border-neutral-200">
                    <div class="text-center mb-12">
                        <h3 class="text-2xl font-serif text-slate-800 mb-4">私たちの価値観</h3>
                        <div class="w-12 h-px bg-slate-400 mx-auto"></div>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto">
                                <svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h4 class="text-lg font-medium text-slate-800">品質第一</h4>
                            <p class="text-slate-600 font-light leading-relaxed">
                                国産原料へのこだわりと厳格な品質管理により、
                                安心・安全な食品をお届けします。
                            </p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto">
                                <svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h4 class="text-lg font-medium text-slate-800">信頼関係</h4>
                            <p class="text-slate-600 font-light leading-relaxed">
                                生産者の皆様との長年の信頼関係により、
                                最高品質の原料を確保しています。
                            </p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto">
                                <svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h4 class="text-lg font-medium text-slate-800">持続可能性</h4>
                            <p class="text-slate-600 font-light leading-relaxed">
                                環境に配慮した持続可能な事業運営で、
                                次世代につなぐ責任を果たします。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    res.send(generateHTML('岡本食品｜果実のちからを、もっと自由に', content));
});

// 商品情報ページ
app.get('/goods', (req, res) => {
    const content = `
        <section class="py-24 px-4 bg-neutral-50 mt-20">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div class="space-y-4">
                        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 tracking-wide">
                            Products
                        </h2>
                        <div class="w-16 h-px bg-slate-400 mx-auto"></div>
                        <p class="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            良い製品は良い原料からしかつくることはできません<br class="hidden sm:block">
                            安心・美味しさ・笑顔を詰めてお届けします
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <!-- みかん -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/みかん商品.avif" alt="みかん" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #ff7900 0%, #ffb347 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">みかん</h3>
                                        <p class="text-sm text-white/90 font-light">収穫されたばかりの新鮮なみかんを、旬のうちに皮や種、スジを取り除いて一粒ずつ食べやすく加工し、あっさりした甘さのシラップに漬込みました。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">みかん</h3>
                                <p class="text-sm text-slate-600 font-light">収穫されたばかりの新鮮なみかんを、旬のうちに皮や種、スジを取り除いて一粒ずつ食べやすく加工し、あっさりした甘さのシラップに漬込みました。果肉の風味を引き出したおいしさをお楽しみ頂けます。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 黄桃 -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/桃.avif" alt="黄桃" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #fbbf24 0%, #fde047 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">黄桃</h3>
                                        <p class="text-sm text-white/90 font-light">国内で収穫した黄桃やギリシャ産の黄桃を、種や皮を取り除き使いやすいダイス状にカットしました。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">黄桃</h3>
                                <p class="text-sm text-slate-600 font-light">国内で収穫した黄桃やギリシャ産の黄桃を、種や皮を取り除き使いやすいダイス状にカットしました。あっさりとした甘さのシラップ漬けで、果肉本来のおいしさをお楽しみいただけます。</p>
                            </div>
                        </div>
                    </div>

                    <!-- トマト -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/whole_tomato_canned.avif" alt="トマト" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #dc2626 0%, #f87171 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">トマト</h3>
                                        <p class="text-sm text-white/90 font-light">国内で収穫したトマトを旬の時期に芯を取り除き皮をむいて、トマトを搾汁したジュースに漬け込みました。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">トマト</h3>
                                <p class="text-sm text-slate-600 font-light">国内で収穫したトマトを旬の時期に芯を取り除き皮をむいて、トマトを搾汁したジュースに漬け込みました。製造工程で水分を加えておらず、国産トマトのフレッシュな風味を閉じ込めました。</p>
                            </div>
                        </div>
                    </div>

                    <!-- マッシュルーム -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/マッシュルーム.avif" alt="マッシュルーム" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #8b5a3c 0%, #d4a574 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">マッシュルーム</h3>
                                        <p class="text-sm text-white/90 font-light">歯切れがよく、風味豊かなマッシュルームを薄くスライスしました。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">マッシュルーム</h3>
                                <p class="text-sm text-slate-600 font-light">歯切れがよく、風味豊かなマッシュルームを薄くスライスしました。収穫後すぐに加工する国産の他、世界の主要な産地であるヨーロッパ産、中国産もございます。</p>
                            </div>
                        </div>
                    </div>

                    <!-- 冷凍フルーツ -->
                    <div class="group cursor-pointer">
                        <div class="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                            <div class="relative aspect-[4/3]">
                                <img src="/images/冷凍みかんイメージ_edited.avif" alt="冷凍フルーツ" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.style.background='linear-gradient(135deg, #3b82f6 0%, #93c5fd 100%)'">
                                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div class="text-white space-y-2">
                                        <h3 class="text-xl font-medium">冷凍フルーツ</h3>
                                        <p class="text-sm text-white/90 font-light">「国産フルーツ」「皮無し」「シラップ漬け」の冷凍フルーツです。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="p-6">
                                <h3 class="text-lg font-medium text-slate-800 mb-2">冷凍フルーツ</h3>
                                <p class="text-sm text-slate-600 font-light">「国産フルーツ」「皮無し」「シラップ漬け」の冷凍フルーツです。生果調達（産地直送）・生果の一次処理から最終製品まで一貫して行なっています。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <div class="space-y-6">
                        <p class="text-slate-600 font-light max-w-xl mx-auto">
                            すべての商品は国産原料にこだわり、厳格な品質管理のもとで製造しています。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    res.send(generateHTML('商品情報｜岡本食品', content));
});

// 会社情報ページ
app.get('/company', (req, res) => {
    const content = `
        <section class="py-24 px-4 bg-white mt-20">
            <div class="max-w-7xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="order-2 lg:order-1 space-y-8">
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div class="bg-neutral-50 p-6 space-y-2">
                                <div class="text-3xl font-serif font-bold text-slate-800">1921</div>
                                <div class="text-sm text-slate-600 font-light tracking-wide">創業年</div>
                            </div>
                            <div class="bg-neutral-50 p-6 space-y-2">
                                <div class="text-3xl font-serif font-bold text-slate-800">100+</div>
                                <div class="text-sm text-slate-600 font-light tracking-wide">年の歴史</div>
                            </div>
                            <div class="bg-neutral-50 p-6 space-y-2">
                                <div class="text-3xl font-serif font-bold text-slate-800">∞</div>
                                <div class="text-sm text-slate-600 font-light tracking-wide">品質への想い</div>
                            </div>
                        </div>
                    </div>

                    <div class="order-1 lg:order-2 space-y-8">
                        <div class="space-y-6">
                            <div class="space-y-4">
                                <h2 class="text-4xl md:text-5xl font-serif text-slate-800 leading-tight tracking-wide">
                                    私たちについて
                                </h2>
                                <div class="w-16 h-px bg-slate-400"></div>
                            </div>
                            
                            <div class="space-y-6 text-slate-700 leading-relaxed font-light">
                                <div class="space-y-4">
                                    <h3 class="text-2xl md:text-3xl font-serif text-slate-800 leading-tight">
                                        OUR MISSION
                                    </h3>
                                    <div class="space-y-3">
                                        <p class="text-xl text-slate-700 leading-relaxed font-medium">
                                            全ての人に安心・安全でおいしい食を提供し
                                        </p>
                                        <p class="text-xl text-slate-700 leading-relaxed font-medium">
                                            健康で幸せな社会づくりに貢献します
                                        </p>
                                    </div>
                                </div>
                                
                                <p class="text-lg">
                                    大正10年にトマトソース加工業者として創業して以来、みかん、もも等のフルーツ加工品を学校給食をはじめ各方面から幅広くご愛顧を頂戴しております名古屋の食品加工業社です。
                                </p>
                                
                                <p>
                                    今後も安心・安全でおいしい食を提供し、健康で幸せな社会づくりに貢献していきます。
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="/contact" class="inline-flex items-center border-2 border-slate-300 text-slate-700 px-8 py-4 font-medium tracking-wide hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                                お問い合わせ
                            </a>
                        </div>
                    </div>
                </div>

                <div class="mt-24 pt-16 border-t border-neutral-200">
                    <div class="text-center mb-12">
                        <h3 class="text-2xl font-serif text-slate-800 mb-4">会社概要</h3>
                        <div class="w-12 h-px bg-slate-400 mx-auto"></div>
                    </div>
                    
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-gray-50 overflow-hidden shadow rounded-lg">
                            <div class="px-4 py-5 sm:p-6">
                                <dl class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500">会社名</dt>
                                        <dd class="mt-1 text-sm text-gray-900">岡本食品株式会社</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500">設立</dt>
                                        <dd class="mt-1 text-sm text-gray-900">大正10年（1921年）</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500">所在地</dt>
                                        <dd class="mt-1 text-sm text-gray-900">〒457-0802 愛知県名古屋市南区要町3-17</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500">電話番号</dt>
                                        <dd class="mt-1 text-sm text-gray-900">052-611-5301</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500">FAX番号</dt>
                                        <dd class="mt-1 text-sm text-gray-900">052-613-2607</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500">事業内容</dt>
                                        <dd class="mt-1 text-sm text-gray-900">国産フルーツ加工品の製造・販売</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-24 pt-16 border-t border-neutral-200">
                    <div class="text-center mb-12">
                        <h3 class="text-2xl font-serif text-slate-800 mb-4">私たちの価値観</h3>
                        <div class="w-12 h-px bg-slate-400 mx-auto"></div>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto">
                                <svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h4 class="text-lg font-medium text-slate-800">品質第一</h4>
                            <p class="text-slate-600 font-light leading-relaxed">
                                国産原料へのこだわりと厳格な品質管理により、
                                安心・安全な食品をお届けします。
                            </p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto">
                                <svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h4 class="text-lg font-medium text-slate-800">信頼関係</h4>
                            <p class="text-slate-600 font-light leading-relaxed">
                                生産者の皆様との長年の信頼関係により、
                                最高品質の原料を確保しています。
                            </p>
                        </div>
                        
                        <div class="text-center space-y-4">
                            <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto">
                                <svg class="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h4 class="text-lg font-medium text-slate-800">持続可能性</h4>
                            <p class="text-slate-600 font-light leading-relaxed">
                                環境に配慮した持続可能な事業運営で、
                                次世代につなぐ責任を果たします。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    res.send(generateHTML('会社情報｜岡本食品', content));
});

// お問い合わせページ
app.get('/contact', (req, res) => {
    const content = `
        <div class="py-24 bg-white mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center mb-16">
                    <div class="space-y-4">
                        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 tracking-wide">Contact</h2>
                        <div class="w-16 h-px bg-slate-400 mx-auto"></div>
                        <p class="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            お気軽にお問い合わせください
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-2xl font-serif text-slate-800 mb-6">お問い合わせ先</h3>
                            <div class="space-y-6">
                                <div class="flex items-start space-x-4">
                                    <div class="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500 mb-1">住所</dt>
                                        <dd class="text-gray-900">〒457-0802<br>愛知県名古屋市南区要町3-17</dd>
                                    </div>
                                </div>
                                
                                <div class="flex items-start space-x-4">
                                    <div class="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500 mb-1">電話番号</dt>
                                        <dd class="text-gray-900">052-611-5301</dd>
                                    </div>
                                </div>
                                
                                <div class="flex items-start space-x-4">
                                    <div class="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7H3a1 1 0 01-1-1V5a1 1 0 011-1h4z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500 mb-1">FAX番号</dt>
                                        <dd class="text-gray-900">052-613-2607</dd>
                                    </div>
                                </div>
                                
                                <div class="flex items-start space-x-4">
                                    <div class="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <dt class="text-sm font-medium text-gray-500 mb-1">営業時間</dt>
                                        <dd class="text-gray-900">平日 9:00-17:00</dd>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-neutral-50 p-8 rounded-lg">
                        <h3 class="text-2xl font-serif text-slate-800 mb-6">お問い合わせフォーム</h3>
                        <form class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">お名前 <span class="text-red-500">*</span></label>
                                <input type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">メールアドレス <span class="text-red-500">*</span></label>
                                <input type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">電話番号</label>
                                <input type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">お問い合わせの種類</label>
                                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                                    <option>商品について</option>
                                    <option>取引について</option>
                                    <option>その他</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">お問い合わせ内容 <span class="text-red-500">*</span></label>
                                <textarea rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none" placeholder="お問い合わせ内容をご記入ください"></textarea>
                            </div>
                            
                            <div>
                                <button type="submit" class="w-full bg-slate-800 text-white py-4 px-6 rounded-lg font-medium tracking-wide hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors">
                                    送信する
                                </button>
                            </div>
                        </form>
                        
                        <div class="mt-6 text-center">
                            <p class="text-sm text-gray-500">
                                <span class="text-red-500">*</span> は必須項目です
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    res.send(generateHTML('お問い合わせ｜岡本食品', content));
});

// 採用情報ページ
app.get('/recruit', (req, res) => {
    const content = `
        <div class="py-24 bg-white mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="lg:text-center mb-16">
                    <div class="space-y-4">
                        <h2 class="text-4xl md:text-5xl font-serif text-slate-800 tracking-wide">Recruit</h2>
                        <div class="w-16 h-px bg-slate-400 mx-auto"></div>
                        <p class="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                            私たちと一緒に働きませんか
                        </p>
                    </div>
                </div>

                <div class="text-center">
                    <div class="bg-neutral-50 p-12 rounded-lg">
                        <h3 class="text-2xl font-serif text-slate-800 mb-4">現在、募集中の職種はありません</h3>
                        <p class="text-slate-600">
                            採用に関するお問い合わせは、お問い合わせページからご連絡ください。
                        </p>
                        <div class="mt-6">
                            <a href="/contact" class="inline-flex items-center bg-slate-800 text-white px-8 py-4 font-medium tracking-wide hover:bg-slate-700 transition-colors duration-300">
                                お問い合わせ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    res.send(generateHTML('採用情報｜岡本食品', content));
});

// サーバー起動
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ サーバーが起動しました！`);
    console.log(`🌐 Local:    http://localhost:${PORT}`);
    console.log(`🌐 Network:  http://192.168.1.171:${PORT}`);
    console.log('');
    console.log('ブラウザで上記のURLにアクセスしてください。');
});