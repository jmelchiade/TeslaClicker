let score = 0;
let wiFi = 0;
let teslaCoil = 0;
let teleForce = 0;

const scoreDisplay = document.getElementById("score");
const secondsTimer = document.getElementsByClassName("counter-container");

function iqClicker() {
  score += 1;
  scoreDisplay.innerText = score;
}

function seconds() {
  if (score > 0) {
    setInterval(iqClicker(), 1000);
  }

  const wiFiCount = document.getElementById("quantity");

  function buyPatent() {
    wiFi = wiFiCount.innerText;
    if (score >= 2) {
      score -= 2;
      wiFi++;
      wiFiCount.innerText = wiFi;
    }
  }

  const teslaCoilCount = document.getElementById("teslaCoil");

  function buyPatent2() {
    teslaCoil += 1;
    if (wiFi >= 5) {
      teslaCoil += 1;

      teslaCoilCount.innerText = teslaCoil;
    }
  }

  const teleForceCount = document.getElementById("teleForce");

  function buyPatent3() {
    teleForce += 1;
    if (teslaCoil >= 10) {
      teleForce += 1;

      teleForceCount.innerText = teleForce;
    }
  }
}
