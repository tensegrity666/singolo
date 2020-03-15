const modal = document.querySelector('.modal__wrapper');
const modalContent = modal.querySelector('.modal__content');
const button = document.body.querySelector('#submit-button');

export const modalShow = () => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    modal.classList.add('modal__wrapper_show');
    modalContent.classList.add('modal__content_show');
    document.body.classList.add('page_noscroll');
  })
}
