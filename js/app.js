const menuBtn = document.getElementsByClassName('menu-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu');

const clickedBtn = ()=> {
  mobileMenu[0].classList.toggle('active');
}

menuBtn[0].addEventListener('click', clickedBtn);

console.log(menuBtn[0]);
