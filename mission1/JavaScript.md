## 자바스크립트의 기본 문법
#### 변수
`var 변수; 변수 = 값;`
#### 값
데이터 타입
#### 연산자
#### 키워드
수행할 동작을 규정한 것
#### 문 (statement)
리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성되며 세미콜론( ; )으로 끝남

## Data type & Variable
#### 데이터 타입
* 원시 타입 (primitive data type)
변경 불가능한 값(immutable value)이며 pass-by-value(값에 의한 전달)
  * `number`
  * `string`
  * `boolean`
  * `null`
  * `undefined`
  * `symbol`
* 객체 타입 (Object data type)
pass-by-reference(참조에 의한 전달) 방식으로 전달
  * `object`
#### 변수
* `var` 
  * 재할당 가능
  * 함수 레벨 스코프 (Function Scope)를 가짐
  * 호이스팅 발생
* `let`
  * 재할당 가능
  * 블록 스코프(Block Scope)
  * 호이스팅 불가능
* `const` 
  * 재할당 불가능
  * 블록 스코프(Block Scope)
  * 호이스팅되지만 선언 전에 접근 불가
  * 선언과 동시에 반드시 초기화 필요

## Type coercion
#### 타입 변환
* 명시적 타입 변환(Explicit coercion) 또는 타입 캐스팅(Type casting)  
개발자에 의해 의도적으로 값의 타입을 변환하는 것
```javascript
var x = 10;

// 명시적 타입 변환
var str = x.toString(); // 숫자를 문자열로 타입 캐스팅한다.
console.log(typeof str); // string
```
* 암묵적 타입 변환(Implicit coercion) 또는 타입 강제 변환(Type coercion)  
개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환 - 동적 언어라서
```javascript
var x = 10;

// 암묵적 타입 변환
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가한다.
var str = x + '';

console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10
```
  * 자바스크립트 엔진은 표현식을 평가할 때 문맥, 즉 컨텍스트(Context)에 고려하여 암묵적 타입 변환을 실행한다
  ```javascript
  1 + '2' // "12"
  ```
  위 예제의 `+` 연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작한다.
  
  ```javascript
  1 - '1'    // 0
  1 * '10'   // 10
  1 / 'one'  // NaN
  ```
  위 예제의 연산자는 모두 산술 연산자이다. 산술 연산자의 역할은 숫자 값을 만드는 것이므로 산술 연산자의 피연산자는 문맥, 즉 컨텍스트 상 숫자 타입이여야 한다.
  
