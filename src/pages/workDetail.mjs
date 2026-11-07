// ── Work detail page factory ─────────────────────────────────────────────
import { IM, IMG, PROJECTS } from '../data.mjs';
import { img, pimg, workCard, plus } from '../comps.mjs';

export function workDetail(p) {
  const others = PROJECTS.filter(x => x.slug !== p.slug).slice(0, 4);
  const nextP = PROJECTS.find(x => x.slug === p.next);
  const body = /* html */`
  <section class="cs-hero">
    <div class="cs-hero-media">${p.video
      ? `<video autoplay muted loop playsinline poster="${IM(p.cover)}"><source src="${IM(p.video)}" type="video/mp4"></video>`
      : img(p.cover, p.coverAlt)}</div>
    <div class="cs-hero-in">
      <h1 data-rv-words>${p.tagline}</h1>
      <div class="cs-hero-row">
        <p class="cs-cat">${p.category}</p>
        <span class="work-row-line"></span>
        <ul class="cs-services">${p.services.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
    </div>
  </section>

  <section class="cs-head">
    <div class="wrap">
      <div class="cs-title-row">
        <h2 data-rv>${p.name}</h2>
        <p class="muted" data-rv>${p.tagline}</p>
      </div>
      <div class="cs-blurb-row">
        <p class="lead" data-rv>${p.blurb}</p>
        <a class="u-link" href="${p.link}" target="_blank" rel="noopener" data-rv><span>View Project</span></a>
      </div>
      <div class="cs-meta" data-rv>
        <div><p class="micro-label">Client</p><b>${p.client}</b></div>
        <div><p class="micro-label">Released</p><b>${p.date}</b></div>
        <div><p class="micro-label">Timeframe</p><b>${p.timeframe}</b></div>
        <div><p class="micro-label">Project Type</p><b>${p.category}</b></div>
        <div><p class="micro-label">Technology</p><b>${p.tech.join(' ')}</b></div>
      </div>
    </div>
  </section>

  <section class="cs-sec">
    <div class="wrap">
      <div class="cs-sec-head"><h3 data-rv>${p.name}</h3><h4 data-rv>Overview</h4></div>
      <p class="lead" data-rv>${p.overview[0]}</p>
      <p class="muted" data-rv>${p.overview[1]}</p>
      <div class="cs-imgs two">${p.overviewImgs.map(t => `<div data-rv>${pimg(t)}</div>`).join('')}</div>
    </div>
  </section>

  <section class="cs-sec">
    <div class="wrap">
      <div class="cs-sec-head"><h3 data-rv>${p.name}</h3><h4 data-rv>The Challenge</h4></div>
      <p class="muted" data-rv>${p.challenge}</p>
      <div class="cs-imgs three">${p.challengeImgs.map(t => `<div data-rv>${pimg(t)}</div>`).join('')}</div>
      <p class="muted" data-rv>${p.challengeAfter}</p>
    </div>
  </section>

  <section class="cs-sec">
    <div class="wrap">
      <div class="cs-sec-head"><h3 data-rv>${p.name}</h3><h4 data-rv>The Solution</h4></div>
      <p class="muted" data-rv>${p.solution}</p>
      <div class="cs-imgs three">${p.solutionImgs.map(t => `<div data-rv>${pimg(t)}</div>`).join('')}</div>
      <p class="micro-label" data-rv>${p.tech.join(' ')}</p>
      <p class="muted" data-rv>${p.solutionAfter}</p>
    </div>
  </section>

  <section class="cs-sec">
    <div class="wrap">
      <div class="cs-sec-head"><h3 data-rv>${p.name}</h3><h4 data-rv>Performance Results</h4></div>
      <p class="muted" data-rv>${p.results}</p>
      <div class="cs-results">
        <div class="cs-res-img" data-rv>${p.video
          ? `<video autoplay muted loop playsinline><source src="${IM(p.video)}" type="video/mp4"></video>`
          : pimg(p.resultsImg)}</div>
        <div class="cs-stats">
          ${p.stats.map(([l, d, v]) => `
            <div class="cs-stat" data-rv>
              <div><b>${l}</b><p class="muted">${d}</p></div>
              <p class="cs-stat-v">${v.replace(/\d+/, `<span data-count="${parseInt(v)}">0</span>`)}</p>
            </div>`).join('')}
        </div>
      </div>
      <p class="muted" data-rv>${p.statsAfter}</p>
    </div>
  </section>

  <section class="cs-sec">
    <div class="wrap">
      <div class="cs-sec-head"><h3 data-rv>${p.name}</h3><h4 data-rv>Final thoughts</h4></div>
      <p class="muted" data-rv>${p.final}</p>
      <h4 class="cs-credits-h" data-rv>${p.name.replace(/\s/g, '')} Credits</h4>
      <div class="cs-credits" data-rv>
        ${p.credits.map(([n, r]) => `<div><b>${n}</b><p class="muted">${r}</p></div>`).join('')}
      </div>
      <div class="cs-team" data-rv>${img(IMG.teamProject, 'Team discussing the project')}</div>
    </div>
  </section>

  <section class="cs-next">
    <div class="wrap">
      <div class="cs-next-row">
        ${p.prev ? `<a class="cs-nav prev" href="work/${p.prev}.html"><img src="${IM(IMG.backArrow)}" alt="" aria-hidden="true"><span>Previous Project</span><b>${PROJECTS.find(x=>x.slug===p.prev).name}</b></a>` : `<span></span>`}
        ${nextP ? `<a class="cs-nav next" href="work/${p.next}.html"><span>Next Project</span><b>${nextP.name}</b><img src="${IM(IMG.nextArrow)}" alt="" aria-hidden="true"></a>` : ''}
      </div>
      <div class="w-grid">
        ${others.map(workCard).join('')}
      </div>
      <div class="center" data-rv><a class="u-link" href="../work.html"><span>load more projects</span></a></div>
    </div>
  </section>`;

  return {
    title: `${p.name} by ${p.client} — ${p.tagline}`,
    description: p.blurb,
    body,
    dir: 'work',
  };
}
