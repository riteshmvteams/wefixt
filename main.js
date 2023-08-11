const menuOpenButton = document.querySelector(".menu__open");
const menuCloseButton = document.querySelector(".menu__close");
const navbarEl = document.querySelector(".nav");
const bgOverlay = document.querySelector(".overlay");
const menuItems = navbarEl.querySelectorAll(".nav__list li");
const faqOpenButtons = document.querySelectorAll(".faq button");
const faqAnsawers = document.querySelectorAll(".single__faq--answer");

// opening the navbar & showing overlay
menuOpenButton.addEventListener("click", () => {
  navbarEl.classList.add("show");
  bgOverlay.classList.add("show");
});

// function to remove show class
const removeShowClass = () => {
  navbarEl.classList.remove("show");
  bgOverlay.classList.remove("show");
};

// closing the navbar & removing overlay
menuCloseButton.addEventListener("click", () => {
  removeShowClass();
});

// closing the navbar & removing overlay
bgOverlay.addEventListener("click", () => {
  removeShowClass();
});

// onclick of each link closing the nav
menuItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    removeShowClass();
    removeActiveClass();
    navItem.firstElementChild.classList.add("active");
  });
});

const removeActiveClass = () => {
  menuItems.forEach((navItem) => {
    navItem.firstElementChild.classList.remove("active");
  });
};

// to toggle the faq questions
faqOpenButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.classList.toggle("show");
  });
});
