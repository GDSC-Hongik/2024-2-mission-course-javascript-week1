## 과목 : JavaScript 정리(~lesson 15)
## 수업일시 : 2024-11-23
## 수업내용
## 자바 스크립트의 특징
- 명령형, 함수형, 프로토타입 기반 객체 지향 프로그래밍 지원하는 멀티패러다임 프로그래밍 언어
- 자바스크립트는 body 요소의 가장 아래에 위치시키는 게 좋다.
## js 기본문법
### 변수
- 변수 선언은 var
```js
var x; x = 6;
```
- 타입
	- 원시 타입(변경 불가능한 값 / 값에 의한 전달)
		- number
			- 모든 수를 실수로 처리(타입은 오직 1개)
			- infinity : 양의 무한대
			- -infinity : 음의 무한대
			- NaN : 산술 연산 불가
		- string
			- 문자열이 생성되면 문자열 변경이 불가능함
			- 값을 바꾼다고 한들 **새로 할당**이지 변경이 아니다.
		- boolean(true, false)
			- null, undefined, 0 -> faluse
		- null(Null X, nuLL X)
			- null 타입 확인할때는 "\==" 사용
		- undefined(선언 이후 값 할당 안한 변수)
		- symbol
			- 충돌 위험 없는 객체 property key
	- 객체 타입
		- object
			- 참조에 의한 전달
- $ 자바스크립트는 데이터 타입 미리 지정 안함. 값 보고 알아서 지정
- 표현식도 하나의 값(ex. 5 \* 10 -> 50)
## 데이터 타입과 변수
### 변수
```js
var score; // 변수 선언
score = 80; // 값 할당
score = 90; // 값 재할당
score; // 변수 참조
```
- 변수명이 같은 변수를 중복선언해도 에러 X -> 값을 덮어씀
- 값에 따라 타입은 자동 지정
### 변수 호이스팅
```js
// 변수 선언 안하더라도 호이스팅에 의해 var foo; 가 먼저 실행
console.log(foo); // ① undefined 
var foo = 123; 
console.log(foo); // ② 123 
{ var foo = 456; } 
console.log(foo); // ③ 456
```
#### 변수 할당 단계
1. 선언 단계(변수객체에 변수 등록)
2. 초기화 단계(값을 메모리에 할당 -> undefined)
3. 할당 단계(실제 값 할당)
## 연산자
```js
a == b // 값이 같은지
a === b // 값과 타입이 같은지 / 쓰지말자
a != b // 값이 다른지
a !== b // 값과 타입이 다른지
```
## 타입변환과 단축 평가
### 타입변환이란?
- 타입 강제 전환(명시적 타입변환 or 타입 캐스팅)
```js
var x = 10;

var str = x.toString();
console.log(typeof str);
```
- 물론 동적 타입이기에 알아서 타입변환이 되기도 한다.
### 암묵적 타입 변환
```js
'10' + 2 // '102'
5 * '10' // 50

0 + '' // "0" 
-0 + '' // "0" 
1 + '' // "1" 
-1 + '' // "-1" 
NaN + '' // "NaN" 
Infinity + '' // "Infinity" 
-Infinity + '' // "-Infinity" 
// 불리언 타입 
true + '' // "true" 
false + '' // "false" 
// null 타입 
null + '' // "null" 
// undefined 타입 
undefined + '' // "undefined" 
// 심볼 타입 
(Symbol()) + '' // TypeError: Cannot convert a Symbol value to a string 
// 객체 타입 
({}) + '' // "[object Object]" 
Math + '' // "[object Math]" 
[] + '' // "" 
[10, 20] + '' // "10,20" 
(function(){}) + '' // "function(){}" 
Array + '' // "function Array() { [native code] }"
```
## 명시적 타입 변환
### 문자열 타입 변환
1. String 생성자 함수를 new 연산자 없이 호출
2. Object.prototype.toString 메소드 사용
3. 문자열 연결 연산자 이용
### 숫자 타입 변환
1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
3. - 단항 연결 연산자를 이용하는 방법
4. - 산술 연산자를 이용하는 방법
### 불리언 타입 변환
1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2. \! 부정 논리 연산자를 두번 사용하는 방법

