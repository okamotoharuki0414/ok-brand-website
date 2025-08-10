import 'package:flutter/material.dart';

class ImageGallerySection extends StatelessWidget {
  const ImageGallerySection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // セクションタイトル
          Container(
            margin: const EdgeInsets.only(bottom: 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Gallery',
                  style: Theme.of(context).textTheme.headlineLarge?.copyWith(
                    fontWeight: FontWeight.w300,
                    color: Colors.black87,
                    letterSpacing: 1.2,
                  ),
                ),
                const SizedBox(height: 8),
                Container(
                  width: 60,
                  height: 2,
                  decoration: BoxDecoration(
                    color: Colors.grey[400],
                    borderRadius: BorderRadius.circular(1),
                  ),
                ),
                const SizedBox(height: 12),
                Text(
                  '自然の恵みから工場まで、私たちの想いをお伝えします',
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    color: Colors.grey[600],
                    fontWeight: FontWeight.w300,
                    height: 1.6,
                  ),
                ),
              ],
            ),
          ),
          
          // 画像ギャラリー
          LayoutBuilder(
            builder: (context, constraints) {
              // レスポンシブ対応：画面幅に応じて表示方法を変更
              if (constraints.maxWidth > 768) {
                // タブレット・デスクトップ：横並び表示
                return _buildHorizontalGallery(context);
              } else {
                // スマートフォン：カルーセル表示
                return _buildCarouselGallery(context);
              }
            },
          ),
        ],
      ),
    );
  }

  // タブレット・デスクトップ用横並びギャラリー
  Widget _buildHorizontalGallery(BuildContext context) {
    return Row(
      children: _getGalleryItems().map((item) {
        return Expanded(
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 8),
            child: _buildGalleryItem(context, item),
          ),
        );
      }).toList(),
    );
  }

  // スマートフォン用カルーセルギャラリー
  Widget _buildCarouselGallery(BuildContext context) {
    return SizedBox(
      height: 280,
      child: PageView.builder(
        padEnds: false,
        controller: PageController(viewportFraction: 0.85),
        itemCount: _getGalleryItems().length,
        itemBuilder: (context, index) {
          final item = _getGalleryItems()[index];
          return Container(
            margin: const EdgeInsets.symmetric(horizontal: 8),
            child: _buildGalleryItem(context, item),
          );
        },
      ),
    );
  }

  // 個別の画像アイテム（iOS風すりガラスデザイン）
  Widget _buildGalleryItem(BuildContext context, GalleryItem item) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 20,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          fit: StackFit.expand,
          children: [
            // 背景画像
            Image.asset(
              item.imagePath,
              fit: BoxFit.cover,
              errorBuilder: (context, error, stackTrace) {
                // 画像が見つからない場合のフォールバック
                return Container(
                  color: Colors.grey[200],
                  child: const Center(
                    child: Icon(
                      Icons.image_not_supported,
                      size: 48,
                      color: Colors.grey,
                    ),
                  ),
                );
              },
            ),
            
            // すりガラス効果のオーバーレイ
            Positioned(
              bottom: 0,
              left: 0,
              right: 0,
              child: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [
                      Colors.transparent,
                      Colors.black.withOpacity(0.3),
                      Colors.black.withOpacity(0.7),
                    ],
                  ),
                ),
                child: ClipRRect(
                  child: BackdropFilter(
                    filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
                    child: Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.1),
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            item.title,
                            style: const TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.w600,
                              letterSpacing: 0.5,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            item.caption,
                            style: TextStyle(
                              color: Colors.white.withOpacity(0.9),
                              fontSize: 14,
                              fontWeight: FontWeight.w300,
                              height: 1.4,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ギャラリーアイテムのデータ
  List<GalleryItem> _getGalleryItems() {
    return [
      GalleryItem(
        imagePath: 'assets/images/mikan1.avif',
        title: '旬のみかん',
        caption: '厳選された国産みかんの\n自然な甘さをお届け',
      ),
      GalleryItem(
        imagePath: 'assets/images/mikan2.avif',
        title: '収穫の瞬間',
        caption: '熟練農家による\n丁寧な収穫作業',
      ),
      GalleryItem(
        imagePath: 'assets/images/factory.avif',
        title: '工場の品質管理',
        caption: '最新設備による\n安心・安全な製造工程',
      ),
      GalleryItem(
        imagePath: 'assets/images/farmer.avif',
        title: '農家の作業風景',
        caption: '100年続く伝統と\n変わらぬ想いで',
      ),
    ];
  }
}

// ギャラリーアイテムのデータクラス
class GalleryItem {
  final String imagePath;
  final String title;
  final String caption;

  const GalleryItem({
    required this.imagePath,
    required this.title,
    required this.caption,
  });
}

// メインのホーム画面Widget（使用例）
class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero セクション
            _buildHeroSection(context),
            
            // 画像ギャラリーセクション（新規追加）
            const ImageGallerySection(),
            
            // その他のセクション
            _buildOtherSections(context),
          ],
        ),
      ),
    );
  }

  Widget _buildHeroSection(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            Color(0xFF1E3A8A),
            Color(0xFF3B82F6),
          ],
        ),
      ),
      child: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'OK BRAND',
              style: TextStyle(
                fontSize: 48,
                fontWeight: FontWeight.w300,
                color: Colors.white,
                letterSpacing: 2,
              ),
            ),
            SizedBox(height: 16),
            Text(
              '自然の恵みを、まっすぐに。',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w300,
                color: Colors.white70,
                letterSpacing: 1,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildOtherSections(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(32),
      child: const Text(
        'その他のセクション（商品情報、会社紹介など）',
        style: TextStyle(fontSize: 18),
      ),
    );
  }
}

// 必要なimportを追加
import 'dart:ui';

// main.dartでの使用例
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'OK BRAND',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'SF Pro Display', // iOS風フォント
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const HomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}