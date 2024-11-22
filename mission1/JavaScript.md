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

1.  number  
    하나의 숫자 타입만 존재  
    `Infinity` : 양의 무한대  
    `-Infinity` : 음의 무한대  
    `NaN` : 산술 연산 불가

2.  string  
    텍스트 데이터를 나타내는데 사용
    원시 타입이기 때문에 변경 불가능 --=> 새로운 문자열 재할당은 가능

3.  boolean  
    논리적 참, 거짓을 나타내는 true, false

4.  undefined  
    선언 이후 값을 할당하지 않은 변수가 undefined값을 가짐

5.  null  
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

## 객체와 변경불가성

## 함수

어떤 작업을 수행하기 위해 필요한 문들의 집합을 정의한 코드 블록

#### 함수를 정의하는 3가지 방법

1. 함수 선언문  
   `function` 키워드와 이하의 내용으로 구성  
   **함수명**  
   : 함수 선언문의 경우, 함수명은 생략할 수 없음  
   함수명은 함수 몸체에서 자신을 재귀적 호출하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자  
   **매개변수 목록**  
   : 0개 이상의 목록으로 괄호로 감싸고 콤마로 분리  
    다른 언어와의 차이점은 매개변수의 타입을 기술하지 않는다는 것  
   **함수 몸체**  
   : 함수가 호출되었을 때 실행되는 문들의 집합  
   중괄호로 문들을 감싸고 `return`문으로 결과값을 반환할 수 있음

```javascript
function square(number) {
  return number * number;
}
```

2. 함수 표현식

- 무명의 리터럴로 표현이 가능
- 변수나 자료 구조에 저장 가능
- 함수의 파라미터로 전달 가능
- 반환값으로 사용 가능

```javascript
var square = function (number) {
  return number * number;
};
```

함수 표현식 방식으로 정의한 함수는 함수명 생략 가능 -> 익명 함수

```javascript
// 기명 함수 표현식
var foo = function multiply(a, b) {
  return a * b;
};

// 익명 함수 표현식
var bar = function (a, b) {
  return a * b;
};

console.log(foo(10, 5)); // 50
console.log(multiply(10, 5)); // error
```

함수는 일급객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 됨  
함수 호출시 함수명이 아니라 함수를 가리키는 변수명을 사용하여야 함

```javascript
var foo = function (a, b) {
  return a * b;
};

var boo = foo;

console.log(foo(10, 10)); // 100
console.log(bar(10, 10)); // 100
```

3. function 생성자 함수

함수 선언문과 함수 표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데 이것은 결국 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand임  
Function 생성자 함수는 Function.prototype.constructor 프로퍼티로 접근 가능  
=> 하지만 일반적으로 사용하지는 않음

#### 함수 호이스팅

함수 선언문의 경우, 함수 선언의 위치는 상관없이 코드 내 어느 곳에서든지 호출 가능

함수 선언문 사용할 경우 함수 호이스팅이 일어나 소스 내 어느 곳에서든 호출 가능  
함수 표현식 사용할 경우 함수 호이스팅이 아닌 변수 호이스팅이 발생해 TypeError가 발생

#### 매개변수

함수의 작업 실행을 위해 추가적인 정보가 필요할 경우 매개변수 지정

- call-by-value  
  원시 타입 인수는 call-by-value(값에 의한 호출)로 동작  
  함수 호출 시 원시 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달하는 방식  
  이때 함수 내에서 매개변수를 통해 값이 변경되어도 전달이 완료된 원시 타입 값은 변경되지 않음

```javascript
function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x); // 0
```

- call-by-reference

객체형 인수는 call-by-reference(참조에 의한 호출)로 동작  
함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식  
함수 내에서 매개변수의 참조값이 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경

```javascript
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
  obj.gender = "female";
}

var num = 100;
var obj = {
  name: "Lee",
  gender: "male",
};

console.log(num); // 100
console.log(obj); // Object { name: 'Lee', gender: 'male' }

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object { name: 'Kim', gender: 'female' }
```

