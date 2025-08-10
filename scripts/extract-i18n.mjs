import fg from 'fast-glob';
import fs from 'fs';
import path from 'path';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';

// どの環境でも関数を取り出せるように保険
const traverse = typeof traverseModule === 'function'
  ? traverseModule
  : traverseModule.default;

const GLOB = ['src/**/*.{ts,tsx,js,jsx}'];
const OUT_DIR = 'i18n-extract';

fs.mkdirSync(OUT_DIR, {recursive: true});

const jpRegex = /[ぁ-んァ-ヶ一-龯々〆〇ー]/;
const ignore = [
  '**/node_modules/**',
  '**/.next/**',
  '**/dist/**',
  '**/build/**',
  '**/tests/**',
  '**/__tests__/**'
];

const files = fg.sync(GLOB, {ignore});
const rows = [];

function parseFile(file) {
  const code = fs.readFileSync(file, 'utf8');
  let ast;
  try {
    ast = parse(code, {
      sourceType: 'module',
      plugins: ['typescript','jsx','decorators-legacy','classProperties','objectRestSpread'],
      errorRecovery: true
    });
  } catch {
    return;
  }

  traverse(ast, {
    StringLiteral(p) {
      const t = (p.node.value ?? '').trim();
      if (t && jpRegex.test(t)) rows.push({file, line: p.node.loc?.start.line ?? 0, text: t});
    },
    TemplateLiteral(p) {
      const cooked = p.node.quasis.map(q => q.value.cooked ?? '').join('').trim();
      if (cooked && jpRegex.test(cooked)) rows.push({file, line: p.node.loc?.start.line ?? 0, text: cooked});
    },
    JSXText(p) {
      const t = p.node.value.replace(/\s+/g,' ').trim();
      if (t && jpRegex.test(t)) rows.push({file, line: p.node.loc?.start.line ?? 0, text: t});
    },
    JSXAttribute(p) {
      const v = p.node.value;
      if (v && v.type === 'StringLiteral') {
        const t = v.value.trim();
        if (t && jpRegex.test(t)) rows.push({file, line: p.node.loc?.start.line ?? 0, text: t});
      }
    }
  });
}

for (const f of files) parseFile(f);

// 重複除去
const uniq = [];
const seen = new Set();
for (const r of rows) {
  if (!seen.has(r.text)) { seen.add(r.text); uniq.push(r); }
}

// ゆるいキー生成
function slugify(s) {
  return s.replace(/[^\p{L}\p{N}\s._-]/gu,'').trim().split(/\s+/).slice(0,6).join('_').toLowerCase();
}
function sectionFrom(file) {
  const parts = file.split(path.sep);
  const i = parts.lastIndexOf('app');
  if (i >= 0 && parts[i+1]) return parts[i+1].replace(/^\[(.+)\]$/, '$1');
  return path.basename(path.dirname(file)) || 'common';
}

const entries = uniq.map((r,i) => {
  const section = sectionFrom(r.file);
  const keyBase = slugify(r.text) || `text_${i+1}`;
  const key = `${section}.${keyBase}`;
  return {key, ja: r.text, file: r.file, line: r.line};
});

// 出力
const csv = 'key,ja,file,line\n' + entries.map(e =>
  `${e.key},"${e.ja.replace(/"/g,'""')}",${e.file},${e.line}`
).join('\n');
fs.writeFileSync(`${OUT_DIR}/texts.csv`, csv, 'utf8');

const jaJson = {};
for (const e of entries) jaJson[e.key] = e.ja;
fs.writeFileSync(`${OUT_DIR}/ja.json`, JSON.stringify(jaJson, null, 2), 'utf8');

const enJson = {};
for (const e of entries) enJson[e.key] = '';
fs.writeFileSync(`${OUT_DIR}/en.json`, JSON.stringify(enJson, null, 2), 'utf8');

console.log(`抽出完了: ${entries.length}件
- ${OUT_DIR}/texts.csv
- ${OUT_DIR}/ja.json
- ${OUT_DIR}/en.json`);
