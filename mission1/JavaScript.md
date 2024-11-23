# 5.4 브라우저 동작 원리
웹 애플리케이션의 자바스크립트는 브라우저에서 HTML, CSS와 함께 실행된다.
HTML 파서는 script 태그를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘긴다.
제어 권한을 넘겨 받은 자바스크립트 엔진은 script 태그 내의 자바스크립트 코드 또는 script 태그의 src 어트리뷰트에 정의된 자바스크립트 파일을 로드하고 파싱하여 실행한다.
자바스크립트의 실행이 완료되면 다시 HTML 파서로 제어 권한을 넘겨서 브라우저가 중지했던 시점부터 DOM 생성을 재개한다.
브라우저는 동기(Synchronous)적으로 HTML, CSS, Javascript을 처리한다
script 태그의 위치에 따라 블로킹이 발생하여 DOM의 생성이 지연될 수 있다
따라서 script 태그의 위치는 중요한 의미를 갖는다.
body 요소의 가장 아래에 자바스크립트를 위치시키는 것은 좋은 아이디어이다. 그 이유는 아래와 같다.
HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.
DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작한다면 에러가 발생한다.

# 5.5 자바스크립트의 기본 문법

## 변수
변수: 값을 저장하고 그 저장된 값을 참조하기 위해 사용
변수 선언시 var 키워드 사용
### ex
```
var x; // 변수 선언
x = 6; // 정수값 할당
```

## 값
자바스크립트는 C나 Java외는 다르게 변수에 할당된 값의 타입에 의해 동적으로 변수의 타입이 결정된다

## 연산자
- 산술 연산자: var area = 5 * 4; // 20
- 문자열 연결 연산자: var str = 'My name is ' + 'Lee'; // "My name is Lee"
- 할당 연산자: var color = 'red'; // "red"
- 비교 연산자: var foo = 3 > 5; // false
- 논리 연산자: var bar = (5 > 3) && (2 < 4);  // true
- 타입 연산자: var type = typeof 'Hi'; // "string"
- 인스턴스 생성 연산자: var today = new Date(); // Sat Dec 01 2018 00:57:19 GMT+0900 (한국 표준시)
신기한점: 피연산자의 타입은 반드시 일치할 필요는 없다. 이때 자바스크립트는 암묵적 타입 강제 변환을 통해 연산을 수행한다.

## 키워드
수행할 동작을 규정한 것 ex)var // 새로운 변수를 생성할 것을 지시한다.

## 주석
//: 한줄주석
/* */ : 여러줄 주석

## 문
각각의 명령, 세미콜론으로 끝남
ex) var x = 5;

## 표현식
ex)
```
// 표현식
5             // 5
5 * 10        // 50
5 * 10 > 10   // true
```

## 문과 표현식의 비교
표현식은 평가되어 값을 만들지만 그 이상의 행위는 할 수 없다
표현식을 통해 평가한 값을 통해 실제로 컴퓨터에게 명령을 하여 무언가를 하는 것은 문이다

## 함수
함수: 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록
ex)
```
function square(number) {
  return number * number;
}
```

## 객체
자바스크립트는 객체기반 스크립트 언어임
자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 “프로토타입”이라고 불리는 객체의 프로퍼티와 메소드를 상속받을 수 있다

## 배열
1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용
ex)
```
var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2
```

# 5.6 데이터 타입과 변수

## 데이터 타입
자바스크립트의 모든 값은 데이터 타입을 가짐

### 원시 타입
- number: C(float, double 등)랑 java랑 달리 하나의 숫자타입만 존재, 모든 수를 실수로 처리
  3가지 특별한 값들도 나타낼 수 있음:
  Infinity : 양의 무한대
  -Infinity : 음의 무한대
  NaN: 산술 연산 불가
- string: ' 또는 " 안에 텍스트 넣어서 생성
  원시 타입이며 변경 불가능, 그래서
  ```
  var str = 'string';
  str[0] = 'S';
  ```
  해도 안바뀜
- boolean: true 혹은 false 뿐
- undefined: undefined뿐, 선언만 되고 값을 할당하지 않았을때 뜸
- null: null뿐, 의도적으로 변수에 값이 없다는걸 나타낼 때 사용
  함수가 호출되었으나 유효한 값을 반환할 수 없는 경우에 뜸
- symbol: 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키(property key)를 만들기 위해 사용

### 객체 타입
데이터와 그 데이터에 관련한 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재
원시 타입(Primitives)을 제외한 나머지 값들(배열, 함수, 정규표현식 등)은 모두 객체

