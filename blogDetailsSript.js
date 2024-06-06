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
      blogDetailsArabic("rtl");
      console.log("choose arabic " + lang);
    } else {
      blogDetailsEnglish("ltr");
      console.log("choose english " + lang);
    }
  }
};

function browserLanguage() {
  let browserLang = navigator.language;
  console.log("Browser lang " + browserLang);
  if (browserLang == "en-US") {
    blogDetailsEnglish("ltr");
    console.log("choose enlish " + browserLang);
  } else if (browserLang == "ar") {
    blogDetailsArabic("rtl");
    console.log("choose arabic " + browserLang);
  }
}

function blogDetailsArabic(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.add("display");
  document.querySelector(".englishIcone").classList.add("display");
  document.querySelector(".arabicIcon").classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".bar2").classList.add("bar2Arabic");
  document
    .querySelector(".tableOfContentList")
    .classList.add("tableOfContentListArabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "ar");
  console.log("Blog Dtails arabic");
}

function blogDetailsEnglish(direction) {
  document.body.style.direction = direction;
  document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  document.querySelector(".englishIcone").classList.remove("display");
  document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  document
    .querySelector(".showEnglishLanguageIcon")
    .classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".bar2").classList.remove("bar2Arabic");
  document
    .querySelector(".tableOfContentList")
    .classList.remove("tableOfContentListArabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "en");
  console.log("Blog Dtails english");
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

fetch("http://localhost:1337/api/blog-details/?populate[0]=blogDetailsImage")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const res = data.data[0].attributes;
    console.log(data.data);
    let container = document.getElementById("left-side-container");
    // forEach(items in res) {

    // }

    document.getElementById(
      "Q1"
    ).innerHTML = `<h3>${data.data[0].attributes.question1}</h3>
    <p>${data.data[0].attributes.description1}</p>`;

    document.querySelector(
      ".whyArabicMarketsDiv"
    ).innerHTML = `<h3>${data.data[0].attributes.question2}</h3>
    <img src="http://localhost:1337${data.data[0].attributes.blogDetailsImage.data[0].attributes.url}" alt="blogimage"/>
    <p>${data.data[0].attributes.description2}</p>`;

    document.getElementById(
      "Q3"
    ).innerHTML = `<h3>${data.data[0].attributes.question3}</h3>
    <p>${data.data[0].attributes.description3}</p>`;

    document.querySelector(
      ".difficultiesInArabicDiv"
    ).innerHTML = `<h3>${data.data[0].attributes.question4}</h3>
    <p>${data.data[0].attributes.description4}</p>`;

    document.getElementById(
      "Q4"
    ).innerHTML = `<h3>${data.data[0].attributes.question5}</h3>
    <ul>
    <li>${data.data[0].attributes.listItem}<p>${res.description5}</p></li>
    </ul>`;
  })
  .catch((error) => {
    console.log(error);
  });

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
//       Object.keys(res[4]).forEach(function (key, index) {
//         if (key == dataKey[index]) {
//           x += 1;
//           console.log(x);
//           elements.forEach((element) => {
//             const htmlKey = element.getAttribute("data-i18n-key");
//             if (key === htmlKey) {
//               console.log(key);
//               element.textContent = res[4][key];
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
