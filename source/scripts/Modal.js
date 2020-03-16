const modal = document.querySelector('.modal__wrapper');
const modalWindow = modal.querySelector('.modal__content');
const modalContent = modalWindow.querySelector('.modal__wrapper');
const submit = document.body.querySelector('#submit-button');
const close = modalWindow.querySelector('.modal__close');

export const modalShow = () => {
  isValid();
}

  close.addEventListener('click', () => {
    noScroll();
    hide();
  });

const noScroll = () => {
  document.body.classList.toggle('page_noscroll');
}

const show = () => {
  modal.classList.add('modal__wrapper_show');
  modalWindow.classList.add('modal__content_show');
}

const hide = () => {
  modal.classList.remove('modal__wrapper_show');
  modalWindow.classList.remove('modal__content_show');
}

const isValid = () => {
  submit.addEventListener('click', (event) => {
    if (name.validity.valid && email.validity.valid) {
      event.preventDefault();
      noScroll();
      show();
      dataToModal();
    }
  });
}

const form = document.querySelector('.contacts__form');
const name = form.querySelector('#Name');
const email = form.querySelector('#Email');
const subject = form.querySelector('#Subject');
const comment = form.querySelector('#Comment');

const success = document.querySelector('#Succes');
const subjectContent = document.querySelector('#subjectContent');
const commentContent = document.querySelector('#commentContent');

const dataToModal = () => {
  success.innerText = `The letter was sent`;
  subject.value ? subjectContent.innerText = `Title: ${subject.value}` : subjectContent.innerText = `Without subject`;
  comment.value ? commentContent.innerText = `Message: ${comment.value}` : commentContent.innerText = `Without description`;
}
