// // Star Anim Menu

// const stars = () => {
//   const star = document.createElement("span");
//   document.body.appendChild(star);
//   star.classList.add("star");

//   const size = Math.random() * 2 + "px";

//   star.style.width = size;
//   star.style.height = size;

//   star.style.left = Math.random() * 100 + "%";
//   star.style.top = Math.random() * 100 + "%";

//   setTimeout(() => {
//     star.remove();
//   }, 5000);
// };

// setInterval(stars, 20);

// --------------------
// Nav

const nav = document.querySelectorAll(".nav li");
const articles = document.querySelectorAll("article");
const closesBtn = document.querySelectorAll(".closeBtn");
const header = document.querySelector(".header");

// Faire apparaitre les pages
for (i = 0; i < nav.length; i++) {
  let j = i;
  nav[i].addEventListener("click", () => {
    articles[j].classList.add("visible");
    header.classList.add("hidden");
  });
}

// Fermer les pages
closesBtn.forEach((close) => {
  close.addEventListener("click", () => {
    articles.forEach((article) => {
      article.classList.remove("visible");
      header.classList.remove("hidden");
    });
  });
});

// ----------------------

// Pages "Drawing et "Music"

const about = document.querySelector(".about");
const aboutBtn = document.querySelectorAll(".btn-about");
const artwork = document.querySelector(".artwork");
const artworkBtn = document.querySelectorAll(".btn-artwork");
const music = document.querySelector(".music");
const musicBtn = document.querySelectorAll(".btn-music");

const navAbout = (buttons, prevPage, currentPage, nextPage) => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage.classList.add("visible");
      if (prevPage.classList.contains("visible")) {
        prevPage.classList.remove("visible");
      } else if (nextPage.classList.contains("visible")) {
        nextPage.classList.remove("visible");
      }
    });
  });
};

navAbout(aboutBtn, artwork, about, music);
navAbout(artworkBtn, music, artwork, about);
navAbout(musicBtn, about, music, artwork);

// ----------------------
// Ikigai

const ikigai = document.querySelector(".about span");

// ikigai.addEventListener("click", () => {
//   let ikigaiDiv = document.createElement("div");
//   document.body.appendChild(ikigaiDiv);
//   createIkigai();
//   function createIkigai() {
//     if (ikigaiDiv.classList.contains("ikigai")) {
//       ikigaiDiv.addEventListener("click", () => {
//         ikigaiDiv.remove();
//         console.log("click2");
//       });
//     } else {
//       ikigaiDiv.classList.add("ikigai");
//       ikigaiDiv.src = "../img/ikigai/ikigai.png";
//       console.log("click");
//     }
//   }
// });

function createIkigai() {
  let ikigaiDiv = document.createElement("div");
  document.body.appendChild(ikigaiDiv);
  let about = document.querySelector(".about");
  ikigaiDiv.classList.add("ikigai");
  const removeIkigai = () => {
    ikigaiDiv.classList.remove("active-ikigai");
    about.classList.add("visible");
    console.log("click");
  };

  const addIkigai = () => {
    ikigaiDiv.classList.add("active-ikigai");
    about.classList.remove("visible");
  };

  ikigai.addEventListener("click", addIkigai);
  ikigaiDiv.addEventListener("click", removeIkigai);
}

createIkigai();

// ----------------------

// Photo Slide Effect

const slide = document.getElementById("slide");
const slideTitle = document.querySelector(".slider h3");
const slideText = document.querySelector(".slider p");
const slideContainer = document.querySelector(".text-slide");
const prevImg = document.querySelector(".prev-img");
const nextImg = document.querySelector(".next-img");
const slideImg = document.querySelector(".slide-img");

// Starter (afficher le premier artwork)

artworkBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    slideImg.classList.add("active");
    slideContainer.classList.add("active");
  });
});

