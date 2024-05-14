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




/* FAQ Section */ 

// function display(id,section){
//   document.querySelector(".display-hide-content").classList.add("display");
//   document.querySelector(".close-button").classList.add("display");
//   document.getElementById(id).style.display = "none";
//   document.querySelector(".question-number").classList.add("number-color");
//   document.querySelector(section).classList.add("before");
// }

// function nonDisplay(id,section){
//   document.querySelector(".display-hide-content").classList.remove("display");
//   document.querySelector(".close-button").classList.remove("display");
//   document.getElementById(id).style.display = "flex";
//   document.querySelector(".question-number").classList.remove("number-color");
//   document.querySelector(section).classList.remove("before");
// }


function newDisplay(parentId){
  const parent=document.getElementById(parentId);
  parent.querySelector(".display-hide-content").classList.add("display");
  parent.querySelector(".close-button").classList.add("display");
  parent.querySelector(".question-number").classList.add("number-color");
  parent.querySelector('.open-button').style.display="none";
  parent.classList.add("before");
}

function newNonDisplay(parentId){
  const parent=document.getElementById(parentId);
  parent.querySelector(".display-hide-content").classList.remove("display");
  parent.querySelector(".close-button").classList.remove("display");
  parent.querySelector(".question-number").classList.remove("number-color");
  parent.querySelector('.open-button').style.display="flex";
  parent.classList.remove("before");
}

// document.querySelector(".close-button").addEventListener("click", function (){
//   document.querySelector(".display-hide-content").classList.toggle("non-display");
// });



