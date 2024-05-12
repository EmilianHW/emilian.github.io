document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const backgroundColor = getColor(mouseX, mouseY);
    document.body.style.backgroundColor = backgroundColor;
});

function getColor(x, y) {
    // Calculate color based on mouse position
    const hue = Math.round((x + y) / 5) % 360;
    return `hsl(${hue}, 30%, 90%)`; // Adjust saturation and lightness as needed
}

function showAboutMe() {
    window.location.href = "about-me/about-me-index.html";
}
