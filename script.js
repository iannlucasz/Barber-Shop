// script.js


document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggler animation
    const toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', () => {
        toggler.classList.toggle('collapsed');
    });

    // Smooth scroll for navbar links
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
