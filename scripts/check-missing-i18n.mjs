#!/usr/bin/env node

/**
 * 自動チェックスクリプト：ハードコード日本語検出
 * Next.js 15 + next-intl プロジェクト用
 * 
 * 機能:
 * 1. src配下のファイルでハードコード日本語を検出
 * 2. 翻訳キー不足を検出
 * 3. 使用されていない翻訳キーを検出
 * 4. レポート出力
 */

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

// 日本語文字の正規表現
const JAPANESE_REGEX = /[ぁ-んァ-ヶ一-龯々〆〇ー]/

// 除外するファイルパターン
const EXCLUDE_PATTERNS = [
  '**/node_modules/**',
  '**/.next/**',
  '**/messages/**',
  '**/*.test.*',
  '**/*.spec.*',
]

// 翻訳キーの使用パターン
const TRANSLATION_USAGE_REGEX = /t\(['"`]([^'"`]+)['"`]\)/g

/**
 * ファイル内容からハードコード日本語を検出
 */
function findHardcodedJapanese(filePath, content) {
  const lines = content.split('\n')
  const issues = []

  lines.forEach((line, index) => {
    if (JAPANESE_REGEX.test(line)) {
      // コメントやimport文は除外
      if (line.trim().startsWith('//') || line.trim().startsWith('*') || line.includes('import')) {
        return
      }
      
      // alt属性などの許可された用途かチェック
      const isInAllowedContext = line.includes('alt=') || line.includes('title=') || line.includes('placeholder=')
      
      if (!isInAllowedContext) {
        issues.push({
          file: filePath,
          line: index + 1,
          content: line.trim(),
          type: 'hardcoded_japanese'
        })
      }
    }
  })

  return issues
}

/**
 * 翻訳キーの使用状況を検出
 */
function findTranslationUsage(content) {
  const matches = []
  let match

  while ((match = TRANSLATION_USAGE_REGEX.exec(content)) !== null) {
    matches.push(match[1])
  }

  return matches
}

/**
 * 翻訳ファイルを読み込み
 */
function loadTranslationMessages(locale) {
  try {
    const filePath = path.join(process.cwd(), 'messages', `${locale}.json`)
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    console.warn(`Warning: Could not load messages for locale ${locale}`)
    return {}
  }
}

/**
 * 翻訳キーが存在するかチェック
 */
function checkTranslationKeyExists(keyPath, messages) {
  const keys = keyPath.split('.')
  let current = messages

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return false
    }
  }

  return true
}

/**
 * オブジェクトから全ての翻訳キーを取得
 */
function getAllTranslationKeys(obj, prefix = '') {
  const keys = []
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getAllTranslationKeys(value, fullKey))
    } else {
      keys.push(fullKey)
    }
  }
  
  return keys
}

/**
 * メイン処理
 */
async function main() {
  console.log('🔍 ハードコード日本語チェックを開始...\n')

  // ソースファイルを取得
  const sourceFiles = await glob('src/**/*.{tsx,ts,js,jsx}', {
    ignore: EXCLUDE_PATTERNS
  })

  console.log(`📁 チェック対象ファイル: ${sourceFiles.length}件\n`)

  const hardcodedIssues = []
  const usedTranslationKeys = new Set()

  // 各ファイルをチェック
  for (const filePath of sourceFiles) {
    const content = fs.readFileSync(filePath, 'utf8')
    
    // ハードコード日本語を検出
    const issues = findHardcodedJapanese(filePath, content)
    hardcodedIssues.push(...issues)
    
    // 翻訳キーの使用状況を記録
    const usedKeys = findTranslationUsage(content)
    usedKeys.forEach(key => usedTranslationKeys.add(key))
  }

  // 翻訳ファイルを読み込み
  const jaMessages = loadTranslationMessages('ja')
  const enMessages = loadTranslationMessages('en')

  // 全翻訳キーを取得
  const allJaKeys = new Set(getAllTranslationKeys(jaMessages))
  const allEnKeys = new Set(getAllTranslationKeys(enMessages))

  // レポート出力
  console.log('📊 チェック結果レポート')
  console.log('=' .repeat(50))

  // 1. ハードコード日本語
  if (hardcodedIssues.length > 0) {
    console.log(`\n❌ ハードコード日本語: ${hardcodedIssues.length}件`)
    console.log('-'.repeat(30))
    
    const groupedByFile = hardcodedIssues.reduce((acc, issue) => {
      if (!acc[issue.file]) acc[issue.file] = []
      acc[issue.file].push(issue)
      return acc
    }, {})

    for (const [file, issues] of Object.entries(groupedByFile)) {
      console.log(`\n📄 ${file}:`)
      issues.forEach(issue => {
        console.log(`  L${issue.line}: ${issue.content}`)
      })
    }
  } else {
    console.log('\n✅ ハードコード日本語: 検出されませんでした')
  }

  // 2. 不足している翻訳キー
  const missingInEn = [...usedTranslationKeys].filter(key => 
    !checkTranslationKeyExists(key, enMessages)
  )
  
  if (missingInEn.length > 0) {
    console.log(`\n❌ 英語翻訳不足: ${missingInEn.length}件`)
    console.log('-'.repeat(30))
    missingInEn.forEach(key => console.log(`  ${key}`))
  } else {
    console.log('\n✅ 英語翻訳: すべてのキーが存在します')
  }

  // 3. 未使用の翻訳キー
  const unusedJaKeys = [...allJaKeys].filter(key => !usedTranslationKeys.has(key))
  const unusedEnKeys = [...allEnKeys].filter(key => !usedTranslationKeys.has(key))

  if (unusedJaKeys.length > 0) {
    console.log(`\n⚠️  未使用翻訳キー(ja): ${unusedJaKeys.length}件`)
    console.log('-'.repeat(30))
    unusedJaKeys.forEach(key => console.log(`  ${key}`))
  }

  // 4. 統計情報
  console.log('\n📈 統計情報')
  console.log('-'.repeat(30))
  console.log(`使用中の翻訳キー: ${usedTranslationKeys.size}件`)
  console.log(`日本語翻訳キー総数: ${allJaKeys.size}件`)
  console.log(`英語翻訳キー総数: ${allEnKeys.size}件`)
  console.log(`ハードコード日本語: ${hardcodedIssues.length}件`)

  // 5. 終了コード
  const hasIssues = hardcodedIssues.length > 0 || missingInEn.length > 0
  
  if (hasIssues) {
    console.log('\n❌ 修正が必要な問題が見つかりました')
    process.exit(1)
  } else {
    console.log('\n✅ 全てのチェックが正常に完了しました')
    process.exit(0)
  }
}

// スクリプト実行
main().catch(error => {
  console.error('Error:', error)
  process.exit(1)
})