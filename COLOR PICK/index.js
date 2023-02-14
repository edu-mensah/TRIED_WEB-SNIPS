const colourBox = document.querySelector("#colour-box");
const red = document.querySelector("#r");
const green = document.querySelector("#g");
const blue = document.querySelector("#b");
const body = document.querySelector("body");

red.value = 0;
green.value = 0;
blue.value = 0;

//
red.addEventListener("keyup", () => {
  colourBox.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
});

//
green.addEventListener("keyup", () => {
  colourBox.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
});

//
blue.addEventListener("keyup", () => {
  colourBox.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
  body.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
});
