// Dylan's Helpdesk – main.js

// === Hamburger menu ===
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// === Active nav links on scroll ===
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#185FA5';
      link.style.fontWeight = '500';
    } else {
      link.style.fontWeight = '';
    }
  });
});

// === Contactformulier ===
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.textContent = 'Versturen...';
  submitBtn.disabled = true;

  // Simuleer verzending (koppel hier later een echte backend aan)
  setTimeout(() => {
    form.reset();
    formSuccess.classList.add('show');
    submitBtn.textContent = 'Verstuur bericht';
    submitBtn.disabled = false;

    setTimeout(() => {
      formSuccess.classList.remove('show');
    }, 5000);
  }, 800);
});

// === Smooth scroll voor anker-links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
