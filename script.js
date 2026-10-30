const wishes = [
  "Wishing you health, happiness and all your dreams coming true.",
  "I am so lucky to have a friend like you.",
  "May this year bring you lots of smiles and success.",
  "Thank you for all the good times we shared.",
  "Happy Birthday! Love, Your Friend ❤️"
];

const text = document.getElementById("text");
const button = document.getElementById("wish");
const photo = document.getElementById("photo");
const counter = document.getElementById("counter");
const secret = document.getElementById("secret");

let index = 0;
let typing;
let taps = 0;

function typeText(message) {
  clearInterval(typing);
  text.textContent = "";
  const chars = Array.from(message);
  let i = 0;
  typing = setInterval(function () {
    text.textContent += chars[i];
    i++;
    if (i >= chars.length) clearInterval(typing);
  }, 35);
}

button.addEventListener("click", function () {
  typeText(wishes[index]);
  counter.textContent = "Wish " + (index + 1) + " / " + wishes.length;
  index = (index + 1) % wishes.length;
  celebrate();
});

photo.addEventListener("click", function () {
  photo.classList.add("spin");
  setTimeout(function () { photo.classList.remove("spin"); }, 800);

  const heart = confetti.shapeFromText({ text: "💖", scale: 3 });
  confetti({ shapes: [heart], scalar: 3, particleCount: 30, spread: 120, origin: { y: 0.6 } });

  taps++;
  if (taps === 5) {
    secret.classList.add("show");
    fireworks();
    taps = 0;
  }
});

document.getElementById("close").addEventListener("click", function () {
  secret.classList.remove("show");
});

window.addEventListener("load", celebrate);