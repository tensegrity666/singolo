const slide = document.querySelector('.slider__slide_slide-1');

export const screen = () => {
  slide.addEventListener('click', (event) => {
      if (event.target.classList.contains('iphone_vertical')) {
        verticalScreenOff();
      } else if (event.target.classList.contains('iphone_horizontal')) {
        horizontalScreenOff();
      }
  });
}

const verticalScreenOff = () => {
  const verticalScreen = document.querySelector('.iphone_vertical');
  verticalScreen.classList.toggle('iphone_vertical-off')
}

const horizontalScreenOff = () => {
  const horizontalScreen = document.querySelector('.iphone_horizontal');
  horizontalScreen.classList.toggle('iphone_horizontal-off')
}
