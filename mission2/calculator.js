function calculate(input) {
    const [num1, operator, num2] = input.split(" ");
    
    const a = parseInt(num1, 10);
    const b = parseInt(num2, 10);

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "impossible";
    }
}

const c = "3 + 5";
const d = calculate(c);
console.log(d); 
