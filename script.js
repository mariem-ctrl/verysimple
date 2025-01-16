// script.js

document.addEventListener('DOMContentLoaded', function() {
    const messageContainer = document.querySelector('.message-container');
    
    // Add a soft fade-in effect to the message
    messageContainer.style.opacity = 0;
    messageContainer.style.transition = "opacity 2s ease-in-out";
    
    setTimeout(() => {
        messageContainer.style.opacity = 1;
    }, 1000);
    
    // Add a subtle background sound (optional)
    const audio = new Audio('path/to/some-heartfelt-song.mp3'); // Replace with actual audio file
    audio.loop = true;
    audio.play();
});
