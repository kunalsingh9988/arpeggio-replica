// ── Page shell: head, nav, menu overlay ──────────────────────────────────
import { IM, IMG, SOCIALS, NAV, LEGAL_LINKS } from './data.mjs';
import { footer, ctaBand, promo, wordmark } from './comps.mjs';

const isSub = (p) => p.dir && p.dir !== '.';
const rel = (p, href) => (isSub(p) ? '../' : '') + href;

export function page(p) {
  const r = (href) => rel(p, href);
  const rim = (f) => rel(p, '') + 'assets/img/' + f;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p.title}</title>
<meta name="description" content="${p.description || 'Arpeggio — The Creative Agency. One subscription, unlimited design iterations.'}">
<link rel="icon" href="${rim(IMG.kLogo)}" type="image/png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&family=Playfair+Display:ital,wght@1,400;1,500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${r('assets/css/main.css')}">
</head>
<body class="${p.cls || ''}" id="top">
<header class="nav" data-nav>
  <div class="nav-socials">
    ${SOCIALS.map(([t, h]) => `<a href="${h}" target="_blank" rel="noopener">${t}</a>`).join('')}
  </div>
  <a class="nav-logo" href="${r('index.html')}" aria-label="Kunal Singh home">${wordmark('nav-wordmark')}</a>
  <button class="nav-burger" data-menu-open aria-label="Open menu"><i></i><i></i><i></i></button>
</header>

<div class="menu" data-menu hidden>
  <div class="menu-in">
    <div class="menu-left" data-mi>
      <p class="menu-loc">I am based in<br><b>India</b><br>and work remotely.</p>
      <p class="menu-clock" data-clock>--:--:--</p>
      <p class="menu-tz">current Time zone IST (GMT+5:30)</p>
    </div>
    <nav class="menu-main">
      ${NAV.map(([t, h], i) => `<a href="${r(h)}" data-mi style="--i:${i}"><span>${t}</span></a>`).join('')}
    </nav>
    <nav class="menu-legal">
      ${LEGAL_LINKS.map(([t, h], i) => `<a href="${r(h)}" data-mi style="--i:${i + 6}">${t}</a>`).join('')}
    </nav>
  </div>
  <button class="menu-close" data-menu-close aria-label="Close menu"><i></i><i></i></button>
</div>

<main>
${p.body}
${p.cta === false ? '' : ctaBand()}
</main>
${p.footer === false ? '' : footer()}
${promo()}
<script src="${r('assets/js/main.js')}"></script>
</body>
</html>`;
  return isSub(p)
    ? html
        .replaceAll('"assets/', '"../assets/')
        .replace(/href="(?!https?:|mailto:|tel:|#|\/)/g, 'href="../')
    : html;
}
