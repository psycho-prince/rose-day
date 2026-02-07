const letter = document.getElementById("letter");
const message = document.getElementById("message");

letter.addEventListener("click", () => {
  letter.style.display = "none";
  message.classList.remove("hidden");

  for (let i = 0; i < 30; i++) createRose();
  for (let i = 0; i < 40; i++) createHeart();
});

/* SVG ROSE */
function createRose() {
  const rose = document.createElement("div");
  rose.classList.add("rose");

  rose.innerHTML = `
  <svg viewBox="0 0 64 64" fill="none">
    <path d="M32 6c10 6 16 14 16 22S42 48 32 58C22 48 16 36 16 28S22 12 32 6z"
      fill="#d90429"/>
    <circle cx="32" cy="26" r="6" fill="#ff4d6d"/>
  </svg>
  `;

  rose.style.left = Math.random() * window.innerWidth + "px";
  rose.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(rose);
  setTimeout(() => rose.remove(), 6000);
}

/* SVG HEART CONFETTI */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = `
  <svg viewBox="0 0 32 32" fill="#ffccd5">
    <path d="M23.6 4c-2.3 0-4.3 1.3-5.6 3.1C16.7 5.3 14.7 4 12.4 4 8.9 4 6 6.9 6 10.4c0 7.3 12 15.6 12 15.6s12-8.3 12-15.6C30 6.9 27.1 4 23.6 4z"/>
  </svg>
  `;

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = "-20px";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
