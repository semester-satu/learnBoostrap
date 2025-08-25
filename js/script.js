// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple Alert for Order Now
const orderBtn = document.querySelector('a[href="#contact"]');
if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    alert('Thank you for choosing Fırın Kita! Scroll down to place your order.');
  });
}
