  // Minecraft Fishing Simulator 

// Variables to Store HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer"); 

// Global Variables
let character = "Steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager)
fishBtnEl.addEventListener("click", fishOnce);

// Event Functions
function selectSteve() {
  // Update Active Border
  steveImgEl.classList.add("active");
  alexImgEl.classList.remove("active");
  villagerImgEl.classList.remove("active");

  // Update character selection variable
  character = "Steve";
}

function selectAlex() {
  // Update Active Border
  steveImgEl.classList.remove("active");
  villagerImgEl.classList.remove("active");
  alexImgEl.classList.add("active");

  // Update character selection Variable
  character = "Alex";
}

function selectVillager() {
  // Update Active Border
  steveImgEl.classList.remove("active");
  alexImgEl.classList.remove("active");
  villagerImgEl.classList.add("active");

  // Update character selection Variable
  character = "Villager";
}


function fishOnce() {
  // Test current character
  if (character === "Steve") {
    // Use Steve probability distribution for Fishing
    let randNum = Math.random();

    if (randNum < 0.7) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.9) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      numTropical++;
      imgResultEl.src = "img/Tropical-fish.png";
      numTropical.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
  } else if (character === "Alex") {
    // Use Alex probability distribution for Fishing
    let randNum = Math.random();

    if (randNum < 0.1) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.2) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      numTropical++;
      imgResultEl.src = "img/Tropical-fish.png";
      numTropical.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    } 
  } else {
    // Use Villager probability distribution for Fishing
    let randNum = Math.random();

    if (randNum < 0.25) {
      numCod++;
      imgResultEl.src = "img/Raw-Cod.png";
      numCodEl.innerHTML = numCod;
    } else if (randNum < 0.5) {
      numSalmon++;
      imgResultEl.src = "img/Raw-Salmon.png";
      numSalmonEl.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      numTropical++;
      imgResultEl.src = "img/Tropical-fish.png";
      numTropical.innerHTML = numTropical;
    } else {
      numPuffer++;
      imgResultEl.src = "img/Pufferfish.png";
      numPufferEl.innerHTML = numPuffer;
    }
  }
}