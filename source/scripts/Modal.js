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
      form.submit();
    }
  });
}

const form = document.querySelector('.contacts__form');
const name = form.querySelector('#Name');
const email = form.querySelector('#Email');
const subject = form.querySelector('#Subject');
const comment = form.querySelector('#Comment');

const nameContent = document.querySelector('#nameContent');
const emailContent = document.querySelector('#emailContent');
const subjectContent = document.querySelector('#subjectContent');
const commentContent = document.querySelector('#commentContent');

const dataToModal = () => {
  nameContent.innerText = `Name: ${name.value}`;
  emailContent.innerText = `E-mail: ${email.value}`;
  subjectContent.innerText = `Title: ${subject.value}`;
  commentContent.innerText = `Message: ${comment.value}`;
}
