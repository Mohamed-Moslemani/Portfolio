document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach((link, index) => {
        link.style.setProperty('--i', index + 1);
    });

    const nav = document.querySelector('nav');
    nav.addEventListener('mouseover', () => {
        nav.style.width = '250px';
        document.querySelector('main').style.marginLeft = '250px';
    });

    nav.addEventListener('mouseout', () => {
        nav.style.width = '200px';
        document.querySelector('main').style.marginLeft = '200px';
    });
});

