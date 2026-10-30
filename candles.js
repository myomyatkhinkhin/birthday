const candleRow = document.getElementById("candleRow");
const text = document.getElementById("text");
const TOTAL = 5; // သူ့အသက်အရေအတွက် ထည့်လို့ရတယ်
let lit = TOTAL;

for (let i = 0; i < TOTAL; i++) {
  const c = document.createElement("span");
  c.className = "candle";
  c.textContent = "🕯️";
  c.addEventListener("click", function () {
    if (c.textContent === "💨") return;
    c.textContent = "💨";
    lit--;
    if (lit === 0) {
      fireworks();
      text.textContent = "Wish granted! Happy Birthday!! 🎉";
    }
  });
  candleRow.appendChild(c);
}