(() => {
'use strict';
const root = document.documentElement;
const body = document.body;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// Update this single value to the company's verified, public email before launch.
const COMPANY_EMAIL = 'thermoloop.co@gmail.com';

const copy = {
  fa: {
    'nav.problem':'چالش','nav.orc':'انیمیشن رانکین','nav.apps':'کاربردها','nav.why':'مزایا','nav.values':'ارزش‌های ما','nav.contact':'تماس با ما',
    'menu.kicker':'راهنمای سایت / MENU','menu.title':'از گرما،<br>انرژی بسازیم.','menu.description':'بخش موردنظرتان را انتخاب کنید و با ترمولوپ بیشتر آشنا شوید.','menu.language':'زبان / LANGUAGE',
    'hero.eyebrow':'FROM WASTE TO WATTS','hero.title':'حرارتی که دور ریخته می‌شد،<br><em>حالا برق تولید می‌کند</em>','hero.description':'ترمولوپ به صنایع کمک می‌کند حرارت اتلافی را به انرژی الکتریکی تبدیل کنند؛ برای استفاده بهتر از انرژی موجود، کاهش هزینه‌ها و حرکت به‌سوی تولید پایدارتر.','hero.point1':'بازیابی انرژی','hero.point2':'بدون سوخت اضافه','hero.primary':'تماس با ترمولوپ','hero.secondary':'دیدن انیمیشن','hero.art1':'حرارت اتلافی','hero.art2':'انرژی مفید',
    'stats.one':'دمای ورودی قابل بررسی','stats.two':'بازه دمایی نمونه منابع حرارتی','stats.three':'بازده الکتریکی تقریبی در شرایط مناسب','stats.four':'نیاز به سوخت اضافه در بازیابی حرارت','stats.note':'اعداد، بازه‌های نمونه و وابسته به شرایط پروژه‌اند؛ برآورد دقیق به ارزیابی فنی نیاز دارد.',
    'problem.eyebrow':'فرصت پنهان','problem.title':'انرژی‌ای که هنوز می‌تواند کار کند','problem.body':'در بسیاری از فرایندهای صنعتی، بخشی از انرژی به شکل گرما از دودکش‌ها، کمپرسورها، موتورها و تجهیزات فرایندی خارج می‌شود. بازیابی این گرما می‌تواند بخشی از انرژی هدررفته را به برق مفید تبدیل کند.','problem.bullet1':'کاهش اتلاف و استفاده بهتر از انرژی موجود','problem.bullet2':'فرصتی برای کاهش هزینه‌های برق','problem.bullet3':'کمک به کاهش اثرات زیست‌محیطی فرایند',
    'orc.eyebrow':'بازیابی انرژی','orc.title':'چرخه رانکین آلی (ORC)','orc.body':'حرارت وارد چرخه می‌شود، سیال به گردش درمی‌آید و ژنراتور برق تولید می‌کند. انیمیشن زیر ایده اصلی را در یک نگاه نشان می‌دهد.','orc.diagramLabel':'نمای ساده چرخه انرژی','orc.live':'در حال گردش','orc.diagramAlt':'انیمیشن چرخه رانکین آلی','orc.evaporator':'اواپراتور','orc.heat':'ورود حرارت','orc.turbine':'توربین و ژنراتور','orc.power':'تولید برق','orc.condenser':'کندانسور','orc.cool':'دفع گرما','orc.pump':'پمپ','orc.return':'بازگشت سیال','orc.fluid':'سیال در گردش','orc.note':'طراحی و عملکرد هر سامانه با توجه به منبع حرارتی و شرایط محل تعیین می‌شود.',
    'apps.eyebrow':'کاربردها','apps.title':'هر جا گرمای اضافه هست، یک فرصت وجود دارد','apps.card1.title':'صنایع سنگین','apps.card1.body':'سیمان، فولاد، شیشه و پتروشیمی','apps.card2.title':'موتورها و توربین‌ها','apps.card2.body':'بازیابی حرارت خروجی موتور و توربین گازی','apps.card3.title':'زمین‌گرمایی','apps.card3.body':'استفاده از منابع زمین‌گرمایی کم‌دما و میان‌دما','apps.card4.title':'خورشیدی حرارتی','apps.card4.body':'ترکیب با سامانه‌های جمع‌آوری گرمای خورشید','apps.card5.title':'زیست‌توده و پسماند','apps.card5.body':'بهره‌برداری از گرمای فرایندهای تبدیل پسماند','apps.card6.title':'دریایی و حمل‌ونقل','apps.card6.body':'استفاده دوباره از حرارت موتورهای بزرگ',
    'why.eyebrow':'چرا ترمولوپ؟','why.title':'حرارت کمتر هدر برود؛ ارزش بیشتری بسازیم','why.body':'رویکرد ترمولوپ بر ارزیابی منبع حرارتی و یافتن مسیر عملی برای بازیابی انرژی متمرکز است؛ راهکاری که متناسب با واقعیت هر سایت صنعتی بررسی می‌شود.','why.item1':'استفاده بهتر از انرژی موجود','why.item2':'کمک به کاهش هزینه انرژی','why.item3':'راهکار متناسب با شرایط سایت','why.item4':'پشتیبانی از اهداف پایداری',
    'values.eyebrow':'ارزش‌های ما','values.title':'آنچه مسیر ما را مشخص می‌کند','values.visionTag':'VISION','values.visionTitle':'چشم‌انداز','values.visionBody':'آینده‌ای که در آن هیچ حرارتی بی‌دلیل هدر نمی‌رود و هر صنعت می‌تواند بخشی از انرژی موردنیازش را از گرمای خودش تأمین کند.','values.missionTag':'MISSION','values.missionTitle':'مأموریت','values.missionBody':'ما با فناوری چرخه رانکین آلی، حرارت اتلافی صنایع را شناسایی و به برق مفید تبدیل می‌کنیم تا هزینه انرژی کاهش یابد و تولید پایدارتر شود.',
    'contact.eyebrow':'ارتباط','contact.title':'بیایید از گرمای هدررفته، ارزش بسازیم.','contact.body':'برای گفت‌وگو درباره فرصت‌های بازیابی حرارت در مجموعه‌تان، از راه ایمیل با ما در ارتباط باشید.','contact.button':'تماس با ما','contact.emailNote':'برای ارتباط مستقیم از طریق ایمیل','contact.emailLabel':'ایمیل شرکت','contact.copy':'کپی ایمیل','contact.copied':'کپی شد!','contact.copyFail':'ایمیل را انتخاب و کپی کنید','contact.materialsButton':'دسترسی به مطالب','contact.materialsNote':'دسترسی سریع به فایل‌ها و مطالب ترمولوپ',
    'brand.tagline':'از پسماند تا وات','page.title':'ThermoLoop | از پسماند تا وات','burger.open':'باز کردن منو','burger.close':'بستن منو'
  },
  en: {
    'loader.w1':'FROM','loader.w2':'WASTE','loader.w3':'TO','loader.w4':'WATTS',
    'nav.problem':'The opportunity','nav.orc':'Rankine animation','nav.apps':'Applications','nav.why':'Why ThermoLoop','nav.values':'Our values','nav.contact':'Contact us',
    'menu.kicker':'EXPLORE / MENU','menu.title':'Turn heat<br>into value.','menu.description':'Choose a section to learn more about ThermoLoop and waste-heat recovery.','menu.language':'LANGUAGE / زبان',
    'hero.eyebrow':'FROM WASTE TO WATTS','hero.title':'Heat that used to be wasted,<br><em>now becomes electricity</em>','hero.description':'ThermoLoop helps industries convert waste heat into electrical energy—making better use of existing resources, reducing energy costs, and supporting more sustainable operations.','hero.point1':'Energy recovery','hero.point2':'No extra fuel','hero.primary':'Contact ThermoLoop','hero.secondary':'See the animation','hero.art1':'WASTE HEAT','hero.art2':'USEFUL ENERGY',
    'stats.one':'Source temperatures to assess','stats.two':'Illustrative heat-source range','stats.three':'Approx. electrical efficiency in suitable conditions','stats.four':'Additional fuel needed for heat recovery','stats.note':'These are indicative ranges and depend on project conditions. A technical assessment is needed for accurate estimates.',
    'problem.eyebrow':'THE OPPORTUNITY','problem.title':'Energy that can still do useful work','problem.body':'Many industrial processes release energy as heat through exhaust stacks, compressors, engines, and process equipment. Recovering part of that heat can turn otherwise wasted energy into useful electricity.','problem.bullet1':'Reduce energy losses and use existing resources better','problem.bullet2':'Create an opportunity to lower electricity costs','problem.bullet3':'Help reduce the environmental impact of operations',
    'orc.eyebrow':'ENERGY RECOVERY','orc.title':'Organic Rankine Cycle (ORC)','orc.body':'Heat enters the cycle, a working fluid circulates, and a generator produces electricity. The animation below captures the core idea at a glance.','orc.diagramLabel':'A simplified energy cycle','orc.live':'Cycle running','orc.diagramAlt':'Animated Organic Rankine Cycle diagram','orc.evaporator':'Evaporator','orc.heat':'Heat in','orc.turbine':'Turbine & generator','orc.power':'Power out','orc.condenser':'Condenser','orc.cool':'Heat rejection','orc.pump':'Pump','orc.return':'Fluid return','orc.fluid':'Working fluid','orc.note':'System design and performance depend on the heat source and site conditions.',
    'apps.eyebrow':'APPLICATIONS','apps.title':'Where there is excess heat, there may be an opportunity','apps.card1.title':'Heavy industry','apps.card1.body':'Cement, steel, glass, and petrochemicals','apps.card2.title':'Engines & turbines','apps.card2.body':'Recovering exhaust heat from engines and gas turbines','apps.card3.title':'Geothermal','apps.card3.body':'Using low- and medium-temperature geothermal resources','apps.card4.title':'Solar thermal','apps.card4.body':'Pairing with solar-thermal collection systems','apps.card5.title':'Biomass & waste','apps.card5.body':'Using heat from waste-conversion processes','apps.card6.title':'Marine & transport','apps.card6.body':'Reusing heat from large engines',
    'why.eyebrow':'WHY THERMOLOOP','why.title':'Waste less heat. Create more value.','why.body':'ThermoLoop focuses on assessing the available heat source and identifying a practical recovery pathway—evaluated around the conditions of each industrial site.','why.item1':'Better use of available energy','why.item2':'Potential to reduce energy costs','why.item3':'Solutions tailored to site conditions','why.item4':'Support for sustainability goals',
    'values.eyebrow':'OUR VALUES','values.title':'What guides our direction','values.visionTag':'VISION','values.visionTitle':'Our vision','values.visionBody':'A future where no heat is wasted without reason, and every industry can meet part of its energy needs from its own heat.','values.missionTag':'MISSION','values.missionTitle':'Our mission','values.missionBody':'Using Organic Rankine Cycle technology, we identify industrial waste heat and convert it into useful electricity—lowering energy costs and making production more sustainable.',
    'contact.eyebrow':'GET IN TOUCH','contact.title':'Let’s turn wasted heat into value.','contact.body':'To discuss waste-heat recovery opportunities at your facility, get in touch with us by email.','contact.button':'Contact us','contact.emailNote':'Get in touch directly by email','contact.emailLabel':'Company email','contact.copy':'Copy email','contact.copied':'Copied!','contact.copyFail':'Select and copy the email','contact.materialsButton':'Access materials','contact.materialsNote':'Quick access to ThermoLoop files and resources',
    'brand.tagline':'FROM WASTE TO WATTS','page.title':'ThermoLoop | From Waste to Watts','burger.open':'Open menu','burger.close':'Close menu'
  }
};

let currentLang = 'fa';
function translate(lang) {
  currentLang = lang in copy ? lang : 'fa';
  root.lang = currentLang;
  root.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  document.title = copy[currentLang]['page.title'];
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = currentLang === 'fa'
    ? 'ترمولوپ؛ تبدیل حرارت اتلافی صنایع به برق با بازیابی انرژی و چرخه رانکین آلی.'
    : 'ThermoLoop helps industry recover waste heat and convert it into electricity with Organic Rankine Cycle systems.';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (copy[currentLang][key] !== undefined) el.textContent = copy[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (copy[currentLang][key] !== undefined) el.innerHTML = copy[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(',').forEach(pair => {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (copy[currentLang][key] !== undefined) el.setAttribute(attr, copy[currentLang][key]);
    });
  });
  document.querySelectorAll('[data-lang]').forEach(btn => {
    const active = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  const burger = document.querySelector('.burger');
  if (burger) burger.setAttribute('aria-label', copy[currentLang][burger.getAttribute('aria-expanded') === 'true' ? 'burger.close' : 'burger.open']);
  const copyBtn = document.getElementById('copyEmail');
  if (copyBtn && !copyBtn.dataset.justCopied) copyBtn.textContent = copy[currentLang]['contact.copy'];
  document.querySelectorAll('[data-count]').forEach(el => {
    if (el.dataset.countDone) el.textContent = formatNumber(Number(el.dataset.count)) + (el.dataset.suffix || '');
  });
}
function formatNumber(n) {
  const val = String(n);
  return currentLang === 'fa' ? val.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[Number(d)]) : val;
}
document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => translate(btn.dataset.lang)));

/* ========== Animated intro: slogan -> official logo -> 0–100 progress ========== */
const loader = document.getElementById('loader');
const pctEl = document.getElementById('ldPct');
let finished = false;
function finishLoader() {
  if (finished || !loader) return;
  finished = true;
  loader.style.setProperty('--p', '100%');
  if (pctEl) pctEl.textContent = '100';
  window.setTimeout(() => {
    loader.classList.add('done');
    body.classList.remove('loading');
    body.classList.add('ready');
    window.setTimeout(() => loader.classList.add('gone'), 1150);
  }, 250);
}
if (reduced || !loader) {
  body.classList.remove('loading'); body.classList.add('ready');
  if (loader) loader.classList.add('gone');
} else {
  const start = performance.now();
  const INTRO_WAIT = 3600; // start the counter only after the full logo finishes appearing
  const PROGRESS_DURATION = 4200;
  let loaded = document.readyState === 'complete';
  window.addEventListener('load', () => { loaded = true; }, { once: true });
  const step = now => {
    if (finished) return;
    const elapsed = now - start;
    if (elapsed < INTRO_WAIT) {
      loader.style.setProperty('--p', '0%');
      if (pctEl) pctEl.textContent = '0';
      requestAnimationFrame(step);
      return;
    }
    const t = Math.min((elapsed - INTRO_WAIT) / PROGRESS_DURATION, 1);
    const eased = 1 - Math.pow(1 - t, 2.6);
    const p = t >= 1 ? (loaded ? 100 : 94) : eased * 100;
    loader.style.setProperty('--p', p.toFixed(1) + '%');
    if (pctEl) pctEl.textContent = String(Math.round(p));
    if (t >= 1 && loaded) return finishLoader();
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  // Safety net for unusually slow networks; normal intro takes about 7.5 seconds.
  window.setTimeout(finishLoader, 11000);
}

/* ========== Full-screen menu ========== */
const burger = document.querySelector('.burger');
const menu = document.getElementById('siteMenu');
const menuClose = document.querySelector('.menu-close');
function setMenu(open) {
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', String(!open));
  body.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', copy[currentLang][open ? 'burger.close' : 'burger.open']);
  if (open && menuClose) window.setTimeout(() => menuClose.focus(), 80);
  if (!open) burger.focus({ preventScroll: true });
}
burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
menuClose.addEventListener('click', () => setMenu(false));
// On phones the page is scroll-locked while the menu is open, so the browser's default
// anchor jump can be swallowed. Close the menu first, then scroll once the lock is released.
menu.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const hash = a.getAttribute('href');
  const target = hash.length > 1 ? document.querySelector(hash) : null;
  e.preventDefault();
  setMenu(false);
  window.setTimeout(() => {
    if (target) target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    if (history.replaceState) history.replaceState(null, '', hash);
  }, 120);
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
});

