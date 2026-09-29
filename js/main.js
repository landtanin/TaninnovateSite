document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      navLinks.classList.toggle('nav-links--open');
    });
  }

  // Reel: play while on screen, pause when scrolled away. Skipped entirely
  // for reduced motion, which leaves the poster and the native controls.
  const reel = document.querySelector('.reel-video');
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reel && !calm && 'IntersectionObserver' in window) {
    let userPaused = false;
    reel.addEventListener('pause', () => { if (!reel.dataset.auto) userPaused = true; });
    reel.addEventListener('play', () => { userPaused = false; });
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused) {
        reel.play().catch(() => {});
      } else if (!entry.isIntersecting && !reel.paused) {
        reel.dataset.auto = '1';
        reel.pause();
        delete reel.dataset.auto;
      }
    }, { threshold: 0.5 }).observe(reel);
  }
});
