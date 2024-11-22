# JavaScript

## 기본 문법

#### 변수

값을 저장하고 그 저장된 값을 참조하기 위해 사용  
`var` 키워드 사용

```javascript
var x;
x = 6;
```

#### 값

리터럴 : 소스코드 안에서 직접 만들어 낸 상수 값 자체  
 값을 구성하는 최소 단위

7가지 데이터 타입

- 원시 타입 : number, string, boolean, null, undefined, symbol
- 객체 타입 : object

자바스크립트는 변수를 선언할 때 데이터 타입을 미리 지정하지 않음  
변수에 할당된 값의 타입에 의해 동적으로 변수의 타입이 결정

#### 연산자

연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다. 이때 연산의 대상을 피연산자라 하는데 피연산자의 타입은 반드시 일치할 필요는 없음

#### 키워드

키워드는 수행할 동작을 규정한 것

예시 ) var : 변수 선언  
function : 함수 선언  
while : 반복문

#### 함수

함수란 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록

```javascript
function square(number) {
  return number * number;
}

square(2); // 4 출력
```

#### 객체

자바스크립트에서는 원시 타입을 제회한 모든 값들은 모두 객체  
자바스크립트 객체는 키(이름)와 값으로 구성된 프로퍼티의 집합  
프로퍼티 값이 함수인 경우를 메소드라 부름

```javascript
var person = {
  name: "Lee",
  gender: "male",
  sayHello: function () {
    console.log("Hi! My name is " + this.name);
  },
};

console.log(typeof person); // object
console.log(person); // {name: 'Lee', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee
```

=> 객체는 데이터를 의미하는 프로퍼티와 데이터를 참조하고 조작할 수 있는 동작을 의미하는 메소드로 구성된 집합

#### 배열

배열은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용

```javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr[3]); // 4
```

## 데이터 타입과 변수

데이터 타입 : 프로그래밍 언어에서 사용할 수 있는 데이터의 종류

### 원시 타입

변경 불가능한 값

1. number

하나의 숫자 타입만 존재  
`Infinity` : 양의 무한대  
`-Infinity` : 음의 무한대  
`NaN` : 산술 연산 불가

2. string

텍스트 데이터를 나타내는데 사용
원시 타입이기 때문에 변경 불가능 --=> 새로운 문자열 재할당은 가능

3. boolean

논리적 참, 거짓을 나타내는 true, false

4. undefined

선언 이후 값을 할당하지 않은 변수가 undefined값을 가짐

5. null

의도적으로 변수에 값이 없다는 것을 명시할 때 사용  
함수가 호출되었으나 유효한 값을 반환할 수 없는 경우 명시적으로 null값 반환

null 타입 확인하고 싶을 때는 일치 연산자(===) 사용하기

```javascript
var foo = null;
console.log(foo === null); // true
console.log(typeof foo); // object
```

6. symbol

이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용

```javascript
var key = symbol("key");
console.log(typeof key); //symbol

var obj = {};
obj[key] = "value";
console.log(obj[key]); // value
```

### 객체 타입

이름과 값을 가지는 데이터를 의미하는 프로퍼티와 동작을 의미하는 메소드를 포함할 수 있는 독립적 주체

### 변수

변수는 프로그램에서 사용되는 데이터를 일정 기간동안 기억하여 필요한 때에 다시 사용하기 위해 데이터에 고유의 이름인 식별자를 명시한 것  
`var`, `let`, `const` 키워드를 사용하여 선언하고 할당 연산자를 사용해 값을 할당함

## 연산자

#### 동등 / 일치 비교 연산자

== : 동등 비교, x와 y의 값이 같음  
=== : 일치 비교, x와 y의 값과 타입이 같음

NaN은 자신과 일치하지 않는 유일한 값

#### 삼항 조건 연산자

조건식 ? 조건식이 true일때 반환값 : 조건식이 false일때 반환값

##

#### 단축 평가

논리곱 연산자 `&&`는 두 피연산자가 모두 true일 때 true 반환  
논리합 연산자 `||`는 두 피연산자 중 하나만 true여도 true 반환

```javascript
"Cat" && "Dog"; //Dog
"Cat" || "Dog"; //Cat
```

1. 첫번째 피연산자 'Cat'는 true로 평가되지만 && 연산자를 사용하므로 두번째 피연산자까지 평가해 보아야 표현식 평가 가능
2. 두번째 피연산자 'Dog'는 true로 평가 -> 두 피연산자가 모두 true로 평가되어 논리곱 연산의 결과를 결정한 것은 두번째 피연산자인 'Dog'이다.
3. 논리곱 연산자 `&&`는 논리 연산의 결과를 결정한 두번째 피연산자의 평가 결과, 즉 문자열 'Dog'를 그대로 반환

4. 첫번째 피연산자 'Cat'는 true로 평가 -> || 연산자 사용하므로 두번째 피연산자까지 평가해 보지 않아도 표현식 평가 가능
5. 논리합 연산자 `||`는 논리 연산의 결과를 결정한 첫번째 피연산자의 평가 결과 즉, 문자열 'Cat'를 그래도 반환

## 객체

#### 프로퍼티

프로퍼티 키(이름) & 프로퍼티 값으로 구성

- 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
- 프로퍼티 값 : 모든 값

#### 메소드

프로퍼티 값이 합수일 경우, 일반 함수와 구분하기 위해 메소드 사용

#### 프로퍼티 값 읽기

마침표 표기법, 대괄호 표기법 두가지 방법 존재

프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우 두가지 방법 모두 사용 가능  
프로퍼티 이름이 유효한 자바스키립트 이름이 아니거나 예약어인 경우 프로퍼티 값은 대괄호 표기법으로 읽어야 함
대괄호 표기법 사용하는 경우, 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열

#### for-in 문

for-in문을 사용하면 객체에 포함된 모든 프로퍼티에 대한 루프를 수행할 수 있음

```javascript
var person = {
  "first-name": "Ung-mo",
  "last-name": "Lee",
  gender: "male",
};

for (var prop in person) {
  console.log(prop + ":" + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/
```
