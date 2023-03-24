// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const top = document.querySelector("#top-button");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    top.classList.remove("hidden");
    top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    top.classList.remove("flex");
    top.classList.add("hidden");
  }
};

//Hamburger-menu
const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");
hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburgerMenu && e.target != navMenu) {
    hamburgerMenu.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
