'Use strict';

const controls = document.querySelector('.controls__list');
const controlArrows = controls.querySelectorAll('.controls__list_control');
const controlArrowNext = document.getElementById('next');
const controlArrowPrevious = document.getElementById('previous');
const background = document.querySelector('.slider');
const slider = background.querySelector('.slider__gallery');
const slides = slider.querySelectorAll('.slider__slide');

const currentSlide = 0;

const changeCurrentSlide = n => {
  currentSlide = (n + slides.length) % slides.length;
}

controlArrowNext.addEventListener('click', () => {

  slides.forEach(element => {
    element.classList.toggle('slider__slide_to-right');
  })

  background.classList.toggle('slider_background-blue');
  controlArrows.forEach(element => element.classList.toggle('slider__control_blue'));
});
