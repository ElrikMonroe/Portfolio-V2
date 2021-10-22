// Star Anim Menu
// J'ai doublé les stars créees dans la fonction pour avoir une meilleur performance dans mon navigateur. (env 52fps)

const stars = () => {
  const star = document.createElement("span");
  const star2 = document.createElement("span");
  document.body.appendChild(star);
  document.body.appendChild(star2);
  star.classList.add("star");
  star2.classList.add("star");

  const size = Math.random() * 2 + "px";
  const size2 = Math.random() * 2 + "px";

  star.style.width = size;
  star2.style.width = size2;
  star.style.height = size;
  star2.style.height = size2;

  star.style.left = Math.random() * 100 + "%";
  star2.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star2.style.top = Math.random() * 100 + "%";

  setTimeout(() => {
    star.remove();
    star2.remove();
  }, 5000);
};

setInterval(stars, 800);

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

const ikigaiBtn = document.querySelector(".about span");
const ikigai = document.querySelector(".ikigai");
const aboutText = document.querySelector(".about .text-container");

ikigaiBtn.addEventListener("click", () => {
  ikigai.classList.add("active-ikigai");
  aboutText.classList.add("hidden");
});

ikigai.addEventListener("click", () => {
  ikigai.classList.remove("active-ikigai");
  aboutText.classList.remove("hidden");
});

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

// Graph Compétences

Chart.defaults.color = "#07113a";
Chart.defaults.font.family = "Josefin Sans";
const graphCompétences = document
  .getElementById("graph-competences")
  .getContext("2d");

let myGraph = new Chart(graphCompétences, {
  type: "bar",
  data: {
    labels: ["HTML", "CSS", "JS", "Bootstrap", "Vue.JS"],
    datasets: [
      {
        label: "niveau",
        data: [8, 7, 5, 6, 1],
        backgroundColor: ["#d1ad83", "#8391d1"],
        borderColor: "#07113a",
        borderWidth: 0.5,
        scaleFontColor: "#07113a",
        hoverBackgroundColor: "#07113a",
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

// Graph Soft Skills

const graphSoftSkills = document
  .getElementById("graph-softskills")
  .getContext("2d");

let myGraph2 = new Chart(graphSoftSkills, {
  type: "radar",
  data: {
    labels: [
      ["Intelligence", "émotionnelle"],
      "Organisation",
      "Créativité",
      "Communication",
      "Collaboration",
      ["Sens du", "Service"],
      ["Capacité", "d'apprentissage"],
      ["Esprit", "Critique"],
      ["Prise de", "Décision"],
    ],
    datasets: [
      {
        label: "niveau",
        data: [6, 7, 7, 4, 5, 6, 9, 7, 7],
        backgroundColor: "#d1ad8350",
        color: "white",
        borderColor: "#07113a",
        pointBorderColor: "#8391d17e",
        borderWidth: 1,
        pointBackgroundColor: "#d1ad83",
        shadowOffsetX: 3,
        shadowOffsetY: 3,
        shadowBlur: 10,
        pointRadius: 4,
        pointBevelWidth: 2,
        pointHoverRadius: 3,
        pointHoverBevelWidth: 3,
        pointHoverBorderColor: "#07113a",
      },
    ],
  },
  options: {
    scale: {
      min: 0,
      max: 9,

      r: {
        display: false,
      },
      ticks: {
        maxTicksLimit: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          color: "red",
        },
      },
    },
  },
});

// --------------------------
// Fromulaire Contact

const inputs = document.querySelectorAll('input[type="text"]');
const companieContainer = document.getElementById("companie");
const textarea = document.getElementById("textarea");
const checkbox = document.getElementById("checkbox");
const form = document.querySelector("form");
let firstname, lastname, email, companie, text;

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const firstNameChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay(
      "firstname",
      "Votre prenom doit contenir entre 3 et 20 caractères"
    );
    firstname = null;
  } else if (!value.match(/^[a-zA-Z_.-]*$/)) {
    errorDisplay(
      "firstname",
      "Votre nom ne doit pas contenir de caractères spéciaux"
    );
    firstname = null;
  } else {
    errorDisplay("firstname", "", true);
    firstname = value;
  }
};

const lastNameChecker = (value) => {
  if (value.length > 0 && (value.length < 2 || value.length > 20)) {
    errorDisplay(
      "lastname",
      "Votre nom doit contenir entre 2 et 20 caractères"
    );
    lastname = null;
  } else if (!value.match(/^[a-zA-Z_.-]*$/)) {
    errorDisplay(
      "lastname",
      "Votre nom ne doit pas contenir de caractères spéciaux"
    );
    lastname = null;
  } else {
    errorDisplay("lastname", "", true);
    lastname = value;
  }
};

const companieChecker = (value) => {
  if (value.length > 1) {
    return (companie = value);
  }
};

const emailChecker = (value) => {
  if (value.length < 1) {
    errorDisplay("email", "", true);
    email = null;
  } else if (!value.match(/^\S+@\S+\.\S+$/)) {
    errorDisplay("email", "Ceci n'est pas un mail ...");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const textChecker = (value) => {
  if (value.length > 1) {
    return (text = value);
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstname":
        firstNameChecker(e.target.value);
        break;
      case "lastname":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

companieContainer.addEventListener("input", (e) => {
  companieChecker(e.target.value);
});

textarea.addEventListener("input", (e) => {
  textChecker(e.target.value);
});

// Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstname && lastname && email) {
    const data = {
      firstname,
      lastname,
      companie,
      email,
      text,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    textarea.value = "";

    firstname = null;
    lastname = null;
    companie = null;
    email = null;
    text = null;
    alert("Message envoyé !");
  } else {
    alert("veuillez remplir correctement les champs !");
  }
});