## 변수
변수를 선언할 때는 var 키워드를 사용
선언만 되어 있는 변수는 undefined로 초기값을 갖는다
- var 키워드로 선언한 변수는 중복 선언이 가능
- 같은 변수에 여러 타입의 값을 할당할 수 있다
- 호이스팅:  var 선언문이나 function 선언문 등 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성
- var 키워드로 선언된 변수는 다른 C-family 언어와는 차별되는 특징(설계상 오류)으로 주의를 기울이지 않으면 심각한 문제를 발생시킨다.

# 5.7 연산자
표현식은 평가되어 값을 만들지만 그 이상의 행위는 할 수 없다.
문은 var, let, const, function, class와 같은 선언 키워드를 사용하여 변수나 함수를 생성하기도 하고 if, for, while 문과 같은 제어문을 생성하여 프로그램의 흐름을 제어하기도 한다.

## 산술 연산자
- 이항 산술 연산자: 2개의 피연산자 대상으로 연산
  +, -, *, /, %(나머지)
- 단항 산술 연산자: 1개의 피연산자 대상으로 연산
  ++(증가), --(감소), +(아무효과없음), -(음수를 양수, 양수를 음수로)
  + 단항 연산자, – 단항 연산자는 숫자 타입이 아닌 피연산자에 사용하면 피연산자를 숫자 타입으로 변환하여 반환함
- 문자열 연결 연산자: + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작

## 할당 연산자
=, +=, -=, *=, /=, %= 있음

## 삼항 조건 연산자
```
조건식 ? 조건식이 ture일때 반환할 값 : 조건식이 false일때 반환할 값
```

## typeof 연산자
자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환
typeof 연산자로 null 값을 연산해 보면 null이 아닌 “object”를 반환함 (설계오류)
null 타입을 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용

# 5.8 제어문

## 블록문
0개 이상의 문들을 중괄호로 묶은 것
일반적으로 제어문이나 함수 선언문 등에서 사용

## 조건문
- if-else 문: 주어진 조건식의 평가 결과, 즉 논리적 참, 거짓에 따라 실행할 코드 블록을 결정
  조건식의 평가 결과가 true일 경우, if 문 다음의 코드 블록이 실행, false일 경우, else 문 다음의 코드 블록이 실행
  조건식을 추가하고 싶으면 else if 문을 사용
  만약 코드 블록 내의 문이 하나뿐이라면 중괄호 생략 가능
- switch 문: switch 문의 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 순서를 이동
  case 문은 상황(case)을 의미하는 표현식을 지정하고 콜론으로 마침
  switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없다면 실행 순서는 default 문으로 이동
  case 문을 중복해 사용할 수 있음

## 반복문
주어진 조건식의 평가 결과가 참인 경우 코드 블럭을 실행
후 조건식을 다시 검사하여 여전히 참인 경우 코드 블록을 다시 실행, 조건식이 거짓일 때까지 반복
- for 문(c언어랑 사용법 같음)
- while 문(c언어랑 사용법 같음)
- do...while 문: 코드 블록을 실행하고 조건식을 평가, 코드 블록 무조건 한번 이상 실행됨

## break 문
레이블 문, 반복문, switch 문의 코드 블록 이외에 break 문을 사용하면 SyntaxError(문법 에러)가 발생
레이블 문: 식별자가 붙은 문, 프로그램의 실행 순서를 제어하기 위해 사용

## continue 문
반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동
반복문을 탈출하지는 않는다.

# 5.9 타입 변환과 단축 평가

## 암묵적 타입 변환
자바스크립트는 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도함, 이게 바로 암묵적 타입 변환
표현식을 평가할 때 문맥에 고려하여 엄묵적 타입 변환함
- 문자열 타입으로 변환
  + 연산자는 피연산자 중 하나 이상이 문자열이므로 문자열 연결 연산자로 동작
- 숫자 타입으로 변환
  산술 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
  피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 NaN을 반환
  빈 문자열(‘’), 빈 배열([]), null, false는 0으로, true는 1로 변환, undefined는 변환되지 않아 NaN이 됨
- 불리언 타입으로 변환
  자바스크립트 엔진은 제어문의 조건식을 평가 결과를 불리언 타입으로 암묵적 타입 변환
  false로 평가되는 falsy 값:
  false
  undefined
  null
  0, -0
  NaN
  ’’ (빈문자열)

## 명시적 타입 변환
발자에 의해 의도적으로 값의 타입을 변환하는 것

