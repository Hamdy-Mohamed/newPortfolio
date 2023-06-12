// animation && events

let navi = document.querySelector(".navi");

function naviEvent() {
  navi.style.background = "#73BBC9";
  navi.style.opacity = "0.7";
}
window.addEventListener("scroll", naviEvent);

let logo = document.querySelector(".logo");
logo.onclick = () => {
  window.location.reload();
};

let about_img = document.querySelector(".about_img");

let secound = 1000;
let menutes = secound * 60;

about_img.addEventListener("mousemove", () => {
  setTimeout(() => {
    about_img.style.animation = "rotate3d 2s infinite";
  }, menutes);
});

// icons

let facebook = document.querySelector(".facebook");
let insta = document.querySelector(".insta");
let github = document.querySelector(".github");

facebook.onclick = () => {
  window.open("https://www.facebook.com/hamdy.elgokar.5");
};
insta.onclick = () => {
  window.open("https://www.instagram.com/askander_19/");
};

github.onclick = () => {
  window.open("https://github.com/Hamdy-Mohamed");
};
