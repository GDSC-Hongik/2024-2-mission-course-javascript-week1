const readline = require("readline");

// readline 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 사용자 입력 받기
rl.question("공백으로 구분된 두 정수와 연산자를 입력하세요: ", (input) => {
  const parts = input.split(" "); // 공백 기준으로 입력 분리

  const num1 = parseInt(parts[0]); // 첫 번째 숫자
  const operator = parts[1]; // 연산자
  const num2 = parseInt(parts[2]); // 두 번째 숫자

  let result;

  // 연산자에 따라 계산
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("error caused");
      rl.close();
      return;
  }

  console.log(result);
  rl.close();
});
