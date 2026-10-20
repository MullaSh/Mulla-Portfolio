// ============================================
// Mobile menu
// Opens and closes the navigation on small screens (900px and below).
// ============================================
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Close the menu after a link is clicked
const menuLinks = menu.querySelectorAll('a');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
  });
});

// ============================================
// Footer year
// Keeps the copyright year up to date automatically.
// ============================================
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();
