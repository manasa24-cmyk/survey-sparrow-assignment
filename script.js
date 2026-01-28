// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Simple gallery lightbox
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.cursor = 'pointer';
        overlay.innerHTML = `<img src="${item.src}" style="max-width:90%; max-height:90%; border-radius:10px;">`;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

// Scroll animation (fade-in)
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight - 100;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.style.transition = '1s';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});