#### 함수 객체의 프로퍼티

함수는 객체이므로 함수도 프로퍼티를 가질 수 있음

**arguments 프로퍼티**  
arguments 객체는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회가능한 유사 배열 객체이며 함수 내부에서 지역변수처럼 사용됨  
=> 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하게 사용

```javascript
function sum() {
  var res = 0;

  for (var i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

**caller 프로퍼티**

caller 프로퍼티는 자신을 호출한 함수를 의미

```javascript
function foo(func) {
  var res = func();
  return res;
}

function bar() {
  return "caller : " + bar.caller;
}

console.log(foo(bar)); // caller : function foo(func) { ... }
console.log(bar()); // null
```

**length 프로퍼티**

length 프로퍼티는 함수 정의 시 작성된 매개변수 갯수를 의미  
cf ) arguments.length의 값과는 다를 수 있음

```javascript
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1

function baz(x, y) {
  return x * y;
}
console.log(baz.length); // 2
```

**name 프로퍼티**

name 프로퍼티는 함수명을 나타냄. 단, 익명함수의 경우 빈문자열을 값을 가짐

\***\*proto** 접근자 프로퍼티\*\*

모든 객체는 [[Prototype]]이라는 내부 슬롯이 존재  
프로토타입 객체란 프로토타입 기반 객체 지향 프로그래밍의 근간을 이루는 객체로서 객체간의 상속을 구현하기 위해 사용됨. 즉 다른 객체에 공유 프로퍼티를 제공하는 객체를 말함

**prototype 프로퍼티**

prototype 프로퍼티는 함수 객체만이 소유하는 프로퍼티  
함수가 객체를 생성하는 생성자 함수로 사용될 때, 생성자 함수가 생성한 인스턴스의 프로토타입 객체를 가리킴

#### 함수의 다양한 형태

##### 즉시 실행 함수

함수의 정의와 동시에 실행되는 함수  
최초 한번만 호출되며 다시 호출할 수는 없음

```javascript
(function myFunction() {
  var a = 3;
  var b = 5;
  return a * b;
})();
```

##### 내부 함수

함수 내부에 정의된 함수  
내부함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있지만 그 반대는 불가능  
또한 내부함수는 부모함수의 외부에서 접근 불가능

```javascript
function parent(param) {
  var parentVar = param;
  function child() {
    var childVar = "lee";
    console.log(parentVar + " " + childVar); // Hello lee
  }

  child();
  console.log(parentVar + " " + childVar); //Error
}

parent("Hello");
```

##### 재귀 함수

자기 자신을 호출하는 함수 => 탈출 조건 반드시 필요  
예시 : 피보나치 함수, 팩토리얼 함수

##### 콜백 함수

콜백 함수는 함수를 명시적으로 호출하는 방식이 아니라 _특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수_  
매개변수를 통해 전달되고 전달받은 함수의 내부에서 어느 특정 시점에서 실행

```HTML
<!DOCTYPE html>
<html>
  <body>
    <button id="myButton">Click me</button>
    <script>
      var button = document.getElementById('myButton');
      button.addEventListener('click', function() {
        console.log('button clicked');
      });
    </script>
  </body>
</html>
```

콜백 함수는 주로 비동기식 처리 모델에 사용됨  
비동기식 처리 모델이란 처리가 종료하면 호출될 함수를 미리 매개변수에 전달하고 처리가 종료하면 콜백함수를 호출하는 것  
콜백 함수는 콜백 큐에 들어가 있다가 해당 이벤트가 발생하면 호출됨. 콜백 함수는 클로저이므로 콜백 큐에 단독으로 존재하다가 호출되어도 콜백 함수를 전달받은 함수의 변수에 접근 가능

```javascript
function doSomething() {
  var name = 'Lee';

  setTimeout(funtion() {
    console.log('My name is ' + name);
  }, 100);
}