- 문자열 타입으로 변환하는 법
  String 생성자 함수를 new 연산자 없이 호출하는 방법
  Object.prototype.toString 메소드를 사용하는 방법 
  문자열 연결 연산자를 이용하는 방법

-숫자 타입이 아닌 값을 숫자 타입으로 변환하는 방법
  Number 생성자 함수를 new 연산자 없이 호출하는 방법
  parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
  단항 연결 연산자를 이용하는 방법
  산술 연산자를 이용하는 방법

- 불리언 타입이 아닌 값을 불리언 타입으로 변환하는 방법
  Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
  ! 부정 논리 연산자를 두번 사용하는 방법

## 단축 평가
유용하게 사용될 때:
객체가 null인지 확인하고 프로퍼티를 참조할 때
함수의 인수(argument)를 초기화할 때

# 5.10 객체

## 객체
자바스크립트의 객체: 키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합, 즉
데이터를 의미하는 프로퍼티(property)와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합

- 프로퍼티: 프로퍼티 키(이름)와 프로퍼티 값으로 구성
- 메소드: 객체에 제한되어 있는 함수

## 객체 생성 방법
- 객체 리터럴: 중괄호를 사용하여 객체 생성
```
var person = {
  name: 'Lee',
  gender: 'male',
  sayHello: function () {
    console.log('Hi! My name is ' + this.name);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```
- object 생성자 함수: new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성, 빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성하는 방법
```
// 빈 객체의 생성
var person = new Object();
// 프로퍼티 추가
person.name = 'Lee';
person.gender = 'male';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

person.sayHello(); // Hi! My name is Lee
```
이걸 축약한게 객체 리터럴(= 이 방법 쓸일없음)
- 생성자 함수
  생성자 함수를 사용하면 마치 객체를 생성하기 위한 템플릿(클래스)처럼 사용하여 프로퍼티가 동일한 객체 여러 개를 간편하게 생성할 수 있음
```
// 생성자 함수
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.sayHello = function(){
    console.log('Hi! My name is ' + this.name);
  };
}

// 인스턴스의 생성
var person1 = new Person('Lee', 'male');
var person2 = new Person('Kim', 'female');
```
  생성자 함수 이름은 일반적으로 대문자로 시작, 이것은 생성자 함수임을 인식하도록 도움을 준다
  프로퍼티 또는 메소드명 앞에 기술한 this는 생성자 함수가 생성할 인스턴스(instance)를 가리킨다
  this에 연결(바인딩)되어 있는 프로퍼티와 메소드는 public(외부에서 참조 가능)하다.
  생성자 함수 내에서 선언된 일반 변수는 private(외부에서 참조 불가능)하다. 

## 객체 프로퍼티 접근

### 프로퍼티 키
프로퍼티 키는 일반적으로 문자열(빈 문자열 포함)을 지정, 프로퍼티 키는 문자열이므로 따옴표(‘’ 또는 ““)를 사용함
프로퍼티 값은 모든 값과 표현식이 올 수 있으며 프로퍼티 값이 함수인 경우 이를 메소드라 함
```
var person = {
  'first-name': 'Ung-mo', // first-name은 자바스크립트에서 사용 가능한 유효한 이름이 아니라 ‘-‘ 연산자가 있는 표현식이기 때문에 반드시 따옴표 사용
  'last-name': 'Lee',
  gender: 'male',
  1: 10,
  function: 1 // OK. 하지만 예약어는 사용하지 말아야 한다.
};

console.log(person);
```
표현식을 프로퍼티 키로 사용하려면 키로 사용할 표현식을 대괄호로 묶어야 한다

### 프로퍼티 값 읽기
객체의 프로퍼티 값에 접근하는 방법: 마침표(.) 표기법, 대괄호([]) 표기법

- 프로퍼티 키가 유효한 자바스크립트 이름이고 예약어가 아닌 경우 프로퍼티 값은 마침표 표기법, 대괄호 표기법 모두 사용할 수 있다
- 프로퍼티 이름이 유효한 자바스크립트 이름이 아니거나 예약어인 경우 프로퍼티 값은 대괄호 표기법으로 읽어야 한다.
- 대괄호([]) 표기법을 사용하는 경우, 대괄호 내에 들어가는 프로퍼티 이름은 반드시 문자열이어야 한다.

### 프로퍼티 값 갱신
객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 프로퍼티 값은 갱신됨

