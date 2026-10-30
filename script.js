// ဆုမွန်ကောင်းစာတွေကို ဒီမှာ ပြင်ပါ
const wishes = [
  "Wishing you health, happiness and all your dreams coming true.",
  "I am so lucky to have a friend like you.",
  "May this year bring you lots of smiles and success.",
  "Thank you for all the good times we shared.",
  "Happy Birthday! Love, Your Friend ❤️"
];

const text = document.querySelector("p");
const button = document.getElementById("wish");
let index = 0;

function celebrate() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
}

button.addEventListener("click", function () {
  text.textContent = wishes[index];
  index = (index + 1) % wishes.length;
  celebrate();
});

// စာမျက်နှာ ဖွင့်တာနဲ့ confetti တစ်ခါ ပေါက်မယ်
window.addEventListener("load", celebrate);