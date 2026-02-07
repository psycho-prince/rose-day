const letter = document.getElementById("letter");
const reveal = document.getElementById("reveal");
const text = document.getElementById("text");

letter.addEventListener("click", () => {
  letter.style.opacity = "0";
  letter.style.pointerEvents = "none";

  setTimeout(() => {
    reveal.classList.remove("hidden");
    typeText("Happy Rose Day");
    launchEffects();
  }, 800);
});

/* TYPEWRITER */
function typeText(message) {
  let i = 0;
  text.innerHTML = "";
  const interval = setInterval(() => {
    text.innerHTML += message[i];
    i++;
    if (i === message.length) clearInterval(interval);
  }, 90);
}

/* EFFECTS */
function launchEffects() {
  for (let i = 0; i < 24; i++) createRose();
  for (let i = 0; i < 40; i++) createHeart();
}

function createRose() {
  const rose = document.createElement("div");
  rose.className = "rose";
  rose.innerHTML = `
    <svg viewBox="0 0 64 64">
      <path d="M32 6c10 6 16 14 16 22S42 48 32 58C22 48 16 36 16 28S22 12 32 6z"
        fill="#d90429"/>
      <circle cx="32" cy="26" r="6" fill="#ff758f"/>
    </svg>
  `;
  rose.style.left = Math.random() * innerWidth + "px";
  document.body.appendChild(rose);
  setTimeout(() => rose.remove(), 6000);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = `
    <svg viewBox="0 0 32 32" fill="#ffb3c6">
      <path d="M23.6 4c-2.3 0-4.3 1.3-5.6 3.1C16.7 5.3 14.7 4 12.4 4
        8.9 4 6 6.9 6 10.4c0 7.3 12 15.6 12 15.6s12-8.3 12-15.6
        C30 6.9 27.1 4 23.6 4z"/>
    </svg>
  `;
  heart.style.left = Math.random() * innerWidth + "px";
  heart.style.top = "-20px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
