document.addEventListener("DOMContentLoaded", () => {
  const roseContainer = document.getElementById("roseContainer");
  const messageBox = document.getElementById("messageBox");
  const message = document.getElementById("message");
  const replayBtn = document.getElementById("replayBtn");
  const finalSurprise = document.getElementById("finalSurprise");

  const valentineMessages = [
    "To my dearest,",
    "Each petal of this rose",
    "Whispers of my affection for you.",
    "Happy Rose Day, my love!",
    "Press Replay for a little surprise!"
  ];  let messageIndex = 0;

  roseContainer.addEventListener("click", () => {
    roseContainer.classList.add("open");

    setTimeout(() => {
      roseContainer.classList.add("hidden"); // remove rose
      messageBox.classList.remove("hidden");
      typeText("Happy Rose Day");
      startPetals();
    }, 1600);
  });

  replayBtn.addEventListener("click", () => {
    window.location.reload();
  });

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
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.top = "-20px";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 9000);
  }

  // Sequential message display logic
  function showMessage() {
    messageBox.classList.remove("hidden");
    displayMessagesSequentially();
  }

  function displayMessagesSequentially() {
    if (messageIndex < valentineMessages.length) {
      typeText(valentineMessages[messageIndex], () => {
        messageIndex++;
        setTimeout(displayMessagesSequentially, 2000); // Wait 2 seconds before typing next message
      });
    } else {
      // All messages displayed, start heart animation
      startHeartAnimation();
    }
  }

  // Heart animation logic
  function startHeartAnimation() {
    for (let i = 0; i < 15; i++) {
      setTimeout(createHeart, i * 300); // Stagger heart creation
    }
    setTimeout(startFinalSurprise, 15 * 300 + 1000); // After all hearts + 1s delay
  }

  function startFinalSurprise() {
    finalSurprise.classList.remove("hidden");
    // Trigger CSS transition
    setTimeout(() => {
      finalSurprise.classList.add("show");
    }, 50);
  }

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000); // Remove heart after its animation (3s)
  }
});