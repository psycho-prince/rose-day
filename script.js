document.addEventListener("DOMContentLoaded", () => {
  const roseContainer = document.getElementById("roseContainer");
  const messageBox = document.getElementById("messageBox");
  const message = document.getElementById("message");
  const replayBtn = document.getElementById("replayBtn");

  roseContainer.addEventListener("click", () => {
    roseContainer.classList.add("open");

    setTimeout(() => {
      roseContainer.classList.add("hidden"); // remove rose
      messageBox.classList.remove("hidden");
      typeText("Happy Rose Day");
      startPetals();
    }, 1200);
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
});