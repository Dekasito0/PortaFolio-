// Menú desplegable para móviles
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});

// Interacción del formulario de contacto
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formFeedback.textContent = '¡Gracias por tu mensaje! Me pondré en contacto pronto.';
  formFeedback.classList.remove('hidden');
  formFeedback.style.color = 'green';
  formFeedback.style.marginTop = '1rem';
  contactForm.reset();
});