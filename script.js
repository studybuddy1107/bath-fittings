// Intersection Observer to animate on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in, .fade-in-up, .fade-slide-down').forEach(el => {
  observer.observe(el);
});
