const ac = document.querySelector("#ac");
const del = document.querySelector("#del");
const mainMonitor = document.querySelector("#main-monitor");
const calMonitor = document.querySelector(".cal-monitor");
const tempMonitor = document.querySelector(".temp-monitor");
const operators = document.querySelectorAll(".operator");
const numberEl = document.querySelectorAll(".number");
const equalSign = document.querySelector("#equal");
const ans = document.querySelector("#ans");

//
let mainDisplay = "";
let calDisplay = "";
let result = null;
let lastOperator = "";
let haveDot = false;

//

numberEl.forEach((number) => {
  number.addEventListener("click", () => {
    if (number.textContent === "." && !haveDot) {
      haveDot = true;
    } else if (number.textContent === "." && haveDot) {
      return;
    }

    //
    mainDisplay += number.textContent;
    mainMonitor.textContent = mainDisplay;
  });
});

// operators section

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (!mainDisplay) {
      return;
    }
    haveDot = false;
    const operatorName = operator.textContent;
    if (mainDisplay && calDisplay && lastOperator) {
      mathOperation();
    } else {
      result = parseFloat(mainDisplay);
    }

    //
    clearVar(operatorName);
    lastOperator = operatorName;
  });
});

function clearVar(name = "") {
  calDisplay += `${mainDisplay} ${name} `;
  calMonitor.textContent = calDisplay;
  mainMonitor.textContent = "";
  mainDisplay = "";
  tempMonitor.textContent = result;
}

function mathOperation() {
  if (lastOperator === "x") {
    result = parseFloat(result) * parseFloat(mainDisplay);
  } else if (lastOperator === "+") {
    result = parseFloat(result) + parseFloat(mainDisplay);
  } else if (lastOperator === "/") {
    result = parseFloat(result) / parseFloat(mainDisplay);
  } else if (lastOperator === "-") {
    result = parseFloat(result) - parseFloat(mainDisplay);
  } else if (lastOperator === "%") {
    result = parseFloat(result) % parseFloat(mainDisplay);
  }
}

// equal sign function
equalSign.addEventListener("click", () => {
  if (!mainDisplay || !calDisplay) {
    return;
  }
  haveDot = false;
  mathOperation();
  clearVar();
  mainMonitor.textContent = result;
  mainDisplay = result;
  tempMonitor.textContent = "";
  calDisplay = "";
});

ans.addEventListener("click", () => {
  if (!mainDisplay || !calDisplay) {
    return;
  }
  haveDot = false;
  mathOperation();
  clearVar();
  mainMonitor.textContent = result;
  mainDisplay = result;
  tempMonitor.textContent = "";
  calDisplay = "";
  calMonitor.textContent = "";
});

// clear all and del btn
ac.addEventListener("click", () => {
  mainDisplay = "";
  mainMonitor.textContent = "";
  result = null;
  calDisplay = "";
  calMonitor.textContent = "";
  tempMonitor.textContent = "";
});

del.addEventListener("click", () => {
  mainDisplay = "";
  mainMonitor.textContent = "";
});

//  keyboard input section
window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "." ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "%"
  ) {
    clickButtonEl(e.key);
  } else if (e.key === "Enter") {
    clickEnter();
  }
});

function clickButtonEl(key) {
  numberEl.forEach((number) => {
    if (number.textContent === key) {
      number.click();
    }
  });

  operators.forEach((operator) => {
    if (operator.textContent === key) {
      operator.click();
    }
  });
}

function clickEnter(key) {
  equalSign.click();
}
