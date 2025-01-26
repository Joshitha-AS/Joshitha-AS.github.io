const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href').substring(1) === entry.target.id);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    observer.observe(section);
  });
});

 // Progress bar animation
 const progressBars = document.querySelectorAll('[data-progress]');
  
 const progressObserver = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       const progressBar = entry.target;
       const progress = progressBar.dataset.progress;
       progressBar.style.width = `${progress}%`;
       progressBar.style.transition = 'width 1s ease-in-out';
       observer.unobserve(progressBar);
     }
   });
 }, { threshold: 0.5 });

 progressBars.forEach(bar => {
   progressObserver.observe(bar);
 });
