let today = new Date(new Date().setTime(0));

let time = today.getTime();

let timex = 0;

let seconds = Math.floor((time % (100 * 60)) / 1000);
let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

setInterval(function () {
  if (seconds < 59) {
    seconds++;
  } else {
    min++;
    seconds = 0;
  }

  let minIssue = min < 10 ? "0" + min : min;
  let secIssue = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector(".time").innerHTML = `${minIssue} : ${secIssue}`;

  document.querySelector(
    ".timeOfTest"
  ).innerHTML = `${minIssue} min : ${secIssue} sec`;
}, 1000);
