// Functionality for user to send emails through the web

const membershipform = document.getElementById('membership_form'); // Updated to match the exact ID from your form
const query = document.getElementById('query');
const email = document.getElementById('email');

// Initialize EmailJS with your User ID (Public Key)
emailjs.init('UOjTu4QEfk8oRejLy'); // Replace with your actual user ID

// Add event listener to the send button
document.getElementById('send').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Validate the input fields
  if (email.value.trim() === '' || query.value.trim() === '') {
    alert('Please fill the required form.');
    return;
  }
  console.log(query.value, email.value);


  emailjs.sendForm('service_qv00ka7', 'template_mfdhlxg', '#membership_form')
  .then((response) => {
    alert('Email successfully sent!');
    membershipform.reset(); // Clear the form inputs after successful submission
  })
  .catch((error) => {
    alert('Error sending email: ' + error.text);
  });

});