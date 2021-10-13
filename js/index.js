// Star Anim Menu

const stars = () => {
  const star = document.createElement("span");
  document.body.appendChild(star);
  star.classList.add("star");

  const size = Math.random() * 2 + "px";

  star.style.width = size;
  star.style.height = size;

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  setTimeout(() => {
    star.remove();
  }, 5000);
};

setInterval(stars, 20);

// --------------------
