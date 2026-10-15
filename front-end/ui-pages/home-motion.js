/* Chuyển động dùng chung cho bảy bản thiết kế, theo trang chủ storefront. */
(() => {
  'use strict';

  const selectors = [
    '.product-intro__head',
    '.product-intro__item',
    '.product-intro__video',
    '.golden-section__inner > .eyebrow',
    '.golden',
    '.gh-slider',
    '.tiers__head',
    '.tiers__list',
    '.tiers__foot',
    '.tiers .collab',
    '.tiers .home-partner',
    '.eco__heading',
    '.eco-slider',
    '.collection__head',
    '.collection > .cards',
    '.story__eyebrow',
    '.story__title',
    '.story__rotor',
    '.story__deck',
    '.story .flags',
    '.footer__grid > *',
  ];

  function setupHomeReveal() {
    if (!('IntersectionObserver' in window) ||
        (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      return;
    }

    const registered = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top ||
          a.boundingClientRect.left - b.boundingClientRect.left)
        .forEach((entry, order) => {
          const target = entry.target;
          target.style.setProperty('--home-preview-delay', `${Math.min(order * .08, .32)}s`);
          const settle = (event) => {
            if (event.target !== target || event.propertyName !== 'opacity') return;
            target.removeEventListener('transitionend', settle);
            target.classList.remove('home-preview-reveal', 'is-visible');
            target.classList.add('home-preview-reveal-done');
            target.style.removeProperty('--home-preview-delay');
          };
          target.addEventListener('transitionend', settle);
          target.classList.add('is-visible');
          observer.unobserve(target);
        });
    }, { rootMargin: '0px 0px -12% 0px', threshold: .14 });

    document.documentElement.classList.add('home-motion-ready');
    const register = () => {
      const targets = Array.from(document.querySelectorAll(selectors.join(',')))
        .filter((target) => !registered.has(target));
      if (!targets.length) return;
      targets.forEach((target) => {
        registered.add(target);
        target.style.setProperty('transition', 'none');
        target.classList.add('home-preview-reveal');
      });
      // Chốt trạng thái ẩn trước khi bật transition để không chớp khi trang vừa tải.
      void document.body.offsetHeight;
      targets.forEach((target) => {
        target.style.removeProperty('transition');
        observer.observe(target);
      });
    };
    register();
    return register;
  }

  function setupLazyMedia() {
    const registered = new WeakSet();
    const register = () => {
      document.querySelectorAll('img[loading="lazy"]').forEach((image) => {
        if (registered.has(image)) return;
        registered.add(image);
        image.classList.add('home-preview-lazy-media');
        const loaded = () => {
          image.classList.add('is-loaded');
          image.removeEventListener('load', loaded);
          image.removeEventListener('error', loaded);
        };
        if (image.complete) {
          loaded();
        } else {
          image.addEventListener('load', loaded, { once: true });
          image.addEventListener('error', loaded, { once: true });
        }
      });
    };
    register();
    return register;
  }

  function setupHeroSlideshow() {
    const hero = document.querySelector('.hero');
    const background = hero?.querySelector('.home-preview-hero-background');
    const first = background?.querySelector('.home-preview-hero-slide');
    const firstImage = first?.querySelector('img');
    if (!firstImage) return;

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection;
    if (reducedMotion?.matches || connection?.saveData) return;

    const seasons = [
      { file: 2, name: 'autumn', alt: 'Hộp Cháo Sâm Mùa Thu và tô cháo hoàn nguyên giữa lá phong vàng đỏ' },
      { file: 3, name: 'winter', alt: 'Hộp, gói Cháo Sâm Mùa Đông và tô cháo hoàn nguyên bên hồ núi tuyết' },
      { file: 1, name: 'spring', alt: 'Hộp, gói Cháo Sâm Mùa Xuân và tô cháo hoàn nguyên giữa hoa xuân' },
    ];
    const slides = [first];
    const ready = new WeakSet();
    const hovered = new Set();
    let active = 0;
    let enabled = false;
    let focused = hero.contains(document.activeElement);
    let paused = focused || document.hidden;
    let timer = 0;
    let retireTimer = 0;
    let mountTimer = 0;

    const schedule = () => {
      window.clearTimeout(timer);
      if (!enabled || paused) return;
      timer = window.setTimeout(step, 6000);
    };
    const step = () => {
      for (let offset = 1; offset < slides.length; offset += 1) {
        const candidate = (active + offset) % slides.length;
        const image = slides[candidate].querySelector('img');
        if (!ready.has(image) && !(image.complete && image.naturalWidth > 0)) continue;

        const previous = slides[active];
        previous.dataset.state = 'previous';
        previous.setAttribute('aria-hidden', 'true');
        slides[candidate].dataset.state = 'active';
        slides[candidate].removeAttribute('aria-hidden');
        active = candidate;
        window.clearTimeout(retireTimer);
        retireTimer = window.setTimeout(() => { previous.dataset.state = 'idle'; }, 1350);
        break;
      }
      schedule();
    };
    const syncPause = () => {
      const next = focused || hovered.size > 0 || document.hidden;
      if (paused === next) return;
      paused = next;
      schedule();
    };

    // Các khối chữ ở mẫu là anh em; chỉ dừng khi đọc chúng, như vùng content của React.
    hero.querySelectorAll('.hero__copy, .hero__member, .hero-golden').forEach((content) => {
      content.addEventListener('pointerenter', (event) => {
        if (event.pointerType === 'touch') return;
        hovered.add(content);
        syncPause();
      });
      content.addEventListener('pointerleave', () => {
        hovered.delete(content);
        syncPause();
      });
    });
    hero.addEventListener('focusin', () => { focused = true; syncPause(); });
    hero.addEventListener('focusout', (event) => {
      if (hero.contains(event.relatedTarget)) return;
      focused = false;
      syncPause();
    });
    document.addEventListener('visibilitychange', syncPause);

    const mount = () => {
      // Ba ảnh sau tải trễ, ưu tiên thấp; ảnh Hạ đầu tiên giữ nguyên preload và LCP.
      if (reducedMotion?.matches || connection?.saveData) return;
      seasons.forEach((season) => {
        const picture = document.createElement('picture');
        picture.className = 'hero__bg home-preview-hero-slide';
        picture.dataset.season = season.name;
        picture.dataset.state = 'idle';
        picture.setAttribute('aria-hidden', 'true');
        first.querySelectorAll('source').forEach((original) => {
          const source = original.cloneNode();
          source.srcset = original.getAttribute('srcset').replace('banner_hero_4_', `banner_hero_${season.file}_`);
          picture.append(source);
        });
        const image = document.createElement('img');
        image.alt = season.alt;
        image.width = Number(firstImage.getAttribute('width'));
        image.height = Number(firstImage.getAttribute('height'));
        image.loading = 'eager';
        image.decoding = 'async';
        image.fetchPriority = 'low';
        const markReady = () => {
          const done = () => { if (image.naturalWidth > 0) ready.add(image); };
          if (typeof image.decode === 'function') image.decode().then(done, done);
          else done();
        };
        image.addEventListener('load', markReady, { once: true });
        image.src = firstImage.getAttribute('src').replace('banner_hero_4_', `banner_hero_${season.file}_`);
        picture.append(image);
        background.append(picture);
        slides.push(picture);
        if (image.complete && image.naturalWidth > 0) markReady();
      });
      enabled = true;
      background.dataset.rotating = 'true';
      schedule();
    };
    const afterLoad = () => { mountTimer = window.setTimeout(mount, 1500); };
    if (document.readyState === 'complete') afterLoad();
    else window.addEventListener('load', afterLoad, { once: true });

    reducedMotion?.addEventListener('change', (event) => {
      if (!event.matches) return;
      window.clearTimeout(mountTimer);
      window.clearTimeout(timer);
      window.clearTimeout(retireTimer);
      enabled = false;
      background.dataset.rotating = 'false';
      slides.forEach((slide, index) => {
        slide.dataset.state = index === 0 ? 'active' : 'idle';
        if (index === 0) slide.removeAttribute('aria-hidden');
        else slide.setAttribute('aria-hidden', 'true');
      });
      active = 0;
    });
  }

  function setupHomeMotion() {
    const registerReveal = setupHomeReveal();
    const registerMedia = setupLazyMedia();
    setupHeroSlideshow();
    if (!('MutationObserver' in window)) return;
    // Nội dung thêm muộn (ảnh trong giỏ, khối mới) cũng có hiệu ứng; bỏ qua nhịp cập nhật chữ đồng hồ.
    new MutationObserver((records) => {
      if (!records.some((record) => Array.from(record.addedNodes).some((node) => node.nodeType === 1))) return;
      registerReveal?.();
      registerMedia();
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupHomeMotion, { once: true });
  } else {
    setupHomeMotion();
  }
})();
