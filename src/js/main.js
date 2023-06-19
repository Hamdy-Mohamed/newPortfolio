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

let api = "https://api.alquran.cloud/v1/surah/114";

async function getApi() {
  let response = await fetch(api);
  let data = await response.json();
  let footer = document.querySelector("footer");
  footer.innerHTML =
    data.data.ayahs[0].text +
    data.data.ayahs[1].text +
    data.data.ayahs[2].text +
    data.data.ayahs[3].text +
    data.data.ayahs[4].text +
    data.data.ayahs[5].text;
  footer.style.height = "5.1rem";

  // works
  let workTx = document.querySelector(".workTX");
  workTx.innerHTML = "Messenger of God";
  let cards = document.querySelector(".cards");
  cards.innerHTML =
    "Prophet Muhammad, peace be upon him, is the seal of the prophets and messengers in Islam. He is a spiritual leader, the founder of the Muslim faith, and was born in Mecca, Saudi Arabia, in the year 570 AD. He passed away in Medina in the year 632 AD. Muhammad, peace be upon him, learned how to read and write and worked as a merchant before receiving revelations from God when he reached the age of forty. According to Islamic traditions, the message of God was revealed to him through the angel Gabriel, who conveyed to him the divine revelations and commands. The Prophet Muhammad continued to convey the Quran, which is considered the word of God, over a period of 23 years. He is considered a role model for Muslims in all aspects of life, teaching them the values of truthfulness, patience, tolerance, justice, and courage. He personally led the Muslims in spreading the message of Islam and in defensive battles against enemies. His wisdom, mercy, and justice were distinctive traits of his personality. The Prophet Muhammad, peace be upon him, is honored and celebrated in Islamic culture on various religious occasions and holidays. He is mentioned with the phrase peace be upon him (Salla Allah 'alayh wa sallam) or its abbreviation (PBUH) as a sign of respect and reverence. Our Prophet Muhammad, peace be upon him, is considered a central figure in Islam, and Muslims love and respect him as the greatest role model and teacher";
  cards.style.width = "50%";
  cards.style.margin = "auto";
  if (window.innerWidth <= 600) {
    cards.style.width = "95%";
    cards.style.marginTop = "2rem";
  }

  // about

  let about_img = document.querySelector(".about_img img");
  about_img.src = "src/img/Quran.png";
  let about_p = document.querySelector(".about_p");
  let muslims_count = "Global Muslim Population Exceeds 2 Billion.";

  about_p.innerHTML = `The ☪🕋🕌 Islamic religion is embraced 🕌☪🕋 by Muslims and is considered one of the major religions in the world. Muslims believe that Islam is the final and complete religion, revealed and guided by Allah for humanity, and that Muhammad is the last prophet and the seal of the prophets. Islam is based on the Quran, which is believed to be the word of Allah revealed to Muhammad and contains religious teachings, laws, and guidance for Muslims. Islam also includes the Prophetic tradition, which encompasses the teachings and actions of Prophet Muhammad. Muslims strive to practice sincere worship and 🕋🧕🏻📿🌙🤲🏼 follow the teachings of Islam  ☪🕋🤲☪︎  in their lives to achieve peace,☪︎ justice, and peaceful coexistence.☪︎(((${muslims_count})))`;

  //  home

  let palestine_support = document.querySelector(".Support");
  palestine_support.innerHTML = "Muslim ☪︎ 🕋";
}
let footer_logo = document.querySelector("#footer_logo");
footer_logo.addEventListener("click", () => {
  getApi();
});
/*
    width: 50%;
    margin: auto;*/
