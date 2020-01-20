/*const menuBtn = document.getElementsByClassName('menu-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu');

const clickedBtn = ()=> {
  mobileMenu[0].classList.toggle('active');
  console.log("on");
}

menuBtn[0].addEventListener('click', clickedBtn);

console.log(mobileMenu[0]);*/


// const menuBtn = document.querySelector('.menu-btn');
// const mobileMenu = document.querySelector('.mobile-menu');
//
// menuBtn.onclick = () => mobileMenu.classList.toggle('active');
//
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

const myFunction = ()=> {
  let menuBtn = document.querySelector('.menu-btn');
  let mobileMenu = document.querySelector('.mobile-menu');
  if(mobileMenu.style.display = "none") {
    mobileMenu.classList.toggle('active');
    mobileMenu.style.display = "flex";
  } else {
    console.log("active");
  }
}


// mobileMenu.style.transform = "translate3d(-100%,0,0)"
