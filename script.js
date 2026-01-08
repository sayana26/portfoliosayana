// Function to toggle block colors when tapped/clicked
document.querySelectorAll('.clickable-block').forEach((block, index) => {
    block.addEventListener('click', () => {
        // Blocks toggle between their normal state and a glowing blue/pink state
        if (index % 2 === 0) {
            block.classList.toggle('active-blue');
        } else {
            block.classList.toggle('active-pink');
        }
    });
});

// Staggered Scroll Reveal Logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});