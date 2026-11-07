// ── About page ───────────────────────────────────────────────────────────
import { IM, IMG, LEADERSHIP, MAKERS, APPROACH_POSTERS, APPROACH_STEPS, AWARDS_TABLE } from '../data.mjs';
import { img, dot, secLabel, serifCoda } from '../comps.mjs';

const member = ([name, role, photo, socials]) => `
  <div class="member" data-rv>
    <div class="member-photo">${img(photo, name)}</div>
    <p class="member-name">${name}</p>
    <p class="member-role">${role}</p>
    <p class="member-soc">${socials.map(s => `<a href="#" onclick="return false">${s}</a>`).join(' ')}</p>
  </div>`;

const body = /* html */`
<section class="page-hero dark">
  <div class="page-hero-media">${img(IMG.teamTable, 'Collaborative work session overhead view')}</div>
  <div class="page-hero-in">
    <h1 data-rv-words>About us</h1>
    <p data-rv>We ship design that not only capture the present but also prepare for the future.</p>
  </div>
</section>

<section class="intro">
  <div class="wrap">
    ${secLabel('Introduction', '')}
    <h2 data-rv>We are Arpeggio</h2>
    <p class="lead" data-rv>By staying at the forefront of innovation, we ensure our clients maintain their competitive edge.</p>
    <div class="intro-cols">
      <p data-rv><b>A design-driven agency built for today's digital landscape.</b> Our approach combines strategic thinking with creative execution, following industry best practices and emerging trends to deliver results that matter.</p>
      <div>
        <p data-rv>We believe in the power of purposeful design. Every pixel serves a function, every interaction has meaning. By staying ahead of industry trends and best practices, we ensure our clients receive solutions that are both current and future-ready.</p>
        <p data-rv>Our collective brings together diverse talents united by a passion for exceptional design. From strategists to designers, developers to creative directors, each team member contributes unique expertise to your success.</p>
      </div>
    </div>
  </div>
</section>

<section class="vision-band">
  <div class="wrap">
    <h3 data-rv-words>Our vision is to continue pushing boundaries, setting new standards in digital design and development. We're not just creating designs – we're shaping digital experiences that drive business growth and user engagement.</h3>
    <div class="vision-sign" data-rv>
      ${img(IMG.signature, 'Signature', '')}
      <div><b>Oliver Eklund</b><p>Founder &amp; CEO</p></div>
    </div>
  </div>
</section>

<section class="dino">
  <div class="wrap">
    <h2 data-rv-words>Say goodbye to old school, dinosaur agencies.</h2>
    <p class="lead" data-rv>We've rebuilt the agency model from the ground up, replacing unpredictable costs and complex retainers with a straightforward subscription service.</p>
    <div class="mini-feats">
      <div data-rv><b>Purpose-Driven Design</b><p>Creating solutions that solve real challenges</p></div>
      <div data-rv><b>Forward Thinking</b><p>Staying ahead of digital trends and innovations</p></div>
      <div data-rv><b>Client Partnership</b><p>Building lasting relationships through collaboration</p></div>
    </div>
  </div>
</section>

<section class="team">
  <div class="wrap">
    ${secLabel('The Team', '')}
    <h2 data-rv>Creative Minds</h2>
    <p class="lead" data-rv>Breaking things to make them better</p>
    <p class="muted wide" data-rv>Diverse talents united by a passion for exceptional design. From strategists to designers, developers to art directors, each team member contributes unique expertise to your success.</p>
    <h3 class="sub-h" data-rv>Leadership</h3>
    <div class="team-grid lead">${LEADERSHIP.map(member).join('')}</div>
    <h3 class="sub-h" data-rv>Magic Makers</h3>
    <div class="team-grid">${MAKERS.map(member).join('')}</div>
    ${serifCoda('Join the Team', [['career page', 'contact.html'], ['contact us', 'contact.html']])}
  </div>
</section>

<section class="approach">
  <div class="wrap">
    ${secLabel('Our Approach', '')}
    <h2 data-rv>The way we work</h2>
    <p class="lead" data-rv>Simple steps, remarkable results</p>
    <p class="muted wide" data-rv>Our approach combines strategic thinking with creative excellence. We listen first, understand your goals, and transform ideas into impactful digital experiences.</p>
    <div class="posters">
      ${APPROACH_POSTERS.map(p => `<div class="poster" data-rv>${img(p, 'Arpeggio poster')}</div>`).join('')}
    </div>
    <div class="steps">
      ${APPROACH_STEPS.map(([n, t]) => `<div class="step" data-rv><p class="step-n">${n}</p><p>${t}</p></div>`).join('')}
    </div>
    <p class="muted wide" data-rv>Every project begins with understanding your unique needs.</p>
    <p class="muted wide" data-rv>Our collaborative process ensures clear communication, focused attention, and consistent quality—delivered by a dedicated team that's invested in your success.</p>
  </div>
</section>

<section class="awards">
  <div class="wrap">
    ${secLabel('Awards', '')}
    <h2 data-rv>Recognition &amp; Impact</h2>
    <p class="muted wide" data-rv>Our work speaks through results, and we're honored when it resonates with the industry. Here's a glimpse of our creative impact and recognition.</p>
    <div class="aw-table" data-rv>
      <div class="aw-head"><span>Award</span><span>Date</span></div>
      ${AWARDS_TABLE.map(([a, y, d]) => `<div class="aw-row"><b>${a}</b><span>${y}</span><p>${d}</p></div>`).join('')}
    </div>
    <div class="aw-feature" data-rv>
      <div class="aw-media">${img('zdq2kOaby07TtfUL0I8qCKshVTs.jpeg', 'Man wearing VR glasses')}<p class="aw-proj">Boreal VR Headset</p></div>
      <div class="aw-txt">
        <h4>Best Digital Experience 2024</h4>
        <p class="muted">Our launch campaign for Boreal VR delivered exceptional results across all key performance indicators</p>
        <ul>
          <li><b>User Feedback</b><span>Positive sentiment in user feedback</span></li>
          <li><b>Media Reach</b><span>Social media views reached</span></li>
          <li><b>Market Impact</b><span>Pre-orders exceeded targets</span></li>
        </ul>
      </div>
    </div>
    ${serifCoda('Our Services at a Glance', [['browse our work', 'work.html'], ['more stats', 'index.html#achievements']])}
  </div>
</section>

<section class="remark">
  <div class="wrap">
    <h2 data-rv-words>Let's create something remarkable</h2>
    <p class="muted" data-rv>— If you're interested in any form of collaboration, please <a class="u-link" href="mailto:info@thisispacifica.com"><span>send us an email</span></a> and we'll get back shortly.</p>
    <div class="coda-links" data-rv><a class="u-link" href="contact.html"><span>reach out</span></a></div>
  </div>
</section>
`;

export default {
  title: 'About — Arpeggio',
  description: 'Meet Arpeggio: a design-driven studio built for today\'s digital landscape. Our vision, our team and the way we work.',
  body,
};
