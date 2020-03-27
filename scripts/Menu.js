import { modal } from './Modal.js';

const header = document.querySelector('.header__main');
const nav = header.querySelector('.navigation-main');
const burger = nav.querySelector('.navigation-main__button-inner');
const logo = header.querySelector('.logo__item');
const overlay = document.querySelector('.modal__wrapper');

const showMenu = () => {
  nav.classList.toggle('navigation-main_show');
  burger.classList.toggle('navigation-main__button-inner_reverse');
  logo.classList.toggle('logo__item_menu');
  modal.classList.toggle('modal__wrapper_show');
}

const closeOnBlur = () => {
  overlay && overlay.addEventListener('click', () => {
    showMenu()
  });
}

export const menuHandler = () => {
  header.addEventListener('touchend', event => {
    if (event.target.classList.contains('navigation-main__button') || event.target.classList.contains('navigation-main__button-inner')) {
      event.preventDefault();
      showMenu();
    }
  });
  burger.addEventListener('touchmove', event => {
    event.preventDefault();
  });
  closeOnBlur();
}
