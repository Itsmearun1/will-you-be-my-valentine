const answers_no = {
  english: [
    "No",
    "Are you sure, Al?",
    "Really sure??",
    "Like… REALLY sure?",
    "Think again?",
    "That kinda hurt 🥲",
    "Al pls",
    "I’m begging now",
    "Okay wow 😭",
    "Let’s restart…"
  ],
  french: [
    "Non",
    "Tu es sûre Al ?",
    "Vraiment sûre ?",
    "Réfléchis encore",
    "Ça fait un peu mal 🥲",
    "S’il te plaît Al",
    "Ok on recommence…"
  ],
  thai: [
    "ไม่อ่ะ",
    "แน่ใจจริงๆหรอ Al",
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
let size = 44;
let clicks = 0;

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");

no_button.addEventListener("click", () => {
  const banner = document.getElementById("banner");

  if (clicks === 0) {
    banner.src = "public/images/no.gif";
    refreshBanner();
  }

  clicks++;

  size = Math.min(size + 10, 160);
  yes_button.style.transform = `scale(${size / 44})`;

  const list = answers_no[language];
  if (i < list.length) {
    no_button.textContent = list[i++];
  } else {
    alert(list[list.length - 1]);
    i = 1;
    clicks = 0;
    size = 44;
    yes_button.style.transform = "scale(1)";
    no_button.textContent = list[0];
  }
});

yes_button.addEventListener("click", () => {
  const banner = document.getElementById("banner");
  banner.src = "public/images/yes.gif";
  refreshBanner();

  // Hide buttons
  document.querySelector(".buttons").style.display = "none";

  // Replace question text
  const questionHeading = document.getElementById("question-heading");

  if (language === "french") {
    questionHeading.textContent = "Je savais que tu dirais oui, Al 💖";
  } else if (language === "thai") {
    questionHeading.textContent = "เรารู้อยู่แล้วว่า Al ต้องตอบตกลง 💕";
  } else {
    questionHeading.textContent = "I knew you’d say yes, Al 💕";
  }

  // Show success message
  document.querySelector(".message").style.display = "block";
});

function refreshBanner() {
  const banner = document.getElementById("banner");
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}

function changeLanguage() {
  language = document.getElementById("language-select").value;

  const heading = document.getElementById("question-heading");
  const success = document.getElementById("success-message");

  if (language === "french") {
    heading.textContent = "Al, tu veux être mon valentin ? 💖";
    success.textContent = "Yepppie Al 💕 à bientôt :3";
  } else if (language === "thai") {
    heading.textContent = "Al คืนดีกับเราได้อ่ะป่าว? 💖";
    success.textContent = "ฮูเร่ Al 💕 คืนดีกันแล้วน้า :3";
  } else {
    heading.textContent = "asd";
    success.textContent = "Yepppieee love💕 see you sooonnn :3";
  }

  no_button.textContent = answers_no[language][0];
  yes_button.textContent = answers_yes[language];
}
