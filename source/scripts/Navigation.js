const menu = document.querySelector('.navigation-main__list');
const tab = menu.querySelectorAll('.navigation-main__item-link');
const sections = document.querySelectorAll('.section');
const headerHeight = document.querySelector('.header__main').offsetHeight;
const GAP_FOR_LAST_BLOCK = 100;

function linkSwitch(element) {
  const attributeId = element.getAttribute('id');
  tab.forEach(anchor => {
    const attributeHref = anchor.getAttribute('href').substring(1);
    anchor.classList.remove('link_active');
    if (attributeId === attributeHref) {
      localStorage.setDefault = anchor.getAttribute('href');
      anchor.classList.add('link_active');
    }
  });
}

function onScroll() {
  const currentPosition = window.scrollY;
  localStorage.setDefault = '';

  sections.forEach((element) => {
    if ((element.offsetTop - headerHeight - GAP_FOR_LAST_BLOCK) <= currentPosition && (element.offsetTop + element.offsetHeight) > currentPosition) {
      linkSwitch(element);
    }
  });
}

function tabDefault() {
  tab.forEach(element => {
    // element.classList.remove('link_active');
    if (element.getAttribute('href') === localStorage.setDefault) {
      element.classList.add('link_active');
    }
  });
}

export const navigation = () => {
  tabDefault();
  document.addEventListener('scroll', onScroll);
};
