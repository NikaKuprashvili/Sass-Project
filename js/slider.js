"use strict";

const scrollSlider = () => {
  const slideButtons = document.querySelectorAll(".slide-button");
  const imageList = document.querySelector(".slide-imgs");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  slideButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const direction = btn.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      console.log(scrollAmount);
    });

    const handleSlideBtns = () => {
      slideButtons[0].style.display =
        imageList.scrollLeft <= 0 ? "none" : "block";
      slideButtons[1].style.display =
        imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    imageList.addEventListener("scroll", handleSlideBtns);
  });
};

window.addEventListener("DOMContentLoaded", scrollSlider);
