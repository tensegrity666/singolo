const menu = document.querySelector('.navigation-main__list');
const tab = menu.querySelectorAll('.navigation-main__item-link');
const sections = document.querySelectorAll('.section');
const headerHeight = document.querySelector('.header__main').offsetHeight;
const GAP_FOR_LAST_BLOCK = 100;

export const navigation = () => {
  tabDefault();
  document.addEventListener('scroll', onScroll);
}

function onScroll() {
  const currentPosition = window.scrollY;

  sections.forEach(element => {
    if ((element.offsetTop - headerHeight - GAP_FOR_LAST_BLOCK) <= currentPosition && (element.offsetTop + element.offsetHeight) > currentPosition) {
      linkSwitch(element);
    }
  });
}

function linkSwitch(element) {
  const attributeId = element.getAttribute('id');
  tab.forEach(anchor => {
    const attributeHref = anchor.getAttribute('href').substring(1);
    anchor.classList.remove('link_active');
    if (attributeId === attributeHref) {
      anchor.classList.add('link_active');
      localStorage.setDefault = anchor.getAttribute('href');
    }
  });
}

function tabDefault() {
  tab.forEach(element => {
    if (element.getAttribute('href') === localStorage.setDefault)
      element.classList.add('link_active');
  });
}
