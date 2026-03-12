// JavaScript script for Simeon Balume's portfolio

// Prevent pinch zoom on touch devices
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});

document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
});

document.addEventListener('gestureend', function(e) {
    e.preventDefault();
});

// Prevent double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Prevent wheel zoom with Ctrl/Cmd
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
    }
}, { passive: false });

// Initialization function on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Simeon Balume\'s portfolio loaded successfully!');
    
    // Scroll animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Option: arrêter d'observer après l'animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements to animate
    const animatedElements = document.querySelectorAll(
        '.section-head, .skill-card, .project-card, .testimonial-card, ' +
        '.formation-card, .about-item, .language-item, .tool-item, ' +
        '.hero-content, .hero-visual'
    );

    animatedElements.forEach((el, index) => {
        // Add progressive delay for a cascading effect
        el.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(el);
    });

    // Header animation on load
    setTimeout(() => {
        document.querySelector('.navbar')?.classList.add('animate-in');
    }, 100);
});
