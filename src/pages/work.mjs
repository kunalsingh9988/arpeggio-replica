// ── Work index page ──────────────────────────────────────────────────────
import { IM, PROJECTS, CATEGORIES } from '../data.mjs';
import { img, workCard } from '../comps.mjs';

const slides = PROJECTS.slice(0, 4); // Boreal, Stride, Velocity, Frost

const body = /* html */`
<section class="w-hero" data-carousel>
  <div class="w-slides">
    ${slides.map((p, i) => `
      <a class="w-slide${i === 0 ? ' on' : ''}" href="work/${p.slug}.html" data-slide="${i}">
        <div class="w-slide-media">${img(p.cover, p.coverAlt)}</div>
        <p class="w-slide-desc">${p.blurb}</p>
        <div class="w-slide-meta"><span>${p.client}</span><span>${p.date}</span></div>
        <div class="w-slide-top"><h2>${p.name}</h2><span class="work-row-line"></span></div>
        <p class="w-slide-cat">${p.category}</p>
      </a>`).join('')}
  </div>
  <div class="w-dots" data-dots>${slides.map((_, i) => `<button data-dot="${i}" aria-label="Slide ${i + 1}"></button>`).join('')}</div>
</section>

<section class="w-index">
  <div class="wrap">
    <div class="w-head">
      <div>
        <h1 data-rv>Selected Projects</h1>
        <p class="lead" data-rv>We solve business challenges through strategic design</p>
      </div>
      <p class="muted" data-rv>Each project here started with a challenge and ended with measurable success. See how we tackle complex problems with clear solutions.</p>
    </div>
    <div class="w-filters" data-rv>
      <label class="w-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
        <input type="search" placeholder="Search Projects" data-search aria-label="Search Projects">
      </label>
      <div class="w-cat" data-cat>
        <button class="w-cat-btn" data-cat-btn>Categories <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
        <div class="w-cat-list">
          <button data-cat-item="all" class="on">All</button>
          ${CATEGORIES.map(c => `<button data-cat-item="${c}">${c}</button>`).join('')}
        </div>
      </div>
    </div>
    <div class="w-grid" data-grid>
      ${PROJECTS.map(workCard).join('')}
    </div>
    <p class="w-empty" data-empty hidden>No projects match your search.</p>
  </div>
</section>
`;

export default {
  title: 'Work — Arpeggio',
  description: 'Selected projects from Arpeggio — branding, product and digital design work made with ambitious clients.',
  body,
};
