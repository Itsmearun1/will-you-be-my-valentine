const answers_no = {
  english: [
    "No",
    "Are you sure?",
    "Really sure??",
    "Like… REALLY sure?",
    "Think again?",
    "That kinda hurt 🥲",
    "Please?",
    "I’m begging now",
    "Okay wow 😭",
    "Alright… start over?"
  ],
  french: [
    "Non",
    "Tu es sûr ?",
    "Vraiment sûr ??",
    "Réfléchis encore",
    "Ça fait un peu mal 🥲",
    "S’il te plaît",
    "Bon… on recommence ?"
  ],
  thai: [
    "ไม่อ่ะ",
    "แน่ใจจริงๆหรอ",
    "คิดดูอีกทีนะ",
    "เราจะร้องไห้แล้วนะ 😭",
    "โอเค เริ่มใหม่ก็ได้"
  ]
};

const answers_yes = {
  english: "Yes 💕",
  french: "Oui 💕",
  thai: "เย่ 💖"
};

let language = "english";
let i = 1;
let clicks = 0;
let scale = 1;

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");
const banner = document.getElementById("banner");
const questionHeading = document.getElementById("question-heading");
const successMessage = document.getElementById("success-message");

/* ---------- NO BUTTON ---------- */
no_button.addEventListener("click", () => {
  if (clicks === 0) {
    banner.src = "public/images/no.gif";
    refreshBanner();
  }

  clicks++;

  scale = Math.min(scale + 0.15, 2.4);
  yes_button.style.transform = `scale(${scale})`;

  const list = answers_no[language];

  if (i < list.length) {
    no_button.textContent = list[i];
    i++;
  } else {
    alert(list[list.length - 1]);
    resetButtons();
