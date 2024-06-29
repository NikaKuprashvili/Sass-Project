"use strict";

const burger = document.getElementById("burger");
const nav = document.getElementById("navigation");
const tbcLogo = document.getElementById("tbc-logo");

const burgerClickHandler = () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("active");
};

const tbcLogoClickHandler = () => {
  window.open("https://www.tbceducation.ge", "_blank");
};

burger.addEventListener("click", burgerClickHandler);
tbcLogo.addEventListener("click", tbcLogoClickHandler);
