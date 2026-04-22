// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const elementPosition = target.offsetTop;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        formMessage.style.color = '#e74c3c';
        formMessage.textContent = '❌ Please fill all fields!';
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        formMessage.style.color = '#e74c3c';
        formMessage.textContent = '❌ Please enter a valid email!';
        return;
    }
    
    formMessage.style.color = '#9B7BDF';
    formMessage.textContent = `✅ Thank you ${name}! I'll get back to you soon.`;
    contactForm.reset();
    
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animate skill bars
const skillBars = document.querySelectorAll('.skill-progress');
const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            observer.unobserve(bar);
        }
    });
}, observerOptions);

skillBars.forEach(bar => observer.observe(bar));

// Card animations
const animateElements = document.querySelectorAll('.skill-card, .project-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    cardObserver.observe(el);
});