### 프로퍼티 동적 생성
객체가 소유하고 있지 않은 프로퍼티 키에 값을 할당하면 하면 주어진 키와 값으로 프로퍼티를 생성하여 객체에 추가

### 프로퍼티 삭제
delete 연산자를 사용하면 객체의 프로퍼티를 삭제할 수 있다

### for-in 문
for-in 문을 사용하면 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다
```
var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male'
};

// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
  console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/
```

배열에는 사용안하는게 좋음
프로퍼티 순서가 보장되지 않고, 배열 요소들만 순회하는게 아님

## pass-by-reference
객체는 프로퍼티를 변경, 추가, 삭제가 가능하므로 변경 가능(mutable)한 값이다.
```
var foo = { val: 10 };
var bar = { val: 10 };
```
변수 foo와 변수 bar는 비록 내용은 같지만 별개의 객체를 생성하여 참조값을 할당하였다. 따라서 변수 foo와 변수 bar의 참조값 즉 어드레스는 동일하지 않다
```
var baz = bar;
```
변수 baz에는 변수 bar의 값을 할당하였다. 결국 변수 baz와 변수 bar는 동일한 객체를 가리키는 참조값을 저장하고 있다. 따라서 변수 baz와 변수 bar의 참조값은 동일하다.

## pass-by-value
원시 타입은 값이 한번 정해지면 변경할 수 없다
```
var a = 1;
var b = a;

console.log(a, b);    // 1  1
console.log(a === b); // true
```

# 5.11 객체와 변경불가성(Immutability)
Immutability(변경불가성): 객체가 생성된 이후 그 상태를 변경할 수 없는 디자인 패턴
- Javascript의 원시 타입(primitive data type)은 변경 불가능한 값임
- 그 외는 전부 변경 가능한 값
```
var statement = 'I am an immutable value'; // string은 immutable value

var otherStr = statement.slice(8, 17);

console.log(otherStr);   // 'immutable'
console.log(statement);  // 'I am an immutable value'
```
slice() 메소드는 statement 변수에 저장된 문자열을 변경하는 것이 아니라 사실은 새로운 문자열을 생성하여 반환하고 있음
```
var arr = [];
console.log(arr.length); // 0

var v2 = arr.push(2);    // arr.push()는 메소드 실행 후 arr의 length를 반환
console.log(arr.length); // 1
```
문자열의 메소드 slice()와는 달리 배열(객체)의 메소드 push()는 직접 대상 배열을 변경함

## 불변 데이터 패턴(immutable data pattern)
의도하지 않은 객체의 변경이 발생하는 원인의 대다수는 “레퍼런스를 참조한 다른 객체에서 객체를 변경”하기 때문
문제의 해결 방법:
객체의 방어적 복사(defensive copy)  Object.assign
불변객체화를 통한 객체 변경 방지  Object.freeze

### Object.assign
소스 객체의 프로퍼티를 복사, 소스 객체의 프로퍼티와 동일한 프로퍼티를 가진 타켓 객체의 프로퍼티들은 소스 객체의 프로퍼티로 덮어쓰기됨
```
사용법: Object.assign(target, ...sources)
```
```
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false

user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim

// 객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true

user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
```
user1 객체를 빈객체에 복사하여 새로운 객체 user2를 생성하였다. user1과 user2는 어드레스를 공유하지 않으므로 한 객체를 변경하여도 다른 객체에 아무런 영향을 주지 않는다.

### Object.freeze
사용하면 불변(immutable) 객체로 만들수 있음
```
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// Object.assign은 완전한 deep copy를 지원하지 않는다.
const user2 = Object.assign({}, user1, {name: 'Kim'});

console.log(user1.name); // Lee
console.log(user2.name); // Kim

Object.freeze(user1);

user1.name = 'Kim'; // 무시된다!

console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }

console.log(Object.isFrozen(user1)); // true

user.address.city = 'Busan'; // 변경된다!
console.log(user); // { name: 'Lee', address: { city: 'Busan' } }
```
하지만 객체 내부의 객체(Nested Object)는 변경가능, 내부 객체까지 변경 불가능하게 만들려면 Deep freeze를 하여야 한다.
```
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);

  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}
```

### Immutable.js
List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 (Permit Immutable) 데이터 구조를 제공한다.
npm을 사용하여 Immutable.js를 설치

# 5.12 함수
함수를 정의하는 방식: 함수 선언문, 함수 표현식, Function 생성자 함수
```
// 함수 선언문
function square(number) {
  return number * number;
}

// 함수 표현식
var square = function(number) {
  return number * number;
};

// Function 생성자 함수: 일반적으로 잘 안씀
var square = new Function('number', 'return number * number');
console.log(square(10)); // 100
```

