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
// Slider carousel
// ==========================================================================

let slideIndex = 1;
const duration = 6000;
const slides = [...document.querySelectorAll(".slider__item")];
const sliderDots = [...document.querySelectorAll(".slider__dot")];
const sliderDots2 = document.querySelectorAll(".slider__dot");

// Utility function to change a class on a document node
function changeClass(nodeArray, cssClass, index) {
  nodeArray.map(node => {
    node.classList.remove(cssClass);
  });
  nodeArray[index].classList.add(cssClass);
}

// Changes active classes on sider based on slideIndex
function changeSlide() {
  changeClass(slides, "slider__item--active", slideIndex);
  changeClass(sliderDots, "slider__dot--active", slideIndex);
}

// Bind click event to slider dots to call changeSide based on dot number
for (const dot of sliderDots) {
  dot.addEventListener("click", () => {
    slideIndex = sliderDots.indexOf(dot);
    changeSlide();
    clearInterval(timer);
    timer = setInterval(autoChange, duration);
  });
}

// Changes active classes automatically, called by setInterval
function autoChange() {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  changeSlide();
}

let timer = setInterval(autoChange, duration);
