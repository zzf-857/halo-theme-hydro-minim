import "./styles/resume.css";

(function () {
  let activeImages: string[] = [];
  let activeIndex = 0;
  let autoplayTimer: number | null = null;
  let globalBound = false;

  function splitList(value: string | null, separator: 'pipe' | 'comma'): string[] {
    if (!value) return [];
    const pattern = separator === 'pipe' ? /\|/ : /,/;
    return value.split(pattern).map(function (item) {
      return item.trim();
    }).filter(Boolean);
  }

  function getModal(): HTMLElement | null {
    return document.getElementById('resume-work-modal');
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function renderSlide(index: number) {
    const modal = getModal();
    if (!modal || activeImages.length === 0) return;

    const image = modal.querySelector('#resume-modal-image') as HTMLImageElement | null;
    const count = modal.querySelector('#resume-modal-count') as HTMLElement | null;
    const thumbs = modal.querySelector('#resume-modal-thumbs') as HTMLElement | null;

    activeIndex = (index + activeImages.length) % activeImages.length;
    if (image) image.src = activeImages[activeIndex];
    if (count) {
      count.textContent = String(activeIndex + 1).padStart(2, '0') + ' / ' + String(activeImages.length).padStart(2, '0');
    }
    if (thumbs) {
      thumbs.querySelectorAll('button').forEach(function (button, buttonIndex) {
        button.classList.toggle('is-active', buttonIndex === activeIndex);
      });
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (activeImages.length <= 1) return;
    autoplayTimer = window.setInterval(function () {
      renderSlide(activeIndex + 1);
    }, 3600);
  }

  function closeModal() {
    const modal = getModal();
    if (!modal) return;
    stopAutoplay();
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openProjectModal(card: HTMLElement) {
    const modal = getModal();
    if (!modal || !card) return;

    const title = modal.querySelector('#resume-modal-title') as HTMLElement | null;
    const desc = modal.querySelector('#resume-modal-desc') as HTMLElement | null;
    const tags = modal.querySelector('#resume-modal-tags') as HTMLElement | null;
    const points = modal.querySelector('#resume-modal-points') as HTMLElement | null;
    const thumbs = modal.querySelector('#resume-modal-thumbs') as HTMLElement | null;

    activeImages = splitList(card.getAttribute('data-images'), 'comma');
    if (activeImages.length === 0) {
      const cardImage = card.querySelector('img') as HTMLImageElement | null;
      if (cardImage && cardImage.getAttribute('src')) {
        activeImages = [cardImage.getAttribute('src') as string];
      }
    }

    if (title) title.textContent = card.getAttribute('data-title') || '项目详情';
    if (desc) desc.textContent = card.getAttribute('data-desc') || '';
    if (tags) {
      tags.innerHTML = splitList(card.getAttribute('data-tags'), 'comma').map(function (tag) {
        return '<span>' + tag + '</span>';
      }).join('');
    }
    if (points) {
      points.innerHTML = splitList(card.getAttribute('data-points'), 'pipe').map(function (point) {
        return '<li>' + point + '</li>';
      }).join('');
    }
    if (thumbs) {
      thumbs.innerHTML = activeImages.map(function (src, index) {
        return '<button type="button" data-slide-index="' + index + '" aria-label="查看第 ' + (index + 1) + ' 张图"><img src="' + src + '" alt=""></button>';
      }).join('');
    }

    renderSlide(0);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    startAutoplay();
  }

  function initResumePage() {
    const root = document.querySelector('.resume-showcase') as HTMLElement | null;
    if (!root) return;

    const modal = root.querySelector('#resume-work-modal') as HTMLElement | null;
    if (modal && modal.parentNode !== document.body) {
      document.body.appendChild(modal);
    }

    if (root.dataset.resumeReady !== 'true') {
      root.dataset.resumeReady = 'true';
      root.classList.add('resume-js-ready');

      const revealItems = root.querySelectorAll('.resume-reveal');
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.14 });

        revealItems.forEach(function (item) {
          observer.observe(item);
        });
      } else {
        revealItems.forEach(function (item) {
          item.classList.add('is-visible');
        });
      }
    }

    if (globalBound) return;
    globalBound = true;

    document.addEventListener('click', function (event) {
      const target = event.target as HTMLElement;
      
      const card = target.closest ? (target.closest('.resume-work-card') as HTMLElement | null) : null;
      if (card) {
        event.preventDefault();
        openProjectModal(card);
        return;
      }

      if (target.closest && target.closest('[data-close-modal]')) {
        closeModal();
        return;
      }

      const thumb = target.closest ? (target.closest('[data-slide-index]') as HTMLElement | null) : null;
      if (thumb) {
        stopAutoplay();
        renderSlide(Number(thumb.getAttribute('data-slide-index') || 0));
        startAutoplay();
      }
    });

    document.addEventListener('click', function (event) {
      const target = event.target as HTMLElement;
      
      if (target.closest && target.closest('[data-slide-prev]')) {
        stopAutoplay();
        renderSlide(activeIndex - 1);
        startAutoplay();
      }
      if (target.closest && target.closest('[data-slide-next]')) {
        stopAutoplay();
        renderSlide(activeIndex + 1);
        startAutoplay();
      }
    });

    document.addEventListener('keydown', function (event) {
      const modal = getModal();
      if (!modal || !modal.classList.contains('is-open')) return;
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') {
        stopAutoplay();
        renderSlide(activeIndex - 1);
        startAutoplay();
      }
      if (event.key === 'ArrowRight') {
        stopAutoplay();
        renderSlide(activeIndex + 1);
        startAutoplay();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initResumePage);
  } else {
    initResumePage();
  }

  // 监听主题可能抛出的 pjax:complete 或类似局部刷新事件
  document.addEventListener('pjax:complete', initResumePage);
  document.addEventListener('pjax:success', initResumePage);
})();
