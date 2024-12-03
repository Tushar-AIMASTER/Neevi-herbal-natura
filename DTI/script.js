document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
        // Add your form submission logic here (e.g., send data to a server)
    }
});
