// ── Journal index ────────────────────────────────────────────────────────
import { ARTICLES } from '../data.mjs';
import { journalCard } from '../comps.mjs';

const [featured, ...rest] = ARTICLES.slice(0, 5);

const body = /* html */`
<section class="j-index">
  <div class="wrap">
    <h1 data-rv>Journal</h1>
    <p class="lead" data-rv>Notes on design, users and craft</p>
    <div class="j-feature">${journalCard(featured, true)}</div>
    <div class="j-grid">
      ${rest.map(journalCard).join('')}
    </div>
  </div>
</section>
`;

export default {
  title: 'Journal — Kunal Singh',
  description: 'Notes on design, users and craft by Kunal Singh.',
  body,
};
