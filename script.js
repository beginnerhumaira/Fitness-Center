// Script File

// Home Section Starts
var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
var navList = document.querySelector('.main-navbar .nav-list');
var navListItems = document.querySelectorAll('.nav-list li a');

hamburgerBtn.addEventListener('click', activeClass);

function activeClass(){
	hamburgerBtn.classList.toggle('active');
	navList.classList.toggle('active');
}

for(var i = 0; i < navListItems.length; i++){
	navListItems[i].addEventListener('click', listItemClicked);
}

function listItemClicked(){
	hamburgerBtn.classList.remove('active');
	navList.classList.remove('active');
}

// Code For Navbar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 150){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

// Home Section Ends
//calorie burn calculator


// The constants and variables to get the values and select the nodes
const form = document.getElementById('calculate_form');
const tdeeResult = document.getElementById('tdee_result');
const calculateButton = document.getElementById('calculate_button');
let age = document.getElementById('age').value;
let height = document.getElementById('height').value;
let weight = document.getElementById('weight').value;
let palValue = document.getElementById('pal').value;
let tdee;

// The function that calculates the TDEE kcal
function calculate() {
  age = document.getElementById('age').value;
  height = document.getElementById('height').value;
  weight = document.getElementById('weight').value;
  palValue = document.getElementById('pal').value;
  if (age == '' || height == '' || weight == '' || document.getElementById('male').checked === false && document.getElementById('female').checked === false) {
    alert('Please insert the correct information.');
    return;
  } else if (document.getElementById('male').checked) {
    tdee = 10 * weight + 6.25 * height - 5 * age + 5;
    tdee = Math.round(tdee * palValue);
    tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
    return;
  } else (document.getElementById('female').checked);
  tdee = 10 * weight + 6.25 * height - 5 * age - 161;
  tdee = Math.round(tdee * palValue);
  tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
  return;
}


// addEventListener for the 'calculate button' 
calculateButton.addEventListener('click', calculate);

//addEventListener for clearing the form
document.getElementById('clear_button').addEventListener('click', function() {
  document.getElementById('age').value = '';
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('pal').selectedIndex = 0;
  document.getElementById('gender').checked = false;
  document.getElementById('female').checked = false;
  document.getElementById('tdee_result').innerHTML = '';
});

// Functionality for user to send emails through the web
// const membershipform = document.getElementById('membership_form'); // Updated to match the exact ID from your form
// const queryInput = document.getElementById('query');
// const emailInput = document.getElementById('email');

// // TODO:Initialize EmailJS with your User ID (Public Key)
// emailjs.init('UOjTu4QEfk8oRejLy'); // Replace with your actual user ID

// // Add event listener to the send button
// document.getElementById('send').addEventListener('click', function (e) {
//   e.preventDefault(); // Prevent the form from submitting normally

//   // Get the email and query values
//  //const email = emailInput.value.trim();
//   const query = queryInput.value.trim();


//   // Validate the input fields
//   if (queryInput.value.trim() === '' || emailInput.value.trim() === '') {
//     alert('Please fill the required form.');
//     return;
//   }
// //TODO: USE YOUR SERVICE ID AND TEMPLATE ID
// //emailjs.sendForm('service_id', 'template_id', 'template_prams')
//   // Send the email using EmailJS
//   emailjs.sendForm('service_m2tb9kg', 'template_mfdhlxg', '#membership_form', {
//     email,
//     query,
//   })
//   .then((response) => {
//     alert('Email successfully sent!');
//     form.reset(); // Clear the form inputs after successful submission
//   })
//   .catch((error) => {
//     alert('Error sending email: ' + error.text);
//   });

// });

// const membershipform = document.getElementById('membership_form'); // Updated to match the exact ID from your form
// const queryInput = document.getElementById('query');
// const emailInput = document.getElementById('email');



// // Initialize EmailJS with your User ID (Public Key)
// emailjs.init('UOjTu4QEfk8oRejLy'); // Replace with your actual user ID

// // Add event listener to the send button
// document.getElementById('send').addEventListener('click', function (e) {
//   e.preventDefault(); // Prevent the form from submitting normally

//   // Validate the input fields
//   if (queryInput.value.trim() === '' || emailInput.value.trim() === '') {
//     alert('Please fill the required form.');
//     return;
//   }

//   emailjs.sendForm('service_hesom79', 'template_tl761gc', 'memebership_form',{
    
//   })
//   .then((response) => {
//     alert('Email successfully sent!');
//     membershipform.reset(); // Clear the form inputs after successful submission
//   })
//   .catch((error) => {
//     alert('Error sending email: ' + error.text);
//   });

// });


// function sendMail(){

//   var prams={
//     email:document.getElementById("email").value,
//     query:document.getElementById("query").value,
//   }
//   const serviceID=service_qv00ka7;
//   const templateID=template_mfdhlxg;
//   emailjs
//   .send(serviceID,templateID,prams)
//   .then((res) => {
//     document.getElementById("email").value="";
//     document.getElementById("query").value="";
//     console.log(res);
//     alert("Email sent");
//   })
// .catch((err)=>console.log(err));
// }