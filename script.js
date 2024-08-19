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
//---------------------------

//---------------------------------

// The constants and variables to get the values and select the nodes
// const form = document.getElementById('calculate_form');
// const tdeeResult = document.getElementById('tdee_result');
// const calculateButton = document.getElementById('calculate_button');
// let age = document.getElementById('age').value;
// let height = document.getElementById('height').value;
// let weight = document.getElementById('weight').value;
// let palValue = document.getElementById('pal').value;
// let tdee;

// // The function that calculates the TDEE kcal
// function calculate() {
//   age = document.getElementById('age').value;
//   height = document.getElementById('height').value;
//   weight = document.getElementById('weight').value;
//   palValue = document.getElementById('pal').value;
//   if (age == '' || height == '' || weight == '' || document.getElementById('male').checked === false && document.getElementById('female').checked === false) {
//     alert('Please insert the correct information.');
//     return;
//   } else if (document.getElementById('male').checked) {
//     tdee = 10 * weight + 6.25 * height - 5 * age + 5;
//     tdee = Math.round(tdee * palValue);
//     tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
//     return;
//   } else (document.getElementById('female').checked);
//   tdee = 10 * weight + 6.25 * height - 5 * age - 161;
//   tdee = Math.round(tdee * palValue);
//   tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
//   return;
// }


// // addEventListener for the 'calculate button' 
// calculateButton.addEventListener('click', calculate);

// //addEventListener for clearing the form
// document.getElementById('clear_button').addEventListener('click', function() {
//   document.getElementById('age').value = '';
//   document.getElementById('height').value = '';
//   document.getElementById('weight').value = '';
//   document.getElementById('pal').selectedIndex = 0;
//   document.getElementById('gender').checked = false;
//   document.getElementById('female').checked = false;
//   document.getElementById('tdee_result').innerHTML = '';
// });

