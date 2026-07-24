document.addEventListener('DOMContentLoaded', () => {
  /* Navigation Scroll Effect */
  const nav = document.getElementById('mainNav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Scroll Reveal Observer */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  revealEls.forEach(el => observer.observe(el));

  /* Category Filter Logic for Catalog */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.grid .card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

/* Mobile Menu Toggle */
function openMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const burger = document.getElementById('burgerBtn');
  if (mobileMenu) {
    mobileMenu.classList.add('open');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const burger = document.getElementById('burgerBtn');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* Purchase & Service Redirection Handlers */
function checkout(name, price) {
  window.location.href = `payment.html?item=${encodeURIComponent(name)}&price=${price}`;
}

function requestService(serviceName) {
  window.location.href = `contact.html?interest=${encodeURIComponent(serviceName)}`;
}
