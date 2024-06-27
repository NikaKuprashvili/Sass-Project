"use strict";

const burger = document.getElementById("burger");
const nav = document.getElementById("navigation");

const burgerClickHandler = () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("active");
};

burger.addEventListener("click", burgerClickHandler);
