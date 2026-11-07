// ── Shared component builders ────────────────────────────────────────────
import { IM, IMG, SOCIALS, NAV, LEGAL_LINKS, PARTNER_LOGOS, FAQS, TESTIMONIALS, ARTICLES, NEW_WAVE_CARD } from './data.mjs';

export const img = (f, alt = '', cls = '', extra = '') =>
  `<img src="${IM(f)}" alt="${alt}" class="${cls}" loading="lazy" ${extra}>`;

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

// Serif italic coda + underline links  e.g. *Ready to create?* [view our work][explore plans]
export const serifCoda = (text, links, center = false) => `
  <div class="coda${center ? ' center' : ''}" data-rv>
    <p class="coda-serif"><em>${text}</em></p>
    <div class="coda-links">
      ${links.map(([t, href]) => `<a class="u-link" href="${href}"><span>${t}</span></a>`).join('')}
    </div>
  </div>`;

// FAQ accordion — data-acc
export const accordion = (faqs = FAQS, cls = '') => `
  <div class="acc ${cls}">
    ${faqs.map(([q, a], i) => `
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

// Testimonials marquee — photo card + quote cards + person chips
export const testimonials = (dark = false) => `
  <div class="t-marquee${dark ? ' dark' : ''}" data-marquee="hover" >
    <div class="t-track" data-track>
      <div class="t-hero-card">
        ${img('x1xayW7zRResLg5DruxcERc3Xw.jpg', 'Deborah Keith')}
        <div class="t-hero-info">
          <p class="t-name">Deborah Keith</p>
          <p class="t-role">Account Director</p>
          <a class="t-watch" href="https://www.youtube.com" target="_blank" rel="noopener">${dot()} Watch Video</a>
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
    <div class="cta-bg">${img(IMG.teamPresent, 'Team working in an office watching at a presentation')}</div>
    <div class="cta-in">
      <h2 data-rv-words>We transform brands. <span>Your success is next.</span></h2>
      <p class="cta-sub" data-rv>Start your project now by booking a one-on-one consultation with our expert.</p>
      <div class="coda-links center" data-rv>
        <a class="u-link light" href="contact.html"><span>book a call</span></a>
        <a class="u-link light" href="contact.html"><span>chat on whatsapp</span></a>
      </div>
    </div>
    <div class="cta-partners">
      <p data-rv>Meet the partners who are part of our success story</p>
      <div class="marquee" data-marquee><div class="marquee-track">
        ${[...PARTNER_LOGOS, ...PARTNER_LOGOS].map(l => `<img src="${IM(l)}" alt="partner logo" loading="lazy">`).join('')}
      </div></div>
    </div>
  </section>`;

// Footer
export const footer = () => `
  <footer class="footer">
    <div class="f-top">
      ${img(IMG.logo, 'Arpeggio', 'f-logo')}
      <div class="f-time" data-rv>
        <p class="f-loc">${dot()} We are currently based in Milano and work remotely.</p>
        <p class="f-clock" data-clock>--:--:--</p>
        <p class="f-tz"><img src="${IM(IMG.globe)}" alt="" aria-hidden="true"> Timezone (GMT+1)</p>
      </div>
      <p class="f-serif"><em>The Creative<br>Agency—</em></p>
    </div>
    <div class="f-grid">
      <nav class="f-col f-nav">
        ${NAV.map(([t, h]) => `<a href="${h}">${t}</a>`).join('')}
      </nav>
      <nav class="f-col f-legal">
        ${LEGAL_LINKS.map(([t, h]) => `<a href="${h}">${t}</a>`).join('')}
        <a href="https://www.framerpod.com" target="_blank" rel="noopener">More Templates</a>
      </nav>
      <div class="f-col f-news">
        <h4>Stay in the Loop</h4>
        <p>Stay informed about our latest news, updates by subscribing to our newsletter.</p>
        <p class="f-small">We respect your inbox. No spam, just valuable updates.</p>
        <form class="f-mail" onsubmit="return false">
          <input type="email" placeholder="Your email" aria-label="Your email">
          <button type="submit" aria-label="Subscribe"><img src="${IM(IMG.chevR)}" alt="" aria-hidden="true"></button>
        </form>
      </div>
      <div class="f-col f-socials">
        ${[['Whatsapp', 'https://www.whatsapp.com'], ['X', 'https://www.x.com/tamasbodo'], ['Linkedin', 'https://www.linkedin.com'], ['Instagram', 'https://www.instagram.com'], ['Email', 'mailto:hejj@arpeggio.com']].map(([t, h]) =>
          `<a href="${h}" class="f-soc"><span>${t}</span><img src="${IM(IMG.chevR)}" alt="" aria-hidden="true"></a>`).join('')}
      </div>
    </div>
    <div class="f-bottom">
      <p class="f-status"><span class="f-off"></span>Offline</p>
      <p>Arpeggio SRL<br>Via Monte Napoleone 3 20121 Milano<br><a href="tel:085608890">(08) 560 8890</a></p>
      <p>Arpeggio SRL is a company registered in Italy. Design and development services are provided by Arpeggio SRL.</p>
      <p>© 2026 Arpeggio — All rights reserved.<br><span class="f-links"><a href="https://www.framer.com" target="_blank" rel="noopener">Framer template</a> · <a href="https://x.com/tamasbodo" target="_blank" rel="noopener">designed by tamas</a></span></p>
      <a class="f-top-btn" href="#top" aria-label="Back to top"><img src="${IM(IMG.chevUp)}" alt="" aria-hidden="true"></a>
    </div>
  </footer>`;

// Template-promo card (fixed bottom-right, dismissible) + buy pill
export const promo = () => `
  <a class="buy-pill" href="https://dub.sh/arpeggio-checkout" target="_blank" rel="noopener">Buy Template <span>→</span></a>
  <div class="promo" data-promo hidden>
    <p class="promo-tag">New Template!</p>
    <div class="promo-media"><img src="${IM(IMG.monodrift)}" alt="Monodrift Template preview"></div>
    <a class="promo-preview" href="https://monodrift.framer.website" target="_blank" rel="noopener">Preview</a>
    <button class="promo-x" data-promo-x aria-label="Close">×</button>
  </div>`;
