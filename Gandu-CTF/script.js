document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById("typing-text");
    const message = "Welcome to the Gandu-CTF!!!";
    let index = 0;

    function typeMessage() {
        if (index < message.length) {
            typingText.textContent += message[index];
            index++;
            setTimeout(typeMessage, 100);
        }
    }

    // Start typing animation
    typeMessage();
});
