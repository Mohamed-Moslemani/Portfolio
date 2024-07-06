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

    const lines = [
        "Mohamed_Moslemani_Robotic_Version > print(\"Hello World\")",
        "Mohamed_Moslemani_Human_Version > print(\"Stop, please, Don't kill me\")",
        "Mohamed_Moslemani_Robotic_Version > print(\"Good Bye Humans, Hello world\")"
    ];

    new Typed('#line1', {
        strings: [lines[0]],
        typeSpeed: 50,
        showCursor: false,
        onComplete: () => {
            new Typed('#line2', {
                strings: [lines[1]],
                typeSpeed: 50,
                showCursor: false,
                onComplete: () => {
                    new Typed('#line3', {
                        strings: [lines[2]],
                        typeSpeed: 50,
                        showCursor: true
                    });
                }
            });
        }
    });
});
