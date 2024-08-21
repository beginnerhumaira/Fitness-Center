// const registerButton = document.getElementById("register");
// const loginButton = document.getElementById("login");
// const container = document.getElementById("container");
// const userregisterButton=document.getElementById("user-register")

// registerButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// loginButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });

// userregisterButton.addEventListener("click",() =>{
//   container.classList.add("right-panel-active");
   
// })
document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const userregisterButton = document.getElementById("user-register");

  registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
  // userregisterButton.addEventListener("click", () => {
  //   console.log("User Register button clicked");
  //   window.location.replace = "index.html";
  // });
 
});
function Home() {
  console.log("User Register button clicked");
  window.location.href = "index.html";
}

