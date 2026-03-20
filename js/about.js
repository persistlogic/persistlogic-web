// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to Top button functionality
document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// WhatsApp button functionality
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://wa.me/919996315463?text=Hello%20Persist%20Logic%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services', '_blank');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]:not(#backToTop):not(#whatsappBtn)').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const service = document.querySelector('select[name="service"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  
  // Create email body
  const subject = 'New Contact Form Submission - About Page';
  const body = `Name: ${name}%0AEmail: ${email}%0AService: ${service}%0AMessage: ${message}`;
  
  // Open default email client
  window.location.href = `mailto:info@persistlogic.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  
  // Show success message
  alert('Thank you for your message! Your email client will open to send the message.');
  
  // Reset form
  this.reset();
});

// Trigger animations on scroll
const animateElements = document.querySelectorAll('.slide-left, .slide-right, .fade-up, .zoom-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Initial check for elements in view
setTimeout(() => {
  animateElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.style.animationPlayState = 'running';
    }
  });
}, 100);