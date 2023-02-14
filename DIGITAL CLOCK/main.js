let hr = document.querySelector("#hour");
let min = document.querySelector("#minutes");
let sec = document.querySelector("#seconds");
let amPm = document.querySelector("#am");

//
setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }

  if (hour == 0) {
    hour = 12;
  }

  //
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //
  hr.textContent = hour;
  min.textContent = minutes;
  sec.textContent = seconds;
  amPm.textContent = am_pm;
}

setInterval(() => {
  sec.classList.toggle("sec-new-color");
}, 1000);
