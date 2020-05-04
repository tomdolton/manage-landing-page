//
// Mobile nav toggle
// ==========================================================================

const hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".nav");
const modal = document.querySelector(".modal");

// Toggles active classes on nav components
function toggleNav() {
  hamburger.classList.toggle("header__hamburger--active");
  nav.classList.toggle("nav--active");
  modal.classList.toggle("modal--active");
}

// Removes active classes on nav components
function closeNav() {
  hamburger.classList.remove("header__hamburger--active");
  nav.classList.remove("nav--active");
  modal.classList.remove("modal--active");
}

// When hamburger icon is clicked, acive classes are toggled
hamburger.addEventListener("click", toggleNav);

// When model is clicked (outside displayed nav menu), acitve classes are removed
window.addEventListener("click", (e) => {
  if (e.target.className == "modal modal--active") {
    closeNav();
  }
});



//
// Initialize Flickity carousel
// ==========================================================================

const carousel = document.querySelector(".main-carousel");
const flkty = new Flickity(carousel, {
  // options
  wrapAround: true,
  autoPlay: 5000
  // adaptiveHeight: true
});



//
// Form validation
// ==========================================================================

const form = document.querySelector(".updates-form");
const input = document.querySelector(".updates-form__input");
const error = document.querySelector(".updates-form__error");

// Checks if argument is a valid email address string
function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

// Validates form value
function validateForm(formValue) {

  if (!formValue) {
    error.innerHTML = "Please enter your email address";
    error.classList.remove("updates-form__error--success");
    input.classList.add("updates-form__input--error");
  } else if (!validateEmail(formValue)) {
    error.innerHTML = "That is not a valid email address";
    error.classList.remove("updates-form__error--success");
    input.classList.add("updates-form__input--error");
  } else {
    error.innerHTML = "Successfully signed up to the mailing list!";
    input.classList.remove("updates-form__input--error");
    error.classList.add("updates-form__error--success");
    input.value = "";
  }
}

// Handle form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  error.classList.add("updates-form__error--active");
  validateForm(value);
});