// The constants and variables to get the values and select the nodes
const calculateButton = document.getElementById('calculate_button');
const clearButton = document.getElementById('clear_button');
const tdeeResult = document.getElementById('tdee_result');

// The function that calculates the TDEE kcal
function calculate(event) {
  event.preventDefault(); // Prevent form submission (if inside a form)

  const age = document.getElementById('age').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const palValue = document.getElementById('pal').value;
  const gender = document.querySelector('input[name="gender"]:checked');

  // Check if all fields are filled
  if (!age || !height || !weight || !gender) {
    alert('Please insert the correct information.');
    return;
  }

  // Calculate TDEE
  let tdee;
  if (gender.value === 'male') {
    tdee = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    tdee = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  tdee = Math.round(tdee * palValue);
  tdeeResult.innerHTML = `Your TDEE is: ${tdee} kcal/day`;
}

// Add event listener for the 'Calculate' button
calculateButton.addEventListener('click', calculate);

// Add event listener for clearing the form
clearButton.addEventListener('click', function () {
  document.getElementById('age').value = '';
  document.getElementById('height').value = '';
  document.getElementById('weight').value = '';
  document.getElementById('pal').selectedIndex = 0;
  document.querySelectorAll('input[name="gender"]').forEach((radio) => (radio.checked = false));
  tdeeResult.innerHTML = '';
});
