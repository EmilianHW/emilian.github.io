// Define an array of background colors
const colors = ['#f6d365', '#fda085', '#7fd1b9', '#c1c8e4', '#fbc2eb', '#a6c0fe'];

// Function to change the background color dynamically
function changeBackgroundColor(event) {
    // Get a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Set the background color of the body
    document.body.style.background = randomColor;
}

// Add event listener for mousemove event to change background color dynamically
document.addEventListener('mousemove', changeBackgroundColor);
