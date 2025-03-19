// Handle smooth scrolling for navigation links
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

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  let currentSection = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === currentSection) {
          link.classList.add('active');
      }
  });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();

// Handle contact form submission
//const contactForm = document.getElementById('contact-form');
//const toast = document.getElementById('toast');
//
//function showToast(message, isError = false) {
//    toast.textContent = message;
//    toast.style.backgroundColor = isError ? '#fee2e2' : '#dcfce7';
//    toast.style.color = isError ? '#991b1b' : '#166534';
//    toast.classList.add('show');
//    
//    setTimeout(() => {
//        toast.classList.remove('show');
//    }, 3000);
//}
//
//contactForm.addEventListener('submit', async (e) => {
//    e.preventDefault();
//    
//    const submitButton = contactForm.querySelector('button[type="submit"]');
//    submitButton.disabled = true;
//    submitButton.textContent = 'Sending...';
//
//    const formData = {
//        name: contactForm.name.value,
//        email: contactForm.email.value,
//        message: contactForm.message.value
//    };
//
//    try {
//        const response = await fetch('/api/contact', {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify(formData)
//        });
//
//        if (!response.ok) {
//            throw new Error('Failed to send message');
//        }
//
//        showToast('Message sent successfully! I\'ll get back to you soon.');
//        contactForm.reset();
//    } catch (error) {
//        showToast('Failed to send message. Please try again.', true);
//    } finally {
//        submitButton.disabled = false;
//        submitButton.textContent = 'Send Message';
//    }
//});

// Add scroll reveal animation
const revealElements = document.querySelectorAll('section > div');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(element);
});
