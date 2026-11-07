// ── About page — Kunal Singh ─────────────────────────────────────────────
import { IM, IMG, SKILLS, EXPERIENCE, APPROACH_POSTERS, APPROACH_STEPS } from '../data.mjs';
import { img, dot, secLabel, serifCoda } from '../comps.mjs';

const body = /* html */`
<section class="page-hero dark">
  <div class="page-hero-media">${img(IMG.kunalHero, 'Kunal Singh — UX Designer')}</div>
  <div class="page-hero-in">
    <h1 data-rv-words>About me</h1>
    <p data-rv>Designing digital experiences that connect, inspire, and solve real-world challenges.</p>
  </div>
</section>

<section class="intro">
  <div class="wrap">
    ${secLabel('Introduction', '')}
    <h2 data-rv>Hi, I'm Kunal</h2>
    <p class="lead" data-rv>A UX designer who treats every screen as a conversation with the person using it.</p>
    <div class="intro-cols">
      <p data-rv><b>Blending visual storytelling with creative design,</b> I create impactful digital experiences rooted in empathy and strategy — bridging creativity with functionality to bring ideas to life.</p>
      <div>
        <p data-rv>With over a year immersed in the dynamic world of UX Design, I'm driven by a passion for crafting intuitive and impactful digital experiences. I thrive on understanding user needs through rigorous research and translating those insights into elegant, problem-solving designs.</p>
        <p data-rv>My focus is on creating seamless user journeys and visually compelling interfaces that not only meet business goals but also delight users — and I'm eager to keep learning with every project I take on.</p>
      </div>
    </div>
  </div>
</section>

<section class="vision-band">
  <div class="wrap">
    <h3 data-rv-words>My vision is to design products people don't have to think about — where the right action is always the obvious one, and technology quietly does its job.</h3>
    <div class="vision-sign" data-rv>
      ${img(IMG.signature, 'Signature', '')}
      <div><b>Kunal Singh</b><p>UX Designer</p></div>
    </div>
  </div>
</section>

<section class="dino">
  <div class="wrap">
    <h2 data-rv-words>I design experiences, not just screens.</h2>
    <p class="lead" data-rv>Pixel-perfect is the baseline. What I actually deliver is clarity — products that feel inevitable rather than designed.</p>
    <div class="mini-feats">
      <div data-rv><b>Research First</b><p>Decisions grounded in real user behavior, not assumptions</p></div>
      <div data-rv><b>Prototype Early</b><p>Ideas tested as interactive flows, not debated in slides</p></div>
      <div data-rv><b>Systems Thinking</b><p>Components designed to scale beyond the first screen</p></div>
    </div>
  </div>
</section>

<section class="team">
  <div class="wrap">
    ${secLabel('My Skills', '')}
    <h2 data-rv>Creative Toolkit</h2>
    <p class="lead" data-rv>From research to ship-ready files</p>
    <p class="muted wide" data-rv>A full-stack UX toolkit — strategy through execution — built project by project at Creowis, Riverhouse Technologies and Phimetric Studio.</p>
    <h3 class="sub-h" data-rv>What I Bring</h3>
    <div class="team-grid skills">
      ${SKILLS.map(([name, desc]) => `
        <div class="skill-card" data-rv>
          <h4>${dot()} ${name}</h4>
          <p class="muted">${desc}</p>
        </div>`).join('')}
    </div>
    ${serifCoda('Want the details?', [['download resume', 'assets/kunal-resume.pdf'], ['see my work', 'work.html']])}
  </div>
</section>

<section class="approach">
  <div class="wrap">
    ${secLabel('My Approach', '')}
    <h2 data-rv>The way I work</h2>
    <p class="lead" data-rv>Simple steps, honest outcomes</p>
    <p class="muted wide" data-rv>My process combines research discipline with creative exploration. I listen first, understand your goals, and turn complexity into experiences that feel obvious.</p>
    <div class="posters">
      ${APPROACH_POSTERS.map(p => `<div class="poster" data-rv>${img(p, 'Process poster')}</div>`).join('')}
    </div>
    <div class="steps">
      ${APPROACH_STEPS.map(([n, t]) => `<div class="step" data-rv><p class="step-n">${n}</p><p>${t}</p></div>`).join('')}
    </div>
  </div>
</section>

<section class="awards">
  <div class="wrap">
    ${secLabel('Experience', '')}
    <h2 data-rv>Where I've been</h2>
    <p class="muted wide" data-rv>Roles where I've grown from foundations into shipped product work.</p>
    <div class="aw-table" data-rv>
      <div class="aw-head"><span>Role</span><span>Period</span></div>
      ${EXPERIENCE.map(([r, c, p, d]) => `<div class="aw-row"><b>${r}</b><span>${p}</span><p>${c} — ${d}</p></div>`).join('')}
    </div>
    <div class="aw-feature" data-rv>
      <div class="aw-media">${img(IMG.adagioShot, 'AdagioVR — live product')}<p class="aw-proj">AdagioVR</p></div>
      <div class="aw-txt">
        <h4>Proudest shipped work</h4>
        <p class="muted">A real product, live in production — designed end-to-end</p>
        <ul>
          <li><b>The Product</b><span>VR-based mental-wellbeing platform</span></li>
          <li><b>My Role</b><span>UX &amp; visual design, end-to-end</span></li>
          <li><b>Status</b><span>Live at adagiovr.com</span></li>
        </ul>
      </div>
    </div>
    ${serifCoda('The full picture', [['download resume', 'assets/kunal-resume.pdf'], ['browse my work', 'work.html']])}
  </div>
</section>

<section class="remark">
  <div class="wrap">
    <h2 data-rv-words>Let's illuminate your designs</h2>
    <p class="muted" data-rv>— If you're interested in working together, please <a class="u-link" href="mailto:kusing51@gmail.com"><span>send me an email</span></a> and I'll get back within 24 hours.</p>
    <div class="coda-links" data-rv><a class="u-link" href="contact.html"><span>reach out</span></a></div>
  </div>
</section>
`;

export default {
  title: 'About — Kunal Singh',
  description: 'Meet Kunal Singh — a UX designer crafting intuitive, impactful digital experiences through research, storytelling and craft.',
  body,
};