| 단축 평가 표현식         | 평가 결과    |
| ----------------- | -------- |
| true \| anything  | true     |
| false \| anything | anything |
| true && anything  | anything |
| false && anything | false    |
## 객체
### 객체 프로퍼티 접근
#### 프로퍼티 키
- 프로퍼키 키는 문자열 -> 따옴표 무조건 사용
- 예약어 사용 금지
#### 프로퍼티 값 읽기
- 마침표 표기법
	- 프로퍼티 키 : valid / 예약어 X
- 대괄호 표기법(대괄호 안에 있는 프로퍼티 이름은 반드시 문자열)
	- 프로퍼티 키 : valid / 예약어 X
	- 프로퍼티 키 : invalid / 예약어 O -> undefined
- 프로퍼티 삭제는 delete
- for - in : 객체 프로퍼티 순회
- for - of : 배열 요소 순회
## 변경불가성
- 객체 생성 -> 그 상태 변경 불가능
## 함수
### 함수 선언
- function 생성자 사용
### 함수 표기
- 함수 이름 생략도 가능(표현식에서는 생략)
- ! 기명 함수의 함수명을 사용해 호출하면 에러 발생
### 함수 호이스팅
- 함수도 호이스팅 적용
- 함수 선언, 초기화, 할당이 한번에 이루어짐
```js
var res = square(5);

function square(number) {
	return number * number;
}
```
### caller
- 자신을 호출한 함수 의미
### 즉시실행함수
- 정의와 동시에 즉시 실행되는 함수(최초 한번만 호출 / 이후에 호출 불가능)
## 타입체크
- Function.prototype.call 메소드 사용하면  모든 타입의 값 확인 가능
```js
var obj = new Object();
obj.toString();

Object.prototype.toString.call('') // [object String]
```
## 프로토타입 객체
- \[\[Prototype]]
	- 함수를 포함한 모든 객체가 가지고 있음
	- 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킴
	- 함수 객체의 경우 Function.prototype
- prototype 프로퍼티
	- 함수 객체만 가지고 있는 프로퍼티
	- 함수객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체를 가리킨다.
### 객체 생성방법
- 객체 리터럴
- 생성자 함수
- Object() 생성자 함수
## 스코프
### 1. 스코프란?
- 유효범위
- 참조 대상 식별자를 찾아내기 위한 규칙
```js
var x = 'global';

function foo() {
	var x = 'function scope';
	console.log(x);
}

foo();
console.log(x);
```
### 2. 스코프 구분
- 전역 스코프
	- 어디서든 구분가능
- 지역 스코프
	- 함수 코드블록이 만든 스코프 / 함수 자신과 하위 함수에서만 참조가능
### 3. js 스코프 특징
- 블록레벨 스코프 존재
	- 블록 안에서만 유효함
### 4. 전역 스코프
- 모든 곳에서 참조 가능
### 5. 비 블록 레벨 스코프
- 함수 밖에서 선언된 변수는 코드블록 내에서 선언되었다 할지라도 모두 전역 스코프 생성
### 6. 함수 레벨 스코프
- 함수 내에서 선언된 매개변수와 변수는 함수 외부에서 unvalid
- 내부함수에서는 가능
### 7. 렉시컬 스코프
- 함수를 어따가 선언했냐에 따라 범위가 달라짐
### 8. 암묵적 전역
### 9. 최소한 전역변수 사용
- 전역변수 객체를 하나 만들어서 사용하자
### 10. 즉시실행함수를 사용
- 즉시실행함수를 사용하면 전역변수를 만들지 않는다.
