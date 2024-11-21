# JavaScript 문법정리 (1강 ~ 15강)

### 자바스크립트의 기본 문법

- 변수: var, let, const (주로 let 사용)

- 이항 산술 연산자: +, -, \*, /, %

- 비교 연산자
  1. ==: 동등 비교 (x == y) -> x와 y의 값이 같음
  2. ===: 일치 비교 (x === y) -> x와 y의 값과 타입이 같음
  3. !=: 부등 비교 (x != y) -> x와 y의 값이 다름
  4. !==: 불일치 비교 (x !== y) -> x와 y의 값과 타입이 다름

### 객체(Object)

1.  객체 리터럴

    ```javascript
    var emptyObject = {};
    console.log(typeof emptyObject); // object

    var person = {
      name: "Lee",
      gender: "male",
      sayHello: function () {
        console.log("Hi! My name is " + this.name);
      },
    };

    console.log(typeof person); // object
    console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

    person.sayHello(); // Hi! My name is Lee
    ```

2.  Object 생성자 함수

    ```javascript
    var person = new Object();
    // 프로퍼티 추가
    person.name = "Lee";
    person.gender = "male";
    person.sayHello = function () {
      console.log("Hi! My name is " + this.name);
    };

    console.log(typeof person); // object
    console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}

    person.sayHello(); // Hi! My name is Lee
    ```

### Hoisting

    ```javascript
    /\*\*

    - Hoisting
    \*/
    console.log("Hello");
    console.log("World");

    // console.log(name);
    // var name = "코드팩토리";
    // console.log(name);

    /\*\*

    - Hoisting은 무엇인가?
    -
    - 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
    \*/

    console.log(yuJin);
    let yuJin = "안유진";

    /\*\*

    - let, const도 Hoisting이 발생
    - 다만, 이로 인해 발생할 수 있는 버그를 막아준다.
    \*/
    ```

### super_and_override

    ```javascript
    class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;
    }
    }

    class FemaleIdolModel extends IdolModel {
    // 노래/춤
    part;

    constructor(name, year, part) {
        // 부모 클래스를 의미
        super(name, year); // == Idolmodel()
        this.part = part;
    }

    sayHello() {
        // return `안녕하세요 ${this.name}입니다. ${this.part}을 맡고 있습니다.`;
        return `${super.sayHello()} ${this.part}을 맡고 있습니다.`;
    }
    }

    const wonYoung = new FemaleIdolModel("장원영", 2002, "보컬");
    console.log(wonYoung);
    console.log(wonYoung.sayHello());
    ```

### async_theory

    ```javascript
    class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;
    }
    }

    class FemaleIdolModel extends IdolModel {
    // 노래/춤
    part;

    constructor(name, year, part) {
        // 부모 클래스를 의미
        super(name, year); // == Idolmodel()
        this.part = part;
    }

    sayHello() {
        // return `안녕하세요 ${this.name}입니다. ${this.part}을 맡고 있습니다.`;
        return `${super.sayHello()} ${this.part}을 맡고 있습니다.`;
    }
    }

    const wonYoung = new FemaleIdolModel("장원영", 2002, "보컬");
    console.log(wonYoung);
    console.log(wonYoung.sayHello());
    ```

### callbackhell_promise

    ``` javascript
    /**
     * Call back
     */
    // function waitAndRun() {
    //   setTimeout(() => {
    //     console.log(`끝`);
    //   }, 2000);
    // }

    // waitAndRun();

    // function waitAndRun2() {
    //   setTimeout(() => {
    //     console.log(`1번 콜백 끝`);

    //     setTimeout(() => {
    //       console.log(`2번 콜백 끝`);

    //       setTimeout(() => {
    //         console.log(`3번 콜백 끝`);
    //       }, 2000);
    //     }, 2000);
    //   }, 2000);
    // }

    // console.log(waitAndRun2());

    /**
     * Promise
     */
    const timeOutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`완료`);
    }, 2000);
    });

    timeOutPromise.then((res) => {
    console.log(res);
    });

    timeOutPromise.then((res) => {
    console.log(`---then---`);
    console.log(res);
    });

    const getPromise = (seconds) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(`완료`);
        }, seconds * 1000);
    });
    ```
