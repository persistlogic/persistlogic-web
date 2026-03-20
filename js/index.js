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
document.getElementById('backToTop').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// WhatsApp button functionality
document.getElementById('whatsappBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://wa.me/919996315463?text=Hello%20Persist%20Logic%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services', '_blank');
});

// HERO SLIDER FUNCTIONALITY
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Event listeners for slider
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    stopAutoSlide();
    startAutoSlide();
  });
});

// Start auto slide
startAutoSlide();

// SCROLL ANIMATION
const scrollElements = document.querySelectorAll('.scroll-left, .scroll-right, .scroll-up, .scroll-down, .scroll-zoom');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
  element.classList.add('scroll-active');
};

const hideScrollElement = (element) => {
  element.classList.remove('scroll-active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

// Trigger once on load
setTimeout(handleScrollAnimation, 100);

// ===== FORM SUBMISSION - DYNAMIC SUBJECT LINE =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const service = document.querySelector('select[name="service"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    // DYNAMIC SUBJECT - User ke message se
  
    let subjectLine = message.substring(0, 50);
    if (message.length > 50) {
      subjectLine = subjectLine + '...';
    }
    
    
    const subject = message ? 
      `Project Inquiry: ${subjectLine}` : 
      'New Project Inquiry from Website';
    
    // Create email body
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
    
    // Open default email client with dynamic subject
    window.location.href = `mailto:info@persistlogic.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Reset form
    this.reset();
  });
}

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