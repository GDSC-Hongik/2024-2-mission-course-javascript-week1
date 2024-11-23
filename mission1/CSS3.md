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

##### Reset CSS 사용하기
기본적인 HTML 요소의 CSS를 초기화하는 용도로 사용
* Eric Meyer’s reset
* normalize.css

## Selector
style을 적용하고자하는 HTML 요소를 셀렉터로 특정하고 선택된 요소에 스타일을 정의하는 것  
복수 개의 셀렉터를 연속하여 지정할 수 있으며 쉼표( , )로 구분