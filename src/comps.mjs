// ── Shared component builders ────────────────────────────────────────────
import { IM, IMG, SOCIALS, NAV, LEGAL_LINKS, TOOLS, BRAND_WORDS, FAQS, TESTIMONIALS, ARTICLES, NEW_WAVE_CARD } from './data.mjs';

export const img = (f, alt = '', cls = '', extra = '') =>
  `<img src="${IM(f)}" alt="${alt}" class="${cls}" loading="lazy" ${extra}>`;

// project img with optional object-position crop
export const pimg = ([f, alt, pos]) =>
  `<img src="${IM(f)}" alt="${alt}" loading="lazy"${pos ? ` style="object-position:${pos}"` : ''}>`;

// Kunal® wordmark — rendered as text so it uses the page font
export const wordmark = (cls = 'wordmark') =>
  `<span class="${cls}">Kunal<i>®</i></span>`;

// plus-sign grid marker used across hero/dark sections
export const plus = () => `<span class="plus" aria-hidden="true"></span>`;

// orange circle bullet
export const dot = (cls = '') => `<span class="dot ${cls}" aria-hidden="true"></span>`;

// Section label row: orange dot + bold label + grey caption right
export const secLabel = (label, caption, light = false) => `
  <div class="sec-label${light ? ' light' : ''}" data-rv>
    <p class="sec-label-l">${dot()} <strong>${label}</strong></p>
    <p class="sec-label-r">${caption}</p>
  </div>`;

// Big headline — split into words for staggered reveal
export const bigHead = (text, cls = '', tag = 'h2') =>
  `<${tag} class="big-head ${cls}" data-rv-words>${text}</${tag}>`;

// Serif italic coda + underline links  e.g. *Ready to create?* [view my work][get in touch]
export const serifCoda = (text, links, center = false) => `
  <div class="coda${center ? ' center' : ''}" data-rv>
    <p class="coda-serif"><em>${text}</em></p>
    <div class="coda-links">
      ${links.map(([t, href]) => `<a class="u-link" href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}><span>${t}</span></a>`).join('')}
    </div>
  </div>`;

// FAQ accordion — data-acc
export const accordion = (faqs = FAQS, cls = '') => `
  <div class="acc ${cls}">
    ${faqs.map(([q, a]) => `
      <div class="acc-item" data-acc-item>
        <button class="acc-q" data-acc-btn aria-expanded="false">
          <span>${q}</span>
          <span class="acc-ico" aria-hidden="true"><i></i><i></i></span>
        </button>
        <div class="acc-a"><div class="acc-a-in"><p>${a}</p></div></div>
      </div>`).join('')}
  </div>`;

// Work row card (home list + related grids)
export const workRow = (p) => `
  <a class="work-row" href="work/${p.slug}.html" data-rv>
    <div class="work-row-media"><img src="${IM(p.cover)}" alt="${p.coverAlt}"></div>
    <div class="work-row-txt">
      <div class="work-row-top">
        <h3>${p.name}</h3><span class="work-row-line"></span><p class="work-row-client">${p.client}</p>
      </div>
      <p class="work-row-cat">${p.category}</p>
    </div>
  </a>`;

// Smaller project card (work grid / related)
export const workCard = (p) => `
  <a class="work-card" href="work/${p.slug}.html" data-rv>
    <div class="work-card-media"><img src="${IM(p.cover)}" alt="${p.coverAlt}"></div>
    <p class="work-card-desc">${p.blurb}</p>
    <div class="work-card-meta"><span>${p.client}</span><span>${p.date}</span></div>
    <div class="work-card-top"><h3>${p.name}</h3><span class="work-row-line"></span></div>
    <p class="work-row-cat">${p.category}</p>
  </a>`;

// Journal card — image w/ white overlay title+sub
export const journalCard = (a, featured = false) => {
  const href = a.href || `journal/${a.slug}.html`;
  const im = a.card || a.img;
  return `
  <a class="j-card${featured ? ' featured' : ''}" href="${href}" data-rv>
    <div class="j-card-media"><img src="${IM(im)}" alt="${a.title}"></div>
    ${a.date ? `<div class="j-card-date"><span>${a.date}</span><span class="j-card-by">Written by <b>${a.author}</b></span></div>` : ''}
    <div class="j-card-txt"><h3>${a.title}</h3><p>${a.sub}</p></div>
  </a>`;
};

// Text marquee row (tools / brand words)
export const textMarquee = (items, cls = '') => `
  <div class="marquee ${cls}" data-marquee>
    <div class="marquee-track">
      ${[...items, ...items, ...items].map(t => `<span class="m-item">${t}</span>`).join('')}
    </div>
  </div>`;