/* ========== Scroll progress ========== */
const nav = document.querySelector('.nav');
const bar = document.querySelector('.progress span');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ========== Reveal on scroll ========== */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.13 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (el.closest('.hero')) return;
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    io.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

/* ========== Animated stats ========== */
if ('IntersectionObserver' in window) {
  const counter = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = Number(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const t0 = performance.now();
      const dur = 1300;
      const tick = t => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = formatNumber(Math.round(end * (1 - Math.pow(1 - p, 3)))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.dataset.countDone = 'true';
      };
      requestAnimationFrame(tick);
      counter.unobserve(el);
    });
  }, { threshold: 0.55 });
  document.querySelectorAll('[data-count]').forEach(el => counter.observe(el));
} else {
  document.querySelectorAll('[data-count]').forEach(el => {
    el.textContent = formatNumber(Number(el.dataset.count)) + (el.dataset.suffix || '');
    el.dataset.countDone = 'true';
  });
}
document.getElementById('yr').textContent = new Date().getFullYear();

/* ========== Contact email reveal ========== */
const emailReveal = document.getElementById('emailReveal');
const emailCard = document.getElementById('emailCard');
const companyEmail = document.getElementById('companyEmail');
const copyEmail = document.getElementById('copyEmail');
companyEmail.textContent = COMPANY_EMAIL;
companyEmail.href = 'mailto:' + COMPANY_EMAIL;
emailReveal.addEventListener('click', () => {
  const open = emailReveal.getAttribute('aria-expanded') !== 'true';
  emailReveal.setAttribute('aria-expanded', String(open));
  emailCard.hidden = !open;
  emailReveal.classList.toggle('is-open', open);
  if (open) emailCard.classList.add('email-visible');
  else emailCard.classList.remove('email-visible');
});
copyEmail.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(COMPANY_EMAIL);
    copyEmail.textContent = copy[currentLang]['contact.copied'];
    copyEmail.dataset.justCopied = 'true';
    window.setTimeout(() => {
      copyEmail.textContent = copy[currentLang]['contact.copy'];
      delete copyEmail.dataset.justCopied;
    }, 1800);
  } catch {
    copyEmail.textContent = copy[currentLang]['contact.copyFail'];
    window.setTimeout(() => { copyEmail.textContent = copy[currentLang]['contact.copy']; }, 2200);
  }
});

