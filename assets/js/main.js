// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggleButton && navMenu) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for in-page links
const inPageLinks = document.querySelectorAll('a[href^="#"]');
for (const link of inPageLinks) {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href') || '';
    if (targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
}

// Current year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Reveal animations
const revealElements = document.querySelectorAll('.section, .timeline-item, .skill-card, .project-card, .testimonial');
for (const el of revealElements) {
  el.classList.add('reveal');
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.1 });

for (const el of revealElements) {
  observer.observe(el);
}