doSomething(); // My name is Lee
```

## 프로토타입

자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있음. 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 함. 이러한 부모 객체를 **프로토타입 객체** 또는 줄여서 **프로토타입**이라 함.

#### constructor 프로퍼티

객체의 입장에서 자신을 생성한 객체를 가리킴

```javascript
function Person(name) {
  this.name = name;
}

var foo = new Person("Lee");
```

Person() 생성자 함수에 의해 생성된 객체를 foo라고 하면, foo 객체를 생성한 객체는 Person() 생성자 함수임  
foo 객체 입장에서 자신을 생성한 객체는 Person() 생성자 함수이며 foo 객체의 프로토타입 객체는 Person.prototype임. 따라서 프로토타입 객체 Person.prototype의 constructor 프로퍼티는 Person() 생성자 함수를 가리킴

#### prototype chain

특정 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]]이 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색 => 프로토타입 체인

#### 프로토타입 객체의 확장

프로토타입 객체도 객체이므로 프로퍼티를 추가/삭제할 수 있고 즉시 프로토타입 체인에 반영됨

```javascript
function Person(name) {
  this.name = name;
}

var foo = new Person("Lee");

Person.prototype.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};

foo.sayHello();
```

#### 원시 타입의 확장

원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 됨  
원시 타입은 객체가 아니므로 프로퍼티나 메소드 직접 추가는 불가능하지만 String 객체의 프로토타입 객체 String.prototype에 메소드를 추가하면 원시 타입, 객체 모두 메소드 사용이 가능

#### 프로토타입 객체의 변경

결정된 프로토타입 객체는 다른 임의의 객체로 변경 가능  
주의점 : 프로토타입 객체를 변경하면

- 프로토타입 객체 변경 시점 이전에 생성된 객체 : 기존 프로토타입 객체를 [[Prototype]]에 바인딩함
- 프로토타입 객체 변경 시점 이후에 생성된 객체 : 변경된 프로토타입 객체를 [[Prototype]]에 바인딩함

```javascript
function Person(name) {
  this.name = name;
}

var foo = new Person("Lee");

//프로토타입 객체의 변경
Person.prototype = { gender: "male" };

var bar = new Person("Kim");

console.log(foo.gender); //undefined
console.log(bar.gender); // 'male'

console.log(foo.constructor); // Person(name)
console.log(bar.constructor); // Object()
```

#### 프로토타입 체인 동작 조건

객체의 프로퍼티를 참조하는 경우, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작.  
객체의 프로퍼티에 값을 할당하는 경우 프로토타입 체인이 동작하지 않음

## 스코프

스코프는 참조 대상 식별자를 찾아내기 위한 규칙

프로그래밍은 변수를 선언하고 값을 할당하며 변수를 참조하는 기본적인 기능을 제공하며 이것으로 프로그램 상태를 관리할 수 있음  
변수는 전역 또는 코드 블록이나 함수 내에 선언하며 코드 블록이나 함수는 중첩될 수 있음  
식별자는 자신이 어디에서 선언됐는지에 의해 자신이 유효한 법위를 가짐

- 전역 스코프 : 코드 어디에서든지 참조할 수 있음
- 지역 스코프 : 함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조 가능

#### 자바스크립트 스코프의 특징

다른 언어와 달리 자바스크립트는 함수 레벨 스코프를 따른다. 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 함수 외부에서는 유효하지 않다는 것이다.

단, `let` 키워드 사용시 가능

```javascript
var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x); // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y); // 0
```

#### 비 블록 레벨 스코프

```javascript
if (true) {
  var x = 5;
}
console.log(x);
```

변수 x는 코드 블록 내에서 선언되었지만 자바스크립트는 블록 레벨 스코프를 사용하지 않으므로 함수 밖에서 선언된 변수는 코드 블록 내에서 선언되었다할지라도 모두 전역 스코프를 갖게 됨
