function celebrate() {
  confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
}

function fireworks() {
  const end = Date.now() + 2500;
  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 } });
    confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// နောက်ခံ ပူဖောင်းတွေ
const icons = ["🎈", "🎉", "🎁", "⭐", "💖", "🎂"];
function balloon() {
  const b = document.createElement("div");
  b.className = "balloon";
  b.textContent = icons[Math.floor(Math.random() * icons.length)];
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = 6 + Math.random() * 6 + "s";
  document.body.appendChild(b);
  setTimeout(function () { b.remove(); }, 12000);
}
setInterval(balloon, 900);

// ✨ ခြေရာ
function sparkle(e) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.textContent = "✨";
  s.style.left = e.clientX + "px";
  s.style.top = e.clientY + "px";
  document.body.appendChild(s);
  setTimeout(function () { s.remove(); }, 800);
}
document.addEventListener("pointermove", function (e) {
  if (Math.random() > 0.3) return;
  sparkle(e);
});
document.addEventListener("pointerdown", sparkle);