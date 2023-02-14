let quote = document.querySelector("#quote");
let origin = document.querySelector("#origin");
let quote_wrapper = document.querySelector(".main-wrapper");

//
let quotes = [
  ["winners do not quit", "R2Bs"],
  ["live life with confidence", "unknown"],
  [
    "when I wrote this code, only God and I understood what I did. now only God knows",
    "dev",
  ],
  ["discipline makes today hard, but makes tomorrow easy", "josue pena"],
  ["excuses make today easy, but they make tomorrow hard"],
];
//

quote_wrapper.addEventListener("click", () => {
  let n = Math.floor(Math.random() * quotes.length - 1);
  quote.textContent = `"` + quotes[n][0] + `."`;
  origin.textContent = quotes[n][1];
});
