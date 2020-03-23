const controls = document.querySelector('.controls__list');
const controlArrows = controls.querySelectorAll('.controls__list_control');
const controlArrowNext = document.getElementById('next');
const controlArrowPrevious = document.getElementById('previous');
const background = document.querySelector('.slider');
const slider = background.querySelector('.slider__gallery');
const slides = slider.querySelectorAll('.slider__slide');

export let currentSlide = 0;
export let isEnabled = true;

function changeCurrentSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
}

export function previousSlide(n) {
  hideItem('to-left');
  changeCurrentSlide(n - 1);
  showItem('from-right');
}

export function nextSlide(n) {
  hideItem('to-right');
  changeCurrentSlide(n + 1);
  showItem('from-left');
}

function hideItem(direction) {
  isEnabled = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('slider_active', direction);
  });
}

function showItem(direction) {
  slides[currentSlide].classList.add('slider_next', direction);
  slides[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('slider_next', direction);
    this.classList.add('slider_active');
    isEnabled = true;
  });
}

export const arrows = () => {

  controlArrowNext.addEventListener('click', () => {
    if (isEnabled) {
      nextSlide(currentSlide);
      backgroundToggle();
    }
  });


  controlArrowPrevious.addEventListener('click', () => {
    if (isEnabled) {
      previousSlide(currentSlide);
      backgroundToggle();
    }
  });
}

export const backgroundToggle = () => {
  background.classList.toggle('slider_background-blue');
  controlArrows.forEach(element => element.classList.toggle('slider__control_blue'));
}