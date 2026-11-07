// ── Legal page factory ───────────────────────────────────────────────────
import { IM, IMG, LEGAL_PAGES } from '../data.mjs';
import { img } from '../comps.mjs';

export function legalPage(slug) {
  const p = LEGAL_PAGES[slug];
  const body = /* html */`
  <section class="legal">
    <div class="wrap">
      <p class="micro-label" data-rv>Last update</p>
      <p class="muted" data-rv>${p.date}</p>
      <h1 data-rv>${p.title}</h1>
      <p class="lead" data-rv>${p.sub}</p>
      <a class="legal-back" href="index.html" data-rv><img src="${IM(IMG.chevL)}" alt="" aria-hidden="true"></a>
      <p class="muted" data-rv>${p.intro}</p>
      ${p.sections.map(([h, t]) => `
        <div class="legal-sec" data-rv>
          <h3>${h}</h3>
          <p class="muted">${t.split('•').map((s, i) => i === 0 ? s : `<br>• ${s}`).join('')}</p>
        </div>`).join('')}
    </div>
  </section>`;
  return {
    title: `${p.title} — Arpeggio`,
    description: p.sub,
    body,
    dir: 'legal',
  };
}
