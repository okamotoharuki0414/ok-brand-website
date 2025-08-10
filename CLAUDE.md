# CLAUDE.md

このファイルは、このプロジェクトでClaude Codeが正しく動作するための設定とトラブルシューティング情報を提供します。

## プロジェクト概要

Next.js 15.4.5 (App Router) + Tailwind CSS + TypeScriptで構築された岡本食品株式会社のWebサイト。
実際の企業情報に基づいた7ページ構成のコーポレートサイト。

## 開発コマンド

### 基本操作
- `npm run dev` - 開発サーバー起動
- `npm run build` - 本番ビルド
- `npm run start` - 本番サーバー起動
- `npm run lint` - ESLint実行

### トラブルシューティング用コマンド
- `rm -rf .next` - Next.jsキャッシュクリア
- `rm -rf node_modules package-lock.json && npm install` - 依存関係完全再インストール
- `npm run dev -- -p 3001` - 代替ポート3001で起動（ポート競合時）

## 既知の問題と解決策

### 1. サイトにアクセスできない問題
**症状**: 開発サーバーは起動するがブラウザでアクセスできない

**解決手順（重要度順）**:
1. Next.jsキャッシュの削除: `rm -rf .next`
2. 依存関係の完全再インストール: `rm -rf node_modules package-lock.json && npm install`
3. 代替ポートでの起動: `npm run dev -- -p 3001`
4. localhost の代わりに127.0.0.1でアクセス: `http://127.0.0.1:3000`
5. ブラウザのハード再読み込み: Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows)
6. シークレットモードでのアクセステスト

### 2. Geistフォントのインポートエラー
**症状**: `Export GeistMono doesn't exist in target module`

**解決策**: layout.tsxで正しいインポートパスを使用
```typescript
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";  // 重要: /monoから！
```

### 3. ページ遷移ができない問題
**症状**: リンクをクリックしても「ページが読み込めない」

**原因**: 各ページで個別にHeaderコンポーネントを呼び出している
**解決策**: App Routerの正しい構造に修正
- layout.tsxでHeaderを一元管理
- 各page.tsxからHeaderの重複呼び出しを削除

## アーキテクチャ

### ディレクトリ構造
```
src/
├── app/
│   ├── layout.tsx          # 全ページ共通レイアウト（Header含む）
│   ├── page.tsx           # トップページ
│   ├── goods/page.tsx     # 商品情報
│   ├── company/page.tsx   # 会社情報
│   ├── recruit/page.tsx   # 採用情報
│   ├── contact/page.tsx   # お問い合わせ
│   ├── blog/page.tsx      # ブログ
│   └── features/page.tsx  # 特集
└── components/
    └── Header.tsx         # 共通ヘッダー
```

### 重要な設定ファイル
- `next.config.ts` - Next.js設定
- `tailwind.config.ts` - Tailwind CSS設定
- `tsconfig.json` - TypeScript設定

## 企業情報

**岡本食品株式会社 (OKAMOTO SHOKUHIN CO.,LTD.)**
- 創業: 大正10年（1921年）
- 所在地: 〒457-0802 愛知県名古屋市南区要町3-17
- TEL: 052-611-5301
- FAX: 052-613-2607
- 事業内容: 国産フルーツ加工品の製造・販売

### 主要商品
- みかん缶詰
- 黄桃缶詰  
- トマト加工品
- マッシュルーム
- パインアップル
- ミックスフルーツ
- 冷凍フルーツ

## デザインシステム

### カラーパレット
- メインカラー: オレンジ系（orange-800, orange-100等）
- ベースカラー: 白（white）
- アクセントカラー: ストーン系（stone-50, stone-600等）

### フォント
- サンセリフ: GeistSans (geist/font/sans)
- モノスペース: GeistMono (geist/font/mono)

## 緊急時対応

### サーバーが完全に起動しない場合
1. ターミナルのエラーログを確認
2. 依存関係の完全再インストール
3. プロジェクトの完全再作成（最終手段）

### プロジェクト再作成手順（緊急時）
```bash
# 新しいプロジェクト作成
npx create-next-app@latest ok-brand-website-new --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 必要ファイルのコピー
# - src/app/ 配下の全ファイル
# - src/components/ フォルダ
# - public/ 配下のカスタムファイル

# 依存関係の追加
npm install geist
```

## 注意事項

1. **Headerコンポーネントは必ずlayout.tsxでのみ呼び出す**
2. **Geistフォントのインポートパスに注意** (sans/mono別々)
3. **Next.jsキャッシュ問題は頻発する** - 定期的な.nextフォルダ削除を推奨
4. **ポート3000が使用中の場合は3001を使用**

## 開発環境

- Next.js: 15.4.5
- React: 19.1.0
- TypeScript: ^5
- Tailwind CSS: ^4
- ESLint: ^9
- Node.js: 推奨 v18以上