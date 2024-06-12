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
    document.querySelector(".dropDown").classList.remove("showDropdown");
  }
}
x.addEventListener("change", function () {
  myFunction(x);
});


let langInex =  localStorage.getItem("langIndex") ? localStorage.getItem("langIndex") : 0;
console.log(localStorage.getItem("langIndex"));

let lang = localStorage.getItem("language");
console.log("Current Langugae from storage: " + lang);
console.log(lang);
onload = function () {
  if (!lang) {
    browserLanguage();
  } else {
    if (lang == "ar") {
      arabic("rtl");
      // aboutArabic("rtl");
      console.log("choose arabic " + lang);
    } else {
      english("ltr");
      // aboutEnglish("ltr");
      console.log("choose english " + lang);
    }
  }
  localStorage.setItem("langIndex", langInex);
};

function browserLanguage() {
  let browserLang = navigator.language;
  console.log("Browser lang " + browserLang);
  if (browserLang == "en-US") {
    english("ltr");
    // aboutEnglish("ltr");
    console.log("choose enlish " + browserLang);
  } else if (browserLang == "ar") {
    arabic("rtl");
    // aboutArabic("rtl");
    console.log("choose arabic " + browserLang);
  }
}

/* Home page */
function arabic(direction) {
  document.body.style.direction = direction;
  // console.log("aviooo");
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  // document.querySelector(".showArabicLanguageIcon").classList.add("display");
  // document.querySelector(".englishIcone").classList.add("display");
  // document.querySelector(".arabicIcon").classList.add("nonDisplay");
  // document.querySelector(".showEnglishLanguageIcon").classList.add("nonDisplay");

  document.querySelector(".processGlow").classList.add("processGlowArabic");
  document.querySelector(".iframe").classList.add("iframeArabic");
  document.querySelector(".processBG").classList.add("processBGArabic");
  document.querySelector(".whyAraBG").classList.add("whyAraBGArabic");
  document.querySelector(".shape-1").classList.add("shape-1-arabic");
  // document.querySelector(".processCard2").classList.add("rtl");
  document.querySelector(".bar2").classList.add("bar2Arabic");
  var roundedCard = document.querySelector(".rounded-box");
  if (roundedCard) {
    document.querySelectorAll(".rounded-box").forEach((item) => {
      item.classList.add("rounded-box-arabic");
    });
  }
  // document.querySelector(".rounded-box").classList.add("rounded-box-arabic");
  var roundedCard1 = document.querySelector(".rounded-box1");
  if (roundedCard1) {
    document.querySelectorAll(".rounded-box1").forEach((item) => {
      item.classList.add("rounded-box-arabic");
    });
  }

  console.log("aviooo");

  document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
  localStorage.clear();

  localStorage.setItem("language", "ar");
  console.log("herrrrrrrrrrrrrrrr");

  // window.localStorage.setItem('Language', 'JavaScript');

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

  // document.querySelector(".serviceCardContainer").classList.add("serviceCardContainerArabic");

  var cardBefore = document.querySelector(".serviceCardContainer");
  if (cardBefore) {
    document.querySelectorAll(".serviceCardContainer").forEach((item) => {
      item.classList.add("serviceCardContainerArabic");
    });
  }
  // document.querySelector(".cardContainer").classList.add("cardContainerArabic");

  // document.querySelector(".frame1").classList.add("frame1Arabic");

  var cardBefore = document.querySelector(".frame1");
  if (cardBefore) {
    document.querySelectorAll(".frame1").forEach((item) => {
      item.classList.add("frame1Arabic");
    });
  }
  // document.querySelector(".frame2").classList.add("frame2Arabic");

  var Card = document.querySelector(".processCard");
  if (Card) {
    document.querySelectorAll(".processCard").forEach((item) => {
      item.classList.add("rtl");
    });
  }
  // window.localStorage.setItem("language", "ar");
  // console.log(window.localStorage.getItem("language"));

  hide();
  console.log("in arabic");
}
//  function changeLang() {
//     // var langCheck = localStorage.getItem("lang");

//     if (language == "ar") {
//       arabic();
//     } else {
//       english();
//     }
//     location.reload();
//   }

