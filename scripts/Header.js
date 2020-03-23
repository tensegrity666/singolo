let position = 0;
const header = document.querySelector('.header__main');

export const headerHide = () => {
  window.addEventListener('scroll', () => {
    if (document.body.getBoundingClientRect().top > position) {
      header.setAttribute('data-visibility', 'show');
    } else {
      header.setAttribute('data-visibility', 'hidden');
    }
    position = document.body.getBoundingClientRect().top;
  });
};
