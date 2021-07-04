const manuLinks = document.querySelectorAll('.manu__link[data-goto]');

if (manuLinks.length > 0) {
  manuLinks.forEach((manuLink) => {
    manuLink.addEventListener('click', onManuLinkClick);
  });
}

function onManuLinkClick(e) {
  const manuLink = e.target;
  if (manuLink.dataset.goto && document.querySelector(manuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(manuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
    // - document.querySelector('.header').offsetHeight;

    if (burgerManu.classList.contains('open')) {
      body.classList.remove('lock');
      burgerManu.classList.remove('open');
      manuList.classList.remove('open');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}
