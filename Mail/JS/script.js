const eleBtn = document.querySelector(".btn");
const eleMessage = document.querySelector(".message");
const eleOk = document.querySelector(".ok");
const eleDeny = document.querySelector(".deny");
const arrMails = [
  "bubu@ciao.com",
  "baba@ciao.com",
  "sasa@ciao.com",
  "lulu@ciao.com",
];

eleBtn.addEventListener("click", function () {
  const userMail = document.querySelector("[name=mail]").value;

  if (arrMails.includes(userMail)) {
    eleMessage.classList.add("show");
    eleOk.classList.add("show");
  } else {
    eleMessage.classList.add("show");
    eleDeny.classList.add("show");
  }
});

/*
if (arrMails.includes(userMail)) {
  eleMessage.classList.add("show");
  eleOk.classList.add("show");
} else {
  eleMessage.classList.add("show");
  eleDeny.classList.add("show");
}
*/
/*
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
