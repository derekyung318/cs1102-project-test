let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}