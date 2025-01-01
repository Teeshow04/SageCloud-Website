

// Get the necessary elements
const toggleButton = document.querySelector('.toggle-btn');
const navbar = document.querySelector('.navbar');

// Add event listener to the toggle button
toggleButton.addEventListener('click', function() {
    // Toggle the 'active' class on the navbar when the button is clicked
    navbar.classList.toggle('active');
});
