document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    const nav = document.querySelector('nav');
    nav.addEventListener('mouseover', () => {
        nav.style.width = '210px';
        document.querySelector('main').style.marginLeft = '300px';
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

    function typeSequence(currentIndex) {
        if (currentIndex >= lines.length) return; // Stop if no more lines

        const lineId = `line${currentIndex + 1}`;
        const typedOptions = {
            strings: [lines[currentIndex]],
            typeSpeed: 50,
            showCursor: currentIndex === lines.length - 1, // Show cursor only on last line
            onComplete: () => {
                console.log(`Completed line ${currentIndex + 1}`);
                typeSequence(currentIndex + 1); // Start next line
            }
        };

        new Typed(`#${lineId}`, typedOptions);
    }

    typeSequence(0);

    const closeIcon = document.querySelector('#close-icon');
    closeIcon.addEventListener('click', () => {
        const commandLineBox = closeIcon.closest('.command-line-box');
        commandLineBox.style.display = 'none';
    });
});
