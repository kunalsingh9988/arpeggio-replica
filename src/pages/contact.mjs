// ── Contact page ─────────────────────────────────────────────────────────
import { IM, IMG, CONTACT_CHECKLIST, CONTACT_CARDS, FAQS } from '../data.mjs';
import { img, dot, accordion, testimonials } from '../comps.mjs';

const ICONS = {
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m22 2-11 11M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

const body = /* html */`
<section class="contact">
  <div class="wrap">
    <h1 data-rv>Contact</h1>
    <p class="lead" data-rv>Questions, ideas, or just saying hi</p>
    <div class="c-grid">
      <div class="c-left">
        <h2 data-rv>Let's work together</h2>
        <ul class="c-checks">
          ${CONTACT_CHECKLIST.map(c => `<li data-rv>${dot()} ${c}</li>`).join('')}
        </ul>
        <h3 data-rv>Tell us about your project</h3>
        <p class="muted" data-rv>Just want to say hello? Skip to the name field below.</p>
        <form class="c-form" data-form>
          <label>Your name<input type="text" name="name" autocomplete="name"></label>
          <label>Your email<input type="email" name="email" autocomplete="email"></label>
          <label>Your message<textarea name="message" rows="3"></textarea></label>
          <button class="u-link submit" type="submit"><span>submit</span></button>
          <p class="c-done" data-done hidden>Thanks — we'll get back to you within 48 hours.</p>
        </form>
      </div>
      <div class="c-right" data-rv>
        <p class="muted">Whether you have a specific project in mind or just want to explore possibilities, we're here to help turn your vision into reality.</p>
      </div>
    </div>
  </div>
</section>

<section class="c-cards">
  <div class="wrap grid4">
    ${CONTACT_CARDS.map(([ic, t, d, l, h]) => `
      <div class="c-card" data-rv>
        <span class="c-ico">${ICONS[ic]}</span>
        <h4>${t}</h4>
        <p class="muted">${d}</p>
        <a class="u-link" href="${h}" target="_blank" rel="noopener"><span>${l}</span></a>
      </div>`).join('')}
  </div>
</section>

<section class="faq-sec">
  <div class="wrap">
    <p class="lead" data-rv>Popular questions answered before you reach out</p>
    ${accordion(FAQS)}
  </div>
</section>

<section class="testi-sec">
  <div class="wrap">
    <h2 class="xl" data-rv-words>Inspiring client experiences</h2>
    <p class="ach-sub" data-rv>Join us and become our next success story</p>
    ${testimonials()}
  </div>
</section>
`;

export default {
  title: 'Contact — Arpeggio',
  description: 'Tell us about your project. Share the brief and the Arpeggio team will get back to you within 48 hours.',
  body,
};
