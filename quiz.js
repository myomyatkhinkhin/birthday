const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const quizText = document.getElementById("quizText");

function runAway() {
  noBtn.style.position = "fixed";
  noBtn.style.zIndex = 10;
  noBtn.style.left = Math.random() * (window.innerWidth - 120) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 60) + "px";
}

noBtn.addEventListener("pointerenter", runAway);
noBtn.addEventListener("pointerdown", runAway);

yesBtn.addEventListener("click", function () {
  quizText.textContent = "I knew it! 😈💖";
  noBtn.style.display = "none";
  celebrate();
});