/* ========== Cursor trail and subtle hover effects ========== */
if (fine && !reduced) {
  root.classList.add('has-cursor');
  const dot = document.querySelector('.cur-dot');
  const ring = document.querySelector('.cur-ring');
  const label = document.querySelector('.cur-label');
  const canvas = document.getElementById('trail');
  const ctx = canvas.getContext('2d');
  let W, H, dpr;
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width = window.innerWidth * dpr;
    H = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  };
  resize(); window.addEventListener('resize', resize);
  let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
  const pts = [];
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    root.classList.add('cur-on');
    pts.push({ x: mx, y: my, life: 1 });
    if (pts.length > 36) pts.shift();
  });
  document.addEventListener('mouseleave', () => root.classList.remove('cur-on'));
  document.addEventListener('mouseenter', () => root.classList.add('cur-on'));
  window.addEventListener('mousedown', () => root.classList.add('cur-down'));
  window.addEventListener('mouseup', () => root.classList.remove('cur-down'));
  const setState = target => {
    if (!(target instanceof Element)) return;
    const link = target.closest('a, button, [data-cur], .card, .stat');
    const text = target.closest('input, textarea');
    root.classList.toggle('cur-link', !!link && !text);
    root.classList.toggle('cur-text', !!text);
    const textLabel = link && link.dataset.cur;
    label.textContent = textLabel || '';
    root.classList.toggle('cur-label', !!textLabel);
    root.classList.toggle('cur-dark', !!target.closest('.dark, .cta-sec, .foot, .menu-screen, .value-vision'));
  };
  document.addEventListener('mouseover', e => setState(e.target));
  const loop = () => {
    rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
    dot.style.transform = `translate(${mx}px,${my}px)`;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    ctx.clearRect(0, 0, W, H);
    ctx.save(); ctx.scale(dpr, dpr);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i]; p.life -= 0.04;
      if (p.life <= 0) { pts.splice(i--, 1); continue; }
      const r = 1 + p.life * 4.5;
      const c = p.life > 0.5 ? '255,128,0' : '46,139,87';
      ctx.fillStyle = `rgba(${c},${p.life * 0.48})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  document.querySelectorAll('.magnet').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.16;
      const y = (e.clientY - r.top - r.height / 2) * 0.2;
      btn.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener('mouseleave', () => btn.style.transform = '');
  });
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', px * 100 + '%');
      card.style.setProperty('--my', py * 100 + '%');
      card.style.transform = `perspective(900px) rotateY(${(px - .5) * 5}deg) rotateX(${(.5 - py) * 5}deg) translateY(-5px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    card.style.transition = 'transform .28s ease-out';
  });
  const tilt = document.getElementById('tilt');
  const art = tilt && tilt.parentElement;
  if (art) {
    art.addEventListener('mousemove', e => {
      const r = art.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      tilt.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 10}deg) scale(1.035)`;
    });
    art.addEventListener('mouseleave', () => tilt.style.transform = '');
  }
}

// Apply the default language after all controls have been wired.
translate('fa');
})();
