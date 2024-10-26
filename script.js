const display = document.getElementById("display");

function appendNumber(number) {
  if (display.value === "0" && number !== ".") {
    display.value = "";
  }
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value[display.value.length - 1];
  if (!isNaN(lastChar)) {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
