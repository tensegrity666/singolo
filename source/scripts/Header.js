const GAP_FOR_HEADER = 250;
let position = 0;
const header = document.querySelector('.header__main');
const navIsShown = document.querySelector('.navigation-main');

export const headerHide = () => {
  window.addEventListener('scroll', () => {
    if (navIsShown.classList.contains('navigation-main_show')) {
      header.setAttribute('data-visibility', 'show');
    } else if (Math.abs(position) > GAP_FOR_HEADER) {
      if (document.body.getBoundingClientRect().top > position) {
        header.setAttribute('data-visibility', 'show');
      } else {
        header.setAttribute('data-visibility', 'hidden');
      }
    }
    position = document.body.getBoundingClientRect().top;
  });
}
