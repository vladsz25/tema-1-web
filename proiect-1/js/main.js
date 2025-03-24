// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
  
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle menu icon animation
        const bars = menuToggle.querySelectorAll('.bar');
        if (menuToggle.classList.contains('active')) {
          bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
          bars[1].style.opacity = '0';
          bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
        }
      });
    }
  
    // Form validation for the contact form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate name
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        
        if (!nameInput.value.trim()) {
          nameError.textContent = 'Name is required';
          nameError.style.display = 'block';
          isValid = false;
        } else {
          nameError.style.display = 'none';
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailInput.value.trim()) {
          emailError.textContent = 'Email is required';
          emailError.style.display = 'block';
          isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
          emailError.textContent = 'Please enter a valid email address';
          emailError.style.display = 'block';
          isValid = false;
        } else {
          emailError.style.display = 'none';
        }
        
        // Validate message
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        
        if (!messageInput.value.trim()) {
          messageError.textContent = 'Message is required';
          messageError.style.display = 'block';
          isValid = false;
        } else {
          messageError.style.display = 'none';
        }
        
        // If form is valid, show success message
        if (isValid) {
          newsletterForm.style.display = 'none';
          const formSuccess = document.getElementById('formSuccess');
          formSuccess.style.display = 'block';
          
          // Reset form
          newsletterForm.reset();
        }
      });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add fade-in animations when scrolling
    const fadeElements = document.querySelectorAll('.card, .recipe-card, .exercise-card, .benefit');
    
    function checkFade() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('fade-in');
        }
      });
    }
    
    // Add fade-in class
    function addFadeClass() {
      fadeElements.forEach(element => {
        element.classList.add('fade-in-element');
      });
    }
    
    // Call functions on load and scroll
    addFadeClass();
    window.addEventListener('scroll', checkFade);
    checkFade();
  });
  
  // Add CSS animation for fade-in elements
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .fade-in {
        opacity: 1;
        transform: translateY(0);
      }
    </style>
  `);
  