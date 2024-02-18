document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger menu icon
    const menuIcon = document.querySelector('.hamburger-menu');
    // Select the navigation menu
    const navMenu = document.querySelector('.nav-menu');

    // Add click event listener to the hamburger menu icon
    menuIcon.addEventListener('click', function() {
        // Toggle the 'active' class to show or hide the menu
        navMenu.classList.toggle('active');
    });
});
