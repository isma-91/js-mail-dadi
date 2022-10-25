const eleContainer = document.querySelector(".container");
const eleBtn = document.querySelector(".btn");
const userHalf = document.querySelector(".usern");
const computerHalf = document.querySelector(".computern");

eleBtn.addEventListener("click", function () {
  const userNumber = Math.floor(Math.random() * 6) + 1;
  // console.log("Il tuo numero è:", userNumber);
  const eleUserN = document.createElement("div");
  eleUserN.classList.add("random-number");
  eleUserN.innerHTML = userNumber;
  userHalf.append(eleUserN);

  const computerNumber = Math.floor(Math.random() * 6) + 1;
  // console.log("Il numero del computer è:", computerNumber);
  const eleCompN = document.createElement("div");
  eleCompN.classList.add("random-number");
  eleCompN.innerHTML = computerNumber;
  computerHalf.append(eleCompN);

  eleBtn.classList.add("hidden");
  // const eleWin = document.createElement("div");
  // eleWin.classList.add("win");
  // const eleLose = document.createElement("div");
  // eleLose.classList.add("lose");
  // const eleDraw = document.createElement("div");
  // eleDraw.classList.add("draw");
  const eleResult = document.createElement("div");
  eleResult.classList.add("base");

  if (userNumber > computerNumber) {
    eleResult.innerHTML = "Il tuo numero è quello più grande!! HAI VINTO!!!";
    eleResult.classList.add("win");
    eleContainer.append(eleResult);
    // eleContainer.append(eleWin);
  } else if (userNumber < computerNumber) {
    eleResult.innerHTML = "Il numero del computer è più grande, HAI PERSO";
    eleResult.classList.add("lose");
    eleContainer.append(eleResult);
    // eleContainer.append(eleLose);
  } else {
    eleResult.innerHTML = "PAREGGIO!! Aggiorna la pagina e ritenta!";
    eleResult.classList.add("draw");
    eleContainer.append(eleResult);
    // eleContainer.append(eleDraw);
    console.log("PAREGGIO!! Aggiorna la pagina e ritenta!");
  }
});

// if (userNumber > computerNumber) {
//   console.log("HAI VINTO!!");
// } else if (userNumber < computerNumber) {
//   console.log("HAI PERSO D:");
// } else {
//   console.log("PAREGGIO!! Aggiorna la pagina e ritenta!");
// }
