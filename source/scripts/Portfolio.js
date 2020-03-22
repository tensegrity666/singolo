const sort = document.querySelector('.sort');
const sortItem = document.querySelectorAll('.sort__item');
const works = document.querySelector('.works');
const worksItem = works.querySelectorAll('.works__item');

export const portfolio = () => {
  const removeSelectedItems = () => {
    sortItem.forEach(element => {
      element.classList.remove('sort__item_active');
    });
  }

  const shuffle = () => {
    let magicNumber = 1 + Math.floor(Math.random() * Math.floor(11));
    for (let i = 0; i <= magicNumber; i++) {
      works.prepend(worksItem[i]);
    }
  }

  sort.addEventListener('click', event => {
    if (event.target.classList.contains('sort__item')) {
      removeSelectedItems();
      event.target.classList.add('sort__item_active');
      shuffle();
    }
  });
}
