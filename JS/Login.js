// Loaded
let Icon = document.querySelector(".content .icon");
let Buttons = document.querySelector(".content .buttons");

// Login Button
let loginBtn = document.querySelector(".buttons .login");

let loginForm = document.querySelector(".loginForm");

loginBtn.addEventListener('click', ()=>{
    loginForm.classList.add("Login");
    Icon.classList.add("hide");
    Buttons.classList.add("hide");
    this.classList.add("animation");
});

// Close Login Form
let CloseBtn = document.getElementById("window-close");
CloseBtn.addEventListener("click", ()=>{
    loginForm.classList.remove("Login");
    Icon.classList.remove("hide");
    Buttons.classList.remove("hide");
})

// Sign Up Button 
let signBtn = document.querySelector(".signupBtn");

let signForm = document.querySelector(".signUpForm");

signBtn.addEventListener("click", ()=>{
    signForm.classList.add("Sign");
    Icon.classList.add("hide");
    Buttons.classList.add("hide");
})

// Close Sign Up Form
let CloseBtn2 = document.getElementById("window-close2");
CloseBtn2.addEventListener("click", ()=>{
    signForm.classList.remove("Sign");
    Icon.classList.remove("hide");
    Buttons.classList.remove("hide");
})
