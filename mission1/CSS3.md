## Syntax
#### 셀렉터 (Selector, 선택자)
<img src="https://poiemaweb.com/img/css-syntax.png" width="60%">  
이와 같은 Rule Set의 집합을 스타일시트(Style Sheet)라 한다

#### 프로퍼티 (Property / 속성)
* 셀렉터로 HTML 요소를 선택하고 {} 내에 프로퍼티(속성)와 값을 지정하는 것으로 다양한 style을 정의할 수 있음
* 여러 개의 프로퍼티를 연속해서 지정할 수 있으며 세미콜론(;)으로 구분

#### 값 (Value / 속성값)
해당 프로퍼티에 사용할 수 있는 값을 “키워드”나 “크기 단위” 또는 “색상 표현 단위” 등의 특정 단위로 지정

#### HTML과 CSS의 연동
* Link style
HTML에서 외부에 있는 CSS 파일을 로드하는 방식  
`<link rel="stylesheet" href="파일경로">`  
* Embedding style
HTML 내부에 CSS를 포함시키는 방식  
```html
<head>
    <style>
        h1 { Property: Value; }
        p  { Property: Value; }
    </style>
</head>
```
* Inline style
HTML요소의 style 프로퍼티에 CSS를 기술하는 방식  
`<h1 style="Property: Value"> contens </h1>`

#### Reset CSS 사용하기
기본적인 HTML 요소의 CSS를 초기화하는 용도로 사용
* Eric Meyer’s reset
* normalize.css

## Selector
style을 적용하고자하는 HTML 요소를 셀렉터로 특정하고 선택된 요소에 스타일을 정의하는 것  
복수 개의 셀렉터를 연속하여 지정할 수 있으며 쉼표( , )로 구분

#### 전체 셀렉터 (Universal Selector)
```html
   <style>
      * { Property: Value; }
   </style>
```

#### 태그 셀렉터 (Tag Selector)
```html
   <style>
      tag { Property: Value; }
   </style>
```

#### ID 셀렉터 (ID Selector)
id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.  
id 어트리뷰트 값은 중복될 수 없는 유일한 값이다.
```html
<head>
  <style>
    /* id 어트리뷰트 값이 p1인 요소를 선택 */
    #p1 { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div class="container">
    <p id="p1">paragraph 1</p>
    <p id="p2">paragraph 2</p>
  </div>
  <p>paragraph 3</p>
</body>
```

#### 클래스 셀렉터 (Class Selector)
class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.  
class 어트리뷰트 값은 중복될 수 있다.
```html
<head>
  <style>
    /* class 어트리뷰트 값이 container인 모든 요소를 선택 */
    /* color 어트리뷰트는 자식 요소에 상속된다. */
    .container { color: red; }
    /* not supported in IE */
    #p2 { color: initial; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div class="container">
    <p id="p1">paragraph 1</p>
    <p id="p2">paragraph 2</p>
  </div>
  <p>paragraph 3</p>
</body>
```
HTML 요소에 class 어트리뷰트 값은 공백으로 구분하여 여러 개 지정할 수 있다.  
클래스 셀렉터를 사용하여 미리 스타일을 정의해 두고, HTML 요소는 이미 정의되어 있는 클래스를 지정하는 것으로 필요한 스타일을 지정 -> 재사용 측면에서 유용

#### 어트리뷰트 셀렉터 (Attribute Selector)
* 지정된 어트리뷰트를 갖는 모든 요소를 선택한다.
```html
   <style>
      셀렉터[어트리뷰트] { Property: Value; }
   </style>
```
* 지정된 어트리뷰트를 가지며 지정된 값과 어트리뷰트의 값이 일치하는 모든 요소를 선택한다.
```html
   <style>
      셀렉터[어트리뷰트="값"] { Property: Value; }
   </style>
```
* 지정된 어트리뷰트의 값이 지정된 값을 (공백으로 분리된) 단어로 포함하는 요소를 선택한다.
```html
   <style>
      셀렉터[어트리뷰트~="값"] { Property: Value; }
   </style>
```
* 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트 값 뒤 연이은 하이픈(“값-“)으로 시작하는 요소를 선택한다.
```html
   <style>
      셀렉터[어트리뷰트|~="값"] { Property: Value; }
   </style>
```
* 지정된 어트리뷰트 값으로 시작하는 요소를 선택한다.
```html
   <style>
      셀렉터[어트리뷰트^="값"] { Property: Value; }
   </style>
```
* 지정된 어트리뷰트 값으로 끝나는 요소를 선택한다.
```html
   <style>
      셀렉터[어트리뷰트$="값"] { Property: Value; }
   </style>
```
* 지정된 어트리뷰트 값을 포함하는 요소를 선택한다.
```html
   <style>
      셀렉터[어트리뷰트*="값"] { Property: Value; }
   </style>
```

#### 복합 셀렉터 (Combinator)
* 후손 셀렉터 (Descendant Combinator)
셀렉터A의 모든 후손(하위) 요소 중 셀렉터B와 일치하는 요소를 선택한다.
```html
   <style>
      셀렉터A 셀렉터B { Property: Value; }
   </style>
```
* 자식 셀렉터 (Child Combinator)
셀렉터A의 모든 자식 요소 중 셀렉터B와 일치하는 요소를 선택한다.
```html
   <style>
      셀렉터A > 셀렉터B { Property: Value; }
   </style>
```
* 형제(동위) 셀렉터 (Sibling Combinator)
형제(동위) 셀렉터는 형제 관계(동위 관계)에서 뒤에 위치하는 요소를 선택한다.
  * 인접 형제 셀렉터(Adjacent Sibling Combinator)
  셀렉터A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터B 요소를 선택한다. A와 B 사이에 다른 요소가 존재하면 선택되지 않는다.
  ```html
   <style>
      셀렉터A + 셀렉터B { Property: Value; }
   </style>
  ```
  * 일반 형제 셀렉터(General Sibling Combinator)
  셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소를 모두 선택한다.
  ```html
   <style>
      셀렉터A ~ 셀렉터B { Property: Value; }
   </style>
  ```

#### 가상 클래스 셀렉터 (Pseudo-Class Selector)
가상 클래스는 요소의 특정 상태에 따라 스타일을 정의할 때 사용된다.  
가상 클래스는 마침표(.) 대신 콜론(:)을 사용한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.