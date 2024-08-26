document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('form-message');

    // Simple validation example
    if (name && email && message) {
        formMessage.textContent = 'Thank you for your message!';
        formMessage.style.color = 'green';
        document.getElementById('contact-form').reset(); // Optional: reset the form
    } else {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    }
});
