import { previousSlide, currentSlide, nextSlide, backgroundToggle, isEnabled } from './Slider.js';

const surface = document.querySelector('.slider');
const THRESHOLD = 150;
const RESTRAINT = 100;
const ALLOWED_TIME = 500;
let startX = 0;
let startY = 0;
let distX = 0;
let distY = 0;
let startTime = 0;
let elapsedTime = 0;

const touch = () => {
  surface.addEventListener('touchstart', function (event) {
    if (event.target.classList.contains('slider__control_previous')) {
      previousSlide(currentSlide);
      backgroundToggle();
    } else if (event.target.classList.contains('slider__control_next')) {
      nextSlide(currentSlide);
      backgroundToggle();
    }

    const touchObject = event.changedTouches[0];
    startX = touchObject.pageX;
    startY = touchObject.pageY;

    startTime = new Date().getTime();
    event.preventDefault();
  });

  surface.addEventListener('touchend', function (event) {
    const touchObject = event.changedTouches[0];
    distX = touchObject.pageX - startX;
    distY = touchObject.pageY - startY;

    elapsedTime = new Date().getTime() - startTime;
    event.preventDefault();

    if (elapsedTime <= ALLOWED_TIME) {
      if (Math.abs(distX) >= THRESHOLD && Math.abs(distY) < RESTRAINT) {
        if (isEnabled) {
          if (distX > 0) {
            nextSlide(currentSlide);
            backgroundToggle();
          } else {
            previousSlide(currentSlide);
            backgroundToggle();
          }
        }
      }
    }
  });
}

const mouseMove = () => {
  surface.addEventListener('mousedown', function (event) {
    startX = event.pageX;
    startY = event.pageY;

    startTime = new Date().getTime();
    event.preventDefault();
    surface.style.cursor = 'grabbing';
  });

  surface.addEventListener('mouseup', function (event) {
    distX = event.pageX - startX;
    distY = event.pageY - startY;

    elapsedTime = new Date().getTime() - startTime;
    event.preventDefault();
    surface.style.cursor = 'grab';

    if (elapsedTime <= ALLOWED_TIME) {
      if (Math.abs(distX) >= THRESHOLD && Math.abs(distY) < RESTRAINT) {
        if (isEnabled) {
          if (distX > 0) {
            nextSlide(currentSlide);
            backgroundToggle();
          } else {
            previousSlide(currentSlide);
            backgroundToggle();
          }
        }
      }
    }
  });
}

export const swipeDetect = () => {
  mouseMove();
  touch();
}
