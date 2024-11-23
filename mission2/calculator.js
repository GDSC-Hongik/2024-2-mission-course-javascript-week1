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
    const num1 = parseInt(operand1, 10);
    const num2 = parseInt(operand2, 10);

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return mul(num1, num2);
        case '/':
            return div(num1, num2);
        default:
            return 'Invalid operator';
    }
}