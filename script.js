const letter = document.getElementById("letter");
const message = document.getElementById("message");

letter.addEventListener("click", () => {
  letter.style.display = "none";
  message.classList.remove("hidden");

  for (let i = 0; i < 40; i++) {
    createRose();
  }
});

function createRose() {
  const rose = document.createElement("div");
  rose.classList.add("rose");
  rose.innerText = "🌹";

  rose.style.left = Math.random() * window.innerWidth + "px";
  rose.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 5000);
}
