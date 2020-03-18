const menu = document.querySelector('.navigation-main__list');
const tab = menu.querySelectorAll('.navigation-main__item-link');

export const tabs = () => {
  linkLighter();

}

const linkLighter = () => {
  menu.addEventListener('click', event => {
    tab.forEach(element => element.classList.remove('link_active'));
    event.target.classList.add('link_active');
  });
}

const getPosition = () => {
  const currentPosition = window.scrollY;
  
}