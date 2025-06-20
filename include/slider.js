// JavaScript Document

let sliderIndex = 0;
const totalSlides = 7;
const slideWidth = 400;
let interval;

const track = document.querySelector('.slider-track');
const slider = document.getElementById('slider');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

function moveToSlide(index) {
  sliderIndex = (index + totalSlides) % totalSlides;
  track.style.transform = `translateX(-${slideWidth * sliderIndex}px)`;
}

function nextSlide() {
  moveToSlide(sliderIndex + 1);
}

function prevSlide() {
  moveToSlide(sliderIndex - 1);
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
slider.addEventListener('mouseenter', stopAutoSlide);
slider.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();













