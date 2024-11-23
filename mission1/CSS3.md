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
가상 클래스는 요소의 특정 상태(마우스가 올라와 있을때, 링크를 방문했을 때와 아직 방문하지 않았을 때, 포커스가 들어와 있을 때 등)에 따라 스타일을 정의할 때 사용된다.  
가상 클래스는 마침표(.) 대신 콜론(:)을 사용한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.
* 링크 셀렉터(Link pseudo-classes), 동적 셀렉터(User action pseudo-classes)
`:link` 셀렉터가 방문하지 않은 링크일 때  
`:visited` 셀렉터가 방문한 링크일 때
`:hover` 셀렉터에 마우스가 올라와 있을 때
`:active` 셀렉터가 클릭된 상태일 때
`:focus` 셀렉터에 포커스가 들어와 있을 때
* UI 요소 상태 셀렉터(UI element states pseudo-classes)
`:checked` 셀렉터가 체크 상태일 때
`:enabled` 셀렉터가 사용 가능한 상태일 때
`:disabled` 셀렉터가 사용 불가능한 상태일 때
* 구조 가상 클래스 셀렉터(Structural pseudo-classes)
`:first-child` 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택
`:last-child` 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택
`:nth-child(n)` 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택
`:nth-last-child(n)` 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택
`:first-of-type` 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택
`:last-of-type` 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택
`:nth-of-type(n)` 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택
`:nth-last-of-type(n)` 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택
* 부정 셀렉터(Negation pseudo-class)
`:not(셀렉터)` 셀렉터에 해당하지 않는 모든 요소를 선택
* 정합성 체크 셀렉터(validity pseudo-class)
`:valid(셀렉터)` 정합성 검증이 성공한 input 요소 또는 form 요소를 선택
`:invalid(셀렉터)` 정합성 검증이 실패한 input 요소 또는 form 요소를 선택

#### 가상 요소 셀렉터 (Pseudo-Element Selector)
* 요소의 특정 부분(요소 콘텐츠의 첫글자 또는 첫줄, 요소 콘텐츠의 앞 또는 뒤 등)에 스타일을 적용하기 위하여 사용  
* 가상 요소에는 두개의 콜론(::)을 사용한다. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없다.
`::first-letter` 콘텐츠의 첫글자를 선택
`::first-line` 	콘텐츠의 첫줄을 선택, 블록 요소에만 적용
`::after` 	콘텐츠의 뒤에 위치하는 공간을 선택, 일반적으로 content 프로퍼티와 함께 사용
`::before` 콘텐츠의 앞에 위치하는 공간을 선택, 일반적으로 content 프로퍼티와 함께 사용
`::selection` 드래그한 콘텐츠를 선택, iOS Safari 등 일부 브라우저에서 동작 안 함

## Units
#### size
* **절대단위** px: 픽셀
* **상대단위(상속 사이즈)** %: 백분율, em: 배수단위
* **상대단위(root 기준)** rem: 배수단위
* **Viewport 단위** vw: viewport 너비의 1/100, vh: viewport 높이의 1/100, vmin: viewport 너비 또는 높이 중 작은 쪽의 1/100, vmax: viewport 너비 또는 높이 중 큰 쪽의 1/100
#### color
#000000, rgb(Red, Green, Blue), rgba(Red, Green, Blue, Alpha/투명도),  hsl(Hue/색상, Saturation/채도, Lightness/명도), hsla(Hue, Saturation, Lightness, Alpha), color keywords

## Box Model
content, padding/margin, width/height, border, border-radius 둥근 모서리

## 디스플레이
#### display 프로퍼티
* block(div, h, p, ol, ul, li, hr, tablem form)
  * 항상 새로운 라인에서 시작
  * width, height, margin, padding 프로퍼티 지정 가능  
  * lock 레벨 요소 내에 inline 레벨 요소를 포함 가능
* inline(span, a strong, img, br, input, select textarea, button)
  * 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치
  * width, height, margin-top, margin-bottom 프로퍼티를 지정 불가능
  * inline 레벨 요소 내에 block 레벨 요소를 포함 불가능, 일반적으로 block 레벨 요소에 포함되어 사용
* inline-block
  * block과 inline 레벨 요소의 특징을 모두 갖는다.
  * inline 레벨 요소와 같이 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정 가능

#### visibility 프로퍼티
요소를 보이게 할 것인지 보이지 않게 할 것인지를 정의
* visible: 해당 요소를 보이게 한다 (기본값)
* hidden: 해당 요소를 보이지 않게 한다. display: none;은 해당 요소의 공간까지 사라지게 하지만 visibility: hidden;은 해당 요소의 공간은 사라지지 않고 남아있게 된다.
* collapse: table 요소에 사용하며 행이나 열을 보이지 않게 한다.
* none: table 요소의 row나 column을 보이지 않게 한다.

#### opacity 프로퍼티
요소의 투명도를 정의  
0.0 ~ 1.0의 값을 입력하며 0.0은 투명, 1.0은 불투명을 의미

## Background
#### background-image 프로퍼티
요소에 배경 이미지를 지정
#### background-repeat 프로퍼티
배경 이미지의 반복(수직, 수평 또는 수직과 수평 모두)을 지정  
#### background-size 프로퍼티
배경 이미지의 사이즈를 지정  
배경 이미지의 고유 비율을 유지하기 때문에 설정에 따라 이미지의 일부가 보이지 않을 수 있음
#### background-attachment 프로퍼티
화면이 스크롤되더라도 배경이미지는 스크롤되지 않고 고정되어 있게 하려면 background-attachment 프로퍼티에 fixed 키워드를 지정
#### background-position 프로퍼티
일반적으로 background-image는 좌상단부터 이미지를 출력  
이때 background-position 프로퍼티를 사용하면 이미지의 좌표(xpos, ypos) 지정 가능
#### background-color 프로퍼티
요소의 배경 색상을 지정

## Font & Text
#### Font
* font-size 프로퍼티
* font-family 프로퍼티
* font-style / font-weight 프로퍼티
* font Shorthand
* line-height 프로퍼티
텍스트의 높이를 지정
* letter-spacing 프로퍼티
글자 사이의 간격을 지정
#### Text
* text-align 프로퍼티
텍스트의 수평 정렬을 정의
* text-decoration 프로퍼티
링크 underline 제거, 텍스트에 underline, overline, line-through 추가
* white-space 프로퍼티
공백(space), 들여쓰기(tab), 줄바꿈(line break)
* text-overflow 프로퍼티
모 영역을 벗어난 wrapping(자동줄바꿈)이 되지 않은 텍스트의 처리 방법을 정의
* word-wrap 프로퍼티, word-break 프로퍼티
한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 정의  
`word-wrap` 프로퍼티는 단어를 어느 정도는 고려하여 개행하지만(.,- 등을 고려) `word-break: break-all;`는 단어를 고려하지 않고 부모 영역에 맞추어 강제 개행

## Position
요소의 위치를 정의  
top, bottom, left, right 프로퍼티와 함께 사용하여 위치를 지정
