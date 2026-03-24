// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenuMobile = document.getElementById('nav-menu-mobile');

// Toggle menu on hamburger click
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenuMobile.classList.toggle('active');
});

// Close menu when a link is clicked
const mobileLinks = navMenuMobile.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenuMobile.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickOnMenu = navMenuMobile.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickOnMenu && !isClickOnHamburger && navMenuMobile.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenuMobile.classList.remove('active');
    }
});
