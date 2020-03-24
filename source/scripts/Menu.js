import { modal } from './Modal.js';

const header = document.querySelector('.header__main');
const nav = header.querySelector('.navigation-main');
const burger = nav.querySelector('.navigation-main__button-inner');

const showMenu = () => {
  nav.classList.toggle('navigation-main_show');
  burger.classList.toggle('navigation-main__button-inner_reverse');
}

export const menuHandler = () => {
  header.addEventListener('touchend', event => {
    console.log(event.target)
    if (event.target.classList.contains('navigation-main__button') || event.target.classList.contains('navigation-main__button-inner')) {
      showMenu();
      modal.classList.toggle('modal__wrapper_show');
    }
  });
}
