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
      contactArabic("rtl");
      console.log("choose arabic " + lang);
    } else {
      contactEnglish("ltr");
      console.log("choose english " + lang);
    }
  }
};

function browserLanguage() {
  let browserLang = navigator.language;
  console.log("Browser lang " + browserLang);
  if (browserLang == "en-US") {
    contactEnglish("ltr");
    console.log("choose enlish " + browserLang);
  } else if (browserLang == "ar") {
    contactArabic("rtl");
    console.log("choose arabic " + browserLang);
  }
}

function contactArabic(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.add("display");
  document.querySelector(".englishIcone").classList.add("display");
  document.querySelector(".arabicIcon").classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.remove("display");

  document.getElementById("btn").style.float = "left";
  document.querySelector(".emailAndPhone").classList.add("emailAndPhoneArabic");
  document.querySelector(".ourOffice").classList.add("ourOfficeArabic");
  document.querySelector(".bar2").classList.add("bar2Arabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "ar");
  console.log("Contact Us arabic");
}

function contactEnglish(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  document.querySelector(".englishIcone").classList.remove("display");
  document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("display");
  document.getElementById("btn").style.float = "right";
  document
    .querySelector(".emailAndPhone")
    .classList.remove("emailAndPhoneArabic");
  document.querySelector(".ourOffice").classList.remove("ourOfficeArabic");
  document.querySelector(".bar2").classList.remove("bar2Arabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "en");
  console.log("Contact Us english");
}