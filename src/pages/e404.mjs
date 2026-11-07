// ── 404 ──────────────────────────────────────────────────────────────────
import { IM, IMG } from '../data.mjs';
import { img } from '../comps.mjs';

const body = /* html */`
<section class="e404">
  <div class="e404-media">${img(IMG.desert, 'Man walks in a desert')}</div>
  <div class="e404-in">
    <h1 data-rv>404</h1>
    <h2 data-rv>Seems like we lost each other...</h2>
    <p data-rv>Don't worry – this isn't goodbye forever.</p>
    <a class="u-link light" href="index.html"><span>back to home</span></a>
  </div>
</section>
`;

export default {
  title: '404 — Kunal Singh',
  description: 'Page not found.',
  body,
  cta: false,
  footer: false,
};
