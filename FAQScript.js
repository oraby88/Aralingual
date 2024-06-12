var div =  document.getElementsByName("ss");
console.log(div);

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
      FAQArabic("rtl");
      console.log("choose arabic " + lang);
    } else {
      FAQEnglish("ltr");
      console.log("choose english " + lang);
    }
  }
  localStorage.setItem("langIndex", langInex);
};

function browserLanguage() {
  let browserLang = navigator.language;
  console.log("Browser lang " + browserLang);
  if (browserLang == "en-US") {
    FAQEnglish("ltr");
    console.log("choose enlish " + browserLang);
  } else if (browserLang == "ar") {
    FAQArabic("rtl");
    console.log("choose arabic " + browserLang);
  }
}

function FAQArabic(direction) {
  document.body.style.direction = direction;
  // console.log("aviooo");
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  // document.querySelector(".showArabicLanguageIcon").classList.add("display");
  // document.querySelector(".englishIcone").classList.add("display");
  // document.querySelector(".arabicIcon").classList.add("nonDisplay");
  // document.querySelector(".showEnglishLanguageIcon").classList.add("nonDisplay");
  document.querySelector(".bar2").classList.add("bar2Arabic");
  console.log("FAQ arabic");
  hide();

  localStorage.clear();
  localStorage.setItem("language", "ar");
  console.log("FAQ arabic");
}

function FAQEnglish(direction) {
  document.body.style.direction = direction;
  // document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  // document.querySelector(".englishIcone").classList.remove("display");
  // document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  // document.querySelector(".showEnglishLanguageIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("display");
  document.querySelector(".bar2").classList.remove("bar2Arabic");
  hide();
  localStorage.clear();
  localStorage.setItem("language", "en");
  console.log("FAQ english");
}


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


console.log(localStorage.getItem("langIndex"));

let countrysList = [
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/EN.svg",
    countryWord: "EN",
    dataKey: "phoneEN-code",  
    function: "FAQEnglish('ltr')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/AR.svg",
    countryWord: "AR",
    dataKey: "phoneAR-code",
    function: "FAQArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/CN.svg",
    countryWord: "CN",
    dataKey: "phoneCN-code",
    function: "FAQArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/JA.svg",
    countryWord: "JA",
    dataKey: "phoneJA-code",
    function: "FAQArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/KO.svg",
    countryWord: "KO",
    dataKey: "phoneKO-code",
    function: "FAQArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/DE.svg",
    countryWord: "DE",
    dataKey: "phoneDE-code",
    function: "FAQArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/FR.svg",
    countryWord: "FR",
    dataKey: "phoneFR-code",
    function: "FAQArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/PO.svg",
    countryWord: "PO",
    dataKey: "phonePO-code",
    function: "FAQArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/SE.svg",
    countryWord: "SE",
    dataKey: "phoneSE-code",
    function: "FAQArabic('rtl')",
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




/* i18Next */
 
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
//       let x =1;
//       Object.keys(res[2]).forEach(function (key, index) {
//         if (key == dataKey[index]) {
//           x += 1;
//           console.log(x);
//           elements.forEach((element) => {
//             const htmlKey = element.getAttribute("data-i18n-key");
//             if (key === htmlKey) {
//               console.log(key);
//               element.textContent = res[2][key];
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



