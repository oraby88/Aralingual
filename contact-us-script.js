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

function NumberLanguageAppear() {
  document.querySelector(".phoneDropdown").classList.toggle("display");
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

// let dataKey = [];
// let res;
// // console.log("sss");
// function fetchJSONData() {
//   fetch("./en.json")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       res = data;
//       console.log(res);
//       const elements = document.body.querySelectorAll("*");
//       let x =0;
//       Object.keys(res[5]).forEach(function (key, index) {
//         if (key == dataKey[index]) {
//           x += 1;
//           console.log(x);
//           elements.forEach((element) => {
//             const htmlKey = element.getAttribute("data-i18n-key");
//             if (key === htmlKey) {
//               console.log(key);
//               element.textContent = res[5][key];
//             }
//           });
//         }
//       });
//     })
//     .catch((error) => console.error("Unable to fetch data:", error));
// }
// fetchJSONData();

// function showJSON() {
//   const elements = document.body.querySelectorAll("*");
//   elements.forEach((element) => {
//     const key = element.getAttribute("data-i18n-key");
//     if (key !== null) {
//       dataKey.push(key);
//     }
//   });
//   console.log(dataKey);
// }
// showJSON();

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    alert("Valid email address!");
    document.contactForm.email.focus();
    return true;

  } else {
    alert("Invalid email address!");
    document.contactForm.email.focus();
    return false;
  }
}

function mobileNumber(){
  var Number = document.getElementById('phone').value;
  var IndNum = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  if(IndNum.test(Number)){
     return;
 }
 else{
     $('#errMessage').text('please enter valid mobile number');
     document.getElementById('profile_telephoneNumber').focus();
 }
}
