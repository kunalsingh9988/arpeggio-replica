/* ── Arpeggio replica — interactions & animations ───────────────────── */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ── Menu overlay ─────────────────────────────────────────────────── */
  const menu = $('[data-menu]');
  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('open'));
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    menu.classList.remove('open');
    menu.hidden = true;
    document.body.style.overflow = '';
  };
  $('[data-menu-open]')?.addEventListener('click', open);
  $('[data-menu-close]')?.addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) close(); });
  $$('.menu a').forEach(a => a.addEventListener('click', close));

  /* ── Clock (Europe/Rome, GMT+1) ───────────────────────────────────── */
  const clocks = $$('[data-clock]');
  if (clocks.length) {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Rome', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    });
    const tick = () => { const t = fmt.format(new Date()); clocks.forEach(c => c.textContent = t); };
    tick(); setInterval(tick, 1000);
  }
  const status = $('.f-status');
  if (status) {
    const set = () => {
      const on = navigator.onLine;
      status.classList.toggle('on', on);
      status.innerHTML = `<span class="f-off" style="background:${on ? '#55fda1' : '#f0f0f0'};border-color:${on ? '#55fda1' : '#ccc'}"></span>${on ? 'Online' : 'Offline'}`;
    };
    set();
    addEventListener('online', set); addEventListener('offline', set);
  }

  /* ── Scroll reveals ───────────────────────────────────────────────── */
  // split word-animated heads into word spans with stagger delays
  $$('[data-rv-words]').forEach(el => {
    const words = el.innerHTML.split(/\s+/).map(w => `<span class="w">${w}</span>`);
    el.innerHTML = words.join(' ');
    $$('.w', el).forEach((w, i) => {
      w.style.display = 'inline-block';
      w.style.transitionDelay = `${i * 45}ms`;
      w.style.opacity = '0'; w.style.transform = 'translateY(.55em)'; w.style.filter = 'blur(8px)';
      w.style.transition = 'opacity .8s cubic-bezier(.23,1,.32,1), transform .8s cubic-bezier(.23,1,.32,1), filter .8s cubic-bezier(.23,1,.32,1)';
    });
    el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none';
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      if (e.target.matches('[data-rv-words]'))
        $$('.w', e.target).forEach(w => { w.style.opacity = '1'; w.style.transform = 'none'; w.style.filter = 'blur(0)'; });
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-rv], [data-rv-words]').forEach(el => io.observe(el));

  /* ── Animated counters ────────────────────────────────────────────── */
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count;
      cio.unobserve(el);
      if (reduced) { el.textContent = target; return; }
      const t0 = performance.now(), dur = 1600;
      const step = now => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(target * ease);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ── Pinned scene: video → mosaic scatter ─────────────────────────── */
  const scene = $('[data-scene]');
  if (scene) {
    const mosaic = $$('.mosaic-item', scene);
    const title = $('.scene-title', scene);
    const video = $('.scene-video', scene);
    const update = () => {
      const r = scene.getBoundingClientRect();
      const total = r.height - innerHeight;
      const p = Math.min(Math.max(-r.top / total, 0), 1);
      if (reduced) {
        mosaic.forEach(m => { m.style.opacity = 1; m.style.transform = 'none'; });
        return;
      }
      // phase 1 (0–.45): video slowly scales/dims · phase 2 (.35–1): tiles fly in
      const vScale = 1 + p * 0.08;
      video.style.transform = `scale(${vScale})`;
      video.style.opacity = String(1 - Math.max(0, (p - 0.55) / 0.45) * 0.55);
      mosaic.forEach((m, i) => {
        const start = 0.32 + (i % 3) * 0.1 + Math.floor(i / 3) * 0.16;
        const lp = Math.min(Math.max((p - start) / 0.34, 0), 1);
        const ease = 1 - Math.pow(1 - lp, 3);
        const dir = i % 2 ? 1 : -1;
        m.style.opacity = String(ease);
        m.style.transform = `translate(${(1 - ease) * 34 * dir}vw, ${(1 - ease) * (20 + i * 6)}px) rotate(${(1 - ease) * 14 * dir}deg) scale(${0.82 + ease * 0.18})`;
      });
      // title stays pinned; subtle scale drift
      title.style.transform = `scale(${1 + p * 0.04})`;
    };
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => { update(); queued = false; });
    };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    update();
  }

  /* ── Work index: hero carousel ────────────────────────────────────── */
  const carousel = $('[data-carousel]');
  if (carousel) {
    const slides = $$('[data-slide]', carousel);
    const dots = $$('[data-dot]', carousel);
    let cur = 0, timer;
    const show = i => {
      cur = i;
      slides.forEach((s, k) => s.classList.toggle('on', k === i));
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
    };
    dots.forEach((d, i) => d.addEventListener('click', e => { e.preventDefault(); show(i); reset(); }));
    const reset = () => { clearInterval(timer); timer = setInterval(() => show((cur + 1) % slides.length), 5000); };
    show(0);
    if (!reduced) reset();
  }

  /* ── Work index: search + category filter ─────────────────────────── */
  const grid = $('[data-grid]');
  if (grid) {
    const cards = $$('.work-card', grid);
    const input = $('[data-search]');
    const empty = $('[data-empty]');
    const cat = $('[data-cat]');
    const catBtn = $('[data-cat-btn]', cat);
    let active = 'all';
    const apply = () => {
      const q = (input.value || '').trim().toLowerCase();
      let shown = 0;
      cards.forEach(c => {
        const text = c.textContent.toLowerCase();
        const catEl = $('.work-row-cat', c);
        const okQ = !q || text.includes(q);
        const okC = active === 'all' || (catEl && catEl.textContent.toLowerCase().includes(active.toLowerCase()));
        const show = okQ && okC;
        c.style.display = show ? '' : 'none';
        if (show) shown++;
      });
      empty.hidden = shown > 0;
    };
    input.addEventListener('input', apply);
    catBtn.addEventListener('click', () => cat.classList.toggle('open'));
    $$('[data-cat-item]', cat).forEach(b => b.addEventListener('click', () => {
      active = b.dataset.catItem;
      $$('[data-cat-item]', cat).forEach(x => x.classList.toggle('on', x === b));
      catBtn.firstChild.textContent = active === 'all' ? 'Categories ' : active + ' ';
      cat.classList.remove('open');
      apply();
    }));
    document.addEventListener('click', e => { if (!cat.contains(e.target)) cat.classList.remove('open'); });
  }

  /* ── FAQ accordion ────────────────────────────────────────────────── */
  $$('[data-acc-item]').forEach(item => {
    const btn = $('[data-acc-btn]', item);
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      $$('.acc-item.open', item.parentElement).forEach(o => {
        o.classList.remove('open');
        $('[data-acc-btn]', o).setAttribute('aria-expanded', 'false');
      });
      item.classList.toggle('open', !wasOpen);
      btn.setAttribute('aria-expanded', String(!wasOpen));
    });
  });

  /* ── Plan toggle (Core / Pro) ─────────────────────────────────────── */
  const toggle = $('.plan-toggle');
  if (toggle) {
    const PLANS = {
      'Core Plan': { price: '$5,499', img: 'PIxpbFpiHq656ZNK0IU4R8BLA.jpg', badge: 'ZPy0TdYRL1qLmBkkPn8LzAbPuc.svg', note: '* Minimal booking period — 2 months' },
      'Pro Plan': { price: '$9,499', img: 'AvA1cgyFsNBzB5fQS5lTHrLbWrc.jpg', badge: 'GUKyzoGtbPZZB136CVTm1l7vooE.svg', note: '* Minimal booking period — 2 months' },
    };
    const media = $('.plan-media img:first-child');
    const badge = $('.plan-badge');
    const val = $('.plan-val');
    const note = $('.plan-note');
    $$('button', toggle).forEach(b => b.addEventListener('click', () => {
      $$('button', toggle).forEach(x => x.classList.toggle('on', x === b));
      const p = PLANS[b.textContent.trim()];
      if (!p) return;
      media.src = media.src.replace(/[^/]+$/, p.img);
      badge.src = badge.src.replace(/[^/]+$/, p.badge);
      val.innerHTML = `${p.price}<span class="plan-per">/month</span>`;
      note.textContent = p.note;
    }));
  }

  /* ── Contact form ─────────────────────────────────────────────────── */
  const form = $('[data-form]');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    $('[data-done]', form).hidden = false;
    form.reset();
  });

  /* ── Promo card ───────────────────────────────────────────────────── */
  const promo = $('[data-promo]');
  if (promo) {
    setTimeout(() => { promo.hidden = false; promo.classList.add('in'); }, 3500);
    $('[data-promo-x]', promo).addEventListener('click', () => {
      promo.classList.replace('in', 'out');
      setTimeout(() => promo.remove(), 450);
    });
  }

  /* ── Nav: shrink/blur on scroll ───────────────────────────────────── */
  const nav = $('[data-nav]');
  let lastY = 0;
  addEventListener('scroll', () => {
    const y = scrollY;
    nav.classList.toggle('scrolled', y > 40);
    lastY = y;
  }, { passive: true });
})();
