// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// ===== Animation barres de compétences =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width') || entry.target.style.width;
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.level-fill').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    bar.setAttribute('data-width', width);
    setTimeout(() => { bar.style.width = width; }, 300);
    observer.observe(bar);
});
