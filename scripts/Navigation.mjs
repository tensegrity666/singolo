const menu = document.querySelector('.navigation-main__list');
const tab = menu.querySelectorAll('.navigation-main__item-link');
const sections = document.querySelectorAll('.section');
const headerHeight = document.querySelector('.header__main').offsetHeight;

export const navigation = () => {
  document.addEventListener('scroll', onScroll);
}

function onScroll() {
  const currentPosition = window.scrollY;

  sections.forEach(element => {
    const attributeId = element.getAttribute('id');

    if ((element.offsetTop - headerHeight) <= currentPosition && (element.offsetTop + element.offsetHeight) > currentPosition) {
      tab.forEach(anchor => {
        const attributeHref = anchor.getAttribute('href').substring(1);
        anchor.classList.remove('link_active');
          if (attributeId === attributeHref) {
          anchor.classList.add('link_active');
          }
      });
    }
  });
}
