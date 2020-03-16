const modal = document.querySelector('.modal__wrapper');
const modalWindow = modal.querySelector('.modal__content');
const modalContent = modalWindow.querySelector('.modal__wrapper');
const button = document.body.querySelector('#submit-button');

export const modalShow = () => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.add('page_noscroll');
    modal.classList.add('modal__wrapper_show');
    modalWindow.classList.add('modal__content_show');
  })
}
