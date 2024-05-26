function appear() {
  document.querySelector(".dropDown").classList.toggle("display");
}
function mini_nav_dropDown() {
  document.querySelector(".mini-nav-dropDown").classList.toggle("display");
}

var humbrger = document.querySelector(".humbrger");
var closeIcon = document.querySelector(".closeIcon");
var navList = document.querySelector(".nav-list");

function show() {
  document.getElementById("nav-list").classList.add("nav-display");
  document.getElementsByTagName("article")[0].classList.add("blurWindow");
  console.log("aaaa");
  document.getElementById("humbrger").style.display = "none";
  document.getElementById("closeIcon").style.display = "block";
}
function hide() {
  document.getElementById("nav-list").classList.remove("nav-display");
  document.getElementsByTagName("article")[0].classList.remove("blurWindow");
  console.log("aaaa");
  document.getElementById("humbrger").style.display = "flex";
  document.getElementById("closeIcon").style.display = "none";
}

/* Home page */
function arabic(direction) {
  document.body.style.direction = direction;
  // console.log("aviooo");
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  document.querySelector(".showArabicLanguageIcon").classList.add("display");
  document.querySelector(".englishIcone").classList.add("display");
  document.querySelector(".arabicIcon").classList.add("nonDisplay");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.add("nonDisplay");


  document.querySelector(".processGlow").classList.add("processGlowArabic");
  document.querySelector(".iframe").classList.add("iframeArabic");
  document.querySelector(".processBG").classList.add("processBGArabic");
  document.querySelector(".whyAraBG").classList.add("whyAraBGArabic");
  document.querySelector(".shape-1").classList.add("shape-1-arabic");
  document.querySelector(".processCard2").classList.add("rtl");
  console.log("aviooo");
}

function english(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  document.querySelector(".englishIcone").classList.remove("display");
  document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.toggle("display");


  document.querySelector(".processGlow").classList.remove("processGlowArabic");
  document.querySelector(".iframe").classList.remove("iframeArabic");
  document.querySelector(".processBG").classList.remove("processBGArabic");
  document.querySelector(".whyAraBG").classList.remove("whyAraBGArabic");
  document.querySelector(".shape-1").classList.remove("shape-1-arabic");
  document.querySelector(".processCard2").classList.remove("rtl");
}

/* Home Section */
// function homeArabic() {
//   document.querySelector(".processGlow").classList.add("processGlowArabic");
//   document.querySelector(".iframe").classList.add("iframeArabic");
//   document.querySelector(".processBG").classList.add("processBGArabic");
//   document.querySelector(".whyAraBG").classList.add("whyAraBGArabic");
//   document.querySelector(".shape-1").classList.add("shape-1-arabic");
//   document.querySelector(".processCard2").classList.add("rtl");
//   console.log("aviooo");
// }
// function homeEnglish() {
//   document.querySelector(".processGlow").classList.remove("processGlowArabic");
//   document.querySelector(".iframe").classList.remove("iframeArabic");
//   document.querySelector(".processBG").classList.remove("processBGArabic");
//   document.querySelector(".whyAraBG").classList.remove("whyAraBGArabic");
//   document.querySelector(".shape-1").classList.remove("shape-1-arabic");
//   document.querySelector(".processCard2").classList.remove("rtl");
// }

/* About Us Section */
function aboutArabic(direction) {
  document.body.style.direction = direction;
  console.log("avio");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.add("nonDisplay");
  document.querySelector(".showArabicLanguageIcon").classList.add("display");
  document.querySelector(".englishIcone").classList.add("display");
  document.querySelector(".arabicIcon").classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  document.querySelector(".shape-1").classList.add("shape-1-arabic");
  document.querySelector(".aboutCard").classList.add("aboutCardArabic");
  document.getElementById("card2").classList.add("aboutCardArabic");
  document.getElementById("card2").classList.add("aboutCardArabicLast-child");
  console.log("Before remove");
  document.querySelector(".dropDown").classList.remove("display");
  console.log("After remove");
}
function aboutEnglish(direction) {
  document.body.style.direction = direction;
  console.log("avio");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.remove("nonDisplay");
  document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  document.querySelector(".englishIcone").classList.remove("display");
  document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  document.querySelector(".shape-1").classList.remove("shape-1-arabic");
  document.querySelector(".aboutCard").classList.remove("aboutCardArabic");
  document
    .getElementById("card2")
    .classList.remove("aboutCardArabicLast-child");
  document.getElementById("card2").classList.remove("aboutCardArabic");

  document.querySelector(".dropDown").classList.remove("display");
}


/* FAQ Section */
function FAQArabic(direction) {
  document.body.style.direction = direction;
  // console.log("aviooo");
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  document.querySelector(".showArabicLanguageIcon").classList.add("display");
  document.querySelector(".englishIcone").classList.add("display");
  document.querySelector(".arabicIcon").classList.add("nonDisplay");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.add("nonDisplay");
}

function FAQEnglish(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  document.querySelector(".englishIcone").classList.remove("display");
  document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.toggle("display");
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


function newDisplay(parentId) {
  const parent = document.getElementById(parentId);
  parent.querySelector(".display-hide-content").classList.add("display");
  parent.querySelector(".close-button").classList.add("display");
  parent.querySelector(".question-number").classList.add("number-color");
  parent.querySelector(".open-button").style.display = "none";
  parent.classList.add("before");
}

function newNonDisplay(parentId) {
  const parent = document.getElementById(parentId);
  parent.querySelector(".display-hide-content").classList.remove("display");
  parent.querySelector(".close-button").classList.remove("display");
  parent.querySelector(".question-number").classList.remove("number-color");
  parent.querySelector(".open-button").style.display = "flex";
  parent.classList.remove("before");
}

// document.querySelector(".close-button").addEventListener("click", function (){
//   document.querySelector(".display-hide-content").classList.toggle("non-display");
// });

function NumberLanguageAppear() {
  document.querySelector(".phoneDropdown").classList.toggle("display");
}
