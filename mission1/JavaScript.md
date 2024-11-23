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
개발자에 의해 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환(Explicit coercion) 또는 타입 캐스팅(Type casting)이라 한다.
