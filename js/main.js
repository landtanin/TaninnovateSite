document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.nav-links');

  const setNavigationOpen = (open) => {
    if (!toggle || !navigation) return;

    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('nav-links--open', open);
    document.body.classList.toggle('nav-open', open);
  };

  if (toggle && navigation) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      const nextOpen = !isOpen;

      setNavigationOpen(nextOpen);

      if (nextOpen) {
        navigation.querySelector('a')?.focus();
      }
    });

    navigation.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setNavigationOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';

      if (event.key === 'Escape' && isOpen) {
        setNavigationOpen(false);
        toggle.focus();
        return;
      }

      if (event.key !== 'Tab' || !isOpen) return;

      const focusableItems = [toggle, ...navigation.querySelectorAll('a[href]')];
      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    });

    const desktopNavigation = window.matchMedia('(min-width: 860px)');
    desktopNavigation.addEventListener('change', (event) => {
      if (event.matches) setNavigationOpen(false);
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });

  const revealItems = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
});
