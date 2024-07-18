document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Example of validation (for demonstration purposes)
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
            // Redirect to home page
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});
