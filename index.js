let score = 0;
let wiFi = 0;
let teslaCoil = 0;
let teleForce = 0;
let allProducers = 0;
let firstTimeClicked = true;

const scoreDisplay = document.getElementById("score");
const secondsTimer = document.getElementsByClassName("counter-container");

function iqClicker() {
  score += 1;
  scoreDisplay.innerText = score;
  seconds();
}

function seconds() {
  if (score > 0 && firstTimeClicked === true) {
    console.log("seconds are true");
    setInterval(renderScore(), 1000);
    firstTimeClicked = false;
  }
}

function renderScore() {
  const wiFiProducerRate = wiFi * 10;
  const teslaCoilProducerRate = teslaCoil * 100;
  const teleForceProducerRate = teleForce * 1000;
  console.log(allProducers);

  allProducers =
    wiFiProducerRate + teslaCoilProducerRate + teleForceProducerRate;

  score += allProducers;
  console.log(allProducers);
}

// when renderScore() is called, take each producer rate combine together in all producer rates variable , use new variable number to increment score
// run seconds() after first click, create variable that sets producers to false, changes to true when seconds() is called

let wiFiCount = document.getElementById("wifiQuantity");
// const wifiQuantity = document.getElementById("wifiQuantity");
// wifiQuantity.addEventListener('click', () => {buyPatent()})

function buyPatent() {
  wiFi = wiFiCount.innerText;
  if (score >= 2) {
    score -= 2;
    wiFi++;
    wiFiCount.innerText = wiFi;
  }
}

let teslaCoilCount = document.getElementById("teslaCoilQuantity");

function buyPatent2() {
  if (wiFi >= 5) {
    teslaCoil += 1;

    teslaCoilCount.innerText = teslaCoil;
  }
}

let teleForceCount = document.getElementById("teleForceQuantity");

function buyPatent3() {
  if (teslaCoil >= 10) {
    teleForce += 1;

    teleForceCount.innerText = teleForce;
  }
}

function test() {
  console.log("test");
}