const slideArr = new Array(
  "../img/art/Komodor_EP_Web.jpg",
  "../img/art/Komodor_NastyHabits_Web.jpg",
  "../img/art/Moundrag.jpg",
  "../img/art/KillerBee.jpg",
  "../img/art/LadyCat.jpg"
);
const slideTitleArr = new Array(
  "Komodor Artwork",
  "Komodor Artwork",
  "Moundrag Artwork",
  "Beez Bee On Fire",
  "Lady Sexy Cat"
);
const slideTextArr = new Array(
  "First EP (01/19)",
  "First Album (12/21)",
  "Two headed monster in a galactic univers (2021)",
  "Practice digital painting (2021)",
  "Practice digital painting (2021)"
);
let numero = (slideArr.length - 1) / 2;

function changeImage() {
  slide.src = slideArr[numero];
  slideTitle.textContent = slideTitleArr[numero];
  slideText.textContent = slideTextArr[numero];
  setTimeout(() => {
    slideImg.classList.add("active");
    slideContainer.classList.add("active");
  }, 20);
}

function ChangeSlide() {
  prevImg.addEventListener("click", () => {
    numero--;
    if (numero < 0) numero = slideArr.length - 1;
    slideImg.classList.remove("active");
    slideContainer.classList.remove("active");
    changeImage();
  });
  nextImg.addEventListener("click", () => {
    numero++;
    if (numero > slideArr.length - 1) numero = 0;
    slideImg.classList.remove("active");
    slideContainer.classList.remove("active");
    changeImage();
  });
}

ChangeSlide();

// ----------------------
// Graph
Chart.defaults.color = "#07113a";
Chart.defaults.font.family = "Josefin Sans";
const graphCompétences = document.getElementById("graph").getContext("2d");

let myGraph = new Chart(graphCompétences, {
  type: "bar",
  data: {
    labels: ["HTML", "CSS", "JS", "Bootstrap", "Vue.JS"],
    datasets: [
      {
        label: "niveau",
        data: [8, 7, 5, 6, 1],
        backgroundColor: ["#07113a", "#8391d1"],
        scaleFontColor: "#07113a",
        hoverBackgroundColor: "#8391d1",
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "red",
        },
      },
      title: {
        display: true,
        text: "Ou qu'est ce que quoi ?",
      },
    },
    scales: {
      x: {
        min: 0,
        max: 10,
        color: "#07113a",
        display: false,
      },
    },
  },
});

const graphSoftSkills = document.getElementById("graph2").getContext("2d");

let myGraph2 = new Chart(graphSoftSkills, {
  type: "radar",
  data: {
    labels: [
      ["Intelligence", "émotionnelle"],
      "Organisation",
      ["Capacité", "d'apprentissage"],
      "Communication",
      "Collaboration",
      ["Sens du", "Service"],
      "Créativité",
      ["Esprit", "Critique"],
      ["Prise de", "Décision"],
    ],
    datasets: [
      {
        label: "niveau",
        data: [6, 7, 9, 3, 4, 5, 6, 7, 6],
        backgroundColor: "#8391d171",
        color: "white",
        borderColor: "#8391d17e",
        pointBorderColor: "black",
        pointBackgroundColor: "white",
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        pointRadius: 4,
        pointBevelWidth: 2,
        pointHoverRadius: 6,
        pointHoverBevelWidth: 3,
      },
    ],
  },
  options: {
    plugins: {
      scale: {
        xAxes: [
          {
            id: "x",
            color: "white",
          },
        ],
        //   ticks: {
        //     beginAtZero: true,
        //     showLabelBackdrop: false,
        //   },
        // },
        // tooltips: {
        //   shadowOffsetX: 3,
        //   shadowOffsetY: 3,
        //   shadowBlur: 10,
        //   shadowColor: "black",
        //   bevelWidth: 2,
        //   bevelHighlightColor: "white",
        //   bevelShadowColor: "white",
      },
      legend: {
        display: false,
        labels: {
          color: "red",
        },
      },
    },
  },
});
