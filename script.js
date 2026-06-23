const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();
