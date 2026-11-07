// ── Home page ────────────────────────────────────────────────────────────
import { IM, IMG, MOSAIC, PROJECTS, SERVICES, SNAPSHOT, AWARD_LOGOS, FAQS, PRICING_FEATURES, ARTICLES } from '../data.mjs';
import { img, plus, dot, secLabel, serifCoda, accordion, workRow, journalCard, testimonials } from '../comps.mjs';

const body = /* html */`
<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-media">${img(IMG.heroInk, 'Girl in white smoke')}</div>
  <div class="hero-pluses">${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}${plus()}</div>
  <div class="hero-left" data-rv>
    <h1>One subscription, unlimited design iterations.</h1>
    <p class="hero-sub">${dot()} Freedom beyond the traditional project scope</p>
  </div>
  <p class="hero-serif" data-rv><em>The Creative<br>Agency—</em></p>
  <div class="hero-mark" data-hero-mark><img src="${IM(IMG.logo)}" alt="Arpeggio"><img class="hero-reg" src="${IM(IMG.circle)}" alt="®"></div>
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
    <h2 class="scene-title">Design that<br>captivates today<br>&amp; inspires<br>tomorrow.</h2>
  </div>
</section>

<!-- ═══ WORK LIST ═══ -->
<section class="work-list dark">
  ${PROJECTS.slice(0, 3).map(workRow).join('')}
</section>

<!-- ═══ ACHIEVEMENTS ═══ -->
<section class="ach dark">
  <div class="wrap">
    ${secLabel('Our Achievements', 'metrics & milestones', true)}
    <div class="ach-head">
      <h2 class="xl" data-rv-words>Behind every statistic pulses a human story</h2>
      <p class="ach-sub" data-rv>Transforming industries, pixel by perfect pixel</p>
    </div>
    <div class="ach-split">
      <a class="reel" href="https://www.youtube.com" target="_blank" rel="noopener" data-rv>
        ${img(IMG.watchReel, 'Woman using a VR headset in a kitchen')}
        <span class="reel-pill">${dot()} watch reel</span>
      </a>
      <div class="ach-right">
        <div class="award">
          <p class="micro-label" data-rv>BEST INTEGRATED CAMPAIGN 2024</p>
          <h3 data-rv>Boreal VR Campaign</h3>
          <p class="muted" data-rv>Arpeggio is thrilled to announce our triumph at the Canned Lynx, winning the award for our dynamic campaign with the renowned VR brand, Boreal.</p>
          <a class="u-link light" href="work/boreal-vr-headset.html" data-rv><span>view project</span></a>
        </div>
        <div class="ach-nums">
          <div class="ach-num" data-rv><p class="micro-label">Customer Engagement</p><p class="ach-num-v"><span data-count="35">0</span>%</p></div>
          <div class="ach-num" data-rv><p class="micro-label">REVENUE GROWTH</p><p class="ach-num-v"><span data-count="24">0</span>%</p></div>
        </div>
      </div>
    </div>
    <p class="micro-label center" data-rv style="margin-top:64px">Performance Snapshot</p>
    <div class="snapshot">
      ${SNAPSHOT.map(([l, v]) => `<div class="snap" data-rv><p class="snap-l">${l}</p><p class="snap-v"><span data-count="${parseInt(v)}">0</span>${v.includes('+') ? '+' : ''}</p></div>`).join('')}
    </div>
    <div class="marquee awards" data-marquee>
      <div class="marquee-track">${[...AWARD_LOGOS, ...AWARD_LOGOS, ...AWARD_LOGOS].map(l => `<img src="${IM(l)}" alt="award logo" loading="lazy">`).join('')}</div>
    </div>
  </div>
</section>

<!-- ═══ SERVICES ═══ -->
<section class="services">
  <div class="wrap">
    <h2 class="giant" data-rv>What we do</h2>
    <p class="services-intro" data-rv>Perfectly aligned creative and production expertise to increase digital impact.</p>
    <div class="svc-list">
      ${SERVICES.map(([n, t, d, tags]) => `
        <div class="svc-row" data-rv>
          <p class="svc-n">${n}</p>
          <h3 class="svc-t">${t}</h3>
          <p class="svc-d">${d}</p>
          <ul class="svc-tags">${tags.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>
    ${serifCoda('Ready to create?', [['view our work', 'work.html'], ['explore plans', '#pricing']])}
  </div>
</section>

<!-- ═══ BENEFITS BENTO ═══ -->
<section class="bento-sec">
  <div class="wrap">
    ${secLabel('Why Choose Us', 'benefits')}
    <div class="ach-head">
      <h2 class="xl" data-rv-words>Partnership, Not Just Projects</h2>
      <p class="ach-sub" data-rv>Skip the hiring maze - get an entire creative powerhouse at your fingertips</p>
    </div>
    <div class="bento">
      <div class="b-card b-premium" data-rv>
        <h4>${dot()} Premium Plans</h4>
        <p>Monthly comprehensive package for unlimited creative opportunities</p>
        <div class="b-media">${img(IMG.handCard, 'Female hand shows a card')}</div>
      </div>
      <div class="b-card b-vision" data-rv>
        <p class="b-pill">YOUR VISION — OUR CREATIVITY</p>
        <div class="b-icons"><span class="b-ico heart"></span><span class="b-plus">+</span><span class="b-ico brick"></span></div>
        <p>Great ideas born on your terms</p>
      </div>
      <div class="b-card b-photo" data-rv>${img(IMG.legsLedge, 'Legs on a ledge')}</div>
      <div class="b-card b-dash" data-rv>
        <div class="b-dash-top"><h4>Design Dashboard</h4><p>Monitor progress and manage requests effortlessly</p></div>
        <div class="b-app" data-ui>
          <div class="b-app-row"><span class="b-app-ico"></span><div><b>Applications</b><b>Kickoff</b><span>From ideas to action in 48 hours</span></div></div>
          <div class="b-app-row"><span class="b-app-ico"></span><div><b>Applications</b><b>Design &amp; Development</b><span>Bringing your vision to life with precision</span></div></div>
          <div class="b-app-row"><span class="b-app-ico"></span><div><b>Applications</b><b>Review &amp; Delivery</b><span>Perfecting every detail before launch</span></div></div>
        </div>
        <p class="b-real">${dot()} Real-time progress tracking</p>
      </div>
      <div class="b-card b-stats" data-rv>
        <div class="b-half">
          <p><span class="b-ico-t users"></span> <b>New Partnership</b></p>
          <p class="b-big"><span data-count="33">0</span>+</p>
          <p class="muted">Joined our creative network</p>
        </div>
        <div class="b-half">
          <p><span class="b-ico-t grow"></span> <b>Client Growth</b></p>
          <p class="b-big"><span data-count="128">0</span>%</p>
          <p class="muted">Compared to the previous year</p>
        </div>
      </div>
      <div class="b-card b-tools" data-rv>
        <p><b>Tools &amp; Integration</b></p>
        <p class="muted">The latest and most advanced technologies and tools</p>
        <div class="b-tool-row"><span class="tool x"></span><span class="tool slack"></span><span class="tool notion"></span></div>
      </div>
      <div class="b-card b-price" data-rv>
        <p><b>Affordable Pricing</b></p>
        <p class="muted">Enjoy clear and predictable costs with consistent monthly rates</p>
      </div>
      <div class="b-card b-cat" data-rv>
        ${img(IMG.catHoodie, 'Cute cat in hoodie')}
        <div class="b-cat-txt"><p><b>Satisfaction Rate</b> <span class="b-big">98%</span></p><p>From project feedback</p></div>
      </div>
      <div class="b-card b-art" data-rv>
        ${img(IMG.bwArt, 'Modern B&W art')}
        <div class="b-art-txt"><p><b>Flexible &amp; Scalable</b></p><p>Easily adjust your service level as your business grows.</p></div>
      </div>
      <div class="b-card b-assist" data-rv>
        ${img(IMG.manGlasses, 'Portrait of a man with glasses and beard')}
        <div class="b-assist-txt">
          <p><b>Dedicated Assistance</b></p>
          <p class="stars">★★★</p>
          <p><b>99.9% Uptime Guarantee</b></p>
          <p>Round-the-clock expert support for uninterrupted service and reliability.</p>
        </div>
      </div>
    </div>
    ${serifCoda('Flexible &amp; Dedicated', [['view our work', 'work.html'], ['explore plans', '#pricing']])}
  </div>
</section>

<!-- ═══ PRICING ═══ -->
<section class="pricing" id="pricing">
  <div class="wrap">
    ${secLabel('Membership Plans', 'pricing')}
    <div class="center-head">
      <h2 class="xl" data-rv-words>Your passport to flexible design revisions</h2>
      <p class="ach-sub" data-rv>Get unlimited creativity and all premium features with our monthly All-In-One plan.</p>
    </div>
    <div class="plan-toggle" data-rv><button class="on">Core Plan</button><button>Pro Plan</button></div>
    <p class="plan-sub" data-rv>Simple pricing, powerful features, no hidden fees</p>
    <div class="plan">
      <div class="plan-media" data-rv>${img(IMG.corePlan, 'Core plan image')}<img class="plan-badge" src="${IM(IMG.coreIcon)}" alt="Core plan"></div>
      <div class="plan-right">
        <div class="plan-price" data-rv>
          <p class="plan-val">$5,499<span class="plan-per">/month</span></p>
          <p class="plan-note">* Minimal booking period — 2 months</p>
        </div>
        <div class="coda-links" data-rv>
          <a class="u-link" href="https://buy.polar.sh" target="_blank" rel="noopener"><span>select plan</span></a>
          <a class="u-link" href="contact.html"><span>quick call</span></a>
        </div>
        <ul class="plan-feats">
          ${PRICING_FEATURES.map(([t, d]) => `<li data-rv><img src="${IM(IMG.tick)}" alt="" aria-hidden="true"><div><b>${t}</b><p class="muted">${d}</p></div></li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ═══ FAQ ═══ -->
<section class="faq-sec">
  <div class="wrap">
    ${secLabel('Popular Queries', 'faq')}
    <div class="center-head">
      <h2 class="xl" data-rv-words>Quick and clear answers to your key questions</h2>
      <p class="ach-sub" data-rv>Get the clarity you need about our design process and services</p>
    </div>
    <div class="faq-grid">
      ${accordion(FAQS)}
      <aside class="faq-side" data-rv>
        <p><b>Still looking for answers or need a good chat?</b></p>
        <p class="muted">Our team will guide you through our design process, project specifications and cost estimate.</p>
        ${img(IMG.teamTable, 'Collaborative work session at a rustic wooden table')}
      </aside>
    </div>
    ${serifCoda('Anything left out?', [['book a call', 'contact.html'], ['contact us', 'contact.html']], true)}
  </div>
</section>

<!-- ═══ TESTIMONIALS ═══ -->
<section class="testi-sec">
  <div class="wrap">
    ${secLabel('Client Stories', 'testimonials')}
    <h2 class="xl" data-rv-words>Inspiring client experiences</h2>
    <p class="ach-sub" data-rv>Join us and become our next success story</p>
    ${testimonials()}
    ${serifCoda('Be part of our journey', [['membership plans', '#pricing'], ['view projects', 'work.html']], true)}
  </div>
</section>

<!-- ═══ JOURNAL ═══ -->
<section class="journal-sec">
  <div class="wrap">
    ${secLabel('Insights &amp; Innovation', 'journal')}
    <h2 class="xl" data-rv-words>Straight from the newsroom</h2>
    <p class="ach-sub" data-rv>Handpicked collection of design insights and industry perspectives</p>
    <div class="j-grid">
      ${[ARTICLES[0], ARTICLES[4], ARTICLES[3], ARTICLES[2]].map(journalCard).join('')}
    </div>
    ${serifCoda('Join the Arpeggio Library', [['trending', 'journal/design-systems-the-bridge-between-creativity-and-consistency.html'], ['weekly top', 'journal/the-rise-of-subscription-based-design.html']], true)}
  </div>
</section>
`;

export default {
  title: 'Arpeggio Agency & Portfolio Template',
  description: 'Arpeggio is a premium Framer template built to turn your portfolio into a client conversion tool. Designed for agencies and studios, it drives results through strategic layouts, clear storytelling, and slick design. Backed by lifetime support.',
  body,
};
