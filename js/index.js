document.addEventListener('DOMContentLoaded', function() {
    const lines = [
        "Initializing AI protocols...",
        "Loading data sets...",
        "Analyzing algorithms...",
        "Optimizing performance...",
        "AI integration successful.",
        "Mohamed_Moslemani_Robotic_Version > print(\"Good Bye Humans, Hello world\")"
    ];

    function initiateTypingSequence(currentIndex) {
        if (currentIndex >= lines.length) return; // Exit if all lines are processed

        const targetElementId = `line${currentIndex + 1}`;
        const typingOptions = {
            strings: [lines[currentIndex]],
            typeSpeed: 50,
            showCursor: currentIndex === lines.length - 1, // Display cursor on the last line
            onComplete: () => {
                console.log(`Line ${currentIndex + 1} typing complete.`);
                initiateTypingSequence(currentIndex + 1); // Proceed to the next line
            }
        };

        new Typed(`#${targetElementId}`, typingOptions);
    }

    initiateTypingSequence(0); // Start typing from the first line

    // Close functionality for the command line interface
    const closeButton = document.querySelector('#close-icon');
    closeButton.addEventListener('click', () => {
        const commandLineInterface = closeButton.closest('.command-line-box');
        commandLineInterface.style.display = 'none'; // Hide the command line box
    });
});