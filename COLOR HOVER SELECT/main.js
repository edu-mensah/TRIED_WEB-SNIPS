const colorBox = document.querySelector(".color-box");
const body = document.querySelector("body");

//
let red = 0;
let green = 0;
let blue = 0;

//
// body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

colorBox.addEventListener("mousemove", (e) => {
  red = e.offsetY;
  green = e.offsetX;
  blue = e.screenX - 600;
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
