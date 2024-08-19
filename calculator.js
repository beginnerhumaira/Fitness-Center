// The constants and variables to get the values and select the nodes
const form = document.getElementById('calculate_form');
const tdeeResult = document.getElementById('tdee_result');
const calculateButton = document.getElementById('calculate_button');
let age, height, weight, palValue, gender;

// The function that calculates the TDEE kcal
function calculate() {
  age = document.getElementById('age').value;
  height = document.getElementById('height').value;
  weight = document.getElementById('weight').value;
  palValue = document.getElementById('pal').value;
  gender = document.querySelector('input[name="gender"]:checked').value;

  if (age == '' || height == '' || weight == '' || gender === undefined) {
    alert('Please insert the correct information.');
    return;
  } else {
    if (gender === 'male') {
      tdee = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      tdee = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    tdee = Math.round(tdee * palValue);
    tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
    return;
  }
}

// addEventListener for the 'calculate button' 
calculateButton.addEventListener('click', calculate);

//addEventListener for clearing the form
document.getElementById('clear_button').addEventListener('click', function() {
  document.getElementById('age').value = '';
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('pal').selectedIndex = 0;
  document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
  document.getElementById('tdee_result').innerHTML = '';
});