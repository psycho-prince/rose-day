const roseContainer = document.getElementById("roseContainer");
const rose = document.getElementById("rose");
const messageBox = document.getElementById("messageBox");
const message = document.getElementById("message");

const valentineMessages = [
  "Happy Rose Day!"
];

roseContainer.addEventListener("click", () => {
  roseContainer.classList.add("open");
  roseContainer.style.pointerEvents = "none";

  setTimeout(() => {
    rose.style.opacity = "0";
    showMessage();
    startPetals();
  }, 1600);
});

let messageIndex = 0;

function showMessage() {
  messageBox.classList.remove("hidden");
  displayMessagesSequentially();
}

function displayMessagesSequentially() {
  if (messageIndex < valentineMessages.length) {
    typeText(valentineMessages[messageIndex], () => {
      messageIndex++;
      setTimeout(displayMessagesSequentially, 1500); // Wait 1.5 seconds before typing next message
    });
  } else {
    // All messages displayed, start heart animation
    startHeartAnimation();
  }
}

function typeText(text, callback) {
  let i = 0;
  message.innerHTML = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      message.innerHTML += text[i];
      i++;
    } else {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 90);
}

function startPetals() {
  for (let i = 0; i < 40; i++) {
    setTimeout(createPetal, i * 200);
  }
}

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  // Random size
  const size = Math.random() * 10 + 10; // size between 10px and 20px
  petal.style.width = size + "px";
  petal.style.height = size + "px";

  // Random initial position
  petal.style.left = Math.random() * innerWidth + "px";
  petal.style.top = "-20px";

  // Random rotation
  const rotation = Math.random() * 360;
  petal.style.transform = `rotate(${rotation}deg)`;

  // Random animation duration
  const duration = Math.random() * 6 + 5; // duration between 5s and 11s
  petal.style.animationDuration = duration + "s";

  // Random opacity
  petal.style.opacity = Math.random() * 0.5 + 0.3; // opacity between 0.3 and 0.8

  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), duration * 1000); // Remove after animation
}

function startHeartAnimation() {
  // Generate a few hearts
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 300); // Stagger heart creation
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  // Random horizontal position for the heart
  heart.style.left = Math.random() * innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000); // Remove heart after its animation (3s)
}