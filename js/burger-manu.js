const body = document.querySelector('body');
const burgerManu = document.querySelector('.manu__burger');
const manuList = document.querySelector('.manu__list');

burgerManu.addEventListener('click', () => {
  body.classList.toggle('lock');
  burgerManu.classList.toggle('open');
  manuList.classList.toggle('open');
});
