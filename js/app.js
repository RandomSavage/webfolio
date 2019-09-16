const menuBtn = document.getElementsByClassName('menu-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu');

const clickedBtn = ()=> {
  mobileMenu[0].classList.toggle('active');
  console.log("on");
}

menuBtn[0].addEventListener('click', clickedBtn);

console.log(menuBtn[0]);




/*function myFunction() {
  var x = document.getElementById("bam");
  if (x.style.display === "none") {
    clickedBtn();
    console.log("on");
  } else {
    x.style.display = "none";
    console.log("off");
  }
}*/
