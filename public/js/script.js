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
  }
});

/* ---------- YES BUTTON ---------- */
yes_button.addEventListener("click", () => {
  banner.src = "public/images/yes.gif";
  refreshBanner();

  document.querySelector(".buttons").style.display = "none";

  if (language === "french") {
    questionHeading.textContent = "Je savais que tu dirais oui 💖";
  } else if (language === "thai") {
    questionHeading.textContent = "เรารู้อยู่แล้วว่าต้องตอบตกลง 💕";
  } else {
    questionHeading.textContent = "I knew you’d say yes 💕";
  }

  // ✅ FINAL success line
  successMessage.textContent = "Yippee Love 💕 See you soooonnn";
  document.querySelector(".message").style.display = "block";
});

/* ---------- LANGUAGE CHANGE ---------- */
function changeLanguage() {
  language = document.getElementById("language-select").value;

  if (language === "french") {
    questionHeading.textContent = "Tu veux être mon valentin ? 💖";
  } else if (language === "thai") {
    questionHeading.textContent = "คืนดีกับเราได้อ่ะป่าว? 💖";
  } else {
    questionHeading.textContent = "Will you be my valentine? 💖";
  }

  no_button.textContent = answers_no[language][0];
  yes_button.textContent = answers_yes[language];
}

/* ---------- HELPERS ---------- */
function refreshBanner() {
  const src = banner.src;
  banner.src = "";
  banner.src = src;
}

function resetButtons() {
  i = 1;
  clicks = 0;
  scale = 1;
  yes_button.style.transform = "scale(1)";
  no_button.textContent = answers_no[language][0];
}