function english(direction) {
  console.log("in english");

  document.body.style.direction = direction;
  // document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  // document.querySelector(".englishIcone").classList.remove("display");
  // document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  // document.querySelector(".showEnglishLanguageIcon").classList.remove("nonDisplay");

  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".processGlow").classList.remove("processGlowArabic");
  document.querySelector(".iframe").classList.remove("iframeArabic");
  document.querySelector(".processBG").classList.remove("processBGArabic");
  document.querySelector(".whyAraBG").classList.remove("whyAraBGArabic");
  document.querySelector(".shape-1").classList.remove("shape-1-arabic");
  // document.querySelector(".processCard2").classList.remove("rtl");
  document.querySelector(".bar2").classList.remove("bar2Arabic");

  var roundedCard = document.querySelector(".rounded-box");
  if (roundedCard) {
    document.querySelectorAll(".rounded-box").forEach((item) => {
      item.classList.remove("rounded-box-arabic");
    });
  }
  // document.querySelector(".rounded-box").classList.remove("rounded-box-arabic");
  var roundedCard1 = document.querySelector(".rounded-box1");
  if (roundedCard1) {
    document.querySelectorAll(".rounded-box1").forEach((item) => {
      item.classList.remove("rounded-box-arabic");
    });
  }

  var Card = document.querySelector(".processCard");
  if (Card) {
    document.querySelectorAll(".processCard").forEach((item) => {
      item.classList.remove("rtl");
    });
  }
  localStorage.clear();
  localStorage.setItem("language", "en");

  // console.log(navigator.language);

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

  // document.querySelector(".serviceCardContainer").classList.remove("serviceCardContainerArabic");

  var cardBefore = document.querySelector(".serviceCardContainer");
  if (cardBefore) {
    document.querySelectorAll(".serviceCardContainer").forEach((item) => {
      item.classList.remove("serviceCardContainerArabic");
    });
  }
  // document.querySelector(".cardContainer").classList.remove("cardContainerArabic");

  // document.querySelector(".frame1").classList.remove("frame1Arabic");

  var cardBefore = document.querySelector(".frame1");
  if (cardBefore) {
    document.querySelectorAll(".frame1").forEach((item) => {
      item.classList.remove("frame1Arabic");
    });
  }
  // document.querySelector(".frame2").classList.remove("frame2Arabic");

  hide();
}

console.log(localStorage.getItem("langIndex"));

let countrysList = [
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/EN.svg",
    countryWord: "EN",
    dataKey: "phoneEN-code",
    function: "english('ltr')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/AR.svg",
    countryWord: "AR",
    dataKey: "phoneAR-code",
    function: "arabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/CN.svg",
    countryWord: "CN",
    dataKey: "phoneCN-code",
    function: "arabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/JA.svg",
    countryWord: "JA",
    dataKey: "phoneJA-code",
    function: "arabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/KO.svg",
    countryWord: "KO",
    dataKey: "phoneKO-code",
    function: "arabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/DE.svg",
    countryWord: "DE",
    dataKey: "phoneDE-code",
    function: "arabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/FR.svg",
    countryWord: "FR",
    dataKey: "phoneFR-code",
    function: "arabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/PO.svg",
    countryWord: "PO",
    dataKey: "phonePO-code",
    function: "arabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/SE.svg",
    countryWord: "SE",
    dataKey: "phoneSE-code",
    function: "arabic('rtl')",
  },
];

for (let i = 0; i < countrysList.length; i++) {
  document.querySelector(
    ".countrysWordList"
  ).innerHTML += `<li onclick="[${countrysList[i].function}, chooseCode(${i})]" class="arabicIcon">
              <a href="#" class="language" data-i18n-key="${countrysList[i].dataKey}"
                >${countrysList[i].countryWord}
                <img
                  src="${countrysList[i].imgUrl}"
                  alt=""
              /></a>
            </li>`;
}
let index = localStorage.getItem("langIndex") ? localStorage.getItem("langIndex") : 0;
document.querySelector(
  ".select"
).innerHTML = `<div class="showEnglishLanguageIcon">
                ${countrysList[index].countryWord}
                <img
                  src="${countrysList[index].imgUrl}"
                  alt=""
                />&nbsp;
                <i
                  class="fa-solid fa-chevron-down"
                  style="font-size: 12px; padding-top: 5px"
                ></i>
              </div>`;

