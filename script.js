// script.js

// Function to handle navigation link clicks
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const pageName = event.target.textContent;

            // Display an alert for demonstration purposes
            alert(`You clicked on ${pageName}`);
        });
    });

    // Functionality for the cart icon
    const cartIcon = document.querySelector('.cart');
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        alert('Cart clicked!'); // Placeholder for cart functionality
    });

    // Functionality for login/logout
    const loginLink = document.querySelector('.login');
    loginLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const isLoggedIn = loginLink.textContent.includes('Log out');
        
        if (isLoggedIn) {
            loginLink.innerHTML = '<i class="fas fa-user"></i>Log in';
            alert('You have logged out.');
        } else {
            loginLink.innerHTML = '<i class="fas fa-user"></i>Log out';
            alert('You have logged in.');
        }
    });
});