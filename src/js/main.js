// animation && events

// let mode = document.querySelector(".mode");
// let home = document.querySelector(".sec-1");
// let navbar = document.querySelector("nav");
// mode.onclick = () => {
//   document.body.classList.toggle("switch");
//   home.classList.toggle("sec_color");
//   liNav.classList.toggle("navWords");
// };

let logo = document.querySelector(".logo");
logo.onclick = () => {
  window.location.reload();
};

let about_img = document.querySelector(".about_img");
let secound = 1000;
let menutes = secound * 60;

about_img.addEventListener("mousemove", () => {
  setTimeout(() => {
    about_img.style.animation = "rotate3d 7s infinite";
  }, menutes);
});

// icons events

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