function chooseCode(index) {
  document.querySelector(
    ".select"
  ).innerHTML = `<div class="showEnglishLanguageIcon">
              ${countrysList[index].countryWord}
                <img
                  src="${countrysList[index].imgUrl}"
                  alt=""
                />
                <i
                  class="fa-solid fa-chevron-down"
                  style="font-size: 12px; padding-top: 5px"
                ></i>
              </div>`;
  langInex = index;
  localStorage.setItem("langIndex", langInex);

  console.log("selected");
}

// function loadLang() {
//   let language;
//   const localStorageLang = localStorage.getItem("lang");
//   if (localStorageLang) { // if the local storage have a value, put it in language variable
//     language = localStorageLang;
//   } else {
//     var userLang = navigator.language || navigator.userLanguage;
//     var browserLang = userLang.split("-")[0];
//     language = browserLang; // get the language from browser language and put it in language variable
//     localStorage.setItem("lang", browserLang); // put the browser lang in local storage
//   }
//   if (language == "ar") {
//     arabic();
//   } else {
//     english();
//   }
// }

// function changeLanguage(lang) {
//   let localStorageData = localStorage.getItem("lang");
//   if (lang === localStorageData) {
//     return;
//   }

//   if (lang == "en") {
//     localStorage.setItem("lang", "en");
//     english();
//   } else {
//     console.log("arabic langauge has been chosen");
//     localStorage.setItem("lang", "ar");
//     console.log(localStorageData);
//     arabic();
//   }
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
  // console.log("After remove");
  document.querySelector(".bar2").classList.add("bar2Arabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "ar");
  console.log("about arabic");
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
  document.querySelector(".bar2").classList.remove("bar2Arabic");
  hide();
  localStorage.clear();
  localStorage.setItem("language", "en");
  console.log("about english");
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
  document.querySelector(".bar2").classList.add("bar2Arabic");
  console.log("FAQ arabic");
  hide();
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
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".bar2").classList.remove("bar2Arabic");
  hide();
}

/* Blog Section*/

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
}

/* blogDetails Section */

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
}

/* contactUs Section */

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

document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementById("dropdown1");
  var dropdownContent = document.getElementById("dropdownContent1");

  dropdown.addEventListener("click", function (event) {
    dropdownContent.classList.toggle("showDropdown");
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    dropdownContent.classList.remove("showDropdown");
  });
});

// i18Next
// function generateJSON() {
//   const elements = document.body.querySelectorAll("*");
//   const translation = {};

//   elements.forEach((element) => {
//     const key = element.getAttribute("data-i18n-key");
//     if (key) {
//       translation[key] = element.textContent.trim();
//     }
//   });

//   // Output the generated JSON to console
//   console.log(JSON.stringify(translation, null, 2));
// }

// // Call the function to generate JSON
// document.addEventListener("DOMContentLoaded", generateJSON);

// let dataKey = [];
// let res;
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
//       const elements = document.body.querySelectorAll("*");
//       let x =0;
//       Object.keys(res[0]).forEach(function (key, index) {
//         if (key == dataKey[index]) {
//           x += 1;
//           console.log(x);
//           elements.forEach((element) => {
//             const htmlKey = element.getAttribute("data-i18n-key");
//             if (key === htmlKey) {
//               console.log(key);
//               element.textContent = res[0][key];
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
//   const translation = {};
//   // let res;
//   // fetch("en.json")
//   //   .then((response) => {
//   //     response.json();
//   //     // console.log(response.json());
//   //     // res = response.json();
//   //   })
//   //   .then((json) => console.log(json));

//   elements.forEach((element) => {
//     const key = element.getAttribute("data-i18n-key");
//     if (key !== null) {
//       dataKey.push(key);
//     }
//     if (key) {
//       translation[key] = element.textContent.trim();
//     }
//   });

//   console.log(dataKey);

//   // Output the generated JSON to console
//   console.log(JSON.stringify(translation, null, 2));
// }

// showJSON();
