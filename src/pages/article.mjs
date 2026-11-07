// ── Journal article page factory ─────────────────────────────────────────
import { IM, IMG, ARTICLES, NEW_WAVE_CARD } from '../data.mjs';
import { img, journalCard } from '../comps.mjs';

export function articlePage(a) {
  const next = ARTICLES.find(x => x.slug === a.next);
  const others = ARTICLES.filter(x => x.slug !== a.slug);
  const moreCards = [...others.slice(0, 4), NEW_WAVE_CARD];
  const body = /* html */`
  <article class="art">
    <header class="art-hero">
      <div class="art-hero-media">${img(a.hero, a.title)}</div>
      <div class="art-hero-in">
        <h1 data-rv-words>${a.title}</h1>
        <p class="art-sub" data-rv>${a.sub}</p>
        <p class="art-date" data-rv>${a.date}</p>
      </div>
    </header>
    <div class="wrap art-body">
      <a class="art-back" href="journal.html" data-rv><img src="${IM(IMG.chevL)}" alt="" aria-hidden="true"> Journal</a>
      <p class="art-by" data-rv>Written by <b>${a.author}</b><br><span class="muted">${a.role}</span></p>
      <p class="art-intro" data-rv>${a.intro}</p>
      <div class="art-img" data-rv>${img(a.midImg, a.title)}</div>
      ${a.sections.map(([h, paras]) => `
        <h2 data-rv>${h}</h2>
        ${paras.map(t => `<p class="muted" data-rv>${t}</p>`).join('')}`).join('')}
      <h2 data-rv>Best Practices</h2>
      <ul class="art-list" data-rv>${a.bestPractices.map(li => `<li>${li}</li>`).join('')}</ul>
      <p class="muted" data-rv>${a.afterList}</p>
      <h2 data-rv>Key Takeaways</h2>
      <ul class="art-list" data-rv>${a.takeaways.map(li => `<li>${li}</li>`).join('')}</ul>
      <div class="art-img" data-rv>${img(a.endImg, a.title)}</div>
      ${next ? `<a class="art-next" href="journal/${next.slug}.html" data-rv><span class="muted">${a.prev ? 'previous article' : 'next article'}</span><b>${next.title}</b></a>` : ''}
    </div>
    <section class="art-more">
      <div class="wrap">
        <h2 data-rv>More articles</h2>
        <div class="j-grid">
          ${moreCards.slice(0, 4).map(journalCard).join('')}
        </div>
      </div>
    </section>
  </article>`;

  return {
    title: `${a.title} by ${a.author} — Arpeggio`,
    description: a.sub,
    body,
    dir: 'journal',
  };
}
