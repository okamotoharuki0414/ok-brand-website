/**
 * 画像のURLを正規化する関数
 * 日本語ファイル名に対してURL エンコーディングを適用
 */
export function normalizeImageUrl(imagePath: string): string {
  // 既にURLエンコードされている場合はそのまま返す
  if (imagePath.includes('%')) {
    return imagePath;
  }
  
  // /images/ で始まる場合は、ファイル名部分のみをエンコード
  if (imagePath.startsWith('/images/')) {
    const fileName = imagePath.replace('/images/', '');
    const encodedFileName = encodeURIComponent(fileName);
    return `/images/${encodedFileName}`;
  }
  
  return imagePath;
}

/**
 * 日本語文字が含まれているかチェック
 */
export function containsJapanese(text: string): boolean {
  return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
}