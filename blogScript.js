const pageParams = new URLSearchParams(window.location.search);
let pageNumber = pageParams.get("page") ? pageParams.get("page") : 1;
console.log(pageNumber);
const PAGE_SIZE = 3;

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
      blogArabic("rtl");
      console.log("choose arabic " + lang);
    } else {
      blogEnglish("ltr");
      console.log("choose english " + lang);
    }
  }
  localStorage.setItem("langIndex", langInex);
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
  // document.querySelector(".showArabicLanguageIcon").classList.add("display");
  // document.querySelector(".englishIcone").classList.add("display");
  // document.querySelector(".arabicIcon").classList.add("nonDisplay");
  document.querySelector(".dropDown").classList.add("dropDownArabic");
  document.querySelector(".bar2").classList.add("bar2Arabic");
  // document.querySelector(".showEnglishLanguageIcon").classList.add("nonDisplay");
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
  // document.querySelector(".showArabicLanguageIcon").classList.remove("display");
  // document.querySelector(".englishIcone").classList.remove("display");
  // document.querySelector(".arabicIcon").classList.remove("nonDisplay");
  document.querySelector(".dropDown").classList.remove("dropDownArabic");
  document.querySelector(".bar2").classList.remove("bar2Arabic");
  // document.querySelector(".showEnglishLanguageIcon").classList.remove("nonDisplay");
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

fetch("http://localhost:1337/api/blogs/1/?populate[0]=blogimage")
  .then(function (response) {
    // The API call was successful!
    return response.json();
  })
  .then(function (data) {
    // This is the JSON from our response
    let res = data;
    title = res.data.attributes.title;

    console.log(res);
    document.getElementById("mainCard-heading").innerHTML = `${title}`;
    document.getElementById(
      "mainCard-Category-type"
    ).innerHTML = `${res.data.attributes.Category}`;
    document.getElementById(
      "mainCard-paragraph"
    ).innerHTML = `${res.data.attributes.description}`;
    document.getElementById(
      "mainCard-date"
    ).innerHTML = `${res.data.attributes.PublicationDate}`;
    document.getElementById(
      "mainCard-author"
    ).innerHTML = `${res.data.attributes.author}`;
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });

function displayCardContainer() {
  let cards = document.getElementById("blog-card-container");
  for (let i = 0; i < cardsContainer.data.length; i++) {
    cards.innerHTML += `<div class="cardContainer">
              <div class="Card">
                <div class="serviceCard">
                  <div class="serviceCardContent">
                    <div class="CardsImge-holder">
                      <img
                        src="http://localhost:1337${cardsContainer.data[i].attributes.card1Img.data[0].attributes.url}"
                        alt=""
                        class="img"
                      />
                    </div>
                  </div>
                </div>
                <img src="Frame.svg" alt="" class="frame2" />
              </div>
              <div class="cardsWordsContainer" id="cardsWordsContainer">
                <h4 data-i18n-key="card1-heading">
                  ${cardsContainer.data[i].attributes.title}
                </h4>
                <p data-i18n-key="card1-paragraph">${cardsContainer.data[i].attributes.description}</p>
                <div class="socialComunicationContainer">
                  <div class="like-share-container">
                    <div class="like">
                      <img
                        src="Aralingual - Update Assets 2024/Website/Blog/Icons/like.svg"
                        alt=""
                      />
                      <p data-i18n-key="card1-likes">${cardsContainer.data[i].attributes.likes}</p>
                    </div>
                    <div class="share">
                      <img
                        src="Aralingual - Update Assets 2024/Website/Blog/Icons/share.svg"
                        alt=""
                      />
                      <p data-i18n-key="card1-share">${cardsContainer.data[i].attributes.share}</p>
                    </div>
                  </div>
                  <div class="btnContainer">
                    <a href="blogDetails.html" class="blogDetailsLink"
                      ><button class="btn">Read More</button></a
                    >
                  </div>
                </div>
              </div>
      </div>`;
  }
  console.log(cardsContainer);
}

let cardsContainer = [];
function getBlogs() {
  fetch(
    `http://localhost:1337/api/card1s?populate=card1Img&pagination[page]=${pageNumber}&pagination[pageSize]=${PAGE_SIZE}`
  )
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      let res = data;

      cardsContainer = data;
      console.log(res.data.length);
      console.log("pageNum : " + pageNumber);
      let pageCount = res.meta.pagination.pageCount;
      let pagination = document.querySelector(".pagination");
      pagination.innerHTML += `<div class="back-next-btn-container">
            <a href="#" class="back-next-btns">&laquo;</a>
          </div>`;
      for (let i = 1; i <= pageCount; i++) {
        pagination.innerHTML += `
            <div class="cardPageContainer">
              <a href="Blog.html?page=${i}" class="cardPage" id="cardPage1" >${i}</a>
            </div>
            `;
      }
      pagination.innerHTML += `<div class="back-next-btn-container">
              <a href="#" class="back-next-btns">&raquo;</a>
            </div>`;
      displayCardContainer();
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

getBlogs();



console.log(localStorage.getItem("langIndex"));

let countrysList = [
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/EN.svg",
    countryWord: "EN",
    dataKey: "phoneEN-code",
    function: "blogEnglish('ltr')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/AR.svg",
    countryWord: "AR",
    dataKey: "phoneAR-code",
    function: "blogArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/CN.svg",
    countryWord: "CN",
    dataKey: "phoneCN-code",
    function: "blogArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/JA.svg",
    countryWord: "JA",
    dataKey: "phoneJA-code",
    function: "blogArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/KO.svg",
    countryWord: "KO",
    dataKey: "phoneKO-code",
    function: "blogArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/DE.svg",
    countryWord: "DE",
    dataKey: "phoneDE-code",
    function: "blogArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/FR.svg",
    countryWord: "FR",
    dataKey: "phoneFR-code",
    function: "blogArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/PO.svg",
    countryWord: "PO",
    dataKey: "phonePO-code",
    function: "blogArabic('rtl')",
  },
  {
    imgUrl: "Aralingual - Update Assets 2024/Assets/Icon language/SE.svg",
    countryWord: "SE",
    dataKey: "phoneSE-code",
    function: "blogArabic('rtl')",
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




