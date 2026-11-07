#!/usr/bin/env node
// ── Arpeggio replica — static site builder ───────────────────────────────
// Usage: node build.mjs   →  writes dist/
import { mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { page } from './src/layout.mjs';
import { PROJECTS, ARTICLES, LEGAL_PAGES } from './src/data.mjs';
import home from './src/pages/home.mjs';
import about from './src/pages/about.mjs';
import work from './src/pages/work.mjs';
import contact from './src/pages/contact.mjs';
import journal from './src/pages/journal.mjs';
import e404 from './src/pages/e404.mjs';
import { workDetail } from './src/pages/workDetail.mjs';
import { articlePage } from './src/pages/article.mjs';
import { legalPage } from './src/pages/legal.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');
rmSync(OUT, { recursive: true, force: true });

const write = (path, html) => {
  const f = join(OUT, path);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, html);
  console.log('  ✓', path);
};

const pages = [
  ['index.html', home],
  ['about.html', about],
  ['work.html', work],
  ['contact.html', contact],
  ['journal.html', journal],
  ['404.html', e404],
  ...PROJECTS.map(p => [`work/${p.slug}.html`, workDetail(p)]),
  ...ARTICLES.map(a => [`journal/${a.slug}.html`, articlePage(a)]),
  ...Object.keys(LEGAL_PAGES).map(s => [`legal/${s}.html`, legalPage(s)]),
];

for (const [path, p] of pages) write(path, page(p));
cpSync(join(ROOT, 'assets'), join(OUT, 'assets'), { recursive: true });
console.log(`\nbuilt ${pages.length} pages → dist/`);
