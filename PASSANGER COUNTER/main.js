const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const saveBtn = document.querySelector(".save-btn");
const counterBar = document.querySelector(".counter-bar");
const enteries = document.querySelector(".enteries");
const errorEl = document.querySelector(".error");

let currentEnteries = 0;

// increment btn
incrementBtn.addEventListener("click", () => {
  currentEnteries++;
  counterBar.textContent = currentEnteries;
});

// decrement btn
decrementBtn.addEventListener("click", () => {
  currentEnteries--;
  if (currentEnteries < 0) {
    errorEl.classList.add("err-message");
    return (currentEnteries = 0);
  }
  counterBar.textContent = currentEnteries;
});

// save btn
saveBtn.addEventListener("click", () => {
  enteries.textContent += ` ${currentEnteries} - `;
  currentEnteries = 0;
  counterBar.textContent = currentEnteries;
});

// error message
errorEl.addEventListener("click", () => {
  errorEl.classList.remove("err-message");
});
