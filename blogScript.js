function appear() {
  document.querySelector(".dropDown").classList.toggle("display");
  console.log("appear");
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
  document.querySelector(".dropDown").classList.remove("display");
}

var x = window.matchMedia("(max-width: 900px)");
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.querySelector(".dropDown").classList.remove("display");
  }
}
x.addEventListener("change", function () {
  myFunction(x);
});

let lang = localStorage.getItem("language");
console.log("Current Langugae from storage: " + lang);
console.log(lang);
onload = function () {
  if (!lang) {
    browserLanguage();
  } else {
    if (lang == "ar") {
      blogArabic("rtl");
      console.log("choose arabic " + lang);
    } else {
      blogEnglish("ltr");
      console.log("choose english " + lang);
    }
  }
};

function browserLanguage() {
  let browserLang = navigator.language;
  console.log("Browser lang " + browserLang);
  if (browserLang == "en-US") {
    blogEnglish("ltr");
    console.log("choose enlish " + browserLang);
  } else if (browserLang == "ar") {
    blogArabic("rtl");
    console.log("choose arabic " + browserLang);
  }
}

function blogArabic(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.add("display");
  document.querySelector(".englishIcone").classList.add("display");
  document.querySelector(".arabicIcon").classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  document.querySelector(".bar2").classList.add("bar2Arabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.remove("display");

  var card = document.querySelector(".serviceCard");
  if (card) {
    document.querySelectorAll(".serviceCard").forEach((item) => {
      item.classList.add("serviceCardArabic");
    });
  }
  // const nodeList = document.querySelectorAll(".serviceCard");
  var cardContent = document.querySelector(".serviceCardContent");
  if (cardContent) {
    document.querySelectorAll(".serviceCardContent").forEach((item) => {
      item.classList.add("serviceCardContentArabic");
    });
  }
  // document.querySelector(".serviceCardContent").classList.add("serviceCardContentArabic");

  var image = document.querySelector(".img");
  if (image) {
    document.querySelectorAll(".img").forEach((item) => {
      item.classList.add("imgArabic");
    });
  }
  // document.querySelector(".img").classList.add("imgArabic");

  document.querySelector(".mainCard").classList.add("mainCardArabic");

  var cardBefore = document.querySelector(".cardContainer");
  if (cardBefore) {
    document.querySelectorAll(".cardContainer").forEach((item) => {
      item.classList.add("cardContainerArabic");
    });
  }
  // document.querySelector(".cardContainer").classList.add("cardContainerArabic");

  document.querySelector(".frame1").classList.add("frame1Arabic");

  var cardBefore = document.querySelector(".frame2");
  if (cardBefore) {
    document.querySelectorAll(".frame2").forEach((item) => {
      item.classList.add("frame1Arabic");
    });
  }
  // document.querySelector(".frame2").classList.add("frame2Arabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "ar");
  console.log("blog arabic");
}

function blogEnglish(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  document.querySelector(".englishIcone").classList.remove("display");
  document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  document.querySelector(".bar2").classList.remove("bar2Arabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("display");

  var card = document.querySelector(".serviceCard");
  if (card) {
    document.querySelectorAll(".serviceCard").forEach((item) => {
      item.classList.remove("serviceCardArabic");
    });
  }
  // const nodeList = document.querySelectorAll(".serviceCard");
  var cardContent = document.querySelector(".serviceCardContent");
  if (cardContent) {
    document.querySelectorAll(".serviceCardContent").forEach((item) => {
      item.classList.remove("serviceCardContentArabic");
    });
  }
  // document.querySelector(".serviceCardContent").classList.remove("serviceCardContentArabic");

  var image = document.querySelector(".img");
  if (image) {
    document.querySelectorAll(".img").forEach((item) => {
      item.classList.remove("imgArabic");
    });
  }
  // document.querySelector(".img").classList.remove("imgArabic");

  document.querySelector(".mainCard").classList.remove("mainCardArabic");

  var cardBefore = document.querySelector(".cardContainer");
  if (cardBefore) {
    document.querySelectorAll(".cardContainer").forEach((item) => {
      item.classList.remove("cardContainerArabic");
    });
  }
  // document.querySelector(".cardContainer").classList.remove("cardContainerArabic");

  document.querySelector(".frame1").classList.remove("frame1Arabic");

  var cardBefore = document.querySelector(".frame2");
  if (cardBefore) {
    document.querySelectorAll(".frame2").forEach((item) => {
      item.classList.remove("frame1Arabic");
    });
  }
  // document.querySelector(".frame2").classList.remove("frame2Arabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "en");
  console.log("blog english");
}


/* i18Next */
 
function generateJSON() {
  const elements = document.body.querySelectorAll("*");
  const translation = {};
 
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n-key");
    if (key) {
      translation[key] = element.textContent.trim();
    }
  });
 
  // Output the generated JSON to console
  console.log(JSON.stringify(translation, null, 2));
}
 
// Call the function to generate JSON
document.addEventListener("DOMContentLoaded", generateJSON);


