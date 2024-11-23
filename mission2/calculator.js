const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}


function calculate(input) {
    const [operand1, operator, operand2] = input.split(' ');
    const n1 = parseInt(operand1, 10);
    const n2 = parseInt(operand2, 10);

    if (operator === '+') {
        return add(n1, n2);
    } else if (operator === '-') {
        return sub(n1, n2);
    } else if (operator === '*') {
        return mul(n1, n2);
    } else if (operator === '/') {
        return div(n1, n2);
    }
}

rl.on('line', (input) => {
    const result = calculate(input);
    console.log(result);
    rl.close();
});