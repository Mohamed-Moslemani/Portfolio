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

document.addEventListener("DOMContentLoaded", function() {
    const lines = [
        'Mohamed_Moslemani_Robotic_Version > print("Hello World")',
        'Mohamed_Moslemani_Human_Version > print("Stop, please, Don\'t kill me")',
        'Mohamed_Moslemani_Robotic_Version > print("Good Bye Humans, Hello world")'
    ];

    let currentLine = 0;
    let currentChar = 0;
    const typingSpeed = 50; // typing speed in milliseconds

    function typeLine() {
        if (currentLine < lines.length) {
            let lineElement = document.getElementById(`line${currentLine + 1}`);
            if (currentChar < lines[currentLine].length) {
                lineElement.innerHTML += lines[currentLine][currentChar];
                currentChar++;
                setTimeout(typeLine, typingSpeed);
            } else {
                currentLine++;
                currentChar = 0;
                setTimeout(typeLine, typingSpeed);
            }
        }
    }

    typeLine();
});
