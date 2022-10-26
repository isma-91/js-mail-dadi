const eleBtn = document.querySelector(".btn");
const eleMessage = document.querySelector(".message");
const eleOk = document.querySelector(".ok");
const eleDeny = document.querySelector(".deny");
const userMail = document.querySelector("[name=mail]");
const arrMails = [
  "bubu@ciao.com",
  "baba@ciao.com",
  "sasa@ciao.com",
  "lulu@ciao.com",
];

eleBtn.addEventListener("click", function () {
  let emailFound = false;
  for (let i = 0; i < arrMails.length; i++) {
    if (userMail.value === arrMails[i]) {
      emailFound = true;
    }
  }
  // Praticamente su usa la variabile (emailFound in questo caso) nel CICLO perchè il ciclo troverà una volta la risposta corretta e tutte le altre volte quelle sbagliate, ma a noi ci basta che la trovi una volta sola e cambiamo il valore della variabile. Poi la riutiliziamo nell'"IF" per determinare quando deve stampare il vero, perchè nel ciclo la variabile è stata riassegnata trovando il vero, se non usiamo la variabile il ciclo ci stamperebbe tutti i valori sbagliati e corretti, mentre usando la variabile, che è UNA, avremo solo una risposta corretta, mentre nell'else non mettiamo la variabile e quindi se non c'è la variabile stamperà l'errore.

  if (emailFound) {
    eleMessage.classList.add("show");
    eleOk.classList.add("show");
  } else {
    eleMessage.classList.add("show");
    eleDeny.classList.add("show");
  }
});

/* METODO "SCORCIATOIA"
if (arrMails.includes(userMail)) {
  eleMessage.classList.add("show");
  eleOk.classList.add("show");
} else {
  eleMessage.classList.add("show");
  eleDeny.classList.add("show");
}
*/

/* METODO CON CICLO SBAGLIATO
for (let i = 0; i < arrMails.length; i++) {
  if (userMail === arrMails[i]) {
    eleMessage.classList.add("show");
    eleOk.classList.add("show");
  } else {
    eleMessage.classList.add("show");
    eleDeny.classList.add("show");
  }
}
*/
/* CON IL "FORM"
Non si seleziona il bottone, ma si seleziona il form direttamente:
eleForm.addEventListener("submit", function () {
  event.preventDefault();

}
*/
