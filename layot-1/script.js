document.querySelector(".slider_control").addEventListener("click", toSlideCarouselRight);

var SliderTrack = document.querySelector(".slider-track");
var SliderImg = document.querySelector(".slider_image");
var SliderImgWidth = window
  .getComputedStyle(SliderImg)
  .getPropertyValue("width");
var ScrollWidth = parseInt(SliderImgWidth, 10) + 30;
var i = 0;

function toSlideCarouselRight() {
  i -= ScrollWidth;
  SliderTrack.style.transition = "transform 700ms";
  SliderTrack.style.transform = "translateX(" + i + "500px)";
}
