const roseContainer = document.getElementById("roseContainer");
const rose = document.getElementById("rose");
const messageBox = document.getElementById("messageBox");
const message = document.getElementById("message");

roseContainer.addEventListener("click", () => {
  roseContainer.classList.add("open");
  roseContainer.style.pointerEvents = "none";

  setTimeout(() => {
    rose.style.opacity = "0";
    showMessage();
    startPetals();
  }, 1300);
});

function showMessage() {
  messageBox.classList.remove("hidden");
  typeText("Happy Rose Day");
}

function typeText(text) {
  let i = 0;
  message.innerHTML = "";
  const interval = setInterval(() => {
    message.innerHTML += text[i];
    i++;
    if (i === text.length) clearInterval(interval);
  }, 90);
}

function startPetals() {
  for (let i = 0; i < 22; i++) {
    setTimeout(createPetal, i * 450);
  }
}

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * innerWidth + "px";
  petal.style.top = "-20px";
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 9000);
}