## 함수 호이스팅

함수 선언문으로 정의된 함수는 함수 선언문으로 함수가 정의되기 이전에 함수 호출이 가능하다.
함수 표현식은 함수 선언문의 경우와는 달리 변수 호이스팅이 발생

## 일급 객체
생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상
Javascript의 함수는 일급객체이므로 흡사 변수와 같이 사용할 수 있으며 코드의 어디에서든지 정의할 수 있다.

## 매게변수
원시 타입 인수는 Call-by-value(값에 의한 호출)로 동작, 함수 내에서 매개변수를 통해 값이 변경되어도 전달이 완료된 원시 타입 값은 변경되지 않음
체형(참조형) 인수는 Call-by-reference(참조에 의한 호출)로 동작, 함수 내에서 매개변수의 참조값이 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경됨

## 함수 객체의 프로퍼티
일반 객체와는 다른 함수만의 프로퍼티를 갖는다.

- arguments 객체는 매개변수 갯수가 확정되지 않은 가변 인자 함수를 구현할 때 유용하게 사용
- caller 프로퍼티: 자신을 호출한 함수를 의미
- length 프로퍼티: 함수 정의 시 작성된 매개변수 갯수를 의미
- name 프로퍼티: 함수명을 나타냄
- `__proto__` 접근자 프로퍼티: 모든 객체의 프로토타입 객체인 Object.prototype 객체의 프로퍼티
  프로토타입 객체: 다른 객체에 공유 프로퍼티를 제공하는 객체
- prototype 프로퍼티: 함수가 객체를 생성하는 생성자 함수로 사용될 때, 생성자 함수가 생성한 인스턴스의 프로토타입 객체를 가리킨다.

## 함수의 다양한 형태 
- 즉시 실행 함수: 함수의 정의와 동시에 실행되는 함수
```
(function () {
  var foo = 1;
  console.log(foo);
}());

var foo = 100;
console.log(foo);
```
- 내부 함수: 함수 내부에 정의된 함수, 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다, 또한 내부함수는 부모함수의 외부에서 접근할 수 없다.
```
function sayHello(name){
  var text = 'Hello ' + name;
  var logHello = function(){ console.log(text); }
  logHello();
}

sayHello('lee');  // Hello lee
logHello('lee');  // logHello is not defined
```
- 재귀 함수: 자기 자신을 호출하는 함수, 탈출 조건을 반드시 만들어야 한다
- 콜백 함수: 정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수
```
setTimeout(function () {
  console.log('1초 후 출력된다.');
}, 1000);
```

# 5.13 타입 체크

## typeof
피연산자의 데이터 타입을 문자열로 반환
null과 배열의 경우 object, 함수의 경우 function를 반환
거의 모든 객체의 경우, object를 반환
그래서 객체 종류 구분하기 빡셈

## Object.prototype.toString
객체를 나타내는 문자열을 반환
Function.prototype.call 메소드를 사용하면 모든 타입의 값의 타입을 알아낼 수 있음
그치만 객체의 상속 관계까지 체크할 수는 없다

## instanceof
피연산자인 객체가 우항에 명시한 타입의 인스턴스인지 여부를 알려줌
이를 이용해 css 함수에 타입 체크 기능을 추가할 수 있음

## 유사 배열 객체
배열인지 체크하기 위해서는 Array.isArray 메소드를 사용
유사 배열 객체는 length 프로퍼티가 있으므로 순회할 수 있으며 call, apply 함수를 사용하여 배열의 메소드를 사용할 수도 있다

# 5.14 프로토타입

## 프로토타입 객체
자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결 ,이러한 부모 객체를 프로토타입이라 함
```
var student = {
  name: 'Lee',
  score: 90
};

// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.
console.log(student.hasOwnProperty('name')); // true

console.dir(student);
```

## `[[Prototype]]` vs prototype 프로퍼티
- `[[Prototype]]`
  함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
  객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키며 함수 객체의 경우 Function.prototype를 가리킨다.
- prototype 프로퍼티
  함수 객체만 가지고 있는 프로퍼티이다.
  함수 객체가 생성자로 사용될 때 이 함수를 통해 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.

## constructor 프로퍼티
프로토타입 객체는 constructor 프로퍼티를 가짐
constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.

