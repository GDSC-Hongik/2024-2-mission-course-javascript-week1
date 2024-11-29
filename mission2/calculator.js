function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate(input) {
    const [a, operator, b] = input;

    if (operator=="+") {
        return add(a, b);
      } else if (operator=="-") {
        return subtract(a, b);
      } else if (operator=="*") {
        return multiply(a, b);
      } else if (operator=="*") {
        return divide(a, b);
      } else {
        return "impossible";
      }
}