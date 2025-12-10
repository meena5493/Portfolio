/**
 * Portfolio Website JavaScript
 * Author: John Doe
 * Description: Interactive functionality for the portfolio website
 */

// ==========================================
// DOM Elements
// ==========================================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const revealElements = document.querySelectorAll('.reveal');
const skillProgressBars = document.querySelectorAll('.skill-progress');

// ==========================================
// Theme Toggle Functionality
// ==========================================
function initTheme() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ==========================================
// Navigation Functionality
// ==========================================
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ==========================================
// Back to Top Button
// ==========================================
function handleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==========================================
// Scroll Reveal Animation
// ==========================================
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// ==========================================
// Skills Progress Bar Animation
// ==========================================
function animateSkillBars() {
    const windowHeight = window.innerHeight;
    
    skillProgressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        
        if (barTop < windowHeight - 50 && !bar.classList.contains('animated')) {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
            bar.classList.add('animated');
        }
    });
}

// ==========================================
// Contact Form Validation & Submission
// ==========================================
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(`${inputId}-error`);
    
    input.classList.add('error');
    errorSpan.textContent = message;
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(`${inputId}-error`);
    
    input.classList.remove('error');
    errorSpan.textContent = '';
}

function validateForm() {
    let isValid = true;
    
    // Validate Name
    const name = document.getElementById('name').value.trim();
    if (name.length < 2) {
        showError('name', 'Please enter a valid name (at least 2 characters)');
        isValid = false;
    } else {
        clearError('name');
    }
    
    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError('email');
    }
    
    // Validate Subject
    const subject = document.getElementById('subject').value.trim();
    if (subject.length < 3) {
        showError('subject', 'Please enter a subject (at least 3 characters)');
        isValid = false;
    } else {
        clearError('subject');
    }
    
    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message.length < 10) {
        showError('message', 'Please enter a message (at least 10 characters)');
        isValid = false;
    } else {
        clearError('message');
    }
    
    return isValid;
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const formStatus = document.getElementById('form-status');
    const submitBtn = contactForm.querySelector('.btn-submit');
    
    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! Your message has been sent successfully.';
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 5000);
    }, 1500);
}

// Real-time form validation
function setupFormValidation() {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            const id = this.id;
            const value = this.value.trim();
            
            switch(id) {
                case 'name':
                    if (value.length > 0 && value.length < 2) {
                        showError(id, 'Name must be at least 2 characters');
                    } else {
                        clearError(id);
                    }
                    break;
                case 'email':
                    if (value.length > 0 && !validateEmail(value)) {
                        showError(id, 'Please enter a valid email');
                    } else {
                        clearError(id);
                    }
                    break;
                case 'subject':
                    if (value.length > 0 && value.length < 3) {
                        showError(id, 'Subject must be at least 3 characters');
                    } else {
                        clearError(id);
                    }
                    break;
                case 'message':
                    if (value.length > 0 && value.length < 10) {
                        showError(id, 'Message must be at least 10 characters');
                    } else {
                        clearError(id);
                    }
                    break;
            }
        });
        
        // Clear error on focus
        input.addEventListener('focus', function() {
            clearError(this.id);
        });
    });
}

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                closeMobileMenu();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// Typing Effect for Hero Title (Optional Enhancement)
// ==========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==========================================
// Initialize All Functions
// ==========================================
function init() {
    // Initialize theme
    initTheme();
    
    // Run reveal animation on load
    revealOnScroll();
    
    // Animate skill bars if visible
    animateSkillBars();
    
    // Setup smooth scroll
    setupSmoothScroll();
    
    // Setup form validation
    if (contactForm) {
        setupFormValidation();
    }
    
    // Initial navbar state
    handleNavbarScroll();
    handleBackToTop();
    updateActiveNavLink();
}

// ==========================================
// Event Listeners
// ==========================================

// Theme toggle
themeToggle.addEventListener('click', toggleTheme);

// Mobile menu toggle
hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu on nav link click
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Back to top button
backToTop.addEventListener('click', scrollToTop);

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Scroll events
window.addEventListener('scroll', () => {
    handleNavbarScroll();
    handleBackToTop();
    updateActiveNavLink();
    revealOnScroll();
    animateSkillBars();
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

// Close mobile menu on clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        closeMobileMenu();
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', init);

// Run animations when page is fully loaded
window.addEventListener('load', () => {
    // Ensure all reveal animations are triggered
    setTimeout(revealOnScroll, 100);
    setTimeout(animateSkillBars, 300);
});