## Prototype chain
객체 리터럴을 사용하여 객체를 생성한 경우, 그 객체의 프로토타입 객체는 Object.prototype이다.
어떠한 방식으로 함수 객체를 생성하여도 모든 함수 객체의 prototype 객체는 Function.prototype이다. 생성자 함수도 함수 객체이므로 생성자 함수의 prototype 객체는 Function.prototype이다.

## 프로토타입 객체의 확장
프로토타입 객체도 객체이므로 일반 객체와 같이 프로퍼티를 추가/삭제할 수 있다

## 원시 타입(Primitive data type)의 확장
원시 타입은 객체가 아니라서 프로퍼티나 메소드를 가질수 없는데
원시 타입으로 프로퍼티나 메소드를 호출할 때 원시 타입과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유할 수 있음

## 프로토타입 객체의 변경
프로토타입 객체는 다른 임의의 객체로 변경할 수 있다
주의할 것은 프로토타입 객체를 변경하면
- 프로토타입 객체 변경 시점 이전에 생성된 객체 기존 프로토타입 객체를 ``[[Prototype]]``에 바인딩한다.
- 프로토타입 객체 변경 시점 이후에 생성된 객체 변경된 프로토타입 객체를 ``[[Prototype]]``에 바인딩한다.

## 프로토타입 체인 동작 조건
객체의 프로퍼티를 참조하는 경우, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작함
객체의 프로퍼티에 값을 할당하는 경우, 프로토타입 체인이 동작하지 않는다
- 해당 프로퍼티가 있는 경우, 값을 재할당하고 해당 프로퍼티가 없는 경우는 해당 객체에 프로퍼티를 동적으로 추가하기 때문

# 5.15 스코프
참조 대상 식별자를 찾아내기 위한 규칙

## 스코프의 구분
전역 스코프: 코드 어디에서든지 참조할 수 있다.
지역 스코프: 함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.
변수의 관점에선
전역 변수: 전역에서 선언된 변수이며 어디에든 참조할 수 있다.
지역 변수: 지역(함수) 내에서 선언된 변수이며 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

## 자바스크립트 스코프의 특징
자바스크립트는 함수 레벨 스코프(function-level scope)를 따른다.
- 함수 레벨 스코프: 함수 코드 블록 내에서 선언된 변수는 함수 코드 블록 내에서만 유효하고 함수 외부에서는 유효하지 않는 것

## 전역 스코프(Global scope)
특별한 시작점이 없어서 전역에 변수나 함수를 선언하기 쉬움
```
var global = 'global';

function foo() {
  var local = 'local';
  console.log(global);
  console.log(local);
}
foo();

console.log(global);
console.log(local);
```

## 비 블록 레벨 스코프(Non block-level scope)
```
if (true) {
  var x = 5;
}
console.log(x);
```
변수 x는 코드 블록 내에서 선언됐지만 자바스크립트는 블록 레벨 스코프를 사용하지 않으므로
저 변수 x는 전역 변수임

## 함수 레벨 스코프(Function-level scope)
자바스크립트는 함수 레벨 스코프를 사용함
함수 내에서 선언된 매개변수와 변수는 함수 외부에서는 유효하지 않으므로 변수 b는 지역 변수다
전역변수 x와 지역변수 x가 중복 선언됐을 때 함수 내에선 지역변수를 우선하여 참조함
내부함수는 자신을 포함하고 있는 외부함수의 변수에 접근할 수 있음

중첩 스코프는 가장 인접한 지역을 우선하여 참조함

## 암묵적 전역
```
var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 식별자
  y = 20;
  console.log(x + y);
}

foo(); // 30
```
여기서 y = 20을 window.y = 20으로 해석하여 프로퍼티를 동적 생성한다.
y는 전역 객체의 프로퍼티가 되어 마치 전역 변수처럼 동작한다. 이러한 현상을 암묵적 전역이라 함
y는 변수 선언없이 단지 전역 객체의 프로퍼티로 추가되었을 뿐이라서 변수는 아님
프로퍼티인 y는 delete 연산자로 삭제할 수 있다

## 최소한의 전역변수 사용
전역변수 객체 하나를 만들어 사용하면 전역변수 사용 최소화 가능
```
var MYAPP = {};

MYAPP.student = {
  name: 'Lee',
  gender: 'male'
};

console.log(MYAPP.student.name);
```

## 즉시실행함수를 이용한 전역변수 사용 억제
즉시실행함수 쓰면 전역변수 안만들어도되서 억제 가능
즉시 실행 함수는 즉시 실행되고 그 후 전역에서 바로 사라짐