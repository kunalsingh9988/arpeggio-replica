// ── Home page — Kunal Singh, UX Designer ─────────────────────────────────
import { IM, IMG, MOSAIC, PROJECTS, SERVICES, SNAPSHOT, BRAND_WORDS, FAQS, PLANS, ARTICLES } from '../data.mjs';
import { img, plus, dot, secLabel, serifCoda, accordion, workRow, journalCard, testimonials, textMarquee, wordmark } from '../comps.mjs';

const plan = PLANS['Freelance Project'];

const body = /* html */`
<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-media">${img(IMG.heroInk, 'Blue ink diffusing in water')}</div>
  <div class="hero-pluses">${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}</div>
  <div class="hero-left" data-rv>
    <h1>I am a UX Designer illuminating your designs.</h1>
    <p class="hero-sub">${dot()} Driven by visual storytelling &amp; user-centered design</p>
  </div>
  <p class="hero-serif" data-rv><em>The UX<br>Designer—</em></p>
  <div class="hero-mark" data-hero-mark><span class="hero-mark-text">Kunal</span><img class="hero-reg" src="${IM(IMG.circle)}" alt="®"></div>
</section>

<!-- ═══ PINNED SCENE: video → mosaic ═══ -->
<section class="scene" data-scene>
  <div class="scene-sticky">
    <video class="scene-video" data-scene-video autoplay muted loop playsinline poster="${IM(IMG.reelPoster)}">
      <source src="${IM(IMG.reelVideo)}" type="video/mp4">
    </video>
    <div class="scene-mosaic" data-scene-mosaic>
      ${MOSAIC.map((m, i) => `<div class="mosaic-item" style="--mi:${i}">${img(m, 'Selected work')}</div>`).join('')}
    </div>
    <h2 class="scene-title">Design that<br>solves real problems<br>&amp; delights<br>real users.</h2>
  </div>
</section>

<!-- ═══ WORK LIST ═══ -->
<section class="work-list dark">
  ${PROJECTS.slice(0, 3).map(workRow).join('')}
</section>

<!-- ═══ EXPERIENCE & IMPACT ═══ -->
<section class="ach dark">
  <div class="wrap">
    ${secLabel('Experience &amp; Impact', 'the story so far', true)}
    <div class="ach-head">
      <h2 class="xl" data-rv-words>Behind every screen pulses a human story</h2>
      <p class="ach-sub" data-rv>Translating research into products people love</p>
    </div>
    <div class="ach-split">
      <a class="reel" href="work/adagiovr.html" data-rv>
        ${img(IMG.adagioShot, 'AdagioVR — live product I designed')}
        <span class="reel-pill">${dot()} see my work</span>
      </a>
      <div class="ach-right">
        <div class="award">
          <p class="micro-label" data-rv>FEATURED — SHIPPED &amp; LIVE</p>
          <h3 data-rv>AdagioVR</h3>
          <p class="muted" data-rv>A shipped product — a VR mental-wellbeing platform I designed end-to-end, live in production at adagiovr.com.</p>
          <a class="u-link light" href="work/adagiovr.html" data-rv><span>view project</span></a>
        </div>
        <div class="ach-nums">
          <div class="ach-num" data-rv><p class="micro-label">Projects Shipped</p><p class="ach-num-v"><span data-count="6">0</span>+</p></div>
          <div class="ach-num" data-rv><p class="micro-label">USER FLOWS MAPPED</p><p class="ach-num-v"><span data-count="48">0</span>+</p></div>
        </div>
      </div>
    </div>
    <p class="micro-label center" data-rv style="margin-top:64px">Snapshot</p>
    <div class="snapshot">
      ${SNAPSHOT.map(([l, v]) => `<div class="snap" data-rv><p class="snap-l">${l}</p><p class="snap-v"><span data-count="${parseInt(v)}">0</span>${v.includes('+') ? '+' : ''}</p></div>`).join('')}
    </div>
    ${textMarquee(BRAND_WORDS, 'awards')}
  </div>
</section>

<!-- ═══ SKILLS ═══ -->
<section class="services">
  <div class="wrap">
    <h2 class="giant" data-rv>What I do</h2>
    <p class="services-intro" data-rv>Research, craft and systems thinking — one designer owning the full journey.</p>
    <div class="svc-list">
      ${SERVICES.map(([n, t, d, tags]) => `
        <div class="svc-row" data-rv>
          <p class="svc-n">${n}</p>
          <h3 class="svc-t">${t}</h3>
          <p class="svc-d">${d}</p>
          <ul class="svc-tags">${tags.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>
    ${serifCoda('Ready to create?', [['view my work', 'work.html'], ['work with me', 'contact.html']])}
  </div>
</section>

<!-- ═══ WHY ME BENTO ═══ -->
<section class="bento-sec">
  <div class="wrap">
    ${secLabel('Why Work With Me', 'the difference')}
    <div class="ach-head">
      <h2 class="xl" data-rv-words>A design partner, not just a pair of hands</h2>
      <p class="ach-sub" data-rv>Skip the agency maze — get a designer who owns the outcome</p>
    </div>
    <div class="bento">
      <div class="b-card b-premium" data-rv>
        <h4>${dot()} End-to-End UX</h4>
        <p>From the first research question to the last handoff note — I own the whole journey</p>
        <div class="b-media">${img(IMG.handCard, 'Hand showing a card')}</div>
      </div>
      <div class="b-card b-vision" data-rv>
        <p class="b-pill">YOUR USERS — MY OBSESSION</p>
        <div class="b-icons"><span class="b-ico heart"></span><span class="b-plus">+</span><span class="b-ico brick"></span></div>
        <p>Great products are born when empathy meets craft</p>
      </div>
      <div class="b-card b-photo" data-rv>${img(IMG.kunalSelfie, 'Kunal Singh')}</div>
      <div class="b-card b-dash" data-rv>
        <div class="b-dash-top"><h4>My Process</h4><p>Structured, transparent, and always moving forward</p></div>
        <div class="b-app" data-ui>
          <div class="b-app-row"><span class="b-app-ico"></span><div><b>Week 1</b><b>Research &amp; Discovery</b><span>Understanding the problem before touching pixels</span></div></div>
          <div class="b-app-row"><span class="b-app-ico"></span><div><b>Week 2–3</b><b>Design &amp; Prototype</b><span>Flows to hi-fi screens, tested with real people</span></div></div>
          <div class="b-app-row"><span class="b-app-ico"></span><div><b>Final</b><b>Refine &amp; Handoff</b><span>Polished, dev-ready files with documentation</span></div></div>
        </div>
        <p class="b-real">${dot()} Regular async updates, always</p>
      </div>
      <div class="b-card b-stats" data-rv>
        <div class="b-half">
          <p><span class="b-ico-t users"></span> <b>Projects Shipped</b></p>
          <p class="b-big"><span data-count="6">0</span>+</p>
          <p class="muted">Real products &amp; case studies</p>
        </div>
        <div class="b-half">
          <p><span class="b-ico-t grow"></span> <b>On-Time Delivery</b></p>
          <p class="b-big"><span data-count="100">0</span>%</p>
          <p class="muted">Every milestone, every time</p>
        </div>
      </div>
      <div class="b-card b-tools" data-rv>
        <p><b>Tools I Live In</b></p>
        <p class="muted">The latest and most advanced technologies</p>
        <div class="b-tool-row"><span class="tool">Fg</span><span class="tool">Fr</span><span class="tool">Ai</span><span class="tool">Ps</span></div>
      </div>
      <div class="b-card b-price" data-rv>
        <p><b>Flexible Engagement</b></p>
        <p class="muted">Freelance sprints, contract work, or a seat on your team — whatever fits</p>
      </div>
      <div class="b-card b-cat" data-rv>
        ${img(IMG.kunalPhoto, 'Kunal Singh portrait')}
        <div class="b-cat-txt"><p><b>Response Time</b> <span class="b-big">&lt;24h</span></p><p>Usually much faster</p></div>
      </div>
      <div class="b-card b-art" data-rv>
        ${img(IMG.bwArt, 'Modern abstract art')}
        <div class="b-art-txt"><p><b>Remote &amp; Flexible</b></p><p>Working across time zones, async-first, always reachable.</p></div>
      </div>
      <div class="b-card b-assist" data-rv>
        ${img(IMG.manGlasses, 'Focused at work')}
        <div class="b-assist-txt">
          <p><b>Direct Collaboration</b></p>
          <p class="stars">★★★</p>
          <p><b>No account managers</b></p>
          <p>You work directly with the person designing — faster feedback, better outcomes.</p>
        </div>
      </div>
    </div>
    ${serifCoda('Flexible &amp; dedicated', [['view my work', 'work.html'], ['get in touch', 'contact.html']])}
  </div>
</section>

<!-- ═══ WORK WITH ME ═══ -->
<section class="pricing" id="work-with-me">
  <div class="wrap">
    ${secLabel('Work With Me', 'engagement')}
    <div class="center-head">
      <h2 class="xl" data-rv-words>Two ways we can build together</h2>
      <p class="ach-sub" data-rv>A focused freelance sprint, or a seat on your team.</p>
    </div>
    <div class="plan-toggle" data-rv><button class="on">Freelance Project</button><button>Full-time Role</button></div>
    <p class="plan-sub" data-rv>Simple, honest collaboration — no hidden complexity</p>
    <div class="plan">
      <div class="plan-media" data-rv><img src="${IM(plan.img)}" alt="Engagement" data-plan-img><img class="plan-badge" src="${IM(plan.badge)}" alt="" data-plan-badge></div>
      <div class="plan-right">
        <div class="plan-price" data-rv>
          <p class="plan-val" data-plan-price>${plan.price}<span class="plan-per">${plan.per}</span></p>
          <p class="plan-note" data-plan-note>${plan.note}</p>
        </div>
        <div class="coda-links" data-rv>
          <a class="u-link" href="mailto:kusing51@gmail.com"><span>get in touch</span></a>
          <a class="u-link" href="assets/kunal-resume.pdf" target="_blank" rel="noopener"><span>my resume</span></a>
        </div>
        <ul class="plan-feats" data-plan-feats>
          ${plan.feats.map(([t, d]) => `<li data-rv><img src="${IM(IMG.tick)}" alt="" aria-hidden="true"><div><b>${t}</b><p class="muted">${d}</p></div></li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
  <script type="application/json" data-plans>${JSON.stringify(PLANS)}</script>
</section>

<!-- ═══ FAQ ═══ -->
<section class="faq-sec">
  <div class="wrap">
    ${secLabel('Common Questions', 'faq')}
    <div class="center-head">
      <h2 class="xl" data-rv-words>Quick and clear answers before you reach out</h2>
      <p class="ach-sub" data-rv>Everything you might want to know about working with me</p>
    </div>
    <div class="faq-grid">
      ${accordion(FAQS)}
      <aside class="faq-side" data-rv>
        <p><b>Something else on your mind?</b></p>
        <p class="muted">Ask me anything — process, availability, tools, or just what I'm designing lately.</p>
        ${img(IMG.teamTable, 'Collaborative work session')}
      </aside>
    </div>
    ${serifCoda('Anything left out?', [['book a call', 'contact.html'], ['say hello', 'mailto:kusing51@gmail.com']], true)}
  </div>
</section>

<!-- ═══ TESTIMONIALS ═══ -->
<section class="testi-sec">
  <div class="wrap">
    ${secLabel('Kind Words', 'testimonials')}
    <h2 class="xl" data-rv-words>What collaborators say</h2>
    <p class="ach-sub" data-rv>Join them and become the next success story</p>
    ${testimonials()}
    ${serifCoda('Be part of the story', [['work with me', 'contact.html'], ['view projects', 'work.html']], true)}
  </div>
</section>

<!-- ═══ JOURNAL ═══ -->
<section class="journal-sec">
  <div class="wrap">
    ${secLabel('Notes &amp; Process', 'journal')}
    <h2 class="xl" data-rv-words>Straight from the notebook</h2>
    <p class="ach-sub" data-rv>What I'm learning about design, users and craft</p>
    <div class="j-grid">
      ${[ARTICLES[0], ARTICLES[4], ARTICLES[3], ARTICLES[2]].map(journalCard).join('')}
    </div>
    ${serifCoda('Read more of my thinking', [['design systems', 'journal/design-systems-the-bridge-between-creativity-and-consistency.html'], ['ai & design', 'journal/ai-driven-design-beyond-the-basics.html']], true)}
  </div>
</section>
`;

export default {
  title: 'Kunal Singh — UX Designer',
  description: 'Kunal Singh is a UX designer crafting intuitive, impactful digital experiences — blending visual storytelling with user-centered design to solve real-world problems.',
  body,
};
