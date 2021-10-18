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
console.log(header);

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

// Pages "Drawing et "Music"

const about = document.querySelector(".about");
const aboutBtn = document.querySelectorAll(".btn-about");
const drawing = document.querySelector(".drawing");
const drawingBtn = document.querySelectorAll(".btn-drawing");
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

navAbout(aboutBtn, drawing, about, music);
navAbout(drawingBtn, music, drawing, about);
navAbout(musicBtn, about, music, drawing);

// aboutBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     about.classList.add("visible");
//     if (drawing.classList.contains("visible")) {
//       drawing.classList.remove("visible");
//     } else if (music.classList.contains("visible")) {
//       music.classList.remove("visible");
//     }
//   });
// });

// drawingBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     drawing.classList.add("visible");
//     if (about.classList.contains("visible")) {
//       about.classList.remove("visible");
//     } else if (music.classList.contains("visible")) {
//       music.classList.remove("visible");
//     }
//   });
// });

// musicBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     music.classList.add("visible");
//     if (drawing.classList.contains("visible")) {
//       drawing.classList.remove("visible");
//     } else if (about.classList.contains("visible")) {
//       about.classList.remove("visible");
//     }
//   });
// });

// Photo Slide Effect

const images = document.querySelectorAll(".artwork-container");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    images.forEach((image) => {
      if (image.classList.contains("active")) {
        image.classList.remove("active");
      }
    });
    images[i].classList.add("active");
  });
}
