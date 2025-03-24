document.getElementById('myForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Check if the fields are empty
    if (!name || !email) {
        event.preventDefault(); // Prevent form submission
        document.getElementById('message').style = 'color: red';
        document.getElementById('contactText').textContent = 'Please fill in all required fields.';
    } else {
        document.getElementById('message').style = 'color: green';
        document.getElementById('message').textContent = 'Form submitted successfully!';
    }
});


const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});