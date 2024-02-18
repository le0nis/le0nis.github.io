document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('hidden');
        if (navMenu.classList.contains('hidden')) {
            navMenu.style.transform = 'translateX(100%)';
        } else {
            navMenu.style.transform = 'translateX(0)';
        }
    });
});