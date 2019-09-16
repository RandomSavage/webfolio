/*const menuBtn = document.getElementsByClassName('menu-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu');

const clickedBtn = ()=> {
  mobileMenu[0].classList.toggle('active');
  console.log("on");
}

menuBtn[0].addEventListener('click', clickedBtn);

console.log(mobileMenu[0]);*/


const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.active');

menuBtn.onclick = () => mobileMenu.classList.toggle('mobile-menu');
