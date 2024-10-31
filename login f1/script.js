document.addEventListener("DOMContentLoaded", function () {
    const toggleLinks = document.querySelectorAll('.toggle');
    const loginForm = document.querySelector('.login-form');
    const registrationForm = document.querySelector('.content');
    const card = document.querySelector('.card');

    // Set initial state
    loginForm.classList.add('active');
    registrationForm.classList.remove('active');
    card.style.transform = 'translateX(0)'; // Ensure the card starts in the correct position

    // Function to handle the form toggle
    toggleLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            // Check which form is currently active
            if (loginForm.classList.contains('active')) {
                // Switch to registration form
                loginForm.classList.remove('active');
                registrationForm.classList.add('active');
                card.style.transform = 'translateX(-100%)'; // Slide out login, slide in register
            } else {
                // Switch to login form
                registrationForm.classList.remove('active');
                loginForm.classList.add('active');
                card.style.transform = 'translateX(0)'; // Slide in login
            }
        });
    });
});
