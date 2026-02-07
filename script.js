const rose = document.getElementById("rose");
const letter = document.getElementById("letter");
const message = document.getElementById("message");
const replay = document.getElementById("replay");

rose.addEventListener("click", () => {
  rose.classList.add("open");

  setTimeout(() => {
    rose.style.opacity = "0";
    revealMessage();
    startHearts();
  }, 900);
});

replay.addEventListener("click", () => location.reload());

function revealMessage() {
  letter.classList.remove("hidden");
  typeText("Happy Rose Day");
}

function typeText(text) {
  let i = 0;
  message.innerHTML = "";
  const timer = setInterval(() => {
    message.innerHTML += text[i];
    i++;
    if (i === text.length) clearInterval(timer);
  }, 100);
}

/* HEARTS — BACKGROUND ONLY */
function startHearts() {
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 200);
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = `
    <svg viewBox="0 0 32 32" fill="#ff8fab">
      <path d="M23.6 4c-2.3 0-4.3 1.3-5.6 3.1C16.7 5.3 14.7 4 12.4 4
      8.9 4 6 6.9 6 10.4c0 7.3 12 15.6 12 15.6s12-8.3 12-15.6
      C30 6.9 27.1 4 23.6 4z"/>
    </svg>
  `;
  heart.style.left = Math.random() * innerWidth + "px";
  heart.style.top = "-20px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
