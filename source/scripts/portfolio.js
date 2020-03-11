'Use strict';
const sort = document.querySelector('.portfolio__sort');
const sortItem = sort.querySelectorAll('.sort__item');
const works = document.querySelector('.works');
const worksItem = works.querySelectorAll('.works__item');

sort.addEventListener('click', event => {
  sortItem.forEach(element => element.classList.remove('sort__item_active'));
  event.target.classList.add('sort__item_active');

  let magicNumber = 1 + Math.floor(Math.random() * Math.floor(11));
  for (let i = 0; i <= magicNumber; i++) {
    works.prepend(worksItem[i]);
  };
});

