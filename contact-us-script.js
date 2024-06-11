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
// function showARCode() {
//   document.querySelector(
//     ".phoneSelect"
//   ).innerHTML = `<img src="Aralingual - Update Assets 2024/Assets/Icon language/AR.svg" alt=""/>+966
//    <i class="fa-solid fa-chevron-down" style="font-size: 12px; padding-top: 5px"></i>`;

//   document.querySelector(".ARCode").innerHTML = `<img
//                         src="Aralingual - Update Assets 2024/Assets/Icon language/EN.svg"
//                         alt=""

//                       />+1`;
// }
// function showCNCode() {
//   var target = document.querySelector(".ENCode");
//   var wrap = document.createElement("span");
//   wrap.appendChild(target.cloneNode(true));
//   // alert(wrap.innerHTML);
//   document.querySelector(".ENCode").classList.add("hideEN showCN");
//   // document.querySelector(".CNCode").classList.remove("showCN");

//   // document.querySelector(
//   //   ".phoneSelect"
//   // ).innerHTML = `<img src="Aralingual - Update Assets 2024/Assets/Icon language/CN.svg" alt=""/>+86
//   //  <i class="fa-solid fa-chevron-down" style="font-size: 12px; padding-top: 5px"></i>`;
// }

let countryCode = [
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/EN.svg",
    countryCode: "+1",
    dataKey: "phoneEN-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/AR.svg",
    countryCode: "+966",
    dataKey: "phoneAR-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/CN.svg",
    countryCode: "+86",
    dataKey: "phoneCN-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/JA.svg",
    countryCode: "+82",
    dataKey: "phoneJA-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/KO.svg",
    countryCode: "+81",
    dataKey: "phoneKO-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/DE.svg",
    countryCode: "+49",
    dataKey: "phoneDE-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/FR.svg",
    countryCode: "+33",
    dataKey: "phoneFR-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/PO.svg",
    countryCode: "+48",
    dataKey: "phonePO-code",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/SE.svg",
    countryCode: "+46",
    dataKey: "phoneSE-code",
  },
];

for (let i = 0; i < countryCode.length; i++) {
  // let img = document.createElement("img");
  // img.setAttribute("src", countryCode[i].imgUrl);
  // img.setAttribute("alt", "country");
  // let span = document.createElement("span");
  // span.innerHTML = countryCode[i].countryCode;
  // let div = document.createElement("div");
  // div.appendChild(img);
  // div.appendChild(span);
  // document.querySelector(".phoneSelect").appendChild(div);
  // console.log(img);
  document.querySelector(
    ".countryCodeList"
  ).innerHTML += `<li class="AR" onclick="chooseCode(${i})">
                          <span class="ARCode" data-i18n-key=${countryCode[i].dataKey}><img src="${countryCode[i].imgUrl}" alt="country"> ${countryCode[i].countryCode}
                          </span></li>`;
}

document.querySelector(".phoneSelect").innerHTML = `
                      <span class="ENCode">
                      <img
                        src="${countryCode[0].imgUrl}"}"
                        alt=""
                      />${countryCode[0].countryCode}</span>
                      <i
                        class="fa-solid fa-chevron-down"
                        style="font-size: 12px; padding-top: 5px"
                      ></i>`;

function chooseCode(index) {
  document.querySelector(".phoneSelect").innerHTML = `<span class="ENCode">
                          <img
                            src="${countryCode[index].imgUrl}"}"
                            alt=""
                          />${countryCode[index].countryCode}</span>
                          <i
                            class="fa-solid fa-chevron-down"
                            style="font-size: 12px; padding-top: 5px"
                          ></i>`;
  console.log("index");
}

const main = document.querySelector(".main");
window.document.addEventListener("click", () => {
  dropdown.classList.remove("dropdown__window--active");
  console.log("hide");
});
dropdown.removeEventListener("click", () => {
  dropdown.classList.remove("dropdown__window--active");
  console.log("hide");
});

function NumberLanguageAppear() {
  document
    .querySelector(".phoneDropdown")
    .classList.toggle("dropdown__window--active");
}

document.body.MouseEvent("");

// document.body.querySelectorAll("phoneDropdown").forEach((dropdown) => {
//   dropdown.parentElement.addEventListener(
//     "change",
//     (event) => {
//       if (event.target !== dropdown) {
//         //Make sure that this event was indeed on the element we wanted to track
//         return;
//       }
//       //Insert whatever other logic here
//       event.stopImmediatePropagation();
//     },
//     { capture: true }
//   );
// });

// function toggleDropdown() {
//   const dropdown = document.querySelector("phoneDropdown");
//   if (dropdown) {
//     dropdown.classList.toggle("show");
//   }
// }

// function closeDropdown(event) {
//   const target = event.target;
//   if (!target.matches("#dropdownButton")) {
//     // const dropdown = document.getElementsByClassName("dropdown-content");
//     for (let i = 0; i < dropdown.length; i++) {
//       const openDropdown = dropdown[i];
//       if (openDropdown.classList.contains("dropdown__window--active")) {
//         openDropdown.classList.remove("dropdown__window--active");
//       }
//     }
//   }
// }

// window.addEventListener("DOMContentLoaded", () => {
//   const button = document.querySelector("phoneDropdown");
//   if (button) {
//     button.addEventListener("click", toggleDropdown);
//   }
//   window.addEventListener("click", closeDropdown);
// });

const option = document.querySelector(".options2");
const dropdown = document.querySelector(".phoneDropdown");

// document.addEventListener("click", function (event) {
//   const clickedElement = event.target;
//   // const languageToggle = document.querySelector(".language-toggle");

//   // Check if the clicked element is not part of the dropdown menu
//   if (!clickedElement.classList.contains("dropdown__window--active")) {
//     clickedElement.classList.toggle("dropdown__window--active");
//     console.log("inside");
//   }
//   else if(clickedElement.classList.contains("dropdown__window--active")) {
//     dropdown.classList.toggle("dropdown__window--active");
//     console.log("outside");
//   }
// });

// document.querySelector(".phoneDropdown").classList.remove("dropdown__window--active");
// document.querySelector("#services").classList.remove("active");

// option.addEventListener('click', (event) => {
//   dropdown.classList.toggle('dropdown__window--active');
// });

// option.addEventListener('blur', (event) => {
//   dropdown.classList.remove('dropdown__window--active');
// });

// document.body.addEventListener("click", (event) => {
//   // dropdown.classList.remove('dropdown__window--active');
//   if (dropdown.classList.contains("dropdown__window--active")) {
//     dropdown.classList.remove("dropdown__window--active");
//   }
// });

// window.onclick = function(e){
//   if (!e.target.matches('.options2') &&
//         dropdown.classList.contains('dropdown__window--active')){
//       dropdown.classList.remove('dropdown__window--active')
//  }
// }

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

function mobileNumber() {
  var Number = document.getElementById("phone").value;
  var IndNum = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
  if (IndNum.test(Number)) {
    return;
  } else {
    $("#errMessage").text("please enter valid mobile number");
    document.getElementById("profile_telephoneNumber").focus();
  }
}