// Testimonials marquee — Kunal photo card + quote cards
export const testimonials = () => `
  <div class="t-marquee" data-marquee="hover">
    <div class="t-track" data-track>
      <div class="t-hero-card">
        ${img(IMG.kunalPhoto, 'Kunal Singh, UX Designer')}
        <div class="t-hero-info">
          <p class="t-name">Kunal Singh</p>
          <p class="t-role">UX Designer</p>
          <a class="t-watch" href="contact.html">${dot()} Work with me</a>
        </div>
      </div>
      ${TESTIMONIALS.map(t => `
        <div class="t-card">
          <img class="t-quote" src="${IM(IMG.quote)}" alt="" aria-hidden="true">
          <p class="t-text">${t.quote}</p>
          <div class="t-person">
            ${img(t.img, t.name, 't-ava')}
            <div><p class="t-name">${t.name}</p><p class="t-role">${t.role} · ${t.company}</p></div>
          </div>
        </div>`).join('')}
    </div>
  </div>`;

// CTA band shared above footer
export const ctaBand = () => `
  <section class="cta-band">
    <div class="cta-bg">${img(IMG.teamPresent, 'People collaborating around a screen')}</div>
    <div class="cta-in">
      <h2 data-rv-words>Great products start with great UX. <span>Let's build yours.</span></h2>
      <p class="cta-sub" data-rv>Tell me about your product or idea — I'll get back to you within 24 hours.</p>
      <div class="coda-links center" data-rv>
        <a class="u-link light" href="mailto:kusing51@gmail.com"><span>say hello</span></a>
        <a class="u-link light" href="https://wa.me/916266750520" target="_blank" rel="noopener"><span>chat on whatsapp</span></a>
      </div>
    </div>
    <div class="cta-partners">
      <p data-rv>Tools and platforms I work with every day</p>
      ${textMarquee(TOOLS)}
    </div>
  </section>`;

// Footer
export const footer = () => `
  <footer class="footer">
    <div class="f-top">
      ${wordmark('f-logo-text')}
      <div class="f-time" data-rv>
        <p class="f-loc">${dot()} I am based in India and work remotely, worldwide.</p>
        <p class="f-clock" data-clock>--:--:--</p>
        <p class="f-tz"><img src="${IM(IMG.globe)}" alt="" aria-hidden="true"> Timezone IST (GMT+5:30)</p>
      </div>
      <p class="f-serif"><em>UX &amp; Product<br>Designer—</em></p>
    </div>
    <div class="f-grid">
      <nav class="f-col f-nav">
        ${NAV.map(([t, h]) => `<a href="${h}">${t}</a>`).join('')}
        <a href="assets/kunal-resume.pdf" target="_blank" rel="noopener">Resume ↗</a>
      </nav>
      <nav class="f-col f-legal">
        ${LEGAL_LINKS.map(([t, h]) => `<a href="${h}">${t}</a>`).join('')}
      </nav>
      <div class="f-col f-news">
        <h4>Stay in the Loop</h4>
        <p>Occasional notes on design, process and what I'm working on.</p>
        <p class="f-small">No spam — honestly, I barely send anything.</p>
        <form class="f-mail" onsubmit="return false">
          <input type="email" placeholder="Your email" aria-label="Your email">
          <button type="submit" aria-label="Subscribe"><img src="${IM(IMG.chevR)}" alt="" aria-hidden="true"></button>
        </form>
      </div>
      <div class="f-col f-socials">
        ${[['WhatsApp', 'https://wa.me/916266750520'], ['Behance', 'https://www.behance.net'], ['LinkedIn', 'https://www.linkedin.com'], ['Email', 'mailto:kusing51@gmail.com']].map(([t, h]) =>
          `<a href="${h}" class="f-soc" target="_blank" rel="noopener"><span>${t}</span><img src="${IM(IMG.chevR)}" alt="" aria-hidden="true"></a>`).join('')}
      </div>
    </div>
    <div class="f-bottom">
      <p class="f-status"><span class="f-off"></span>Offline</p>
      <p>Kunal Singh<br>UX Designer<br><a href="tel:+916266750520">+91 62667 50520</a></p>
      <p>Portfolio designed & built by Kunal Singh — structure inspired by the Arpeggio template.</p>
      <p>© 2026 Kunal Singh — All rights reserved.</p>
      <a class="f-top-btn" href="#top" aria-label="Back to top"><img src="${IM(IMG.chevUp)}" alt="" aria-hidden="true"></a>
    </div>
  </footer>`;

// Resume pill (fixed bottom-right) — replaces the template's "Buy" CTA
export const promo = () => `
  <a class="buy-pill" href="assets/kunal-resume.pdf" target="_blank" rel="noopener">Resume ↓</a>`;
