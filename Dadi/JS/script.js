const userNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero è:", userNumber);
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Il numero del computer è:", computerNumber);
if (userNumber > computerNumber) {
  console.log("HAI VINTO!!");
} else if (userNumber < computerNumber) {
  console.log("HAI PERSO D:");
} else {
  console.log("PAREGGIO!! Aggiorna la pagina e ritenta!");
}
