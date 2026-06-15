// Smooth scroll behavior is handled by CSS
// Add any interactive features here

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link based on current section
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});