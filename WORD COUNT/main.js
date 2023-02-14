let input = document.querySelector("#input");
let counter = document.querySelector("#counter");

//
function getWordCount(str) {
  return str.split(" ").filter((n) => {
    return n != "";
  }).length;
}
// function getWordCount(str) {
//   return str.trim().split(/\s+/).length;
// }

//

input.addEventListener("keyup", () => {
  counter.textContent = `Number of words: ${getWordCount(input.value)}`;
});
