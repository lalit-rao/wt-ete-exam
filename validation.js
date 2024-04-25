document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('jobApplicationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;
    const startDate = document.getElementById('startDate').value;
    const phone = document.getElementById('phone').value;
    const relocateYes = document.getElementById('relocateYes').checked;
    const relocateNo = document.getElementById('relocateNo').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (firstName === '' || lastName === '' || email === '' || position === '' || salary === '' || startDate === '' || phone === '' || (!relocateYes && !relocateNo)) {
        alert('Please fill in all fields.');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Position:', position);
    console.log('Salary:', salary);
    console.log('Start Date:', startDate);
    console.log('Phone:', phone);
    console.log('Willing to relocate:', relocateYes ? 'Yes' : 'No');

    alert('Form submitted successfully!');
}