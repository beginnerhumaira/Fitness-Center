// Get modal element
const calorieModal = document.getElementById("calorieModal");

// Get open modal buttons
const readMoreBtn = document.querySelector(".read-more-btn");
const calorieBurnNavItem = document.querySelector('a[href="#calorie_burn"]'); // Select the "Calorie Burn" navbar item

// Get close button
const closeCalorieModal = document.querySelector(".close-modal");

// Function to open the modal
function openModal() {
    calorieModal.style.display = "block";
}

// Listen for clicks to open the modal
readMoreBtn.addEventListener("click", openModal);
calorieBurnNavItem.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    openModal();
});

// Listen for close click
closeCalorieModal.addEventListener("click", () => {
    calorieModal.style.display = "none";
});

// Close modal if outside click
window.addEventListener("click", (e) => {
    if (e.target == calorieModal) {
        calorieModal.style.display = "none";
    }
});
