"use strict";
let navBurger = document.querySelector(".nav-burger");
let closeIcon = document.querySelector(".close");
let drawer = document.querySelector(".drawer");
let overlayer = document.querySelector(".overlayer");
navBurger.addEventListener("click", function () {
  drawer.classList.add("open");
  overlayer.classList.remove("hidden");
});
const close = function () {
  drawer.classList.remove("open");
  overlayer.classList.add("hidden");
};
closeIcon.addEventListener("click", close);
overlayer.addEventListener("click", close);
window.addEventListener("scroll", close);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && drawer.classList.contains("open")) {
    close();
  }
});
