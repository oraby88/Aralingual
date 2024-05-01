function appear() {
    document.querySelector(".dropDown").classList.toggle("display");
  }
  function mini_nav_dropDown() {
    document.querySelector(".mini-nav-dropDown").classList.toggle("display");
  }

var humbrger = document.querySelector(".humbrger");
var navList = document.querySelector(".nav-list");

function show(){
    document.getElementById('nav-list').classList.toggle("nav-display");
    document.getElementsByTagName('article')[0].classList.toggle("blurWindow");
    console.log('aaaa');
}