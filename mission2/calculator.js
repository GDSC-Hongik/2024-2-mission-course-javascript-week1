// 사칙연산 함수 정의
function add(a, b) {
    return a + b
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
// 입출력 모듈
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const calc = input.split(" "); // 공백 기준으로 입력 분리

  const a = parseInt(calc[0]); // 숫자 1 분리
  const symbol = calc[1]; // 연산자 분리
  const b = parseInt(calc[2]); // 숫자 2 분리

  // 사칙연산 수행
  if (symbol == '+') {
    console.log(add(a, b));
  }
  else if (symbol == '-') {
    console.log(sub(a, b));
  }
  else if (symbol == '*') {
    console.log(mul(a, b));
  }
  else if (symbol == '/') {
    console.log(div(a, b));
  }
  rl.close();
});